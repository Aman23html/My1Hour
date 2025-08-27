import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sophia, 22",
    role: "CEO @ XYZ Company",
    avatar: "https://via.placeholder.com/64", // placeholder image
    review:
      "Workout has never been this fun! I’m learning more about fitness while gaining overall strength.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael, 28",
    role: "CTO @ FitTech",
    avatar: "https://via.placeholder.com/64",
    review:
      "The best platform to stay consistent with workouts. Really loved the progress tracking features.",
    rating: 4,
  },
  {
    id: 3,
    name: "Ankita, 25",
    role: "Designer @ Healthly",
    avatar: "https://via.placeholder.com/64",
    review:
      "A game-changer! I feel stronger and more confident. Highly recommend to anyone starting out.",
    rating: 5,
  },
];

const GoogleReviews = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto py-16 px-6">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-dela-gothic text-center text-[#113623] mb-12">
        Loved on Google
      </h2>

      {/* Reviews Grid */}
      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="flex flex-col items-center bg-white border border-[#6ab140] rounded-xl shadow-lg p-6 text-center"
          >
            {/* Avatar */}
            <img
              src={r.avatar}
              alt={r.name}
              className="w-16 h-16 rounded-full object-cover mb-4"
            />

            {/* Name */}
            <h3 className="font-semibold text-lg text-gray-900">{r.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{r.role}</p>

            {/* Review Text */}
            <p className="text-gray-700 text-sm mb-4">“{r.review}”</p>

            {/* Rating */}
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < r.rating ? "fill-[#fbbc05] text-[#fbbc05]" : "text-gray-300"
                  }
                />
              ))}
            </div>

            {/* Google Logo */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google"
              className="w-20 mb-2"
            />
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <a
          href="https://www.google.com/search?q=your+business+name+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-[#4285F4] hover:bg-[#357ae8] text-white font-medium shadow-md transition"
        >
          Write a Google Review
        </a>
      </div>
    </div>
  );
};

export default GoogleReviews;
