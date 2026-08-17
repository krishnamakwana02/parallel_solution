import "./Intro.scss";

export default function Intro() {
  return (
    <section className="intro" id="services">
      <div className="intro-container">

        <div className="intro-header">

          <div className="intro-left">
            <span className="eyebrow">
              What we do
            </span>

            <h2>
              Three lines.
              <br />
              One direction.
            </h2>
          </div>

          <div className="intro-right">
            <p>
              Named for the parallel bars in our mark — because
              <br className="desktop-break" />
              content, advertising and marketing should run side
              <br className="desktop-break" />
              by side, never at cross purposes.
            </p>
          </div>

        </div>

        <div className="intro-line" />

      </div>
    </section>
  );
}