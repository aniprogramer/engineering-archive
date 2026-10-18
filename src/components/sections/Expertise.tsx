"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function Expertise() {
  const [activeCategory, setActiveCategory] = useState<number | null>(0);

  return (
    <section id="expertise" data-nav-theme="dark" className="bg-black text-white px-6 py-28 md:py-44 z-20 relative border-t border-white/10">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Strip */}
        <div className="flex items-baseline justify-between border-b border-white/10 pb-6 mb-16">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs tracking-widest text-accent uppercase">03 //</span>
            <h2 className="text-[var(--text-title)] uppercase text-cream tracking-tight">Technical Range</h2>
          </div>
          <div className="hidden sm:block font-mono text-[var(--text-meta)] tracking-widest uppercase text-white/40">
            SYSTEM CAPABILITIES &amp; SPECIALIZATIONS
          </div>
        </div>

        {/* Editorial Index: Interactive Accordion / Hover Index */}
        <div className="flex flex-col">
          {portfolioData.skills.map((category, index) => {
            const isActive = activeCategory === index;
            const indexStr = String(index + 1).padStart(2, "0");

            return (
              <div
                key={category.name}
                className={`border-b border-white/15 transition-all duration-300 ${
                  isActive ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={`skill-btn-${index}`}
                    aria-expanded={isActive}
                    aria-controls={`skill-panel-${index}`}
                    onClick={() => setActiveCategory(isActive ? null : index)}
                    className="w-full text-left cursor-pointer py-7 px-2 sm:px-4 flex items-center justify-between focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    <span className="flex items-center gap-6 sm:gap-12">
                      <span
                        aria-hidden="true"
                        className={`font-mono text-xs sm:text-sm tracking-widest transition-colors duration-300 ${
                          isActive ? "text-accent font-bold" : "text-white/40"
                        }`}
                      >
                        {indexStr}
                      </span>
                      <span
                        className={`text-xl sm:text-3xl font-bold uppercase tracking-tight transition-all duration-300 ${
                          isActive ? "text-cream translate-x-2" : "text-white/80"
                        }`}
                      >
                        {category.name}
                      </span>
                    </span>
                    <span aria-hidden="true" className="flex items-center gap-4">
                      <span className="font-mono text-[0.65rem] tracking-widest uppercase text-white/40 hidden md:inline">
                        {category.skills.length} TECHNOLOGIES
                      </span>
                      <span
                        className={`font-mono text-sm transition-transform duration-300 ${
                          isActive ? "text-accent rotate-90" : "text-white/40"
                        }`}
                      >
                        →
                      </span>
                    </span>
                  </button>
                </h3>

                {/* Animated Technology Panel */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      id={`skill-panel-${index}`}
                      role="region"
                      aria-labelledby={`skill-btn-${index}`}
                      className="overflow-hidden"
                    >
                      <div className="px-2 sm:px-4 pb-7">
                        <div className="flex flex-wrap gap-2.5 sm:gap-3">
                          {category.skills.map((skill) => (
                            <span
                              key={skill.name}
                              className="px-3 py-1.5 bg-white/5 border border-white/15 rounded font-mono text-xs tracking-wider uppercase text-white/90 hover:border-accent/60 hover:text-accent transition-colors"
                            >
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
