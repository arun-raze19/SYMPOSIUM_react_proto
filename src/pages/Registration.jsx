import { useState } from 'react';
import { motion } from 'framer-motion';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    teamName: '',
    teamSize: '1',
    experience: 'beginner',
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

  return (
    <div className="responsive-section bg-[#123524]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="content-container max-w-2xl"
      >
        <h1 className="responsive-heading font-bold text-[#EFE3C2] text-center mb-12 hover-3d">
          Register Now
        </h1>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="responsive-card space-y-6"
        >
          <div>
            <label className="block responsive-text text-[#EFE3C2] mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="responsive-input"
              required
            />
          </div>

          <div>
            <label className="block responsive-text text-[#EFE3C2] mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="responsive-input"
              required
            />
          </div>

          <div>
            <label className="block responsive-text text-[#EFE3C2] mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="responsive-input"
              required
            />
          </div>

          <div>
            <label className="block responsive-text text-[#EFE3C2] mb-2">
              Team Name
            </label>
            <input
              type="text"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              className="responsive-input"
              required
            />
          </div>

          <div>
            <label className="block responsive-text text-[#EFE3C2] mb-2">
              Team Size
            </label>
            <select
              name="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              className="responsive-input"
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div>
            <label className="block responsive-text text-[#EFE3C2] mb-2">
              Experience Level
            </label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="responsive-input"
              required
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="responsive-button bg-[#3E7B27] text-[#EFE3C2] hover-3d"
          >
            Submit Registration
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Registration; 