'use client'

import React from "react";
import TextReveal from "../ui/TextReveal";
import Image from "next/image";
const DesktopNotice = () => {
  return (
    <div className="grid place-items-center h-[95vh] w-screen overflow-hidden">
      <div className=" relative text-3xl text-[#FFDEDE] font-source-sans w-[75%]">
        <TextReveal delay={2.5}>
          <p className="text-center">Desktop-only experience.</p>
        </TextReveal>

        <TextReveal delay={2.6}>
          <p className="mt-5 text-center">
            For the full visual and interactive experience, please switch to
            <b> laptop or desktop</b>.
          </p>
        </TextReveal>
        <span className="absolute -top-30 left-0 -rotate-40">
          <Image width={100} height={150} src="/circle-5.png" alt="stamp" />
        </span>
        <span className="absolute -bottom-20 right-0 rotate-45">
          <Image width={100} height={150} src="/stamp.png" alt="stamp" />
        </span>
      </div>
    </div>
  );
};

export default DesktopNotice;
