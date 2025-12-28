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
import DesktopNotice from "./DesktopNotice";
import MusicPlayer from "./MusicPlayer";

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
      <div className="relative overflow-x-hidden">
        {!isLoaded && <Loader onComplete={() => setIsLoaded(true)} />}

        <ReactLenis root>
          <div className="block lg:hidden">
            <DesktopNotice />
          </div>
          <div className="overflow-x-hidden hidden lg:block">
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

          {/* music player */}
            <MusicPlayer />
        </ReactLenis>
      </div>
    );
}
