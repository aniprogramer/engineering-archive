import { Preloader } from "@/components/ui/Preloader";
import { Navigation } from "@/components/ui/Navigation";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { WorkTransition } from "@/components/sections/WorkTransition";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <GrainOverlay />
      <Preloader />
      <Navigation />
      
      <div className="relative">
        <Hero />
        <About />
        <Experience />
        <Expertise />
        <WorkTransition />
        <ProjectShowcase />
        <Contact />
      </div>
    </main>
  );
}
