import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * AnimatedSection — Premium scroll-triggered animation wrapper.
 *
 * Props:
 * - direction: 'up' | 'left' | 'right' | 'zoom' | 'fade'
 *   • 'up'    → slides up from below (default)
 *   • 'left'  → slides in from the left
 *   • 'right' → slides in from the right
 *   • 'zoom'  → scales up from 92% with fade
 *   • 'fade'  → pure opacity fade, no movement
 * - delay: seconds (default 0)
 * - duration: seconds (default 0.65)
 * - className: extra classes forwarded to the motion.div
 */
const AnimatedSection = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.42,
  className = '',
}) => {
  const { ref, inView } = useInView({
    threshold: 0.06,
    triggerOnce: true,
    rootMargin: '0px 0px -40px 0px',
  });

  const getHiddenState = () => {
    switch (direction) {
      case 'left':  return { opacity: 0, x: -55, y: 0, scale: 1 };
      case 'right': return { opacity: 0, x:  55, y: 0, scale: 1 };
      case 'zoom':  return { opacity: 0, x: 0,   y: 0, scale: 0.93 };
      case 'fade':  return { opacity: 0, x: 0,   y: 0, scale: 1 };
      default:      return { opacity: 0, x: 0,  y: 50, scale: 1 };  // 'up'
    }
  };

  const variants = {
    hidden: getHiddenState(),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // custom cubic-bezier — smooth & elegant
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
