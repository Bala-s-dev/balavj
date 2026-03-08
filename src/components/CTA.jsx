import { motion } from "framer-motion";
import { fadeUp, scaleIn, stagger, viewportOnce } from "../animations";

const IconMail = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconGH = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
const IconDL = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
  </svg>
);

export default function CTA() {
  return (
    <section id="cta" style={{ textAlign: "center" }}>
      <div className="wrap">
        <motion.div
          className="cta-card"
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.p
            className="eyebrow"
            style={{ justifyContent: "center", display: "flex", marginBottom: 20 }}
            variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}
            transition={{ delay: 0.1 }}
          >
            Let's work together
          </motion.p>

          <motion.h2
            className="cta-h"
            variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}
            transition={{ delay: 0.18 }}
          >
            Let's Build Intelligent<br /><span className="hi">Systems Together.</span>
          </motion.h2>

          <motion.p
            className="cta-sub"
            variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}
            transition={{ delay: 0.25 }}
          >
            Open to founding engineer roles, AI product contracts, and ambitious architecture challenges.
          </motion.p>

          <motion.div
            className="cta-actions"
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {[
              { href: "mailto:bala@example.com", cls: "btn btn-primary", icon: <IconMail />, label: "Email Me" },
              { href: "https://github.com",      cls: "btn btn-outline", icon: <IconGH />,   label: "View GitHub",       ext: true },
              { href: "#",                        cls: "btn btn-outline", icon: <IconDL />,   label: "Download Resume" },
            ].map(({ href, cls, icon, label, ext }) => (
              <motion.a
                key={label}
                href={href}
                className={cls}
                target={ext ? "_blank" : undefined}
                rel={ext ? "noopener" : undefined}
                variants={fadeUp}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                {icon}{label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="foot-copy">© 2024 Bala Subramanian · Built with precision.</div>
      <div className="foot-links">
        <a href="mailto:bala@example.com">Email</a>
        <a href="https://github.com" target="_blank" rel="noopener">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
      </div>
    </motion.footer>
  );
}
