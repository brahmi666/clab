"use client"

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";


export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-2"
          >
            Contact Us
          </motion.h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-1 space-y-8"
          >
            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Our Location</h3>
                <p className="text-gray-600">123 Architecture Avenue, New York, NY 10001</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Email Us</h3>
                <p className="text-gray-600">info@studioarchiform.com</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2 bg-gray-50 p-8 rounded-lg"
          >
             <div className="mt-12">
          <iframe
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=123+Architecture+Avenue,New+York,NY"
            allowFullScreen
          ></iframe>
        </div>
          </motion.form>
        </div>

       
      </div>
    </section>
  );
}
