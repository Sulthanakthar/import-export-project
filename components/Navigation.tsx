"use client";

import { useEffect, useState } from "react";
import GrainLogo from "./GrainLogo";
import { ArrowUpRight, Close, Menu } from "./Icons";

const links = [
  ["Products", "#products"],
  ["Quality", "#quality"],
  ["Packaging", "#packaging"],
  ["Markets", "#markets"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#fbf8ef]/90 shadow-[0_10px_35px_rgba(18,60,45,.08)] backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <GrainLogo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="nav-link">{label}</a>
          ))}
        </nav>
        <a href="#quote" className="btn-primary hidden lg:inline-flex">
          Request a Quote  <ArrowUpRight className="h-4 w-4" />
        </a>
        <button className="grid h-11 w-11 place-items-center rounded-full border border-forest/10 lg:hidden" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <Close /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-forest/10 bg-[#fbf8ef]/98 px-5 py-5 shadow-xl lg:hidden">
          <nav className="grid gap-1">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-semibold text-charcoal hover:bg-forest/5">{label}</a>
            ))}
            <a href="#quote" onClick={() => setOpen(false)} className="btn-primary mt-3 justify-center">Request a Quote <ArrowUpRight className="h-4 w-4" /></a>
          </nav>
        </div>
      )}
    </header>
  );
}
