"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Single-stroke cursive "hello", hand-drawn for a 120x50 viewBox.
const HELLO_PATH =
  "M6 40 C8 28 10 14 13 8 C15 4 17 6 15 14 C13 24 11 34 12 38 C14 30 20 22 25 24 C29 26 25 34 26 38 C27 41 31 38 33 33 " +
  "C35 28 41 25 43 29 C45 33 37 34 34 33 C36 39 42 40 46 34 " +
  "C49 28 52 14 55 8 C57 4 60 6 58 14 C56 24 54 34 56 38 C58 40 61 37 63 33 " +
  "C65 27 68 14 71 8 C73 4 76 6 74 14 C72 24 70 34 72 38 C74 40 77 37 79 33 " +
  "C81 28 87 26 90 29 C93 33 88 40 84 37 C81 34 86 27 91 28 C96 29 100 30 108 27";

const HELLO_MS = 600;
const WIPE_MS = 1000;

const REDUCED = "(prefers-reduced-motion: reduce)";
const subscribeReduced = (cb: () => void) => {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

export function Preloader() {
  // Server snapshot is false so hydration matches; the client corrects right after.
  const reduced = useSyncExternalStore(subscribeReduced, () => window.matchMedia(REDUCED).matches, () => false);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "hello" | "wiping" | "done">("loading");

  useEffect(() => {
    if (reduced || phase !== "loading") return;
    const interval = setInterval(() => setProgress((p) => Math.min(100, p + Math.floor(Math.random() * 10) + 5)), 30);
    return () => clearInterval(interval);
  }, [phase, reduced]);

  useEffect(() => {
    if (reduced) return;
    if (phase === "loading" && progress >= 100) {
      const t = setTimeout(() => setPhase("hello"), 150);
      return () => clearTimeout(t);
    }
    if (phase === "hello") {
      const t = setTimeout(() => setPhase("wiping"), HELLO_MS + 100);
      return () => clearTimeout(t);
    }
    if (phase === "wiping") {
      const t = setTimeout(() => setPhase("done"), WIPE_MS);
      return () => clearTimeout(t);
    }
  }, [phase, progress, reduced]);

  if (reduced || phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden pointer-events-none">
      <AnimatePresence>
        {(phase === "loading" || phase === "hello") && (
          <motion.div
            key="preloader-bg"
            className="absolute inset-0 bg-black flex items-center justify-center"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <AnimatePresence mode="wait">
              {phase === "loading" && (
                <motion.div
                  key="loading"
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="48"
                        fill="none"
                        stroke="var(--color-cream-warm)"
                        strokeWidth="2"
                        strokeDasharray="301.59"
                        strokeDashoffset={301.59 - (progress / 100) * 301.59}
                        transition={{ ease: "linear" }}
                      />
                    </svg>
                    <div className="absolute font-mono text-[0.72rem] tracking-widest text-white/80">
                      {Math.min(progress, 100)}%
                    </div>
                  </div>
                </motion.div>
              )}

              {phase === "hello" && (
                <motion.div key="hello" className="flex items-center justify-center text-cream-warm">
                  <svg
                    width="120"
                    height="50"
                    viewBox="0 0 120 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <motion.path
                      d={HELLO_PATH}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: HELLO_MS / 1000, ease: "easeOut" }}
                    />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {phase === "wiping" && (
          <motion.div
            key="wipe"
            className="absolute inset-0 bg-cream-warm"
            initial={{ y: "100%" }}
            animate={{ y: "-100%" }}
            transition={{ duration: WIPE_MS / 1000, ease: [0.76, 0, 0.24, 1] }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
