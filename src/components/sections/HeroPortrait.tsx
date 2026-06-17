"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function HeroPortrait() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Refined Parallax effect (Slower than page, max 15px)
  const y = useTransform(scrollY, [0, 1000], [0, 15]);
  const rotateParallax = useTransform(scrollY, [0, 1000], [0, 2]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="relative group w-full max-w-[450px] aspect-[4/5] mx-auto lg:ml-auto"
      style={{ y, rotateZ: rotateParallax }}
    >
      {/* Background Depth Layer (Offset shadow) */}
      <div className="absolute inset-4 -right-6 -bottom-6 border border-border bg-surface/30 -z-20 blueprint-grid opacity-10 transition-transform duration-700 group-hover:translate-x-1 group-hover:translate-y-1" />
      
      {/* Background Blueprint/Grain Layer */}
      <div className="absolute inset-2 -right-2 -bottom-2 border border-border bg-surface/50 -z-10 blueprint-grid opacity-20 transition-transform duration-700 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
      
      {/* Ambient Copper Glow (Subtle) */}
      <div className="absolute -inset-10 bg-accent/5 rounded-full blur-[80px] -z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

      {/* Main Industrial Frame */}
      <div className="relative w-full h-full p-3 bg-surface border border-border shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-700 group-hover:border-accent/30">
        {/* Engineering Corner Details */}
        <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-accent/20 transition-colors group-hover:border-accent/50" />
        <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-accent/20 transition-colors group-hover:border-accent/50" />
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-accent/20 transition-colors group-hover:border-accent/50" />
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-accent/20 transition-colors group-hover:border-accent/50" />

        {/* Inner Border Detail */}
        <div className="absolute inset-1 border border-border/40 pointer-events-none" />

        {/* Image Container */}
        <motion.div 
          whileHover={{ rotate: 1, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="relative w-full h-full bg-background overflow-hidden"
        >
          {/* Grain Overlay (Tasteful) */}
          <div className="absolute inset-0 z-20 opacity-20 pointer-events-none grain" />
          
          <Image
            src="/images/profile.jpg"
            alt="Aniket De Portrait"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 450px"
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-90 group-hover:opacity-100 group-hover:scale-110"
          />

          {/* Reflection Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10" />
          
          {/* Depth Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-60 z-10" />
        </motion.div>

        {/* Copper Accent Border (Refined) */}
        <div className="absolute inset-0 border-[0.5px] border-accent/10 group-hover:border-accent/40 transition-colors pointer-events-none z-30 shadow-[inset_0_0_20px_rgba(201,123,66,0.02)] group-hover:shadow-[inset_0_0_30px_rgba(201,123,66,0.05)]" />
      </div>

      {/* Meta Labels & Coordinate Markers */}
      <div className="absolute -bottom-8 left-0 right-0 flex justify-between items-center px-2 font-mono text-[7px] uppercase tracking-[0.4em] text-muted/40 transition-all duration-700 group-hover:text-muted/60">
        <div className="flex items-center gap-4">
          <div className="w-12 h-px bg-border group-hover:bg-accent/30 transition-colors" />
          <span>Subject: Software Engineer</span>
        </div>
        <div className="flex gap-4">
          <span>X: 42.881</span>
          <span>Y: 12.004</span>
        </div>
      </div>

      {/* Corner Fastener Details (Mechanical) */}
      {[
        "top-2 left-2", "top-2 right-2", "bottom-2 left-2", "bottom-2 right-2"
      ].map((pos) => (
        <div key={pos} className={`absolute ${pos} w-1 h-1 bg-border rounded-full z-40 shadow-[0_0_2px_rgba(0,0,0,0.5)] transition-colors group-hover:bg-accent/40`} />
      ))}
    </motion.div>
  );
}
