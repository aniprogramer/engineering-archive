import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, className, align = "left" }: SectionHeadingProps) {
  // Map titles to section IDs for the archive look
  const sectionMap: Record<string, string> = {
    "Archive": "01",
    "Toolkit": "02",
    "Engineering Logs": "03",
    "Digital Craftsman": "04",
    "Transmission": "05",
    "Featured Work": "01",
  };
  
  const sectionId = sectionMap[title] || "00";

  return (
    <div className={cn(
      "mb-16 md:mb-24",
      align === "center" ? "text-center mx-auto" : "text-left",
      className
    )}>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={cn(
          "flex items-center gap-4 mb-6",
          align === "center" && "justify-center"
        )}
      >
        <div className="h-[1px] w-12 bg-accent/30" />
        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent">
          Archive.Section.{sectionId}
        </span>
        <div className="flex gap-1.5 opacity-40">
           <div className="w-1 h-1 rounded-full bg-accent" />
           <div className="w-1 h-1 rounded-full bg-accent/50" />
        </div>
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-7xl font-serif mb-8 leading-[1.1] tracking-tight"
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted/60 text-lg md:text-xl max-w-2xl leading-relaxed font-sans"
          style={align === "center" ? { margin: "0 auto" } : {}}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative Technical Ruler */}
      <div className={cn(
        "mt-10 flex items-center gap-4 opacity-20",
        align === "center" && "justify-center"
      )}>
        <div className="flex gap-2">
           {[...Array(5)].map((_, i) => (
             <div key={i} className="w-px h-2 bg-border" />
           ))}
        </div>
        <div className="h-px flex-1 max-w-[200px] bg-border" />
        <span className="text-[6px] font-mono text-muted tracking-widest uppercase">Scale: 1:1.024</span>
      </div>
    </div>
  );
}
