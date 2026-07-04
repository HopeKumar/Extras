import type { PlateKind } from "@/components/ui/Plate";

export const NAV_LINKS = [
  { label: "Studio", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Automation", href: "#automation" },
  { label: "Process", href: "#process" },
  { label: "Clients", href: "#results" },
] as const;

export const CAPABILITIES = [
  "Digital Products",
  "Brand Systems",
  "AI Automation",
  "Web Experiences",
  "Internal Software",
  "Creative Direction",
];

export type Project = {
  id: string;
  title: string;
  client: string;
  discipline: string;
  year: string;
  kind: PlateKind;
  tone: "stone" | "graphite" | "champagne" | "obsidian";
  summary: string;
};

export const FEATURED: Project[] = [
  {
    id: "aurelia",
    title: "Aurelia",
    client: "Aurelia Maison",
    discipline: "Brand · Commerce",
    year: "2025",
    kind: "monolith",
    tone: "champagne",
    summary:
      "A couture house reimagined as a living archive — an editorial commerce platform where every garment is presented like a museum acquisition.",
  },
  {
    id: "meridian",
    title: "Meridian",
    client: "Meridian Capital",
    discipline: "Product · Data",
    year: "2025",
    kind: "grid",
    tone: "graphite",
    summary:
      "An investment intelligence workspace that turns dense market data into a calm, legible narrative for decision-makers.",
  },
  {
    id: "solene",
    title: "Solène",
    client: "Solène Skincare",
    discipline: "Brand · Web",
    year: "2024",
    kind: "aperture",
    tone: "stone",
    summary:
      "A skincare ritual translated into light, texture and pace — a slow, tactile web experience that sells feeling before formula.",
  },
  {
    id: "atlas",
    title: "Atlas OS",
    client: "Atlas Logistics",
    discipline: "Software · Systems",
    year: "2024",
    kind: "topographic",
    tone: "obsidian",
    summary:
      "An internal operating system unifying twelve legacy tools into a single, quiet interface used by 4,000 people daily.",
  },
];

export const COLLECTION: Project[] = [
  { id: "c1", title: "Verre Studio", client: "Architecture", discipline: "Portfolio", year: "2025", kind: "arch", tone: "stone", summary: "" },
  { id: "c2", title: "Nocturne", client: "Fragrance", discipline: "Commerce", year: "2025", kind: "monolith", tone: "obsidian", summary: "" },
  { id: "c3", title: "Field Notes", client: "Editorial", discipline: "Publication", year: "2024", kind: "strata", tone: "graphite", summary: "" },
  { id: "c4", title: "Halcyon", client: "Hospitality", discipline: "Brand", year: "2024", kind: "aperture", tone: "champagne", summary: "" },
  { id: "c5", title: "Praxis", client: "Studio", discipline: "Software", year: "2024", kind: "grid", tone: "graphite", summary: "" },
  { id: "c6", title: "Lumen", client: "Lighting", discipline: "Commerce", year: "2023", kind: "topographic", tone: "stone", summary: "" },
];

export type AutomationNode = {
  id: string;
  label: string;
  detail: string;
  x: number; // % of canvas
  y: number;
};

export const AUTOMATION_NODES: AutomationNode[] = [
  { id: "intake", label: "Intake", detail: "Signals captured across every channel", x: 12, y: 30 },
  { id: "reason", label: "Reasoning", detail: "Models interpret intent & context", x: 40, y: 16 },
  { id: "orchestrate", label: "Orchestration", detail: "Work routed to the right agent", x: 50, y: 52 },
  { id: "action", label: "Action", detail: "Tasks executed in your systems", x: 78, y: 34 },
  { id: "memory", label: "Memory", detail: "Every outcome learned & stored", x: 30, y: 78 },
  { id: "human", label: "Human Loop", detail: "You approve what matters", x: 72, y: 76 },
];

export const AUTOMATION_EDGES: [string, string][] = [
  ["intake", "reason"],
  ["reason", "orchestrate"],
  ["orchestrate", "action"],
  ["orchestrate", "memory"],
  ["memory", "reason"],
  ["action", "human"],
  ["human", "orchestrate"],
];

export type CaseStudy = {
  id: string;
  client: string;
  title: string;
  discipline: string;
  year: string;
  tone: "stone" | "graphite" | "champagne" | "obsidian";
  kind: PlateKind;
  narrative: string;
  metrics: { value: string; label: string }[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "meridian",
    client: "Meridian Capital",
    title: "From spreadsheets to a single source of clarity",
    discipline: "Product Design · Engineering · AI",
    year: "2025",
    tone: "graphite",
    kind: "grid",
    narrative:
      "Meridian's analysts lived across nineteen tabs. We rebuilt their day around one calm workspace — with an AI layer that reads the market and drafts the memo before the meeting.",
    metrics: [
      { value: "63%", label: "Faster reporting cycle" },
      { value: "4.2×", label: "Analyst throughput" },
      { value: "$1.4M", label: "Annual hours reclaimed" },
    ],
  },
  {
    id: "aurelia",
    client: "Aurelia Maison",
    title: "A couture house that finally feels couture online",
    discipline: "Brand · Web · Motion",
    year: "2025",
    tone: "champagne",
    kind: "monolith",
    narrative:
      "We treated the flagship like a gallery — slow reveals, museum spacing, tactile motion. Conversion rose not by pushing harder, but by making desire patient.",
    metrics: [
      { value: "+118%", label: "Conversion rate" },
      { value: "3.1×", label: "Time on site" },
      { value: "41%", label: "Higher AOV" },
    ],
  },
  {
    id: "atlas",
    client: "Atlas Logistics",
    title: "Twelve tools, four thousand people, one system",
    discipline: "Software · Systems · AI",
    year: "2024",
    tone: "obsidian",
    kind: "topographic",
    narrative:
      "A decade of stitched-together software replaced by a single operating system. Automation quietly handles the repetitive nine-tenths so the team can own the tenth that matters.",
    metrics: [
      { value: "12→1", label: "Tools consolidated" },
      { value: "78%", label: "Manual tasks automated" },
      { value: "9 mo", label: "Full rollout" },
    ],
  },
];

export const PROCESS = [
  {
    n: "01",
    title: "Immersion",
    body: "We embed. We interview, audit, and map the terrain until we understand your business better than a brief ever could.",
  },
  {
    n: "02",
    title: "Direction",
    body: "A single, opinionated creative direction — not three safe options. We commit to a point of view and defend it.",
  },
  {
    n: "03",
    title: "Craft",
    body: "Design and engineering move as one. Every pixel, transition and edge case is handled with obsessive care.",
  },
  {
    n: "04",
    title: "Momentum",
    body: "We ship, measure, and refine. The launch is the starting line — we stay to make it compound.",
  },
];

export const RESULTS = [
  { value: "128", suffix: "%", label: "Average lift in conversion", sub: "across shipped commerce work" },
  { value: "4.6", suffix: "×", label: "Return on engagement", sub: "measured 12 months post-launch" },
  { value: "40", suffix: "k", label: "Hours automated annually", sub: "for a single enterprise client" },
  { value: "9", suffix: "", label: "Industry awards", sub: "for craft, motion & innovation" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "They didn't hand us a website. They handed us a new standard the entire company now measures itself against.",
    name: "Elena Rossi",
    role: "CMO, Aurelia Maison",
  },
  {
    quote:
      "The most disciplined creative team we've worked with. Every decision had a reason, and every reason had taste.",
    name: "Marcus Vale",
    role: "Founder, Meridian Capital",
  },
  {
    quote:
      "We asked for software. We received a system our people actually love opening in the morning.",
    name: "Priya Anand",
    role: "COO, Atlas Logistics",
  },
];

export const FAQS = [
  {
    q: "Who is The Extras & Co. for?",
    a: "Ambitious companies who understand that experience is the product. We work best with founders and teams who want a defining creative statement — not a template with their logo dropped in.",
  },
  {
    q: "Do you only design, or do you build?",
    a: "Both, always together. Design and engineering are the same conversation here. We ship production-grade Next.js, design systems, and AI automation — not handoffs and hope.",
  },
  {
    q: "How involved do we need to be?",
    a: "Deeply at the start, lightly after. We front-load immersion so we can carry the weight of execution. Expect a focused kickoff, then confident, well-argued work delivered on rhythm.",
  },
  {
    q: "What does an engagement cost?",
    a: "Flagship sites start around $12k; ongoing partnerships from $9k / month; intelligence and automation work is scoped to impact. We price to the outcome, and we're candid about it early.",
  },
  {
    q: "How fast can we start?",
    a: "We take on a limited number of engagements at once to protect the craft. Typically there's a two to four week runway. Reach out and we'll tell you the honest timeline.",
  },
];
