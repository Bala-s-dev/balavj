import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, stagger, viewportOnce } from "../animations";
import { SKILLS } from "../data/projects";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="about-layout">

          {/* Left copy */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.p variants={fadeUp} className="eyebrow">About</motion.p>
            <motion.h2 variants={fadeUp} className="section-h">
              Systems thinker.<br /><span className="hi">AI-first engineer.</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="about-copy">
              <p>
                I build systems where <strong>intelligence is structural</strong>, not bolted on.
                Every project starts from a question: how does data flow, where do trust
                boundaries sit, and what does the system do when things fail?
              </p>
              <p>
                My work spans <strong>AI system orchestration</strong> with structured LLM prompting,{" "}
                <strong>real-time architecture</strong> using event-driven patterns, and{" "}
                <strong>security-first backend engineering</strong> with cryptographic fundamentals
                applied at every layer.
              </p>
              <div className="quote-block">
                "Security and intelligence aren't features — they're architectural constraints I
                design around from day one."
              </div>
              <p>
                I specialize in <strong>predictive analytics pipelines</strong>, database-level
                integrity enforcement, and building multi-tenant systems that scale without
                sacrificing auditability.
              </p>
            </motion.div>
          </motion.div>

          {/* Right skills */}
          <motion.div
            className="skills-panel"
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {SKILLS.map(({ label, chips }) => (
              <motion.div key={label} variants={slideRight}>
                <div className="sk-head">
                  <span className="sk-head-label">{label}</span>
                </div>
                <div className="sk-chips">
                  {chips.map((chip) => (
                    <motion.span
                      key={chip}
                      className="sk-chip"
                      whileHover={{ y: -2, scale: 1.03 }}
                      transition={{ duration: 0.15 }}
                    >
                      {chip}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
