'use client';
import { motion } from 'framer-motion';
import { skills } from '@/lib/resume';

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '60px' }}
        >
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a07fd4', marginBottom: '12px' }}>
            Technical Arsenal
          </p>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#e8e8f0',
          }}>
            Skills &{' '}
            <span style={{ background: 'linear-gradient(135deg, #7b5ea7, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Expertise
            </span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
        }}>
          {skills.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08, duration: 0.6 }}
              style={{
                padding: '28px',
                borderRadius: '16px',
                background: 'rgba(15,15,26,0.6)',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${group.color}15`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: `linear-gradient(90deg, ${group.color}, transparent)`,
              }} />

              <h3 style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: group.color,
                marginBottom: '18px',
                fontWeight: 500,
              }}>
                {group.group}
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.items.map((item, ii) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.05 + ii * 0.02 }}
                    whileHover={{ scale: 1.06, transition: { duration: 0.15 } }}
                    style={{
                      display: 'inline-block',
                      padding: '5px 12px',
                      borderRadius: '100px',
                      fontSize: '0.75rem',
                      border: `1px solid ${group.color}20`,
                      color: 'rgba(232,232,240,0.92)',
                      background: `${group.color}05`,
                      cursor: 'default',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
