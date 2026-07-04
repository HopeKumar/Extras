"use client";

import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/lib/data";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { cursorProps } from "@/lib/cursor";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const reduced = usePrefersReducedMotion();
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (reduced) return;
    timer.current = window.setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6000);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [reduced]);

  const go = (n: number) => {
    setI(n);
    if (timer.current) window.clearInterval(timer.current);
  };

  if (reduced) {
    return (
      <section id="testimonials" className="section">
        <div className="shell flex flex-col gap-16">
          {TESTIMONIALS.map((t, idx) => (
            <blockquote key={idx} className="max-w-[24ch]">
              <p className="display-l text-[var(--paper)]">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6 font-mono text-[0.7rem] tracking-[0.14em] text-[var(--color-stone-400)] uppercase">
                {t.name} — {t.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="section">
      <div className="shell">
        <div className="border-t border-[color-mix(in_oklab,var(--paper)_10%,transparent)] pt-8">
          <span className="eyebrow">08 — In Their Words</span>
        </div>

        <div className="mt-14 grid">
          {TESTIMONIALS.map((t, idx) => (
            <blockquote
              key={idx}
              className="col-start-1 row-start-1 flex max-w-[20ch] flex-col justify-center transition-all duration-1000"
              style={{
                opacity: idx === i ? 1 : 0,
                transform: `translateY(${idx === i ? 0 : idx < i ? -24 : 24}px)`,
                pointerEvents: idx === i ? "auto" : "none",
              }}
              aria-hidden={idx !== i}
            >
              <p className="display-xl font-light text-[var(--paper)]">
                <span className="italic-serif text-[var(--accent-bright)]">&ldquo;</span>
                {t.quote}
                <span className="italic-serif text-[var(--accent-bright)]">&rdquo;</span>
              </p>
              <footer className="mt-8 font-mono text-[0.72rem] tracking-[0.14em] text-[var(--color-stone-400)] uppercase">
                {t.name} — {t.role}
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-4">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => go(idx)}
              {...cursorProps("hover")}
              aria-label={`Show testimonial ${idx + 1}`}
              className="group relative h-8 w-8"
            >
              <span
                className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-[var(--paper)] transition-all duration-500"
                style={{ width: idx === i ? 32 : 12, opacity: idx === i ? 1 : 0.4 }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
