import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Convenience",
    desc: "Get expert guidance without leaving your home, saving time and effort.",
    icon: "https://c.animaapp.com/meodvawgDVDguU/img/depth-8--frame-0-3.svg",
  },
  {
    title: "Complementing Programs",
    desc: "Integrate strength training, yoga, and nutrition for a balanced and effective approach.",
    icon: "https://c.animaapp.com/meodvawgDVDguU/img/depth-8--frame-0-5.svg",
  },
  {
    title: "Coordination",
    desc: "Seamless coordination between trainers and nutritionists for a cohesive fitness journey.",
    icon: "https://c.animaapp.com/meodvawgDVDguU/img/depth-8--frame-0.svg",
  },
  {
    title: "Certified Experts",
    desc: "Work with certified trainers and nutritionists dedicated to your success.",
    icon: "https://c.animaapp.com/meodvawgDVDguU/img/depth-8--frame-0-1.svg",
  },
  {
    title: "Personalized Approach",
    desc: "Customized fitness and nutrition approach designed for your unique goals.",
    icon: "https://c.animaapp.com/meodvawgDVDguU/img/depth-8--frame-0-4.svg",
  },
  {
    title: "Monitoring",
    desc: "Track your progress and receive ongoing support to stay motivated and achieve results.",
    icon: "https://c.animaapp.com/meodvawgDVDguU/img/depth-8--frame-0-2.svg",
  },
];

// Variants for staggered animation (cards come from alternating sides)
const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -80 : 80, // alternate left/right
    rotate: i % 2 === 0 ? -5 : 5,
  }),
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#113623] text-center mb-16"
        >
          Why Choose Us
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {features.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                transition: { type: "spring", stiffness: 200 },
              }}
              className="rounded-2xl border border-[#6ab18d]/40 backdrop-blur-lg bg-white shadow-lg hover:shadow-2xl p-6 flex flex-col items-center text-center"
            >
              <motion.img
                src={item.icon}
                alt={item.title}
                className="h-14 mb-4"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 250 }}
              />
              <h3 className="text-xl font-semibold text-[#113623] mb-2">
                {item.title}
              </h3>
              <p className="text-[#4c7058] text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
