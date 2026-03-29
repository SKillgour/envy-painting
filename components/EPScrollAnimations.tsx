"use client";

import { useEffect } from "react";

export default function EPScrollAnimations() {
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Standard reveal elements
        const reveals = document.querySelectorAll<HTMLElement>(".ep-reveal");
        reveals.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                once: true,
              },
            }
          );
        });

        // Stagger groups
        const staggerParents = document.querySelectorAll<HTMLElement>(
          ".ep-stagger-group"
        );
        staggerParents.forEach((parent) => {
          const items =
            parent.querySelectorAll<HTMLElement>(".ep-stagger-item");
          gsap.fromTo(
            items,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: "power2.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: parent,
                start: "top 85%",
                once: true,
              },
            }
          );
        });

        // Stat count-up animation
        const statNumbers =
          document.querySelectorAll<HTMLElement>(".ep-stat-number");
        statNumbers.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, scale: 0.8, y: 20 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.6,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true,
              },
            }
          );
        });

        // Testimonials slide in from below
        const testimonials =
          document.querySelectorAll<HTMLElement>(".ep-testimonial-card");
        if (testimonials.length > 0) {
          gsap.fromTo(
            testimonials,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: "power2.out",
              stagger: 0.15,
              scrollTrigger: {
                trigger: testimonials[0].parentElement,
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        // Service cards stagger
        const serviceCards =
          document.querySelectorAll<HTMLElement>(".ep-service-card");
        if (serviceCards.length > 0) {
          gsap.fromTo(
            serviceCards,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: serviceCards[0].closest(".ep-services-section"),
                start: "top 80%",
                once: true,
              },
            }
          );
        }
      });
    };

    init();

    return () => {
      ctx?.revert();
    };
  }, []);

  return null;
}
