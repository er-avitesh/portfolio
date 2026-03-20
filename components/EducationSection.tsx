'use client';
import { motion } from 'framer-motion';
import { education, languages } from '@/lib/resume';

export default function EducationSection() {
  return (
    <section id="education" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '60px' }}
        >
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7b5ea7', marginBottom: '12px' }}>
            Academic Background
          </p>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#e8e8f0',
          }}>
            Education &{' '}
            <span style={{ background: 'linear-gradient(135deg, #7b5ea7, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Languages
            </span>
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{
                padding: '28px 32px',
                borderRadius: '16px',
                background: 'rgba(15,15,26,0.6)',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${edu.color}18`,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '20px',
                flexWrap: 'wrap',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '3px',
                background: edu.color,
                borderRadius: '3px 0 0 3px',
              }} />
              <div style={{ paddingLeft: '8px' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#e8e8f0', marginBottom: '6px' }}>
                  {edu.institution}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(136,136,170,0.75)' }}>
                  {edu.degree}
                </p>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '0.75rem',
                  color: 'rgba(165,178,208,0.9)',
                  marginBottom: '6px',
                }}>
                  {edu.dates}
                </div>
                <span style={{
                  display: 'inline-block',
                  padding: '3px 10px',
                  borderRadius: '100px',
                  fontSize: '0.6rem',
                  fontFamily: 'DM Mono, monospace',
                  border: `1px solid ${edu.color}40`,
                  color: edu.color,
                  background: `${edu.color}08`,
                  letterSpacing: '0.08em',
                }}>
                  {edu.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(200,210,235,0.9)', marginBottom: '16px' }}>
            Languages
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {languages.map(l => (
              <div key={l.lang} style={{
                padding: '14px 24px',
                borderRadius: '12px',
                background: 'rgba(15,15,26,0.5)',
                border: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                minWidth: '140px',
              }}>
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e8e8f0' }}>{l.lang}</span>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: 'rgba(165,178,208,0.9)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{l.level}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
