"use client";
import { ReactLenis } from "lenis/react";
import { useState } from "react";

import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Techstack from "@/components/sections/Techstack";
import WorkTogether from "@/components/sections/WorkTogether";
import Footer from "@/components/sections/Footer";
import Loader from "@/components/layouts/Loader";


import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const track = containerRef.current.querySelector(
      ".horizontal-track"
    ) as HTMLElement;

    const slides = gsap.utils.toArray<HTMLElement>(
      track.querySelectorAll(".content")
    );

    gsap.to(track, {
      xPercent: -100 * (slides.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${window.innerWidth * (slides.length - 1)}`,
      },
    });
  }, []);

    return (
      <>
        {!isLoaded && <Loader onComplete={() => setIsLoaded(true)} />}

        <ReactLenis root>
          <div className="overflow-x-hidden">
            <Hero />
            <section ref={containerRef} className="horizontal-scroll">
              <div className="horizontal-track">
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
              </div>
            </section>

            <WorkTogether />
            <Footer />
          </div>
        </ReactLenis>
      </>
    );
}
