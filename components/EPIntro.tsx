"use client";

import { useEffect, useState } from "react";

export default function EPIntro() {
  const [charCount, setCharCount] = useState(0);
  const [showSub, setShowSub] = useState(false);
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");

  const BRAND = "ENVY";

  useEffect(() => {
    let charIndex = 0;

    // Start revealing characters after the stroke animation plays
    const charStart = setTimeout(() => {
      const interval = setInterval(() => {
        charIndex++;
        setCharCount(charIndex);

        if (charIndex >= BRAND.length) {
          clearInterval(interval);

          setTimeout(() => {
            setShowSub(true);
          }, 220);

          setTimeout(() => {
            setPhase("out");
            setTimeout(() => setPhase("done"), 600);
          }, 980);
        }
      }, 110);

      return () => clearInterval(interval);
    }, 420);

    return () => clearTimeout(charStart);
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`ep-intro${phase === "out" ? " ep-intro--out" : ""}`}>
      <div className="ep-intro-stroke" aria-hidden="true" />
      <div className="ep-intro-content">
        <div className="ep-intro-brand" aria-label="Envy Painting">
          {BRAND.split("").map((char, i) => (
            <span
              key={i}
              className={`ep-intro-char${i < charCount ? " ep-intro-char--visible" : ""}`}
            >
              {char}
            </span>
          ))}
        </div>
        <div className={`ep-intro-sub${showSub ? " ep-intro-sub--visible" : ""}`}>
          Painting Ltd
        </div>
      </div>
    </div>
  );
}
