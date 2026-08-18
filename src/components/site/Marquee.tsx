import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Marquee({
  items,
  className,
  slow = false,
  separator = "•",
}: {
  items: ReactNode[];
  className?: string;
  slow?: boolean;
  separator?: ReactNode;
}) {
  const loop = [...items, ...items];
  return (
    <div className={cn("marquee-hover relative overflow-hidden", className)}>
      <div className={cn("flex w-max items-center", slow ? "animate-marquee-slow" : "animate-marquee")}>
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-6 md:gap-10">
            <span className="whitespace-nowrap">{item}</span>
            <span aria-hidden className="opacity-40">
              {separator}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
