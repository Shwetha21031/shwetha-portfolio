"use client";
import React from "react";
import FlowingMenu from "../ui/FlowingMenu";

const demoItems = [
  {
    link: "https://694f84a8e05f92d2ead1afb8--glistening-strudel-88a3d4.netlify.app/",
    text: "Travel website",
    image: "/travel-website.png",
  },
  {
    link: "https://b9e2e616.landing-page-8w4.pages.dev/",
    text: "Nice Beau",
    image: "/nice-beauty.png",
  },
  {
    link: "https://google-pixel-watch-2-shwetha.vercel.app/",
    text: "Google pixel watch 2",
    image: "/google-pixel.png",
  },
  {
    link: "https://realestate-website-6v5.pages.dev/",
    text: "Real Estate Website",
    image: "/real-estate-website.png",
  },
];

const Projects = () => {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden font-sulphur-point">
      <div className="text-center bg-black text-[#FFDEDE] py-6 sticky top-0 z-50 ">
        <h1 className="text-3xl font-black">What I've Built</h1>
        <p>
          They’re not all perfect, but that’s the fun part: they taught me the
          real difference between something that works and something that’s
          truly optimized, and I’m still learning every day
        </p>
      </div>

      <div style={{ height: "600px", position: "relative" }}>
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  );
};

export default Projects;
