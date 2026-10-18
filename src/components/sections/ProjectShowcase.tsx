"use client";

import Link from "next/link";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { getFeaturedProjects, type Project } from "@/data/portfolio";
import { ProjectVisual } from "@/components/ui/ProjectVisual";

function TechTags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2 font-mono text-[0.65rem] tracking-widest uppercase text-white/60">
      {items.map((tech) => (
        <li key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded">
          {tech}
        </li>
      ))}
    </ul>
  );
}

function FeaturedRow({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group"
    >
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`${project.title}: view project details`}
        className={`lg:col-span-7 block border border-white/15 group-hover:border-accent/50 focus-visible:outline-2 focus-visible:outline-accent transition-colors duration-500 ${flip ? "lg:order-2" : ""}`}
      >
        <ProjectVisual project={project} />
      </Link>
      <div className={`lg:col-span-5 flex flex-col items-start ${flip ? "lg:order-1" : ""}`}>
        <div className="font-mono text-xs tracking-widest text-accent mb-3 uppercase">
          {project.number} {"//"} {project.category}
        </div>
        <h3 className="text-4xl md:text-5xl uppercase font-bold tracking-tight mb-5 group-hover:text-cream transition-colors">
          {project.title}
        </h3>
        <p className="text-base md:text-lg text-white/80 leading-relaxed mb-6">{project.thesis}</p>
        <div className="mb-8">
          <TechTags items={project.technologies} />
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 border-b border-accent pb-1 text-accent font-mono text-xs tracking-widest uppercase hover:text-white hover:border-white focus-visible:outline-2 focus-visible:outline-accent transition-colors"
        >
          View Project Details <span aria-hidden>→</span>
        </Link>
      </div>
    </motion.article>
  );
}

export function ProjectShowcase() {
  const featured = getFeaturedProjects();

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="projects"
        data-nav-theme="dark"
        aria-labelledby="projects-heading"
        className="bg-black text-white px-6 py-28 md:py-40 z-20 relative overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto flex flex-col gap-16 md:gap-24">
          <header className="flex flex-col gap-6">
            <div className="font-mono text-xs tracking-widest text-accent uppercase">
              Archive {"//"} Featured
            </div>
            <h2
              id="projects-heading"
              className="text-[length:var(--text-section)] uppercase leading-[0.85] tracking-tight text-cream-warm"
            >
              Selected Work
            </h2>
            <p className="max-w-2xl text-lg text-white/70 leading-relaxed">
              Full-stack products, machine learning for security, real-time media, and a graphics
              engine written against the bare OpenGL pipeline.
            </p>
          </header>

          <div className="flex flex-col gap-28 md:gap-40">
            <AnimatePresence mode="popLayout">
              {featured.map((p, i) => (
                <FeaturedRow key={p.slug} project={p} flip={i % 2 === 1} />
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center border-t border-white/15 pt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 min-h-12 border border-accent text-accent font-mono text-sm tracking-widest uppercase hover:bg-accent hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent transition-colors"
            >
              View All Projects <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
