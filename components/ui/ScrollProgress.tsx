"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const onScroll = ({ scroll, limit }: { scroll: number; limit: number }) => {
      setProgress((scroll / limit) * 100);
    };

    lenis.on("scroll", onScroll);

    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);

  return (
    <div className="fixed top-0 left-0 z-50 h-1 w-full bg-transparent">
      <div
        className="h-full will-change-[width]"
        style={{
          width: `${progress}%`,
          backgroundColor: "var(--color-scroll)",
        }}
      />
    </div>
  );
}
