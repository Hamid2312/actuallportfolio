import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * AnimatedSection
 * Wrap any section or component with this to give a smooth fade-in + optional slide-up animation
 * when it comes into viewport.
 * 
 * Props:
 * - children: React elements to wrap
 * - delay: optional delay (in seconds) before animation starts
 * - disableY: boolean, if true disables the slide-up effect (use for HeroSection)
 */
const AnimatedSection = ({ children, delay = 0.2, disableY = false }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const variants = {
    hidden: { 
      opacity: 0,
      y: disableY ? 0 : 40, // If disableY, start at y=0
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
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
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
