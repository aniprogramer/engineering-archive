"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { AvatarStage } from "../ui/AvatarStage";

export function About() {
  return (
    <section id="about" data-nav-theme="dark" className="relative bg-black text-white px-6 py-32 md:py-48 z-20 overflow-hidden">
      {/* Subtle background ambient gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-ink/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Top Section Header */}
        <div className="flex items-baseline justify-between border-b border-white/10 pb-6 mb-16 md:mb-24">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs tracking-widest text-accent uppercase">01 //</span>
            <h2 className="text-[var(--text-title)] uppercase text-cream tracking-tight">About</h2>
          </div>
          <div className="hidden sm:block font-mono text-[var(--text-meta)] tracking-widest uppercase text-white/40">
            ENGINEERING PHILOSOPHY &amp; PROFILE
          </div>
        </div>

        {/* Centerpiece Composition: Avatar at visual center with asymmetrical statements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Top Editorial Context */}
          <div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="font-mono text-[0.68rem] tracking-widest text-accent uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                FOUNDATIONAL FOCUS
              </div>
              <p className="text-xl md:text-2xl text-white/90 font-light leading-snug">
                Building software where interfaces, backend systems, and AI capabilities function as a unified, deterministic system.
              </p>
              <div className="pt-4 border-t border-white/10 font-mono text-[0.7rem] text-white/50 space-y-2 uppercase">
                <p>Location: {portfolioData.location}</p>
                <p>Status: {portfolioData.status}</p>
                <p>Primary Stack: TypeScript · Python · Go · Next.js</p>
              </div>
            </motion.div>
          </div>

          {/* Centerpiece: Cinematic Avatar Stage */}
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex justify-center"
            >
              <AvatarStage imageSrc="/images/profile.jpg" name={portfolioData.name} />
            </motion.div>
          </div>

          {/* Right / Bottom Statement & Technical Notation */}
          <div className="lg:col-span-4 flex flex-col justify-center order-3">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="font-mono text-[0.68rem] tracking-widest text-white/40 uppercase">
                SYSTEM SUMMARY //
              </div>
              <p className="text-base text-white/70 leading-relaxed">
                {portfolioData.about}
              </p>
              <div className="p-4 bg-white/[0.02] border border-white/10 rounded-sm font-mono text-[0.68rem] text-white/60 space-y-1">
                <div className="text-accent">CURRENT ENGAGEMENT:</div>
                <div className="text-white/90">Software Engineering Intern @ Datavex AI</div>
                <div className="text-white/40 text-[0.62rem]">Next.js · FastAPI · PostgreSQL · Docker · 3D Workspace</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
