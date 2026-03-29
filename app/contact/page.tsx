"use client";

import EPScrollAnimations from "@/components/EPScrollAnimations";

export default function ContactPage() {
  return (
    <>
      <EPScrollAnimations />

      <div className="ep-page-hero">
        <div className="container">
          <span className="ep-page-hero-label">Get in Touch</span>
          <h1 className="ep-page-hero-heading">Contact</h1>
          <p className="ep-page-hero-sub">
            Ready to get your project underway? Call Nathan directly or fill in
            the form below for a no-obligation quote.
          </p>
        </div>
      </div>

      <section className="ep-contact-section">
        <div className="container">
          <div className="ep-contact-grid">
            <div>
              <h2 className="ep-contact-details-heading ep-reveal">
                Talk to Nathan directly.
              </h2>
              <p className="ep-contact-details-body ep-reveal">
                Nathan is the person who turns up, does the work, and makes sure
                you are happy with the result. No middlemen, no subcontractors
                turning up unannounced. Just straightforward service.
              </p>

              <div className="ep-contact-item ep-reveal">
                <div className="ep-contact-item-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 13.5 19.79 19.79 0 0 1 1.07 4.9 2 2 0 0 1 3.05 2.7h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 10.4a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 21 17.32z" />
                  </svg>
                </div>
                <div>
                  <div className="ep-contact-item-label">Phone</div>
                  <div className="ep-contact-item-value">
                    <a href="tel:0275748769">027 574 8769</a>
                  </div>
                </div>
              </div>

              <div className="ep-contact-item ep-reveal">
                <div className="ep-contact-item-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="ep-contact-item-label">Email</div>
                  <div className="ep-contact-item-value">
                    <a href="mailto:envypaintingltd@gmail.com">
                      envypaintingltd@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="ep-contact-item ep-reveal">
                <div className="ep-contact-item-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
                <div>
                  <div className="ep-contact-item-label">Facebook</div>
                  <div className="ep-contact-item-value">
                    <a
                      href="https://www.facebook.com/envypaintingnz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      facebook.com/envypaintingnz
                    </a>
                  </div>
                </div>
              </div>

              <div className="ep-contact-item ep-reveal">
                <div className="ep-contact-item-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="ep-contact-item-label">Location</div>
                  <div className="ep-contact-item-value">
                    Palmerston North and surrounding areas
                  </div>
                </div>
              </div>
            </div>

            <div className="ep-contact-form ep-reveal">
              <div className="ep-form-heading">Request a Quote</div>

              <form
                onSubmit={(e) => e.preventDefault()}
                noValidate
              >
                <div className="ep-form-row">
                  <div>
                    <label htmlFor="name" className="ep-form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="ep-form-input"
                      placeholder="Jane Smith"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="ep-form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="ep-form-input"
                      placeholder="021 000 0000"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="ep-form-group">
                  <label htmlFor="email" className="ep-form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="ep-form-input"
                    placeholder="jane@example.com"
                    autoComplete="email"
                  />
                </div>

                <div className="ep-form-group">
                  <label htmlFor="jobType" className="ep-form-label">
                    Job Type
                  </label>
                  <select
                    id="jobType"
                    name="jobType"
                    className="ep-form-select"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a job type
                    </option>
                    <option value="interior">Interior Painting</option>
                    <option value="exterior">Exterior Painting</option>
                    <option value="commercial">Commercial Painting</option>
                    <option value="notsure">Not Sure Yet</option>
                  </select>
                </div>

                <div className="ep-form-group">
                  <label htmlFor="description" className="ep-form-label">
                    Tell us about the job
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    className="ep-form-textarea"
                    placeholder="Rough size, location, timeframe, any special requirements..."
                    rows={5}
                  />
                </div>

                <button type="submit" className="ep-btn-primary ep-form-submit">
                  Send Quote Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
