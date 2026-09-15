"use client";

import { useEffect, useRef } from "react";
import { Globe, Package, Shield } from "./Icons";

export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      el.style.setProperty("--rx", `${-y * 7}deg`);
      el.style.setProperty("--ry", `${x * 8}deg`);
    };
    const reset = () => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", reset);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <div ref={ref} className="hero-visual" aria-hidden="true">
      <div className="hero-halo" />
      <div className="orbit orbit-a"><span className="grain g1"/><span className="grain g2"/><span className="grain g3"/></div>
      <div className="orbit orbit-b"><span className="pulse p1"/><span className="pulse p2"/><span className="pulse p3"/></div>
      <div className="globe3d">
        <div className="globe-lines longitude l1"/><div className="globe-lines longitude l2"/><div className="globe-lines longitude l3"/>
        <div className="globe-lines latitude lat1"/><div className="globe-lines latitude lat2"/><div className="globe-lines latitude lat3"/>
        <div className="continent c1"/><div className="continent c2"/><div className="continent c3"/>
        <span className="route-dot rd1"/><span className="route-dot rd2"/><span className="route-dot rd3"/>
      </div>
      <div className="rice-bowl">
        <div className="bowl-rim" />
        <div className="rice-pile">
          {Array.from({ length: 23 }).map((_, i) => <i key={i} style={{"--i": i} as React.CSSProperties} />)}
        </div>
      </div>
      <div className="float-card card-quality"><span className="icon-chip"><Shield /></span><div><b>Premium Quality</b><small>Multi-stage checks</small></div></div>
      <div className="float-card card-global"><span className="icon-chip"><Globe /></span><div><b>Global Supply</b><small>Domestic + export</small></div></div>
      <div className="float-card card-pack"><span className="icon-chip"><Package /></span><div><b>Custom Packs</b><small>Retail to bulk</small></div></div>
    </div>
  );
}
