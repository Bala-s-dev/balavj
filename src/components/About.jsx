import { motion } from 'framer-motion';
import { fadeUp, scaleIn, viewportOnce } from '../animations';

const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Java', 'Python', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Database & Cloud',
    items: ['MongoDB', 'PostgreSQL', 'Firebase', 'AWS (EC2, S3)'],
  },
  {
    category: 'Tools & Security',
    items: ['Git', 'Docker', 'Postman', 'Cryptography', 'Pen Testing'],
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <motion.p
          className="eyebrow"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          About Me
        </motion.p>
        <motion.h2
          className="section-h"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={{ delay: 0.1 }}
        >
          Architecting <span className="hi">Digital Solutions</span>
        </motion.h2>

        <div className="about-layout">
          <motion.div
            className="about-copy"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: 0.2 }}
          >
            <p>
              I am a Full Stack Developer with a strong minor in Cyber Security.
              My passion lies at the intersection of building robust software
              and ensuring it remains impervious to threats.
            </p>
            <div className="quote-block">
              "Great software isn't just about code that works; it's about
              architecture that scales and security that protects."
            </div>
            <p>
              Whether I'm setting up a real-time E2EE messaging platform,
              building AI-powered educational tools, or writing serverless
              backend logic, I focus on delivering clean, maintainable, and
              efficient code.
            </p>
          </motion.div>

          <motion.div
            className="skills-panel"
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: 0.3 }}
          >
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="sk-group">
                <div className="sk-head">
                  <span className="sk-head-label">{skillGroup.category}</span>
                </div>
                <div className="sk-chips">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="sk-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
