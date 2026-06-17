"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export function Skills() {
  const expertise = portfolioData.skills.find(s => s.name === "Specialization")?.skills || [];
  const languages = portfolioData.skills.find(s => s.name === "Languages")?.skills || [];
  const domains = portfolioData.skills.filter(s => !["Specialization", "Languages"].includes(s.name));

  const expertiseDescriptions: Record<string, string> = {
    "Software Engineering": "Architecting robust, scalable, and maintainable software solutions.",
    "Backend Systems": "Designing high-performance server-side architectures and APIs.",
    "Database Design": "Modeling complex data relationships with a focus on integrity.",
    "Data Engineering": "Building efficient pipelines for large-scale data processing.",
  };

  return (
    <Section id="skills" className="border-y border-border/20 relative bg-surface/5">
      {/* Blueprint Grid Background - localized */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">
        {/* Left Column: Context */}
        <div className="lg:col-span-3">
          <div className="sticky top-40">
            <SectionHeading 
              title="Toolkit" 
              subtitle="Technical capability matrix across distributed systems and data engineering."
            />
            
            <div className="mt-12 p-6 border border-border/40 bg-surface/50 font-mono text-[9px] text-muted/40 uppercase tracking-[0.3em] space-y-6 hidden lg:block shadow-2xl">
               <div className="flex justify-between items-center">
                  <span>Dashboard_Status</span>
                  <span className="text-accent">Active</span>
               </div>
               <div className="space-y-3">
                  <div className="flex justify-between">
                     <span>System_Load</span>
                     <span>0.024ms</span>
                  </div>
                  <div className="h-[1px] w-full bg-border/20">
                     <div className="h-full w-1/3 bg-accent/40" />
                  </div>
               </div>
               <div className="pt-4 border-t border-border/20 italic lowercase text-[8px]">
                  // archive initialized... <br />
                  // node_001 connected...
               </div>
            </div>
          </div>
        </div>

        {/* Right Column: The Dashboard */}
        <div className="lg:col-span-9 space-y-12">
          
          {/* Level 1: Core Expertise (The Featured Panel) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-border/30 bg-background relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-accent/40" />
            <div className="p-10 md:p-14">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-border/20 pb-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif text-foreground group-hover:text-accent transition-colors duration-500">Core Expertise</h3>
                  <p className="text-[10px] font-mono text-muted/40 uppercase tracking-[0.4em] mt-2">Primary_Architectural_Domains</p>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-accent/60 uppercase tracking-widest border border-accent/20 px-4 py-2 bg-accent/5">
                   <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                   Priority_Level: HIGH
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {expertise.map((item, i) => (
                  <div key={item.name} className="relative group/item">
                    <div className="flex items-center gap-4 mb-3">
                       <span className="text-[10px] font-mono text-accent/40">0{i+1}</span>
                       <h4 className="text-xl font-bold text-foreground/90 tracking-tight">{item.name}</h4>
                    </div>
                    <p className="text-sm text-muted/60 leading-relaxed font-sans pl-8">
                      {expertiseDescriptions[item.name] || "Specialized application of engineering principles to complex systems."}
                    </p>
                    {/* Subtle underline hover */}
                    <div className="absolute bottom-[-10px] left-8 right-0 h-px bg-accent/10 scale-x-0 group-hover/item:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                ))}
              </div>
            </div>
            {/* Archive Decoration */}
            <div className="absolute bottom-4 right-6 font-mono text-[7px] text-muted/20 uppercase tracking-[0.5em]">
               Capability_Matrix_V.4.0
            </div>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
            
            {/* Level 2: Languages (Second in hierarchy) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="xl:col-span-5 border border-border/20 bg-surface/30 p-10 group hover:border-accent/20 transition-all duration-700"
            >
               <div className="flex items-center justify-between mb-10">
                  <h3 className="text-2xl font-serif text-foreground group-hover:text-accent transition-colors duration-500">Languages</h3>
                  <span className="text-[9px] font-mono text-muted/30 uppercase tracking-[0.2em]">Tier_02</span>
               </div>
               <div className="space-y-8">
                 {languages.map((lang) => (
                   <div key={lang.name} className="space-y-3">
                     <div className="flex justify-between items-end">
                       <span className="text-sm font-medium text-muted/80">{lang.name}</span>
                       <span className="text-[9px] font-mono text-accent/60 uppercase tracking-tighter">{lang.level || "Advanced"}</span>
                     </div>
                     <div className="h-[1px] w-full bg-border/40 overflow-hidden">
                        <motion.div 
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full w-full bg-accent/30 origin-left"
                        />
                     </div>
                   </div>
                 ))}
               </div>
            </motion.div>

            {/* Level 3: Domains (Third in hierarchy) */}
            <div className="xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
               {domains.map((domain, i) => (
                 <motion.div
                    key={domain.name}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                    className="border border-border/20 bg-surface/10 p-8 hover:bg-background transition-all duration-500 group/domain relative overflow-hidden"
                 >
                    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-border/30 opacity-0 group-hover/domain:opacity-100 transition-opacity" />
                    <h4 className="text-lg font-bold text-muted/70 mb-6 group-hover/domain:text-accent transition-colors">{domain.name}</h4>
                    <div className="flex flex-wrap gap-x-6 gap-y-4">
                       {domain.skills.map((skill) => (
                         <div key={skill.name} className="flex flex-col gap-1">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-muted/40 group-hover/domain:text-foreground/60 transition-colors">{skill.name}</span>
                            <div className="w-4 h-[1px] bg-accent/20 group-hover/domain:w-8 transition-all duration-500" />
                         </div>
                       ))}
                    </div>
                 </motion.div>
               ))}
               {/* Technical Detail for empty balance */}
               <div className="border border-border/10 bg-surface/5 p-8 flex items-center justify-center hidden md:flex border-dashed opacity-30">
                  <div className="text-center font-mono text-[8px] uppercase tracking-[0.4em] text-muted/40">
                     Systems_Integrity_Checked <br />
                     Ready_for_Expansion
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
}
