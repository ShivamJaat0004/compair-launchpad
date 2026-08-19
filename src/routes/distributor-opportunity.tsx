import { createFileRoute } from "@tanstack/react-router";
import { Award, BadgeCheck, GraduationCap, Megaphone, PackageCheck, TrendingUp } from "lucide-react";
import { CtaBand, FeatureCard, PageHero, SectionHeading } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import distributorImg from "@/assets/distributor.jpg";

export const Route = createFileRoute("/distributor-opportunity")({
  head: () => ({
    meta: [
      { title: "Become a Water Distributor | Compair Distribution Opportunity" },
      {
        name: "description",
        content:
          "Grow with Compair Premium Water. Explore the packaged drinking water distribution opportunity — brand association, supply support, marketing help and business growth.",
      },
      { property: "og:title", content: "Grow With Compair | Distributor Opportunity" },
      {
        property: "og:description",
        content: "Your local strength. Our brand. One powerful distribution network.",
      },
      { property: "og:url", content: "/distributor-opportunity" },
    ],
    links: [{ rel: "canonical", href: "/distributor-opportunity" }],
  }),
  component: OpportunityPage,
});

const BENEFITS = [
  {
    icon: BadgeCheck,
    title: "Strong Brand Association",
    description: "Build your business alongside a premium hydration brand.",
  },
  {
    icon: TrendingUp,
    title: "Profitable Business Opportunity",
    description: "Create new opportunities through a growing product category.",
  },
  {
    icon: PackageCheck,
    title: "Reliable Supply Support",
    description: "Professional supply and distribution support.",
  },
  {
    icon: Megaphone,
    title: "Marketing & Promotional Support",
    description: "Brand communication and promotional assistance.",
  },
  {
    icon: GraduationCap,
    title: "Training & Business Growth",
    description: "Support to help distributors grow sustainably.",
  },
  {
    icon: Award,
    title: "Recognition & Rewards",
    description: "Celebrate strong partnerships and performance.",
  },
];

const STEPS = [
  ["Share your details", "Send us your business profile through the enquiry form."],
  ["Discussion", "Our team understands your market, coverage and capacity."],
  ["Onboarding", "Agreement, territory clarity and initial stock planning."],
  ["Go to market", "Supply begins with brand and promotional support in place."],
];

function OpportunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Distributor Opportunity"
        title={
          <>
            GROW WITH
            <br />
            <span className="text-gradient-brand">COMPAIR.</span>
          </>
        }
        subtitle="Your local strength. Our brand. One powerful distribution network."
        image={distributorImg}
        imageAlt="Compair distributor in branded uniform beside a delivery vehicle"
      />

      <section className="container-px mx-auto max-w-[1600px] pb-16 md:pb-24">
        <SectionHeading
          eyebrow="Why Partner With Us"
          title="A partnership built to be worth your effort"
          description="Distribution is a relationship business. Compair backs its partners with supply discipline, brand support and a category people buy every day."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <FeatureCard key={b.title} {...b} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-charcoal py-16 md:py-24">
        <div className="container-px mx-auto max-w-[1600px]">
          <SectionHeading
            eyebrow="How It Works"
            title="Four steps to your Compair journey"
            invert
            align="center"
          />
          <ol className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {STEPS.map(([title, text], i) => (
              <Reveal key={title} delay={i * 100}>
                <li className="border-charcoal-foreground/12 h-full rounded-[1.6rem] border p-7 transition-colors duration-500 hover:border-primary/60">
                  <span className="text-gradient-brand font-display text-4xl font-extrabold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-charcoal-foreground mt-4 text-lg font-bold">{title}</h3>
                  <p className="text-charcoal-foreground/65 mt-3 text-sm leading-relaxed">{text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1600px] py-16 md:py-24">
        <Reveal>
          <div className="border-border/70 bg-veil rounded-[2rem] border p-9 md:p-14">
            <SectionHeading
              eyebrow="Who We Look For"
              title="Partners who know their market"
              description="Distributors, stockists and entrepreneurs with local reach, storage capability and a commitment to service. Prior FMCG or beverage experience helps, but intent and reliability matter most."
            />
          </div>
        </Reveal>
      </section>

      <CtaBand title="Ready to build your Compair journey?" />
    </>
  );
}
