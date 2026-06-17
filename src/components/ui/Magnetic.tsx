"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/useMagnetic";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  threshold?: number;
  className?: string;
}

export function Magnetic({ children, strength = 0.3, threshold = 60, className }: MagneticProps) {
  const { ref, x, y } = useMagnetic(strength, threshold);

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
