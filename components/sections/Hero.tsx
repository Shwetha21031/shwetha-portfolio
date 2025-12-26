"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
// const Greet = dynamic(() => import("../ui/Greet"), { ssr: false });
import Typewriter from "../ui/Typewriter";
import TextReveal from "../ui/TextReveal";

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/clouds-bg-hero-section.JPG')",
      }}
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
          <div className="absolute top-28 -left-28 z-20 ">
            <Image src="/location.png" alt="Location" width={150} height={50} />
          </div>

          {/* Top-right: Hello bubble */}
          <div className="absolute top-0 -right-4 translate-x-1/2 z-20 w-[150px] h-[80px]">
            <Image
              src="/hello.png"
              alt="Chat bubble"
              fill
              className="object-contain"
            />
            <div className="absolute translate-y-5 translate-x-14">
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

          {/* Profile image placeholder */}
          <div className="h-full w-full rounded-full border-[5px] border-white overflow-hidden bg-neutral-800 flex items-center justify-center">
            {/* Empty image tag — add src later */}
            {/* <Image src="" alt="Profile" fill className="object-cover" /> */}
          </div>

          {/* It's me */}
          <div className="absolute bottom-4 -right-16 -translate-y-1/2 z-20">
            <Image src="/its_me.png" alt="Its me" width={120} height={50} />
          </div>
        </div>

        {/* Huge text */}
        <TextReveal delay={2.5}>
          <h1 className="font-source-sans max-w-5xl text-black text-4xl md:text-7xl font-bold leading-tight">
            I see, I think, I build
            <br />
            then I overthink.
          </h1>
        </TextReveal>
      </div>

      {/* clouds */}
      <TextReveal delay={2.5}>
        <div className="absolute top-0 -left-50 z-20 ">
          <Image src="/cloud.png" alt="Location" width={600} height={50} />
        </div>
      </TextReveal>
      {/* clouds */}
      <TextReveal delay={2.3}>
        <div className="absolute top-10 left-50 z-20 ">
          <Image
            src="/cloud-flipped.png"
            alt="cloud"
            width={200}
            height={50}
          />
        </div>
      </TextReveal>

      <TextReveal delay={2.4}>
        <div className="absolute bottom-30 -right-30 z-20 ">
          <Image src="/cloud.png" alt="Location" width={500} height={50} />
        </div>
      </TextReveal>

      <TextReveal delay={2.5}>
        <div className="absolute bottom-20 right-60 z-20 ">
          <Image
            src="/cloud-flipped.png"
            alt="Location"
            width={200}
            height={50}
          />
        </div>
      </TextReveal>
      <TextReveal delay={2.2}>
        <div className="absolute top-20 right-20 z-20 ">
          <Image src="/cloud.png" alt="Location" width={200} height={50} />
        </div>
      </TextReveal>
    </section>
  );
};

export default Hero;
