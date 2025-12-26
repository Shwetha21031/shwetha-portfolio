import React from 'react'
import Image from 'next/image';
import TextReveal from '../ui/TextReveal';
const Footer = () => {
  const quotes = [
    "Design is how it works.",
    "Clarity beats cleverness.",
    "Motion should feel earned.",
    "Build slowly. Ship deliberately.",
    "Interfaces are conversations.",
  ];

  const socialLinks = [
    {
      name: "instagram",
      href: "https://instagram.com/yourusername",
    },
    {
      name: "linkedin",
      href: "https://linkedin.com/in/yourusername",
    },
    {
      name: "github",
      href: "https://github.com/yourusername",
    },
    {
      name: "mail",
      href: "https://github.com/yourusername",
    },
    {
      name: "phone number",
      href: "https://github.com/yourusername",
    },
  ];

  const SocialLinks = () => {
    return (
      <div className="flex gap-8 text-xl">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center cursor-pointer text-xl tracking-wide"
          >
            <span className="transition-transform duration-300 ease-out group-hover:-translate-x-2">
              [
            </span>

            <span className="mx-2 hover:font-black cursor-pointer">
              {social.name}
            </span>

            <span className="transition-transform duration-300 ease-out group-hover:translate-x-2">
              ]
            </span>
          </a>
        ))}
      </div>
    );
  };


  return (
    <div className="font-sulphur-point h-screen w-full bg-black text-[#FFDEDE] flex flex-col justify-between">
      <div className="p-10">
        <div className="flex w-full">
          <TextReveal delay={0.5}>
            <div className="w-[30%] text-6xl font-bold">
              Scroll Journey Complete
            </div>
          </TextReveal>

          {/* infinite scroll */}
          <div className="relative w-[70%] overflow-hidden text-2xl cursor-pointer">
            {/* LEFT GRADIENT */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />

            {/* RIGHT GRADIENT */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

            <div className="flex w-max animate-scroll-x gap-12">
              {quotes.map((quote, i) => (
                <div
                  key={`q1-${i}`}
                  className="whitespace-nowrap text-xl font-light"
                >
                  “{quote}”
                </div>
              ))}

              {quotes.map((quote, i) => (
                <div
                  key={`q2-${i}`}
                  className="whitespace-nowrap text-xl font-light"
                >
                  “{quote}”
                </div>
              ))}
            </div>
          </div>
        </div>

        <TextReveal delay={0.5}>
          <div className="my-2 text-2xl font-light">
            Thanks for scrolling — let’s connect.
          </div>
        </TextReveal>

        {/* social media */}

        <div className="">
          <SocialLinks />
        </div>
      </div>
      <div className="flex justify-end mr-20">
        <Image
          width={60}
          height={10}
          src={"/scroll-to-top.png"}
          alt="acroll to top"
          className="transition-transform
    duration-300
    delay-100
    ease-in-out
    hover:-translate-y-2 cursor-pointer"
        />
      </div>
      <div className="w-full flex flex-col items-center">
        {/* FINAL DESTINATION */}
        <TextReveal delay={0.5}>
          <div className="inline-block text-[13vw] leading-[0.95] border-b border-[#FFDEDE] pb-1">
            Final Destination
          </div>
        </TextReveal>

        {/* COPYRIGHT */}
        <TextReveal delay={0.4}>
          <p className="m-2.5 text-[18px]">
            © 2025 shwetha — thanks for hanging out.
          </p>
        </TextReveal>
      </div>
    </div>
  );
}

export default Footer