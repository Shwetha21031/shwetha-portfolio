"use client";

import Image from "next/image";
import Typewriter from "../ui/Typewriter";
import TextReveal from "../ui/TextReveal";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const circleRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!circleRef.current) return;

    gsap.to(circleRef.current, {
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
    <div className="h-screen w-full grid place-items-center  relative bg-black">
      <div className="flex flex-col p-10 relative">
        {/* Name */}
        <TextReveal delay={0.3}>
          <p className="text-[#FF0B55] text-[clamp(2rem,4vw,3rem)]  ml-2">
            Shwetha&apos;s
          </p>
        </TextReveal>

        <TextReveal delay={0.4}>
          {/* Portfolio */}
          <div className="flex flex-col font-bold text-[clamp(5rem,12vw,40rem)] leading-none">
            {/* First line */}
            <div className="flex items-center relative">
              <span className="text-white font-black">P</span>
              <span
                ref={circleRef}
                className="flex items-center justify-center mx-2
             w-[clamp(80px,10vw,150px)]
             aspect-square"
              >
                <Image
                  src="/circle-img.png"
                  alt="circle-img"
                  fill
                  className="rounded-full object-cover"
                />
              </span>

              <span className="text-white font-black">RT</span>
              <span className="absolute right-15 top-5 w-[clamp(80px,10vw,150px)]  aspect-square max-md:hidden">
                <Image
                  src="/stamp.png"
                  alt="stamp"
                  fill
                  className=" rounded object-cover -rotate-8"
                />
              </span>
            </div>

            {/* Second line */}
            <div className="ml-10 p-2 flex">
              <span
                className="flex items-center justify-center mx-1
             w-[clamp(50px,10vw,150px)] relative"
              >
                <Image
                  src="/figma.png"
                  alt="figma"
                  fill
                  className="object-contain  -rotate-10"
                />
              </span>
              <span className="text-white ml-2 font-black">OLIO</span>
            </div>
          </div>
        </TextReveal>

        <p className="text-[#FF0B55] h-[50px] text-[clamp(2rem,4vw,3rem)] ml-2 text-right flex items-center justify-end gap-2 max-md:mb-[20vh]">
          Software
          <span className="inline-block w-[10ch] text-left">
            <Typewriter words={["Developer", "Designer", "Engineer"]} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
