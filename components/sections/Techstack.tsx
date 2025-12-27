"use client";
import Image from "next/image";

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
