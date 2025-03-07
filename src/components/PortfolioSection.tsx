"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Azure Pavilion",
    category: "Commercial",
    image: "/design1.jpg?height=600&width=800",
    year: "2023",
    link: "/model2",
  },
  {
    id: 2,
    title: "Helix Residences",
    category: "Residential",
    image: "/design2.jpg?height=600&width=800",
    year: "2022",
    link: "/model2",
  },
  {
    id: 3,
    title: "Vertex Tower",
    category: "Mixed-Use",
    image: "/design3.jpg?height=600&width=800",
    year: "2021",
    link: "/model3",
  },
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium"
          >
            Our Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-2"
          >
            Featured Projects
          </motion.h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link to={project.link}>
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-white/80 text-sm">
                    {project.category} • {project.year}
                  </span>
                  <h3 className="text-white text-xl font-bold mt-1">
                    {project.title}
                  </h3>
                  <div className="mt-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="flex items-center text-white">
                      <span className="mr-2">View Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.button
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
          >
            <span className="mr-2">View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
