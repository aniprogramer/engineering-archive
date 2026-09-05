"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section
      id="experience"
      data-nav-theme="light"
      ref={containerRef}
      className="bg-cream-warm text-ink px-6 py-28 md:py-44 z-20 relative border-t border-ink/10"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-16 md:gap-24 relative">
        {/* Left Sticky Column */}
        <div className="md:w-1/3">
          <div className="sticky top-32 space-y-6">
            <div className="font-mono text-xs tracking-widest text-ink/60 uppercase">
              02 // CHRONOLOGY
            </div>
            <h2 className="text-[var(--text-title)] uppercase leading-none tracking-tight font-bold">
              Experience &amp; Milestones
            </h2>
            <p className="font-mono text-[0.72rem] tracking-wider uppercase text-ink/60 leading-relaxed max-w-xs">
              ENGINEERING INTERNSHIPS, DEGREE WORK, AND HACKATHON ACHIEVEMENTS.
            </p>
          </div>
        </div>

        {/* Right Timeline Column with Continuous Vertical Rail */}
        <div className="md:w-2/3 relative pl-8 md:pl-12 border-l border-ink/20">
          {/* Scroll Progress Rail Indicator */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[-1px] top-0 w-[2px] h-full bg-ink origin-top"
          />

          <div className="flex flex-col gap-24">
            {portfolioData.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[37px] md:-left-[53px] top-2 w-3 h-3 rounded-full bg-cream-warm border-2 border-ink group-hover:bg-ink transition-colors duration-300" />

                <div className="flex flex-col gap-3">
                  {/* Period & Type */}
                  <div className="flex items-center gap-3 font-mono text-[0.68rem] tracking-widest uppercase text-ink/60">
                    <span className="font-bold text-ink">{exp.period}</span>
                    <span>•</span>
                    <span className="px-2 py-0.5 bg-ink/10 rounded">{exp.type}</span>
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-ink">
                    {exp.role}
                  </h3>
                  <div className="font-mono text-xs tracking-widest text-ink/80 font-semibold uppercase">
                    {exp.company}
                  </div>

                  {/* Description List */}
                  <div className="mt-4 flex flex-col gap-2.5">
                    {exp.description.map((desc, i) => (
                      <p
                        key={i}
                        className="text-ink/80 text-sm md:text-base leading-relaxed"
                      >
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
