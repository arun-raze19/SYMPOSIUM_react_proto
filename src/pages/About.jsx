import { motion } from 'framer-motion';

const About = () => {
  const team = [
    {
      name: 'Dr. S. ARTHEESWARI',
      role: 'Professor and Head of Department - AI&DS',
      description: 'Leading the department with a vision to foster innovation and excellence in AI education and research.',
    },
    {
      name: '👨‍🏫 Faculty Coordinators',
      role: 'Technical Mentors',
      description: 'Our dedicated faculty members provide guidance and support throughout the hackathon, sharing their expertise in various domains of AI.',
      contacts: [
        { name: 'Mrs. VASANTHI G', role: 'ASP/AI&DS', phone: '7904456534' },
        { name: 'Mrs. JAYABHARATHI S', role: 'AP/AI&DS', phone: '7558186413' },
      ],
    },
    {
      name: '🧑‍🎓 Student Coordinators',
      role: 'Event Management Team',
      description: 'A passionate team of students working behind the scenes to ensure a seamless and enriching hackathon experience for all participants.',
      contacts: [
        { name: 'Mr. Arun Kumar V', phone: '9500600673' },
        { name: 'Ms. Harini B', phone: '6381691953' },
        { name: 'Ms. Jayalakshmy M', phone: '8072714897' },
        { name: 'Mr. Ilangovan S', phone: '9790008749' },
        { name: 'Ms. Savitha L', phone: '8148051597' },
      ],
    },
  ];

  return (
    <div className="responsive-section bg-[#123524]" style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch', contain: 'content', willChange: 'scroll-position' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="content-container"
      >
        <h1 className="responsive-heading font-bold text-[#EFE3C2] text-center mb-8 hover-3d">
          About AI_HACKBLITZ XXV
        </h1>

        {/* Welcome Message Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="welcome-message-container mb-16"
        >
          <div className="welcome-card">
            <div className="welcome-content">
              <div className="welcome-text">
                <h2 className="welcome-heading">Welcome Message</h2>
                <div className="welcome-message">
                  <p>Welcome to the dynamic and innovative Hackathon AI_HACKBLITZ-XXV at Mailam Engineering College! It is with immense pleasure that I extend my warm greetings to all our aspiring engineers.</p>
                  <p>Beyond technical expertise, we cultivate ethical and responsible AI practitioners. You'll delve into the critical questions surrounding AI and its impact on society, developing the ethical compass to navigate this new landscape.</p>
                </div>
                <div className="welcome-signature">
                  <p className="signature-name">Dr. S. ARTHEESWARI</p>
                  <p className="signature-title">Professor and Head of Department- AI&DS</p>
                </div>
              </div>
              <div className="welcome-image-container">
                <img
                  src="/src/assets/hod.jpg"
                  alt="Dr. S. ARTHEESWARI - Head of Department"
                  className="welcome-image"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <h2 className="responsive-heading font-bold text-[#EFE3C2] text-center mb-12">
          Our Team
        </h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="team-card"
            >
              <div className="team-card-content">
                <h3 className="team-member-name">
                  {member.name}
                </h3>
                <p className="team-member-role">{member.role}</p>
                <div className="team-member-divider"></div>
                <p className="team-member-description">{member.description}</p>

                {member.contacts && (
                  <div className="team-member-contacts">
                    {member.contacts.map((contact, contactIndex) => (
                      <div key={contactIndex} className="contact-item">
                        <div className="contact-info">
                          <span className="contact-name">{contact.name}</span>
                          {contact.role && <span className="contact-role">{contact.role}</span>}
                        </div>
                        <span className="contact-phone">{contact.phone}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;