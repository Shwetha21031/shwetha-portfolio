"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type LoaderProps = {
  onComplete: () => void;
};

export default function Loader({ onComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const counter = { value: 0 };

    const tl = gsap.timeline({
      delay: 0.2,
      onComplete,
    });

    // count 0 → 100
    tl.to(counter, {
      value: 100,
      duration: 1.2,
      ease: "power2.out",
      onUpdate: () => {
        setPercent(Math.round(counter.value));
      },
    })

      // slide loader UP (bottom → top)
      .to(
        loaderRef.current,
        {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
        },
        "+=0.2"
      );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        backgroundColor: "var(--color-scroll)",
        transform: "translateY(0%)",
      }}
    >
      <div className="flex flex-col items-center gap-6">
        <span className="text-white text-6xl font-semibold tabular-nums">
          {percent}%
        </span>

        <div className="w-64 h-1 bg-white/30 overflow-hidden">
          <div className="h-full bg-white" style={{ width: `${percent}%` }} />
        </div>
      </div>
    </div>
  );
}
