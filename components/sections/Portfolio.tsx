"use client";

import Image from "next/image";
import Typewriter from "../ui/Typewriter";
import TextReveal from "../ui/TextReveal";

const Portfolio = () => {
  return (
    <div className="h-screen w-full grid place-items-center  relative bg-black">
      <div className="flex flex-col p-10 relative">
        {/* Name */}
        <TextReveal delay={0.9}>
          <p className="text-[#FF0B55] text-2xl  ml-2">Shwetha&apos;a</p>
        </TextReveal>

        <TextReveal delay={0.5}>
          {/* Portfolio */}
          <div className="flex flex-col font-bold text-[10vw] leading-none">
            {/* First line */}
            <div className="flex items-center relative">
              <span className="text-white font-black">P</span>
              <span className=" flex items-center justify-center mx-2">
                <Image
                  src="/circle-img.png"
                  alt="circle-img"
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
              </span>

              <span className="text-white font-black">RT</span>
              <span className="absolute right-18 top-12">
                <Image
                  src="/stamp.png"
                  alt="circle-img"
                  width={100}
                  height={90}
                  className="object-cover -rotate-8"
                />
              </span>
            </div>

            {/* Second line */}
            <div className="ml-10 p-2 flex">
              <span className=" flex items-center justify-center">
                <Image
                  src="/figma.png"
                  alt="circle-img"
                  width={100}
                  height={100}
                  className="object-cover  -rotate-10"
                />
              </span>
              <span className="text-white ml-2 font-black">OLIO</span>
            </div>
          </div>
        </TextReveal>

        <TextReveal delay={0.7}>
          <p className="text-[#FF0B55] text-2xl mt-0 ml-2 text-right">
            Software{" "}
            <span>
              <Typewriter words={["Developer", "Designer", "Engineer"]} />
            </span>
          </p>
        </TextReveal>
      </div>
    </div>
  );
};

export default Portfolio;
