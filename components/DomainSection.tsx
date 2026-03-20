'use client';
import { motion } from 'framer-motion';
import { domainSkills } from '@/lib/resume';

const ICONS: Record<string, string> = {
  'Property & Casualty (P&C) Insurance': '🏛️',
  'Banking & Financial Services': '🏦',
  'Logistics & Supply Chain': '📦',
  'Engineering Productivity & Technical Coaching': '⚙️',
};

const COLORS = ['#00d4ff', '#f0a500', '#7b5ea7', '#00FF88'];

export default function DomainSection() {
  return (
    <section id="domain" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

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
            color: '#f0a500',
            marginBottom: '12px',
          }}>
            Industry Expertise
          </p>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#e8e8f0',
          }}>
            Domain{' '}
            <span style={{
              background: 'linear-gradient(135deg, #f0a500, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Knowledge
            </span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {domainSkills.map((d, i) => {
            const color = COLORS[i % COLORS.length];
            const icon = ICONS[d.domain] ?? '🔹';
            return (
              <motion.div
                key={d.domain}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                style={{
                  padding: '32px 28px',
                  borderRadius: '20px',
                  background: 'rgba(15,15,26,0.6)',
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${color}18`,
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                }}
              >
                {/* Top accent bar */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: '2px',
                  background: `linear-gradient(90deg, ${color}, transparent)`,
                }} />

                {/* Corner glow */}
                <div style={{
                  position: 'absolute',
                  top: '-30%',
                  right: '-10%',
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${color}10 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{icon}</div>

                <h3 style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: color,
                  marginBottom: '12px',
                  fontWeight: 600,
                }}>
                  {d.domain}
                </h3>

                <p style={{
                  fontSize: '0.88rem',
                  lineHeight: 1.7,
                  color: 'rgba(200,210,230,0.85)',
                }}>
                  {d.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
