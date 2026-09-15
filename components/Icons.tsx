import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const ArrowUpRight = (props: IconProps) => (
  <svg {...base} {...props}><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
);
export const ArrowRight = (props: IconProps) => (
  <svg {...base} {...props}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
);
export const Check = (props: IconProps) => (
  <svg {...base} {...props}><path d="m5 12 4 4L19 6"/></svg>
);
export const Globe = (props: IconProps) => (
  <svg {...base} {...props}><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.7 3.8 5.7 3.8 9S14.5 18.3 12 21c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z"/></svg>
);
export const Shield = (props: IconProps) => (
  <svg {...base} {...props}><path d="M12 3 5 6v5c0 4.8 2.8 8 7 10 4.2-2 7-5.2 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></svg>
);
export const Package = (props: IconProps) => (
  <svg {...base} {...props}><path d="m12 3 8 4-8 4-8-4 8-4Z"/><path d="m4 7 8 4 8-4"/><path d="M4 7v10l8 4 8-4V7"/><path d="M12 11v10"/></svg>
);
export const Leaf = (props: IconProps) => (
  <svg {...base} {...props}><path d="M20 4c-9 0-14 4-14 10 0 3 2 5 5 5 6 0 9-7 9-15Z"/><path d="M4 20c3-5 7-8 13-11"/></svg>
);
export const Message = (props: IconProps) => (
  <svg {...base} {...props}><path d="M21 11.5a8.2 8.2 0 0 1-9 8 9.3 9.3 0 0 1-4-.9L3 20l1.5-4.3a8 8 0 1 1 16.5-4.2Z"/></svg>
);
export const Phone = (props: IconProps) => (
  <svg {...base} {...props}><path d="M6.6 3.5 9 8 7.6 9.5c1.2 2.5 3.1 4.4 5.7 5.6l1.4-1.5 4.6 2.4-.5 3.1c-.2 1-1.1 1.7-2.1 1.6-7.4-.8-13.4-6.7-14.2-14.2-.1-1 .6-1.9 1.6-2.1l2.5-.9Z"/></svg>
);
export const Mail = (props: IconProps) => (
  <svg {...base} {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
);
export const MapPin = (props: IconProps) => (
  <svg {...base} {...props}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>
);
export const Menu = (props: IconProps) => (
  <svg {...base} {...props}><path d="M4 7h16M4 12h16M4 17h16"/></svg>
);
export const Close = (props: IconProps) => (
  <svg {...base} {...props}><path d="m6 6 12 12M18 6 6 18"/></svg>
);
