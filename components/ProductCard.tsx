"use client";

import { useRef } from "react";
import { ArrowUpRight } from "./Icons";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  kind: "rice" | "dal" | "pulses";
  badge: string;
};

export default function ProductCard({ title, subtitle, description, features, kind, badge }: Props) {
  const ref = useRef<HTMLElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    el.style.setProperty("--card-rx", `${-y * 5}deg`);
    el.style.setProperty("--card-ry", `${x * 7}deg`);
  };
  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--card-rx", "0deg");
    el.style.setProperty("--card-ry", "0deg");
  };

  return (
    <article ref={ref} onMouseMove={onMove} onMouseLeave={reset} className="product-card group">
      <div className={`product-art art-${kind}`}>
        <span className="product-badge">{badge}</span>
        <div className="art-glow" />
        <div className="sack"><div className="sack-mouth"/><div className="sack-fill">
          {Array.from({ length: 26 }).map((_, i) => <i key={i} style={{"--i": i} as React.CSSProperties}/>) }
        </div></div>
        <div className="crop-stem"><i/><i/><i/><i/><i/></div>
      </div>
      <div className="p-6 lg:p-7">
        <div className="mb-2 text-[11px] font-bold uppercase tracking-[.2em] text-gold">{subtitle}</div>
        <h3 className="font-display text-3xl font-semibold text-forest2">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-charcoal/65">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {features.map(f => <span key={f} className="rounded-full bg-forest/5 px-3 py-1.5 text-[11px] font-semibold text-forest">{f}</span>)}
        </div>
        <a href="#quote" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-forest transition group-hover:gap-3">Request product quote <ArrowUpRight className="h-4 w-4"/></a>
      </div>
    </article>
  );
}
