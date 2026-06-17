"use client";

import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export type CursorState = "default" | "text" | "button" | "project" | "view" | "link";

export function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Use Motion Values for high performance
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the main cursor (interpolation)
  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Trailing particles (extremely subtle)
  const trailX = [useMotionValue(0), useMotionValue(0), useMotionValue(0), useMotionValue(0)];
  const trailY = [useMotionValue(0), useMotionValue(0), useMotionValue(0), useMotionValue(0)];
  
  const trailSpringsX = trailX.map((v, i) => useSpring(v, { damping: 40 + i * 10, stiffness: 200 - i * 20 }));
  const trailSpringsY = trailY.map((v, i) => useSpring(v, { damping: 40 + i * 10, stiffness: 200 - i * 20 }));

  const updatePosition = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    
    // Use requestAnimationFrame for extra smoothness
    requestAnimationFrame(() => {
      mouseX.set(clientX);
      mouseY.set(clientY);
      
      // Update trail with slight delay
      trailX.forEach((v, i) => {
        setTimeout(() => v.set(clientX), (i + 1) * 25);
      });
      trailY.forEach((v, i) => {
        setTimeout(() => v.set(clientY), (i + 1) * 25);
      });
    });

    if (!isVisible) setIsVisible(true);
  }, [mouseX, mouseY, trailX, trailY, isVisible]);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorEl = target.closest('[data-cursor]');
      const state = cursorEl?.getAttribute('data-cursor') as CursorState;
      const text = cursorEl?.getAttribute('data-cursor-text');

      if (state) {
        setCursorState(state);
        setCursorText(text || "");
      } else {
        // Fallback detection
        if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('button')) {
          setCursorState("button");
        } else if (['P', 'H1', 'H2', 'H3', 'H4', 'SPAN', 'LI'].includes(target.tagName) && !target.closest('a') && !target.closest('button')) {
          setCursorState("text");
        } else {
          setCursorState("default");
          setCursorText("");
        }
      }
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", () => setIsVisible(false));
    document.addEventListener("mouseenter", () => setIsVisible(true));

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [updatePosition]);

  if (isTouchDevice) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Trail Particles (Very Subtle) */}
            {trailSpringsX.map((springX, i) => (
              <motion.div
                key={i}
                style={{
                  x: springX,
                  y: trailSpringsY[i],
                  translateX: "-50%",
                  translateY: "-50%",
                  opacity: 0.1 - (i * 0.02),
                  scale: 0.8 - (i * 0.1)
                }}
                className="absolute w-4 h-4 rounded-full border border-accent/30"
              />
            ))}

            {/* Outer Ring */}
            <motion.div
              style={{
                x: cursorX,
                y: cursorY,
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{
                width: cursorState === "default" ? 24 : cursorState === "text" ? 2 : 90,
                height: cursorState === "default" ? 24 : cursorState === "text" ? 28 : 90,
                borderRadius: cursorState === "text" ? "0%" : "100%",
                borderWidth: cursorState === "text" ? 0 : 1,
                backgroundColor: cursorState === "text" ? "var(--accent)" : "transparent",
                borderColor: "var(--accent)",
              }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="absolute flex items-center justify-center overflow-hidden mix-blend-difference"
            >
              <AnimatePresence>
                {cursorText && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-accent"
                  >
                    {cursorText}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Inner Dot */}
            <motion.div
              style={{
                x: mouseX,
                y: mouseY,
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{
                scale: cursorState === "text" ? 0 : 1,
                opacity: cursorState === "text" ? 0 : 1,
              }}
              className="absolute w-1.5 h-1.5 bg-accent rounded-full"
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
