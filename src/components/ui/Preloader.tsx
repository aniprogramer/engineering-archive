"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "hello" | "wiping" | "done">("loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase("hello"), 150);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (phase === "hello") {
      setTimeout(() => setPhase("wiping"), 700);
    } else if (phase === "wiping") {
      setTimeout(() => setPhase("done"), 600);
    }
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
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
                      <circle
                        cx="50"
                        cy="50"
                        r="48"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="1.5"
                      />
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
                <motion.div
                  key="hello"
                  className="flex items-center justify-center text-cream-warm"
                >
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
                      d="M10,40 Q10,10 25,10 Q35,25 25,40 Q35,40 40,25 M50,30 C40,30 40,40 50,40 M60,10 L60,40 M75,10 L75,40 M90,30 C90,20 105,20 105,30 C105,40 90,40 90,30"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
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
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
