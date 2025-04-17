import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './LoadingRedirect.css';

const LoadingRedirect = () => {
  const [countdown, setCountdown] = useState(3);
  const redirectUrl = 'https://forms.gle/epqgbiNrjpThsHzb7';

  useEffect(() => {
    // Start countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Redirect after countdown reaches 0
          window.location.href = redirectUrl;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup timer on unmount
    return () => clearInterval(timer);
  }, []);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  // 3D title animation
  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: 90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: [0.2, 0.65, 0.3, 0.9],
        staggerChildren: 0.1,
      },
    },
  };

  // Loading spinner animation
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="loading-redirect-container">
      <div className="loading-content">
        <motion.div
          className="redirect-message"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={0}
        >
          <span>Redirecting to our registration page</span>
        </motion.div>

        <motion.div
          className="hang-tight"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={1}
        >
          <span>HANG TIGHT</span>
        </motion.div>

        <motion.div
          className="hackathon-title-3d"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          <span className="title-text">AI_HACKBLITZ-XXV</span>
        </motion.div>

        <motion.div
          className="loading-spinner"
          variants={spinnerVariants}
          animate="animate"
        >
          <div className="spinner-inner"></div>
          <div className="spinner-outer"></div>
        </motion.div>

        <motion.div
          className="countdown"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span>Redirecting in {countdown} seconds...</span>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingRedirect;
