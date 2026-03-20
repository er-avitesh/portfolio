'use client';
import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 40 : 90;
    const MAX_DIST = isMobile ? 100 : 160;

    let W = window.innerWidth;
    let H = document.documentElement.scrollHeight;
    let animId: number;

    const resize = () => {
      W = window.innerWidth;
      H = document.documentElement.scrollHeight;
      canvas.width = W;
      canvas.height = H;
    };
    resize();

    interface Particle {
      x: number; y: number;
      vx: number; vy: number;
      r: number; alpha: number;
    }

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const meshPoints = [
      { x: 0.15, y: 0.1, color: 'rgba(0,212,255,0.07)' },
      { x: 0.85, y: 0.25, color: 'rgba(123,94,167,0.07)' },
      { x: 0.5, y: 0.55, color: 'rgba(0,212,255,0.04)' },
      { x: 0.1, y: 0.8, color: 'rgba(123,94,167,0.06)' },
      { x: 0.9, y: 0.75, color: 'rgba(240,165,0,0.04)' },
    ];

    if (prefersReduced) {
      const grad = ctx.createLinearGradient(0, 0, W, H);
      grad.addColorStop(0, '#050508');
      grad.addColorStop(0.5, '#0a0a14');
      grad.addColorStop(1, '#050508');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
      return;
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#050810';
      ctx.fillRect(0, 0, W, H);

      meshPoints.forEach(mp => {
        const gx = mp.x * W;
        const gy = mp.y * H;
        const radius = Math.min(W, H) * 0.45;
        const radGrad = ctx.createRadialGradient(gx, gy, 0, gx, gy, radius);
        radGrad.addColorStop(0, mp.color);
        radGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = radGrad;
        ctx.fillRect(0, 0, W, H);
      });

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,200,255,${p.alpha * 0.6})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const opacity = (1 - dist / MAX_DIST) * 0.07;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,212,255,${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <>
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Floating gradient orbs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        {/* Cyan orb — top left */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'orbFloat1 18s ease-in-out infinite',
        }} />
        {/* Violet orb — top right */}
        <div style={{
          position: 'absolute',
          top: '5%',
          right: '-10%',
          width: '45vw',
          height: '45vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(123,94,167,0.08) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'orbFloat2 22s ease-in-out infinite',
        }} />
        {/* Gold orb — bottom right */}
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '35vw',
          height: '35vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(240,165,0,0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'orbFloat3 26s ease-in-out infinite',
        }} />
        {/* Cyan orb — bottom left */}
        <div style={{
          position: 'absolute',
          bottom: '-5%',
          left: '10%',
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)',
          filter: 'blur(90px)',
          animation: 'orbFloat4 20s ease-in-out infinite',
        }} />
        {/* Violet orb — mid center */}
        <div style={{
          position: 'absolute',
          top: '40%',
          left: '35%',
          width: '30vw',
          height: '30vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(123,94,167,0.04) 0%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'orbFloat5 30s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(3%, 5%) scale(1.05); }
          66% { transform: translate(-2%, 3%) scale(0.97); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-4%, 6%) scale(1.08); }
          66% { transform: translate(2%, -3%) scale(0.95); }
        }
        @keyframes orbFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-5%, -4%) scale(1.1); }
        }
        @keyframes orbFloat4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(4%, -6%) scale(1.06); }
          70% { transform: translate(-2%, 3%) scale(0.96); }
        }
        @keyframes orbFloat5 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(6%, 4%) scale(1.12); }
        }
      `}</style>
    </>
  );
}
