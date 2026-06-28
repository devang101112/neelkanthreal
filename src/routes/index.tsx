import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Award, FileText, Factory, Leaf, ShieldCheck, Truck, ChevronRight, Menu, X, Building2 } from "lucide-react";
import ownerAsset from "@/assets/owner.png";
import logoAsset from "@/assets/logo.png";
import isoCert from "@/assets/iso.pdf";
import udyamCert from "@/assets/udyam.pdf";
import { products, PHONE_1, PHONE_2, EMAIL, EMAIL_2, waLink } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neelkanth Rock Mineral Industries — Bentonite & Fullers Earth Manufacturer Jodhpur" },
      { name: "description", content: "ISO-certified manufacturer of Bentonite Powder, Bentonite Lumps, Fullers Earth Powder & Lumps. Trusted by L&T, Jindal, S.P. Singla and more. GST 08AUXPC4562C2ZH." },
    ],
  }),
  component: Home,
});

const WA_LINK = waLink("Hello! I'm interested in your products.");

const partners = [
  "Larsen & Toubro (L&T)",
  "Grimtech Projects",
  "Tirara Infrastructure Pvt. Ltd.",
  "S.P. Singla Constructions Pvt. Ltd.",
  "Jindal Infrastructure Pvt. Ltd.",
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img src={logoAsset} alt="Neelkanth Rock Mineral Industries" className="h-11 w-auto" />
            <div className="leading-tight hidden sm:block">
              <div className="font-display font-bold text-sm">Neelkanth Rockminerals</div>
              <div className="text-[10px] text-muted-foreground">Industries · Since 2021</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to="/about" className="hover:text-accent transition">About</Link>
            <a href="#products" className="hover:text-accent transition">Products</a>
            <Link to="/why-choose-us" className="hover:text-accent transition">Why Choose Us</Link>
            <a href="#partners" className="hover:text-accent transition">Partners</a>
            <a href="#certificates" className="hover:text-accent transition">Certificates</a>
            <a href="#contact" className="hover:text-accent transition">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={`tel:+91${PHONE_1}`} className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-primary-foreground shine-on-hover" style={{ background: "var(--gradient-accent)" }}>
              <Phone size={14} /> Call Now
            </a>
            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-4 flex flex-col gap-3 text-sm font-medium">
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
              <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
              <Link to="/why-choose-us" onClick={() => setMenuOpen(false)}>Why Choose Us</Link>
              <a href="#partners" onClick={() => setMenuOpen(false)}>Partners</a>
              <a href="#certificates" onClick={() => setMenuOpen(false)}>Certificates</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
              <a href={`tel:+91${PHONE_1}`} onClick={() => setMenuOpen(false)} className="inline-flex items-center gap-2 text-accent"><Phone size={14} /> +91 {PHONE_1}</a>
            </div>
          </div>
        )}

      </header>

      {/* Hero */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.68 0.16 55) 0%, transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.55 0.12 40) 0%, transparent 50%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-white/90 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              ISO Certified · Jodhpur, Rajasthan
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              Premium <span className="text-3d" style={{ background: "var(--gradient-accent)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Bentonite</span> & Fullers Earth.
            </h1>
            <p className="text-lg lg:text-xl text-white/70 mb-8 max-w-2xl">
              Trusted manufacturer, supplier, exporter and mines owner delivering industrial-grade minerals across India and the world since 2021.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#products" className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white shine-on-hover" style={{ background: "var(--gradient-accent)" }}>
                Explore Products <ChevronRight size={16} />
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold bg-white/10 text-white backdrop-blur hover:bg-white/20 transition">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
              {[["20+", "Years Experience"], ["2500+", "Tonnes/Month"], ["ISO", "Certified"]].map(([n, l]) => (
                <div key={l}>
                  <div className="text-3xl font-bold text-white">{n}</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">{l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Logo showcase with 3D float */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-3xl opacity-40" style={{ background: "var(--gradient-accent)" }} />
              <img src={logoAsset} alt="Neelkanth Logo" className="relative w-80 h-auto float-slow drop-shadow-2xl" style={{ filter: "drop-shadow(0 25px 40px rgba(0,0,0,0.5))" }} />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl opacity-20 blur-2xl" style={{ background: "var(--gradient-accent)" }} />
            <div className="relative rounded-2xl overflow-hidden tilt-card" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <img src={ownerAsset} alt="Mr. Sawai Singh, CEO" className="w-full aspect-square object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 border border-border max-w-[200px]" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="text-xs text-muted-foreground">Founder & CEO</div>
              <div className="font-display font-bold">Mr. Sawai Singh</div>
              <div className="text-xs text-accent mt-1">Established 2021</div>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">About Us</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Excellence rooted in the earth of Rajasthan.</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Founded in 2021 by <strong className="text-foreground">Mr. Sawai Singh</strong>, Neelkanth Rock Mineral Industries is a trusted manufacturer, supplier, exporter, wholesaler and mines owner based in Jodhpur, Rajasthan. We specialize in high-quality Bentonite and Fullers Earth products crafted to the highest standards of purity.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With state-of-the-art manufacturing facilities and stringent quality control, we have built a reputation for reliability across HDD drilling, foundry, oil-well, fertilizer, cosmetics and skincare sectors.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Factory, t: "Mines Owner", d: "Direct from source" },
                { icon: ShieldCheck, t: "Quality Assured", d: "ISO certified" },
                { icon: Truck, t: "Pan-India Supply", d: "& Global export" },
                { icon: Leaf, t: "Eco-Friendly", d: "Natural minerals" },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="tilt-card flex gap-3 p-4 rounded-lg border border-border bg-card">
                  <div className="w-10 h-10 rounded-md flex items-center justify-center shrink-0" style={{ background: "var(--gradient-accent)" }}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t}</div>
                    <div className="text-xs text-muted-foreground">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 lg:py-28 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Our Products</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Industrial minerals, refined to perfection.</h2>
            <p className="text-muted-foreground mt-3">Click any product to view full specs, chemical composition and pricing.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="tilt-card group bg-card rounded-xl overflow-hidden border border-border hover:border-accent transition" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="aspect-square overflow-hidden bg-muted">
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg mb-2">{p.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{p.tagline}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-accent">₹{p.price}<span className="text-xs font-normal text-muted-foreground">/{p.unit}</span></span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">View <ChevronRight size={14} /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Business Partners */}
      <section id="partners" className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Trusted Partnerships</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">Our Esteemed Business Partners</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are proud to be associated with some of India's leading organizations and infrastructure companies. Our commitment to quality, reliability and timely execution has enabled us to build strong, long-term business relationships with reputed industry leaders.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
            {partners.map((name) => (
              <div key={name} className="partner-badge tilt-card rounded-xl p-6 text-center min-h-[140px] flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: "var(--gradient-accent)" }}>
                  <Building2 className="text-white" size={22} />
                </div>
                <div className="font-display font-bold text-sm leading-tight">{name}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto text-sm leading-relaxed">
            Our valued partnerships reflect the trust and confidence our clients place in our services. We remain dedicated to delivering excellence, maintaining the highest standards of professionalism and contributing to the successful execution of every project entrusted to us.
          </p>
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="py-20 lg:py-28 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Certifications</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Verified. Compliant. Trusted.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "ISO Certificate", desc: "Quality management certification verifying our manufacturing standards.", url: isoCert, icon: Award },
              { name: "Udyam Registration", desc: "Government of India MSME registration certificate.", url: udyamCert, icon: FileText },
            ].map(({ name, desc, url, icon: Icon }) => (
              <a key={name} href={url} target="_blank" rel="noopener" className="tilt-card group flex gap-5 p-6 rounded-xl border border-border bg-card hover:border-accent transition" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="w-14 h-14 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--gradient-accent)" }}>
                  <Icon size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-display font-bold text-lg mb-1">{name}</div>
                  <p className="text-sm text-muted-foreground mb-3">{desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    View Certificate <ChevronRight size={14} className="group-hover:translate-x-1 transition" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src={logoAsset} alt="" className="h-12 w-auto bg-white/95 p-1 rounded-md" />
              <div>
                <div className="font-display font-bold">Neelkanth</div>
                <div className="text-xs text-white/60">Rock Mineral Industries</div>
              </div>
            </div>
            <p className="text-sm text-white/60">Manufacturer, Supplier & Exporter of Bentonite and Fullers Earth.</p>
            <p className="text-xs text-white/40 mt-4">GST: 08AUXPC4562C2ZH</p>
          </div>
          <div>
            <div className="font-semibold mb-3 text-sm">Contact</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href={`tel:+91${PHONE_1}`} className="hover:text-accent">+91 {PHONE_1}</a></li>
              <li><a href={`tel:+91${PHONE_2}`} className="hover:text-accent">+91 {PHONE_2}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="hover:text-accent break-all">{EMAIL}</a></li>
              <li><a href={`mailto:${EMAIL_2}`} className="hover:text-accent break-all">{EMAIL_2}</a></li>
              <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 shrink-0" /> Jodhpur, Rajasthan, India</li>
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-3 text-sm">Quick Links</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#about" className="hover:text-accent">About</a></li>
              <li><a href="#products" className="hover:text-accent">Products</a></li>
              <li><a href="#partners" className="hover:text-accent">Partners</a></li>
              <li><a href="#certificates" className="hover:text-accent">Certificates</a></li>
              <li><a href="#contact" className="hover:text-accent">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-white/10 text-xs text-white/40 text-center">
          © {new Date().getFullYear()} Neelkanth Rock Mineral Industries. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={WA_LINK} target="_blank" rel="noopener" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition float-slow">
        <MessageCircle size={26} />
      </a>
    </div>
  );
}

function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("err");
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Get in Touch</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Let's discuss your requirement.</h2>
          <p className="text-muted-foreground mb-8">Reach out via phone, WhatsApp, email or the form. We respond to every enquiry within 24 hours.</p>
          <div className="space-y-4">
            {[
              { icon: Phone, label: "Call us", value: `+91 ${PHONE_1}`, href: `tel:+91${PHONE_1}` },
              { icon: Phone, label: "Alt. phone", value: `+91 ${PHONE_2}`, href: `tel:+91${PHONE_2}` },
              { icon: MessageCircle, label: "WhatsApp", value: `+91 ${PHONE_1}`, href: WA_LINK },
              { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: Mail, label: "Email (Owner)", value: EMAIL_2, href: `mailto:${EMAIL_2}` },
              { icon: MapPin, label: "Location", value: "Jodhpur, Rajasthan, India" },

            ].map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--gradient-accent)" }}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{label}</div>
                    <div className="font-semibold">{value}</div>
                  </div>
                </>
              );
              return href ? (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="flex items-center gap-4 group">
                  {content}
                </a>
              ) : (
                <div key={label} className="flex items-center gap-4">{content}</div>
              );
            })}
          </div>
        </div>

        <form onSubmit={onSubmit} className="bg-card border border-border rounded-2xl p-6 lg:p-8 tilt-card" style={{ boxShadow: "var(--shadow-card)" }}>
          <h3 className="font-display font-bold text-2xl mb-1">Send Enquiry</h3>
          <p className="text-sm text-muted-foreground mb-6">We'll get back to you via email.</p>
          <input type="hidden" name="_subject" value="New Enquiry from Neelkanth Rock Mineral website" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_cc" value={EMAIL_2} />
          <input type="text" name="_honey" style={{ display: "none" }} />
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full Name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Product</label>
              <select id="product-select" name="product" required className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">Select a product…</option>
                {products.map(p => <option key={p.slug} value={p.name}>{p.name}</option>)}
                <option value="Other">Other / General Enquiry</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Message / Requirement</label>
              <textarea name="message" rows={4} required className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Quantity, packaging, delivery location…" />
            </div>
          </div>
          <button type="submit" disabled={status === "sending"} className="mt-6 w-full py-3 rounded-md font-semibold text-white disabled:opacity-50 shine-on-hover" style={{ background: "var(--gradient-accent)" }}>
            {status === "sending" ? "Sending…" : status === "ok" ? "✓ Sent — we'll be in touch" : "Send Enquiry"}
          </button>
          {status === "err" && <p className="text-sm text-destructive mt-3">Couldn't send. Please call or WhatsApp us directly.</p>}
          {status === "ok" && <p className="text-sm text-accent mt-3 font-medium">Thank you! Your enquiry has been emailed to us.</p>}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, className = "" }: { label: string; name: string; type?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">{label}</label>
      <input type={type} name={name} required={required} className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}
