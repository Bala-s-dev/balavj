import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, stagger, viewportOnce } from "../animations";
import { PRINCIPLES, STACK_LAYERS } from "../data/projects";

function StackSep() {
  return (
    <div className="stack-sep">
      <div className="ss-line" />
      <div className="ss-dot" />
      <div className="ss-dot" />
      <div className="ss-line" />
    </div>
  );
}

export default function Architecture() {
  return (
    <section id="architecture">
      <div className="wrap">
        <motion.p className="eyebrow" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          Design Philosophy
        </motion.p>
        <motion.h2 className="section-h" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} transition={{ delay: 0.08 }}>
          How I design<br /><span className="hi">intelligent systems</span>
        </motion.h2>
        <motion.p className="section-lead" style={{ marginBottom: 52 }} variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} transition={{ delay: 0.16 }}>
          Architecture isn't decoration. Every structural decision carries consequences that compound over time.
        </motion.p>

        <div className="arch-layout">
          {/* Principles */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {PRINCIPLES.map((p) => (
              <motion.div
                key={p.title}
                className="principle"
                variants={slideLeft}
                whileHover={{ x: 4, borderColor: "rgba(99,102,241,0.4)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="prin-icon">{p.icon}</div>
                <div>
                  <div className="prin-title">{p.title}</div>
                  <div className="prin-desc">{p.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stack card */}
          <motion.div
            className="stack-card"
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: 0.2 }}
          >
            <div className="stack-title">// system.stack</div>
            {STACK_LAYERS.map((layer, i) => (
              <div key={layer.label}>
                {i > 0 && <StackSep />}
                <div className="stack-layer">
                  <div className="sl-label">{layer.label}</div>
                  <div className="sl-nodes">
                    {layer.nodes.map((node) => (
                      <motion.span
                        key={node.text}
                        className={`sl-node ${node.sn}`}
                        whileHover={{ scale: 1.06, y: -2 }}
                        transition={{ duration: 0.15 }}
                      >
                        {node.text}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
