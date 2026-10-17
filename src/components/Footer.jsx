

const Footer = () => {
  return (
    <footer className="footer-container" id="contact">
      <div className="footer-content">
        {/* Brand Header */}
        <div className="footer-brand">
          <svg
            className="brand-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
          <span className="brand-title">NeoVision</span>
        </div>

        {/* Main Grid Links */}
        <div className="footer-grid">
          {/* Column 1: Contact */}
          <div className="footer-col">
            <div className="contact-group">
              <h4 className="col-heading">Email</h4>
              <a href="mailto:contact@neovision.com" className="footer-link-text">
                contact@neovision.com
              </a>
            </div>
            <div className="contact-group">
              <h4 className="col-heading">Address</h4>
              <p className="footer-static-text">
                NeoVision Technologies 1234<br />
                FutureTech Blvd
              </p>
            </div>
          </div>

          {/* Column 2: Phone */}
          <div className="footer-col">
            <div className="contact-group">
              <h4 className="col-heading">Phone Number</h4>
              <a href="tel:+18001234567" className="footer-link-text">
                +1 (800) 123-4567
              </a>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-col">
            <h4 className="col-heading">Quick Links</h4>
            <ul className="footer-nav-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          {/* Column 4: Explore */}
          <div className="footer-col">
            <h4 className="col-heading">Explore</h4>
            <ul className="footer-nav-list">
              <li><a href="#demos">Product Demos</a></li>
              <li><a href="#cases">Case Studies</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#media">Media & Press</a></li>
              <li><a href="#events">Events & Webinars</a></li>
            </ul>
          </div>

          {/* Column 5: Hero Callout & Socials */}
          <div className="footer-col col-promo">
            <h3 className="promo-title">FUTURISTIC TECH &<br />VR WEBSITE</h3>
            <p className="promo-desc">
              Dive into a world where technology and virtual reality converge to create mind-blowing experiences.
            </p>
            <div className="social-links">
              <a href="#dribbble" aria-label="Dribbble" className="social-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20zm0 2a8 8 0 0 1 7.2 4.5A16.8 16.8 0 0 0 12 7a16.8 16.8 0 0 0-7.2 1.5A8 8 0 0 1 12 4zm0 16a8 8 0 0 1-6.5-3.4 14.8 14.8 0 0 1 6.5-3.1 14.8 14.8 0 0 1 6.5 3.1A8 8 0 0 1 12 20z" />
                </svg>
              </a>
              <a href="#behance" aria-label="Behance" className="social-btn">
                <span className="social-text-icon">Bē</span>
              </a>
              <a href="#instagram" aria-label="Instagram" className="social-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#twitter" aria-label="Twitter" className="social-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Partner Logos Bar */}
        <div className="footer-partners">
          <div className="partner-item">
            <svg viewBox="0 0 24 24" fill="currentColor" className="partner-icon">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v4M12 19v4M1 12h4M19 12h4" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span>Logoipsum</span>
          </div>

          <div className="partner-item">
            <svg viewBox="0 0 24 24" fill="currentColor" className="partner-icon">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span>Logoipsum</span>
          </div>

          <div className="partner-item">
            <svg viewBox="0 0 24 24" fill="currentColor" className="partner-icon">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
              <path d="M12 6a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6z" />
            </svg>
            <span>Logoipsum</span>
          </div>

          <div className="partner-item">
            <svg viewBox="0 0 24 24" fill="currentColor" className="partner-icon">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span>Logoipsum</span>
          </div>

          <div className="partner-item">
            <svg viewBox="0 0 24 24" fill="currentColor" className="partner-icon">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 3a9 9 0 0 0 0 18" fill="rgba(255,255,255,0.3)" />
            </svg>
            <span>Logoipsum</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;