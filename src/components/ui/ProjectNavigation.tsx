import Link from "next/link";
import { getAdjacentProjects } from "@/data/portfolio";

export function ProjectNavigation({ slug }: { slug: string }) {
  const { prev, next } = getAdjacentProjects(slug);
  const link =
    "group flex flex-col gap-4 min-h-12 focus-visible:outline-2 focus-visible:outline-accent";
  const label =
    "font-mono text-[var(--text-meta)] tracking-widest uppercase text-white/50 group-hover:text-accent transition-colors";
  const title =
    "text-3xl md:text-5xl uppercase text-white/80 group-hover:text-white transition-colors";

  return (
    <nav
      aria-label="Project navigation"
      className="px-6 py-32 max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between gap-16"
    >
      {prev ? (
        <Link href={`/projects/${prev.slug}`} className={link}>
          <span className={label}>← Previous Project</span>
          <span className={title}>{prev.title}</span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link href={`/projects/${next.slug}`} className={`${link} sm:text-right sm:items-end`}>
          <span className={label}>Next Project →</span>
          <span className={title}>{next.title}</span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
