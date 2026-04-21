import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * AnimatedSection
 * Wrap any section or component with this to give a smooth fade-in + optional slide-up
 * when it comes into viewport.
 *
 * Props:
 * - children: React elements to wrap
 * - delay: optional delay (in seconds) — keep this 0 for all sections to avoid flash
 * - disableY: boolean, if true disables the slide-up effect
 */
const AnimatedSection = ({ children, delay = 0, disableY = false }) => {
  const { ref, inView } = useInView({
    threshold: 0.05,   // trigger earlier — only 5% in view needed
    triggerOnce: true,
    rootMargin: '0px 0px -40px 0px', // fire 40px before it fully enters
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: disableY ? 0 : 20, // reduced from 40 → 20 for snappier feel
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,  // reduced from 0.9 → 0.45 — twice as fast
        delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      // Keep the section taking up space even when invisible so bg shows through
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
