"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { Terminal, Layout } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience" className="bg-surface/[0.03] border-y border-border/20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
        {/* Timeline Path Detail */}
        <div className="absolute left-[31px] md:left-[143px] top-[400px] bottom-0 w-px bg-border/20 hidden lg:block" />
        
        <div className="lg:col-span-4">
           <div className="sticky top-40">
              <SectionHeading 
                title="Engineering Logs" 
                subtitle="Professional journey and academic milestones curated with technical rigor."
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-12 p-8 border border-border bg-surface/30 font-mono text-[10px] text-muted space-y-4 shadow-2xl relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-accent/20" />
                 
                 <div className="flex justify-between border-b border-border pb-3">
                    <span className="opacity-40">System_Status</span>
                    <span className="text-accent flex items-center gap-2">
                       <div className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                       STABLE
                    </span>
                 </div>
                 <div className="flex justify-between border-b border-border pb-3">
                    <span className="opacity-40">Archive_State</span>
                    <span>VERIFIED</span>
                 </div>
                 <div className="flex justify-between border-b border-border pb-3">
                    <span className="opacity-40">Kernel_Ver</span>
                    <span className="text-foreground/60">v4.0.0-PROD</span>
                 </div>
                 <div className="pt-4 flex flex-col gap-2 italic text-[9px] opacity-30">
                    <span>{">"} initializing_chronology...</span>
                    <span>{">"} loading_milestones...</span>
                 </div>
              </motion.div>
           </div>
        </div>

        <div className="lg:col-span-8 relative">
          <div className="space-y-24 py-4">
            {portfolioData.experience.map((exp, i) => (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className="group relative"
                data-cursor="pointer"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8 lg:gap-12">
                  <div className="md:w-32 pt-2 shrink-0">
                    <span className="text-xs font-mono text-accent/60 uppercase tracking-widest group-hover:text-accent transition-colors duration-500">{exp.period}</span>
                  </div>
                  
                  <div className="flex-1 border-l border-border/40 pl-8 lg:pl-12 relative group-hover:border-accent/30 transition-colors duration-700">
                    {/* Anchor Dot */}
                    <div className="absolute left-[-5px] top-3 w-2 h-2 bg-background border border-border group-hover:border-accent group-hover:scale-125 transition-all duration-500 shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
                    
                    <div className="mb-8">
                       <div className="flex items-center gap-4 mb-2">
                          <div className="px-2 py-0.5 bg-accent/5 border border-accent/10 text-[8px] font-mono text-accent uppercase tracking-widest">
                            {exp.type}
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-500">{exp.role}</h3>
                       </div>
                       <div className="text-accent/60 font-serif italic text-xl">
                         {exp.company}
                       </div>
                    </div>
                    
                    <ul className="space-y-4">
                      {exp.description.map((point, j) => (
                        <li key={j} className="flex items-start text-muted/70 text-sm leading-relaxed font-sans group-hover:text-muted transition-colors duration-500">
                          <div className="mt-1.5 mr-4 shrink-0">
                             <div className="w-1.5 h-[1px] bg-accent/40" />
                          </div>
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Metadata Footer for recruiters */}
                    <div className="mt-8 pt-6 border-t border-border/20 flex gap-6 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                       <div className="flex items-center gap-2 font-mono text-[8px] text-muted/40 uppercase tracking-widest">
                          <Layout size={8} /> Layout_Engaged
                       </div>
                       <div className="flex items-center gap-2 font-mono text-[8px] text-muted/40 uppercase tracking-widest">
                          <Terminal size={8} /> Logic_Verified
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
