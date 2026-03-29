"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function EPHero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const { gsap } = await import("gsap");

      ctx = gsap.context(() => {
        const heading = headingRef.current;
        const label = labelRef.current;
        const sub = subRef.current;
        const ctas = ctasRef.current;
        const note = noteRef.current;

        if (!heading) return;

        const words = heading.querySelectorAll<HTMLElement>(".word");

        // Set initial states inside useEffect via gsap.set
        gsap.set(words, { opacity: 0, y: 60 });
        gsap.set([label, sub, ctas, note], { opacity: 0, y: 30 });

        const tl = gsap.timeline({ delay: 0.15 });

        tl.to(label, {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
        })
          .to(
            words,
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: "power3.out",
              stagger: 0.09,
            },
            "-=0.2"
          )
          .to(
            sub,
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              ease: "power2.out",
            },
            "-=0.3"
          )
          .to(
            ctas,
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
            },
            "-=0.3"
          )
          .to(
            note,
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              ease: "power2.out",
            },
            "-=0.3"
          );
      });
    };

    init();

    return () => {
      ctx?.revert();
    };
  }, []);

  const headingText = "Fresh Coat. Better Home.";
  const words = headingText.split(" ");

  return (
    <section className="ep-hero">
      <div className="ep-hero-bg">
        <Image
          src="https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1800&auto=format&fit=crop&q=80"
          alt="Painter on ladder working on exterior house painting"
          fill
          priority
          unoptimized
          sizes="100vw"
        />
      </div>
      <div className="ep-hero-overlay" />

      <div className="container">
        <div className="ep-hero-content">
          <span ref={labelRef} className="ep-hero-label">
            Palmerston North Painters
          </span>

          <h1 ref={headingRef} className="ep-hero-heading">
            {words.map((word, i) => (
              <span key={i} className="word">
                {word}
              </span>
            ))}
          </h1>

          <p ref={subRef} className="ep-hero-sub">
            Interior and exterior painting done right across Palmerston North.
          </p>

          <div ref={ctasRef} className="ep-hero-ctas">
            <Link href="/contact" className="ep-btn-primary">
              Get a Free Quote
            </Link>
            <Link href="/gallery" className="ep-btn-ghost">
              See Our Work
            </Link>
          </div>

          <p ref={noteRef} className="ep-hero-service-note">
            Servicing Palmerston North and surrounding areas
          </p>
        </div>
      </div>
    </section>
  );
}
