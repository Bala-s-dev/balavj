import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, slideRight, stagger, viewportOnce } from "../animations";

/* ── SVG Icons ── */
const IconBox   = () => <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M3 7l9-4 9 4v10l-9 4-9-4V7z"/></svg>;
const IconDL    = () => <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>;
const IconGH    = () => <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>;
const IconLI    = () => <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;

/* ── Terminal line data ── */
const LINES = [
  { type: "cmd",   parts: [{ t: "prompt", v: "$ " }, { t: "cmd", v: "cat " }, { t: "val", v: "system.stack.ts" }] },
  { type: "blank" },
  { type: "code",  parts: [{ t: "comment", v: "// Founding Engineer · AI Systems" }] },
  { type: "code",  parts: [{ t: "key", v: "const " }, { t: "val", v: "stack" }, { t: "op", v: " = {" }] },
  { type: "code",  parts: [{ t: "indent" }, { t: "key", v: "ai" }, { t: "op", v: ": " }, { t: "str", v: '["Gemini","Groq","Vapi"]' }, { t: "op", v: "," }] },
  { type: "code",  parts: [{ t: "indent" }, { t: "key", v: "frontend" }, { t: "op", v: ": " }, { t: "str", v: '["Next.js","React","Tailwind"]' }, { t: "op", v: "," }] },
  { type: "code",  parts: [{ t: "indent" }, { t: "key", v: "backend" }, { t: "op", v: ": " }, { t: "str", v: '["Node","Django","Prisma"]' }, { t: "op", v: "," }] },
  { type: "code",  parts: [{ t: "indent" }, { t: "key", v: "security" }, { t: "op", v: ": " }, { t: "str", v: '["E2EE","RBAC","RLS","JWT"]' }, { t: "op", v: "," }] },
  { type: "code",  parts: [{ t: "indent" }, { t: "key", v: "infra" }, { t: "op", v: ": " }, { t: "str", v: '["Docker","Redis","Vercel"]' }] },
  { type: "code",  parts: [{ t: "op", v: "}" }] },
  { type: "blank" },
  { type: "cmd",   parts: [{ t: "prompt", v: "$ " }, { t: "val", v: "projects.length" }] },
  { type: "code",  parts: [{ t: "num", v: "6" }, { t: "comment", v: "  // production AI systems" }] },
];

function TerminalLine({ parts }) {
  const hasIndent = parts[0]?.t === "indent";
  const displayParts = hasIndent ? parts.slice(1) : parts;
  return (
    <div className="t-line" style={hasIndent ? { paddingLeft: "20px" } : undefined}>
      {displayParts.map((p, i) => (
        <span key={i} className={`t-${p.t}`}>{p.v}</span>
      ))}
    </div>
  );
}

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    let idx = 0;
    timerRef.current = setInterval(() => {
      idx++;
      setVisibleLines(idx);
      if (idx >= LINES.length) clearInterval(timerRef.current);
    }, 220);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section id="hero">
      <div className="wrap">
        <div className="hero-inner">

          {/* ── LEFT ── */}
          <motion.div
            variants={stagger()}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp} className="hero-status">
              <span className="status-dot" />
              Available for founding-level roles
            </motion.div>

            <motion.h1 variants={fadeUp} className="hero-name">
              <span className="first">Bala</span><br />
              <span className="last">Subramanian</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="hero-tagline">
              // ai_product_engineer · full_stack · security_first
            </motion.p>

            <motion.div variants={fadeUp} className="hero-roles">
              {["AI Product Engineer","Full Stack Architect","Security-First Builder"].map((r, i) => (
                <motion.span
                  key={r}
                  className={`role-chip rc-${i+1}`}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                >
                  {r}
                </motion.span>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className="hero-desc">
              Building intelligent, real-time, and secure systems powered by modern AI.
              I architect from first principles — every layer deliberate, every decision justified.
            </motion.p>

            <motion.div variants={fadeUp} className="hero-actions">
              {[
                { href:"#projects", cls:"btn btn-primary",  icon:<IconBox />, label:"View Projects" },
                { href:"#",         cls:"btn btn-outline",  icon:<IconDL />,  label:"Resume"        },
              ].map(({ href, cls, icon, label }) => (
                <motion.a
                  key={label} href={href} className={cls}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {icon}{label}
                </motion.a>
              ))}
              {[
                { href:"https://github.com",   label:"GitHub",   icon:<IconGH /> },
                { href:"https://linkedin.com", label:"LinkedIn", icon:<IconLI /> },
              ].map(({ href, label, icon }) => (
                <motion.a
                  key={label} href={href} target="_blank" rel="noopener"
                  className="btn btn-icon" aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="hero-stats">
              {[
                { val:"6+",  label:"Production AI Systems" },
                { val:"1",   label:"Patent Filed · IP India" },
                { val:"8.6", label:"CGPA / 10.0" },
              ].map(({ val, label }, i) => (
                <motion.div
                  key={val} className="hstat"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.12, duration: 0.45 }}
                >
                  <div className="hstat-val">{val}</div>
                  <div className="hstat-label">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Terminal ── */}
          <motion.div
            className="hero-right"
            variants={slideRight}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
          >
            {/* Floating badges */}
            <motion.div
              className="hero-badge-float hbf-1"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="hbf-label">encryption</div>
              <div className="hbf-val">
                <span className="hbf-dot" style={{ background: "var(--cyan)" }} />
                AES-256-GCM
              </div>
            </motion.div>

            <motion.div
              className="hero-badge-float hbf-2"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="hbf-label">latency</div>
              <div className="hbf-val">
                <span className="hbf-dot" style={{ background: "#4ade80" }} />
                &lt; 200ms
              </div>
            </motion.div>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="tb-dot tb-1" /><span className="tb-dot tb-2" /><span className="tb-dot tb-3" />
                <span className="tb-title">bala@system ~ architect.ts</span>
              </div>
              <div className="terminal-body">
                {LINES.slice(0, visibleLines).map((line, i) => {
                  if (line.type === "blank") return <div key={i} className="t-blank" />;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <TerminalLine parts={line.parts} />
                    </motion.div>
                  );
                })}
                {visibleLines >= LINES.length && (
                  <div className="t-line">
                    <span className="t-prompt">▋</span>
                    <span className="t-cursor" />
                  </div>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
