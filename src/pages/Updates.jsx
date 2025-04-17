import { motion } from 'framer-motion';
import { useState } from 'react';
import './Updates.css';

const Updates = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Empty arrays for each update category
  const allUpdates = [];
  const part1Updates = [];
  const part2Updates = [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="updates-container">
      <div className="updates-content">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="updates-heading"
        >
          Latest Updates
        </motion.h1>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="updates-tabs"
        >
          <button
            onClick={() => setActiveTab('all')}
            className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
          >
            All Updates
          </button>
          <button
            onClick={() => setActiveTab('part1')}
            className={`tab-button ${activeTab === 'part1' ? 'active' : ''}`}
          >
            Part 1 - Online (30.04.2025)
          </button>
          <button
            onClick={() => setActiveTab('part2')}
            className={`tab-button ${activeTab === 'part2' ? 'active' : ''}`}
          >
            Part 2 - Offline (05.05.2025)
          </button>
        </motion.div>

        {/* Updates content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="updates-list"
        >
          {(() => {
            // Determine which updates to show based on active tab
            const updatesToShow =
              activeTab === 'all' ? allUpdates :
              activeTab === 'part1' ? part1Updates :
              part2Updates;

            if (updatesToShow.length > 0) {
              return updatesToShow.map((update) => (
                <motion.div
                  key={update.id}
                  variants={itemVariants}
                  className="update-card"
                >
                  <div className="update-header">
                    <span className="update-date">{update.date}</span>
                    <span className="update-category">
                      {update.category}
                    </span>
                  </div>

                  <h3 className="update-title">
                    {update.title}
                  </h3>

                  <p className="update-description">
                    {update.description}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="update-button"
                  >
                    Read More
                  </motion.button>
                </motion.div>
              ));
            } else {
              // Create a custom message based on the active tab
              let message = '';
              let emoji = '';

              if (activeTab === 'all') {
                message = 'Updates about AI_HACKBLITZ XXV will be posted here soon. Check back regularly for announcements about registration, events, and more!';
                emoji = '📢'; // megaphone
              } else if (activeTab === 'part1') {
                message = 'Updates for Part 1 (Online Event) on 30.04.2025 will be posted here. Stay tuned for information about online presentations and judging criteria.';
                emoji = '💻'; // computer
              } else {
                message = 'Updates for Part 2 (Offline Event) on 05.05.2025 will be posted here. Check back for details about venue, schedule, and prototype demonstrations.';
                emoji = '🌐'; // globe
              }

              return (
                <motion.div
                  variants={itemVariants}
                  className="empty-state"
                >
                  <div className="empty-state-emoji">{emoji}</div>
                  <h3 className="empty-state-title">
                    Stay Tuned for Updates
                  </h3>
                  <p className="empty-state-message">
                    {message}
                  </p>
                </motion.div>
              );
            }
          })()}
        </motion.div>
      </div>
    </div>
  );
};

export default Updates;