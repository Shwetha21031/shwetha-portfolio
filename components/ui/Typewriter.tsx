"use client";

import { useEffect, useMemo, useState } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 120,
  deletingSpeed = 80,
  pauseTime = 1200,
  className = "",
}) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const longestWordLength = useMemo(
    () => Math.max(...words.map((w) => w.length)),
    [words]
  );

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    // Typing
    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    // Pause before deleting
    if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(timeout);
    }

    // Deleting
    if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    }

    // Move to next word (loop)
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }
  }, [
    charIndex,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <span
      className={`inline-flex items-center text-left ${className}`}
      style={{ minWidth: `${longestWordLength}ch` }}
    >
      {text}
      <span className="ml-1 w-[2px] h-[1em] bg-current animate-pulse" />
    </span>
  );
};

export default Typewriter;
