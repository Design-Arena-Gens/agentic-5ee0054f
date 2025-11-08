"use client";

import { Suspense } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navigation />
      <Suspense fallback={<div className="w-full h-screen bg-black" />}>
        <Hero />
      </Suspense>
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </main>
  );
}
