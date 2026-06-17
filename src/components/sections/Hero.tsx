"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
} from "@/components/ui/SocialIcons";
import { portfolioData } from "@/data/portfolio";
import { HeroPortrait } from "./HeroPortrait";
import { Magnetic } from "@/components/ui/Magnetic";

export function Hero() {
  const projectCount = portfolioData.projects.length;
  const uniqueDatabases =
    Array.from(
      new Set(
        portfolioData.projects
          .flatMap((p) => p.techStack)
          .filter((tech) =>
            ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Supabase"].includes(
              tech,
            ),
          ),
      ),
    ).length || 3;

  return (
    <section className="relative min-h-screen flex items-center pt-44 lg:pt-36 overflow-hidden">
      {/* Enhanced Background Grid Detail */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-border bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 hidden lg:block" />
      <div className="absolute top-1/4 left-0 w-8 h-px bg-accent/20 hidden lg:block" />
      <div className="absolute top-1/4 left-8 flex flex-col font-mono text-[6px] text-muted/20 hidden lg:block uppercase tracking-widest">
        <span>Coordinate_System</span>
        <span>Archive_Ref: {portfolioData.name.toUpperCase()}_LOG</span>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Mobile Portrait */}
          <div className="lg:hidden">
            <Magnetic strength={0.1} threshold={80}>
              <HeroPortrait />
            </Magnetic>
          </div>

          <div className="lg:col-span-7 xl:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="flex items-center gap-2 px-3 py-1 bg-surface border border-border">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/80 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-muted">
                  {portfolioData.status}
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-surface border border-border">
                <MapPin size={9} className="text-accent" />
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-muted">
                  {portfolioData.location}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className="text-6xl md:text-8xl lg:text-9xl font-serif mb-12 leading-[0.9] tracking-tight text-balance"
                data-cursor="text"
              >
                Software & <br />
                <span className="text-accent italic">Data Engineer</span>
              </h1>
            </motion.div>

            <div className="max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-muted leading-relaxed mb-12 font-sans"
                data-cursor="text"
              >
                {portfolioData.headline} Specialized in architecting{" "}
                <span className="text-foreground font-medium">
                  scalable backends
                </span>{" "}
                and{" "}
                <span className="text-foreground font-medium">data-driven</span>{" "}
                solutions.
              </motion.p>

              {/* Technical Proof Bar */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex flex-wrap items-center gap-x-12 gap-y-6 mb-16 py-6 border-y border-border/50"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-muted/60 uppercase tracking-[0.2em]">
                    Builds_Archive
                  </span>
                  <span className="text-2xl font-serif text-accent">
                    {projectCount}+ Projects
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-muted/60 uppercase tracking-[0.2em]">
                    Data_Systems
                  </span>
                  <span className="text-2xl font-serif text-accent">
                    {uniqueDatabases} Databases
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-muted/60 uppercase tracking-[0.2em]">
                    Core_Stack
                  </span>
                  <span className="text-2xl font-serif text-accent">
                    Full Stack
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap gap-6"
              >
                <Magnetic strength={0.15}>
                  <Button
                    size="lg"
                    className="group relative overflow-hidden"
                    href="#projects"
                    data-cursor="view"
                    data-cursor-text="OPEN"
                  >
                    Explore Archive
                    <ArrowRight
                      className="ml-3 group-hover:translate-x-1 transition-transform"
                      size={16}
                    />
                  </Button>
                </Magnetic>
                <Magnetic strength={0.15}>
                  <Button
                    variant="secondary"
                    size="lg"
                    href={portfolioData.socials.resume}
                    data-cursor="view"
                    data-cursor-text="VIEW"
                  >
                    View Logs (.PDF)
                  </Button>
                </Magnetic>
              </motion.div>
            </div>

            <div className="mt-20 flex flex-col lg:flex-row lg:items-end gap-12">
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="flex items-center gap-6 pb-2"
                >
                  {[
                    {
                      icon: GithubIcon,
                      href: portfolioData.socials.github,
                      label: "GitHub",
                    },
                    {
                      icon: LinkedinIcon,
                      href: portfolioData.socials.linkedin,
                      label: "LinkedIn",
                    },
                    {
                      icon: InstagramIcon,
                      href: portfolioData.socials.instagram,
                      label: "Instagram",
                    },
                  ].map((social, i) => (
                    <Magnetic key={i} strength={0.3}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group relative text-muted hover:text-accent transition-colors p-2"
                        data-cursor="link"
                        title={social.label}
                      >
                        <social.icon size={20} />
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-surface border border-border text-[8px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                          {social.label}
                        </span>
                        <div className="absolute inset-0 bg-accent/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                      </a>
                    </Magnetic>
                  ))}
                </motion.div>
                <div className="h-px w-full bg-border mt-4" />
                <div className="flex justify-between mt-2 text-[8px] font-mono uppercase tracking-[0.4em] text-muted/30">
                  <span>
                    Log_ID: {portfolioData.firstName.toUpperCase()}-2026
                  </span>
                  <span>Systems_Archive_Index</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Portrait */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-4">
            <Magnetic strength={0.1} threshold={120}>
              <HeroPortrait />
            </Magnetic>
          </div>
        </div>
      </div>

      {/* Blueprint Detail Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-border/50 flex justify-center items-center">
        <div className="px-4 bg-background text-[6px] font-mono text-muted/20 uppercase tracking-[0.5em]">
          Section_Separator_01
        </div>
        <div className="absolute w-2 h-2 bg-background border border-border/50 rotate-45" />
      </div>
    </section>
  );
}
