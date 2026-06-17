"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { Hammer, Database, Layout, Settings } from "lucide-react";

export function About() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <SectionHeading 
            title="Digital Craftsman" 
            subtitle="I build software with an architect's eye and a craftsman's hand."
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none"
          >
            <p className="text-2xl md:text-3xl font-serif text-foreground leading-snug mb-12">
              {portfolioData.about}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              {[
                {
                  icon: Database,
                  title: "Systems Thinking",
                  text: "Designing robust backend architectures that prioritize data integrity and scalability."
                },
                {
                  icon: Layout,
                  title: "Interface Precision",
                  text: "Crafting intuitive frontends where every pixel serves a purpose in the user's journey."
                },
                {
                  icon: Hammer,
                  title: "Handcrafted Code",
                  text: "Writing clean, maintainable, and efficient code that stands the test of time."
                },
                {
                  icon: Settings,
                  title: "Problem Solving",
                  text: "Approaching complex challenges with analytical rigor and creative engineering."
                }
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 border border-border flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all">
                      <item.icon size={18} />
                    </div>
                    <h4 className="text-lg font-bold tracking-tight">{item.title}</h4>
                  </div>
                  <p className="text-muted leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="lg:col-span-4 hidden lg:block">
          <div className="sticky top-32 border border-border p-8 bg-surface/50">
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-8">// Core Principles</div>
            <ul className="space-y-6">
              {[
                "Simplicity over complexity",
                "Data integrity is paramount",
                "User-centric architecture",
                "Continuous iteration",
                "Performance as a feature"
              ].map((p, i) => (
                <li key={i} className="flex gap-4 items-start text-sm">
                  <span className="text-accent">0{i+1}.</span>
                  <span className="text-muted">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex gap-2 mb-2">
                <div className="w-1 h-1 bg-accent" />
                <div className="w-1 h-1 bg-accent/50" />
                <div className="w-1 h-1 bg-accent/20" />
              </div>
              <p className="text-[10px] font-mono text-muted/50 leading-relaxed uppercase tracking-tighter">
                Engineering Logs <br />
                Archive v.1.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
