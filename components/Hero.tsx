"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";

function AnimatedSphere() {
  return (
    <Sphere args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#6366f1"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
      />
    </Sphere>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ec4899" />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
            Creative Designer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Bringing Ideas to Life Through Design
          </p>
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
