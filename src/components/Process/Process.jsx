import "./Process.scss";

const steps = [
  {
    number: "01",
    title: "Find the line",
    text: "We start with the business problem and the audience truth — the single idea everything else runs parallel to.",
  },
  {
    number: "02",
    title: "Build the work",
    text: "Content, campaign and channel are created together so the craft and the media reinforce each other.",
  },
  {
    number: "03",
    title: "Grow the result",
    text: "We launch, analyse and continuously optimise campaigns to create measurable growth.",
  },
];

export default function Process() {
  return (
    <section id="approach" className="process">
      <div className="container">

        <span className="eyebrow">
          How we work
        </span>

        <div className="heading">
          <h2>
            A method
            <br />
            with momentum.
          </h2>

          <p>
            No hand-offs between silos. Strategy, craft and media
            sit at the same table from day one.
          </p>
        </div>

        <div className="cards">
          {steps.map((step) => (
            <article className="card" key={step.number}>
              <span className="number">
                {step.number}
              </span>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}