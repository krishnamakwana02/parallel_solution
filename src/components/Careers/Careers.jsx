import "./Careers.scss";

export default function Careers() {
  return (
    <section id="careers" className="careers">
      <div className="careers-container">

        <span className="careers-eyebrow">
          Careers
        </span>

        <div className="careers-main">

          <div className="careers-copy">
            <h2>
              WANT TO BUILD
              <br />
              WORK THAT MOVES?
            </h2>

            <p>
              We're always looking for writers, art directors, strategists
              <br className="desktop-break" />
              and media minds who like to work in parallel.
            </p>
          </div>

          <a href="#contact" className="careers-button">
            <span>See open roles</span>
          </a>

        </div>

      </div>
    </section>
  );
}