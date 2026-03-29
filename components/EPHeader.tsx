"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function EPHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`ep-nav${scrolled ? " scrolled" : ""}`}>
      <div className="ep-nav-inner">
        <Link href="/" className="ep-nav-wordmark">
          <span>Envy</span> Painting
        </Link>

        <nav aria-label="Main navigation">
          <ul className="ep-nav-links">
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Link href="/contact" className="ep-nav-cta">
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
