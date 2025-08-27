import React from "react";
import { motion } from "framer-motion";

const FreeConsult = () => {
  return (
    <section className="relative py-16 px-6 bg-[#469d59] rounded-2xl shadow-lg text-center overflow-hidden max-w-[70%] m-10 mx-auto">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-snug mb-4"
      >
        Ready to Start Your Fitness Journey?
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-white font-medium mb-10 max-w-3xl mx-auto"
      >
        Join us today and experience the difference our personalized approach makes
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        {/* Book Free Consultation */}
        <motion.button
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-3 bg-[#4db76a] text-white font-medium text-lg rounded-full shadow-lg shadow-green-900/30"
        >
          Book Free Consultation
        </motion.button>

        {/* View All Programs */}
        <motion.button
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-3 bg-white text-[#113623] border border-[#6ab18d] font-medium text-lg rounded-full shadow-md"
        >
          View All Programs
        </motion.button>
      </div>
    </section>
  );
};

export default FreeConsult;
