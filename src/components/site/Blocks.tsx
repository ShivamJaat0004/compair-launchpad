import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Droplets } from "./Droplets";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="bg-veil relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24">
      <Droplets />
      <div className="container-px mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-[2.3rem] leading-[1.02] font-extrabold sm:text-5xl xl:text-[4.1rem]">
              {title}
            </h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={160}>
              <p className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed md:text-lg">
                {subtitle}
              </p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-3">{children}</div>
            </Reveal>
          )}
        </div>
        {image && (
          <Reveal dir="scale" delay={120} className="relative">
            <div className="shadow-card-premium relative overflow-hidden rounded-[2rem]">
              <img
                src={image}
                alt={imageAlt ?? ""}
                loading="lazy"
                className="h-[280px] w-full object-cover transition-transform duration-[1400ms] hover:scale-105 md:h-[440px]"
              />
              <div className="from-primary/25 pointer-events-none absolute inset-0 bg-gradient-to-tr to-transparent" />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <Reveal>
          <p className={cn("eyebrow", invert && "text-primary")}>{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2
          className={cn(
            "mt-4 text-3xl leading-[1.08] font-extrabold sm:text-4xl xl:text-[3rem]",
            invert && "text-charcoal-foreground",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p
            className={cn(
              "text-muted-foreground mt-5 text-base leading-relaxed md:text-lg",
              invert && "text-charcoal-foreground/70",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <Reveal delay={index * 90} dir="up">
      <article className="group border-border/70 bg-card relative h-full overflow-hidden rounded-[1.6rem] border p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)] md:p-9">
        <div className="bg-primary-soft absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative">
          <span className="bg-brand text-primary-foreground flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
            <Icon className="h-5 w-5" />
          </span>
          <h3 className="mt-6 text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{description}</p>
        </div>
      </article>
    </Reveal>
  );
}

export function CtaBand({
  title = "Ready to build your Compair journey?",
  description = "Looking for a premium water distribution opportunity? Partner with a brand built on quality, reliability and trust.",
  primaryLabel = "Become a Distributor",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="container-px mx-auto max-w-[1600px] py-16 md:py-24">
      <Reveal dir="scale">
        <div className="bg-charcoal relative overflow-hidden rounded-[2rem] px-7 py-14 md:px-16 md:py-20">
          <div className="bg-primary/25 absolute -top-24 -right-16 h-72 w-72 rounded-full blur-3xl" />
          <div className="animate-ripple border-primary/30 absolute -bottom-20 -left-10 h-64 w-64 rounded-full border" />
          <div className="relative max-w-2xl">
            <p className="eyebrow">Partner With Compair</p>
            <h2 className="text-charcoal-foreground mt-4 text-3xl leading-tight font-extrabold sm:text-4xl xl:text-[3rem]">
              {title}
            </h2>
            <p className="text-charcoal-foreground/70 mt-5 text-base leading-relaxed">
              {description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  {primaryLabel} <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="onDark" size="xl">
                <Link to="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function StickyMobileCta() {
  return (
    <div className="glass-panel border-border/70 fixed inset-x-0 bottom-0 z-40 border-t p-3 md:hidden">
      <Button asChild variant="hero" size="xl" className="w-full">
        <Link to="/contact">
          Become a Distributor <ArrowRight />
        </Link>
      </Button>
    </div>
  );
}
