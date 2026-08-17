import "./Hero.scss";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero" id="top">

      {/* ================================
          BACKGROUND VIDEO
      ================================= */}
      <div className="hero-media" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
        >
          {/* Add your video here */}
          {/* <source src="/reel.mp4" type="video/mp4" /> */}
        </video>
      </div>

      {/* ================================
          BACKGROUND PARALLEL BARS
      ================================= */}
      <div className="bars" aria-hidden="true">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>

      {/* ================================
          DARK OVERLAY
      ================================= */}
      <div className="hero-grad" aria-hidden="true" />

      {/* ================================
          MAIN CONTENT
      ================================= */}
      <div className="container">
        <div className="hero-content">

          {/* KICKER */}
          <motion.div
            className="hero-kicker"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="eyebrow">
              Content · Advertising · Marketing
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            We keep brands
            <br />
            moving in <span>parallel.</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            A content, advertising and marketing studio built to run
            three disciplines as one force — so your message never
            loses momentum.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="buttons"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <a href="#work" className="btn">
              <span>See the work</span>
            </a>

            <a href="#contact" className="btn ghost">
              <span>Start a project</span>
            </a>
          </motion.div>

        </div>
      </div>

      {/* ================================
          BOTTOM INFORMATION
      ================================= */}
      <div className="hero-foot">
        <div className="container">

          <div className="cell">
            Est. India · <b>Available worldwide</b>
          </div>

          <div className="cell">
            Three disciplines · <b>One team</b>
          </div>

          <div className="scrollcue">
            Scroll <span></span>
          </div>

        </div>
      </div>

    </section>
  );
}