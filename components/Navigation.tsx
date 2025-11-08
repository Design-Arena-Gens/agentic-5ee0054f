"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Portfolio", "Skills", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Designer
        </motion.div>
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary transition-colors"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
