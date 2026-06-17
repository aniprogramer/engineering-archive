import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-20 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-6">
            <a href="#" className="flex flex-col mb-8">
              <span className="text-3xl font-serif font-bold tracking-tight text-foreground">
                {portfolioData.firstName} {portfolioData.lastName}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent">
                Systems Architect // Build_Archive.2026
              </span>
            </a>
            <p className="text-muted text-sm max-w-sm leading-relaxed font-mono uppercase tracking-widest opacity-60">
              Designed with engineering principles. Handcrafted with care. No AI templates were harmed in the making of this archive.
            </p>
          </div>
          
          <div className="lg:col-span-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="flex gap-8">
              <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="text-muted hover:text-accent transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-accent transition-colors">
                <LinkedinIcon size={20} />
              </a>
              <a href={portfolioData.socials.instagram} target="_blank" rel="noreferrer" className="text-muted hover:text-accent transition-colors">
                <InstagramIcon size={20} />
              </a>
            </div>
            
            <div className="text-right">
              <div className="text-[10px] font-mono text-muted/50 uppercase tracking-[0.3em] mb-2">System Version</div>
              <div className="text-sm font-mono text-foreground uppercase tracking-widest">
                v4.0.0-PROD // {currentYear}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-muted/40 uppercase tracking-[0.2em]">
          <p>© {portfolioData.name}. All systems operational.</p>
          <div className="flex gap-8 mt-4 md:md:mt-0">
             <span>Protocol: HTTPS</span>
             <span>Encoding: UTF-8</span>
             <span>Region: {portfolioData.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
