"use client";

import { useRef, type ElementType } from "react";
import { registerGsap, gsap } from "@/lib/gsap";
import { useIsoLayoutEffect, usePrefersReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  start?: string;
  stagger?: number;
  delay?: number;
};

/**
 * Word-by-word masked reveal. Each word rises out of an overflow-hidden line.
 * Preserves whitespace/wrapping so it reads as a real heading.
 */
export default function AnimatedHeading({
  text,
  as: Tag = "h2",
  className,
  start = "top 85%",
  stagger = 0.06,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();
  const words = text.split(" ");

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll("[data-word] > span");
    if (reduced) {
      gsap.set(targets, { yPercent: 0, opacity: 1 });
      return;
    }
    const { gsap: g } = registerGsap();
    const ctx = g.context(() => {
      g.fromTo(
        targets,
        { yPercent: 115, opacity: 0.2 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          delay,
          ease: "expo.out",
          stagger,
          scrollTrigger: { trigger: el, start },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <Tag ref={ref} className={cn(className)} aria-label={text}>
      {words.map((w, i) => (
        <span
          key={i}
          data-word
          aria-hidden="true"
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", paddingBottom: "0.16em", marginBottom: "-0.16em" }}
        >
          <span style={{ display: "inline-block", willChange: "transform" }}>
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
