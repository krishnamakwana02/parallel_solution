import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Marquee from "../components/Marquee/Marquee";
import Intro from "../components/Intro/Intro";
import Services from "../components/Services/Services";
import Portfolio from "../components/Portfolio/Portfolio";
import Process from "../components/Process/Process";
import Stats from "../components/Stats/Stats";
import Insights from "../components/Insights/Insights";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import Careers from "../components/Careers/Careers";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Intro />
      <Services />
      <Portfolio />
      <Process />
      <Stats />
      <Insights />
      <Careers />
      <Contact />
      <Footer />
    </>
  );
}
