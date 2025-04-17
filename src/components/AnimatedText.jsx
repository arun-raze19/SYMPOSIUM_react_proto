import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const AnimatedText = ({ text, className = '', delay = 0, style = {} }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('text-glow');
          } else {
            entry.target.classList.remove('text-glow');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={textRef}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, delay, type: 'spring', stiffness: 100 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`${className} hover-3d text-effect mx-auto text-center w-full`}
      style={{
        textShadow: '0 0 10px rgba(133, 169, 71, 0.7), 0 0 20px rgba(133, 169, 71, 0.5), 0 0 30px rgba(133, 169, 71, 0.3)',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        display: 'block',
        margin: '0 auto',
        letterSpacing: '2px',
        ...style
      }}
    >
      {text}
    </motion.div>
  );
};

export default AnimatedText;