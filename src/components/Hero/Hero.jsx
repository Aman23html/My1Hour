import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { assets } from '../../assets/assets';

const Hero = () => {
  // Array of background images
  const images = [
    assets.landing1,
    assets.landing2,
    assets.landing3,
    assets.landing4
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change background every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative flex flex-col items-center justify-center h-screen px-6 py-8 text-center gap-10 overflow-hidden">
      
      {/* Background Slideshow */}
      <div className="absolute inset-0 w-full h-full ">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-['Dela_Gothic_One'] text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug max-w-4xl"
        >
          Fitness delivered at your <br className="hidden sm:block" />
          doorstep with just{" "}
          <div>
            <span className="text-[#4db76a]">1 Hour</span> a day!
          </div>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 max-w-2xl text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed font-sora"
        >
          My1Hour brings a <span className="font-semibold text-white">strength trainer</span>, a{" "}
          <span className="font-semibold text-white">yoga instructor</span>, and a{" "}
          <span className="font-semibold text-white">diet expert</span> – all to your home. <br />
          Just <span className="text-[#4db76a] font-bold">1 hour a day</span>, personalized to your body & schedule.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 sm:mt-10"
        >
          <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#4db76a] text-white text-base sm:text-lg font-medium rounded-2xl shadow-xl shadow-[#0d7e467d] hover:bg-[#3d9e59] transition-all">
            Start Your Journey
            <img
              className="w-5 h-5 sm:w-6 sm:h-6"
              alt="Arrow right"
              src="https://c.animaapp.com/meodvawgDVDguU/img/arrow-right.svg"
            />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero;
