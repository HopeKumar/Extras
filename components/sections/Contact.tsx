"use client";

import { useState } from "react";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { cursorProps } from "@/lib/cursor";

const SERVICES = ["Website", "Product", "Brand", "AI Automation", "Not sure yet"];

export default function Contact() {
  const [service, setService] = useState<string>("Website");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project — ${service}${name ? ` — ${name}` : ""}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInterested in: ${service}\n\n${message}`
    );
    window.location.href = `mailto:hello@theextras.co?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const fieldCls =
    "w-full border-b border-[color-mix(in_oklab,var(--paper)_16%,transparent)] bg-transparent py-4 text-[var(--paper)] outline-none transition-colors duration-300 placeholder:text-[var(--color-stone-500)] focus:border-[var(--accent)]";

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="shell">
        <div className="border-t border-[color-mix(in_oklab,var(--paper)_10%,transparent)] pt-8">
          <span className="eyebrow">10 — Start a Project</span>
        </div>

        <div className="mt-12 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <AnimatedHeading
              as="h2"
              className="display-xxl text-[var(--paper)]"
              text="Let's build something worth remembering."
            />
            <div className="mt-12 flex flex-col gap-8 md:flex-row md:gap-16">
              <div>
                <span className="font-mono text-[0.62rem] tracking-[0.18em] text-[var(--color-stone-500)] uppercase">
                  Email
                </span>
                <a
                  href="mailto:hello@theextras.co"
                  {...cursorProps("hover")}
                  className="mt-2 block text-lg text-[var(--paper)] transition-colors hover:text-[var(--accent-bright)]"
                >
                  hello@theextras.co
                </a>
              </div>
              <div>
                <span className="font-mono text-[0.62rem] tracking-[0.18em] text-[var(--color-stone-500)] uppercase">
                  Studio
                </span>
                <p className="mt-2 text-lg text-[var(--paper)]">Remote · Worldwide</p>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="lg:col-span-6" aria-label="Project enquiry">
            <fieldset className="mb-10">
              <legend className="mb-4 font-mono text-[0.62rem] tracking-[0.18em] text-[var(--color-stone-500)] uppercase">
                I&rsquo;m interested in
              </legend>
              <div className="flex flex-wrap gap-3">
                {SERVICES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setService(s)}
                    {...cursorProps("hover")}
                    className={`rounded-full border px-5 py-2.5 text-[0.82rem] transition-colors duration-300 ${
                      service === s
                        ? "border-[var(--accent)] bg-[var(--accent)] text-[#0a0806]"
                        : "border-[color-mix(in_oklab,var(--paper)_18%,transparent)] text-[var(--color-paper-100)] hover:border-[var(--paper)]"
                    }`}
                    aria-pressed={service === s}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="flex flex-col gap-6">
              <input className={fieldCls} placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required aria-label="Your name" />
              <input className={fieldCls} type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} required aria-label="Your email" />
              <textarea className={`${fieldCls} min-h-[120px] resize-none`} placeholder="Tell us about the project" value={message} onChange={(e) => setMessage(e.target.value)} aria-label="Project details" />
            </div>

            <div className="mt-10 flex items-center gap-6">
              <button
                type="submit"
                {...cursorProps("hover")}
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--paper)] px-8 py-4 text-[0.82rem] font-medium tracking-[0.02em] text-[#0a0806] transition-colors duration-500 hover:bg-[var(--accent-bright)]"
              >
                Send enquiry
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </button>
              {sent && (
                <span className="font-mono text-[0.66rem] tracking-[0.12em] text-[var(--accent-bright)] uppercase">
                  Opening your mail client…
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
