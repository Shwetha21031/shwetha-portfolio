"use client";

import VariableProximity from "../ui/VariableProximity";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="h-screen w-screen grid place-items-center">
      <div
        ref={containerRef}
        className="w-[74%] text-center text-4xl ease-in-out"
      >
        <div className="flex-1 relative font-semibold py-5 overflow-hidden">
          <VariableProximity
            label="Over 2+ years as a software engineer at Estuate, breaking things to understand them, rebuilding them cleaner, and trimming anything that slows the system down."
            className="variable-proximity"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={90}
            falloff="linear"
          />
        </div>

        <div className="flex-1 relative font-semibold py-5 overflow-hidden">
          <VariableProximity
            label="Software developer by practice, designer by instinct, engineer by compulsion."
            className="variable-proximity"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={90}
            falloff="linear"
          />
        </div>

        <div className="flex-1 relative font-semibold py-5 overflow-hidden">
          <VariableProximity
            label="Lives somewhere between curiosity, precision, and the urge to redesign whatever isn’t behaving."
            className="variable-proximity"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={90}
            falloff="linear"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
