"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Building2, PenTool, Compass, Home } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Architectural Design",
    description:
      "From concept to completion, we create innovative architectural designs tailored to your vision and requirements.",
  },
  {
    icon: PenTool,
    title: "Interior Design",
    description:
      "We craft functional and aesthetically pleasing interior spaces that reflect your style and enhance your daily experience.",
  },
  {
    icon: Compass,
    title: "Urban Planning",
    description:
      "Our urban planning services focus on creating sustainable, efficient, and people-centered community spaces.",
  },
  {
    icon: Home,
    title: "Residential Design",
    description:
      "We design homes that balance beauty, functionality, and sustainability to create spaces where life happens.",
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-2"
          >
            Our Services
          </motion.h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

