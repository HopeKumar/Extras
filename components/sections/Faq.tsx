"use client";

import { useRef, useState } from "react";
import { FAQS } from "@/lib/data";
import { cursorProps } from "@/lib/cursor";

function Item({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  const body = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-[color-mix(in_oklab,var(--paper)_10%,transparent)]">
      <button
        onClick={() => setOpen((v) => !v)}
        {...cursorProps("hover")}
        className="flex w-full items-center justify-between gap-6 py-7 text-left"
        aria-expanded={open}
        aria-controls={`faq-${i}`}
      >
        <span className="flex items-baseline gap-5">
          <span className="font-mono text-[0.66rem] tracking-[0.14em] text-[var(--accent)]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-[clamp(1.3rem,2.6vw,2rem)] font-light text-[var(--paper)]">
            {q}
          </span>
        </span>
        <span className="relative h-4 w-4 shrink-0">
          <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-[var(--paper)]" />
          <span
            className="absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-[var(--paper)] transition-transform duration-500"
            style={{ transform: open ? "translate(-50%,-50%) scaleY(0)" : "translate(-50%,-50%) scaleY(1)" }}
          />
        </span>
      </button>
      <div
        id={`faq-${i}`}
        ref={body}
        className="grid transition-all duration-[600ms] ease-[var(--ease-out-expo)]"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="max-w-[62ch] pb-8 pl-[2.6rem] text-[var(--color-stone-300)] lead">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="section">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="border-t border-[color-mix(in_oklab,var(--paper)_10%,transparent)] pt-8 lg:sticky lg:top-[calc(var(--nav-h)+2rem)]">
            <span className="eyebrow">09 — Questions</span>
            <h2 className="display-l mt-6 text-[var(--paper)]">
              Everything you might <span className="italic-serif text-[var(--color-stone-300)]">ask.</span>
            </h2>
            <p className="mt-6 max-w-[34ch] text-[var(--color-stone-300)]">
              Still curious? Write to us directly — we answer thoughtfully, and quickly.
            </p>
          </div>
        </div>
        <div className="lg:col-span-8">
          {FAQS.map((f, i) => (
            <Item key={i} q={f.q} a={f.a} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
