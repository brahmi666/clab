import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "../components/Footer";

const servicesData = {
  architecture: {
    title: "Architecture",
    description: "Innovative and sustainable architectural design",
    fullDescription: `Our architecture service combines creativity and technical expertise to create exceptional spaces. We consider your specific needs, the environment, and the latest trends in sustainable design.`,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    features: [
      "Custom architectural design",
      "Feasibility studies",
      "Detailed plans and 3D modeling",
      "Project management",
    ],
  },
  interior: {
    title: "Interior Design",
    description: "Creating unique and personalized spaces",
    fullDescription: `Our approach to interior design aims to create spaces that reflect your personality while optimizing functionality. We work with the best materials and craftsmen to ensure an exceptional result.`,
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68",
    features: [
      "Custom space design",
      "Furniture and material selection",
      "Work coordination",
      "Decoration advice",
    ],
  },
  construction: {
    title: "Construction",
    description: "Expert execution of your projects",
    fullDescription: `Our construction service ensures flawless execution of your projects, from structural work to finishing. We coordinate all trades to guarantee perfect execution within the given deadlines.`,
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
    features: [
      "Complete project management",
      "Team coordination",
      "Compliance with standards and regulations",
      "Rigorous quality control",
    ],
  },
  renovation: {
    title: "Renovation",
    description: "Transforming and modernizing spaces",
    fullDescription: `We give new life to your existing spaces. Our renovation expertise allows us to modernize while preserving the character and history of your property.`,
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
    features: [
      "Comprehensive diagnosis",
      "Custom solutions",
      "Space optimization",
      "Eco-friendly renovation",
    ],
  },
};

export const ServiceDetails = () => {
  const { id } = useParams();
  const service = servicesData[id as keyof typeof servicesData];
  if (!service) return <div>Service not found</div>;
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[50vh]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            {service.title}
          </h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-[#2B4D6F] hover:text-[#1A3A5C] mb-8"
        >
          <ArrowLeft className="mr-2" />
          Back to Home
        </Link>
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            {service.fullDescription}
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Our services include:
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center bg-gray-50 p-4 rounded-lg"
              >
                <span className="w-2 h-2 bg-[#2B4D6F] rounded-full mr-3" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12">
          <button className="bg-[#2B4D6F] text-white px-8 py-3 rounded-md hover:bg-[#1A3A5C] transition-colors">
            Request a Quote
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
