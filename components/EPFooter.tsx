import Link from "next/link";

export default function EPFooter() {
  return (
    <footer className="ep-footer">
      <div className="container">
        <div className="ep-footer-grid">
          <div>
            <div className="ep-footer-brand">
              <span>Envy</span> Painting Ltd
            </div>
            <p className="ep-footer-tagline">
              Interior and exterior painting done right across Palmerston North
              and surrounding areas. Residential and commercial.
            </p>
          </div>

          <div>
            <div className="ep-footer-heading">Navigation</div>
            <ul className="ep-footer-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="ep-footer-heading">Contact</div>

            <a href="tel:0275748769" className="ep-footer-contact-item">
              <svg
                width="16"
                height="16"
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
              <span>027 574 8769</span>
            </a>

            <a
              href="mailto:envypaintingltd@gmail.com"
              className="ep-footer-contact-item"
            >
              <svg
                width="16"
                height="16"
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
              <span>envypaintingltd@gmail.com</span>
            </a>

            <a
              href="https://www.facebook.com/envypaintingnz"
              target="_blank"
              rel="noopener noreferrer"
              className="ep-footer-contact-item"
            >
              <svg
                width="16"
                height="16"
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
              <span>Facebook</span>
            </a>
          </div>
        </div>

        <div className="ep-footer-divider" />

        <div className="ep-footer-bottom">
          <span className="ep-footer-copy">
            &copy; {new Date().getFullYear()} Envy Painting Ltd. All rights
            reserved.
          </span>
          <span className="ep-footer-location">Palmerston North, NZ</span>
          <a href="https://insightly.nz" target="_blank" rel="noopener noreferrer" className="ep-footer-credit">
            Website by Insightly
          </a>
        </div>
      </div>
    </footer>
  );
}
