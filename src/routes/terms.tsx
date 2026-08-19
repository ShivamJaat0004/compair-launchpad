import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Compair Premium Water" },
      {
        name: "description",
        content:
          "Terms governing the use of the Compair Premium Water website and the submission of distributor enquiries.",
      },
      { property: "og:title", content: "Terms & Conditions | Compair Premium Water" },
      {
        property: "og:description",
        content: "Terms for using the Compair Premium Water website.",
      },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const SECTIONS = [
  [
    "Website use",
    "This website presents information about Compair Premium Water, its product range and its distribution partnership programme. Content may be updated at any time.",
  ],
  [
    "Enquiries",
    "Submitting an enquiry does not create a distributorship or any commercial agreement. Appointments are confirmed only through a written agreement with the brand.",
  ],
  [
    "Brand assets",
    "The Compair name, logo, packaging design and imagery belong to the brand and may not be reproduced without written permission.",
  ],
  [
    "Accuracy",
    "Product visuals and partner logos shown on this website may be indicative or placeholder material until final brand assets are supplied.",
  ],
  [
    "Contact",
    "For questions about these terms, please write to the contact details published on the contact page.",
  ],
];

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="This is placeholder terms content prepared for the Compair Premium Water website and should be reviewed before publishing."
      />
      <section className="container-px mx-auto max-w-3xl pb-24">
        <div className="space-y-10">
          {SECTIONS.map(([title, text], i) => (
            <Reveal key={title} delay={i * 70}>
              <div>
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-muted-foreground mt-3 leading-relaxed">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
