'use client';
import { motion } from 'framer-motion';
import { basics } from '@/lib/resume';

export default function Footer() {
  return (
    <footer style={{
      padding: '60px 24px',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>

        {/* Monogram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '2.5rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #00d4ff, #7b5ea7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {basics.initials}
        </motion.div>

        {/* Contact row */}
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href={`mailto:${basics.email}`} style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '0.72rem',
            color: 'rgba(136,136,170,0.7)',
            textDecoration: 'none',
            letterSpacing: '0.06em',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.target as HTMLAnchorElement).style.color = '#00d4ff'}
          onMouseLeave={e => (e.target as HTMLAnchorElement).style.color = 'rgba(136,136,170,0.7)'}
          >
            {basics.email}
          </a>
          <span style={{ color: 'rgba(136,136,170,0.2)', fontFamily: 'DM Mono, monospace', fontSize: '0.7rem' }}>·</span>
          <a href={`tel:${basics.phone}`} style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '0.72rem',
            color: 'rgba(136,136,170,0.7)',
            textDecoration: 'none',
            letterSpacing: '0.06em',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.target as HTMLAnchorElement).style.color = '#00d4ff'}
          onMouseLeave={e => (e.target as HTMLAnchorElement).style.color = 'rgba(136,136,170,0.7)'}
          >
            {basics.phone}
          </a>
          <span style={{ color: 'rgba(136,136,170,0.2)', fontFamily: 'DM Mono, monospace', fontSize: '0.7rem' }}>·</span>
          <a
            href={basics.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.72rem',
              color: 'rgba(136,136,170,0.7)',
              textDecoration: 'none',
              letterSpacing: '0.06em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.target as HTMLAnchorElement).style.color = '#00d4ff'}
            onMouseLeave={e => (e.target as HTMLAnchorElement).style.color = 'rgba(136,136,170,0.7)'}
          >
            LinkedIn ↗
          </a>
        </div>

        <p style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '0.6rem',
          letterSpacing: '0.1em',
          color: 'rgba(136,136,170,0.3)',
          textAlign: 'center',
        }}>
          {basics.location} · Available for opportunities
        </p>
      </div>
    </footer>
  );
}
