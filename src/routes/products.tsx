import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { Droplets } from "@/components/site/Droplets";
import lineup from "@/assets/products-lineup.jpg";
import heroBottle from "@/assets/hero-bottle.png";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | Compair Premium Packaged Drinking Water" },
      {
        name: "description",
        content:
          "Explore the Compair Premium Water range of packaged drinking water bottles — 250ml, 500ml and 1 litre packs for retail, hospitality and institutional needs.",
      },
      { property: "og:title", content: "Compair Premium Water Products" },
      {
        property: "og:description",
        content: "Premium packaged drinking water in everyday and on-the-go pack sizes.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Compair Premium Water product range",
          itemListElement: ["250 ml", "500 ml", "1 Litre"].map((n, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: { "@type": "Product", name: `Compair Premium Water ${n}`, brand: "COMPAIR" },
          })),
        }),
      },
    ],
  }),
  component: ProductsPage,
});

const PRODUCTS = [
  {
    name: "Compair 250 ml",
    size: "250 ml",
    description:
      "The compact pack for events, hospitality trays, meetings and quick on-the-go hydration.",
  },
  {
    name: "Compair 500 ml",
    size: "500 ml",
    description:
      "The everyday hero pack — the most requested size across retail counters and travel.",
  },
  {
    name: "Compair 1 Litre",
    size: "1 L",
    description: "The shared pack for homes, desks, journeys and longer days out.",
  },
];

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Range"
        title={
          <>
            PREMIUM WATER,
            <br />
            <span className="text-gradient-brand">PERFECTLY PACKED.</span>
          </>
        }
        subtitle="A consistent bottle, a consistent standard. Pack sizes shown are indicative — the final range will reflect the sizes actually supplied by the brand."
        image={lineup}
        imageAlt="Compair Premium Water bottles in 250ml, 500ml and 1 litre sizes"
      />

      <section className="container-px mx-auto max-w-[1600px] pb-16 md:pb-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 110} dir="up">
              <article className="group border-border/70 bg-card relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-card)]">
                <div className="bg-veil relative flex h-64 items-center justify-center overflow-hidden rounded-[1.4rem]">
                  <Droplets />
                  <span className="animate-ripple border-primary/25 absolute h-40 w-40 rounded-full border" />
                  <img
                    src={heroBottle}
                    alt={`${p.name} packaged drinking water bottle`}
                    loading="lazy"
                    className="relative h-52 w-auto object-contain transition-transform duration-[1200ms] group-hover:scale-110 group-hover:-rotate-3"
                  />
                </div>
                <p className="eyebrow mt-7">{p.size}</p>
                <h2 className="mt-2 text-2xl font-extrabold">{p.name}</h2>
                <p className="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">
                  {p.description}
                </p>
                <Button asChild variant="heroOutline" size="xl" className="mt-7 w-full">
                  <Link to="/contact">
                    Enquire <ArrowRight />
                  </Link>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 border-border/70 border-y py-16 md:py-24">
        <div className="container-px mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Built For Every Counter"
            title="One brand identity across every pack"
            description="Consistent labelling, consistent cap colour, consistent shelf presence. Retailers recognise it instantly, and so do customers."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Retail & Kirana", "Fast-moving pack sizes for daily counters."],
              ["Hospitality", "Clean table presentation for hotels and restaurants."],
              ["Corporate", "Office pantries, meetings and workplace hydration."],
              ["Events", "Bulk supply for functions and brand activations."],
            ].map(([title, text], i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="border-border/70 bg-card h-full rounded-2xl border p-6">
                  <Droplet className="text-primary h-5 w-5" />
                  <h3 className="mt-4 font-bold">{title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Interested in stocking COMPAIR?"
        description="Tell us about your market and requirement — our team will get in touch with pack availability and partnership details."
      />
    </>
  );
}
