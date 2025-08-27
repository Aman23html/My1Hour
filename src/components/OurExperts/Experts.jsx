import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Experts.css"; // we'll add custom CSS here

const expertsData = [
  {
    name: "Bhaswati",
    role: "Yoga Instructor",
    img: "https://c.animaapp.com/meodvawgDVDguU/img/component-8.png",
    details: (
      <p className="text-sm leading-relaxed text-center">
        Bachelor &amp; Master In Yogic Science
        <br />
        5yrs + Teaching Experience
        <br />
        Expert in Trataka, Yog Nidra, Chakra &amp; Healing Meditation
        <br />
        Corporate, Private &amp; Community Yoga Expert
      </p>
    ),
  },
  {
    name: "Dr. Shaveta",
    role: "Nutritionist",
    img: "https://c.animaapp.com/meodvawgDVDguU/img/component-8-1.png",
    details: (
      <p className="text-sm leading-relaxed text-center">
        20+ years of medical nutrition experience.
        <br />
        Expert in diet planning.
      </p>
    ),
  },
  {
    name: "Ajay",
    role: "Strength Trainer",
    img: "https://c.animaapp.com/meodvawgDVDguU/img/rectangle-60-6.png",
    details: (
      <p className="text-sm leading-relaxed text-center">
        K11 Certified Strength Trainer
        <br />
        Focuses on endurance &amp; performance.
      </p>
    ),
  },
  {
    name: "Narender",
    role: "Strength Trainer",
    img: "https://c.animaapp.com/meodvawgDVDguU/img/component-10.png",
    details: (
      <p className="text-sm leading-relaxed text-center">
        Specializes in functional fitness
        <br />
        and bodybuilding programs.
      </p>
    ),
  },
  {
    name: "Rohit",
    role: "Yoga Instructor",
    img: "https://c.animaapp.com/meodvawgDVDguU/img/component-5.png",
    details: (
      <p className="text-sm leading-relaxed text-center">
        Expert in Hatha &amp; Ashtanga Yoga
        <br />
        10+ years of teaching experience.
      </p>
    ),
  },
  {
    name: "Simran",
    role: "Nutritionist",
    img: "https://c.animaapp.com/meodvawgDVDguU/img/component-6.png",
    details: (
      <p className="text-sm leading-relaxed text-center">
        Clinical dietician with expertise
        <br />
        in weight management &amp; wellness.
      </p>
    ),
  },
];

const ExpertCard = ({ name, role, img, details }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-[220px] h-[300px] perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-500 preserve-3d"
        animate={{ rotateY: flipped ? 180 : 0 }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 rounded-xl shadow-md overflow-hidden card-face bg-cover bg-center flex flex-col justify-end p-4 text-white"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="bg-black/50 rounded-lg p-2">
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-sm">{role}</p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 rounded-xl shadow-md overflow-hidden card-face bg-[#113623] text-white p-4 flex flex-col justify-center items-center"
          style={{ transform: "rotateY(180deg)" }}
        >
          <h3 className="font-bold text-lg mb-2">{name}</h3>
          <div className="overflow-y-auto max-h-[200px] px-1">{details}</div>
        </div>
      </motion.div>
    </div>
  );
};

const Experts = () => {
  return (
    <div className="flex flex-col items-center py-12 bg-white w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* First Special Card */}
        <div className="flex flex-col w-[220px] h-[300px] p-6 rounded-xl border border-[#6ab18d] shadow-md bg-white">
          <h2 className="font-dela text-lg text-[#111611] mb-4">
            Meet Our Experts
          </h2>
          <p className="text-sm text-gray-600 font-semibold">
            Strength Trainers (K11 Certified) <br />
            <br />
            Yoga Trainers (PGs in Yogic Science) <br />
            <br />
            Nutritionists (20+ yrs medical experience)
          </p>
        </div>

        {/* 6 Flipping Expert Cards */}
        {expertsData.map((exp, idx) => (
          <ExpertCard key={idx} {...exp} />
        ))}

        {/* Last Special Card */}
        <div className="flex flex-col w-[220px] h-[300px] p-6 rounded-xl bg-gradient-to-br from-green-400/80 to-green-600/80 text-white shadow-lg justify-between">
          <div>
            <h2 className="text-xl font-bold">Join Our Team</h2>
            <p className="text-sm mt-2">
              This spot is waiting for you. Be the next face of My1Hour.
            </p>
          </div>
          <button className="bg-white text-[#113623] px-4 py-2 rounded-full font-bold shadow-md">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experts;
