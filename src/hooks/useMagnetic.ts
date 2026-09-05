"use client";

import { useRef, useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export function useMagnetic(strength = 0.5, threshold = 80) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const element = ref.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (!element) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < threshold) {
        x.set(deltaX * strength);
        y.set(deltaY * strength);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    element?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      element?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [x, y, strength, threshold]);

  return { ref, x: springX, y: springY };
}
