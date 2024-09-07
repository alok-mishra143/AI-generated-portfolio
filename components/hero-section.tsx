"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import { CenteredNavBar } from "./Navbar";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Importing React Icons
import { SiLeetcode } from "react-icons/si";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center p-4 bg-gradient-to-br from-gray-950 via-gray-800 to-gray-900 text-white overflow-hidden"
      id="about"
    >
      {/* Navigation */}
      <CenteredNavBar />

      {/* Hero Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-16"
      >
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
        >
          Alok Mishra
        </motion.h1>
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl mb-4 text-gray-300 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Full-Stack Developer
        </motion.h2>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex justify-center space-x-8 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        {[
          {
            href: "https://www.linkedin.com/in/alok-mishra",
            Icon: FaLinkedin,
            color: "text-blue-400",
          },
          {
            href: "https://github.com/alok-mishra143",
            Icon: FaGithub,
            color: "text-gray-300",
          },
          {
            href: "https://leetcode.com/unknown_brain143",
            Icon: SiLeetcode,
            color: "text-orange-500",
          },
        ].map(({ href, Icon, color }, index) => (
          <motion.a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`transition-all duration-300 ${color} hover:opacity-80`}
          >
            <Icon className="w-5 h-5 sm:w-10 sm:h-10" />
          </motion.a>
        ))}
      </motion.div>

      {/* Intro Paragraph */}
      <motion.p
        className="text-lg sm:text-xl md:text-2xl max-w-3xl text-center mb-12 text-gray-300 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        I craft elegant solutions to complex problems, with expertise across the
        full stack. My journey is driven by curiosity, creativity, and a passion
        for building scalable, efficient, and user-friendly applications.
      </motion.p>

      {/* Call to Actions */}
      <motion.div
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.button
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Work
        </motion.button>
        <motion.a
          href="/path-to-your-cv.pdf"
          download
          className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:from-purple-700 hover:to-purple-600 transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="w-5 h-5 mr-2" />
          Download CV
        </motion.a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </motion.div>

      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        ))}
      </div>
    </section>
  );
}
