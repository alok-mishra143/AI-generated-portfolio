"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Image from "next/image";
import { TerminalContactForm } from "./terminal-contact-form";

export default function Footer() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const socialLinks = [
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourprofile" },
    { icon: <FaGithub />, url: "https://github.com/yourusername" },
    { icon: <FaTwitter />, url: "https://twitter.com/yourhandle" },
    { icon: <SiLeetcode />, url: "https://leetcode.com/yourusername" },
  ];

  return (
    <>
      <footer
        className="relative mt-20 bg-gradient-to-r from-gray-950 via-gray-800 to-gray-900 py-12 text-white"
        id="contact"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-6 md:space-x-8"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/image.png"
                  alt="Developer Logo"
                  width={60}
                  height={60}
                  className="rounded-full border-4 border-white shadow-lg w-16 h-16"
                />
              </motion.div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white">John Doe</h3>
                <p className="text-base text-gray-300">Full Stack Developer</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-6 md:space-x-8"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition-transform duration-300 transform hover:scale-125"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">
                    {link.url.split(".com/")[0].split("://")[1]}
                  </span>
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
            <motion.div
              className="mt-4 inline-block"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <button
                onClick={() => setIsContactFormOpen(true)}
                className="text-sm text-white hover:text-gray-400 transition-colors duration-300 relative group"
              >
                Get in touch
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </footer>
      <AnimatePresence>
        {isContactFormOpen && (
          <TerminalContactForm onClose={() => setIsContactFormOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
