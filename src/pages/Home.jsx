import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A1A1A] p-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        <AnimatedText
          text="MAILAM Engineering College"
          className="text-3xl md:text-4xl font-bold text-[#85A947]"
          delay={0.2}
        />
        <div className="space-y-2">
          <AnimatedText
            text="(Approved by AICTE, New Delhi, Affiliated to Anna University, Chennai"
            className="text-base md:text-lg text-[#85A947]"
            delay={0.4}
          />
          <AnimatedText
            text="Accredited by NAAC with 'A' Grade & TATA Consultancy Services)"
            className="text-base md:text-lg text-[#85A947]"
            delay={0.6}
          />
        </div>
        <AnimatedText
          text="AIDS_HACKBLITZ XXV"
          className="text-4xl md:text-6xl font-bold text-[#EFE3C2]"
          delay={0.8}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-[#3E7B27] text-[#EFE3C2] rounded-lg text-lg font-semibold hover:bg-[#85A947] transition-colors duration-300"
        >
          Register Now
        </motion.button>
      </div>
    </div>
  );
};

export default Home; 