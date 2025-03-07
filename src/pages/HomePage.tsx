import { motion } from "framer-motion";
import { HeroSection } from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ThreeJsScene from "../components/BrouseModel";
export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <ServicesSection />
        <ThreeJsScene />
        <PortfolioSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </motion.div>
    </>
  );
};
