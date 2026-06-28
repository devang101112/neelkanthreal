import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Award, Globe, Users, Factory, Leaf } from "lucide-react";
import ownerAsset from "@/assets/owner.png";
import logoAsset from "@/assets/logo.png";
import { PHONE_1, EMAIL, waLink } from "@/lib/products";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Neelkanth Rock Mineral Industries | Bentonite & Fullers Earth" },
      { name: "description", content: "Founded in 2021 by Mr. Sawai Singh with 20+ years of industry experience. Trusted manufacturer, supplier & exporter of Bentonite and Fullers Earth from Jodhpur, Rajasthan. GST 08AUXPC4562C2ZH." },
      { property: "og:title", content: "About Neelkanth Rock Mineral Industries" },
      { property: "og:description", content: "20+ years of industry expertise. Manufacturer, supplier, exporter and mines owner of Bentonite & Fullers Earth from Jodhpur, Rajasthan." },
    ],
  }),
  component: AboutPage,
});

const facts: [string, string][] = [
  ["Name of CEO", "Mr. Sawai Singh"],
  ["Year of Establishment", "2021"],
  ["Industry Experience", "20+ Years"],
  ["Nature of Business", "Manufacturer, Supplier, Exporter & Wholesaler"],
  ["Market Covered", "Worldwide"],
  ["Legal Status", "Individual (Sole Proprietorship)"],
  ["Annual Turnover", "Rs. 5 to 25 Crore Approx."],
  ["GST No.", "08AUXPC4562C2ZH"],
  ["Number of Employees", "Below 20"],
  ["Production Capacity", "2500+ Tonnes / Month"],
];

const pillars = [
  { icon: Award, t: "Reliability & Integrity", d: "Built a strong industry reputation through consistent quality and transparent dealings since day one." },
  { icon: Users, t: "Our Team", d: "Experienced professionals committed to staying ahead of industry trends and advancements." },
  { icon: Leaf, t: "Our Commitment", d: "Deeply invested in the communities we serve, prioritising sustainability and ethical sourcing." },
  { icon: Factory, t: "Our Quality", d: "State-of-the-art manufacturing facilities with stringent quality control for every batch." },
  { icon: Globe, t: "Global Reach", d: "Serving clients from small-scale retailers to multinational corporations worldwide." },
  { icon: CheckCircle2, t: "Trusted Partner", d: "Lasting partnerships built on trust, quality and integrity — for projects of every scale." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoAsset} alt="Neelkanth" className="h-11 w-auto" />
            <div className="leading-tight hidden sm:block">
              <div className="font-display font-bold text-sm">Neelkanth Rockminerals</div>
              <div className="text-[10px] text-muted-foreground">Industries · Since 2021</div>
            </div>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent">
            <ArrowLeft size={16} /> Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.68 0.16 55) 0%, transparent 50%)" }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium mb-5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> About Our Company
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Two decades of expertise, one trusted name.
          </h1>
          <p className="text-lg text-white/75 max-w-3xl mx-auto">
            Neelkanth Rockminerals Industries — your premier destination for high-quality Bentonite and Fullers Earth products from the heart of Rajasthan.
          </p>
        </div>
      </section>

      {/* Owner + Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl opacity-25 blur-2xl" style={{ background: "var(--gradient-accent)" }} />
            <div className="relative rounded-2xl overflow-hidden tilt-card" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <img src={ownerAsset} alt="Mr. Sawai Singh, Founder & CEO" className="w-full aspect-square object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 border border-border max-w-[220px]" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="text-xs text-muted-foreground">Founder & CEO</div>
              <div className="font-display font-bold">Mr. Sawai Singh</div>
              <div className="text-xs text-accent mt-1">20+ Years in the Industry</div>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Our Story</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Rooted in tradition, driven by innovation.</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Established in 2021 by <strong className="text-foreground">Mr. Sawai Singh</strong>, Neelkanth Rockminerals Industries is a trusted manufacturer, supplier, exporter, wholesaler and mines owner based in Jodhpur, Rajasthan. Backed by over <strong className="text-foreground">20 years of industry experience</strong>, our founder built the company on a foundation of reliability, integrity and uncompromising quality.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Our range — Bentonite Powder, Bentonite Lumps, Fullers Earth Powder and Fullers Earth Lumps — is meticulously crafted to the highest standards of purity. State-of-the-art manufacturing facilities and stringent quality control guarantee consistency, effectiveness and customer satisfaction in every consignment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe in forging lasting partnerships built on trust. Whether you are a small-scale retailer or a multinational corporation, we are dedicated to meeting your needs with excellence and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">What Defines Us</div>
            <h2 className="text-3xl lg:text-4xl font-bold">The values behind every tonne we ship.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map(({ icon: Icon, t, d }) => (
              <div key={t} className="tilt-card bg-card rounded-xl p-6 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: "var(--gradient-accent)" }}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Company Facts</div>
            <h2 className="text-3xl lg:text-4xl font-bold">At a glance.</h2>
          </div>
          <div className="rounded-2xl border border-border overflow-hidden bg-card" style={{ boxShadow: "var(--shadow-card)" }}>
            <table className="w-full text-sm">
              <tbody>
                {facts.map(([k, v], i) => (
                  <tr key={k} className={i % 2 ? "bg-secondary/30" : ""}>
                    <td className="px-6 py-4 font-semibold w-1/2">{k}</td>
                    <td className="px-6 py-4 text-muted-foreground">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to work with us?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">Get a quote, request samples, or discuss bulk requirements. We respond within 24 hours.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={waLink("Hello, I'd like to discuss a requirement.")} target="_blank" rel="noopener" className="px-6 py-3 rounded-md font-semibold text-white shine-on-hover" style={{ background: "var(--gradient-accent)" }}>WhatsApp Us</a>
            <a href={`tel:+91${PHONE_1}`} className="px-6 py-3 rounded-md font-semibold bg-white/10 text-white hover:bg-white/20">Call +91 {PHONE_1}</a>
            <a href={`mailto:${EMAIL}`} className="px-6 py-3 rounded-md font-semibold bg-white/10 text-white hover:bg-white/20">Email Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
