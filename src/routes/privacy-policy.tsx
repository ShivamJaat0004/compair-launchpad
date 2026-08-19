import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Compair Premium Water" },
      {
        name: "description",
        content:
          "How Compair Premium Water collects, uses and protects the information shared through distributor enquiries and this website.",
      },
      { property: "og:title", content: "Privacy Policy | Compair Premium Water" },
      {
        property: "og:description",
        content: "How we handle information shared with Compair Premium Water.",
      },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

const SECTIONS = [
  [
    "Information we collect",
    "When you submit a distributor enquiry we collect the details you provide, such as your name, address, phone and WhatsApp numbers, email, city, state, business name and requirement.",
  ],
  [
    "How we use it",
    "Your information is used to respond to your enquiry, assess distribution requirements and communicate about partnership opportunities with Compair Premium Water.",
  ],
  [
    "Sharing",
    "Enquiry details are shared only within the Compair team and authorised representatives handling distribution partnerships. We do not sell personal information.",
  ],
  [
    "Retention",
    "Enquiry records are retained for as long as needed to evaluate and manage the partnership discussion, unless you ask us to remove them.",
  ],
  [
    "Your choices",
    "You may ask us to update or delete your enquiry details, or to stop contacting you, by writing to the contact address published on this website.",
  ],
];

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="This is placeholder policy content prepared for the Compair Premium Water website and should be reviewed before publishing."
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
