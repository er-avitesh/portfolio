'use client';
import { motion } from 'framer-motion';
import { publications, certifications } from '@/lib/resume';

export default function PublicationsSection() {
  return (
    <section id="publications" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '60px' }}
        >
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#00d4ff', marginBottom: '12px' }}>
            Research & Learning
          </p>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#e8e8f0',
          }}>
            Publications &{' '}
            <span style={{ background: 'linear-gradient(135deg, #00d4ff, #7b5ea7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Certifications
            </span>
          </h2>
        </motion.div>

        {/* Publications */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '60px' }}>
          {publications.map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ x: 6, transition: { duration: 0.2 } }}
              style={{
                padding: '28px 32px',
                borderRadius: '16px',
                background: 'rgba(15,15,26,0.6)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(0,212,255,0.1)',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                cursor: 'default',
              }}
            >
              <span style={{ fontSize: '2rem', flexShrink: 0 }}>{pub.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '10px' }}>
                  {pub.tags.map(tag => (
                    <span key={tag} style={{
                      display: 'inline-block',
                      padding: '3px 10px',
                      borderRadius: '100px',
                      fontSize: '0.62rem',
                      fontFamily: 'DM Mono, monospace',
                      border: '1px solid rgba(0,212,255,0.2)',
                      color: '#00d4ff',
                      background: 'rgba(0,212,255,0.05)',
                      letterSpacing: '0.08em',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#e8e8f0', marginBottom: '8px', lineHeight: 1.4 }}>
                  {pub.title}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'rgba(136,136,170,0.7)', lineHeight: 1.6 }}>
                  {pub.subtitle}
                </p>
                {pub.doi && (
                  <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', color: 'rgba(0,212,255,0.6)', marginTop: '8px', letterSpacing: '0.04em' }}>
                    doi:{pub.doi}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(200,210,235,0.9)', marginBottom: '20px' }}>
            Certifications
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                style={{
                  padding: '18px 22px',
                  borderRadius: '12px',
                  background: 'rgba(15,15,26,0.5)',
                  border: '1px solid rgba(123,94,167,0.15)',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>🏅</span>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 500, color: '#e8e8f0', lineHeight: 1.3 }}>{cert.title}</div>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', color: '#7b5ea7', letterSpacing: '0.08em', marginTop: '3px' }}>{cert.org}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
