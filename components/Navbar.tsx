"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export function CenteredNavBar() {
  const navItems = ["About", "Projects", "Contact"];

  // Add smooth scrolling behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-4 left-[10%] sm:left-[30%] lg:left-[40%] transform -translate-x-1/2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full px-4 py-2 z-50 shadow-md"
      >
        <ul className="flex justify-center space-x-4">
          {navItems.map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll(item.toLowerCase())}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-base font-medium rounded-full hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
}
