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

  useEffect(() => {
    const clouds = [
      { ref: cloudLeftBig, x: -1800 },
      { ref: cloudRightSmall, x: -1600 },
      { ref: cloudRightBig, x: 1800 },
      { ref: cloudLeftSmall, x: 1600 },
      { ref: cloudTopRight, x: 1500 },
    ];

    clouds.forEach(({ ref, x }) => {
      if (!ref.current) return;

      gsap.to(ref.current, {
        x,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/clouds-bg-hero-section.JPG')",
      }}
      id="hero"
    >
      {/* Bottom gradient */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-40 w-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))",
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-8 text-center">
        {/* Profile wrapper (ANCHOR) */}

        <div className="relative w-[340px] h-[340px]">
          {/* Location */}

          <TextReveal delay={2.5}>
            <div className="absolute top-28 -left-28 z-20 ">
              <Image
                src="/location.png"
                alt="Location"
                width={150}
                height={50}
              />
            </div>
          </TextReveal>

          {/* Top-right: Hello bubble */}
          <div className="absolute top-0 -right-4 translate-x-1/2 z-20 w-[150px] h-[80px]">
            <Image
              src="/hello.png"
              alt="Chat bubble"
              fill
              className="object-contain"
            />
            <div className="absolute translate-y-5 translate-x-14 text-black">
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

          <div className="relative h-full w-full rounded-full border-[5px] border-white overflow-hidden bg-neutral-800 flex items-center justify-center">
            <Image
              src="/profile_pic.JPG"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>

          {/* It's me */}
          <TextReveal delay={2.5}>
            <div className="absolute bottom-4 -right-16 -translate-y-1/2 z-20">
              <Image src="/its_me.png" alt="Its me" width={120} height={50} />
            </div>
          </TextReveal>
        </div>

        {/* Huge text */}
        <TextReveal delay={2.5}>
          <h1 className="font-source-sans max-w-5xl text-black text-4xl md:text-7xl font-bold leading-tight -mt-6">
            I see, I think, I build <br />
            then I overthink.
          </h1>
        </TextReveal>
        {/* <p className="text-black font-medium -mt-10 font-source-sans">
          - Still learning. Always building. Progress over perfection.
        </p> */}
      </div>

      {/* clouds */}
      <div ref={cloudLeftBig} className="absolute top-0 -left-20 z-20">
        <Image src="/cloud.png" alt="cloud" width={600} height={50} />
      </div>

      <div ref={cloudRightSmall} className="absolute top-0 left-60 z-20">
        <Image
          src="/cloudreverse.png.png"
          alt="cloudreverse.png"
          width={200}
          height={50}
        />
      </div>

      <div ref={cloudRightBig} className="absolute bottom-30 -right-20 z-20">
        <Image src="/cloud.png" alt="cloud" width={500} height={50} />
      </div>

      <div ref={cloudLeftSmall} className="absolute bottom-20 right-10 z-20">
        <Image
          src="/cloudreverse.png"
          alt="cloudreverse.png"
          width={200}
          height={50}
        />
      </div>

      <div ref={cloudTopRight} className="absolute top-10 right-50 z-20">
        <Image src="/cloud.png" alt="cloud" width={200} height={50} />
      </div>
    </section>
  );
};

export default Hero;
