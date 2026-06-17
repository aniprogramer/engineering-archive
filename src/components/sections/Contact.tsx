"use client";

import { motion } from "framer-motion";
import { Mail, FileText, Send, Database } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { portfolioData } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";

export function Contact() {
  return (
    <Section id="contact" className="relative border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
           <SectionHeading 
            title="Transmission" 
            subtitle="Let's discuss systems, architecture, or collaborative opportunities."
          />
          
          <div className="space-y-8 mt-12">
            <div className="p-8 border border-border bg-surface/30">
               <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-6">Direct Channels</h4>
               <div className="space-y-6">
                  <a href={`mailto:${portfolioData.email}`} className="flex items-center group">
                    <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                      <Mail size={16} className="group-hover:text-background" />
                    </div>
                    <span className="ml-4 text-sm font-mono text-muted group-hover:text-foreground transition-colors">{portfolioData.email}</span>
                  </a>
                  <div className="flex gap-4 pt-4">
                     {[
                        { icon: GithubIcon, href: portfolioData.socials.github },
                        { icon: LinkedinIcon, href: portfolioData.socials.linkedin },
                        { icon: InstagramIcon, href: portfolioData.socials.instagram }
                     ].map((social, i) => (
                        <a key={i} href={social.href} className="w-12 h-12 border border-border flex items-center justify-center hover:bg-border transition-colors">
                           <social.icon size={20} />
                        </a>
                     ))}
                  </div>
               </div>
            </div>

            <div className="flex items-center gap-4 p-6 border border-border bg-accent/5">
               <Database size={16} className="text-accent" />
               <p className="text-xs text-muted leading-relaxed uppercase tracking-tighter">
                  Location Protocol: <span className="text-foreground">{portfolioData.location} // IST (UTC +5:30)</span>
               </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="p-10 border border-border bg-surface/50">
            <h3 className="text-2xl font-bold mb-8 tracking-tight italic font-serif">Send Transmission</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-muted mb-3">Origin Name</label>
                <input 
                  type="text" 
                  className="w-full bg-background border border-border px-4 py-3 font-mono text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="IDENTIFY YOURSELF"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-muted mb-3">Return Path (Email)</label>
                <input 
                  type="email" 
                  className="w-full bg-background border border-border px-4 py-3 font-mono text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="EMAIL@PROTOCOL.COM"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-[10px] font-mono uppercase tracking-widest text-muted mb-3">Payload (Message)</label>
                <textarea 
                  rows={6}
                  className="w-full bg-background border border-border px-4 py-3 font-mono text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="ENTER TRANSMISSION DATA..."
                />
              </div>
              <div className="md:col-span-2 flex justify-end">
                <Button className="w-full md:w-auto px-12 group">
                  Send Transmission
                  <Send className="ml-3 group-hover:translate-x-1 transition-transform" size={14} />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
