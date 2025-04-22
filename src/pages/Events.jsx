import { motion } from 'framer-motion';
import { useState } from 'react';
import './Events.css';
import eventPoster from '../assets/INTER.png';
import interEventPoster from '../assets/mecevv.png';

const Events = () => {
  const [activeTab, setActiveTab] = useState('intra'); // 'intra' or 'inter'

  // FOR OTHER COLLEGES Data
  const domains = [
    {
      id: 1,
      name: 'Robotics and Automation',
      technologies: 'Deep Learning, Computer Vision, Internet of Things'
    },
    {
      id: 2,
      name: 'Large Language Models',
      technologies: 'NLP, Transformers, AI Applications'
    },
    {
      id: 3,
      name: 'Agri-Tech',
      technologies: 'Machine Learning and Deep Learning'
    },
    {
      id: 4,
      name: 'Healthcare',
      technologies: 'Deep Learning, Predictive Analytics'
    },
    {
      id: 5,
      name: 'Safety and Accessibility',
      technologies: 'Computer Vision, AI'
    }
  ];

  const eventParts = [
    {
      id: 1,
      title: 'Online Event',
      description: 'The preliminary round will be conducted online, where teams will present their innovative solutions based on the chosen theme to a panel of expert judges.',
      rules: 'Teams will present their ideas through a detailed presentation covering problem statement, proposed solution, technology stack, and implementation plan. Each team will have 10 minutes for presentation followed by a Q&A session.'
    },
    {
      id: 2,
      title: 'Offline Event',
      description: 'Qualified teams will advance to this on-campus round where they will demonstrate their functional prototypes. This hands-on session will showcase technical implementation and real-world applicability of solutions.',
      rules: 'Selected teams will demonstrate their working prototypes to judges. Evaluation will be based on innovation, technical implementation, user experience, and alignment with the chosen theme. Prizes will be awarded to the top three teams.'
    }
  ];

  // FOR MEC Data
  const interCollegeGuidelines = [
    'This Linear hackathon provides each team with two problems based on Data Structure and Algorithms (DSA).',
    'Participants must complete the problem within the time limit.'
  ];

  return (
    <div className="min-h-screen bg-[#1A1A1A] pt-20 pb-16 bg-opacity-100" style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch', contain: 'content', willChange: 'scroll-position' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="events-container"
      >
        {/* Event Tabs */}
        <div className="event-tabs">
          <button
            className={`event-tab ${activeTab === 'intra' ? 'active' : ''}`}
            onClick={() => setActiveTab('intra')}
          >
            FOR OTHER COLLEGES
          </button>
          <button
            className={`event-tab ${activeTab === 'inter' ? 'active' : ''}`}
            onClick={() => setActiveTab('inter')}
          >
            FOR MEC
          </button>
        </div>
        <motion.h1
          className="events-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          AI_HACKBLITZ XXV
        </motion.h1>

        {/* FOR OTHER COLLEGES Content */}
        {activeTab === 'intra' && (
          <motion.div
            className="event-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Event Poster */}
            <motion.div
              className="event-poster-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img src={eventPoster} alt="AI_HACKBLITZ XXV Event Poster" className="event-poster" />
            </motion.div>

            {/* Domains Section */}
            <motion.div
              className="domains-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="domains-title">Hackathon Themes</h2>
              <div className="domains-list">
                {domains.map((domain, index) => (
                  <motion.div
                    key={domain.id}
                    className="domain-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="domain-number">{domain.id}.</div>
                    <div className="domain-name">{domain.name}</div>
                    <div className="domain-technologies">{domain.technologies}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Event Criteria Section */}
            <motion.div
              className="criteria-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="domains-title">Event Criteria</h2>
              <div className="criteria-grid">
                <motion.div
                  className="criteria-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="criteria-icon">📍</div>
                  <h3 className="criteria-title">VENUE</h3>
                  <p className="criteria-value">DATA SCIENCE LAB, TECH BLOCK</p>
                </motion.div>

                <motion.div
                  className="criteria-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="criteria-icon">⏱️</div>
                  <h3 className="criteria-title">DURATION</h3>
                  <p className="criteria-value">6 HOURS</p>
                </motion.div>

                <motion.div
                  className="criteria-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="criteria-icon">👥</div>
                  <h3 className="criteria-title">TEAM SIZE</h3>
                  <p className="criteria-value">UP TO 3 MEMBERS</p>
                </motion.div>

                <motion.div
                  className="criteria-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="criteria-icon">💰</div>
                  <h3 className="criteria-title">REGISTRATION FEE</h3>
                  <p className="criteria-value">₹300 PER TEAM</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Event Parts Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <h2 className="domains-title">Event Format</h2>
              <div className="event-parts">
                {eventParts.map((part, index) => (
                  <motion.div
                    key={part.id}
                    className="event-part"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="event-part-title">
                      <span>PART {part.id}</span> - {part.title}
                    </h3>
                    <div className="event-date">
                      {part.id === 1 ? '30-04-2025' : '05-05-2025'}
                    </div>
                    <p className="event-description">{part.description}</p>
                    <div className="event-rules">
                      <h4 className="event-rules-title">Rules and Regulations:</h4>
                      <p className="event-rules-content">{part.rules}</p>
                      {part.id === 1 && (
                        <p className="event-rules-content mt-2">* The part one upload link or time will be updated on updates page</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* FOR MEC Content */}
        {activeTab === 'inter' && (
          <motion.div
            className="event-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Event Poster */}
            <motion.div
              className="event-poster-container inter-event-poster-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img src={interEventPoster} alt="MEC Event Poster" className="event-poster inter-event-poster" />
            </motion.div>

            {/* Event Criteria Section */}
            <motion.div
              className="criteria-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="domains-title">Event Criteria</h2>
              <div className="criteria-grid">
                <motion.div
                  className="criteria-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="criteria-icon">📍</div>
                  <h3 className="criteria-title">VENUE</h3>
                  <p className="criteria-value">DATA SCIENCE LAB, TECH BLOCK</p>
                </motion.div>

                <motion.div
                  className="criteria-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="criteria-icon">👥</div>
                  <h3 className="criteria-title">TEAM SIZE</h3>
                  <p className="criteria-value">UP TO 3 MEMBERS</p>
                </motion.div>

                <motion.div
                  className="criteria-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="criteria-icon">💰</div>
                  <h3 className="criteria-title">REGISTRATION FEE</h3>
                  <p className="criteria-value">₹150 PER TEAM</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Guidelines Section */}
            <motion.div
              className="guidelines-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="domains-title">HACKATHON GUIDELINES</h2>
              <div className="guidelines-container">
                <ul className="guidelines-list">
                  {interCollegeGuidelines.map((guideline, index) => (
                    <motion.li
                      key={index}
                      className="guideline-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                    >
                      <span className="guideline-bullet">♦</span>
                      <span className="guideline-text">{guideline}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Events;