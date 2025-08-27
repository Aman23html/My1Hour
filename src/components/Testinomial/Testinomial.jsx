import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jigar",
    designation: "CEO @ Example",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://c.animaapp.com/meodvawgDVDguU/img/john-smith.png",
  },
  {
    id: 2,
    name: "Shireen",
    designation: "CTO @ Example",
    video: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://c.animaapp.com/meodvawgDVDguU/img/shireen.png",
  },
  {
    id: 3,
    name: "Ankita",
    designation: "Designer @ Example",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://c.animaapp.com/meodvawgDVDguU/img/ankita.png",
  },
  {
    id: 4,
    name: "John Smith",
    designation: "Manager @ Example",
    video: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://c.animaapp.com/meodvawgDVDguU/img/john-smith-1.png",
  },
  {
    id: 5,
    name: "Donna",
    designation: "CEO @ NextLevel",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://c.animaapp.com/meodvawgDVDguU/img/john-smith.png",
  },
  {
    id: 6,
    name: "Roy",
    designation: "CTO @ FutureWorks",
    video: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://c.animaapp.com/meodvawgDVDguU/img/shireen.png",
  },
  {
    id: 7,
    name: "James",
    designation: "Manager @ Buildify",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://c.animaapp.com/meodvawgDVDguU/img/ankita.png",
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // autoplay
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const getVisibleCards = () => {
    const result = [];
    for (let i = -3; i <= 3; i++) {
      result.push((current + i + testimonials.length) % testimonials.length);
    }
    return result;
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-12 px-4 ">
      <h2 className="text-3xl md:text-5xl font-bold font-dela-gothic text-center text-green-950 mb-10">
        Praise that power us
      </h2>

      {/* Desktop carousel */}
      <div className="hidden md:flex items-center justify-center relative">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 bg-white/80 shadow-md p-3 rounded-full hover:bg-white z-10"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Cards */}
        <div className="flex items-center justify-center gap-1 w-full overflow-hidden">
          {getVisibleCards().map((idx) => {
            const t = testimonials[idx];
            const distance =
              (idx - current + testimonials.length) % testimonials.length;

            let d = distance;
            if (d > 3) d -= testimonials.length;
            const isActive = d === 0;

            const scaleMap = {
              0: 1,
              1: 0.85,
              2: 0.65,
              3: 0.45,
              "-1": 0.85,
              "-2": 0.65,
              "-3": 0.45,
            };

            const heightMap = {
              0: 460,
              1: 360,
              2: 280,
              3: 200,
              "-1": 360,
              "-2": 280,
              "-3": 200,
            };

            return (
              <motion.div
                key={t.id}
                animate={{
                  scale: scaleMap[d],
                  opacity: isActive ? 1 : 0.6,
                }}
                transition={{ duration: 0.6 }}
                className={`relative  shadow-xl overflow-hidden flex items-center justify-center ${
                  isActive ? "bg-blue-950" : "bg-gray-800"
                }`}
                style={{
                  width: isActive ? 360 : 140,
                  height: heightMap[d],
                }}
              >
                {isActive ? (
                  <div className="flex flex-col w-full h-full">
                    <video
                      src={t.video}
                      poster={t.thumbnail}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3 text-white">
                      <h3 className="font-semibold text-lg">{t.name}</h3>
                      <p className="text-sm text-gray-300">{t.designation}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full relative">
                    <img
                      src={t.thumbnail}
                      alt={t.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-40"
                    />
                    <p className="rotate-90 text-sm font-medium whitespace-nowrap text-white z-10">
                      {t.name}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 bg-white/80 shadow-md p-3 rounded-full hover:bg-white z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Mobile view (only active video full width, swipeable) */}
      <div className="md:hidden w-full flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide">
        {testimonials.map((t, idx) => (
          <div
            key={t.id}
            className="w-full flex-shrink-0 snap-center rounded-xl overflow-hidden shadow-lg border border-gray-700 bg-black"
          >
            <video
              src={t.video}
              poster={t.thumbnail}
              autoPlay={idx === current}
              muted
              loop
              playsInline
              className="w-full h-[400px] object-cover"
            />
            <div className="p-4  text-white">
              <h3 className="font-semibold text-lg">{t.name}</h3>
              <p className="text-sm text-gray-400">{t.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
