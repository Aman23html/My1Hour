import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Book a Free Trial",
    desc: "Schedule your free trial session.",
    img: "https://c.animaapp.com/meodvawgDVDguU/img/whatsapp-image-2025-08-14-at-13-34-49-c7bd74ea-1-2.png",
  },
  {
    id: "02",
    title: "Personalized Assessment",
    desc: "Receive a personalized fitness and nutrition assessment from our experts.",
    img: "https://c.animaapp.com/meodvawgDVDguU/img/whatsapp-image-2025-08-14-at-13-34-49-c7bd74ea-1-1.png",
  },
  {
    id: "03",
    title: "Start Your Fitness Journey",
    desc: "Begin your tailored program and achieve your fitness goals.",
    img: "https://c.animaapp.com/meodvawgDVDguU/img/whatsapp-image-2025-08-14-at-13-34-49-c7bd74ea-1-2.png",
  },
];

const Arrow = ({ className, path }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 400 200"
    className={`absolute ${className}`}
    initial={{ pathLength: 0 }}
    whileInView={{ pathLength: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.8, ease: "easeInOut" }}
  >
    <motion.path
      d={path}
      stroke="#fff"
      strokeWidth="2"
      strokeDasharray="6 6"
      fill="transparent"
      markerEnd="url(#arrowhead)"
    />
    <defs>
      <marker
        id="arrowhead"
        markerWidth="12"
        markerHeight="8"
        refX="10"
        refY="4"
        orient="auto"
        fill="#fff"
      >
        <polygon points="0 0, 12 4, 0 8" />
      </marker>
    </defs>
  </motion.svg>
);

const HowItWork = () => {
  return (
    <section className="bg-[#469d59] py-20 relative overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-white text-5xl md:text-6xl font-extrabold">
          How It Works
        </h2>
        <p className="text-[#d0d0d0] text-xl mt-4 font-medium">
          Only 3 steps to connect
        </p>
      </motion.div>

      {/* Steps */}
      <div className="relative max-w-6xl mx-auto flex flex-col gap-32">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -120 : 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={step.img}
                alt={step.title}
                className="w-[340px] h-[200px] rounded-3xl object-cover shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-md">
                  <span className="text-xl font-bold text-[#1c3528]">
                    {step.id}
                  </span>
                </div>
              </div>
              <h3 className="text-white text-2xl font-bold mb-3">
                {step.title}
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Arrows positioned like your design */}
        <Arrow
          className="hidden md:block top-[180px] left-[45%] w-[400px] h-[200px]"
          path="M 20 20 C 200 120, 200 -20, 380 80"
        />
        <Arrow
          className="hidden md:block top-[500px] left-[15%] w-[400px] h-[200px]"
          path="M 380 20 C 200 120, 200 -20, 20 100"
        />
      </div>
    </section>
  );
};

export default HowItWork;
