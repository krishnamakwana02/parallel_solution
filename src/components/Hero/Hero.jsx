import "./Hero.scss";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* Background video */}
      <div className="hero-media">
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

      {/* Animated brand bars */}
      <div className="bars" aria-hidden="true">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>

      {/* Dark gradient */}
      <div className="hero-grad" />

      <div className="container">
        <div className="hero-content">

          <motion.div
            className="hero-kicker"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">
              Content · Advertising · Marketing
            </span>
          </motion.div>

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

          <motion.div
            className="buttons"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
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

      {/* Bottom information */}
      <div className="hero-foot">
        <div className="container">
          <div className="cell">
            Est. India · <b>Available worldwide</b>
          </div>

          <div className="cell">
            Three disciplines · <b>One team</b>
          </div>

          <div className="scrollcue">
            Scroll
          </div>
        </div>
      </div>
    </section>
  );
}