import React from 'react';
import { motion } from 'framer-motion';
import VideoPlayer from './VideoPlayer.jsx';

const NewHero = () => {
  const videoSrc = "https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      
      {/* Background Video Container */}
      <div className="absolute bottom-[35vh] w-full h-[80vh] z-0">
        <VideoPlayer src={videoSrc} />
      </div>

      {/* Hero Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl text-center flex flex-col items-center"
      >
        {/* Badges */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-10">
          {["React", "Node.js", "Tailwind"].map((tech) => (
            <div key={tech} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-white/60">
              Integrated with {tech}
            </div>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9] mb-8"
        >
          Where Innovation <br/> Meets Execution
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          variants={itemVariants}
          className="max-w-2xl text-gray-400 text-lg md:text-xl mb-12 font-medium"
        >
          Building high-performance digital experiences through rapid testing, 
          precise deployment, and clean architecture.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
          <button className="px-10 py-4 bg-black border border-white text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all">
            Get Started for Free
          </button>
          <button className="px-10 py-4 bg-white/5 border border-white/10 backdrop-blur-xl text-white font-bold rounded-xl hover:bg-white/10 transition-all">
            Let's Get Connected
          </button>
        </motion.div>
      </motion.div>

      {/* Static Logo Marquee */}
      <div className="absolute bottom-12 w-full px-12">
        <div className="flex justify-between items-center opacity-40 grayscale gap-8 overflow-hidden">
          {["Vercel", "GitHub", "Stripe", "Next.js", "Framer"].map(logo => (
            <span key={logo} className="text-xl font-bold tracking-tighter text-white">{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewHero;
