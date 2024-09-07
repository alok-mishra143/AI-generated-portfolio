"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Project Alpha",
    description:
      "A cutting-edge web application for managing personal finances.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project-alpha",
    live: "https://project-alpha.example.com",
  },
  {
    title: "Beta App",
    description: "An innovative mobile app for tracking fitness and nutrition.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React Native", "Firebase", "Redux"],
    github: "https://github.com/yourusername/beta-app",
    live: "https://beta-app.example.com",
  },
  {
    title: "Gamma Platform",
    description: "A robust e-commerce platform with advanced analytics.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Vue.js", "Django", "PostgreSQL"],
    github: "https://github.com/yourusername/gamma-platform",
    live: "https://gamma-platform.example.com",
  },
  {
    title: "Delta Dashboard",
    description: "An interactive dashboard for real-time data visualization.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Angular", "Express.js", "MySQL"],
    github: "https://github.com/yourusername/delta-dashboard",
    live: "https://delta-dashboard.example.com",
  },
  {
    title: "Epsilon Chat",
    description: "A feature-rich messaging application with real-time updates.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Svelte", "NestJS", "SQLite"],
    github: "https://github.com/yourusername/epsilon-chat",
    live: "https://epsilon-chat.example.com",
  },
];

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-950 text-white py-20" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-extrabold mb-12 text-center tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`relative bg-gray-800 rounded-lg shadow-lg overflow-hidden group transform transition-transform duration-300 ${
                hoveredIndex !== null && hoveredIndex !== index ? "blur-sm" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={"/image.png"}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-700 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:text-blue-300 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-400 hover:text-green-200 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <motion.button
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold py-3 px-8 rounded-full inline-flex items-center shadow-lg transform transition-all duration-300 hover:scale-105"
            whileTap={{ scale: 0.95 }}
          >
            Explore All Projects
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
