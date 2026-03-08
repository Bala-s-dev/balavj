import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="nav-brand">
          Bala <em>Subramanian</em>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#architecture">Architecture</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#credentials">Credentials</a>
          </li>
        </ul>

        <a href="mailto:your.email@example.com" className="nav-cta">
          Let's Talk
        </a>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span
            style={{
              transform: menuOpen
                ? 'rotate(45deg) translate(5px, 5px)'
                : 'none',
            }}
          ></span>
          <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
          <span
            style={{
              transform: menuOpen
                ? 'rotate(-45deg) translate(4px, -4px)'
                : 'none',
            }}
          ></span>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="mobile-drawer">
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
          <a href="#projects" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#architecture" onClick={toggleMenu}>
            Architecture
          </a>
          <a href="#education" onClick={toggleMenu}>
            Education
          </a>
          <a href="#credentials" onClick={toggleMenu}>
            Credentials
          </a>
          <a
            href="mailto:your.email@example.com"
            onClick={toggleMenu}
            style={{ color: 'var(--indigo)' }}
          >
            Let's Talk
          </a>
        </div>
      )}
    </>
  );
}
