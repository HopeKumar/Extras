"use client";

import { useCallback, useEffect, useState } from "react";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Cursor from "@/components/ui/Cursor";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/sections/Loader";
import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/About";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Collection from "@/components/sections/Collection";
import Automation from "@/components/sections/Automation";
import CaseStudies from "@/components/sections/CaseStudies";
import Process from "@/components/sections/Process";
import Results from "@/components/sections/Results";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import { registerGsap, ScrollTrigger } from "@/lib/gsap";

export default function Experience() {
  const [loaded, setLoaded] = useState(false);

  const onLoaderDone = useCallback(() => {
    setLoaded(true);
    // Recalculate all pin/scrub positions now that layout is settled.
    registerGsap();
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, []);

  // Refresh triggers once fonts settle to avoid measurement drift.
  useEffect(() => {
    if (!loaded) return;
    const t = setTimeout(() => ScrollTrigger.refresh(), 400);
    if (document.fonts?.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
    return () => clearTimeout(t);
  }, [loaded]);

  return (
    <SmoothScroll>
      <Cursor />
      {!loaded && <Loader onDone={onLoaderDone} />}
      <Nav ready={loaded} />
      <main id="main">
        <Hero ready={loaded} />
        <About />
        <FeaturedWork />
        <Collection />
        <Automation />
        <CaseStudies />
        <Process />
        <Results />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
