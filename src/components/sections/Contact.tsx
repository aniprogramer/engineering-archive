"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";


function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75c.97 0 1.76.78 1.76 1.75s-.79 1.76-1.76 1.76m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface SocialItem {
  name: string;
  href: string;
  icon: React.ElementType;
  label: string;
}

const socialLinks: SocialItem[] = [
  {
    name: "LinkedIn",
    href: portfolioData.socials.linkedin,
    icon: LinkedInIcon,
    label: "LINKEDIN",
  },
  {
    name: "GitHub",
    href: portfolioData.socials.github,
    icon: GitHubIcon,
    label: "GITHUB",
  },
  {
    name: "Instagram",
    href: portfolioData.socials.instagram,
    icon: InstagramIcon,
    label: "INSTAGRAM",
  },
];

export function Contact() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="contact"
      data-nav-theme="dark"
      className="bg-black text-white px-6 py-28 md:py-36 z-20 relative border-t border-white/10 overflow-hidden"
    >
      {/* Background subtle radial ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ink/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center relative z-10">
        {/* Section Identifier */}
        <div className="font-mono text-xs tracking-widest text-accent uppercase mb-6">
          05 // CONTACT
        </div>

        {/* Large Typographic Statement */}
        <div className="text-[clamp(2.5rem,7.5vw,6.5rem)] leading-[0.92] tracking-tighter uppercase font-bold space-y-2 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            LET&apos;S CREATE
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            SOMETHING
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-accent"
          >
            MEANINGFUL.
          </motion.div>
        </div>

        {/* Horizontal Divider 1 */}
        <div className="w-full max-w-2xl mx-auto h-[1px] bg-white/10 mb-8" />

        {/* Direct Channels & Metadata */}
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-3 font-mono text-xs sm:text-sm tracking-wider uppercase text-white/70">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            <span>
              EMAIL:{" "}
              <a
                href={`mailto:${portfolioData.email}`}
                className="text-white hover:text-accent transition-colors font-semibold tracking-normal lowercase"
              >
                {portfolioData.email.toLowerCase()}
              </a>
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span>LOCATION: {portfolioData.location.toUpperCase()}</span>
          </div>
          <div className="text-[0.72rem] text-accent tracking-[0.2em] font-medium mt-1">
            {portfolioData.status.toUpperCase()}
          </div>
        </div>

        {/* Horizontal Divider 2 */}
        <div className="w-full max-w-2xl mx-auto h-[1px] bg-white/10 mt-8 mb-10" />

        {/* Social Icon Row */}
        <div className="flex items-center justify-center gap-5 sm:gap-7 relative py-2">
          {socialLinks.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={item.name}
                className="relative flex flex-col items-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Desktop Micro-Tooltip / Label */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 4, scale: 0.95 }}
                      animate={{ opacity: 1, y: -6, scale: 1 }}
                      exit={{ opacity: 0, y: 2, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="hidden sm:block absolute -top-7 pointer-events-none z-30"
                    >
                      <span className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-accent bg-black/90 px-2 py-0.5 rounded border border-white/15 shadow-md">
                        {item.label}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Interactive Anchor Button */}
                <motion.a
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  aria-label={item.name}
                  whileHover={{
                    scale: 1.08,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  onFocus={() => setHoveredIndex(index)}
                  onBlur={() => setHoveredIndex(null)}
                  className="w-12 h-12 sm:w-13 sm:h-13 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.09] hover:border-accent/60 flex items-center justify-center text-white/60 hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black touch-manipulation group"
                >
                  <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-105" />
                </motion.a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Minimal Footer Line */}
      <footer className="max-w-[1440px] mx-auto mt-20 pt-8 border-t border-white/10 flex items-center justify-center font-mono text-[0.68rem] tracking-[0.2em] uppercase text-white/40">
        <div>ANIKET.DE © 2026 // ALL RIGHTS RESERVED</div>
      </footer>
    </section>
  );
}
