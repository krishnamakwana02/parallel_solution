import "./Portfolio.scss";

import portfolioData from "./portfolioData";
import PortfolioCard from "./PortfolioCard";

export default function Portfolio() {
  return (
    <section id="work" className="portfolio">
      <div className="container">
        <div className="heading">
          <div>
            <span className="eyebrow">Selected work</span>

            <h2>
              Proof, not
              <br />
              promises.
            </h2>
          </div>

          <p className="heading-note">
            Swap these tiles for your own case studies — client, category, and
            the result that mattered.
          </p>
        </div>

        <div className="grid">
          {portfolioData.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
