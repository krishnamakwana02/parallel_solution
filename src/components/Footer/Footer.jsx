import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* TOP */}
        <div className="footer-top">

          {/* LOGO */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <span className="logo-mark">
                <i></i>
                <i></i>
                <i></i>
              </span>

              <span className="logo-text">
                <strong>PARALLEL</strong>
                <small>SOLUTIONS</small>
              </span>
            </a>
          </div>

          {/* STUDIO */}
          <div className="footer-column">
            <h4>STUDIO</h4>

            <a href="#work">Work</a>
            <a href="#approach">Approach</a>
            <a href="#careers">Careers</a>
          </div>

          {/* SERVICES */}
          <div className="footer-column">
            <h4>SERVICES</h4>

            <a href="#services">Content</a>
            <a href="#services">Advertising</a>
            <a href="#services">Marketing</a>
          </div>

          {/* CONTACT */}
          <div className="footer-column contact-column">
            <h4>CONTACT</h4>

            <a href="tel:+917999846393">
              +91 79998 46393
            </a>

            <a href="mailto:parallelfixes@gmail.com">
              parallelfixes@gmail.com
            </a>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          <p>
            © 2026 Parallel Solutions. All rights reserved.
          </p>

          <span>
            Content · Advertising · Marketing
          </span>

        </div>

      </div>
    </footer>
  );
}