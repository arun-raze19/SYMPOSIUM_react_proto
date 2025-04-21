import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom';
import './ResponsiveText.css';
import '../components/CandyButton.css';
import './GlitchEffect.css';
import './AnimatedTextFill.css';
import './TextRevealEffect.css';
import mecDesign from '../assets/mecdesign.png';

const Home = () => {
  return (
    <div className="home-container" style={{
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch',
      contain: 'content',
      willChange: 'scroll-position',
      backgroundColor: 'transparent' // Transparent to show background effects
    }}>
      <div className="home-content" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '10px 0',
        height: '100%'
      }}>
        {/* College Header Section with 3D MEC Design */}
        <div className="college-header" style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '0px',
          perspective: '1500px',
          overflow: 'hidden'
        }}>
          {/* MEC Design with 3D effects and glow */}
          <motion.div
            initial={{ opacity: 0, y: -20, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.2,
              type: 'spring',
              stiffness: 100
            }}
            whileHover={{
              scale: 1.05,
              rotateY: 5
            }}
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(50px)',
              position: 'relative',
              width: '100vw',
              maxWidth: '100vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '-10px',
              marginTop: '0px',
              padding: '0'
            }}
          >
            <img
              src={mecDesign}
              alt="MEC Design"
              className="glow-effect"
              style={{
                width: '100%',
                maxWidth: 'min(100vw, 2000px)',
                height: 'auto',
                transformStyle: 'preserve-3d'
              }}
            />
          </motion.div>
        </div>

        {/* Department Section - Positioned directly below the image */}
        <div style={{
          width: '100%',
          textAlign: 'center',
          marginTop: '-40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '1000px'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <div
              className="glitch-text"
              data-text="DEPARTMENT OF"
              style={{
                color: '#FFFFFF',
                fontSize: 'clamp(0.8rem, 2vw, 1.2rem)',
                fontWeight: 'bold',
                letterSpacing: '0.05em',
                marginBottom: '2px'
              }}
            >
              DEPARTMENT OF
            </div>
            <div
              className="glitch-text"
              data-text="ARTIFICIAL INTELLIGENCE AND DATA SCIENCE"
              style={{
                color: '#FFFFFF',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                fontWeight: 'bold',
                letterSpacing: '0.05em'
              }}
            >
              ARTIFICIAL INTELLIGENCE AND DATA SCIENCE
            </div>
          </motion.div>

          {/* PRESENTS text with reveal effect */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              fontWeight: 'bold',
              fontStyle: 'italic',
              letterSpacing: '0.1em',
              margin: '20px 0'
            }}
          >
            <div className="text-reveal">
              <span>P</span>
              <span>R</span>
              <span>E</span>
              <span>S</span>
              <span>E</span>
              <span>N</span>
              <span>T</span>
              <span>S</span>
            </div>
          </motion.div>

          {/* AI_HACKBLITZ XXV */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 'bold',
              letterSpacing: '0.1em',
              margin: '20px 0 60px 0',
              fontStyle: 'italic',
              transform: 'perspective(800px) rotateX(10deg)'
            }}
          >
            <div className="hackblitz-text-fill">
              AI_HACKBLITZ XXV
            </div>
          </motion.div>
        </div>

        {/* Registration Buttons - Preserving original button styles */}
        <div className="register-button-container">
          <div className="register-buttons-wrapper" style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            marginTop: '20px'
          }}>
            <Link to="/loading-redirect" style={{ textDecoration: 'none' }}>
              <div className="candy-btn btn-candy-12 btn-intra">
                <span>INTRA COLLEGE REGISTRATION</span>
                <span>INTRA COLLEGE REGISTRATION</span>
              </div>
            </Link>

            <Link to="/loading-redirect-mec" style={{ textDecoration: 'none' }}>
              <div className="candy-btn btn-candy-12 btn-mec">
                <span>INTER COLLEGE REGISTRATION</span>
                <span>INTER COLLEGE REGISTRATION</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;