"use client";
import React from "react";
import TextReveal from "../ui/TextReveal";
import Image from "next/image";

const WorkTogether = () => {
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
      <div className="h-[60%] w-[60%] rounded-md backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 grid place-items-center text-center z-30">
        <div>
          <h1 className="text-black text-6xl font-black pb-4 px-14">
            WANNA WORK TOGETHER?{" "}
          </h1>
          <p className="text-black text-2xl font-source-sans pb-8">
            My resume is one click away
          </p>
          <a href="/Shwetha_Resume.pdf" download>
          {/* <a href="javascript:void(0);"> */}
            <div className="relative inline-block">
              {/* STATIC SHADOW (does NOT move) */}
              <div
                className="
      absolute inset-0
      bg-[rgb(146,9,50)]
      translate-x-[10px]
      translate-y-[10px]
      z-0
    "
              />

              {/* BUTTON (moves into shadow) */}
              <button
                className="
      relative z-10
      px-18 py-8
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
      <TextReveal delay={0.5}>
        <div className="absolute top-40 -left-10 z-20 ">
          <Image src="/cloud.png" alt="Location" width={600} height={50} />
        </div>
      </TextReveal>
      <TextReveal delay={0.3}>
        <div className="absolute top-30 left-50 z-40">
          <Image
            src="/cloud-flipped.png"
            alt="Location"
            width={200}
            height={50}
          />
        </div>
      </TextReveal>

      <TextReveal delay={0.4}>
        <div className="absolute bottom-30 -right-10 z-40 ">
          <Image src="/cloud.png" alt="Location" width={500} height={50} />
        </div>
      </TextReveal>

      <TextReveal delay={0.5}>
        <div className="absolute bottom-20 right-60 z-40 ">
          <Image
            src="/cloud-flipped.png"
            alt="Location"
            width={200}
            height={50}
          />
        </div>
      </TextReveal>
      <TextReveal delay={0.2}>
        <div className="absolute top-10 right-50 z-20">
          <Image src="/cloud.png" alt="Location" width={200} height={50} />
        </div>
      </TextReveal>
    </div>
  );
};

export default WorkTogether;
