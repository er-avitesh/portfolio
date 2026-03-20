'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { achievements, metrics } from '@/lib/resume';

function Counter({ target, color }: { target: string; color: string }) {
  const [val, setVal] = useState('0');
  const ref = useRef<HTMLDivElement>(null);
  const numeric = parseInt(target.replace(/\D/g, ''));
  const suffix = target.replace(/[0-9]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let start = 0;
      const duration = 1500;
      const startTime = Date.now();
      const tick = () => {
        const elapsed = Date.now() - startTime;
        const p = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        start = Math.round(eased * numeric);
        setVal(start + suffix);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numeric, suffix]);

  return (
    <div ref={ref} style={{
      fontFamily: 'Cormorant Garamond, serif',
      fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
      fontWeight: 700,
      lineHeight: 1,
      color: color,
      textShadow: `0 0 30px ${color}50`,
    }}>
      {val}
    </div>
  );
}

export default function AchievementsSection() {
  const awards = achievements.filter(a => a.type === 'award');
  const recognitions = achievements.filter(a => a.type === 'recognition');

  return (
    <section id="achievements" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '60px', textAlign: 'center' }}
        >
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#f0a500', marginBottom: '12px' }}>
            Impact & Recognition
          </p>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#e8e8f0',
          }}>
            Achievements &{' '}
            <span style={{ background: 'linear-gradient(135deg, #f0a500, #ff6b35)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Awards
            </span>
          </h2>
        </motion.div>

        {/* Metrics grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '16px',
          marginBottom: '60px',
        }}>
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              style={{
                padding: '28px 20px',
                borderRadius: '16px',
                background: 'rgba(15,15,26,0.7)',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${m.color}20`,
                textAlign: 'center',
                cursor: 'default',
                boxShadow: `0 0 40px ${m.color}08`,
              }}
            >
              <Counter target={m.stat} color={m.color} />
              <div style={{ fontSize: '0.78rem', color: 'rgba(136,136,170,0.7)', marginTop: '8px', lineHeight: 1.4 }}>
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards + Recognitions */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {/* Awards */}
          <div>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(200,210,235,0.9)', marginBottom: '20px' }}>
              Honors & Awards
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {awards.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  style={{
                    padding: '16px 20px',
                    borderRadius: '12px',
                    background: 'rgba(15,15,26,0.5)',
                    border: '1px solid rgba(240,165,0,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    cursor: 'default',
                  }}
                >
                  <span style={{ fontSize: '1.4rem' }}>{a.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 500, color: '#e8e8f0' }}>{a.title}</div>
                    <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', color: '#f0a500', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2px' }}>
                      {a.issuer ? `${a.type} · ${a.issuer}` : a.type}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recognitions */}
          <div>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(200,210,235,0.9)', marginBottom: '20px' }}>
              Notable Recognitions
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {recognitions.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ x: -4, transition: { duration: 0.2 } }}
                  style={{
                    padding: '16px 20px',
                    borderRadius: '12px',
                    background: 'rgba(15,15,26,0.5)',
                    border: '1px solid rgba(0,212,255,0.1)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                    cursor: 'default',
                  }}
                >
                  <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{r.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 500, color: '#e8e8f0', marginBottom: '4px' }}>{r.title}</div>
                    <div style={{ fontSize: '0.78rem', color: 'rgba(180,192,220,0.9)', lineHeight: 1.5 }}>{r.context}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
