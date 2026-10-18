"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/ui/Navigation";

const ease = [0.22, 1, 0.36, 1] as const;
const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease, delay },
});

const btn =
  "inline-flex items-center justify-center gap-3 px-8 py-4 min-h-12 font-mono text-sm tracking-widest uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent transition-colors";

const noop = () => () => {};

// Next renders this file for every unmatched URL and for notFound() calls, with a real 404 status.
export default function NotFound() {
  // This page is prerendered, so the server cannot know the requested URL; read it on the client after hydration.
  const pathname = useSyncExternalStore(noop, () => window.location.pathname, () => "");

  return (
    <main className="relative bg-black min-h-screen text-white overflow-hidden flex flex-col">
      <Navigation forcedTheme="dark" />

      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <section className="relative flex-1 flex flex-col justify-center px-6 pt-32 pb-20 max-w-[1440px] w-full mx-auto">
        <motion.div {...reveal(0.1)} className="font-mono text-xs tracking-widest uppercase text-accent mb-6">
          ERR {"//"} ROUTE_NOT_FOUND {"//"} HTTP 404
        </motion.div>

        <h1 className="flex items-center gap-[0.04em] text-[clamp(7rem,28vw,26rem)] leading-[0.8] font-bold uppercase tracking-tight text-cream-warm">
          <motion.span {...reveal(0.2)}>4</motion.span>
          <motion.span {...reveal(0.3)} className="relative inline-flex items-center justify-center">
            0
            <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_24s_linear_infinite]">
              <circle cx="50" cy="50" r="49" fill="none" stroke="var(--color-accent)" strokeWidth="0.3" strokeDasharray="1 3" />
              <circle cx="50" cy="1" r="1.4" fill="var(--color-accent)" />
            </svg>
          </motion.span>
          <motion.span {...reveal(0.4)}>4</motion.span>
        </h1>

        <motion.div {...reveal(0.55)} className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <h2 className="text-3xl md:text-5xl uppercase tracking-tight text-cream">This page does not exist.</h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-xl">
              The link may be broken, or the page may have moved. Nothing is wrong with your connection; this route was never
              registered in this build.
            </p>
            <pre className="font-mono text-xs sm:text-sm text-white/60 border-l-2 border-accent pl-4 py-1 overflow-x-auto">
              <span className="text-accent">GET</span> <span className="break-all">{pathname}</span>
              {"\n"}
              <span className="text-white/40">{"->"}</span> 404 Not Found · no handler matched
            </pre>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
            <Link href="/" className={`${btn} bg-accent text-black hover:bg-white`}>
              Back to home <span aria-hidden="true">→</span>
            </Link>
            <Link href="/projects" className={`${btn} border border-white/30 text-white hover:border-accent hover:text-accent`}>
              View projects <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
