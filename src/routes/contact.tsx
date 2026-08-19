import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, MessageCircle, Mail, Briefcase, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { PageHero } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { Droplets } from "@/components/site/Droplets";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Become a Distributor | Contact Compair Premium Water" },
      {
        name: "description",
        content:
          "Interested in a premium packaged drinking water distribution opportunity? Send your distributor enquiry to the Compair Premium Water team.",
      },
      { property: "og:title", content: "Contact Compair | Distributor Enquiry" },
      {
        property: "og:description",
        content: "Let's build the next Compair journey together.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const CONTACT_CARDS = [
  { icon: Phone, title: "Call Us", value: "[Add phone number]" },
  { icon: MessageCircle, title: "WhatsApp", value: "[Add WhatsApp number]" },
  { icon: Mail, title: "Email", value: "[Add email address]" },
  { icon: Briefcase, title: "Business Enquiries", value: "[Add business contact]" },
];

const FIELDS = [
  { id: "fullName", label: "Full Name", type: "text", required: true },
  { id: "mobile", label: "Mobile Number", type: "tel", required: true },
  { id: "whatsapp", label: "WhatsApp Number", type: "tel" },
  { id: "email", label: "Email ID", type: "email", required: true },
  { id: "city", label: "City", type: "text", required: true },
  { id: "state", label: "State", type: "text", required: true },
  { id: "company", label: "Business / Company Name", type: "text" },
] as const;

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <PageHero
        eyebrow="Distributor Enquiry"
        title={
          <>
            LET'S BUILD THE NEXT
            <br />
            <span className="text-gradient-brand">COMPAIR JOURNEY TOGETHER.</span>
          </>
        }
        subtitle="Interested in becoming a Compair Premium Water distributor? Tell us about your business and requirements."
      />

      <section className="container-px mx-auto max-w-[1600px] pb-16 md:pb-24">
        <div className="grid gap-6 lg:grid-cols-[1.45fr_1fr]">
          <Reveal dir="left">
            <div className="border-border/70 bg-card relative overflow-hidden rounded-[2rem] border p-7 md:p-12">
              {submitted ? (
                <div className="relative flex min-h-[420px] flex-col items-center justify-center text-center">
                  <Droplets />
                  <span className="animate-ripple border-primary/40 absolute h-40 w-40 rounded-full border" />
                  <span className="bg-brand text-primary-foreground relative flex h-20 w-20 items-center justify-center rounded-full">
                    <CheckCircle2 className="h-9 w-9" />
                  </span>
                  <h2 className="relative mt-8 text-3xl font-extrabold">Thank You.</h2>
                  <p className="text-gradient-brand relative mt-2 text-xl font-bold">
                    Your Compair journey starts here.
                  </p>
                  <p className="text-muted-foreground relative mt-4 max-w-md text-sm leading-relaxed">
                    Our team will review your enquiry and get in touch with you shortly.
                  </p>
                  <Button
                    variant="heroOutline"
                    size="xl"
                    className="relative mt-8"
                    onClick={() => {
                      setSubmitted(false);
                      setAgreed(false);
                    }}
                  >
                    Submit another enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div>
                    <p className="eyebrow">Enquiry Form</p>
                    <h2 className="mt-3 text-2xl font-extrabold md:text-3xl">
                      Tell us about your business
                    </h2>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    {FIELDS.map((f) => (
                      <div key={f.id} className="space-y-2">
                        <Label htmlFor={f.id}>
                          {f.label}
                          {"required" in f && f.required ? " *" : ""}
                        </Label>
                        <Input
                          id={f.id}
                          name={f.id}
                          type={f.type}
                          required={"required" in f ? f.required : false}
                          className="h-11 rounded-xl"
                          placeholder={f.label}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address *</Label>
                    <Input
                      id="address"
                      name="address"
                      required
                      className="h-11 rounded-xl"
                      placeholder="Street, area, pin code"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Current Business / Distribution Experience</Label>
                    <Input
                      id="experience"
                      name="experience"
                      className="h-11 rounded-xl"
                      placeholder="e.g. FMCG distribution, retail, beverages"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Requirement / Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="rounded-xl"
                      placeholder="Share your coverage area, monthly requirement and anything else we should know."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="consent"
                      checked={agreed}
                      onCheckedChange={(v) => setAgreed(v === true)}
                      required
                    />
                    <Label htmlFor="consent" className="text-muted-foreground text-sm leading-snug">
                      I agree to be contacted by the Compair Premium Water team regarding my
                      enquiry.
                    </Label>
                  </div>

                  <Button type="submit" variant="hero" size="xl" className="w-full" disabled={!agreed}>
                    Submit Distributor Enquiry
                  </Button>
                </form>
              )}
            </div>
          </Reveal>

          <div className="grid content-start gap-4">
            {CONTACT_CARDS.map((c, i) => (
              <Reveal key={c.title} dir="right" delay={i * 90}>
                <article className="group border-border/70 bg-card flex items-center gap-5 rounded-[1.5rem] border p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                  <span className="bg-brand text-primary-foreground flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-bold">{c.title}</h2>
                    <p className="text-muted-foreground mt-1 text-sm">{c.value}</p>
                  </div>
                </article>
              </Reveal>
            ))}
            <Reveal dir="right" delay={380}>
              <div className="bg-charcoal rounded-[1.5rem] p-7">
                <p className="eyebrow">Note</p>
                <p className="text-charcoal-foreground/70 mt-3 text-sm leading-relaxed">
                  Contact details are placeholders and can be replaced with the brand's official
                  numbers, email and office address.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
