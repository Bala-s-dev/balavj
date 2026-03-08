import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["about", "projects", "architecture", "credentials", "education"];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const [active, setActive]       = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let cur = "";
      document.querySelectorAll("section[id]").forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`nav ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <a href="#" className="nav-brand">bala<em>.</em>dev</a>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} className={active === l ? "active" : ""}>
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <a href="mailto:bala@example.com" className="nav-cta">
          Get in Touch
        </a>

        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span style={ open ? { transform: "rotate(45deg) translate(5px,5px)" } : {} } />
          <span style={ open ? { opacity: 0 }                                    : {} } />
          <span style={ open ? { transform: "rotate(-45deg) translate(5px,-5px)"} : {} } />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{    height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {links.map((l) => (
              <a key={l} href={`#${l}`} onClick={() => setOpen(false)}>
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </a>
            ))}
            <a
              href="mailto:bala@example.com"
              style={{ color: "var(--indigo)", fontWeight: 700, marginTop: 8, borderBottom: "none" }}
              onClick={() => setOpen(false)}
            >
              Get in Touch →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
