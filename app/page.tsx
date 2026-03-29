import Image from "next/image";
import Link from "next/link";
import EPHero from "@/components/EPHero";
import EPScrollAnimations from "@/components/EPScrollAnimations";

const services = [
  {
    title: "Interior Painting",
    desc: "Clean walls, feature colours, and a finish that holds up. Every room treated with care.",
    photo:
      "https://images.unsplash.com/photo-1671681739893-e8d027788284?w=800&auto=format&fit=crop&q=75",
    alt: "Painter applying roller to interior wall",
  },
  {
    title: "Exterior Painting",
    desc: "Weatherboard, plaster, roofs, and fencing. Proper prep means the paint lasts.",
    photo:
      "https://images.unsplash.com/photo-1452864982845-a252432b5d73?w=800&auto=format&fit=crop&q=75",
    alt: "Tradesman painting the exterior of a wooden house",
  },
  {
    title: "Commercial Painting",
    desc: "From offices to lodges and apartment blocks. Large-scale repaints done efficiently.",
    photo:
      "https://images.unsplash.com/photo-1759406066673-f76869a4e6db?w=800&auto=format&fit=crop&q=75",
    alt: "Painter working on the exterior of a brick commercial building",
  },
  {
    title: "Feature Walls",
    desc: "A single bold wall can transform a room. We help you choose the right colour and nail the execution.",
    photo:
      "https://images.unsplash.com/photo-1688372198189-de6a51777a81?w=800&auto=format&fit=crop&q=75",
    alt: "Painter rolling a bold yellow feature wall",
  },
];

const testimonials = [
  {
    text: "Nathan was punctual, tidy, and the finish is immaculate. He painted our entire interior in three days and left the place spotless. Wouldn't hesitate to use Envy Painting again.",
    name: "Sarah M.",
    initial: "S",
    note: "Palmerston North,via Facebook",
  },
  {
    text: "We had Nathan repaint the exterior of our weatherboard home. He power-washed, filled every crack, primed, and applied two coats. The house looks brand new. Highly recommend.",
    name: "Craig T.",
    initial: "C",
    note: "Palmerston North,via Facebook",
  },
  {
    text: "Used Envy Painting for a commercial job on our rental units. Nathan was professional, communicated throughout, and came in on budget. The kind of tradie you actually want to call back.",
    name: "Donna W.",
    initial: "D",
    note: "Manawatu,via Facebook",
  },
];

export default function Home() {
  return (
    <>
      <EPScrollAnimations />

      {/* Hero */}
      <EPHero />

      {/* Stats Strip */}
      <div className="ep-stats-strip">
        <div className="ep-stats-grid">
          <div className="ep-stat-item">
            <span className="ep-stat-number">100%</span>
            <span className="ep-stat-label">Recommend</span>
          </div>
          <div className="ep-stat-item">
            <span className="ep-stat-number">7+</span>
            <span className="ep-stat-label">Reviews</span>
          </div>
          <div className="ep-stat-item">
            <span className="ep-stat-number">Res + Com</span>
            <span className="ep-stat-label">Residential + Commercial</span>
          </div>
        </div>
      </div>

      {/* Why Envy */}
      <section className="ep-why-section">
        <div className="container">
          <div className="ep-why-grid">
            <div>
              <span className="ep-section-label ep-reveal">Why Envy</span>
              <h2 className="ep-why-heading ep-reveal">
                Painting done properly,not just quickly.
              </h2>
              <p className="ep-why-body ep-reveal">
                Nathan and the Envy Painting team bring care and craft to every
                job,whether it is a single room repaint or a 10-unit
                commercial repaint like Braxmere Lodge in Turangi. You get
                honest pricing, real communication, and a finish worth showing
                off.
              </p>
              <ul className="ep-why-bullets ep-stagger-group">
                <li className="ep-stagger-item">Clean finish every time</li>
                <li className="ep-stagger-item">On time and on budget</li>
                <li className="ep-stagger-item">
                  Residential and commercial
                </li>
              </ul>
              <Link href="/contact" className="ep-btn-primary ep-reveal">
                Get a Free Quote
              </Link>
            </div>

            <div className="ep-why-image ep-reveal">
              <Image
                src="https://images.unsplash.com/photo-1488117382278-329ccc22eecb?w=900&auto=format&fit=crop&q=80"
                alt="Professional painter applying brush detail to house fascia"
                width={900}
                height={1125}
                unoptimized
              />
              <div className="ep-why-image-badge">
                Palmerston North
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="ep-services-section">
        <div className="container">
          <div className="ep-services-header">
            <span className="ep-section-label ep-reveal">What We Do</span>
            <h2 className="ep-services-heading ep-reveal">
              Interior, exterior, commercial.
            </h2>
          </div>
          <div className="ep-services-grid">
            {services.map((svc) => (
              <div key={svc.title} className="ep-service-card">
                <div className="ep-service-card-image">
                  <Image
                    src={svc.photo}
                    alt={svc.alt}
                    width={800}
                    height={450}
                    unoptimized
                  />
                </div>
                <div className="ep-service-card-body">
                  <div className="ep-service-card-title">{svc.title}</div>
                  <p className="ep-service-card-desc">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="ep-reveal ep-services-cta-wrap">
            <Link href="/services" className="ep-btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Project Spotlight,Braxmere Lodge */}
      <section className="ep-spotlight">
        <div className="ep-spotlight-bg-text" aria-hidden="true">
          BRAXMERE
        </div>
        <div className="container">
          <div className="ep-spotlight-inner">
            <div>
              <span className="ep-spotlight-label ep-reveal">
                Project Spotlight
              </span>
              <h2 className="ep-spotlight-heading ep-reveal">
                Commercial work done properly.
              </h2>
              <p className="ep-spotlight-body ep-reveal">
                Braxmere Lodge in Turangi needed a full repaint across 10
                individual units. Nathan managed the project from start to
                finish,surface assessment, prep, prime, and two-coat finish
                on every unit. The job was completed on schedule with zero
                disruption to lodge guests.
              </p>
              <div className="ep-spotlight-meta ep-reveal">
                <div className="ep-spotlight-meta-item">
                  <strong>Location:</strong>
                  <span>Braxmere Lodge, Turangi</span>
                </div>
                <div className="ep-spotlight-meta-item">
                  <strong>Scope:</strong>
                  <span>Full exterior repaint, 10 units</span>
                </div>
                <div className="ep-spotlight-meta-item">
                  <strong>Type:</strong>
                  <span>Commercial lodging property</span>
                </div>
              </div>
              <Link href="/contact" className="ep-btn-primary ep-reveal">
                Get a Commercial Quote
              </Link>
            </div>

            <div className="ep-spotlight-image ep-reveal">
              <Image
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&auto=format&fit=crop&q=80"
                alt="Professionally painted commercial lodge exterior"
                width={900}
                height={675}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="ep-testimonials-section">
        <div className="container">
          <span className="ep-section-label ep-reveal">What Clients Say</span>
          <h2 className="ep-services-heading ep-reveal ep-testimonials-heading">
            100% recommend on Facebook.
          </h2>
          <div className="ep-testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.name} className="ep-testimonial-card">
                <div className="ep-testimonial-stars" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="ep-testimonial-star">
                      &#9733;
                    </span>
                  ))}
                </div>
                <p className="ep-testimonial-text">{t.text}</p>
                <div className="ep-testimonial-author">
                  <div className="ep-testimonial-avatar">{t.initial}</div>
                  <div>
                    <div className="ep-testimonial-name">{t.name}</div>
                    <div className="ep-testimonial-source">{t.note}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
