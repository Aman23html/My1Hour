import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#469d59] text-white relative overflow-hidden">
      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      >
        <div className="w-full h-full bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl"></div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        
        {/* Brand & Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            {/* ✅ Use your navbar logo here */}
            <img
              src="https://c.animaapp.com/meodvawgDVDguU/img/rectangle-1-1.png"
              alt="My1Hour Logo"
              className="w-14 h-14 rounded-lg shadow-md"
            />
            <div>
              <h2 className="text-2xl font-bold">My1Hour</h2>
              <p className="text-sm text-gray-200">Strength, Stretch, Soul</p>
            </div>
          </div>
          <p className="text-gray-100 max-w-sm leading-relaxed">
            Transform your life with our comprehensive fitness approach. Strength,
            Stretch, Soul — everything you need for complete fitness delivered in
            just 1 hour a day.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <MdPhone className="w-6 h-6 text-white" />
              <div>
                <p className="text-lg">+91 92665 511574</p>
                <p className="text-sm text-gray-200">Mon-Sun 6AM-10PM</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MdEmail className="w-6 h-6 text-white" />
              <div>
                <p className="text-lg">support@my1hour.com</p>
                <p className="text-sm text-gray-200">24/7 Support</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MdLocationOn className="w-6 h-6 text-white" />
              <div>
                <p className="text-lg">Gurugram, Haryana</p>
                <p className="text-sm text-gray-200">Home service available</p>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between"
        >
          <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
          <div className="flex gap-6">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-6 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center text-sm text-gray-200 relative z-10">
        <p>© 2024 My1Hour Fitness & Wellness. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
