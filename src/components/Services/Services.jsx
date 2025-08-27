import React from "react";

const services = [
  {
    title: "Strength Training",
    img: "https://c.animaapp.com/meodvawgDVDguU/img/rectangle-54.png",
    icon: "https://c.animaapp.com/meodvawgDVDguU/img/group-1.png",
    desc: "For busy professionals, seniors & prenatal/postnatal mothers—1:1 certified trainer sessions to go from zero fitness to gym-ready.",
  },
  {
    title: "Yoga Session",
    img: "https://c.animaapp.com/meodvawgDVDguU/img/rectangle-54-1.png",
    icon: "https://c.animaapp.com/meodvawgDVDguU/img/group-1-1.png",
    desc: "For adults, kids, seniors & prenatal/postnatal mothers—Hatha, Vinyasa, Ashtanga & more at home for stress relief, flexibility, and mindfulness.",
  },
  {
    title: "Nutrition Consultation",
    img: "https://c.animaapp.com/meodvawgDVDguU/img/rectangle-54-2.png",
    icon: "https://c.animaapp.com/meodvawgDVDguU/img/group-1-2.png",
    desc: "Personalised consultation by 20+ years experienced nutritionist including habit-based online plans for PCOS, menopause & lasting health.",
  },
];

const Services = () => {
  return (
    <section className="relative py-16 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <h2 className="text-center font-['Dela_Gothic_One'] text-3xl md:text-4xl text-[#113623] mb-12">
        Services We Offer
      </h2>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className="flex flex-col bg-white rounded-2xl border border-[#6ab18d] shadow-md overflow-hidden hover:shadow-lg transition-all"
          >
            {/* Image */}
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-44 object-cover rounded-t-2xl"
            />

            {/* Content */}
            <div className="flex flex-col items-center p-6 -mt-8">
              <img src={s.icon} alt="icon" className="w-12 h-12 mb-3" />
              <h3 className="text-xl font-semibold font-poppins text-black mb-3 text-center">
                {s.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700 text-center font-montserrat">
                {s.desc}
              </p>
              <button className="mt-4 text-[#4db76a] font-semibold text-sm md:text-base hover:underline">
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="mt-16 max-w-4xl mx-auto bg-[#469d59] text-center text-white rounded-2xl py-10 px-6 shadow-lg">
        <h3 className="text-2xl md:text-3xl font-['Dela_Gothic_One'] mb-4">
          Combine Services. Multiply Results.
        </h3>
        <p className="text-lg md:text-xl text-[#ffcccc]">content</p>
        <button className="mt-6 bg-white text-[#469d59] font-medium py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition">
          Read More
        </button>
      </div>
    </section>
  );
};

export default Services;
