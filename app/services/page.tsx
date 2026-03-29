import type { Metadata } from "next";
import Link from "next/link";
import EPScrollAnimations from "@/components/EPScrollAnimations";
import JobFinder from "@/components/JobFinder";

export const metadata: Metadata = {
  title: "Services | Envy Painting Ltd",
  description:
    "Interior painting, exterior painting, commercial repaints, and colour consultation across Palmerston North. Get a free quote from Nathan.",
};

const services = [
  {
    title: "Interior Painting",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    body:
      "Whether you are refreshing a single room or repainting an entire home, Nathan takes the time to prep surfaces properly before a drop of colour goes on. No shortcuts.",
    list: [
      "Feature walls and accent colours",
      "Full room and whole-house repaints",
      "Prep, fill, and sand work",
      "New builds and plaster surfaces",
      "Ceiling and trim work",
    ],
  },
  {
    title: "Exterior Painting",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
    body:
      "Exterior painting in Palmerston North means dealing with real weather. We water-blast, prime, and use quality exterior-grade coatings that handle the elements and look great years later.",
    list: [
      "Weatherboard and timber",
      "Plaster and texture coatings",
      "Roofs and gutters",
      "Fencing and gates",
      "Surface prep always included",
    ],
  },
  {
    title: "Commercial Painting",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    body:
      "Nathan managed the full repaint of Braxmere Lodge in Turangi: 10 units, on schedule, zero disruption to guests. Commercial work is quoted properly, staged logically, and done to a professional standard.",
    list: [
      "Apartment and unit complexes",
      "Offices and commercial buildings",
      "Lodges and accommodation",
      "Large-scale repaints",
      "Staged scheduling available",
    ],
  },
  {
    title: "Colour Consultation",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
    body:
      "Choosing the wrong colour is an expensive mistake. Nathan can advise on what will work with your light, your fixtures, and your taste,before you commit to anything.",
    list: [
      "Interior colour schemes",
      "Exterior colour matching",
      "Complementary trim and feature colours",
      "Works with all major NZ paint brands",
      "No obligation conversation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <EPScrollAnimations />

      <div className="ep-page-hero">
        <div className="container">
          <span className="ep-page-hero-label">What We Offer</span>
          <h1 className="ep-page-hero-heading">Services</h1>
          <p className="ep-page-hero-sub">
            Interior, exterior, and commercial painting across Palmerston North
            and surrounding areas. Every job quoted honestly and delivered
            properly.
          </p>
        </div>
      </div>

      <section className="ep-service-detail">
        <div className="container">
          <div className="ep-service-detail-grid">
            {services.map((svc) => (
              <div key={svc.title} className="ep-service-detail-card ep-reveal">
                <div className="ep-service-detail-icon">{svc.icon}</div>
                <div className="ep-service-detail-title">{svc.title}</div>
                <p className="ep-service-detail-body">{svc.body}</p>
                <ul className="ep-service-detail-list">
                  {svc.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <JobFinder />

          <div className="ep-reveal ep-services-cta-wrap">
            <p className="ep-why-body">
              Ready to get started? Call Nathan on{" "}
              <a
                href="tel:0275748769"
                className="ep-inline-accent-link"
              >
                027 574 8769
              </a>{" "}
              or send a message through the contact page.
            </p>
            <Link href="/contact" className="ep-btn-primary">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
