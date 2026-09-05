"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface AvatarStageProps {
  imageSrc?: string;
  name?: string;
}

export function AvatarStage({
  imageSrc = "/images/profile.jpg",
  name = "Aniket De",
}: AvatarStageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Pointer position for directional spotlight & avatar displacement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Avatar shifts 4-8px OPPOSITE to cursor
  const avatarX = useTransform(smoothX, [-0.5, 0.5], [8, -8]);
  const avatarY = useTransform(smoothY, [-0.5, 0.5], [6, -6]);

  // Spotlight shifts MORE than avatar (12-20px) IN DIRECTION of cursor
  const lightX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const lightY = useTransform(smoothY, [-0.5, 0.5], [-16, 16]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(pointer: fine)").matches && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[420px] aspect-[4/5] mx-auto flex items-center justify-center select-none"
    >
      {/* 1. Cinematic Spotlight Source Marker (Top) */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-30">
        <span className="text-accent text-xs font-mono animate-pulse">✦</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-accent/70 to-transparent" />
      </div>

      {/* 2. Spotlight Cone (CSS Conic & Linear Gradients) */}
      <motion.div
        style={{ x: lightX, y: lightY }}
        className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center"
      >
        <div
          className="w-[160%] h-[160%] rounded-full opacity-65 blur-2xl"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(249, 232, 162, 0.18) 0%, rgba(84, 119, 146, 0.12) 40%, rgba(11, 13, 15, 0) 70%)",
          }}
        />
      </motion.div>

      {/* 3. Soft Ambient Rim Glow Behind Avatar */}
      <motion.div
        style={{
          x: lightX,
          y: lightY,
          background:
            "radial-gradient(circle, rgba(148, 180, 193, 0.22) 0%, rgba(33, 52, 72, 0.15) 60%, transparent 80%)",
        }}
        className="absolute w-[320px] h-[320px] rounded-full blur-xl pointer-events-none z-10"
      />

      {/* 4. Avatar Housing & Masked Silhouette */}
      <motion.div
        style={{ x: avatarX, y: avatarY }}
        className="relative z-20 w-[220px] xs:w-[250px] sm:w-[290px] aspect-square rounded-full p-[2px] bg-gradient-to-b from-accent/50 via-white/20 to-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
      >
        <div
          className="relative w-full h-full rounded-full overflow-hidden bg-ink select-none"
          onContextMenu={(e) => e.preventDefault()}
        >
          {/* Subtle rim-lighting overlay inside mask */}
          <div className="absolute inset-0 z-10 pointer-events-none rounded-full bg-gradient-to-b from-white/15 via-transparent to-black/60" />

          {/* Transparent protective deterrent layer over image */}
          <div
            className="absolute inset-0 z-20 rounded-full"
            onContextMenu={(e) => e.preventDefault()}
            aria-hidden="true"
          />

          {/* Actual portrait image */}
          <img
            src={imageSrc}
            alt={name}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            style={{
              userSelect: "none",
              WebkitUserDrag: "none",
            } as React.CSSProperties}
            className="w-full h-full object-cover object-[center_20%] grayscale-[30%] contrast-[1.08] brightness-[0.96] transition-all duration-700 hover:grayscale-0 hover:brightness-100 pointer-events-none select-none"
            onError={(e) => {
              // Intentional fallback container if missing
              (e.target as HTMLElement).style.display = "none";
              const parent = (e.target as HTMLElement).parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div class="w-full h-full flex flex-col items-center justify-center p-6 text-center font-mono text-xs text-white/50 bg-ink">
                    <span>[AVATAR PLACEHOLDER]</span>
                    <span class="mt-2 text-[0.65rem] text-accent">TODO: Place image at /public/images/profile.jpg</span>
                  </div>
                `;
              }
            }}
          />
        </div>

        {/* Technical Coordinate Ring */}
        <div className="absolute -inset-4 border border-dashed border-white/15 rounded-full pointer-events-none" />
        <div className="absolute -inset-7 border border-white/5 rounded-full pointer-events-none" />

        {/* Technical Tags around circular stage */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black/90 border border-white/20 rounded font-mono text-[0.6rem] text-accent tracking-widest uppercase">
          ID // ANIKET_DE
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black/90 border border-white/20 rounded font-mono text-[0.58rem] text-white/60 tracking-widest uppercase">
          ENGINEERING ARCHIVE
        </div>
      </motion.div>
    </div>
  );
}
