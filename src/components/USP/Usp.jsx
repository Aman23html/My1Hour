import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { value: 70, suffix: "+", label: "Active Clients" },
  { value: 5, suffix: "yrs+", label: "Trainer Experience" },
  { value: 80, suffix: "%", label: "Client Retention" },
];

const Usp = () => {
  return (
    <section className="relative m-10 py-12 px-4 md:px-8 bg-[#419953] rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
      {/* Background Shape Animation */}
      <motion.img
        src="https://c.animaapp.com/meodvawgDVDguU/img/intersect.svg"
        alt="Background shape"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-xl md:text-2xl font-montserrat font-semibold leading-snug"
        >
          Our expert team of strength trainers, yoga instructors, and nutritionists work as{" "}
          <span className="text-[#b9fbc0]">1 unit</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-3 text-base md:text-lg font-medium"
        >
          Creating a unique program where your workouts and meals are perfectly aligned for
          your complete fitness.
        </motion.p>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto bg-white rounded-lg shadow-md p-4 md:p-6"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 * i }}
            className="flex flex-col items-center text-center"
          >
            {/* Animated Counter */}
            <span className="text-2xl md:text-3xl font-bold text-green-700">
              <CountUp start={0} end={s.value} duration={2.5} />{s.suffix}
            </span>
            <span className="text-gray-800 text-sm md:text-base font-poppins">
              {s.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Usp;
