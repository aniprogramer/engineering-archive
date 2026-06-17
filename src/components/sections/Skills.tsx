"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export function Skills() {
  return (
    <Section id="skills" className="border-y border-border/20 relative">
      {/* Background Detail */}
      <div className="absolute top-0 left-1/4 bottom-0 w-px bg-border/10 hidden lg:block" />
      <div className="absolute top-0 left-3/4 bottom-0 w-px bg-border/10 hidden lg:block" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10">
        <div className="lg:col-span-3 lg:pr-12 mb-16 lg:mb-0 relative">
          <SectionHeading 
            title="Toolkit" 
            subtitle="Engineered by domain and validated through rigorous application."
          />
          <div className="mt-16 hidden lg:block space-y-8">
            <div className="p-6 border border-border/40 bg-surface/30">
               <div className="text-[10px] font-mono text-accent/60 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent/40 rounded-full" />
                  Calibration_Log
               </div>
               <div className="space-y-4">
                 <div className="flex justify-between text-[9px] font-mono">
                   <span className="text-muted/40">Stability_Index</span>
                   <span className="text-accent/80">98.4%</span>
                 </div>
                 <div className="h-1 w-full bg-border/20 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     whileInView={{ width: "98.4%" }}
                     viewport={{ once: true }}
                     transition={{ duration: 1.5, ease: "circOut" }}
                     className="h-full bg-accent/30" 
                   />
                 </div>
                 <div className="flex justify-between text-[9px] font-mono pt-2">
                   <span className="text-muted/40">Optimization</span>
                   <span className="text-accent/80">LINEAR</span>
                 </div>
               </div>
            </div>

            <div className="flex flex-col gap-2 font-mono text-[7px] text-muted/30 uppercase tracking-widest px-2">
               <span>System_Ready: TRUE</span>
               <span>Architecture: STABLE</span>
               <span>Latency: 12ms</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-9 lg:pl-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/20 border border-border/20 shadow-2xl">
            {portfolioData.skills.map((category, i) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-background p-12 group hover:bg-surface/40 transition-all duration-700 relative overflow-hidden"
                data-cursor="view"
                data-cursor-text="CROSS"
              >
                {/* Contextual Crosshair Detail */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-20 transition-opacity duration-700 hidden md:block">
                   <div className="w-10 h-px bg-accent" />
                   <div className="h-10 w-px bg-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="flex items-center justify-between mb-12">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors duration-500">
                    {category.name}
                  </h3>
                  <span className="font-mono text-[9px] text-muted/30 uppercase tracking-[0.3em] border-l border-border/40 pl-4">
                    CAT_{i+1}.0
                  </span>
                </div>
                
                <div className="space-y-8">
                  {category.skills.map((skill, j) => (
                    <div key={skill.name} className="flex flex-col gap-3">
                      <div className="flex justify-between items-end">
                        <span className="text-sm font-medium text-muted/60 group-hover:text-foreground transition-colors duration-500 font-sans tracking-wide">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="text-[9px] font-mono text-accent/60 uppercase tracking-tighter">
                            {skill.level}
                          </span>
                        )}
                      </div>
                      <div className="h-[1px] w-full bg-border/30 overflow-hidden relative">
                        <motion.div 
                          initial={{ x: "-100%" }}
                          whileInView={{ x: "0%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.3 + (i * 0.1) + (j * 0.05), ease: [0.16, 1, 0.3, 1] }}
                          className="h-full w-full bg-accent/40"
                        />
                        {/* Technical Step Detail */}
                        <div className="absolute top-0 right-0 h-full w-px bg-accent/40" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 flex flex-wrap gap-12 items-center text-muted/40">
             <div className="flex items-center gap-4 group/item">
                <div className="w-1.5 h-1.5 border border-accent/30 rounded-full group-hover/item:bg-accent transition-colors" />
                <span className="text-[9px] font-mono uppercase tracking-[0.3em]">Architectural Design</span>
             </div>
             <div className="flex items-center gap-4 group/item">
                <div className="w-1.5 h-1.5 border border-accent/30 rounded-full group-hover/item:bg-accent transition-colors" />
                <span className="text-[9px] font-mono uppercase tracking-[0.3em]">Data Engineering</span>
             </div>
             <div className="flex items-center gap-4 group/item">
                <div className="w-1.5 h-1.5 border border-accent/30 rounded-full group-hover/item:bg-accent transition-colors" />
                <span className="text-[9px] font-mono uppercase tracking-[0.3em]">System Optimization</span>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
