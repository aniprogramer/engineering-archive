import { portfolioData, getProjects, getProjectBySlug, type Note } from "@/data/portfolio";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Navigation } from "@/components/ui/Navigation";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { ProjectNavigation } from "@/components/ui/ProjectNavigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | ${portfolioData.name}`,
    description: project.shortDescription,
    openGraph: { title: project.title, description: project.shortDescription },
  };
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3 text-white/80 leading-relaxed">
      {items.map((item) => (
        <li key={item} className="flex gap-4">
          <span aria-hidden className="text-accent font-mono">+</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-3xl uppercase mb-8 text-cream">{title}</h3>
      {children}
    </div>
  );
}

function Notes({ items }: { items: Note[] }) {
  return (
    <dl className="flex flex-col gap-6">
      {items.map((n) => (
        <div key={n.title} className="border-t border-white/10 pt-5">
          <dt className="font-mono text-xs tracking-widest uppercase text-accent mb-2">{n.title}</dt>
          <dd className="text-white/80 leading-relaxed">{n.body}</dd>
        </div>
      ))}
    </dl>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) return notFound();

  return (
    <main className="relative bg-black min-h-screen text-white">
      <Navigation forcedTheme="dark" />
      
      {/* Hero Section */}
      <section data-nav-theme="dark" className="pt-48 pb-24 px-6 max-w-[1440px] mx-auto border-b border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="flex flex-col gap-6">
            <div className="text-[var(--text-meta)] font-mono tracking-widest text-white/50">{project.number}</div>
            <h1 className="text-[length:var(--text-section)] break-words uppercase leading-[0.85] tracking-tight text-cream-warm">
              {project.title}
            </h1>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4 max-w-sm">
            <div className="text-[var(--text-meta)] font-mono tracking-widest text-accent uppercase">{project.category}</div>
            <p className="text-white/80 md:text-right">{project.subtitle ?? project.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Visual */}
      <section className="px-6 py-12 max-w-[1440px] mx-auto">
        <Link href="/projects" className="inline-block mb-8 font-mono text-[var(--text-meta)] tracking-widest uppercase text-white/50 hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent">
          ← All projects
        </Link>
        <div className="border border-white/10">
          <ProjectVisual project={project} sizes="100vw" priority />
        </div>
      </section>

      {/* Details */}
      <section className="px-6 py-24 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 border-b border-white/10">
        <div className="md:col-span-4 flex flex-col gap-12">
          {(project.links?.github || project.links?.live) && (
            <div className="flex flex-col gap-3 font-mono text-sm tracking-widest uppercase">
              {project.links.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white">Live demo ↗</a>}
              {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white">Source ↗</a>}
            </div>
          )}
          {project.technologies.length > 0 && (
            <div className="flex flex-col gap-8">
              <h3 className="font-mono text-[var(--text-meta)] tracking-widest uppercase text-white/50">Technologies</h3>
              {(project.techGroups ?? [{ label: "", items: project.technologies }]).map((g) => (
                <div key={g.label} className="flex flex-col gap-3">
                  {g.label && <div className="font-mono text-[0.65rem] tracking-widest uppercase text-accent">{g.label}</div>}
                  <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm tracking-wider uppercase text-white/90">
                    {g.items.map((tech) => <li key={tech}>{tech}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="md:col-span-8 flex flex-col gap-24">
          <Section title="Overview">
            <p className="text-xl text-white/80 leading-relaxed text-balance">{project.overview ?? project.thesis}</p>
          </Section>
          {project.problem && (
            <Section title="Problem">
              <p className="text-lg text-white/80 leading-relaxed">{project.problem}</p>
            </Section>
          )}
          {project.features && <Section title="Key Features"><Notes items={project.features} /></Section>}
          {project.architecture && (
            <Section title="Architecture">
              <ol className="flex flex-col gap-6">
                {project.architecture.map((c, i) => (
                  <li key={c.name} className="flex gap-5 border-t border-white/10 pt-5">
                    <span className="font-mono text-xs text-white/40 pt-1">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <div className="font-mono text-xs tracking-widest uppercase text-accent mb-2">{c.name}</div>
                      <p className="text-white/80 leading-relaxed">{c.role}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Section>
          )}
          {project.highlights && <Section title="Implementation Highlights"><List items={project.highlights} /></Section>}
          {project.challenges && <Section title="Engineering Decisions"><Notes items={project.challenges} /></Section>}
          {project.outcomes && <Section title="Notable Aspects &amp; Outcomes"><List items={project.outcomes} /></Section>}
          {project.notes && (
            <div className="border-l-2 border-accent pl-6">
              <h3 className="font-mono text-[var(--text-meta)] tracking-widest uppercase text-accent mb-3">Scope &amp; Caveats</h3>
              <p className="text-white/70 leading-relaxed">{project.notes}</p>
            </div>
          )}
        </div>
      </section>

      {(project.media?.screenshots || project.media?.diagram) && (
        <section aria-label="Gallery" className="px-6 py-24 max-w-[1440px] mx-auto flex flex-col gap-16 border-b border-white/10">
          {project.media.screenshots && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.media.screenshots.map((img) => (
                <figure key={img.src} className="flex flex-col gap-3">
                  <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(min-width: 768px) 50vw, 100vw" className="w-full h-auto border border-white/10" />
                  {img.caption && <figcaption className="font-mono text-[var(--text-meta)] tracking-widest uppercase text-white/50">{img.caption}</figcaption>}
                </figure>
              ))}
            </div>
          )}
          {project.media.diagram && (
            <figure className="flex flex-col gap-3 items-center">
              <Image src={project.media.diagram.src} alt={project.media.diagram.alt} width={project.media.diagram.width} height={project.media.diagram.height} sizes="(min-width: 1024px) 900px, 100vw" className="w-full max-w-[900px] h-auto" />
              {project.media.diagram.caption && <figcaption className="font-mono text-[var(--text-meta)] tracking-widest uppercase text-white/50">{project.media.diagram.caption}</figcaption>}
            </figure>
          )}
        </section>
      )}

      <ProjectNavigation slug={project.slug} />
    </main>
  );
}

export function generateStaticParams() {
  return getProjects().map((project) => ({
    slug: project.slug,
  }));
}
