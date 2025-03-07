"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";

interface Category {
  id: string;
  name: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories: Category[] = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "sustainable", name: "Sustainable" },
    { id: "interior", name: "Interior Design" },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Lakeside Villa",
      category: "residential",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "A contemporary residential project featuring open spaces and panoramic views of the lake.",
      year: "2022",
    },
    {
      id: 2,
      title: "Urban Office Complex",
      category: "commercial",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "A sustainable office building designed to maximize natural light and energy efficiency.",
      year: "2021",
    },
    {
      id: 3,
      title: "Eco-Friendly Apartment Building",
      category: "sustainable",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "A multi-family residential complex with green roofs, solar panels, and rainwater harvesting systems.",
      year: "2020",
    },
    {
      id: 4,
      title: "Luxury Penthouse Interior",
      category: "interior",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Interior design for a high-end penthouse featuring custom furniture and smart home technology.",
      year: "2022",
    },
    {
      id: 5,
      title: "Sustainable Community Center",
      category: "sustainable",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "A community hub built with recycled materials and designed for minimal environmental impact.",
      year: "2019",
    },
    {
      id: 6,
      title: "Minimalist Beach House",
      category: "residential",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "A sleek, minimalist beach residence that blends with the natural surroundings.",
      year: "2021",
    },
  ];

  const filteredProjects: Project[] =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title dark:text-white">Featured Projects</h2>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeFilter === category.id
                  ? "bg-gray-800 text-white dark:bg-gray-700"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full">
                    {categories.find((c) => c.id === project.category)?.name}
                  </span>
                  <a
                    href="#"
                    className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    View Details <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn-primary inline-block">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
