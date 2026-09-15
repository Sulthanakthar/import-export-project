"use client";

import type { MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Globe2,
  Quote,
  Sparkles,
} from "lucide-react";

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  imageSrc: string;
  company?: string;
  market?: string;
}

export interface TestimonialSectionProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
  eyebrow?: string;
  disclaimer?: string;
  backgroundVideoSrc?: string;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 42, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 170, damping: 22 });
  const smoothY = useSpring(pointerY, { stiffness: 170, damping: 22 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-8deg", "8deg"]);
  const glowX = useTransform(smoothX, [-0.5, 0.5], ["20%", "80%"]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], ["20%", "80%"]);

  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.article
      variants={itemVariants}
      className="group relative min-h-[510px] [perspective:1400px]"
      onMouseMove={handlePointerMove}
      onMouseLeave={resetPointer}
      onBlur={resetPointer}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full min-h-[510px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#102b22] shadow-[0_35px_90px_rgba(5,24,18,0.30)] will-change-transform"
      >
        <img
          src={testimonial.imageSrc}
          alt={`${testimonial.name}, ${testimonial.role}`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-[1.055]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071b14] via-[#0b241b]/72 to-[#102b22]/10" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(199,154,67,.18),transparent_36%,transparent_68%,rgba(255,255,255,.10))] opacity-80" />

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-24 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
          style={{
            left: glowX,
            top: glowY,
            background:
              "radial-gradient(circle, rgba(232,190,105,.26), transparent 42%)",
          }}
        />

        <div
          className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur-xl"
          style={{ transform: "translateZ(52px)" }}
        >
          <BadgeCheck className="h-3.5 w-3.5 text-gold" />
          B2B trade partner
        </div>

        {testimonial.market && (
          <div
            className="absolute right-5 top-5 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-2 text-[10px] font-semibold text-white/70 backdrop-blur-xl"
            style={{ transform: "translateZ(42px)" }}
          >
            <Globe2 className="h-3.5 w-3.5 text-gold" />
            {testimonial.market}
          </div>
        )}

        <div
          className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7"
          style={{ transform: "translateZ(64px)" }}
        >
          <div className="mb-5 flex items-center justify-between">
            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl">
              <Quote className="h-5 w-5 text-gold" aria-hidden="true" />
            </span>
            <Sparkles className="h-4 w-4 text-white/40" aria-hidden="true" />
          </div>

          <blockquote className="max-w-sm text-[15px] font-medium leading-7 text-white/90 sm:text-base">
            “{testimonial.quote}”
          </blockquote>

          <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/10 pt-5">
            <figcaption>
              <p className="text-sm font-bold text-white">{testimonial.name}</p>
              <p className="mt-1 text-[11px] leading-5 text-white/60">
                {testimonial.role}
                {testimonial.company ? ` · ${testimonial.company}` : ""}
              </p>
            </figcaption>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-gold/40 group-hover:text-gold">
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
      </motion.div>
    </motion.article>
  );
}

/**
 * Premium, responsive testimonial section with staggered entrance animation,
 * pointer-reactive 3D cards and optional 4K background video support.
 */
export function TestimonialSection({
  title,
  subtitle,
  testimonials,
  eyebrow = "Buyer relationships",
  disclaimer,
  backgroundVideoSrc,
}: TestimonialSectionProps) {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#0a2119] py-20 text-white sm:py-24 lg:py-28">
      {backgroundVideoSrc ? (
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={backgroundVideoSrc} type="video/mp4" />
        </video>
      ) : null}

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(199,154,67,.20),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(57,112,79,.22),transparent_30%),linear-gradient(135deg,rgba(5,28,20,.98),rgba(10,33,25,.92))]" />
      <div className="testimonial-grid absolute inset-0 -z-10 opacity-30" />
      <div className="testimonial-orb testimonial-orb-one" />
      <div className="testimonial-orb testimonial-orb-two" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-white/60 backdrop-blur-xl"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_0_6px_rgba(199,154,67,.10)]" />
            {eyebrow}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-[60px]"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base"
          >
            {subtitle}
          </motion.p>
        </div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>

        {disclaimer ? (
          <p className="mx-auto mt-7 max-w-2xl text-center text-[10px] leading-5 text-white/40">
            {disclaimer}
          </p>
        ) : null}
      </div>
    </section>
  );
}
