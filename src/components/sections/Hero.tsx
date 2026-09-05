"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { CircularBadge } from "../ui/CircularBadge";

export function Hero() {
  const container = useRef<HTMLDivElement>(null);

  // Scroll animations with natural native scrolling
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  // Layered multi-rate scroll transforms
  const mainScale = useTransform(scrollYProgress, [0, 0.7], [1, 0.9]);
  const primaryTitleY = useTransform(scrollYProgress, [0, 0.7], [0, 80]);
  const secondaryTitleY = useTransform(scrollYProgress, [0, 0.7], [0, 140]);
  const secondaryTitleX = useTransform(scrollYProgress, [0, 0.7], [0, 25]);
  const metadataOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const decorOpacity = useTransform(scrollYProgress, [0, 0.4], [0.8, 0]);
  const decorSpread = useTransform(scrollYProgress, [0, 0.6], [0, 50]);
  const badgeOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const badgeScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.85]);

  // Desktop Pointer coordinates for spring-interpolated multi-layer parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 22, stiffness: 85, mass: 0.7 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Three depth levels of motion response:
  // Layer 1 (Primary title): 2–3px
  const layer1X = useTransform(smoothX, [-1, 1], [-3, 3]);
  const layer1Y = useTransform(smoothY, [-1, 1], [-2.5, 2.5]);

  // Layer 2 (Secondary title & center cross): 4–5px
  const layer2X = useTransform(smoothX, [-1, 1], [5, -5]);
  const layer2Y = useTransform(smoothY, [-1, 1], [4, -4]);

  // Layer 3 (Metadata & decor): 1–2px
  const layer3X = useTransform(smoothX, [-1, 1], [-1.5, 1.5]);
  const layer3Y = useTransform(smoothY, [-1, 1], [-1.5, 1.5]);

  // Soft moving ambient light field (subtle translation 10-15px)
  const lightX = useTransform(smoothX, [-1, 1], [-20, 20]);
  const lightY = useTransform(smoothY, [-1, 1], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(pointer: fine)").matches && container.current) {
      const { clientWidth, clientHeight } = container.current;
      const x = (e.clientX / clientWidth - 0.5) * 2; // Range: -1 -> +1
      const y = (e.clientY / clientHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      data-nav-theme="light"
      ref={container}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[220vh] bg-cream-warm overflow-visible"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between items-center text-ink px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 pb-10 sm:pb-12 select-none">
        
        {/* Subtle Ambient Light Field (Soft blue/sky radial glow behind typography) */}
        <motion.div
          style={{ x: lightX, y: lightY }}
          aria-hidden="true"
          className="absolute pointer-events-none inset-0 flex items-center justify-center z-0"
        >
          <div
            className="w-[600px] sm:w-[900px] h-[450px] sm:h-[600px] rounded-full opacity-35 sm:opacity-40 blur-[90px] sm:blur-[130px] transition-opacity duration-1000"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(148, 180, 193, 0.4) 0%, rgba(180, 225, 235, 0.25) 45%, rgba(240, 237, 230, 0) 75%)",
            }}
          />
        </motion.div>

        {/* Engineering Guide Lines (2 vertical rules, 1 horizontal rule) */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
          <div className="max-w-[1440px] h-full mx-auto relative px-6 md:px-10">
            {/* Left guide line */}
            <div className="absolute left-6 md:left-10 top-0 bottom-0 w-[1px] bg-ink/[0.04]" />
            {/* Right guide line */}
            <div className="absolute right-6 md:right-10 top-0 bottom-0 w-[1px] bg-ink/[0.04]" />
            {/* Horizontal guide rule */}
            <div className="absolute inset-x-6 md:inset-x-10 top-1/2 -translate-y-12 h-[1px] bg-ink/[0.035]" />
          </div>
        </div>

        {/* Orbit Arc with traveling data pulse (Desktop only) */}
        <motion.div
          style={{ opacity: decorOpacity, x: decorSpread }}
          aria-hidden="true"
          className="hidden lg:block absolute left-8 xl:left-24 top-28 w-64 h-64 pointer-events-none z-0"
        >
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
            <path
              d="M 10 190 A 130 130 0 0 1 190 40"
              stroke="#547792"
              strokeWidth="1"
              strokeDasharray="4 6"
              strokeOpacity="0.35"
            />
            <circle cx="110" cy="85" r="2.5" fill="#547792" className="animate-pulse" />
          </svg>
          <div className="absolute left-3 top-8 font-mono text-[0.6rem] tracking-widest uppercase text-ink/40">
            [ 01 ]<br />
            IDEAS<br />
            SYSTEMS<br />
            PRODUCTS
          </div>
        </motion.div>

        {/* Orbit Arc 2 (Bottom right) */}
        <motion.div
          style={{ opacity: decorOpacity }}
          aria-hidden="true"
          className="hidden lg:block absolute right-16 xl:right-32 bottom-20 w-56 h-56 pointer-events-none z-0"
        >
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
            <path
              d="M 10 170 A 120 120 0 0 1 180 20"
              stroke="#547792"
              strokeWidth="0.8"
              strokeOpacity="0.25"
            />
            <circle cx="70" cy="115" r="2" fill="#547792" />
          </svg>
        </motion.div>

        {/* Decorative Engineering Markers (Crosshairs and Data points) */}
        <motion.div
          style={{ opacity: decorOpacity, x: layer3X, y: layer3Y }}
          aria-hidden="true"
          className="hidden md:flex absolute top-36 right-16 xl:right-28 items-center gap-6 pointer-events-none z-10 font-mono text-[0.62rem] tracking-widest uppercase text-ink/45"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <div className="absolute w-full h-[1px] bg-ink/30" />
            <div className="absolute h-full w-[1px] bg-ink/30" />
          </div>
          <div className="leading-tight">
            BUILD<br />
            LEARN<br />
            SHIP<br />
            REPEAT
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: decorOpacity }}
          aria-hidden="true"
          className="hidden md:flex flex-col gap-1.5 absolute left-12 bottom-32 pointer-events-none z-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-ink/60" />
          <span className="w-1.5 h-1.5 rounded-full bg-ink/40" />
          <span className="w-1.5 h-1.5 rounded-full bg-ink/20" />
        </motion.div>

        {/* Top Reference Metadata Strip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{ x: layer3X, y: layer3Y }}
          className="w-full max-w-[1440px] flex justify-between items-center font-mono text-[0.65rem] sm:text-[0.68rem] uppercase tracking-widest text-ink/60 border-b border-ink/10 pb-4 relative z-10"
        >
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-2 h-2 rounded-full bg-ink animate-pulse" />
            <span>PORTFOLIO // SPEC. 2026</span>
          </div>
          <div className="hidden sm:block text-ink/40">SYSTEM ARCHITECTURE &amp; AI INTERFACES</div>
          <div>MANGALORE [12.87° N, 74.88° E]</div>
        </motion.div>

        {/* Centerpiece Typographic Composition */}
        <motion.div
          style={{ scale: mainScale }}
          className="flex flex-col items-center w-full max-w-[1440px] mx-auto my-auto relative z-10"
        >
          {/* Subtle Top Center Engineering Tick Marker */}
          <motion.div
            style={{ x: layer2X, y: layer2Y }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 flex flex-col items-center pointer-events-none"
          >
            <div className="w-[1px] h-6 bg-ink/25" />
            <div className="w-4 h-[1px] bg-ink/25 my-1" />
          </motion.div>

          {/* Dedicated Reveal Mask with Generous Padding to Prevent Letter Clipping */}
          <div className="w-full max-w-full overflow-hidden px-4 py-2 sm:py-4">
            <motion.div
              style={{ x: layer1X, y: layer1Y }}
              className="flex flex-col items-center justify-center w-full"
            >
              {/* Line 1: SOFTWARE */}
              <div className="w-full overflow-hidden flex justify-center py-1 sm:py-2">
                <motion.h1
                  initial={{ y: "115%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 1.0,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.25,
                  }}
                  style={{ y: primaryTitleY }}
                  className="text-[clamp(3.1rem,11.8vw,12.5rem)] leading-[0.88] tracking-tight uppercase font-bold text-center text-ink whitespace-nowrap"
                >
                  SOFTWARE
                </motion.h1>
              </div>

              {/* Line 2: ENGINEER */}
              <div className="w-full overflow-hidden flex justify-center py-1 sm:py-2">
                <motion.div
                  initial={{ y: "115%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 1.0,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.4,
                  }}
                  style={{ y: primaryTitleY }}
                  className="text-[clamp(3.1rem,11.8vw,12.5rem)] leading-[0.88] tracking-tight uppercase font-bold text-center text-ink whitespace-nowrap"
                >
                  ENGINEER
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Line 3: / AI & PRODUCT ENGINEERING */}
          <div className="w-full overflow-hidden flex justify-center mt-3 sm:mt-6 px-4 py-1">
            <motion.div
              initial={{ y: "120%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.55,
              }}
              style={{ x: layer2X, y: secondaryTitleY }}
              className="font-mono text-xs sm:text-base md:text-xl lg:text-2xl tracking-[0.25em] sm:tracking-[0.32em] uppercase text-blue font-semibold text-center"
            >
              <motion.span style={{ x: secondaryTitleX }} className="inline-block">
                / AI &amp; PRODUCT ENGINEERING
              </motion.span>
            </motion.div>
          </div>

          {/* Metadata Bar (Discipline / Location / Index) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
            style={{ opacity: metadataOpacity, x: layer3X }}
            className="mt-10 sm:mt-14 md:mt-18 flex flex-col sm:flex-row items-center justify-between w-full max-w-3xl px-4 font-mono text-[0.65rem] sm:text-[var(--text-meta)] tracking-widest uppercase gap-3 sm:gap-6 text-ink/75"
          >
            <div className="flex items-center gap-2">
              <span className="text-ink/40">DISCIPLINE:</span>
              <span className="font-semibold text-ink">FULL-STACK / AI</span>
            </div>
            <div className="flex-1 hidden sm:block border-t border-dashed border-ink/25 mx-4" />
            <div className="flex items-center gap-2">
              <span className="text-ink/40">LOCATION:</span>
              <span className="font-semibold text-ink">{portfolioData.location}</span>
            </div>
            <div className="flex-1 hidden sm:block border-t border-dashed border-ink/25 mx-4" />
            <div className="flex items-center gap-2">
              <span className="text-ink/40">INDEX:</span>
              <span className="font-semibold text-ink">2024–2026</span>
            </div>
          </motion.div>

          {/* Small Precision Center Crosshair Marker */}
          <motion.div
            style={{ opacity: decorOpacity, x: layer2X }}
            className="mt-8 hidden sm:flex flex-col items-center gap-1.5 font-mono text-[0.6rem] text-ink/40"
          >
            <div className="w-[1px] h-4 bg-ink/20" />
            <span>↓</span>
            <span className="tracking-[0.2em] text-[0.55rem]">SCROLL</span>
          </motion.div>
        </motion.div>

        {/* Bottom Bar: Archive prompt on left, Circular Badge on right */}
        <div className="w-full max-w-[1440px] flex justify-between items-end relative z-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            style={{ opacity: metadataOpacity }}
            className="font-mono text-[0.62rem] sm:text-[0.65rem] tracking-widest uppercase text-ink/50"
          >
            <span>SCROLL DOWN TO INITIALIZE ARCHIVE</span>
          </motion.div>

          <div className="flex items-center gap-6">
            {/* Technical Index Counter */}
            <motion.div
              style={{ opacity: badgeOpacity }}
              className="hidden sm:flex items-center gap-3 font-mono text-[0.6rem] text-ink/40 tracking-widest"
            >
              <div className="w-8 h-[1px] bg-ink/30" />
              <span>01 / 05</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
              style={{ opacity: badgeOpacity, scale: badgeScale }}
              className="text-ink cursor-pointer"
              whileHover={{ scale: 1.06 }}
            >
              <CircularBadge text="SCROLL • ARCHIVE • EXPLORE • " />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
