"use client";

import Image from "next/image";
import Typewriter from "../ui/Typewriter";
import TextReveal from "../ui/TextReveal";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const cloudLeftBig = useRef<HTMLDivElement | null>(null);
  const cloudRightSmall = useRef<HTMLDivElement | null>(null);
  const cloudRightBig = useRef<HTMLDivElement | null>(null);
  const cloudLeftSmall = useRef<HTMLDivElement | null>(null);
  const cloudTopRight = useRef<HTMLDivElement | null>(null);
const heroRef = useRef<HTMLElement | null>(null);

useEffect(() => {
  const clouds = [
    { ref: cloudLeftBig, x: -0.4 },
    { ref: cloudRightSmall, x: -0.3 },
    { ref: cloudRightBig, x: 0.4 },
    { ref: cloudLeftSmall, x: 0.3 },
    { ref: cloudTopRight, x: 0.25 },
  ];

  clouds.forEach(({ ref, x }) => {
    if (!ref.current || !heroRef.current) return;

    gsap.to(ref.current, {
      x: () => document.documentElement.clientWidth * x,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
}, []);


  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full bg-cover bg-center overflow-x-clip"
      style={{ backgroundImage: "url('/clouds-bg-hero-section.JPG')" }}
    >
      {/* Bottom gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-30 w-full bg-linear-to-b from-transparent to-black z-10" />

      {/* Hero content */}
      <div className="relative w-full z-20 flex min-h-screen overflow-x-clip flex-col items-center justify-center gap-8 text-center ">
        {/* PROFILE STACKING CONTEXT */}
        <div className="relative isolate w-[50vw] max-w-90 aspect-square max-sm:mt-[-200px]">
          {/* Location */}
          <TextReveal delay={2.5}>
            <div className="absolute top-28 -left-25 z-30 w-[25vw] max-sm:-left-18 pointer-events-none">
              <Image
                src="/location.png"
                alt="Location"
                width={150}
                height={50}
              />
            </div>
          </TextReveal>

          {/* Hello bubble */}
          <div className="absolute top-0 -right-4 translate-x-1/2 z-40 w-[25vw]  h-[80px]">
            <Image
              src="/hello.png"
              alt="Chat bubble"
              fill
              className="object-contain"
            />

            {/* Typewriter text – FIXED */}
            <div className="absolute inset-0 z-50 flex items-center justify-center text-black mb-4 ml-4 max-sm:mb-2 max-sm:ml-6">
              <Typewriter
                words={[
                  "Hello!",
                  "Hola!!",
                  "Bonjour",
                  "Namaste",
                  "Meow",
                  "Ciaooo",
                ]}
              />
            </div>
          </div>

          {/* Profile image */}
          <div className="relative z-20 h-full w-full rounded-full border-[5px] border-white overflow-hidden bg-neutral-800">
            <Image
              src="/profile_pic.JPG"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>

          {/* It's me */}
          <TextReveal delay={2.5}>
            <div className="absolute bottom-4 -right-16 -translate-y-1/2 z-30 pointer-events-none">
              <Image src="/its_me.png" alt="Its me" width={120} height={50} />
            </div>
          </TextReveal>
        </div>

        {/* Headline */}
        <TextReveal delay={2.5}>
          <h1 className="font-source-sans text-black text-[clamp(2.5rem,4vw,4rem)] font-bold leading-tight -mt-6 z-20">
            I see, I think, I build <br />
            then I overthink.
          </h1>
        </TextReveal>
      </div>

      {/* clouds */}
      <div
        ref={cloudLeftBig}
        className="absolute top-0 left-50 z-20 max-md:hidden"
      >
        <Image
          src="/cloud.png"
          alt="cloud"
          width={600}
          height={50}
          style={{ width: "clamp(260px, 35vw, 600px)" }}
        />
      </div>

      <div
        ref={cloudRightBig}
        className="absolute bottom-30 right-50 z-20 max-md:hidden"
        style={{ width: "clamp(240px, 32vw, 500px)" }}
      >
        <Image src="/cloud.png" alt="cloud" width={500} height={50} />
      </div>

      <div
        ref={cloudTopRight}
        className="absolute top-5 right-80 z-20 max-md:hidden"
        style={{ width: "clamp(120px, 15vw, 220px)" }}
      >
        <Image src="/cloud.png" alt="cloud" width={200} height={50} />
      </div>
    </section>
  );
};

export default Hero;


