import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EPScrollAnimations from "@/components/EPScrollAnimations";

export const metadata: Metadata = {
  title: "Gallery | Envy Painting Ltd",
  description:
    "See Envy Painting's work across Palmerston North. Interior and exterior painting projects by Nathan.",
};

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=900&auto=format&fit=crop&q=80",
    alt: "Exterior house painting, painter on ladder",
    label: "Exterior Repaint",
    w: 900,
    h: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
    alt: "Interior wall being rolled with fresh paint",
    label: "Interior Repaint",
    w: 800,
    h: 1000,
  },
  {
    src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=80",
    alt: "Professional painting brushes and tools",
    label: "Detail Finish Work",
    w: 800,
    h: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80",
    alt: "Freshly painted room interior",
    label: "Room Repaint",
    w: 800,
    h: 540,
  },
  {
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&auto=format&fit=crop&q=80",
    alt: "Clean white painted interior space",
    label: "Commercial Interior",
    w: 900,
    h: 675,
  },
  {
    src: "https://images.unsplash.com/photo-1688372199140-cade7ae820fe?w=750&auto=format&fit=crop&q=80",
    alt: "Painter in red overalls using roller on interior wall",
    label: "Feature Wall",
    w: 750,
    h: 900,
  },
  {
    src: "https://images.unsplash.com/photo-1742900280864-bcc27353ceba?w=750&auto=format&fit=crop&q=80",
    alt: "Painter on ladder working on house exterior",
    label: "Weatherboard Exterior",
    w: 750,
    h: 500,
  },
  {
    src: "https://images.unsplash.com/photo-1688372198189-de6a51777a81?w=750&auto=format&fit=crop&q=80",
    alt: "Painter rolling bold yellow feature wall",
    label: "Interior and Trim",
    w: 750,
    h: 1000,
  },
];

export default function GalleryPage() {
  return (
    <>
      <EPScrollAnimations />

      <div className="ep-page-hero">
        <div className="container">
          <span className="ep-page-hero-label">Our Work</span>
          <h1 className="ep-page-hero-heading">Gallery</h1>
          <p className="ep-page-hero-sub">
            A selection of interior and exterior painting jobs across Palmerston
            North and the wider region.
          </p>
        </div>
      </div>

      <section className="ep-gallery-section">
        <div className="container">
          <div className="ep-gallery-masonry">
            {galleryItems.map((item) => (
              <div key={item.src + item.label} className="ep-gallery-item">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.w}
                  height={item.h}
                  unoptimized
                />
                <div className="ep-gallery-item-overlay">
                  <span className="ep-gallery-item-label">{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="ep-gallery-cta ep-reveal">
            <p className="ep-why-body ep-gallery-cta-text">
              Like what you see? Get in touch and tell Nathan what you need.
            </p>
            <Link href="/contact" className="ep-btn-primary">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
