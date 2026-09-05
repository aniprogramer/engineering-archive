"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function WorkTransition() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // Kinetic movement: subtle letter separation and horizontal translation
  const letterSpacing = useTransform(scrollYProgress, [0, 0.5, 1], ["0.05em", "0.25em", "0.05em"]);
  const xOffset = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.88, 1.04, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.4]);

  return (
    <section
      id="work"
      data-nav-theme="dark"
      ref={container}
      className="bg-black text-accent h-[110vh] md:h-[130vh] flex flex-col items-center justify-center overflow-hidden z-20 relative border-t border-b border-white/10"
    >
      {/* Background subtle grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <motion.div
        style={{ scale, opacity }}
        className="text-center relative z-10 select-none px-4"
      >
        <div className="font-mono text-[0.7rem] tracking-[0.4em] uppercase text-white/40 mb-6">
          CHAPTER 04 // ARCHIVE
        </div>

        <motion.h2
          style={{ letterSpacing, x: xOffset }}
          className="text-[clamp(5rem,18vw,17rem)] uppercase leading-[0.8] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-cream via-accent to-accent/60"
        >
          WORK
        </motion.h2>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 font-mono text-[var(--text-meta)] tracking-widest text-accent/65 uppercase">
          <span>SELECTED CODEBASES</span>
          <span className="hidden sm:inline text-white/20">/</span>
          <span>SYSTEM ARCHITECTURE</span>
          <span className="hidden sm:inline text-white/20">/</span>
          <span>2024–2026</span>
        </div>
      </motion.div>
    </section>
  );
}
