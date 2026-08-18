import { cn } from "@/lib/utils";

export function BrandMark({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="bg-brand flex h-9 w-9 items-center justify-center rounded-xl shadow-[var(--shadow-soft)]">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
          <path
            d="M12 2.5c4.2 4.6 6.5 7.9 6.5 11.1A6.5 6.5 0 0 1 12 20a6.5 6.5 0 0 1-6.5-6.4c0-3.2 2.3-6.5 6.5-11.1Z"
            fill="white"
            fillOpacity="0.95"
          />
        </svg>
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "font-display block text-[0.95rem] font-extrabold tracking-tight",
            inverted ? "text-charcoal-foreground" : "text-foreground",
          )}
        >
          COMPAIR
        </span>
        <span
          className={cn(
            "block text-[0.6rem] font-semibold tracking-[0.28em]",
            inverted ? "text-charcoal-foreground/60" : "text-muted-foreground",
          )}
        >
          PREMIUM WATER
        </span>
      </span>
    </span>
  );
}
