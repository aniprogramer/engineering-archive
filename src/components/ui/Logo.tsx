export function Logo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120" 
      fill="none" 
      className={className}
      aria-hidden="true"
    >
      <path d="M56 20 L50 20 L10 100 L34 100 L56 56 Z" fill="currentColor" />
      <path d="M64 20 L70 20 L110 100 L86 100 L64 56 Z" fill="currentColor" className="opacity-40" />
      <rect x="48" y="72" width="24" height="10" fill="#F9E8A2" />
    </svg>
  );
}
