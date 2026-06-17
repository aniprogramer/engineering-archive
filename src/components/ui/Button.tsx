import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
}

export function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  className, 
  href,
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-mono text-sm tracking-wider uppercase transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-accent text-background hover:bg-accent-light px-8",
    secondary: "bg-surface text-foreground hover:bg-border border border-border px-8",
    outline: "bg-transparent border border-accent text-accent hover:bg-accent hover:text-background px-8",
    ghost: "bg-transparent text-muted hover:text-foreground hover:bg-white/5",
  };
  
  const sizes = {
    sm: "h-10 px-4",
    md: "h-12 px-6",
    lg: "h-14 px-10",
  };

  const content = (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}
