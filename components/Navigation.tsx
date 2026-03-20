'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Domain', href: '#domain' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Skills', href: '#skills' },
  { label: 'Publications', href: '#publications' },
  { label: 'Education', href: '#education' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);

      // Scroll spy
      const sections = NAV_ITEMS.map(n => n.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress line */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '2px',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #00d4ff, #7b5ea7)',
          zIndex: 1000,
          boxShadow: '0 0 8px rgba(0,212,255,0.6)',
          transition: 'width 0.1s',
        }}
      />

      {/* Desktop nav */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 right-0 z-50 hidden md:flex"
        style={{
          padding: '0 40px',
          height: '64px',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled ? 'rgba(5,5,8,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.3rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #00d4ff, #7b5ea7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            cursor: 'pointer',
            border: 'none',
            background2: 'none',
          } as React.CSSProperties}
        >
          AK
        </button>

        <div style={{ display: 'flex', gap: '4px' }}>
          {NAV_ITEMS.map(item => {
            const isActive = active === item.href.slice(1);
            return (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="nav-item"
                data-active={isActive}
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '6px 14px',
                  borderRadius: '100px',
                  border: isActive ? '1px solid rgba(0,212,255,0.4)' : '1px solid transparent',
                  color: isActive ? '#00d4ff' : 'rgba(200,210,235,0.9)',
                  background: isActive ? 'rgba(0,212,255,0.05)' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <span style={{ position: 'relative', zIndex: 1 }}>{item.label}</span>
              </button>
            );
          })}
        </div>
        <style>{`
          .nav-item::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 100px;
            background: linear-gradient(135deg, rgba(0,212,255,0.18), rgba(123,94,167,0.18));
            opacity: 0;
            transform: scaleX(0.5) scaleY(0.8);
            transition: opacity 0.2s ease, transform 0.2s ease;
          }
          .nav-item:hover::before {
            opacity: 1;
            transform: scaleX(1) scaleY(1);
          }
          .nav-item:hover {
            color: #00d4ff !important;
            border-color: rgba(0,212,255,0.5) !important;
            box-shadow: 0 0 14px rgba(0,212,255,0.25), inset 0 0 10px rgba(0,212,255,0.06) !important;
            text-shadow: 0 0 10px rgba(0,212,255,0.6);
          }
          .nav-item[data-active="true"]::before {
            opacity: 0;
          }
        `}</style>
      </motion.nav>

      {/* Mobile nav trigger */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        onClick={() => setMenuOpen(v => !v)}
        className="fixed top-4 right-4 z-50 flex md:hidden"
        style={{
          width: 44, height: 44,
          borderRadius: '50%',
          background: 'rgba(15,15,26,0.9)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(0,212,255,0.2)',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 5,
          cursor: 'pointer',
        }}
      >
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: 18, height: 1,
            background: '#00d4ff',
            transform: menuOpen
              ? i === 1 ? 'scaleX(0)' : i === 0 ? 'rotate(45deg) translate(4px,4px)' : 'rotate(-45deg) translate(4px,-4px)'
              : 'none',
            transition: 'transform 0.3s ease, opacity 0.3s',
            opacity: menuOpen && i === 1 ? 0 : 1,
          }} />
        ))}
      </motion.button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex md:hidden flex-col items-center justify-center"
            style={{ background: 'rgba(5,5,8,0.97)', backdropFilter: 'blur(40px)' }}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(item.href)}
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '2.5rem',
                  fontWeight: 600,
                  color: '#e8e8f0',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '12px 0',
                  letterSpacing: '-0.02em',
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
