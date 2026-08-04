import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useScroll } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Scroll-reveal wrapper with subtle smooth transition. */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "zoom";
  className?: string;
}) {
  return (
    <div className={cn("transition-all duration-500", className)}>
      {children}
    </div>
  );
}

/** Section heading with eyebrow label and gradient title. */
export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

/** Animated number counter that runs once when scrolled into view. */
export function Counter({
  value,
  decimals = 0,
  suffix = "",
}: {
  value: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/** Top scroll progress bar. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-primary via-secondary to-accent"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

/** Soft glow that follows the pointer (desktop only, decorative). */
export function MouseGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 120, damping: 20 });
  const sy = useSpring(y, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e: PointerEvent) => {
      x.set(e.clientX - 220);
      y.set(e.clientY - 220);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-0 hidden h-[440px] w-[440px] rounded-full bg-secondary/10 blur-[120px] md:block"
      style={{ x: sx, y: sy }}
    />
  );
}

/** Animated gradient + grid + particle backdrop. */
export function AnimatedBackdrop() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    left: `${(i * 37) % 100}%`,
    top: `${(i * 61) % 100}%`,
    delay: (i % 6) * 0.8,
    size: 2 + (i % 3),
  }));

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 hero-aura" />
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-primary/25 blur-[140px] animate-aurora" />
      <div className="absolute -right-24 top-1/3 h-[380px] w-[380px] rounded-full bg-accent/20 blur-[140px] animate-aurora [animation-delay:4s]" />
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-secondary/60"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{ y: [0, -30, 0], opacity: [0.15, 0.7, 0.15] }}
          transition={{ duration: 8 + (i % 5), repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
