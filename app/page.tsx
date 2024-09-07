"use client";

import Footer from "@/components/Footer";
import { HeroSection } from "@/components/hero-section";
import { ProjectShowcase } from "@/components/project-showcase";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  // Create refs for each section
  const heroRef = useRef(null);
  const showcaseRef = useRef(null);
  const footerRef = useRef(null);

  // Track when the sections are in view
  const isHeroInView = useInView(heroRef, { once: true });

  const isShowcaseInView = useInView(showcaseRef, { once: false });

  const isFooterInView = useInView(footerRef, { once: true });

  return (
    <>
      {/* Animate HeroSection when in view */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <HeroSection />
      </motion.div>

      {/* Animate ProjectShowcase when in view */}
      <motion.div
        ref={showcaseRef}
        initial={{ opacity: 0, y: 50 }}
        animate={
          isShowcaseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
        }
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ProjectShowcase />
      </motion.div>

      {/* Animate Footer when in view */}
      <motion.div
        ref={footerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isFooterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Footer />
      </motion.div>
    </>
  );
}
