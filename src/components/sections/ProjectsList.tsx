"use client";

import { useState } from "react";
import Link from "next/link";
import { getProjects, type ProjectFilter } from "@/data/portfolio";

const FILTER_ORDER: ProjectFilter[] = [
  "Full Stack",
  "AI / ML",
  "Cybersecurity",
  "Real-Time Systems",
  "Graphics",
];

const projects = getProjects();
// Only categories that have at least one project are rendered.
const filters = FILTER_ORDER.filter((f) => projects.some((p) => p.filters.includes(f)));

export function ProjectsList() {
  const [active, setActive] = useState<ProjectFilter | "All">("All");
  const visible = projects.filter((p) => active === "All" || p.filters.includes(active));

  return (
    <div className="flex flex-col gap-10">
      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
        {["All" as const, ...filters].map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={active === f}
            onClick={() => setActive(f)}
            className={`px-4 py-2 min-h-11 font-mono text-xs tracking-widest uppercase border rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-accent ${
              active === f
                ? "bg-accent text-black border-accent"
                : "border-white/20 text-white/70 hover:border-white/60 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>

      <ol className="border-t border-white/15">
        {visible.map((p) => (
          <li
            key={p.slug}
            className="group grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-4 py-8 border-b border-white/15 hover:border-accent/60 transition-colors"
          >
            <div className="md:col-span-5 flex gap-5 items-baseline">
              <span className="font-mono text-[var(--text-meta)] tracking-widest text-white/40 group-hover:text-accent transition-colors">
                {p.number}
              </span>
              <div className="flex flex-col gap-2 min-w-0">
                <h2 className="text-2xl md:text-3xl uppercase font-bold break-words">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="hover:text-cream focus-visible:outline-2 focus-visible:outline-accent transition-colors"
                  >
                    {p.title}
                  </Link>
                </h2>
                <span className="font-mono text-[var(--text-meta)] tracking-widest uppercase text-accent">
                  {p.category}
                </span>
              </div>
            </div>
            <p className="md:col-span-4 text-white/75 leading-relaxed">{p.shortDescription}</p>
            <div className="md:col-span-3 flex flex-col gap-4 md:items-end">
              {p.technologies.length > 0 && (
                <ul className="flex flex-wrap md:justify-end gap-2 font-mono text-[0.62rem] tracking-widest uppercase text-white/60">
                  {p.technologies.slice(0, 5).map((t) => (
                    <li key={t} className="px-2 py-1 bg-white/5 border border-white/10 rounded">
                      {t}
                    </li>
                  ))}
                  {p.technologies.length > 5 && (
                    <li className="px-2 py-1 text-white/40">+{p.technologies.length - 5}</li>
                  )}
                </ul>
              )}
              <Link
                href={`/projects/${p.slug}`}
                aria-label={`View project: ${p.title}`}
                className="py-3 font-mono text-xs tracking-widest uppercase text-white/60 border-b border-white/20 pb-0.5 hover:text-accent hover:border-accent focus-visible:outline-2 focus-visible:outline-accent transition-colors"
              >
                View Project <span aria-hidden>→</span>
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
