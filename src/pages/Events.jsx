import { motion } from 'framer-motion';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Opening Ceremony',
      date: 'Day 1, 9:00 AM',
      description: 'Kick off the hackathon with inspiring talks and team formation',
      image: 'https://source.unsplash.com/random/800x600/?hackathon',
    },
    {
      id: 2,
      title: 'Workshop: AI/ML',
      date: 'Day 1, 2:00 PM',
      description: 'Learn about the latest trends in Artificial Intelligence and Machine Learning',
      image: 'https://source.unsplash.com/random/800x600/?ai',
    },
    {
      id: 3,
      title: 'Mentoring Sessions',
      date: 'Day 2, 10:00 AM',
      description: 'Get guidance from industry experts on your projects',
      image: 'https://source.unsplash.com/random/800x600/?mentor',
    },
    {
      id: 4,
      title: 'Project Presentations',
      date: 'Day 3, 1:00 PM',
      description: 'Showcase your innovative solutions to the judges',
      image: 'https://source.unsplash.com/random/800x600/?presentation',
    },
    {
      id: 5,
      title: 'Closing Ceremony',
      date: 'Day 3, 5:00 PM',
      description: 'Celebrate the winners and network with participants',
      image: 'https://source.unsplash.com/random/800x600/?celebration',
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
          Event Schedule
        </h1>

        <div className="grid-layout">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="responsive-card"
            >
              <div className="relative h-48 sm:h-56 lg:h-64">
                <img
                  src={event.image}
                  alt={event.title}
                  className="responsive-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123524] to-transparent" />
              </div>
              <div className="responsive-padding">
                <h3 className="responsive-text font-bold text-[#EFE3C2] mb-2">
                  {event.title}
                </h3>
                <p className="text-[#85A947] font-semibold mb-3">{event.date}</p>
                <p className="text-[#EFE3C2]">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Events; 