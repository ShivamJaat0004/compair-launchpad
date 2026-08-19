import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  Handshake,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Eye,
} from "lucide-react";
import { CtaBand, FeatureCard, PageHero, SectionHeading } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/mission-vision")({
  head: () => ({
    meta: [
      { title: "Mission & Vision | Compair Premium Water" },
      {
        name: "description",
        content:
          "Our purpose, direction and promise — the mission, vision and core values guiding Compair Premium Water and its distribution partners.",
      },
      { property: "og:title", content: "Mission & Vision | Compair Premium Water" },
      {
        property: "og:description",
        content: "Quality, trust, reliability, growth, partnership and responsibility.",
      },
      { property: "og:url", content: "/mission-vision" },
    ],
    links: [{ rel: "canonical", href: "/mission-vision" }],
  }),
  component: MissionVisionPage,
});

const VALUES = [
  { icon: ShieldCheck, title: "Quality", description: "Standards we hold at every single step." },
  { icon: HeartHandshake, title: "Trust", description: "Earned through consistency, not claims." },
  { icon: Target, title: "Reliability", description: "Dependable supply our partners can plan around." },
  { icon: TrendingUp, title: "Growth", description: "Progress shared with every partner in the chain." },
  { icon: Handshake, title: "Partnership", description: "Long-term relationships over short-term gains." },
  { icon: Leaf, title: "Responsibility", description: "Responsible practices for a healthier tomorrow." },
];

function MissionVisionPage() {
  return (
    <>
      <PageHero
        eyebrow="Mission & Vision"
        title={
          <>
            OUR PURPOSE. OUR DIRECTION.
            <br />
            <span className="text-gradient-brand">OUR PROMISE.</span>
          </>
        }
        subtitle="What we work towards, and the principles that keep the Compair network moving in one direction."
      />

      <section className="container-px mx-auto max-w-[1600px] pb-16 md:pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal dir="left">
            <article className="group border-border/70 bg-card relative h-full overflow-hidden rounded-[2rem] border p-9 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)] md:p-12">
              <div className="bg-primary-soft absolute -top-24 -right-24 h-56 w-56 rounded-full transition-transform duration-700 group-hover:scale-125" />
              <div className="relative">
                <span className="bg-brand text-primary-foreground flex h-14 w-14 items-center justify-center rounded-2xl">
                  <Target className="h-6 w-6" />
                </span>
                <p className="eyebrow mt-7">Our Mission</p>
                <p className="mt-4 text-xl leading-snug font-bold md:text-2xl">
                  To make trusted, quality-focused hydration accessible through a strong network of
                  responsible partners, distributors and retailers.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal dir="right" delay={100}>
            <article className="group bg-charcoal relative h-full overflow-hidden rounded-[2rem] p-9 transition-all duration-500 hover:-translate-y-1.5 md:p-12">
              <div className="bg-primary/25 absolute -bottom-24 -left-20 h-56 w-56 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-125" />
              <div className="relative">
                <span className="bg-brand text-primary-foreground flex h-14 w-14 items-center justify-center rounded-2xl">
                  <Eye className="h-6 w-6" />
                </span>
                <p className="eyebrow mt-7">Our Vision</p>
                <p className="text-charcoal-foreground mt-4 text-xl leading-snug font-bold md:text-2xl">
                  To build a trusted premium hydration ecosystem that connects quality, people,
                  businesses and communities.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40 border-border/70 border-y py-16 md:py-24">
        <div className="container-px mx-auto max-w-[1600px]">
          <SectionHeading
            eyebrow="Core Values"
            title="Six principles behind every bottle"
            align="center"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {VALUES.map((v, i) => (
              <FeatureCard key={v.title} {...v} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1600px] py-16 md:py-24">
        <Reveal dir="scale">
          <div className="border-primary/25 bg-veil rounded-[2rem] border p-9 text-center md:p-16">
            <span className="bg-brand text-primary-foreground mx-auto flex h-14 w-14 items-center justify-center rounded-2xl">
              <Sparkles className="h-6 w-6" />
            </span>
            <p className="eyebrow mt-7">Brand Promise</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl leading-tight font-extrabold sm:text-4xl xl:text-[3rem]">
              Together we deliver pure hydration. Better lives.
            </h2>
            <p className="text-muted-foreground mx-auto mt-5 max-w-2xl leading-relaxed">
              A promise carried by every distributor, retailer and team member who moves a Compair
              bottle closer to the people who drink it.
            </p>
            <div className="text-muted-foreground mt-8 inline-flex items-center gap-2 text-sm">
              <Award className="text-primary h-4 w-4" /> You deliver more than water, you deliver
              trust.
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
