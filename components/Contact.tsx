"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-gray-400">Let's create something amazing together</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                placeholder="Project inquiry"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="flex justify-center space-x-6 mb-8">
            {["LinkedIn", "Behance", "Instagram", "Dribbble"].map((platform) => (
              <motion.a
                key={platform}
                href="#"
                whileHover={{ scale: 1.2, y: -5 }}
                className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-full flex items-center justify-center hover:border-primary transition-all"
              >
                <span className="text-xl">{platform[0]}</span>
              </motion.a>
            ))}
          </div>
          <p className="text-gray-500">© 2024 Creative Designer. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
