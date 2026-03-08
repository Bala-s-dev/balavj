import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "../animations";
import { PROJECTS } from "../data/projects";
import { ProjectSVGs } from "./ProjectSVGs";

const IconExternal = () => (
  <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);
const IconGH = () => (
  <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
const ChevronRight = () => (
  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M9 18l6-6-6-6"/>
  </svg>
);

function ProjectCard({ project, index }) {
  const [diveOpen, setDiveOpen] = useState(false);

  return (
    <motion.article
      className="pcard"
      variants={fadeUp}
      whileHover={{ y: -6, boxShadow: "0 24px 64px rgba(0,0,0,0.45), 0 0 0 1px rgba(99,102,241,0.1)" }}
      transition={{ duration: 0.25 }}
    >
      {/* Image */}
      <div className="pcard-img">{ProjectSVGs[project.id]}</div>

      <div className="pcard-body">
        <div className="pcard-num">{project.num} · {project.category}</div>
        <h3 className="pcard-title">{project.title}</h3>
        <p className="pcard-desc">{project.desc}</p>

        <div className="pcard-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="ptag">{tag}</span>
          ))}
        </div>

        {/* Deep Dive toggle */}
        <button
          className={`dive-toggle ${diveOpen ? "open" : ""}`}
          onClick={() => setDiveOpen((o) => !o)}
          aria-expanded={diveOpen}
        >
          <motion.span
            className="dive-arrow"
            animate={{ rotate: diveOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight />
          </motion.span>
          Technical Deep Dive
        </button>

        <AnimatePresence initial={false}>
          {diveOpen && (
            <motion.div
              key="dive"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{    height: 0, opacity: 0 }}
              transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div className="dive-inner">
                <ul>
                  {project.dive.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.3 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Links */}
        <div className="pcard-links">
          <motion.a
            href={project.liveUrl} target="_blank" rel="noopener"
            className="plink plink-live"
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <IconExternal /> Live Demo
          </motion.a>
          <motion.a
            href={project.ghUrl} target="_blank" rel="noopener"
            className="plink plink-gh"
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <IconGH /> GitHub
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="proj-header">
          <div>
            <motion.p
              className="eyebrow"
              variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}
            >
              Featured Work
            </motion.p>
            <motion.h2
              className="section-h"
              variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}
              transition={{ delay: 0.08 }}
            >
              Production<br /><span className="hi">Systems Built</span>
            </motion.h2>
          </div>
          <motion.p
            className="section-lead"
            style={{ maxWidth: 340, marginBottom: 0 }}
            variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}
            transition={{ delay: 0.16 }}
          >
            Each project is a real-world AI or security system — not a tutorial clone.
          </motion.p>
        </div>

        <motion.div
          className="proj-grid"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
