import "./Insights.scss";
import data from "./insightsData";

export default function Insights() {
  return (
    <section id="insights" className="insights">
      <div className="container">

        {/* ================= TOP ================= */}

        <div className="top">
          <div className="heading-wrap">
            <span className="eyebrow">Insights</span>

            <h2>
              Thinking
              <br />
              Out Loud.
            </h2>
          </div>

          <p className="intro-text">
            Points of view on content, media and the state of the brief —
            replace with your own posts.
          </p>
        </div>

        {/* ================= POSTS ================= */}

        <div className="posts">
          {data.map((post) => (
            <article className="post" key={post.id}>
              <small>{post.category}</small>

              <h3>{post.title}</h3>

              <a href="#contact">
                Read
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}