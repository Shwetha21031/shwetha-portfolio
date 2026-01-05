import React from "react";
import Image from "next/image";
import VariableProximity from "../ui/VariableProximity";
import { useRef } from "react";
const Footer = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const quotes = [
    "The important thing is not to stop questioning. — Albert Einstein",
    "You don’t have to be great to start, but you have to start to be great. — Zig Ziglar",
    "Creativity is intelligence having fun. — Albert Einstein",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn. — Benjamin Franklin",
    "Progress, not perfection. — (often attributed, modern classic)",
    "You can’t improve what you don’t build. — Anonymous",
  ];

  const socialLinks = [
    {
      name: "instagram",
      href: "https://www.instagram.com/__.shwetha._____/",
      text: "DMs open",
      type: "external",
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/shwetha21031/",
      text: "Let’s connect",
      type: "external",
    },
    {
      name: "github",
      href: "https://github.com/Shwetha21031",
      text: "View my work",
      type: "external",
    },
    {
      name: "mail",
      href: "mailto:shwetha.a.dev@gmail.com",
      text: "Say hello: shwetha.a.dev@gmail.com",
      type: "contact",
    },
    {
      name: "phone",
      href: "tel:+919380732361",
      text: "Call me maybe: 9380732361",
      type: "contact",
    },
  ];

  const SocialLinks = () => {
    return (
      <div className="flex gap-8 text-xl max-md:gap-4 flex-wrap">
        {socialLinks.map((social) => {
          const isExternal = social.type === "external";

          return (
            <div key={social.name} className="relative group">
              <a
                href={social.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="inline-flex items-center cursor-pointer tracking-wide"
              >
                <span>[</span>
                <span className="mx-2 font-light group-hover:font-black transition-all duration-300">
                  {social.name}
                </span>
                <span>]</span>
              </a>

              {/* Tooltip */}
              <span
                className="
                pointer-events-none
                absolute
                left-1/2
                -bottom-8
                -translate-x-1/2
                whitespace-nowrap
                rounded-full
                bg-[#FFDEDE]
                px-3
                py-1
                text-xs
                text-black
                opacity-0
                scale-95
                transition-all
                duration-300
                ease-out
                group-hover:opacity-100
                group-hover:scale-100
              "
              >
                {social.text}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="font-sulphur-point h-screen max-md:h-[95vh] w-full bg-black text-[#FFDEDE] flex flex-col justify-between">
      <div className="p-10">
        <div className="flex w-full max-md:flex-col">
          <div
            ref={containerRef}
            style={{ position: "relative" }}
            className="w-[30%] max-md:w-full text-[clamp(1.75rem,3vw,3.75rem)] font-black"
          >
            <VariableProximity
              label={"Scroll Journey Complete"}
              className={"variable-proximity-demo"}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </div>

          {/* infinite scroll */}
          <div className="relative  w-[70%] max-md:w-full overflow-hidden max-md:text-[18px] text-2xl cursor-pointer">
            {/* gradient */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-black to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-black to-transparent z-10" />
            <div className="flex w-max animate-scroll-x justify-start gap-12">
              {quotes.map((quote, i) => (
                <div key={`q1-${i}`} className="whitespace-nowrap font-light">
                  “{quote}”
                </div>
              ))}

              {quotes.map((quote, i) => (
                <div key={`q2-${i}`} className="whitespace-nowrap font-light">
                  “{quote}”
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* thanks for scrolling */}
        <div
          ref={containerRef}
          style={{ position: "relative" }}
          className="my-2 text-[clamp(1rem, 3vw, 3.5rem)] font-light"
        >
          <VariableProximity
            label={"Thanks for scrolling — let’s connect."}
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>

        {/* social media */}

        <div className="">
          <SocialLinks />
        </div>
      </div>
      {/* scroll to top */}
      <div className="flex justify-end mr-20">
        <div className="flex justify-center items-center flex-col">
          <Image
            width={60}
            height={10}
            src="/scroll-to-top.png"
            alt="scroll to top"
            className="transition-transform duration-300 delay-100 ease-in-out hover:-translate-y-2 cursor-pointer"
            onClick={() => {
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
          <p className="opacity-[50%] mt-5">Scroll to top</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        {/* FINAL DESTINATION */}
        <div
          ref={containerRef}
          style={{ position: "relative" }}
          className=" inline-block text-[13vw] leading-[0.95] border-b border-[#FFDEDE] pb-1 max-sm:mr-15 max-sm:ml-10"
        >
          <VariableProximity
            label={"Final Destination"}
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>

        {/* COPYRIGHT */}
        <div
          ref={containerRef}
          style={{ position: "relative" }}
          className="m-2.5 text-[18px] max-sm:text-[16px]"
        >
          <VariableProximity
            label={"© 2025 shwetha — thanks for hanging out."}
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
