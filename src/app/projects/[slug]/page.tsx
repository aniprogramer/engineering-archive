import { portfolioData } from "@/data/portfolio";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navigation } from "@/components/ui/Navigation";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projectIndex = portfolioData.projects.findIndex(p => p.slug === slug);
  const project = portfolioData.projects[projectIndex];
  
  if (!project) return notFound();

  const prevProject = projectIndex > 0 ? portfolioData.projects[projectIndex - 1] : null;
  const nextProject = projectIndex < portfolioData.projects.length - 1 ? portfolioData.projects[projectIndex + 1] : null;

  return (
    <main className="relative bg-black min-h-screen text-white">
      <Navigation forcedTheme="dark" />
      
      {/* Hero Section */}
      <section data-nav-theme="dark" className="pt-48 pb-24 px-6 max-w-[1440px] mx-auto border-b border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="flex flex-col gap-6">
            <div className="text-[var(--text-meta)] font-mono tracking-widest text-white/50">{project.number}</div>
            <h1 className="text-[var(--text-display)] uppercase leading-[0.85] tracking-tight text-cream-warm">
              {project.title}
            </h1>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4 max-w-sm">
            <div className="text-[var(--text-meta)] font-mono tracking-widest text-accent uppercase">{project.category}</div>
            <p className="text-white/80 md:text-right">{project.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Visual */}
      <section className="px-6 py-12 max-w-[1440px] mx-auto">
        <div className="w-full aspect-video bg-ink/20 border border-white/10 flex items-center justify-center">
           <span className="font-mono text-[var(--text-meta)] tracking-widest uppercase text-white/20">
             {project.title} Hero Visual
           </span>
        </div>
      </section>

      {/* Details */}
      <section className="px-6 py-24 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 border-b border-white/10">
        <div className="md:col-span-4 flex flex-col gap-12">
          {project.technologies.length > 0 && (
            <div>
              <h3 className="font-mono text-[var(--text-meta)] tracking-widest uppercase text-white/50 mb-6">Technologies</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm tracking-widest uppercase text-white/90">
                {project.technologies.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="md:col-span-8 flex flex-col gap-24">
          <div>
            <h3 className="text-3xl uppercase mb-8 text-cream">Overview</h3>
            <p className="text-xl text-white/80 leading-relaxed text-balance">
              {project.thesis}
            </p>
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="px-6 py-32 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between gap-16">
        {prevProject ? (
          <Link href={`/projects/${prevProject.slug}`} className="group flex flex-col gap-4">
            <span className="font-mono text-[var(--text-meta)] tracking-widest uppercase text-white/50 group-hover:text-accent transition-colors">Previous</span>
            <span className="text-3xl md:text-5xl uppercase text-white/80 group-hover:text-white transition-colors">{prevProject.title}</span>
          </Link>
        ) : <div />}

        {nextProject ? (
          <Link href={`/projects/${nextProject.slug}`} className="group flex flex-col gap-4 text-right items-end">
            <span className="font-mono text-[var(--text-meta)] tracking-widest uppercase text-white/50 group-hover:text-accent transition-colors">Next</span>
            <span className="text-3xl md:text-5xl uppercase text-white/80 group-hover:text-white transition-colors">{nextProject.title}</span>
          </Link>
        ) : <div />}
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}
