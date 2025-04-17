import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom';
import './ResponsiveText.css';
import '../components/CandyButton.css';

const Home = () => {
  return (
    <div className="home-container" style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch', contain: 'content', willChange: 'scroll-position' }}>
      <div className="home-content">
        <div className="college-name-container">
          <div className="college-logo-name-container">
            <motion.div
              className="mec-logo-container-left"
              initial={{ opacity: 0, x: -30, scale: 0.8, rotateY: 30 }}
              animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.1, type: 'spring', stiffness: 100 }}
              whileHover={{
                scale: 1.1,
                rotateY: 15,
                filter: 'brightness(1.3) drop-shadow(0 0 15px rgba(133, 169, 71, 0.9))'
              }}
            >
              <img
                src="/src/assets/mec.png"
                alt="MEC Logo"
                className="mec-logo-image-left"
              />
            </motion.div>

            <motion.div
              className="college-name-main text-[#85A947]"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                textShadow: '0 0 10px rgba(133, 169, 71, 0.7), 0 0 20px rgba(133, 169, 71, 0.5), 0 0 30px rgba(133, 169, 71, 0.3)',
                transformStyle: 'preserve-3d',
                transform: 'translateZ(20px)',
              }}
            >
              MAILAM
            </motion.div>
          </div>

          <motion.div
            className="college-name-secondary text-[#85A947]"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.05, y: -5 }}
            style={{
              textShadow: '0 0 10px rgba(133, 169, 71, 0.7), 0 0 20px rgba(133, 169, 71, 0.5), 0 0 30px rgba(133, 169, 71, 0.3)',
              transformStyle: 'preserve-3d',
            }}
          >
ENGINEERING COLLEGE
          </motion.div>

          <div className="approval-text-container">
            <motion.div
              className="approval-text text-[#85A947]"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 0.7, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 90 }}
            >
              (Approved by AICTE, New Delhi, Affiliated to Anna University, Chennai
            </motion.div>

            <motion.div
              className="approval-text text-[#85A947]"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 0.7, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.6, type: 'spring', stiffness: 90 }}
            >
              Accredited by NAAC with 'A' Grade & TATA Consultancy Services)
            </motion.div>
          </div>
        </div>

        <div className="department-container">
          <motion.div
            className="department-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 100 }}
          >
            DEPARTMENT OF ARTIFICIAL INTELLIGENCE AND DATA SCIENCE
          </motion.div>
          <motion.div
            className="presents-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, type: 'spring', stiffness: 100 }}
          >
            PRESENTS
          </motion.div>
          <div className="hackathon-title-container">
            <motion.div
              className="hackathon-title"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.8, type: 'spring', stiffness: 80 }}
            >
              AI_HACKBLITZ XXV
            </motion.div>
          </div>
        </div>


        <div className="register-button-container">
          <Link to="/loading-redirect" style={{ textDecoration: 'none' }}>
            <div className="candy-btn btn-candy-12">
              <span>Register Now</span>
              <span>Register Now</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;