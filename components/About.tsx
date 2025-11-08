"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate graphics designer with over 5 years of experience creating
              stunning visual experiences. My work combines creativity with technical expertise
              to deliver designs that not only look beautiful but also solve real problems.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              From branding to digital illustrations, I specialize in creating cohesive
              visual identities that resonate with audiences and elevate brands to new heights.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 px-6 py-3 rounded-full border border-primary/30">
                <span className="text-white font-semibold">5+ Years Experience</span>
              </div>
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 px-6 py-3 rounded-full border border-secondary/30">
                <span className="text-white font-semibold">100+ Projects</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl border border-primary/30 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎨</div>
                <p className="text-xl text-gray-300">Design Excellence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
