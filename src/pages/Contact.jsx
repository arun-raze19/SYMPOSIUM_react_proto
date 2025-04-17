import { motion } from 'framer-motion';

const Contact = () => {

  const socialLinks = [
    {
      platform: 'AI Explorer Instagram',
      icon: '📸',
      url: 'https://www.instagram.com/ai_explorer_mec/?igsh=bnM4Y2RicXZsdDlp',
    },
  ];

  const contactInfo = [
    {
      title: 'Faculty Coordinators',
      values: [
        { name: 'Mrs. VASANTHI G', role: 'ASP/AI&DS', phone: '7904456534' },
        { name: 'Mrs. JAYABHARATHI S', role: 'AP/AI&DS', phone: '7558186413' },
      ],
      icon: '👨‍🏫',
    },
    {
      title: 'Student Coordinators',
      values: [
        { name: 'Mr. Arun Kumar V', phone: '9500600673' },
        { name: 'Ms. Harini B', phone: '6381691953' },
        { name: 'Ms. Jayalakshmy M', phone: '8072714897' },
        { name: 'Mr. Ilangovan S', phone: '9790008749' },
        { name: 'Ms. Savitha L', phone: '8148051597' },
      ],
      icon: '🧑‍🎓',
    },
    {
      title: 'Email',
      value: 'aidshackblitzxxv@gmail.com',
      icon: '✉️',
      isEmail: true,
    },
    {
      title: 'Location',
      value: 'Mailam Engineering College, Mailam',
      icon: '📍',
      mapLink: 'https://www.google.com/maps/dir//Taluk,+Tindivanam,+Mailam,+Tamil+Nadu+604304/@12.1177904,79.5338338,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a53444fe6d6f745:0x6f0bf0acc24680ae!2m2!1d79.6162357!2d12.1178026?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
    },
  ];

  return (
    <div className="responsive-section bg-[#123524]" style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch', contain: 'content', willChange: 'scroll-position' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="content-container"
      >
        <h1 className="responsive-heading font-bold text-[#EFE3C2] text-center mb-8 sm:mb-12 hover-3d">
          Contact Us
        </h1>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="responsive-card p-4 sm:p-6 lg:p-8"
          >
            <h2 className="responsive-text font-bold text-[#EFE3C2] mb-4 sm:mb-6">
              Get in Touch
            </h2>
            <div className="space-y-8 sm:space-y-10">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-section">
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                    <div className="text-2xl sm:text-3xl">{info.icon}</div>
                    <h3 className="responsive-text font-bold text-[#EFE3C2]">
                      {info.title}
                    </h3>
                  </div>

                  {info.values ? (
                    <div className="contact-list">
                      {info.values.map((contact, contactIndex) => (
                        <div key={contactIndex} className="contact-item">
                          <div className="contact-name">
                            <span>{contact.name}</span>
                            {contact.role && <span className="contact-role">{contact.role}</span>}
                          </div>
                          <a href={`tel:${contact.phone}`} className="contact-phone">{contact.phone}</a>
                        </div>
                      ))}
                    </div>
                  ) : info.isEmail ? (
                    <a href={`mailto:${info.value}`} className="contact-link email-link">
                      <span>{info.value}</span>
                      <span className="contact-link-icon">✉️</span>
                    </a>
                  ) : info.mapLink ? (
                    <div>
                      <p className="text-[#85A947] text-sm sm:text-base pl-10 mb-3">{info.value}</p>
                      <a href={info.mapLink} target="_blank" rel="noopener noreferrer" className="contact-link map-link">
                        <span>View on Google Maps</span>
                        <span className="contact-link-icon">🗺️</span>
                      </a>
                    </div>
                  ) : (
                    <p className="text-[#85A947] text-sm sm:text-base pl-10">{info.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Social Media Link */}
            <div className="mt-8 sm:mt-10 pt-6 border-t border-[#85A947]/30">
              <h3 className="responsive-text font-bold text-[#EFE3C2] mb-4 sm:mb-5 text-center">
                Follow Us on Instagram
              </h3>
              <div className="flex justify-center">
                <motion.a
                  href={socialLinks[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="instagram-link-button"
                >
                  <span className="text-3xl mr-3">{socialLinks[0].icon}</span>
                  <span className="instagram-text">@ai_explorer_mec</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;