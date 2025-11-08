"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Brand Identity",
    category: "Branding",
    color: "from-blue-500 to-purple-500",
    icon: "🎯",
  },
  {
    id: 2,
    title: "Digital Illustration",
    category: "Artwork",
    color: "from-pink-500 to-orange-500",
    icon: "🎨",
  },
  {
    id: 3,
    title: "UI/UX Design",
    category: "Interface",
    color: "from-green-500 to-teal-500",
    icon: "📱",
  },
  {
    id: 4,
    title: "Motion Graphics",
    category: "Animation",
    color: "from-yellow-500 to-red-500",
    icon: "🎬",
  },
  {
    id: 5,
    title: "Package Design",
    category: "Product",
    color: "from-indigo-500 to-blue-500",
    icon: "📦",
  },
  {
    id: 6,
    title: "Social Media",
    category: "Marketing",
    color: "from-purple-500 to-pink-500",
    icon: "📸",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="portfolio" className="py-24 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-gray-400">A showcase of my creative work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              <div className={`aspect-square bg-gradient-to-br ${project.color} rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer overflow-hidden`}>
                <div className="text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/80">{project.category}</p>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
