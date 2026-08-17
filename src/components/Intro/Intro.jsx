import "./Intro.scss";

export default function Intro() {
  return (
    <section className="intro" id="services">
      <div className="container">
        <div className="left">
          <span className="eyebrow">What we do</span>

          <h2>
            Three lines.
            <br />
            One direction.
          </h2>
        </div>

        <div className="right">
          <p>
            Named for the parallel bars in our mark — because content,
            advertising and marketing should run side by side, never at
            cross purposes.
          </p>
        </div>
      </div>
    </section>
  );
}