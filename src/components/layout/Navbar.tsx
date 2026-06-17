"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, MapPin } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
} from "@/components/ui/SocialIcons";
import { cn } from "@/lib/utils";
import { portfolioData } from "@/data/portfolio";
import { Magnetic } from "@/components/ui/Magnetic";

const navLinks = [
  { name: "Projects", href: "#projects", ref: "01" },
  { name: "Toolkit", href: "#skills", ref: "02" },
  { name: "Logs", href: "#experience", ref: "03" },
  { name: "About", href: "#about", ref: "04" },
  { name: "Transmissions", href: "#contact", ref: "05" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/40 py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-8",
      )}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between relative h-16">
        {/* Left Section: Badges + Identity */}
        <div className="flex flex-col justify-center h-full">
          {/* Status Badges Row (Hidden on scroll for cleaner dashboard feel) */}
          <div
            className={cn(
              "flex items-center gap-3 transition-all duration-500 origin-left",
              isScrolled
                ? "opacity-0 -translate-y-2 pointer-events-none scale-90 h-0"
                : "opacity-100 translate-y-0 h-5 mb-1",
            )}
          >
            {/* <div className="flex items-center gap-1.5 px-2 py-0.5 border border-border/30 bg-surface/30 rounded-sm">
              <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
              <span className="text-[7px] font-mono uppercase tracking-[0.2em] text-muted/60">
                {portfolioData.status}
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 border border-border/30 bg-surface/30 rounded-sm">
              <MapPin size={8} className="text-accent/60" />
              <span className="text-[7px] font-mono uppercase tracking-[0.2em] text-muted/60">
                {portfolioData.location}
              </span>
            </div> */}
          </div>

          <motion.a
            href="#"
            className="group flex flex-col items-start mt-1"
            data-cursor="pointer"
          >
            <span className="text-2xl font-serif font-bold tracking-tight text-foreground group-hover:text-accent transition-colors duration-500 leading-none mb-1.5">
              {portfolioData.firstName} {portfolioData.lastName}
            </span>
            <div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-all duration-500">
              <div className="h-[1px] w-4 bg-accent/40 group-hover:w-8 transition-all duration-500" />
              <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted/80 group-hover:text-accent/80 transition-colors">
                Systems Architect // Build.2026
              </span>
            </div>
          </motion.a>
        </div>

        {/* Center: Navigation (Perfectly centered on the navbar baseline) */}
        <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 h-full">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group/nav">
                <a
                  href={link.href}
                  className="flex items-start gap-1.5 py-2"
                  data-cursor="pointer"
                >
                  <span className="text-[7px] font-mono text-accent/40 mt-1 opacity-0 group-hover/nav:opacity-100 transition-opacity">
                    [{link.ref}]
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted/60 group-hover/nav:text-foreground transition-all duration-300">
                    {link.name}
                  </span>
                  {/* Underline reveal */}
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent/40 scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-500 origin-left" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Icons + Time */}
        <div className="hidden lg:flex items-center gap-8 h-full  ">
          {/* Real-time Clock */}
          <div className="flex items-center gap-3 px-6 border-l border-border/30 h-8">
            <span className="text-[10px] font-mono text-muted/40 uppercase tracking-[0.3em] tabular-nums">
              TS_{currentTime}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {[
              {
                icon: GithubIcon,
                href: portfolioData.socials.github,
                label: "GitHub",
              },
              {
                icon: LinkedinIcon,
                href: portfolioData.socials.linkedin,
                label: "LinkedIn",
              },
              {
                icon: InstagramIcon,
                href: portfolioData.socials.instagram,
                label: "Instagram",
              },
            ].map((social, i) => (
              <Magnetic key={i} strength={0.15}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-border/30 hover:border-accent/30 hover:bg-accent/[0.03] text-muted/60 hover:text-accent transition-all duration-500 rounded-sm relative group/soc"
                  data-cursor="link"
                >
                  <social.icon size={18} className="relative z-10" />
                  {/* Subtle copper glow/reveal */}
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover/soc:opacity-100 transition-opacity duration-700" />
                  <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(201,123,66,0.1)] opacity-0 group-hover/soc:opacity-100 transition-opacity duration-700" />
                </a>
              </Magnetic>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden w-12 h-12 border border-border/30 flex items-center justify-center text-muted hover:text-accent transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-surface border-b border-border shadow-2xl"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-start gap-2 group"
                >
                  <span className="text-[10px] font-mono text-accent/60 mt-1">
                    [{link.ref}]
                  </span>
                  <span className="text-xl font-mono uppercase tracking-widest text-foreground group-hover:text-accent transition-colors">
                    {link.name}
                  </span>
                </a>
              ))}
              <div className="pt-8 border-t border-border flex justify-between items-center">
                <div className="flex gap-6">
                  <a
                    href={portfolioData.socials.github}
                    className="text-muted hover:text-accent transition-colors"
                  >
                    <GithubIcon size={20} />
                  </a>
                  <a
                    href={portfolioData.socials.linkedin}
                    className="text-muted hover:text-accent transition-colors"
                  >
                    <LinkedinIcon size={20} />
                  </a>
                  <a
                    href={portfolioData.socials.instagram}
                    className="text-muted hover:text-accent transition-colors"
                  >
                    <InstagramIcon size={20} />
                  </a>
                </div>
                <a
                  href={portfolioData.socials.resume}
                  className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-accent group"
                >
                  <FileText size={16} />{" "}
                  <span className="border-b border-accent/20 group-hover:border-accent transition-colors">
                    Resume_Logs
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
