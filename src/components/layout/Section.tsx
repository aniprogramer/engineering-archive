import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}

export function Section({ children, className, id, containerClassName }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn("py-24 md:py-48 overflow-hidden relative", className)}
    >
      {/* Subtle Spatial Details */}
      <div className="absolute top-12 left-6 md:left-12 flex flex-col gap-1 opacity-[0.03] select-none pointer-events-none hidden md:flex font-mono text-[6px] uppercase tracking-widest text-muted">
        <span>Coordinate_X: 021.345</span>
        <span>Coordinate_Y: 078.102</span>
      </div>
      <div className="absolute bottom-12 right-6 md:right-12 flex flex-col items-end gap-1 opacity-[0.03] select-none pointer-events-none hidden md:flex font-mono text-[6px] uppercase tracking-widest text-muted">
        <span>Systems_Check: STABLE</span>
        <span>Archive_Ref: BUILD.LOG.2026</span>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {children}
      </div>

      {/* Subtle Technical Border */}
      <div className="absolute bottom-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent opacity-20" />
    </section>
  );
}
