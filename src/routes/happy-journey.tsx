import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import meetImg from "@/assets/gallery-meet.jpg";
import activationImg from "@/assets/gallery-activation.jpg";
import teamImg from "@/assets/gallery-team.jpg";
import visitImg from "@/assets/gallery-visit.jpg";
import retailImg from "@/assets/retail.jpg";
import distributorImg from "@/assets/distributor.jpg";
import customerImg from "@/assets/customer.jpg";
import truckImg from "@/assets/truck.jpg";
import loadingImg from "@/assets/loading.jpg";

export const Route = createFileRoute("/happy-journey")({
  head: () => ({
    meta: [
      { title: "Happy Journey Gallery | Compair Premium Water" },
      {
        name: "description",
        content:
          "Celebrating the people, partnerships and moments behind every Compair bottle — distributor meets, retail activations, market visits and team moments.",
      },
      { property: "og:title", content: "Happy Journey | Compair Premium Water" },
      {
        property: "og:description",
        content: "The people, partnerships and moments behind every bottle.",
      },
      { property: "og:url", content: "/happy-journey" },
    ],
    links: [{ rel: "canonical", href: "/happy-journey" }],
  }),
  component: GalleryPage,
});

type Shot = { src: string; alt: string; caption: string; category: string; tall?: boolean };

const SHOTS: Shot[] = [
  {
    src: meetImg,
    alt: "Compair distributor meet with partners at a branded event",
    caption: "Distributor Meet",
    category: "Distributor Meet",
    tall: true,
  },
  {
    src: activationImg,
    alt: "Compair retail activation stall in a busy market",
    caption: "Retail Activation",
    category: "Retail Activations",
  },
  {
    src: customerImg,
    alt: "Happy customer drinking Compair Premium Water",
    caption: "Happy Customers",
    category: "Happy Customers",
  },
  {
    src: teamImg,
    alt: "Compair sales and distribution team in branded uniforms",
    caption: "Team Moments",
    category: "Team Moments",
    tall: true,
  },
  {
    src: visitImg,
    alt: "Compair field executive on a market visit to a retail store",
    caption: "Market Visit",
    category: "Market Visits",
  },
  {
    src: retailImg,
    alt: "Retailer with a refrigerator full of Compair bottles",
    caption: "Retailer Partnerships",
    category: "Retailer Partnerships",
  },
  {
    src: truckImg,
    alt: "Compair branded delivery truck on route",
    caption: "On The Road",
    category: "Campaigns",
  },
  {
    src: distributorImg,
    alt: "Compair distributor with a pack of bottles",
    caption: "Promotional Activities",
    category: "Promotional Activities",
    tall: true,
  },
  {
    src: loadingImg,
    alt: "Team loading Compair stock for dispatch",
    caption: "Brand Events",
    category: "Brand Events",
  },
];

function GalleryPage() {
  const categories = useMemo(() => ["All", ...new Set(SHOTS.map((s) => s.category))], []);
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<Shot | null>(null);

  const visible = active === "All" ? SHOTS : SHOTS.filter((s) => s.category === active);

  return (
    <>
      <PageHero
        eyebrow="Happy Journey"
        title={
          <>
            THE MOMENTS
            <br />
            <span className="text-gradient-brand">BEHIND EVERY BOTTLE.</span>
          </>
        }
        subtitle="Celebrating the people, partnerships and moments behind every bottle."
      />

      <section className="container-px mx-auto max-w-[1600px] pb-20">
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                active === c
                  ? "bg-brand text-primary-foreground border-transparent"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-1 gap-5 sm:columns-2 xl:columns-3 [&>*]:mb-5">
          {visible.map((shot, i) => (
            <Reveal key={shot.caption} delay={(i % 3) * 90} dir="scale">
              <figure
                role="button"
                tabIndex={0}
                onClick={() => setLightbox(shot)}
                onKeyDown={(e) => e.key === "Enter" && setLightbox(shot)}
                className="group relative block w-full cursor-pointer overflow-hidden rounded-[1.6rem]"
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110 ${
                    shot.tall ? "h-[420px]" : "h-[300px]"
                  }`}
                />
                <div className="from-charcoal/85 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="text-charcoal-foreground absolute right-6 bottom-6 left-6 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="eyebrow">{shot.category}</span>
                  <p className="mt-1 text-lg font-bold">{shot.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 border-border/70 border-y py-16 md:py-24">
        <div className="container-px mx-auto max-w-[1600px]">
          <SectionHeading
            eyebrow="Brand Activity"
            title="Promotional activities that build the brand"
            align="center"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Retail Activation", "Taking Compair closer to consumers."],
              ["Distributor Meets", "Growing together through stronger partnerships."],
              ["Market Expansion", "Reaching new markets, one partnership at a time."],
              ["Consumer Engagement", "Building hydration habits through meaningful experiences."],
            ].map(([title, text], i) => (
              <Reveal key={title} delay={i * 90}>
                <article className="border-border/70 bg-card h-full rounded-[1.6rem] border p-7 transition-transform duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)]">
                  <span className="text-gradient-brand font-display text-3xl font-extrabold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="bg-charcoal/90 fixed inset-0 z-[60] flex items-center justify-center p-5 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.caption}
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setLightbox(null)}
            className="text-charcoal-foreground border-charcoal-foreground/25 absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border"
          >
            <X className="h-5 w-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-4xl">
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[75vh] w-full rounded-[1.5rem] object-contain"
            />
            <figcaption className="text-charcoal-foreground mt-4 text-center text-sm">
              {lightbox.caption} — {lightbox.category}
            </figcaption>
          </figure>
        </div>
      )}

      <CtaBand title="Want to be part of the next Compair story?" />
    </>
  );
}
