import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "../components/Footer";

const projectsData = {
  "modern-villa": {
    title: "Modern Villa",
    description: "Contemporary design",
    fullDescription: `This modern villa embodies the perfect balance between contemporary aesthetics and functionality. The project highlights clean lines and noble materials, creating a luxurious and comfortable living space.`,
    mainImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    gallery: [
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    ],
    details: {
      surface: "350m²",
      duration: "18 months",
      location: "Paris Region",
      type: "New Construction",
    },
  },
  "haussmann-apartment": {
    title: "Haussmann Apartment",
    description: "Complete renovation",
    fullDescription: `Complete renovation of a Haussmann apartment combining the charm of the old with modern comfort. The original moldings and parquet floors have been restored while integrating contemporary equipment.`,
    mainImage: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    ],
    details: {
      surface: "180m²",
      duration: "12 months",
      location: "8th Arrondissement, Paris",
      type: "Renovation",
    },
  },
  "industrial-loft": {
    title: "Industrial Loft",
    description: "Interior architecture",
    fullDescription: `Transformation of an old warehouse into a contemporary loft. The project retains the industrial spirit of the place while creating a warm and modern living space.`,
    mainImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    ],
    details: {
      surface: "250m²",
      duration: "15 months",
      location: "Lyon",
      type: "Rehabilitation",
    },
  },
};

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData[id as keyof typeof projectsData];
  if (!project) return <div>Project not found</div>;
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[60vh]">
        <img
          src={project.mainImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            {project.title}
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
            {project.fullDescription}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {Object.entries(project.details).map(([key, value]) => (
              <div key={key} className="bg-gray-50 p-4 rounded-lg text-center">
                <h3 className="text-sm text-gray-500 uppercase">{key}</h3>
                <p className="text-lg font-semibold text-gray-800">{value}</p>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
        <div className="mt-12">
          <button className="bg-[#2B4D6F] text-white px-8 py-3 rounded-md hover:bg-[#1A3A5C] transition-colors">
            Request More Information
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
