import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { assets } from "../../assets/assets";

const locations = [
  { name: "Pioneer Park", city: "Gurgaon", img: assets.Here1 },
  { name: "Orchid Island", city: "Gurgaon", img: assets.Here2 },
  { name: "Heritage One", city: "Gurgaon", img: assets.Here3 },
  { name: "Omaxe Nile", city: "Gurgaon", img: assets.Here4 },
  { name: "Oris Court", city: "Gurgaon", img: assets.Here5 },
  { name: "DLF Phase 4", city: "Gurgaon", img: assets.Here6 },
  { name: "Cyber Hub", city: "Gurgaon", img: assets.Here7 },
];

const WeareHere = () => {
  const [active, setActive] = useState(2);
  const intervalRef = useRef(null);

  const next = () => setActive((i) => (i + 1) % locations.length);
  const prev = () => setActive((i) => (i - 1 + locations.length) % locations.length);

  // auto scroll
  useEffect(() => {
    intervalRef.current = setInterval(next, 3500);
    return () => clearInterval(intervalRef.current);
  }, []);

  const pause = () => clearInterval(intervalRef.current);
  const resume = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 3500);
  };

  const circularDiff = (i) => {
    const n = locations.length;
    let d = i - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  const GAP = 280;
  const DEPTH = 200;
  const VISIBLE = 2;
  const DUR = 0.8;

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#e9faee] via-[#f4fff8] to-[#e9faee] overflow-hidden">
      {/* Floating background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-100/40 via-transparent to-green-200/40"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Heading */}
      <div className="flex items-center justify-center gap-4 mb-14 relative z-10">
        <h2 className="text-4xl md:text-5xl font-dela-gothic text-[#113623] drop-shadow-lg">
          We’re here for you
        </h2>
        <img
          src="https://c.animaapp.com/meodvawgDVDguU/img/location-logo.svg"
          alt=""
          className="w-16 h-16 md:w-24 md:h-24 animate-bounce"
        />
      </div>

      {/* Carousel */}
      <div
        className="relative mx-auto max-w-6xl flex flex-col items-center justify-center z-10"
        style={{ perspective: 1600 }}
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        <div className="relative h-[380px] md:h-[440px] w-full flex items-center justify-center">
          {locations.map((loc, i) => {
            const d = circularDiff(i);
            const hidden = Math.abs(d) > VISIBLE;

            const x = d * GAP;
            const z = -Math.abs(d) * DEPTH;
            const scale = d === 0 ? 1.15 : Math.abs(d) === 1 ? 0.85 : 0.7;
            const rotateY = d === 0 ? 0 : d < 0 ? 40 : -40;
            const opacity = hidden ? 0 : 1;
            const zIndex = 100 - Math.abs(d);

            return (
              <motion.div
                key={loc.name + i}
                className={`absolute rounded-2xl overflow-hidden shadow-2xl border ${
                  d === 0 ? "border-green-500/60 shadow-green-300/50" : "border-transparent"
                }`}
                style={{
                  width: 250,
                  height: 370,
                  backgroundImage: `url(${loc.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: d === 0 ? "brightness(1)" : "brightness(0.7) blur(1px)",
                }}
                animate={{
                  x,
                  z,
                  scale,
                  rotateY,
                  opacity,
                  zIndex,
                }}
                transition={{ duration: DUR, type: "spring", stiffness: 120, damping: 18 }}
              >
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: d === 0 ? 1 : 0.6, y: d === 0 ? 0 : 20 }}
                  transition={{ duration: 0.6 }}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[85%]"
                >
                  <div
                    className={`rounded-lg px-4 py-3 text-center text-white backdrop-blur-sm ${
                      d === 0 ? "bg-black/50" : "bg-black/30"
                    }`}
                  >
                    <h3 className="font-semibold leading-tight text-lg">{loc.name}</h3>
                    <p className="text-xs opacity-90">{loc.city}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Arrows */}
        <div className="flex gap-6 mt-8">
          <button
            onClick={prev}
            className="grid place-items-center w-12 h-12 rounded-full bg-[#1fa65a] text-white shadow-xl hover:scale-110 transition"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            className="grid place-items-center w-12 h-12 rounded-full bg-[#1fa65a] text-white shadow-xl hover:scale-110 transition"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 mt-6">
          {locations.map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-green-400"
              animate={{
                scale: i === active ? 1.4 : 1,
                opacity: i === active ? 1 : 0.4,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeareHere;
