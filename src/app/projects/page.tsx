import type { Metadata } from "next";
import { Navigation } from "@/components/ui/Navigation";
import { ProjectsList } from "@/components/sections/ProjectsList";
import { getProjects, portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Projects | ${portfolioData.name}`,
  description: "Full-stack, AI/ML, cybersecurity, real-time and graphics projects by Aniket De.",
};

export default function ProjectsPage() {
  return (
    <main className="relative bg-black min-h-screen text-white">
      <Navigation forcedTheme="dark" />
      <section className="pt-40 pb-32 px-6 max-w-[1440px] mx-auto flex flex-col gap-16">
        <header className="flex flex-col gap-6">
          <div className="font-mono text-xs tracking-widest text-accent uppercase">
            Archive {"//"} {String(getProjects().length).padStart(2, "0")} projects
          </div>
          <h1 className="text-[length:var(--text-section)] uppercase leading-[0.85] tracking-tight text-cream-warm">
            All Projects
          </h1>
        </header>
        <ProjectsList />
      </section>
    </main>
  );
}
