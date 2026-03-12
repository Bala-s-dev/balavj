// import { motion } from 'framer-motion';
// import { fadeUp, scaleIn, viewportOnce } from '../animations';

// export default function Education() {
//   return (
//     <section id="education">
//       <div className="wrap">
//         <motion.p
//           className="eyebrow"
//           style={{ justifyContent: 'center', display: 'flex' }}
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={viewportOnce}
//         >
//           Education
//         </motion.p>
//         <motion.h2
//           className="section-h"
//           style={{ textAlign: 'center', marginBottom: 40 }}
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={viewportOnce}
//           transition={{ delay: 0.08 }}
//         >
//           Academic
//           <br />
//           <span className="hi">Foundation</span>
//         </motion.h2>

//         <div className="edu-wrap">
//           <motion.div
//             className="edu-card"
//             variants={scaleIn}
//             initial="hidden"
//             whileInView="show"
//             viewport={viewportOnce}
//             transition={{ delay: 0.16 }}
//           >
//             <div className="edu-header">
//               <motion.div
//                 className="edu-badge-pill"
//                 initial={{ opacity: 0, y: -10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={viewportOnce}
//                 transition={{ delay: 0.3, duration: 0.4 }}
//               >
//                 🎓&nbsp;&nbsp;Graduating 2026
//               </motion.div>
//               <div
//                 className="edu-degree"
//                 style={{
//                   fontSize: '1.3rem',
//                   fontWeight: '700',
//                   color: 'var(--text)',
//                   marginTop: '10px',
//                 }}
//               >
//                 B.E. Computer Science <span style={{ opacity: 0.4 }}>·</span>{' '}
//                 <strong style={{ color: 'var(--indigo)' }}>
//                   Minor: Cyber Security
//                 </strong>
//               </div>
//             </div>

//             <div className="edu-footer">
//               {[
//                 { val: '8.6', label: 'CGPA / 10.0' },
//                 { val: '2026', label: 'Graduation Year' },
//                 { val: 'CS+', label: 'Cyber Security Minor' },
//               ].map(({ val, label }, i) => (
//                 <motion.div
//                   key={val}
//                   className="edu-stat"
//                   initial={{ opacity: 0, y: 16 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={viewportOnce}
//                   transition={{ delay: 0.35 + i * 0.1, duration: 0.45 }}
//                 >
//                   <div className="edu-stat-val">{val}</div>
//                   <div className="edu-stat-label">{label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
