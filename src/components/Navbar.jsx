import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 right-0 h-screen p-8 flex flex-col items-center justify-center">
      <div className="logo mb-8 w-full text-center">AIDS_HACKBLITZ XXV</div>
      <div className="flex flex-col space-y-6 items-center w-full perspective-1000">
        <motion.div
          className="nav-button"
          whileHover={{ scale: 1.05, rotateY: 5 }}
          animate={{ rotateY: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            <span className="button-content">Home</span>
            <span className="button-glow"></span>
          </Link>
        </motion.div>

        <motion.div
          className="nav-button"
          whileHover={{ scale: 1.05, rotateY: 5 }}
          animate={{ rotateY: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/events" className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`}>
            <span className="button-content">Events</span>
            <span className="button-glow"></span>
          </Link>
        </motion.div>

        <motion.div
          className="nav-button"
          whileHover={{ scale: 1.05, rotateY: 5 }}
          animate={{ rotateY: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/registration" className={`nav-link ${location.pathname === '/registration' ? 'active' : ''}`}>
            <span className="button-content">Register</span>
            <span className="button-glow"></span>
          </Link>
        </motion.div>

        <motion.div
          className="nav-button"
          whileHover={{ scale: 1.05, rotateY: 5 }}
          animate={{ rotateY: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/updates" className={`nav-link ${location.pathname === '/updates' ? 'active' : ''}`}>
            <span className="button-content">Updates</span>
            <span className="button-glow"></span>
          </Link>
        </motion.div>

        <motion.div
          className="nav-button"
          whileHover={{ scale: 1.05, rotateY: 5 }}
          animate={{ rotateY: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
            <span className="button-content">About</span>
            <span className="button-glow"></span>
          </Link>
        </motion.div>

        <motion.div
          className="nav-button"
          whileHover={{ scale: 1.05, rotateY: 5 }}
          animate={{ rotateY: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
            <span className="button-content">Contact</span>
            <span className="button-glow"></span>
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar; 