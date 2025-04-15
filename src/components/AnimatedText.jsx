import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const AnimatedText = ({ text, className = '', delay = 0 }) => {
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`${className} hover-3d text-effect`}
      style={{
        textShadow: '0 0 10px rgba(133, 169, 71, 0.5), 0 0 20px rgba(133, 169, 71, 0.3)',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      {text}
    </motion.div>
  );
};

export default AnimatedText; 