"use client";

import { motion } from "framer-motion";

export function CircularBadge({ text = "VIEW MY WORK • " }: { text?: string }) {
  return (
    <motion.div
      className="relative w-28 h-28 flex items-center justify-center rounded-full pointer-events-auto cursor-pointer"
      animate={{ rotate: 360 }}
      transition={{ duration: 15, ease: "linear", repeat: Infinity }}
      whileHover={{ scale: 1.05 }}
    >
      <svg className="w-full h-full text-current" viewBox="0 0 100 100">
        <path
          id="textPath"
          d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
          fill="none"
        />
        <text className="text-[0.55rem] font-mono tracking-widest uppercase fill-current">
          <textPath href="#textPath" startOffset="0%">
            {text}{text}{text}
          </textPath>
        </text>
      </svg>
      <div className="absolute w-1.5 h-1.5 bg-current rounded-full" />
    </motion.div>
  );
}
