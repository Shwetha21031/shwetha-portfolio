"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const SIZE = 112;
const DISC_SIZE = 96;
const RADIUS = 52;
const STROKE = 3;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function MusicPlayer() {
  const discRef = useRef<HTMLImageElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const circleRef = useRef<SVGCircleElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  /* GSAP rotation */
  useEffect(() => {
    if (!discRef.current) return;

    tweenRef.current = gsap.to(discRef.current, {
      rotation: 360,
      duration: 4,
      repeat: -1,
      ease: "linear",
      paused: true,
      transformOrigin: "50% 50%",
    });

    return () => {
      if (tweenRef.current) {
        tweenRef.current.kill();
        tweenRef.current = null;
      }
    };
  }, []);


  /* Progress ring update */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !circleRef.current) return;

    const updateProgress = () => {
      const progress = audio.currentTime / audio.duration || 0;
      circleRef.current!.style.strokeDashoffset = `${
        CIRCUMFERENCE * (1 - progress)
      }`;
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []);

  /* Auto replay (loop) */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !tweenRef.current) return;

    audio.loop = true;

    const onEnded = () => {
      audio.currentTime = 0;
      audio.play();
      tweenRef.current?.play();
    };

    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current || !tweenRef.current) return;

    if (!isPlaying) {
      await audioRef.current.play();
      tweenRef.current.play();
    } else {
      audioRef.current.pause();
      tweenRef.current.pause();
    }

    setIsPlaying((p) => !p);
  };

  const seek = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!audioRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - cy, e.clientX - cx) + Math.PI / 2;
    const normalized =
      (angle < 0 ? angle + 2 * Math.PI : angle) / (2 * Math.PI);

    audioRef.current.currentTime = normalized * audioRef.current.duration;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        onClick={togglePlay}
        className="relative cursor-pointer select-none"
        style={{ width: SIZE, height: SIZE }}
      >
        {/* Progress Ring */}
        <svg
          width={SIZE}
          height={SIZE}
          className="absolute inset-0"
          onClick={seek}
        >
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth={STROKE}
          />
          <circle
            ref={circleRef}
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="#FF0B55"
            strokeWidth={STROKE}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE}
            strokeLinecap="round"
          />
        </svg>

        {/* Rotating Sunflower Image */}
        <img
          ref={discRef}
          src="/audio/sunflower.png"
          className="absolute inset-0 m-auto rounded-full"
          style={{ width: DISC_SIZE, height: DISC_SIZE }}
          draggable={false}
        />

        {/* Center Icon */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <img
            src={isPlaying ? "/audio/pause.png" : "/audio/play.png"}
            className="h-6 w-6"
            draggable={false}
          />
        </div>
      </div>

      <audio ref={audioRef} src="/audio/Sunflower.mp3" />
    </div>
  );
}
