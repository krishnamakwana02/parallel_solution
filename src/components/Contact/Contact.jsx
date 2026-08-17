import "./Contact.scss";
import { FaMobileScreenButton, FaRegEnvelope } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <span className="contact-eyebrow">
            GET IN TOUCH
          </span>

          <h2>
            LET’S START
            <br />
            SOMETHING
            <br />
            <span>PARALLEL.</span>
          </h2>

          <p className="contact-intro">
            Tell us about the brand and the brief. We'll come
            back within one working day.
          </p>

          <div className="contact-details">

            <div className="contact-detail">
              <div className="contact-icon">
                <FaMobileScreenButton />
              </div>

              <div>
                <small>CALL / WHATSAPP</small>
                <a href="tel:+917999846393">
                  +91 79998 46393
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <FaRegEnvelope />
              </div>

              <div>
                <small>EMAIL</small>
                <a href="mailto:parallelfixes@gmail.com">
                  parallelfixes@gmail.com
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="project-form">

          <h3>START A PROJECT</h3>

          <form
            action="mailto:parallelfixes@gmail.com"
            method="POST"
            encType="text/plain"
          >

            <div className="form-field">
              <label htmlFor="name">
                YOUR NAME
              </label>

              <input
                id="name"
                name="Name"
                type="text"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">
                EMAIL
              </label>

              <input
                id="email"
                name="Email"
                type="email"
                required
              />
            </div>

            <div className="form-field select-field">
              <label htmlFor="need">
                WHAT DO YOU NEED?
              </label>

              <select id="need" name="Service">
                <option value="Content">Content</option>
                <option value="Branding">Branding</option>
                <option value="Advertising">Advertising</option>
                <option value="Marketing">Marketing</option>
                <option value="Strategy">Strategy</option>
                <option value="Performance">Performance</option>
              </select>
            </div>

            <div className="form-field brief-field">
              <label htmlFor="brief">
                ABOUT THE BRIEF
              </label>

              <textarea
                id="brief"
                name="Brief"
                placeholder="A few lines on the brand and what you're trying to do."
                rows="4"
              />
            </div>

            <button type="submit">
              SEND IT OVER
            </button>

            <p className="form-note">
              Opens your email app to us — no data stored on this page.
            </p>

          </form>

        </div>

      </div>
    </section>
  );
}