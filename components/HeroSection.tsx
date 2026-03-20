'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ROLES = [
  'Cloud Architect',
  'AI Systems Leader',
  'Principal Consultant',
  'IEEE Senior Member',
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '120px 24px 80px',
        textAlign: 'center',
      }}
    >
      {/* Location tag */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="chip"
        style={{ marginBottom: '2rem' }}
      >
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00d4ff', display: 'inline-block' }} />
        Concord, North Carolina · Open to Opportunities
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(3rem, 8vw, 7rem)',
          fontWeight: 700,
          lineHeight: 0.95,
          letterSpacing: '-0.03em',
          color: '#e8e8f0',
          marginBottom: '1rem',
          maxWidth: '900px',
        }}
      >
        Avitesh{' '}
        <span
          style={{
            background: 'linear-gradient(135deg, #00d4ff 0%, #7b5ea7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Kesharwani
        </span>
      </motion.h1>

      {/* Typewriter role */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
          color: 'rgba(136,136,170,0.9)',
          letterSpacing: '0.08em',
          marginBottom: '2.5rem',
          height: '2em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
        }}
      >
        <span style={{ color: '#7b5ea7' }}>~/</span>
        {displayed}
        <span
          style={{
            width: '2px',
            height: '1.1em',
            background: '#00d4ff',
            display: 'inline-block',
            animation: 'blink 1s step-end infinite',
          }}
        />
      </motion.div>

      {/* Summary */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        style={{
          maxWidth: '680px',
          fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
          lineHeight: 1.75,
          color: 'rgba(232,232,240,0.7)',
          marginBottom: '3rem',
          fontWeight: 300,
        }}
      >
        10+ years architecting enterprise-scale cloud solutions. Leading the <strong style={{ color: '#e8e8f0', fontWeight: 500 }}>TITAN Cloud & AI Enablement Program</strong> — transforming specialty insurance through RAG-based underwriting automation, AKS migrations, and predictive analytics.
      </motion.p>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '3rem' }}
      >
        {['Azure · AWS · GCP', 'RAG · LangChain · OpenAI', 'Kubernetes · Docker', 'IEEE Senior Member', 'Globee® Judge 2025', 'MS CS @ UNC Charlotte'].map(tag => (
          <span key={tag} className="chip-purple" style={{
            display: 'inline-block',
            padding: '5px 14px',
            borderRadius: '100px',
            fontSize: '0.7rem',
            fontFamily: 'DM Mono, monospace',
            letterSpacing: '0.07em',
            border: '1px solid rgba(123,94,167,0.3)',
            color: '#a88fce',
            background: 'rgba(123,94,167,0.07)',
          }}>
            {tag}
          </span>
        ))}
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <button
          onClick={scrollToExperience}
          style={{
            padding: '14px 32px',
            borderRadius: '100px',
            background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(123,94,167,0.15))',
            border: '1px solid rgba(0,212,255,0.3)',
            color: '#00d4ff',
            fontFamily: 'DM Mono, monospace',
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 0 30px rgba(0,212,255,0.1)',
          }}
          onMouseEnter={e => {
            (e.target as HTMLButtonElement).style.boxShadow = '0 0 50px rgba(0,212,255,0.25)';
            (e.target as HTMLButtonElement).style.background = 'linear-gradient(135deg, rgba(0,212,255,0.25), rgba(123,94,167,0.2))';
          }}
          onMouseLeave={e => {
            (e.target as HTMLButtonElement).style.boxShadow = '0 0 30px rgba(0,212,255,0.1)';
            (e.target as HTMLButtonElement).style.background = 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(123,94,167,0.15))';
          }}
        >
          View Experience →
        </button>
        <a
          href="mailto:itsavitesh@gmail.com"
          style={{
            padding: '14px 32px',
            borderRadius: '100px',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.08)',
            color: 'rgba(232,232,240,0.7)',
            fontFamily: 'DM Mono, monospace',
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          Get In Touch
        </a>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <div
          style={{
            width: '24px',
            height: '40px',
            border: '1px solid rgba(136,136,170,0.3)',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px',
          }}
        >
          <div
            style={{
              width: '4px',
              height: '8px',
              borderRadius: '2px',
              background: '#00d4ff',
              animation: 'scrollBob 1.5s ease-in-out infinite',
            }}
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes scrollBob {
          0%,100%{transform:translateY(0);opacity:1}
          50%{transform:translateY(8px);opacity:0.3}
        }
      `}</style>
    </section>
  );
}
