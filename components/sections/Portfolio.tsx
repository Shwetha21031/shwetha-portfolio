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
          <p className="text-[#FF0B55] text-4xl  ml-2">Shwetha&apos;a</p>
        </TextReveal>

        <TextReveal delay={0.4}>
          {/* Portfolio */}
          <div className="flex flex-col font-bold text-[12vw] leading-none">
            {/* First line */}
            <div className="flex items-center relative">
              <span className="text-white font-black">P</span>
              <span
                className=" flex items-center justify-center mx-2 "
                ref={circleRef}
              >
                <Image
                  src="/circle-img.png"
                  alt="circle-img"
                  width={150}
                  height={150}
                  className="rounded-full object-cover"
                />
              </span>

              <span className="text-white font-black">RT</span>
              <span className="absolute right-15 top-15">
                <Image
                  src="/stamp.png"
                  alt="stamp"
                  width={120}
                  height={120}
                  className="object-cover -rotate-8"
                />
              </span>
            </div>

            {/* Second line */}
            <div className="ml-10 p-2 flex">
              <span className=" flex items-center justify-center">
                <Image
                  src="/figma.png"
                  alt="figma"
                  width={100}
                  height={100}
                  className="object-cover  -rotate-10"
                />
              </span>
              <span className="text-white ml-2 font-black">OLIO</span>
            </div>
          </div>
        </TextReveal>

        <p className="text-[#FF0B55] h-[50px] text-4xl ml-2 text-right flex items-center justify-end gap-2">
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
