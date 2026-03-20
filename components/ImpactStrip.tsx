'use client';
import { motion } from 'framer-motion';

const TOP3 = [
  { stat: '17', label: 'Engineers Mentored', sub: 'technical proficiency & career growth' },
  { stat: '12', label: 'Training Sessions', sub: '80-hour Cloud Native & DevOps programs' },
  { stat: '10+', label: 'Global Teams Led', sub: 'coordinated PCF migration at Capgemini' },
];

export default function ImpactStrip() {
  return (
    <section
      style={{
        padding: '0 24px 80px',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
        }}
      >
        {TOP3.map((item, i) => (
          <motion.div
            key={item.stat}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            style={{
              padding: '28px 32px',
              borderRadius: '16px',
              background: 'rgba(15,15,26,0.6)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(240,165,0,0.15)',
              boxShadow: '0 0 40px rgba(240,165,0,0.05)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(240,165,0,0.5), transparent)',
              }}
            />
            <div
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '3.5rem',
                fontWeight: 700,
                lineHeight: 1,
                background: 'linear-gradient(135deg, #f0a500, #ff6b35)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '8px',
              }}
            >
              {item.stat}
            </div>
            <div
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#e8e8f0',
                marginBottom: '4px',
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                fontSize: '0.78rem',
                color: 'rgba(136,136,170,0.7)',
                lineHeight: 1.5,
              }}
            >
              {item.sub}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
