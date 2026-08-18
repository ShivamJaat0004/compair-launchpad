import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import productionImg from "@/assets/production.jpg";
import truckImg from "@/assets/truck.jpg";
import retailImg from "@/assets/retail.jpg";
import distributorImg from "@/assets/distributor.jpg";
import customerImg from "@/assets/customer.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Compair | More Than Water. A Promise of Trust." },
      {
        name: "description",
        content:
          "Learn about Compair Premium Water — our focus on quality, our distributor ecosystem, retail presence and commitment to better hydration.",
      },
      { property: "og:title", content: "About Compair Premium Water" },
      {
        property: "og:description",
        content: "Quality, distribution and trust — the story behind Compair Premium Water.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const TIMELINE = [
  {
    step: "Vision",
    text: "A hydration brand built on trust, consistency and long-term partnerships.",
  },
  {
    step: "Quality",
    text: "Quality-focused processes guide every decision, from sourcing to sealing.",
  },
  { step: "Production", text: "Modern bottling practices designed for hygiene and consistency." },
  { step: "Distribution", text: "A distributor-first network that keeps supply dependable." },
  { step: "Retail", text: "Strong shelf presence with retailers who trust the brand." },
  { step: "Consumer", text: "Everyday hydration people can rely on, bottle after bottle." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Compair"
        title={
          <>
            MORE THAN WATER.
            <br />
            <span className="text-gradient-brand">A PROMISE OF TRUST.</span>
          </>
        }
        subtitle="Compair Premium Water is a packaged drinking water brand built around quality-focused hydration, dependable distribution and partnerships that grow together."
        image={distributorImg}
        imageAlt="Compair distributor in branded uniform holding a pack of bottles"
      />

      <section className="container-px mx-auto max-w-[1600px] py-16 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <SectionHeading
            eyebrow="Our Story"
            title="A brand shaped by the people who carry it forward"
          />
          <div className="space-y-5">
            {[
              "Compair Premium Water exists to make trusted hydration part of everyday life. The brand brings together careful production practices, disciplined packaging standards and a distribution network that treats reliability as a promise rather than a target.",
              "Our distributor ecosystem sits at the heart of the business. Local partners understand their markets, their retailers and their customers — and Compair supports them with consistent supply, clear communication and brand material that helps them sell with confidence.",
              "In retail, presence matters. Compair works with kirana stores, modern trade outlets, hospitality partners and institutions so the bottle is available where people need it. Every touchpoint carries the same identity, the same standards and the same promise.",
              "Long-term growth is built on repeat trust. That is why the brand invests in relationships, responsible practices and a hydration experience worth returning to.",
            ].map((para, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="text-muted-foreground text-base leading-relaxed md:text-lg">{para}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 border-border/70 border-y py-16 md:py-24">
        <div className="container-px mx-auto max-w-[1600px]">
          <SectionHeading
            eyebrow="The Chain of Trust"
            title="From vision to the consumer's hand"
            align="center"
          />
          <ol className="relative mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.step} delay={i * 80}>
                <li className="border-border/70 bg-card relative h-full rounded-[1.6rem] border p-8 transition-transform duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)]">
                  <span className="text-gradient-brand font-display text-4xl font-extrabold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl font-bold">{item.step}</h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{item.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1600px] py-16 md:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { src: productionImg, alt: "Compair bottling and production line", label: "Production" },
            { src: truckImg, alt: "Compair branded delivery truck", label: "Logistics" },
            { src: retailImg, alt: "Compair bottles in a retail refrigerator", label: "Retail" },
          ].map((img, i) => (
            <Reveal key={img.label} delay={i * 100} dir="scale">
              <figure className="group relative overflow-hidden rounded-[1.8rem]">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-[260px] w-full object-cover transition-transform duration-[1600ms] group-hover:scale-110"
                />
                <div className="from-charcoal/80 absolute inset-0 bg-gradient-to-t to-transparent" />
                <figcaption className="text-charcoal-foreground absolute bottom-6 left-6 text-lg font-bold">
                  {img.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="border-border/70 mt-14 grid items-center gap-10 rounded-[2rem] border p-8 md:grid-cols-2 md:p-12">
            <img
              src={customerImg}
              alt="Customer drinking Compair Premium Water"
              loading="lazy"
              className="h-[300px] w-full rounded-[1.4rem] object-cover md:h-[380px]"
            />
            <div>
              <p className="eyebrow">Our Promise</p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                Together we deliver pure hydration. Better lives.
              </h2>
              <p className="text-muted-foreground mt-5 leading-relaxed">
                Every bottle represents a chain of people who care — producers, distributors,
                retailers and partners. Compair exists to keep that chain strong.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
