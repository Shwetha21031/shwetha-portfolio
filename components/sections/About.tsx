"use client";

import Image from "next/image";
import VariableProximity from "../ui/VariableProximity";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const About = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const floatingCircleRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!floatingCircleRef.current) return;

    gsap.to(floatingCircleRef.current, {
      rotate: 360,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);


  return (
    <div className="w-screen h-full grid place-items-center gap-0 font-sulphur-point">
      <div className="relative grid place-items-center text-center gap-6 text-3xl font-light w-[65%]">
        <span
          className=" flex items-center justify-center mx-2 absolute -top-20 -left-40 "
          ref={floatingCircleRef}
        >
          <Image
            src="/circle-3.png"
            alt="circle-img"
            width={150}
            height={150}
            className="object-cover"
          />
        </span>

        <div
          ref={containerRef}
          style={{ position: "relative" }}
          className="text-5xl font-black pb-4 text-[#FFDEDE]"
        >
          <VariableProximity
            label={"Some context before you judge my code"}
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={200}
            falloff="linear"
          />
        </div>

        <div ref={containerRef} style={{ position: "relative" }}>
          <VariableProximity
            label={
              "Over 2+ years as a software engineer at Estuate, breaking things to understand them, rebuilding them cleaner, and trimming anything that slows the system down."
            }
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
        <div ref={containerRef} style={{ position: "relative" }}>
          <VariableProximity
            label={
              "Software developer by practice, designer by instinct, engineer by compulsion. "
            }
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
        <div ref={containerRef} style={{ position: "relative" }}>
          <VariableProximity
            label={
              "Lives somewhere between curiosity, precision, and the urge to redesign whatever isn’t behaving."
            }
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
        <span className=" flex items-center justify-center mx-2 absolute -bottom-20 -right-40 rotate-30">
          <Image
            src="/stamp-1.png"
            alt="stamp-1"
            width={180}
            height={180}
            className=" object-cover"
          />
        </span>
      </div>
    </div>
  );
};

export default About;


