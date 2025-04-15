import { motion } from 'framer-motion';

const Updates = () => {
  const updates = [
    {
      id: 1,
      date: "2024-03-20",
      title: "Registration Open",
      description: "Registration for AIDS_HACKBLITZ XXV is now open! Early bird registrations get special benefits.",
      category: "Registration"
    },
    {
      id: 2,
      date: "2024-03-18",
      title: "New Event Categories",
      description: "Exciting new categories added for this year's hackathon. Check out the events page for more details!",
      category: "Events"
    },
    {
      id: 3,
      date: "2024-03-15",
      title: "Workshop Schedule",
      description: "Pre-hackathon workshops schedule has been released. Don't miss out on these learning opportunities!",
      category: "Workshops"
    },
    {
      id: 4,
      date: "2024-03-10",
      title: "Sponsors Announcement",
      description: "We're excited to announce our sponsors for this year's hackathon. Major tech companies are joining us!",
      category: "Announcements"
    }
  ];

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
    <div className="min-h-screen bg-[#123524] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Latest Updates
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {updates.map((update) => (
            <motion.div
              key={update.id}
              variants={itemVariants}
              className="bg-[#1a472a]/30 backdrop-blur-sm rounded-lg p-6 border border-[#85A947]/30 hover:border-[#85A947] transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm text-[#EFE3C2]/70">{update.date}</span>
                <span className="px-3 py-1 bg-[#85A947]/20 rounded-full text-xs text-[#EFE3C2]">
                  {update.category}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-[#EFE3C2]">
                {update.title}
              </h3>
              
              <p className="text-[#EFE3C2]/80">
                {update.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 px-4 py-2 bg-[#85A947]/20 hover:bg-[#85A947]/30 rounded-md text-sm text-[#EFE3C2] transition-all duration-300"
              >
                Read More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Updates; 