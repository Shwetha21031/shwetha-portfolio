"use client";
import Image from "next/image";
import LightRays from "../ui/LightRays";
const Techstack = () => {
  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden">
      {/* Left fade */}
      <div
        className="absolute inset-y-0 left-0 w-32 
                      bg-gradient-to-r from-black to-transparent 
                      z-10 pointer-events-none"
      />
      {/* Right fade */}
      <div
        className="absolute inset-y-0 right-0 w-32 
                      bg-gradient-to-l from-black to-transparent 
                      z-10 pointer-events-none"
      />

      {/* light rays */}
      <div className="absolute top-0 w-full h-screen max-md:hidden">
        <LightRays
          raysOrigin="top-center"
          raysColor="#FFDEDE"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays "
        />
      </div>
      {/* Content */}
      <div className="relative z-0 h-full w-full grid place-items-center">
        <div>
          <span className="absolute top-1/4 right-1/6">
            <Image
              src="/skills matrix.png"
              alt="skills"
              width={150}
              height={80}
              priority
            />
          </span>
          <Image
            src="/skills.png"
            alt="skills"
            width={1000}
            height={80}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Techstack;
