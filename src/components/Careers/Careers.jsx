import "./Careers.scss";
import { FaArrowRight } from "react-icons/fa6";

export default function Careers() {
  return (
    <section id="careers" className="careers">
      <div className="container">

        <div className="careers-content">

          <span className="eyebrow">
            Join us
          </span>

          <h2>
            Great work
            <br />
            needs great
            <br />
            people.
          </h2>

          <p>
            We’re always looking for strategists, designers,
            writers, marketers and developers who love solving
            meaningful problems.
          </p>

          <a href="#contact" className="careers-button">
            <span>View careers</span>
            <FaArrowRight />
          </a>

        </div>

      </div>
    </section>
  );
}