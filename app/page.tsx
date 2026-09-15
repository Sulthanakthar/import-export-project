import Navigation from "@/components/Navigation";
import HeroVisual from "@/components/HeroVisual";
import ProductCard from "@/components/ProductCard";
import QuoteForm from "@/components/QuoteForm";
import GrainLogo from "@/components/GrainLogo";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { TestimonialSection } from "@/components/ui/testimonials";
import { ArrowRight, ArrowUpRight, Check, Globe, Leaf, Mail, MapPin, Message, Package, Phone, Shield } from "@/components/Icons";

const process = [
  ["01", "Source", "Partner-led sourcing from trusted agricultural regions across India."],
  ["02", "Sort & Grade", "Product-specific cleaning, grading and quality sorting for buyer specifications."],
  ["03", "Inspect", "Batch checks for quality, packing readiness and export documentation requirements."],
  ["04", "Pack & Dispatch", "Flexible packaging, labeling and coordinated logistics for domestic or export supply."],
];

const reasons = [
  [Shield, "Quality-first supply", "Clear specifications, batch consistency and buyer-focused quality checks."],
  [Package, "Flexible packaging", "Retail-ready, institutional and bulk pack formats with custom branding support."],
  [Globe, "B2B export mindset", "Built for importers, distributors, wholesalers, retail chains and food businesses."],
  [Leaf, "Indian agricultural sourcing", "Access to diverse rice, dhall and pulse varieties from established growing regions."],
];

const testimonials = [
  {
    id: 1,
    quote:
      "Clear specifications, packaging options and fast communication make it much easier for our procurement team to evaluate a new supply relationship.",
    name: "A. Rahman",
    role: "Procurement Manager",
    company: "Food Distribution Group",
    market: "UAE",
    imageSrc:
      "/images/akthar.png",
  },
  {
    id: 2,
    quote:
      "The product presentation is structured around the information B2B buyers actually need: grade, quantity, packing, quality process and destination.",
    name: "Meera Patel",
    role: "Sourcing Lead",
    company: "Retail Supply Network",
    market: "Singapore",
    imageSrc:
      "/images/sultan.png",
  },
  {
    id: 3,
    quote:
      "A professional enquiry flow gives distributors confidence to discuss recurring volume, custom packaging and market-specific requirements from the first conversation.",
    name: "Daniel Okoro",
    role: "Distribution Director",
    company: "Regional Foods Trading",
    market: "Kenya",
    imageSrc:
      "/images/mohammed.png",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#fbf8ef] text-charcoal">
      <Navigation />

      <section id="home" className="hero-section relative min-h-[760px] pt-[118px] lg:min-h-screen lg:pt-[135px]">
        <div className="grain-noise" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:pb-20">
          <div className="relative z-10 max-w-2xl">
            <div className="eyebrow reveal-up"><span className="eyebrow-dot" /> India → Global B2B Markets</div>
            <h1 className="mt-6 font-display text-[52px] font-semibold leading-[.98] tracking-[-.045em] text-forest2 sm:text-6xl lg:text-[82px]">
              Premium Indian Grains for <span className="text-gold">Global Markets.</span><br />Delivered with trust.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-charcoal/68 sm:text-lg">
              Gafoor Harvest Exports connects reliable Indian agricultural supply with importers, wholesalers, distributors, retail chains and food businesses worldwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#quote" className="btn-primary">Get Export Pricing <ArrowUpRight className="h-4 w-4" /></a>
              <a href="#products" className="btn-secondary">Explore Products <ArrowRight className="h-4 w-4" /></a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-semibold text-charcoal/62">
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> B2B bulk enquiries</span>
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> Custom packaging</span>
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> Export support</span>
            </div>
          </div>
          <HeroVisual />
        </div>
        <div className="border-y border-forest/10 bg-white/35 backdrop-blur-sm">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-5 py-6 md:grid-cols-4 lg:px-8">
            {[["B2B", "Buyer focused"], ["2", "Core categories"], ["5–50 kg", "Packing range"], ["India", "Sourcing base"]].map(([big, small]) => (
              <div key={small} className="border-forest/10 px-4 first:pl-0 md:border-r md:last:border-r-0">
                <div className="font-display text-2xl font-semibold text-forest2 sm:text-3xl">{big}</div><div className="mt-1 text-[10px] font-bold uppercase tracking-[.18em] text-charcoal/45">{small}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-pad relative bg-forest2 text-white">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-gold/10 blur-[100px]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
          <div>
            <div className="eyebrow eyebrow-dark"><span className="eyebrow-dot" /> From India, for the world</div>
            <h2 className="section-title mt-5 text-white">A cleaner way to source agricultural organic staples.</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <p className="text-lg leading-8 text-white/65 sm:col-span-2">We are building Global Harvest Exports around a simple promise: make rice, dhall and pulses sourcing clearer, more dependable and easier for B2B buyers to evaluate. From product selection to packaging and shipment coordination, every enquiry is handled around the buyer&apos;s specification.</p>
            <div className="border-t border-white/15 pt-6"><div className="font-display text-4xl text-gold">01</div><h3 className="mt-3 text-lg font-bold">Clear specifications</h3><p className="mt-2 text-sm leading-6 text-white/55">Grade, packing, quantity and destination details are captured early to reduce back-and-forth.</p></div>
            <div className="border-t border-white/15 pt-6"><div className="font-display text-4xl text-gold">02</div><h3 className="mt-3 text-lg font-bold">Buyer-first communication</h3><p className="mt-2 text-sm leading-6 text-white/55">Fast quotation flow for procurement teams, wholesalers and international trade partners.</p></div>
          </div>
        </div>
      </section>

      <section id="products" className="section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><div className="eyebrow"><span className="eyebrow-dot" /> Product catalogue</div><h2 className="section-title mt-4">Core products for <span>high-volume trade.</span></h2></div>
            <p className="max-w-md text-sm leading-6 text-charcoal/58">Product grades and exact availability can be tailored to buyer requirements. Use the quote form to specify variety, quantity, packaging and destination.</p>
          </div>
          <div className="mt-11 grid gap-6 lg:grid-cols-3">
            <ProductCard kind="rice" badge="Export staple" title="Rice" subtitle="Premium grain" description="Basmati and non-basmati sourcing options for wholesale, distribution, food service and international trade." features={["Basmati options", "Non-basmati", "Bulk supply"]} />
            <ProductCard kind="dal" badge="Daily essential" title="Dhall" subtitle="Clean & graded" description="Popular split-lentil categories for food businesses and distributors, available in commercial packaging formats." features={["Toor ", "Moong", "Urad / Masoor", "Chana"]} />
            <ProductCard kind="pulses" badge="Multi-category" title="Pulses" subtitle="Wholesale supply" description="Whole pulses and legumes selected for consistent quality, flexible order volumes and buyer-specific packaging." features={["Chickpeas", "Green gram", "Black gram"]} />
          </div>
        </div>
      </section>

      <section id="quality" className="section-pad bg-[#f0ead9]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-end gap-6 lg:grid-cols-2">
            <div><div className="eyebrow"><span className="eyebrow-dot" /> Quality process</div><h2 className="section-title mt-4">From source to shipment, <span>quality stays visible.</span></h2></div>
            <p className="max-w-xl text-sm leading-6 text-charcoal/60 lg:justify-self-end">A transparent process gives B2B buyers confidence before they commit to repeat orders. The exact test and certification requirements can be aligned to the commodity and destination market.</p>
          </div>
          <div className="process-track mt-12 grid gap-0 md:grid-cols-4">
            {process.map(([n, t, d]) => <div key={n} className="process-step"><div className="step-num">{n}</div><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section id="packaging" className="section-pad relative">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div className="pack-visual">
            <div className="pack-shadow" />
            <div className="pack-bag bag-back"><b>50</b><span>KG</span><small>BULK</small></div>
            <div className="pack-bag bag-mid"><b>25</b><span>KG</span><small>TRADE</small></div>
            <div className="pack-bag bag-front"><div className="mini-mark">GH</div><b>5</b><span>KG</span><small>RETAIL</small></div>
            <div className="pack-tag">Private label ready</div>
          </div>
          <div>
            <div className="eyebrow"><span className="eyebrow-dot" /> Packaging solutions</div>
            <h2 className="section-title mt-4">Pack it for your <span>market.</span></h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-charcoal/62">From branded retail packs to industrial sacks, packaging can be planned around distribution channel, product category and buyer requirement.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {["5 kg retail packs", "10 kg family packs", "25 kg trade packs", "50 kg bulk sacks", "Woven / laminated bags", "Custom labels & artwork"].map(x => <div key={x} className="check-row"><Check className="h-4 w-4" />{x}</div>)}
            </div>
            <a href="#quote" className="btn-primary mt-8">Discuss packaging <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <section id="markets" className="section-pad overflow-hidden bg-charcoal text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center"><div className="eyebrow eyebrow-dark mx-auto w-fit"><span className="eyebrow-dot" /> Global markets</div><h2 className="section-title mx-auto mt-4 max-w-3xl text-white">Built for buyers across <span>trade corridors.</span></h2><p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/55">Serve domestic Indian demand and grow international trade relationships across key food-importing regions.</p></div>
          <div className="world-panel mt-10">
            <div className="world-grid" />
            <div className="market-line line1" /><div className="market-line line2" /><div className="market-line line3" />
            {[["India", "46%", "56%"], ["Gulf", "61%", "45%"], ["Africa", "55%", "67%"], ["Europe", "47%", "31%"], ["S.E. Asia", "75%", "61%"]].map(([name, left, top]) => <div key={name} className="market-pin" style={{ left, top }}><span /><b>{name}</b></div>)}
            <div className="world-copy"><Globe className="h-7 w-7 text-gold" /><div><b>Domestic + International</b><span>Flexible B2B supply conversations</span></div></div>
          </div>
        </div>
      </section>

      <TestimonialSection
        eyebrow="Global buyer experience"
        title="Confidence that travels beyond the first order."
        subtitle="A premium B2B experience should make sourcing feel clear before the first call — from product fit and quality expectations to packaging and destination requirements."
        testimonials={testimonials}
        backgroundVideoSrc="/videos/global-harvest-4k.mp4"
        disclaimer="Demo testimonial content for presentation purposes. Replace names, companies, photos and quotations with verified client testimonials before production launch."
      />

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div><div className="eyebrow"><span className="eyebrow-dot" /> Why Global Harvest</div><h2 className="section-title mt-4">A trade partner, not just a <span>catalogue.</span></h2><p className="mt-5 max-w-md text-sm leading-6 text-charcoal/58">The website experience is intentionally designed around enquiry generation: buyers can quickly understand products, packaging, quality approach and next steps.</p></div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map(([Icon, title, text], i) => <div key={String(title)} className="reason-card"><span className="reason-icon"><Icon /></span><div className="text-[10px] font-bold tracking-[.18em] text-gold">0{i + 1}</div><h3>{String(title)}</h3><p>{String(text)}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="section-pad pt-8">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="quote-shell">
            <div className="quote-copy">
              <div className="eyebrow eyebrow-dark"><span className="eyebrow-dot" /> B2B quote desk</div>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">Tell us what you need. We&apos;ll turn it into a clear quotation request.</h2>
              <p className="mt-5 text-sm leading-6 text-white/60">For faster response, include product variety, quantity, destination country/port, packaging and any quality requirements.</p>
              <div className="mt-8 space-y-4 text-sm text-white/75">
                <div className="flex gap-3"><span className="qicon"><Message /></span><div><b className="block text-white">WhatsApp</b><span>+91 9944550063</span></div></div>
                <div className="flex gap-3"><span className="qicon"><Mail /></span><div><b className="block text-white">Email</b><span>mohammedsulthan2004@gmail.com</span></div></div>
                <div className="flex gap-3"><span className="qicon"><MapPin /></span><div><b className="block text-white">Location</b><span>India · Serving domestic & global buyers</span></div></div>
              </div>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      <section id="contact" className="pb-10 pt-8">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="contact-strip">
            <div><span>Ready to source?</span><h3>Start your next B2B order conversation.</h3></div>
            <div className="flex flex-wrap gap-3"><a className="btn-primary" href="#quote">Request a Quote <ArrowUpRight className="h-4 w-4" /></a><a className="btn-secondary" href="https://wa.me/919944550063" target="_blank" rel="noreferrer"><Message className="h-4 w-4" /> WhatsApp Us</a></div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a2119] px-5 pb-7 pt-14 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2"><GrainLogo light /><p className="mt-5 max-w-sm text-sm leading-6 text-white/45">Professional B2B sourcing for rice, dal and pulses from India to domestic and international buyers.</p></div>
          <div><div className="footer-title">Explore</div><div className="footer-links"><a href="#products">Products</a><a href="#quality">Quality Process</a><a href="#packaging">Packaging</a><a href="#markets">Global Markets</a></div></div>
          <div><div className="footer-title">Contact</div><div className="footer-links"><a href="#quote">Request a Quote</a><a href="mailto:sales@gafoorharvestexports.com">sales@gafoorharvestexports.com</a><a href="tel:+91 9944550063">+91 9944550063</a><span>India</span></div></div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col gap-3 pt-6 text-[11px] text-white/35 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Global Harvest Exports. All rights reserved.</span><span>Rice · Dhall · Pulses · B2B Trade</span></div>
      </footer>

      <FloatingWhatsApp />
    </main>
  );
}
