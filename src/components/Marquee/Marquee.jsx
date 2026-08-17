import "./Marquee.scss";

const items = [
  "BRAND STRATEGY",
  "CONTENT",
  "ADVERTISING",
  "MEDIA PLANNING",
  "SOCIAL",
  "PERFORMANCE",
  "FILM",
  "DESIGN",
];

export default function Marquee() {
  const marqueeItems = [...items, ...items];

  return (
    <section className="marquee" aria-hidden="true">
      <div className="track">
        {marqueeItems.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </section>
  );
}