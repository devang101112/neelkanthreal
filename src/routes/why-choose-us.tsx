import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Clock, Scale, Network, BadgeIndianRupee, Sparkles, Users, Heart, Rocket } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";
import { PHONE_1, waLink } from "@/lib/products";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — Neelkanth Rock Mineral Industries" },
      { name: "description", content: "Timely delivery, fair business policy, wide distribution network, affordable pricing & ISO-grade quality — the reasons leading infrastructure firms choose Neelkanth Rockminerals." },
      { property: "og:title", content: "Why Choose Neelkanth Rockminerals" },
      { property: "og:description", content: "Five reasons clients across India and abroad trust us for Bentonite & Fullers Earth." },
    ],
  }),
  component: WhyChooseUsPage,
});

const reasons = [
  { icon: Clock, t: "Timely Delivery", d: "On-time despatch from our own mines and processing units — every order, every time. Logistics planned to meet your project schedule." },
  { icon: Scale, t: "Fair Business Policy", d: "Transparent pricing, honest communication and no hidden charges. We build relationships, not transactions." },
  { icon: Network, t: "Wide Distribution Network", d: "Pan-India supply and global export reach. We deliver to refineries, plants and project sites across every state." },
  { icon: BadgeIndianRupee, t: "Affordable Price Structure", d: "Direct-from-mines pricing means competitive rates for bulk buyers without compromising on grade or consistency." },
  { icon: Sparkles, t: "Qualitative Range of Products", d: "ISO-certified Bentonite and Fullers Earth — tested for viscosity, swelling, fluid loss and purity before despatch." },
];

const trio = [
  { icon: Users, t: "Our Team", d: "Our team of experienced professionals is committed to staying ahead of industry trends and advancements, ensuring that we remain at the forefront of the market." },
  { icon: Heart, t: "Why Us?", d: "We prioritize client satisfaction by delivering quality products on time, backed by fair policies, extensive distribution, and affordability. Our commitment is unmatched." },
  { icon: Rocket, t: "Our Commitment", d: "Our commitment extends beyond just business. We are deeply invested in the communities we serve, and we prioritize sustainability and environmental responsibility." },
];

function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Neelkanth" className="h-11 w-auto" />
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
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 80% 30%, oklch(0.68 0.16 55) 0%, transparent 50%)" }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium mb-5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Why Choose Us
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            The preferred choice of leading infrastructure firms.
          </h1>
          <p className="text-lg text-white/75 max-w-3xl mx-auto">
            Since our commencement we have been indulged in providing top-quality products and ensuring the utmost satisfaction of every client. Here's what sets us apart.
          </p>
        </div>
      </section>

      {/* Trio cards (matches reference layout) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {trio.map(({ icon: Icon, t, d }) => (
              <div key={t} className="tilt-card bg-card rounded-2xl p-8 border border-border text-center" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: "var(--gradient-accent)" }}>
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-4 text-primary">{t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The five reasons */}
      <section className="py-20 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Five Reasons</div>
            <h2 className="text-3xl lg:text-4xl font-bold">Why we are the preferred choice of our clients.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map(({ icon: Icon, t, d }, i) => (
              <div key={t} className="tilt-card bg-card rounded-xl p-6 border border-border relative overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="absolute top-3 right-4 text-6xl font-bold opacity-5">0{i + 1}</div>
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

      {/* Stats */}
      <section className="py-16" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[["20+", "Years Experience"], ["2500+", "Tonnes / Month"], ["100%", "Quality Assured"], ["Worldwide", "Export Reach"]].map(([n, l]) => (
            <div key={l}>
              <div className="text-4xl lg:text-5xl font-bold mb-1">{n}</div>
              <div className="text-xs uppercase tracking-wider text-white/60">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Experience the Neelkanth difference.</h2>
          <p className="text-muted-foreground mb-8">Let's discuss how we can support your next project.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={waLink("Hi, I'd like to know more about your products.")} target="_blank" rel="noopener" className="px-6 py-3 rounded-md font-semibold text-white shine-on-hover" style={{ background: "var(--gradient-accent)" }}>WhatsApp Now</a>
            <a href={`tel:+91${PHONE_1}`} className="px-6 py-3 rounded-md font-semibold border border-border hover:border-accent">Call +91 {PHONE_1}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
