import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import "./Navbar.scss";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">

        {/* Logo */}
        <a
          href="#top"
          className="logo"
          onClick={closeMenu}
          aria-label="Parallel Solutions Home"
        >
          <span className="mark" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
          </span>

          <span className="logo-text">
            <strong>Parallel</strong>
            <small>Solutions</small>
          </span>
        </a>

        {/* Navigation */}
        <nav
          className={menuOpen ? "open" : ""}
          aria-label="Main navigation"
        >
          <a href="#work" onClick={closeMenu}>
            Work
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#approach" onClick={closeMenu}>
            Approach
          </a>

          <a href="#insights" onClick={closeMenu}>
            Insights
          </a>

          <a href="#careers" onClick={closeMenu}>
            Careers
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="nav-btn"
          onClick={closeMenu}
        >
          <span>Start a project</span>
        </a>

        {/* Mobile Menu */}
        <button
          type="button"
          className={`mobile ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <HiOutlineMenuAlt3 />
        </button>

      </div>
    </header>
  );
}