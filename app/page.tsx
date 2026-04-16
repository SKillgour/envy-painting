import Image from "next/image";
import Link from "next/link";
import EPHero from "@/components/EPHero";
import EPScrollAnimations from "@/components/EPScrollAnimations";

const services = [
  {
    title: "Interior Painting",
    desc: "Clean walls, feature colours, and a finish that holds up. Every room treated with care from prep through to the final coat.",
    photo: "/before-after/515502789_775304408349802_5229495962067817760_n.jpg",
    alt: "Renovated NZ living room with freshly painted walls and polished timber floors",
    unoptimized: false,
  },
  {
    title: "Exterior Painting",
    desc: "Weatherboard, plaster, roofs, and fencing across Palmerston North. Proper surface prep means the paint lasts.",
    photo: "/before-after/515493396_775304301683146_6642859008835435030_n.jpg",
    alt: "Freshly painted grey weatherboard NZ bungalow after full exterior repaint",
    unoptimized: false,
  },
  {
    title: "Commercial Painting",
    desc: "From offices to lodges and apartment blocks. Large-scale repaints managed start to finish with minimum disruption.",
    photo: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=75",
    alt: "Modern multi-storey apartment block exterior under clear sky",
    unoptimized: true,
  },
  {
    title: "Feature Walls",
    desc: "A single bold wall transforms a room. We help pick the right colour and execute it with clean edges and no mess.",
    photo: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&auto=format&fit=crop&q=75",
    alt: "Stunning dark charcoal designer bathroom with bold painted walls and freestanding bath",
    unoptimized: true,
  },
];

const testimonials = [
  {
    text: "Nathan painted our house before we put it on the market. He did an awesome job and we got him to do a whole lot extra. Nothing was a problem and he gave great advice on how best to make the house look great. Highly recommended.",
    name: "Warwick Dunn",
    initial: "W",
    note: "via Facebook",
  },
  {
    text: "Awesome work completed by Nathan who painted my full house exterior to a super high standard and in a timely manner. Great guy to deal with and just gets stuck into it. Would highly recommend to anyone needing paint work done.",
    name: "Kevin Pretorious",
    initial: "K",
    note: "via Facebook",
  },
  {
    text: "I hired Nathan at Envy Painting for my house exterior, and he did an outstanding job! He was professional, timely, and paid great attention to detail. The finish looks fantastic! Highly recommend their services!",
    name: "Luke Nielsen",
    initial: "L",
    note: "via Facebook",
  },
  {
    text: "Top bloke. Gets the job done with no fuss and makes sure all the little details are taken care of. If you need the work done, get Naithan on the job.",
    name: "Simon Swain",
    initial: "S",
    note: "via Facebook",
  },
  {
    text: "I have worked alongside Nathan a couple of times, and his workmanship is very good. He takes pride in his work, is reliable, honest and professional.",
    name: "Dave Goodwin",
    initial: "D",
    note: "via Facebook",
  },
  {
    text: "Nathan is an absolute legend. Professional and tidy, quick and efficient. Will be my go to painter for future reno work. 10/10 would recommend.",
    name: "Paige March",
    initial: "P",
    note: "via Facebook",
  },
  {
    text: "Naithan is friendly and professional, and is a real pleasure to work with. He was proactive and always kept us in the loop. He is efficient with great attention to detail and did excellent work on the bathroom, hall, dining, and exterior areas of our home. Highly recommended.",
    name: "Kezia Page-Sinclair",
    initial: "K",
    note: "via Facebook",
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
            <span className="ep-stat-number">7</span>
            <span className="ep-stat-label">Facebook Reviews</span>
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
                Painting done properly, not just quickly.
              </h2>
              <p className="ep-why-body ep-reveal">
                Nathan and the Envy Painting team bring care and craft to every
                job, whether it is a single room repaint or a 10-unit
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
                src="https://plus.unsplash.com/premium_photo-1676395664341-2cbbb9c7ea3e?w=900&auto=format&fit=crop&q=80"
                alt="Freshly painted white NZ bungalow with dark roof under clear sky"
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
                    unoptimized={svc.unoptimized}
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

      {/* Project Spotlight: Braxmere Lodge */}
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
                finish: surface assessment, prep, prime, and two-coat finish
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
                  <span>Full interior repaint, 10 units</span>
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

            <div className="ep-braxmere-collage ep-reveal">
              <div className="ep-braxmere-img ep-braxmere-img--main">
                <Image
                  src="/braxmere/515435924_775310791682497_3820847576296674587_n.jpg"
                  alt="Freshly painted open-plan living area at Braxmere Lodge"
                  width={900}
                  height={1200}
                />
              </div>
              <div className="ep-braxmere-img">
                <Image
                  src="/braxmere/524696793_775310888349154_3154394564429869709_n.jpg"
                  alt="Braxmere Lodge bedroom with grey feature wall and lake view"
                  width={600}
                  height={400}
                />
              </div>
              <div className="ep-braxmere-img">
                <Image
                  src="/braxmere/515506476_775310825015827_3155391436336988942_n.jpg"
                  alt="Braxmere Lodge ensuite with freshly painted white walls and modern fittings"
                  width={600}
                  height={400}
                />
              </div>
              <div className="ep-braxmere-img">
                <Image
                  src="/braxmere/515439197_775310855015824_5618884197562443597_n.jpg"
                  alt="Braxmere Lodge bathroom showing clean white painted finish"
                  width={600}
                  height={400}
                />
              </div>
              <div className="ep-braxmere-img ep-braxmere-img--lower">
                <Image
                  src="/braxmere/braxmere-bedroom-b.jpg"
                  alt="Braxmere Lodge bedroom detail with painted panelled wall"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="ep-testimonials-section">
        <div className="container">
          <span className="ep-section-label ep-reveal">What Clients Say</span>
          <h2 className="ep-services-heading ep-reveal ep-testimonials-heading">
            7 real Facebook recommendations.
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
