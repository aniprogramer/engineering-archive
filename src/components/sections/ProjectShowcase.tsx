"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function ProjectShowcase() {
  // Desktop hover state for subtle contextual cursor follower
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="projects"
      data-nav-theme="dark"
      onMouseMove={handleMouseMove}
      className="bg-black text-white px-6 py-28 md:py-40 z-20 relative overflow-hidden"
    >
      {/* Tiny Contextual Floating Cursor for Project Hovers */}
      <AnimatePresence>
        {cursorText && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            style={{
              position: "fixed",
              left: cursorPos.x + 16,
              top: cursorPos.y + 16,
              pointerEvents: "none",
              zIndex: 60,
            }}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1 bg-accent text-black font-mono text-[0.65rem] font-semibold tracking-widest uppercase rounded-full shadow-lg"
          >
            <span>{cursorText}</span>
            <span>↗</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1440px] mx-auto flex flex-col gap-36 md:gap-52">
        {portfolioData.projects.map((project, idx) => {
          // ==========================================
          // 01. TOP FEATURED PROJECT: WANDERLUST
          // ==========================================
          if (idx === 0) {
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-10 group"
              >
                {/* Header Strip with Engineering Spec */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/20 pb-6">
                  <div>
                    <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-accent mb-3">
                      <span>PROJECT // {project.number}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                      <span className="text-white/40">FEATURED PLATFORM</span>
                    </div>
                    <h3 className="text-[clamp(2.5rem,6vw,6rem)] uppercase font-bold leading-[0.9] tracking-tight group-hover:text-cream transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <div className="text-[var(--text-meta)] font-mono tracking-widest text-white/50 uppercase mt-4 sm:mt-0 sm:text-right">
                    <div className="text-accent font-semibold">{project.category}</div>
                    <div className="text-white/40 text-[0.62rem]">MVC · AUTH · CRUD · MEDIA</div>
                  </div>
                </div>

                {/* Flagship Visual Stage for Wanderlust */}
                <Link
                  href={`/projects/${project.slug}`}
                  onMouseEnter={() => setCursorText("EXPLORE")}
                  onMouseLeave={() => setCursorText(null)}
                  className="w-full aspect-[16/9] md:aspect-[21/9] bg-gradient-to-b from-ink/30 via-black to-ink/20 relative overflow-hidden rounded-sm border border-white/15 group-hover:border-accent/60 transition-all duration-500 flex flex-col justify-between p-6 md:p-10"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />
                  
                  {/* Top Technical Metadata Markers */}
                  <div className="relative z-10 flex justify-between items-start font-mono text-[0.62rem] text-white/50 uppercase tracking-widest">
                    <div className="space-y-1">
                      <div>SYS_ID: WANDERLUST_ACCOMMODATION_ENGINE</div>
                      <div className="text-accent">ARCHITECTURE: MVC // MONGO_ODM</div>
                    </div>
                    <div className="text-right">
                      <div>STORAGE // CLOUDINARY_MEDIA</div>
                      <div>AUTH // PASSPORT_SESSION</div>
                    </div>
                  </div>

                  {/* Center Geometric/Architectural Graphic */}
                  <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 md:w-28 md:h-28 border border-accent/40 rounded-sm rotate-45 flex items-center justify-center group-hover:rotate-90 group-hover:scale-110 transition-transform duration-700">
                      <div className="w-10 h-10 border border-white/40 rounded-full animate-spin [animation-duration:8s]" />
                    </div>
                    <div className="mt-8 font-mono text-xs tracking-[0.3em] uppercase text-cream font-semibold">
                      FULL-STACK TRAVEL &amp; ACCOMMODATION ENGINE
                    </div>
                  </div>

                  {/* Bottom Strip Technical Details */}
                  <div className="relative z-10 flex flex-wrap justify-between items-end font-mono text-[0.62rem] text-white/40 tracking-widest uppercase border-t border-white/10 pt-4">
                    <div>NODE.JS · EXPRESS.JS · MONGODB · EJS · CLOUDINARY · JOI</div>
                    <div className="text-accent group-hover:translate-x-1 transition-transform duration-300">
                      CASE STUDY SPECIFICATIONS ↗
                    </div>
                  </div>
                </Link>

                {/* Bottom Details & Thesis */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 pt-2">
                  <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
                    {project.thesis}
                  </p>
                  <div className="flex flex-col items-start md:items-end gap-5">
                    <div className="flex flex-wrap md:justify-end gap-x-3 gap-y-2 font-mono text-[0.68rem] tracking-widest uppercase text-white/60 max-w-md">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 border-b-2 border-accent pb-1 text-accent font-mono text-xs tracking-widest uppercase hover:text-white hover:border-white transition-colors"
                    >
                      Read Case Study <span>→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          }

          // ==========================================
          // 02. SENTINEL AGENTS: SECURITY ENGINE
          // ==========================================
          if (idx === 1) {
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group"
              >
                <div className="lg:col-span-5 flex flex-col items-start order-2 lg:order-1">
                  <div className="font-mono text-xs tracking-widest text-accent mb-3 uppercase flex items-center gap-2">
                    <span>{project.number} {"//"} SECURITY TOOLING</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl uppercase font-bold tracking-tight mb-4 group-hover:text-cream transition-colors">
                    {project.title}
                  </h3>
                  <div className="font-mono text-[var(--text-meta)] tracking-widest text-blue-light uppercase mb-6">
                    {project.category}
                  </div>
                  <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8">
                    {project.thesis}
                  </p>

                  <div className="flex flex-wrap gap-2.5 font-mono text-[0.65rem] tracking-widest uppercase text-white/60 mb-8">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 border-b border-accent pb-1 text-accent font-mono text-xs tracking-widest uppercase hover:text-white hover:border-white transition-colors"
                  >
                    View Pipeline Specification <span>→</span>
                  </Link>
                </div>

                {/* AST / Code Analysis Abstract Visual */}
                <div className="lg:col-span-7 order-1 lg:order-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    onMouseEnter={() => setCursorText("AUDIT")}
                    onMouseLeave={() => setCursorText(null)}
                    className="block w-full aspect-[4/3] bg-ink/20 border border-white/15 group-hover:border-blue-light/50 transition-all duration-500 relative overflow-hidden rounded-sm p-6 flex flex-col justify-between"
                  >
                    {/* Scanning Line Animation */}
                    <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-light to-transparent top-0 animate-[scan_6s_ease-in-out_infinite]" />

                    <div className="flex justify-between font-mono text-[0.62rem] text-white/50 uppercase tracking-widest">
                      <span>SCANNER // TREE-SITTER AST</span>
                      <span className="text-blue-light">SANDBOX: DOCKER_ISOLATION</span>
                    </div>

                    {/* AST Node Graph Illustration */}
                    <div className="my-auto flex flex-col items-center justify-center font-mono text-xs space-y-3">
                      <div className="px-3 py-1 bg-white/10 border border-white/20 rounded text-accent">
                        RootNode [Program]
                      </div>
                      <div className="w-[1px] h-5 bg-white/20" />
                      <div className="flex gap-4 sm:gap-8">
                        <div className="px-2.5 py-1 bg-white/5 border border-white/15 rounded text-white/70 text-[0.68rem]">
                          FunctionDeclaration
                        </div>
                        <div className="px-2.5 py-1 bg-white/5 border border-white/15 rounded text-white/70 text-[0.68rem]">
                          VulnerabilityCheck
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between font-mono text-[0.62rem] text-white/40 uppercase tracking-widest border-t border-white/10 pt-3">
                      <span>MULTI-AGENT EXPLOIT VALIDATION</span>
                      <span className="text-white/75 group-hover:text-accent transition-colors">DETAILS ↗</span>
                    </div>
                  </Link>
                </div>
              </motion.div>
            );
          }

          // ==========================================
          // 03. ZERODHA CLONE: FINTECH & TRADING
          // ==========================================
          if (idx === 2) {
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group"
              >
                <div className="lg:col-span-7">
                  <Link
                    href={`/projects/${project.slug}`}
                    onMouseEnter={() => setCursorText("TRADE")}
                    onMouseLeave={() => setCursorText(null)}
                    className="block w-full aspect-[4/3] bg-ink/20 border border-white/15 group-hover:border-accent/50 transition-all duration-500 relative overflow-hidden rounded-sm p-6 flex flex-col justify-between"
                  >
                    <div className="flex justify-between font-mono text-[0.62rem] text-white/50 uppercase tracking-widest">
                      <span>FINTECH_SYSTEM // ORDER_BOOK</span>
                      <span className="text-accent">AUTH: JWT / PASSPORT</span>
                    </div>

                    <div className="my-auto text-center space-y-3">
                      <div className="text-3xl sm:text-4xl text-cream font-mono font-bold">
                        ZERODHA CLONE
                      </div>
                      <div className="font-mono text-xs text-white/60 tracking-widest uppercase">
                        REAL-TIME PORTFOLIO &amp; POSITION MANAGEMENT
                      </div>
                    </div>

                    <div className="flex justify-between font-mono text-[0.62rem] text-white/40 uppercase tracking-widest border-t border-white/10 pt-3">
                      <span>REST APIS · WATCHLIST · HOLDINGS</span>
                      <span className="text-white/75 group-hover:text-accent transition-colors">EXPLORE ↗</span>
                    </div>
                  </Link>
                </div>

                <div className="lg:col-span-5 flex flex-col items-start">
                  <div className="font-mono text-xs tracking-widest text-accent mb-3 uppercase">
                    {project.number} {"//"} FINTECH PLATFORM
                  </div>
                  <h3 className="text-4xl md:text-5xl uppercase font-bold tracking-tight mb-4 group-hover:text-cream transition-colors">
                    {project.title}
                  </h3>
                  <div className="font-mono text-[var(--text-meta)] tracking-widest text-accent uppercase mb-6">
                    {project.category}
                  </div>
                  <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8">
                    {project.thesis}
                  </p>

                  <div className="flex flex-wrap gap-2.5 font-mono text-[0.65rem] tracking-widest uppercase text-white/60 mb-8">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 border-b border-accent pb-1 text-accent font-mono text-xs tracking-widest uppercase hover:text-white hover:border-white transition-colors"
                  >
                    View Project Details <span>→</span>
                  </Link>
                </div>
              </motion.div>
            );
          }

          // ==========================================
          // 04+. INDEXED ROWS FOR REMAINING PROJECTS
          // ==========================================
          return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-baseline justify-between border-t border-white/15 pt-8 gap-8 group hover:border-accent/60 transition-colors"
            >
              <div className="flex items-baseline gap-6 md:w-1/3">
                <span className="text-[var(--text-meta)] font-mono tracking-widest text-white/40 group-hover:text-accent transition-colors">
                  {project.number}
                </span>
                <h3 className="text-2xl md:text-3xl uppercase font-bold group-hover:text-cream transition-colors">
                  {project.title}
                </h3>
              </div>
              
              <div className="md:w-1/3 font-mono text-[0.72rem] tracking-wider uppercase text-white/65 leading-relaxed">
                {project.thesis}
              </div>

              <div className="md:w-auto flex flex-col items-start md:items-end gap-3">
                <div className="text-[var(--text-meta)] font-mono tracking-widest text-accent uppercase">
                  {project.category}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-block border-b border-white/20 pb-0.5 text-white/70 font-mono text-xs tracking-widest uppercase hover:text-accent hover:border-accent transition-colors"
                >
                  View Archive ↗
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
