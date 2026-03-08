import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, stagger, viewportOnce } from "../animations";
import { CERTS } from "../data/projects";

export default function Credentials() {
  return (
    <section id="credentials">
      <div className="wrap">
        <motion.p className="eyebrow" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          Credentials
        </motion.p>
        <motion.h2 className="section-h" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} transition={{ delay: 0.08 }}>
          Patent &amp;<br /><span className="hi">Certifications</span>
        </motion.h2>

        <div className="cred-layout" style={{ marginTop: 44 }}>
          {/* Patent */}
          <motion.div
            className="patent-card"
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: 0.1 }}
            whileHover={{ borderColor: "rgba(99,102,241,0.35)" }}
          >
            <div className="pat-icon">🔬</div>
            <div className="pat-title">Animal Sound-Based Audiometry Test Using Software</div>
            <div className="pat-meta">IP India · Patent Filed · 2024</div>
            <div className="pat-desc">
              A software-based audiometry diagnostic method using animal sound stimuli as frequency
              benchmarks — making hearing assessment more accessible across pediatric populations.
            </div>
          </motion.div>

          {/* Certs */}
          <motion.div
            className="certs-list"
            variants={stagger(0.09)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {CERTS.map(({ icon, label }) => (
              <motion.div
                key={label}
                className="cert-row"
                variants={fadeUp}
                whileHover={{ x: 6, borderColor: "rgba(99,102,241,0.35)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="cert-icon-box">{icon}</div>
                <span className="cert-label">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
