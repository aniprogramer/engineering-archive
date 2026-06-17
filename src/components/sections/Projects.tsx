"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  ArrowUpRight,
  CheckCircle2,
  Database,
  Layout,
  Code2,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData, Project } from "@/data/portfolio";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { Magnetic } from "@/components/ui/Magnetic";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Magnetic strength={0.02} threshold={100}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay: index * 0.1,
        }}
        className="group relative"
        data-cursor="project"
        data-cursor-text="EXPLORE"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-border/50 pt-16 pb-32 group-last:pb-0 relative">
          {/* Decorative Corner Markers */}
          <div className="absolute top-0 left-0 w-px h-8 bg-accent/20 group-hover:bg-accent transition-colors" />
          <div className="absolute top-0 right-0 w-px h-4 bg-border" />

          <div className="lg:col-span-4">
            <div className="sticky top-40">
              <div className="flex items-center gap-6 mb-8">
                <span className="font-mono text-[10px] text-accent/60 tracking-[0.3em]">
                  REF_0{index + 1}
                </span>
                <div className="h-px flex-1 bg-border/40 group-hover:bg-accent/30 transition-colors" />
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-accent/40" />
                  <div className="w-1 h-1 rounded-full bg-accent/20" />
                </div>
              </div>

              <h3 className="text-4xl md:text-5xl font-serif mb-8 group-hover:text-accent transition-colors duration-500 leading-tight">
                {project.title}
              </h3>

              <p className="text-muted/80 text-lg mb-10 leading-relaxed font-sans max-w-sm">
                {project.description}
              </p>

              {/* Technical Meta Table */}
              <div className="mb-10 space-y-3 py-6 border-y border-border/30">
                <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
                  <span className="text-muted/40">Status</span>
                  <span className="text-accent/80 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                    Active_Deployment
                  </span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
                  <span className="text-muted/40">Classification</span>
                  <span className="text-foreground/60">
                    {project.techStack[0]} / System
                  </span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
                  <span className="text-muted/40">Archive_Year</span>
                  <span className="text-foreground/60">2026.LOG</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-10 opacity-60 group-hover:opacity-100 transition-opacity">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[9px] font-mono uppercase tracking-widest px-3 py-1 bg-surface border border-border group-hover:border-accent/20 text-muted transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-8">
                <a
                  href={project.githubLink}
                  className="text-muted/60 hover:text-accent transition-all flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] group/link"
                >
                  <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover/link:border-accent/50 group-hover/link:bg-accent/5 transition-all">
                    <GithubIcon size={14} />
                  </div>
                  <span>Source_Code</span>
                </a>
                <a
                  href={project.liveLink}
                  className="text-muted/60 hover:text-accent transition-all flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] group/link"
                >
                  <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover/link:border-accent/50 group-hover/link:bg-accent/5 transition-all">
                    <ExternalLink size={14} />
                  </div>
                  <span>Live_Demo</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 relative">
            {/* Visual Depth Background */}
            <div className="absolute -inset-4 bg-accent/[0.02] border border-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 rounded-sm" />

            <div className="relative overflow-hidden border border-border group-hover:border-accent/30 transition-all duration-700 mb-12 bg-surface shadow-2xl group-hover:shadow-[0_0_50px_rgba(201,123,66,0.05)] group-hover:-translate-y-2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[16/9] object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

              {/* Image Coordinate Markers */}
              <div className="absolute top-4 left-4 flex flex-col font-mono text-[6px] text-white/20 uppercase tracking-[0.3em]">
                <span>View_Mode: ISO-202</span>
                <span>
                  Ref: IMG-{project.title.split(" ")[0].toUpperCase()}
                </span>
              </div>

              <div className="absolute bottom-6 right-8 bg-background/80 backdrop-blur-md px-4 py-2 border border-border text-[9px] font-mono text-accent uppercase tracking-[0.3em]">
                Documentation_Archive // {project.title.toUpperCase()}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="absolute top-0 left-1/3 w-px h-full bg-border/20 hidden md:block" />
              <div className="absolute top-0 left-2/3 w-px h-full bg-border/20 hidden md:block" />

              <div className="group/case p-2">
                <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent/60 mb-6 flex items-center gap-3">
                  <Layout size={10} /> Problem
                </h4>
                <p className="text-sm text-muted/60 leading-relaxed font-sans group-hover/case:text-muted/90 transition-colors">
                  {project.problem}
                </p>
              </div>
              <div className="group/case p-2">
                <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent/60 mb-6 flex items-center gap-3">
                  <Code2 size={10} /> Solution
                </h4>
                <p className="text-sm text-muted/60 leading-relaxed font-sans group-hover/case:text-muted/90 transition-colors">
                  {project.solution}
                </p>
              </div>
              <div className="bg-surface/50 p-8 border border-border group-hover:border-accent/20 transition-all duration-700">
                <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-6 flex items-center gap-3">
                  <CheckCircle2 size={10} /> Impact_Log
                </h4>
                <p className="text-sm text-foreground/80 font-medium leading-relaxed italic font-serif">
                  &quot;{project.impact}&quot;
                </p>
                <div className="mt-8 pt-6 border-t border-border/40 flex justify-between items-center text-[7px] font-mono text-muted/30">
                  <span>METRIC_ID: {index + 1}04</span>
                  <span>VERIFIED: YES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Magnetic>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        title="Featured Work"
        subtitle="Selected case studies highlighting system architecture and data-driven solutions."
      />

      <div className="mt-20">
        {portfolioData.projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
