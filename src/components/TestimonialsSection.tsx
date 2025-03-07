"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Working with Studio Archiform was a dream. They transformed our outdated house into a modern, functional home that perfectly suits our lifestyle. Their attention to detail and ability to listen to our needs was exceptional.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, Horizon Developments",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "We've collaborated with Studio Archiform on multiple commercial projects, and they consistently deliver innovative designs that exceed our expectations. Their team's professionalism and expertise are unmatched in the industry.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Museum Director",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The design Studio Archiform created for our new wing has received widespread acclaim. They understood our vision and translated it into a space that enhances the visitor experience while honoring our institution's heritage.",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-2"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-12 rounded-lg shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={testimonials[current].image || "/placeholder.svg"}
                    alt={testimonials[current].name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="absolute -top-2 -right-2 bg-primary rounded-full p-1">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              <div>
                <blockquote className="text-gray-600 italic mb-6">"{testimonials[current].quote}"</blockquote>
                <div>
                  <h4 className="font-bold">{testimonials[current].name}</h4>
                  <p className="text-gray-500 text-sm">{testimonials[current].role}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

