import "./Insights.scss";
import data from "./insightsData";

export default function Insights() {
  return (
    <section id="insights" className="insights">
      <div className="container">

        <div className="top">
          <div>
            <span className="eyebrow">Insights</span>

            <h2>
              Thinking
              <br />
              Out Loud.
            </h2>
          </div>

          <p>
            Thoughts on branding, content, advertising, marketing,
            strategy, performance and creativity.
          </p>
        </div>

        <div className="posts">
          {data.map((post, index) => (
            <article className="post" key={post.id ?? index}>
              <small>{post.category}</small>

              <h3>{post.title}</h3>

              <a href="#contact">
                Read
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}