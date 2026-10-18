import Image from "next/image";
import type { Project } from "@/data/portfolio";

/** Real screenshot when the project has one, otherwise a typographic spec panel. */
export function ProjectVisual({
  project,
  sizes = "(min-width: 1024px) 58vw, 100vw",
  priority = false,
}: {
  project: Project;
  sizes?: string;
  priority?: boolean;
}) {
  const hero = project.media?.hero;

  if (hero) {
    return (
      <div className="relative w-full overflow-hidden bg-ink/20">
        <Image
          src={hero.src}
          alt={hero.alt}
          width={hero.width}
          height={hero.height}
          sizes={sizes}
          priority={priority}
          className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${project.title}: ${project.specs.join(", ")}`}
      className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-gradient-to-b from-ink/30 via-black to-ink/20 p-5 md:p-8 flex flex-col justify-between"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />
      <div className="relative flex justify-between font-mono text-[0.62rem] tracking-widest uppercase text-white/50">
        <span>{project.number}</span>
        <span className="text-accent">{project.category}</span>
      </div>
      <div className="relative text-center font-display text-[clamp(1.75rem,4vw,3.25rem)] uppercase leading-[0.95] text-cream-warm text-balance">
        {project.title}
      </div>
      <div className="relative flex flex-wrap gap-x-4 gap-y-1 border-t border-white/10 pt-3 font-mono text-[0.62rem] tracking-widest uppercase text-white/40">
        {project.specs.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </div>
  );
}
