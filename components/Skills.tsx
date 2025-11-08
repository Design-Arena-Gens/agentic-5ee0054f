"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "@react-three/drei";

function FloatingBox({ position }: { position: [number, number, number] }) {
  return (
    <Box position={position} args={[0.5, 0.5, 0.5]}>
      <meshStandardMaterial color="#6366f1" />
    </Box>
  );
}

const skills = [
  { name: "Adobe Photoshop", level: 95 },
  { name: "Adobe Illustrator", level: 90 },
  { name: "Figma", level: 88 },
  { name: "Adobe XD", level: 85 },
  { name: "After Effects", level: 82 },
  { name: "Blender 3D", level: 78 },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {[...Array(8)].map((_, i) => (
            <FloatingBox
              key={i}
              position={[
                Math.sin(i) * 5,
                Math.cos(i) * 5,
                Math.sin(i * 0.5) * 3,
              ]}
            />
          ))}
        </Canvas>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Tools
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex justify-between mb-3">
                <span className="text-lg font-semibold text-white">{skill.name}</span>
                <span className="text-primary font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
