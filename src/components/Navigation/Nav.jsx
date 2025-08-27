import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../../assets/assets";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Blogs", path: "/blogs" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky flex justify-center top-0 z-50">
      <div className=" max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-2 absolute">
        {/* Navbar pill */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative flex items-center justify-between gap-3 rounded-lg bg-white shadow-[0_4px_14px_rgba(96,96,96,0.6)] px-3 sm:px-4 md:px-6 h-[56px]"
        >
          {/* Logo + Tagline */}
          <NavLink
            to="/"
            className="flex items-center gap-3 shrink-0 hover:scale-105 transition-transform"
          >
            <motion.img
              src={assets.logo}
              alt="Logo"
              className="w-9 h-9"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <div className="leading-none">
              <div className="font-montserrat font-bold text-[17px] text-black">
                My1Hour
              </div>
              <div className="font-poppins text-[10px] text-gray-500 mt-0.5">
                Strength, Stretch, Soul
              </div>
            </div>
          </NavLink>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8 relative">
            {navLinks.map((l, i) => {
              const isActive = location.pathname === l.path;
              return (
                <motion.div
                  key={l.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  className="relative"
                >
                  <NavLink
                    to={l.path}
                    className={({ isActive }) =>
                      `font-poppins text-[15px] relative transition-colors ${
                        isActive
                          ? "text-green-700 font-medium"
                          : "text-gray-800 hover:text-green-600"
                      }`
                    }
                  >
                    {l.name}
                    {/* Animated underline */}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 -bottom-1 h-[2px] bg-green-700 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                    )}
                  </NavLink>
                </motion.div>
              );
            })}
          </nav>

          {/* CTA (desktop) */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <NavLink
                to="/join"
                className="inline-flex items-center justify-center rounded-md bg-[#419953] px-4 py-2 text-white font-montserrat text-sm font-medium shadow-md hover:bg-green-700 transition"
              >
                Join Our Team
              </NavLink>
            </motion.div>
          </div>

          {/* Hamburger (mobile) */}
          <motion.button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded hover:bg-gray-100"
            whileTap={{ scale: 0.9, rotate: 15 }}
          >
            {!open ? (
              <motion.svg
                key="menu"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </motion.svg>
            ) : (
              <motion.svg
                key="close"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 6l12 12M18 6l-12 12" />
              </motion.svg>
            )}
          </motion.button>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 right-0 top-full mt-2 rounded-lg bg-white shadow-md border border-gray-100 md:hidden"
              >
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                  className="flex flex-col py-2"
                >
                  {navLinks.map((l) => (
                    <motion.div
                      key={l.name}
                      variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                    >
                      <NavLink
                        to={l.path}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `px-4 py-2 font-poppins text-[15px] ${
                            isActive
                              ? "text-green-700 font-medium"
                              : "text-gray-800 hover:text-green-600"
                          }`
                        }
                      >
                        {l.name}
                      </NavLink>
                    </motion.div>
                  ))}
                  <motion.div
                    variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                  >
                    <NavLink
                      to="/join"
                      onClick={() => setOpen(false)}
                      className="m-2 mt-1 rounded-md bg-[#419953] px-4 py-2 text-center text-white font-montserrat text-sm font-medium hover:bg-green-700 transition"
                    >
                      Join Our Team
                    </NavLink>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  );
};

export default Nav;
