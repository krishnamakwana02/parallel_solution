export default function PortfolioCard({ item }) {
  return (
    <a href="#contact" className="portfolio-card">
      <span className="go">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M3 13L13 3M13 3H5M13 3V11"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      </span>

      <span className="tag">
        {item.tag}
      </span>

      <h3>
        {item.title}
      </h3>

      <div className="meta">
        {item.client} · {item.year}
      </div>
    </a>
  );
}