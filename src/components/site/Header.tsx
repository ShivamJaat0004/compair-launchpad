import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BrandMark } from "./Brand";
import { Marquee } from "./Marquee";
import { cn } from "@/lib/utils";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/mission-vision", label: "Mission & Vision" },
  { to: "/products", label: "Products" },
  { to: "/distributor-opportunity", label: "Distributor Opportunity" },
  { to: "/distribution-journey", label: "Distribution Journey" },
  { to: "/happy-journey", label: "Happy Journey" },
  { to: "/contact", label: "Contact" },
] as const;

const TICKER = [
  "PURE HYDRATION",
  "TRUSTED PARTNERS",
  "RELIABLE DISTRIBUTION",
  "BETTER LIVES",
  "GROW TOGETHER",
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-brand text-primary-foreground py-1.5 text-[0.62rem] font-semibold tracking-[0.28em]">
        <Marquee items={TICKER} slow />
      </div>

      <div
        className={cn(
          "transition-all duration-500",
          scrolled || open
            ? "glass-panel border-b border-border/70 shadow-[var(--shadow-soft)]"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="container-px mx-auto flex h-16 max-w-[1600px] items-center justify-between gap-4 md:h-[4.5rem]">
          <Link to="/" onClick={() => setOpen(false)} aria-label="Compair Premium Water home">
            <BrandMark />
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary bg-accent/70" }}
                className="text-muted-foreground hover:text-foreground rounded-full px-3 py-2 text-[0.78rem] font-semibold transition-colors hover:bg-accent/60"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="hero" size="xl" className="hidden md:inline-flex">
              <Link to="/contact">
                Become a Distributor <ArrowRight />
              </Link>
            </Button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="border-border text-foreground inline-flex h-10 w-10 items-center justify-center rounded-full border xl:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="glass-panel border-border/60 h-[calc(100dvh-6.5rem)] overflow-y-auto border-b xl:hidden">
          <nav className="container-px mx-auto flex flex-col gap-1 py-6" aria-label="Mobile">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                onClick={() => setOpen(false)}
                className="font-display border-border/60 flex items-center justify-between border-b py-4 text-lg font-semibold"
              >
                {item.label}
                <ArrowRight className="text-primary h-4 w-4" />
              </Link>
            ))}
            <Button asChild variant="hero" size="xl" className="mt-6 w-full">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Become a Distributor
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
