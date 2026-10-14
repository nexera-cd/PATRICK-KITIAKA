import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const dimensions = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  }[size];

  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 transition-transform hover:scale-[1.02] focus:outline-none ${className}`}
      aria-label="Patrick Kitiaka - Accueil"
    >
      <div
        className={`${dimensions} relative flex items-center justify-center rounded-xl bg-neutral-900 border border-neutral-700/60 dark:bg-neutral-950 dark:border-lime-500/30 shadow-md group-hover:border-lime-400 group-hover:shadow-[0_0_15px_rgba(163,230,53,0.35)] transition-all duration-300 overflow-hidden`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full p-1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* P stem & bowl in white */}
          <path
            d="M26 24 V76 M26 24 H46 C56 24 60 30 60 40 C60 50 56 54 46 54 H26"
            stroke="#FFFFFF"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* K arms in Lime */}
          <path
            d="M54 50 L78 24 M63 42 L80 76"
            stroke="#A3E635"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="78" cy="24" r="4.5" fill="#A3E635" />
        </svg>
      </div>

      <div className="flex flex-col text-left">
        <span className="font-bold text-base sm:text-lg tracking-tight text-neutral-900 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
          Patrick Kitiaka
        </span>
        <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          Agent Marketeur
        </span>
      </div>
    </Link>
  );
}
