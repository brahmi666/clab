// AboutSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-tl-3xl z-0"></div>
            <img
              src="/about.jpeg?height=600&width=500"
              alt="Architect portrait"
              className="w-full h-auto rounded-lg shadow-lg relative z-10"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-br-3xl z-0"></div>
          </motion.div>

          <div>
            <motion.span
              variants={itemVariants}
              className="block text-primary font-medium mb-2"
            >
              About Us
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              We Design Spaces That Tell Stories
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 mb-4">
              Founded in 2010, Studio Archiform is an award-winning
              architectural practice based in New York. We believe that
              architecture has the power to positively influence people's lives
              and the environment.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-600 mb-6">
              Our team of passionate architects and designers work
              collaboratively to create thoughtful, innovative, and sustainable
              designs that respond to the unique needs of our clients and the
              specific context of each project.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              <div className="border-l-2 border-primary pl-4">
                <span className="block text-3xl font-bold">15+</span>
                <span className="text-gray-500">Years Experience</span>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <span className="block text-3xl font-bold">200+</span>
                <span className="text-gray-500">Projects Completed</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
