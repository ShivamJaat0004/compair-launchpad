import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { NAV_LINKS } from "./Header";

const BUSINESS_LINKS = [
  { to: "/contact", label: "Distributor Enquiry" },
  { to: "/distributor-opportunity", label: "Partner With Us" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
] as const;

const SOCIALS = [
  { label: "Instagram", Icon: Instagram },
  { label: "Facebook", Icon: Facebook },
  { label: "LinkedIn", Icon: Linkedin },
  { label: "YouTube", Icon: Youtube },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground relative overflow-hidden">
      <div className="bg-brand absolute inset-x-0 top-0 h-1" />
      <div className="container-px mx-auto grid max-w-[1600px] gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-20">
        <div>
          <p className="font-display text-2xl font-extrabold tracking-tight">COMPAIR</p>
          <p className="text-charcoal-foreground/60 text-[0.65rem] font-semibold tracking-[0.3em]">
            PREMIUM WATER
          </p>
          <p className="text-charcoal-foreground/75 mt-6 max-w-sm text-sm leading-relaxed">
            Together We Deliver Pure Hydration. Better Lives.
          </p>
          <p className="text-charcoal-foreground/50 mt-3 max-w-sm text-sm leading-relaxed">
            You deliver more than water — you deliver trust.
          </p>
          <div className="mt-7 flex gap-3">
            {SOCIALS.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="border-charcoal-foreground/20 hover:bg-primary hover:border-primary flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Navigate">
          {NAV_LINKS.map((l) => (
            <FooterLink key={l.to} to={l.to}>
              {l.label}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Business">
          {BUSINESS_LINKS.map((l) => (
            <FooterLink key={l.to} to={l.to}>
              {l.label}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Reach Us">
          <li className="text-charcoal-foreground/70 text-sm">Phone — [add number]</li>
          <li className="text-charcoal-foreground/70 text-sm">WhatsApp — [add number]</li>
          <li className="text-charcoal-foreground/70 text-sm">Email — [add email]</li>
          <li className="text-charcoal-foreground/70 text-sm">Office — [add address]</li>
        </FooterCol>
      </div>

      <div className="border-charcoal-foreground/12 container-px mx-auto flex max-w-[1600px] flex-col gap-3 border-t py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p className="text-charcoal-foreground/55">
          © {new Date().getFullYear()} COMPAIR PREMIUM WATER. All Rights Reserved.
        </p>
        <p className="text-charcoal-foreground/40 tracking-[0.2em] uppercase">
          Pure • Premium • Trusted
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-charcoal-foreground/45 font-display text-[0.68rem] font-bold tracking-[0.24em] uppercase">
        {title}
      </p>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        className="text-charcoal-foreground/70 hover:text-primary text-sm transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
