"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  forcedTheme?: "light" | "dark";
}

export function Navigation({ forcedTheme }: NavigationProps) {
  const pathname = usePathname();
  const isProjectPage = pathname?.startsWith("/projects/") || false;

  const [scrollTheme, setScrollTheme] = useState<"light" | "dark">("light");
  const [resumeMenuOpen, setResumeMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const resumeMenuRef = useRef<HTMLDivElement>(null);
  const mobileResumeMenuRef = useRef<HTMLDivElement>(null);

  // Derive active theme: forcedTheme takes precedence, followed by project page default (dark), followed by scroll theme
  const navTheme = forcedTheme || (isProjectPage ? "dark" : scrollTheme);
  const isLight = navTheme === "light";

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        resumeMenuRef.current &&
        !resumeMenuRef.current.contains(e.target as Node) &&
        mobileResumeMenuRef.current &&
        !mobileResumeMenuRef.current.contains(e.target as Node)
      ) {
        setResumeMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sync data-theme attribute on root element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", navTheme);
  }, [navTheme]);

  // Track active section on scroll when on homepage
  useEffect(() => {
    if (forcedTheme || isProjectPage) return;

    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section[data-nav-theme]");
      const navCheckY = 60;
      let activeTheme: "light" | "dark" = "light";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navCheckY && rect.bottom >= navCheckY) {
          const theme = section.getAttribute("data-nav-theme");
          if (theme === "dark" || theme === "light") {
            activeTheme = theme;
          }
        }
      });

      setScrollTheme(activeTheme);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forcedTheme, isProjectPage]);

  // Navigation target prefix: return to homepage anchors if on a project page
  const anchorPrefix = isProjectPage ? "/" : "";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 py-4 sm:py-5 transition-all duration-300 ${
        isLight
          ? "bg-cream-warm/90 backdrop-blur-md border-b border-ink/10 text-ink"
          : "bg-black/90 backdrop-blur-md border-b border-white/10 text-white"
      }`}
    >
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between text-[0.75rem] font-mono tracking-widest uppercase">
        <Link
          href="/"
          className={`font-bold transition-colors ${
            isLight ? "hover:text-blue" : "hover:text-accent"
          }`}
        >
          ANIKET.DE
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href={`${anchorPrefix}#about`}
            className={`transition-colors ${
              isLight ? "hover:text-blue" : "hover:text-accent"
            }`}
          >
            About
          </Link>
          <Link
            href={`${anchorPrefix}#experience`}
            className={`transition-colors ${
              isLight ? "hover:text-blue" : "hover:text-accent"
            }`}
          >
            Experience
          </Link>
          <Link
            href={`${anchorPrefix}#expertise`}
            className={`transition-colors ${
              isLight ? "hover:text-blue" : "hover:text-accent"
            }`}
          >
            Technologies
          </Link>
          <Link
            href={`${anchorPrefix}#projects`}
            className={`transition-colors ${
              isLight ? "hover:text-blue" : "hover:text-accent"
            }`}
          >
            Projects
          </Link>
          <Link
            href={`${anchorPrefix}#contact`}
            className={`transition-colors ${
              isLight ? "hover:text-blue" : "hover:text-accent"
            }`}
          >
            Contact
          </Link>

          {/* Resume Dropdown Button */}
          <div className="relative" ref={resumeMenuRef}>
            <button
              onClick={() => setResumeMenuOpen((prev) => !prev)}
              aria-expanded={resumeMenuOpen}
              className={`px-3.5 py-1.5 rounded border transition-colors flex items-center gap-2 text-[0.7rem] font-semibold cursor-pointer ${
                isLight
                  ? "border-ink text-ink hover:bg-ink hover:text-white"
                  : "border-accent text-accent hover:bg-accent hover:text-black"
              }`}
            >
              <span>Resume</span>
              <span className={`transition-transform duration-200 ${resumeMenuOpen ? "rotate-180" : ""}`}>
                ▾
              </span>
            </button>

            {/* Dropdown Menu (View & Download) */}
            {resumeMenuOpen && (
              <div
                className={`absolute right-0 mt-2 w-48 py-2 rounded shadow-2xl border transition-all z-50 ${
                  isLight
                    ? "bg-cream-warm border-ink/20 text-ink shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
                    : "bg-[#111418] border-white/15 text-white shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                }`}
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setResumeMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 text-[0.7rem] tracking-wider transition-colors ${
                    isLight
                      ? "hover:bg-ink hover:text-white"
                      : "hover:bg-white/10 hover:text-accent"
                  }`}
                >
                  <span>1. View Resume</span>
                  <span>↗</span>
                </a>
                <a
                  href="/resume.pdf"
                  download="Aniket_De_Resume.pdf"
                  onClick={() => setResumeMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 text-[0.7rem] tracking-wider transition-colors ${
                    isLight
                      ? "hover:bg-ink hover:text-white"
                      : "hover:bg-white/10 hover:text-accent"
                  }`}
                >
                  <span>2. Download Resume</span>
                  <span>↓</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation / Buttons */}
        <div className="flex md:hidden items-center gap-3">
          {/* Mobile Resume Dropdown */}
          <div className="relative" ref={mobileResumeMenuRef}>
            <button
              onClick={() => setResumeMenuOpen((prev) => !prev)}
              className={`px-2.5 py-1 text-[0.68rem] border rounded flex items-center gap-1.5 cursor-pointer ${
                isLight ? "border-ink text-ink" : "border-accent text-accent"
              }`}
            >
              <span>Resume</span>
              <span className="text-[0.6rem]">▾</span>
            </button>

            {resumeMenuOpen && (
              <div
                className={`absolute right-0 top-10 w-44 py-1.5 rounded shadow-2xl border z-50 ${
                  isLight
                    ? "bg-cream-warm border-ink/20 text-ink"
                    : "bg-[#111418] border-white/15 text-white"
                }`}
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setResumeMenuOpen(false)}
                  className={`block px-3 py-2 text-[0.65rem] tracking-wider ${
                    isLight ? "hover:bg-ink hover:text-white" : "hover:bg-white/10 hover:text-accent"
                  }`}
                >
                  1. View Resume ↗
                </a>
                <a
                  href="/resume.pdf"
                  download="Aniket_De_Resume.pdf"
                  onClick={() => setResumeMenuOpen(false)}
                  className={`block px-3 py-2 text-[0.65rem] tracking-wider ${
                    isLight ? "hover:bg-ink hover:text-white" : "hover:bg-white/10 hover:text-accent"
                  }`}
                >
                  2. Download Resume ↓
                </a>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            className={`p-1.5 rounded transition-colors cursor-pointer ${
              isLight ? "hover:text-blue" : "hover:text-accent"
            }`}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden mt-4 pt-4 border-t flex flex-col gap-4 font-mono text-[0.8rem] tracking-widest uppercase transition-all ${
            isLight
              ? "border-ink/10 text-ink"
              : "border-white/10 text-white"
          }`}
        >
          <Link
            href={`${anchorPrefix}#about`}
            onClick={() => setMobileMenuOpen(false)}
            className={`py-1 transition-colors ${
              isLight ? "hover:text-blue" : "hover:text-accent"
            }`}
          >
            About
          </Link>
          <Link
            href={`${anchorPrefix}#experience`}
            onClick={() => setMobileMenuOpen(false)}
            className={`py-1 transition-colors ${
              isLight ? "hover:text-blue" : "hover:text-accent"
            }`}
          >
            Experience
          </Link>
          <Link
            href={`${anchorPrefix}#expertise`}
            onClick={() => setMobileMenuOpen(false)}
            className={`py-1 transition-colors ${
              isLight ? "hover:text-blue" : "hover:text-accent"
            }`}
          >
            Technologies
          </Link>
          <Link
            href={`${anchorPrefix}#projects`}
            onClick={() => setMobileMenuOpen(false)}
            className={`py-1 transition-colors ${
              isLight ? "hover:text-blue" : "hover:text-accent"
            }`}
          >
            Projects
          </Link>
          <Link
            href={`${anchorPrefix}#contact`}
            onClick={() => setMobileMenuOpen(false)}
            className={`py-1 transition-colors ${
              isLight ? "hover:text-blue" : "hover:text-accent"
            }`}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
