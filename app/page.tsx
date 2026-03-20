'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import SplashScreen from '@/components/SplashScreen';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ImpactStrip from '@/components/ImpactStrip';
import ExperienceSection from '@/components/ExperienceSection';
import AchievementsSection from '@/components/AchievementsSection';
import SkillsSection from '@/components/SkillsSection';
import PublicationsSection from '@/components/PublicationsSection';
import EducationSection from '@/components/EducationSection';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

// Load canvas background only client-side
const AnimatedBackground = dynamic(() => import('@/components/AnimatedBackground'), { ssr: false });

export default function HomePage() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      <SplashScreen onDone={() => setSplashDone(true)} />

      <AnimatePresence>
        {splashDone && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Full-viewport animated canvas background */}
            <AnimatedBackground />

            {/* All content sits above the canvas */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Navigation />
              <main>
                <HeroSection />
                <ImpactStrip />
                <ExperienceSection />
                <AchievementsSection />
                <SkillsSection />
                <PublicationsSection />
                <EducationSection />
              </main>
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
