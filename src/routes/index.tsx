import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Droplet, ShieldCheck, Truck, TrendingUp, MapPin, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { Droplets } from "@/components/site/Droplets";
import { Marquee } from "@/components/site/Marquee";
import { CtaBand, FeatureCard, SectionHeading } from "@/components/site/Blocks";
import heroBottle from "@/assets/hero-bottle.png";
import retailImg from "@/assets/retail.jpg";
import truckImg from "@/assets/truck.jpg";
import productionImg from "@/assets/production.jpg";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Compair Premium Water | Pure Hydration. Better Lives." },
      {
        name: "description",
        content:
          "Compair Premium Water delivers premium packaged drinking water through a trusted distribution network. Explore the brand and become a Compair distributor.",
      },
      { property: "og:title", content: "Compair Premium Water | Pure Hydration. Better Lives." },
      {
        property: "og:description",
        content:
          "Premium packaged drinking water, reliable distribution and a strong partnership opportunity.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const WHY = [
  {
    icon: Droplet,
    title: "Pure Hydration",
    description: "Quality-focused hydration designed for everyday life.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Quality",
    description: "Consistency and care at every stage of the journey.",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    description: "Built around dependable distribution and timely delivery.",
  },
  {
    icon: TrendingUp,
    title: "Strong Brand Opportunity",
    description: "A growing platform for distributors and business partners.",
  },
  {
    icon: MapPin,
    title: "Local Market Strength",
    description: "Strong local understanding combined with a professional brand.",
  },
  {
    icon: Leaf,
    title: "Sustainable Future",
    description: "Responsible practices for a healthier tomorrow.",
  },
];

const PARTNERS = [
  "RETAIL PARTNERS",
  "HOSPITALITY PARTNERS",
  "CORPORATE PARTNERS",
  "INSTITUTIONAL PARTNERS",
  "DISTRIBUTION PARTNERS",
  "MODERN TRADE",
  "LOCAL RETAIL",
  "EVENT PARTNERS",
];

function Home() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY, 700));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="bg-veil relative overflow-hidden pt-28 pb-12 md:pt-40 md:pb-20">
        <Droplets />
        <div className="container-px mx-auto grid max-w-[1600px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10">
            <Reveal>
              <p className="eyebrow">Premium Packaged Drinking Water</p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-5 text-[2.6rem] leading-[0.98] font-extrabold sm:text-6xl xl:text-[5.2rem]">
                PURE HYDRATION.
                <br />
                <span className="text-gradient-brand">BETTER LIVES.</span>
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="text-muted-foreground mt-7 max-w-xl text-base leading-relaxed md:text-lg">
                Building stronger communities through pure hydration, reliable distribution and
                trusted partnerships.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">
                    Become a Distributor <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="heroOutline" size="xl">
                  <Link to="/about">Explore Compair</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={330}>
              <p className="text-muted-foreground border-border/70 mt-10 max-w-md border-l-2 pl-4 text-sm italic">
                “You deliver more than water, you deliver trust.”
              </p>
            </Reveal>
          </div>

          <div className="relative flex justify-center">
            <div className="bg-primary/12 absolute top-1/2 left-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]" />
            <div className="animate-ripple border-primary/25 absolute top-1/2 left-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full border" />
            <img
              src={heroBottle}
              alt="Compair Premium Water bottle with signature magenta label"
              width={1024}
              height={1536}
              style={{ transform: `translate3d(0, ${offset * -0.06}px, 0) rotate(${offset * 0.006}deg)` }}
              className="animate-float-slow relative z-10 h-[340px] w-auto object-contain drop-shadow-[0_35px_60px_rgba(190,24,110,0.28)] sm:h-[440px] xl:h-[620px]"
            />
          </div>
        </div>
      </section>

      {/* PARTNER MARQUEE */}
      <section className="border-border/70 border-y bg-secondary/40 py-14">
        <div className="container-px mx-auto max-w-[1600px]">
          <SectionHeading
            eyebrow="Collaborations"
            title="Trusted partners. Stronger together."
            align="center"
          />
        </div>
        <div className="mt-10">
          <Marquee
            separator=""
            slow
            items={PARTNERS.map((p) => (
              <span
                key={p}
                className="border-border/80 bg-card text-muted-foreground mx-3 flex h-16 items-center rounded-2xl border px-8 text-[0.72rem] font-bold tracking-[0.2em] shadow-[var(--shadow-soft)]"
              >
                {p}
              </span>
            ))}
          />
        </div>
        <p className="text-muted-foreground mt-8 text-center text-sm">
          Building partnerships that move hydration forward.{" "}
          <span className="text-muted-foreground/60">(placeholder logos)</span>
        </p>
      </section>

      {/* WHY COMPAIR */}
      <section className="container-px mx-auto max-w-[1600px] py-20 md:py-28">
        <SectionHeading
          eyebrow="The Compair Difference"
          title="Why Compair Premium Water?"
          description="A premium hydration brand built on quality, dependable supply and long-term partnerships."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {WHY.map((item, i) => (
            <FeatureCard key={item.title} {...item} index={i} />
          ))}
        </div>
      </section>

      {/* BENTO STORY */}
      <section className="container-px mx-auto max-w-[1600px] pb-20 md:pb-28">
        <div className="grid gap-5 lg:grid-cols-3">
          <Reveal dir="left" className="lg:col-span-2">
            <article className="group relative h-full overflow-hidden rounded-[2rem]">
              <img
                src={productionImg}
                alt="Compair bottles moving through a modern bottling line"
                loading="lazy"
                width={1536}
                height={1024}
                className="h-[320px] w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105 md:h-[460px]"
              />
              <div className="from-charcoal/85 absolute inset-0 bg-gradient-to-t via-charcoal/25 to-transparent" />
              <div className="absolute right-8 bottom-8 left-8">
                <p className="eyebrow">Production</p>
                <h3 className="text-charcoal-foreground mt-2 text-2xl font-extrabold md:text-3xl">
                  Quality begins long before the bottle
                </h3>
              </div>
            </article>
          </Reveal>
          <div className="grid gap-5">
            <Reveal dir="right">
              <article className="group relative overflow-hidden rounded-[2rem]">
                <img
                  src={truckImg}
                  alt="Compair branded delivery truck on an Indian city road"
                  loading="lazy"
                  width={1536}
                  height={1024}
                  className="h-[220px] w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
                />
                <div className="from-charcoal/85 absolute inset-0 bg-gradient-to-t to-transparent" />
                <p className="text-charcoal-foreground absolute bottom-6 left-6 text-xl font-bold">
                  Distribution
                </p>
              </article>
            </Reveal>
            <Reveal dir="right" delay={120}>
              <article className="group relative overflow-hidden rounded-[2rem]">
                <img
                  src={retailImg}
                  alt="Retail refrigerator stocked with Compair Premium Water bottles"
                  loading="lazy"
                  width={1536}
                  height={1024}
                  className="h-[220px] w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
                />
                <div className="from-charcoal/85 absolute inset-0 bg-gradient-to-t to-transparent" />
                <p className="text-charcoal-foreground absolute bottom-6 left-6 text-xl font-bold">
                  Retail
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
