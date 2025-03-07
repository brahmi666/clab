"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        <motion.div style={{ opacity, scale }} className="w-full h-full">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/rolex.jpg')",
              filter: "brightness(0.7)",
            }}
          />
        </motion.div>
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ y }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          STUDIO ARCHIFORM
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Creating spaces that inspire, transform, and endure
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#projects">
            <button className="rounded-full text-black bg-slate-100 border-white hover:bg-gray-400 hover:text-black transition-all py-2 px-6">
              View Our Work
            </button>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <ArrowDown className="text-white w-8 h-8" />
      </motion.div>
    </section>
  );
};
