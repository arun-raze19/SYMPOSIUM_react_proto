import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const socialLinks = [
    {
      platform: 'Twitter',
      icon: '🐦',
      url: '#',
    },
    {
      platform: 'LinkedIn',
      icon: '💼',
      url: '#',
    },
    {
      platform: 'Instagram',
      icon: '📸',
      url: '#',
    },
    {
      platform: 'GitHub',
      icon: '👨‍💻',
      url: '#',
    },
  ];

  const contactInfo = [
    {
      title: 'Email',
      value: 'contact@aidshackblitz.com',
      icon: '✉️',
    },
    {
      title: 'Phone',
      value: '+1 (555) 123-4567',
      icon: '📱',
    },
    {
      title: 'Location',
      value: '123 Tech Street, Innovation City',
      icon: '📍',
    },
  ];

  return (
    <div className="responsive-section bg-[#123524]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="content-container"
      >
        <h1 className="responsive-heading font-bold text-[#EFE3C2] text-center mb-8 sm:mb-12 hover-3d">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="responsive-card p-4 sm:p-6 lg:p-8"
          >
            <h2 className="responsive-text font-bold text-[#EFE3C2] mb-4 sm:mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="responsive-text block text-[#EFE3C2] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="responsive-input w-full"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="responsive-text block text-[#EFE3C2] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="responsive-input w-full"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label className="responsive-text block text-[#EFE3C2] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="responsive-input w-full"
                  placeholder="Subject"
                  required
                />
              </div>
              <div>
                <label className="responsive-text block text-[#EFE3C2] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="responsive-input w-full h-24 sm:h-32"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="responsive-button w-full sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="responsive-card p-4 sm:p-6 lg:p-8"
          >
            <h2 className="responsive-text font-bold text-[#EFE3C2] mb-4 sm:mb-6">
              Get in Touch
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-xl sm:text-2xl">{info.icon}</div>
                  <div>
                    <h3 className="responsive-text font-bold text-[#EFE3C2]">
                      {info.title}
                    </h3>
                    <p className="text-[#85A947] text-sm sm:text-base">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="mt-6 sm:mt-8">
              <h3 className="responsive-text font-bold text-[#EFE3C2] mb-3 sm:mb-4">
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="responsive-button text-sm sm:text-base"
                  >
                    {social.platform}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact; 