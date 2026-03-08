import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '../animations';

export default function Hero() {
  return (
    <section id="hero">
      <div className="wrap hero-inner">
        {/* Left Side: Copy */}
        <motion.div
          className="hero-left"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div className="hero-status" variants={fadeUp}>
            <div className="status-dot"></div>
            Available for New Opportunities
          </motion.div>

          <motion.h1 className="hero-name" variants={fadeUp}>
            <span className="first">Hi, I'm Bala</span>
            <span className="last">Full Stack Dev.</span>
          </motion.h1>

          <motion.div className="hero-roles" variants={fadeUp}>
            <span className="role-chip rc-1">AI Integration</span>
            <span className="role-chip rc-2">Backend Systems</span>
            <span className="role-chip rc-3">Cyber Security</span>
          </motion.div>

          <motion.p className="hero-desc" variants={fadeUp}>
            I build secure, high-performance web applications and AI-driven
            platforms. Passionate about clean architecture, scalable backends,
            and crafting seamless digital experiences.
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUp}>
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a
              href="https://github.com/balavj"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              GitHub Profile
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={fadeUp}>
            <div className="hstat">
              <div className="hstat-val">3+</div>
              <div className="hstat-label">Years Coding</div>
            </div>
            <div className="hstat">
              <div className="hstat-val">10+</div>
              <div className="hstat-label">Projects Built</div>
            </div>
            <div className="hstat">
              <div className="hstat-val">1</div>
              <div className="hstat-label">Patent Filed</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Terminal */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="hero-badge-float hbf-1">
            <div className="hbf-label">Current Focus</div>
            <div className="hbf-val">
              <div
                className="hbf-dot"
                style={{ background: 'var(--cyan)' }}
              ></div>{' '}
              Web3 & Crypto
            </div>
          </div>

          <div className="terminal">
            <div className="terminal-bar">
              <div className="tb-dot tb-1"></div>
              <div className="tb-dot tb-2"></div>
              <div className="tb-dot tb-3"></div>
              <div className="tb-title">bala@dev-machine: ~</div>
            </div>
            <div className="terminal-body">
              <div className="t-line">
                <span className="t-prompt">➜</span>{' '}
                <span className="t-cmd">whoami</span>
              </div>
              <div className="t-line">
                <span className="t-val">Bala Subramanian</span>
              </div>
              <div className="t-blank"></div>
              <div className="t-line">
                <span className="t-prompt">➜</span>{' '}
                <span className="t-cmd">cat</span>{' '}
                <span className="t-sub">skills.json</span>
              </div>
              <div className="t-line">
                <span className="t-op">&#123;</span>
              </div>
              <div className="t-line">
                {' '}
                <span className="t-key">"frontend"</span>
                <span className="t-op">:</span>{' '}
                <span className="t-str">["React", "Next.js", "Tailwind"]</span>
                <span className="t-op">,</span>
              </div>
              <div className="t-line">
                {' '}
                <span className="t-key">"backend"</span>
                <span className="t-op">:</span>{' '}
                <span className="t-str">["Node.js", "Express", "Java"]</span>
                <span className="t-op">,</span>
              </div>
              <div className="t-line">
                {' '}
                <span className="t-key">"database"</span>
                <span className="t-op">:</span>{' '}
                <span className="t-str">["MongoDB", "PostgreSQL"]</span>
                <span className="t-op">,</span>
              </div>
              <div className="t-line">
                {' '}
                <span className="t-key">"tools"</span>
                <span className="t-op">:</span>{' '}
                <span className="t-str">["Git", "Docker", "AWS"]</span>
              </div>
              <div className="t-line">
                <span className="t-op">&#125;</span>
              </div>
              <div className="t-blank"></div>
              <div className="t-line">
                <span className="t-prompt">➜</span>{' '}
                <span className="t-cmd">./start_server.sh</span>
                <span className="t-cursor"></span>
              </div>
            </div>
          </div>

          <div className="hero-badge-float hbf-2">
            <div className="hbf-label">AI Tools</div>
            <div className="hbf-val">ChatGPT, Gemini, Copilot</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
