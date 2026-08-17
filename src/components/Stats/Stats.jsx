import "./Stats.scss";

const stats = [
  {
    number: "3",
    text: "Disciplines,\nOne Team",
  },
  {
    number: "360°",
    text: "Integrated\nCampaigns",
  },
  {
    number: "24/7",
    text: "Always-On\nOptimisation",
  },
  {
    number: "1:1",
    text: "Senior\nAttention",
  },
];

export default function Stats() {
  return (
    <section className="stats" aria-label="Company statistics">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className={`stat-item stat-${index}`} key={item.number}>
            <h2>{item.number}</h2>

            <p>
              {item.text.split("\n").map((line, lineIndex) => (
                <span key={lineIndex}>
                  {line}
                  {lineIndex < item.text.split("\n").length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}