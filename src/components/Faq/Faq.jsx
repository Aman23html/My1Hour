import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What makes My1Hour different from other fitness services?",
    answer:
      "We bring certified trainers directly to your home, offering personalized fitness plans tailored to your lifestyle and goals.",
  },
  {
    question: "Do you really come to my home for sessions?",
    answer:
      "Yes! Our trainers travel to your location with all the necessary equipment for a hassle-free workout experience.",
  },
  {
    question: "How can I add nutrition to my current program?",
    answer:
      "Our experts provide customized nutrition advice to complement your workouts and help you achieve faster results.",
  },
  {
    question: "Can I try a session before committing?",
    answer:
      "Absolutely. We offer a free consultation session so you can experience our approach before joining.",
  },
  {
    question: "Are the trainers certified?",
    answer:
      "Yes, all of our trainers are highly qualified and certified in fitness training and nutrition.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <section className="w-11/12 max-w-3xl mx-auto py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#113623] mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {displayedFaqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md border border-gray-200"
          >
            {/* Question */}
            <button
              className="w-full flex justify-between items-center px-5 py-4 text-left"
              onClick={() => toggleFaq(index)}
            >
              <span className="text-lg font-medium text-[#0d0d0d]">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="w-6 h-6 text-[#469d59]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-500" />
              )}
            </button>

            {/* Answer */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-5 pb-4 text-gray-700"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Show More / Show Less */}
      {faqs.length > 3 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 bg-[#113623] text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-[#0d2a1a] transition"
          >
            {showAll ? "See Less" : "See More"}
            {showAll ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default Faq;
