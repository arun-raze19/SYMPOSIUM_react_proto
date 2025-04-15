import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      title: 'Our Mission',
      description: 'To foster innovation and collaboration in the tech community through exciting challenges and learning opportunities.',
      icon: '🎯',
    },
    {
      title: 'What We Do',
      description: 'We organize hackathons that bring together talented individuals to solve real-world problems using technology.',
      icon: '🚀',
    },
    {
      title: 'Our Values',
      description: 'Innovation, Collaboration, Learning, and Community are at the heart of everything we do.',
      icon: '💡',
    },
  ];

  const team = [
    {
      name: 'John Doe',
      role: 'Event Director',
      image: 'https://source.unsplash.com/random/300x300/?portrait',
    },
    {
      name: 'Jane Smith',
      role: 'Technical Lead',
      image: 'https://source.unsplash.com/random/300x300/?woman',
    },
    {
      name: 'Mike Johnson',
      role: 'Community Manager',
      image: 'https://source.unsplash.com/random/300x300/?man',
    },
  ];

  return (
    <div className="responsive-section bg-[#123524]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="content-container"
      >
        <h1 className="responsive-heading font-bold text-[#EFE3C2] text-center mb-12 hover-3d">
          About AIDS_HACKBLITZ XXV
        </h1>

        {/* Features Section */}
        <div className="grid-layout mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="responsive-card"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="responsive-text font-bold text-[#EFE3C2] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#85A947]">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <h2 className="responsive-heading font-bold text-[#EFE3C2] text-center mb-12">
          Our Team
        </h2>
        <div className="grid-layout">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="responsive-card"
            >
              <div className="relative h-48 sm:h-56 lg:h-64">
                <img
                  src={member.image}
                  alt={member.name}
                  className="responsive-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123524] to-transparent" />
              </div>
              <div className="responsive-padding">
                <h3 className="responsive-text font-bold text-[#EFE3C2] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#85A947]">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid-layout mt-20">
          {[
            { number: '25', label: 'Events' },
            { number: '1000+', label: 'Participants' },
            { number: '50+', label: 'Projects' },
            { number: '20+', label: 'Partners' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="responsive-heading font-bold text-[#3E7B27] mb-2">
                {stat.number}
              </div>
              <div className="responsive-text text-[#EFE3C2]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About; 