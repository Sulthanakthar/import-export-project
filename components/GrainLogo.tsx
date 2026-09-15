export default function GrainLogo({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className="group inline-flex items-center gap-3" aria-label="Global Harvest Exports home">
      <span className={`relative grid h-11 w-11 place-items-center rounded-[14px] border ${light ? "border-white/20 bg-white/10" : "border-forest/10 bg-cream"} overflow-hidden`}>
        <span className="absolute h-7 w-2 rotate-[-25deg] rounded-full bg-gold" />
        <span className="absolute left-[12px] top-[14px] h-3 w-2 rotate-[28deg] rounded-full bg-forest" />
        <span className="absolute right-[10px] top-[10px] h-3 w-2 rotate-[-30deg] rounded-full bg-forest" />
        <span className="absolute right-[13px] bottom-[9px] h-3 w-2 rotate-[30deg] rounded-full bg-gold" />
      </span>
      <span className="leading-none">
        <span className={`block font-display text-[17px] font-semibold tracking-tight ${light ? "text-white" : "text-forest2"}`}>Gafoor Harvest</span>
        <span className={`mt-1 block text-[9px] font-bold uppercase tracking-[0.28em] ${light ? "text-white/55" : "text-charcoal/45"}`}>Exports · India</span>
      </span>
    </a>
  );
}
