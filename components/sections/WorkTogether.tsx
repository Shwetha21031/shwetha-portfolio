"use client";
import React from "react";
import VariableProximity from "../ui/VariableProximity";
import { useRef } from "react";
import Image from "next/image";

const WorkTogether = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="relative h-screen w-screen overflow-hidden grid place-items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/clouds-bg.JPG')" }}
      />
      {/* Top gradient */}
      <div className="pointer-events-none absolute top-0 left-0 h-40 w-full bg-gradient-to-b from-black to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent z-10" />

      {/* Glass card */}
      <div className="h-[60%] w-[60%] min-w-[400px] rounded-md backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 grid place-items-center text-center z-30">
        <div>
          <div
            ref={containerRef}
            style={{ position: "relative" }}
            className="font-sulphur-point text-black text-[clamp(1.5rem,4vw,6vw)] font-black pb-4 px-14"
          >
            <VariableProximity
              label={"WANNA WORK TOGETHER?"}
              className={"variable-proximity-demo"}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </div>

          <div
            ref={containerRef}
            style={{ position: "relative" }}
            className="font-sulphur-point font-light text-black text-[clamp(1rem,3vw,6vw)] pb-8"
          >
            <VariableProximity
              label={"My resume is one click away."}
              className={"variable-proximity-demo"}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </div>
          <a href="/resume/Shwetha_Resume.pdf" download>
            <div className="relative inline-block">
              <div
                className="
                absolute inset-0
                bg-[rgb(146,9,50)]
                translate-x-[10px]
                translate-y-[10px]
                z-0
              "
              />

              {/* BUTTON */}
              <button
                className="
                relative z-10
                px-18 py-8
                max-md:px-10
                max-md:py-6
                text-2xl font-medium text-black
                bg-[#FF0B55]
                hover:bg-[#ff326f]
                transition-transform duration-150
                active:translate-x-[10px]
                active:translate-y-[10px]
                cursor-pointer
              "
              >
                Download for free
              </button>
            </div>
          </a>
        </div>
      </div>

      {/* clouds */}
      <div className="absolute top-40 -left-10 z-20 ">
        <Image src="/cloud.png" alt="Location" width={600} height={50} />
      </div>
      <div className="absolute top-30 left-30 z-40 max-md:hidden">
        <Image
          src="/cloudreverse.png"
          alt="cloudreverse.png"
          width={200}
          height={50}
        />
      </div>
      <div className="absolute bottom-30 -right-30 z-40 max-md:hidden">
        <Image src="/cloud.png" alt="Location" width={500} height={50} />
      </div>

      <div className="absolute bottom-20 right-40 z-40 max-md:hidden">
        <Image
          src="/cloudreverse.png"
          alt="cloud-reverse"
          width={200}
          height={50}
        />
      </div>
      <div className="absolute top-10 right-50 z-20">
        <Image src="/cloud.png" alt="Location" width={200} height={50} />
      </div>
    </div>
  );
};

export default WorkTogether;
