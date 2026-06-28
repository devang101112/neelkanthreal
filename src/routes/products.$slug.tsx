import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MessageCircle, ChevronRight, ArrowLeft, Package, FlaskConical, CheckCircle2, Mail } from "lucide-react";
import { getProduct, products, PHONE_1, EMAIL, waLink } from "@/lib/products";
import logoAsset from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const p = getProduct(params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Product"} — Neelkanth Rockminerals Industries` },
      { name: "description", content: loaderData?.tagline ?? "" },
      { property: "og:title", content: loaderData?.name ?? "" },
      { property: "og:description", content: loaderData?.tagline ?? "" },
      { property: "og:image", content: loaderData?.images[0] ?? "" },
    ],
  }),
  component: ProductPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <Link to="/" className="mt-4 inline-block text-accent">← Back to home</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => <div className="p-10">Error: {error.message}</div>,
});

function ProductPage() {
  const p = Route.useLoaderData() as import("@/lib/products").Product;
  const [activeImg, setActiveImg] = useState(0);
  const enquireWA = waLink(`Hello! I'm interested in ${p.name}. Please share the latest price and availability.`);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Neelkanth Rock Mineral Industries" className="h-10 w-auto" />
            <div className="leading-tight hidden sm:block">
              <div className="font-display font-bold text-sm">Neelkanth Rockminerals</div>
              <div className="text-[10px] text-muted-foreground">Industries · Since 2021</div>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <a href={`tel:+91${PHONE_1}`} className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-white" style={{ background: "var(--gradient-accent)" }}>
              <Phone size={14} /> Call Now
            </a>
            <a href={enquireWA} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold bg-[#25D366] text-white">
              <MessageCircle size={14} /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="text-sm text-muted-foreground flex items-center gap-2">
          <Link to="/" className="hover:text-accent inline-flex items-center gap-1"><ArrowLeft size={14} /> Home</Link>
          <ChevronRight size={14} />
          <span>Products</span>
          <ChevronRight size={14} />
          <span className="text-foreground font-medium">{p.name}</span>
        </nav>
      </div>

      {/* Product Hero */}
      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="tilt-card rounded-2xl overflow-hidden bg-muted aspect-square relative" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <img src={p.images[activeImg]} alt={p.name} className="tilt-inner w-full h-full object-cover" />
            </div>
            {p.images.length > 1 && (
              <div className="mt-4 flex gap-3">
                {p.images.map((src, i) => (
                  <button key={i} onClick={() => setActiveImg(i)} className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition ${activeImg === i ? "border-accent" : "border-border"}`}>
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Premium Quality</div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{p.name}</h1>
            <p className="text-muted-foreground text-lg mb-6">{p.tagline}</p>

            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-4xl font-bold text-foreground">₹{p.price}</span>
              <span className="text-muted-foreground">/ {p.unit}</span>
            </div>
            <div className="text-sm text-muted-foreground mb-6">
              <strong className="text-foreground">{p.moq}</strong> (Minimum Order Quantity)
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <a href={enquireWA} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white shine-on-hover" style={{ background: "var(--gradient-accent)" }}>
                <MessageCircle size={16} /> Get Best Price
              </a>
              <a href={`tel:+91${PHONE_1}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold border border-border bg-card">
                <Phone size={16} /> Call Now
              </a>
              <a href={`mailto:${EMAIL}?subject=Enquiry: ${p.name}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold border border-border bg-card">
                <Mail size={16} /> Email
              </a>
            </div>

            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {p.specs.map(([k, v], i) => (
                    <tr key={k} className={i % 2 ? "bg-secondary/40" : ""}>
                      <td className="px-4 py-3 text-muted-foreground font-medium w-1/3">{k}</td>
                      <td className="px-4 py-3 font-semibold">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">About this Product</h2>
            <p className="text-muted-foreground leading-relaxed text-base">{p.description}</p>

            <h3 className="text-xl font-bold mt-10 mb-4 flex items-center gap-2"><CheckCircle2 className="text-accent" size={20} /> Applications</h3>
            <div className="flex flex-wrap gap-2">
              {p.applications.map(a => (
                <span key={a} className="px-3 py-1.5 rounded-full bg-card border border-border text-sm">{a}</span>
              ))}
            </div>

            <h3 className="text-xl font-bold mt-10 mb-4 flex items-center gap-2"><Package className="text-accent" size={20} /> Packaging Options</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {p.packaging.map(pkg => (
                <div key={pkg} className="p-3 rounded-lg bg-card border border-border text-sm">{pkg}</div>
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-xl p-6 text-white" style={{ background: "var(--gradient-hero)" }}>
              <h4 className="font-bold text-lg mb-2">Need a custom quote?</h4>
              <p className="text-sm text-white/70 mb-4">Bulk pricing, custom packaging and pan-India delivery available.</p>
              <a href={enquireWA} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold bg-white text-foreground text-sm w-full justify-center">
                <MessageCircle size={14} /> Chat on WhatsApp
              </a>
            </div>
            <div className="rounded-xl p-6 border border-border bg-card">
              <h4 className="font-bold mb-3">Quick Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href={`tel:+91${PHONE_1}`} className="hover:text-accent">📞 +91 {PHONE_1}</a></li>
                <li><a href={`mailto:${EMAIL}`} className="hover:text-accent break-all">✉️ {EMAIL}</a></li>
                <li>📍 Jodhpur, Rajasthan</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Composition / Test Results */}
      {(p.composition || p.testResults) && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
            {p.composition && (
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><FlaskConical className="text-accent" /> Chemical Composition</h2>
                <div className="grid grid-cols-2 gap-3">
                  {p.composition.map(c => (
                    <div key={c.name} className="tilt-card p-4 rounded-lg bg-card border border-border flex justify-between">
                      <span className="font-semibold">{c.name}</span>
                      <span className="text-accent font-bold">{c.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {p.testResults && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Test Results</h2>
                <div className="rounded-xl border border-border overflow-hidden bg-card">
                  <table className="w-full text-xs">
                    <thead className="bg-primary text-primary-foreground">
                      <tr><th className="px-2 py-2 text-left">#</th><th className="px-2 py-2 text-left">Characteristic</th><th className="px-2 py-2 text-left">Spec</th><th className="px-2 py-2 text-left">Result</th></tr>
                    </thead>
                    <tbody>
                      {p.testResults.map(r => (
                        <tr key={r.sno} className="border-t border-border">
                          <td className="px-2 py-2">{r.sno}</td>
                          <td className="px-2 py-2 font-medium">{r.characteristics}</td>
                          <td className="px-2 py-2 text-muted-foreground">{r.spec}</td>
                          <td className="px-2 py-2 font-semibold text-accent">{r.result}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Related */}
      <section className="py-16 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Other Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.filter(x => x.slug !== p.slug).map(x => (
              <Link key={x.slug} to="/products/$slug" params={{ slug: x.slug }} className="tilt-card group bg-card rounded-xl overflow-hidden border border-border">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={x.images[0]} alt={x.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{x.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{x.tagline}</p>
                  <div className="mt-3 text-sm text-accent font-semibold inline-flex items-center gap-1">View Details <ChevronRight size={14} /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Neelkanth Rockminerals Industries · GST 08AUXPC4562C2ZH
      </footer>

      <a href={enquireWA} target="_blank" rel="noopener" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition float-slow">
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
