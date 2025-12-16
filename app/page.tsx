"use client";
import { ReactLenis } from "lenis/react";

import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Techstack from "@/components/sections/Techstack";
import WorkTogether from "@/components/sections/WorkTogether";
import Footer from "@/components/sections/Footer";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const contents = gsap.utils.toArray<HTMLElement>(
      containerRef.current.querySelectorAll(".content")
    );

    gsap.to(contents, {
      xPercent: -100 * (contents.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${containerRef.current!.offsetWidth}`,
      },
    });
  }, []);
  return (
    <ReactLenis root>
      <div>
        <Hero />
        <section ref={containerRef} className="horizontal-scroll">
          <div className="content">
            <Portfolio />
          </div>
          <div className="content">
            <About />
          </div>
          <div className="content">
            <Techstack />
          </div>
          <div className="content">
            <Projects />
          </div>
        </section>

        <WorkTogether />
        <Footer />
      </div>
    </ReactLenis>
  );
}
