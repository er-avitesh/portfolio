'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '@/lib/resume';

export default function ExperienceSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="experience" className="section-pad" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '60px' }}
        >
          <p style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#00d4ff',
            marginBottom: '12px',
          }}>
            Career Timeline
          </p>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#e8e8f0',
          }}>
            10+ Years of<br />
            <span style={{
              background: 'linear-gradient(135deg, #00d4ff, #7b5ea7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Impact & Leadership
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'linear-gradient(to bottom, #00d4ff, #7b5ea7, rgba(255,255,255,0.05))',
          }} />

          {experience.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              style={{ paddingLeft: '56px', marginBottom: '16px', position: 'relative' }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '14px',
                top: '28px',
                width: '13px',
                height: '13px',
                borderRadius: '50%',
                background: exp.color,
                boxShadow: `0 0 12px ${exp.color}`,
                border: '2px solid #050508',
                zIndex: 1,
              }} />

              {/* Card */}
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                <div style={{
                  padding: '24px 28px',
                  borderRadius: '16px',
                  background: openIdx === i ? 'rgba(15,15,26,0.8)' : 'rgba(15,15,26,0.4)',
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${openIdx === i ? `${exp.color}33` : 'rgba(255,255,255,0.05)'}`,
                  transition: 'all 0.3s ease',
                  boxShadow: openIdx === i ? `0 0 40px ${exp.color}15` : 'none',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px', flexWrap: 'wrap' }}>
                        <span style={{
                          fontFamily: 'DM Mono, monospace',
                          fontSize: '0.75rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: exp.color,
                        }}>
                          {exp.company}
                        </span>
                        <span style={{ color: 'rgba(165,178,208,0.5)', fontSize: '0.7rem' }}>·</span>
                        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: 'rgba(165,178,208,0.9)' }}>
                          {exp.dates}
                        </span>
                      </div>
                      <h3 style={{
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: '#e8e8f0',
                        letterSpacing: '-0.01em',
                      }}>
                        {exp.role}
                      </h3>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '0.72rem',
                        color: 'rgba(165,178,208,0.85)',
                      }}>
                        {exp.duration}
                      </span>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        border: '1px solid rgba(136,136,170,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(136,136,170,0.5)',
                        fontSize: '0.7rem',
                        transform: openIdx === i ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.3s ease',
                      }}>
                        ↓
                      </div>
                    </div>
                  </div>

                  {/* Highlight chips */}
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
                    {exp.highlights.map(h => (
                      <span key={h} style={{
                        display: 'inline-block',
                        padding: '3px 10px',
                        borderRadius: '100px',
                        fontSize: '0.65rem',
                        fontFamily: 'DM Mono, monospace',
                        border: `1px solid ${exp.color}30`,
                        color: exp.color,
                        background: `${exp.color}08`,
                        opacity: 0.9,
                      }}>
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Expanded bullets */}
                  <AnimatePresence>
                    {openIdx === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{
                          marginTop: '20px',
                          paddingTop: '20px',
                          borderTop: '1px solid rgba(255,255,255,0.05)',
                        }}>
                          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {exp.bullets.map((b, j) => (
                              <motion.li
                                key={j}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.04 }}
                                style={{
                                  display: 'flex',
                                  gap: '12px',
                                  fontSize: '0.875rem',
                                  lineHeight: 1.65,
                                  color: 'rgba(232,232,240,0.75)',
                                }}
                              >
                                <span style={{ color: exp.color, flexShrink: 0, marginTop: '2px', fontSize: '0.7rem' }}>▸</span>
                                {b}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
