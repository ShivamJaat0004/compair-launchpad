import { createFileRoute } from "@tanstack/react-router";
import { Factory, PackageOpen, Truck, Store, Smile } from "lucide-react";
import { CtaBand, PageHero } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import productionImg from "@/assets/production.jpg";
import loadingImg from "@/assets/loading.jpg";
import truckImg from "@/assets/truck.jpg";
import retailImg from "@/assets/retail.jpg";
import customerImg from "@/assets/customer.jpg";

export const Route = createFileRoute("/distribution-journey")({
  head: () => ({
    meta: [
      { title: "Distribution Journey | Production to People — Compair" },
      {
        name: "description",
        content:
          "Follow the Compair Premium Water distribution journey: production, loading, shipping, retail and the customer — trust delivered at every step.",
      },
      { property: "og:title", content: "The Compair Distribution Journey" },
      {
        property: "og:description",
        content: "From production to people — we deliver trust at every step.",
      },
      { property: "og:url", content: "/distribution-journey" },
    ],
    links: [{ rel: "canonical", href: "/distribution-journey" }],
  }),
  component: JourneyPage,
});

const STAGES = [
  {
    icon: Factory,
    stage: "Stage 01",
    title: "Production",
    image: productionImg,
    alt: "Compair bottles moving through the bottling and packaging line",
    points: [
      "Water treatment and quality checks",
      "Automated bottling and sealing",
      "Labelling with consistent brand identity",
      "Batch packaging for dispatch",
    ],
  },
  {
    icon: PackageOpen,
    stage: "Stage 02",
    title: "Loading",
    image: loadingImg,
    alt: "Workers loading cartons of Compair bottles into a delivery truck",
    points: [
      "Stock staged by route and territory",
      "Careful handling and load planning",
      "Dispatch documentation",
      "Vehicles loaded for timely departure",
    ],
  },
  {
    icon: Truck,
    stage: "Stage 03",
    title: "Shipping",
    image: truckImg,
    alt: "Compair branded delivery truck travelling a city distribution route",
    points: [
      "Branded vehicles on planned routes",
      "City and regional coverage",
      "Distributor coordination en route",
      "Predictable delivery windows",
    ],
  },
  {
    icon: Store,
    stage: "Stage 04",
    title: "Retail",
    image: retailImg,
    alt: "Compair bottles chilled and displayed in a retail refrigerator",
    points: [
      "Retailer receiving and stock check",
      "Chilled and shelf display",
      "Visibility material at the counter",
      "Replenishment planning",
    ],
  },
  {
    icon: Smile,
    stage: "Stage 05",
    title: "Customer",
    image: customerImg,
    alt: "Customer drinking Compair Premium Water",
    points: [
      "Available where people need it",
      "Consistent taste and quality",
      "Everyday hydration people trust",
      "Repeat purchase, repeat trust",
    ],
  },
];

function JourneyPage() {
  return (
    <>
      <PageHero
        eyebrow="Distribution Journey"
        title={
          <>
            PRODUCTION TO PEOPLE.
            <br />
            <span className="text-gradient-brand">EVERY SINGLE DAY.</span>
          </>
        }
        subtitle="Five stages, one promise. Follow a Compair bottle from the production line to the hand that opens it."
      />

      <section className="container-px relative mx-auto max-w-[1600px] pb-10">
        <Reveal dir="scale">
          <svg viewBox="0 0 1200 60" className="h-14 w-full" aria-hidden>
            <path
              d="M10 30 C 250 -10, 400 70, 600 30 S 950 -10, 1190 30"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="2"
              strokeDasharray="1600"
              strokeDashoffset="1600"
              style={{ animation: "dash-draw 3.5s ease-out forwards" }}
              opacity="0.55"
            />
          </svg>
        </Reveal>
      </section>

      <section className="container-px mx-auto max-w-[1600px] pb-16 md:pb-24">
        <ol className="relative space-y-8 md:space-y-16">
          <span
            aria-hidden
            className="from-primary/60 via-primary/25 absolute top-0 bottom-0 left-4 hidden w-px bg-gradient-to-b to-transparent md:block"
          />
          {STAGES.map((s, i) => (
            <li key={s.stage} className="relative md:pl-16">
              <span
                aria-hidden
                className="bg-brand absolute top-8 left-[0.35rem] hidden h-4 w-4 rounded-full ring-4 ring-background md:block"
              />
              <Reveal dir={i % 2 === 0 ? "left" : "right"}>
                <article
                  className={`border-border/70 bg-card grid overflow-hidden rounded-[2rem] border transition-shadow duration-500 hover:shadow-[var(--shadow-card)] lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:[&>figure]:order-last" : ""
                  }`}
                >
                  <figure className="group relative overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.alt}
                      loading="lazy"
                      className="h-[260px] w-full object-cover transition-transform duration-[1600ms] group-hover:scale-110 lg:h-full lg:min-h-[340px]"
                    />
                    <div className="from-primary/25 absolute inset-0 bg-gradient-to-tr to-transparent" />
                  </figure>
                  <div className="p-8 md:p-12">
                    <span className="bg-brand text-primary-foreground flex h-12 w-12 items-center justify-center rounded-2xl">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <p className="eyebrow mt-6">{s.stage}</p>
                    <h2 className="mt-2 text-3xl font-extrabold">{s.title}</h2>
                    <ul className="mt-6 space-y-3">
                      {s.points.map((p) => (
                        <li key={p} className="text-muted-foreground flex gap-3 text-sm">
                          <span className="bg-primary mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal dir="scale">
          <p className="text-gradient-brand mx-auto mt-16 max-w-4xl text-center text-2xl leading-tight font-extrabold sm:text-4xl">
            FROM PRODUCTION TO PEOPLE — WE DELIVER TRUST AT EVERY STEP.
          </p>
        </Reveal>
      </section>

      <CtaBand title="Want to run a stage of this journey?" />
    </>
  );
}
