import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ImageWithFallback from "./ui/image-with-fallback";
import { Button } from "./ui/button";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface ProjectsGridProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  // Landing Page Projects
  {
    title: "Lirante - Food Delivery",
    description:
      "Modern landing page for a food delivery service with smooth animations.",
    imageUrl:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1920&auto=format&fit=crop",
    category: "Landing Page",
  },
  {
    title: "TechStart - SaaS Platform",
    description: "Clean and modern SaaS landing page with feature highlights.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&auto=format&fit=crop",
    category: "Landing Page",
  },
  {
    title: "EcoLife - Green Living",
    description: "Sustainable living product showcase with organic design.",
    imageUrl:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&auto=format&fit=crop",
    category: "Landing Page",
  },
  {
    title: "FitFlow - Fitness App",
    description: "Dynamic fitness app landing with workout demonstrations.",
    imageUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&auto=format&fit=crop",
    category: "Landing Page",
  },
  {
    title: "CreativeStudio - Agency",
    description: "Creative agency landing with portfolio showcase.",
    imageUrl:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1920&auto=format&fit=crop",
    category: "Landing Page",
  },

  // Product Design Projects
  {
    title: "E-Commerce Dashboard",
    description: "Intuitive admin dashboard for e-commerce management.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&auto=format&fit=crop",
    category: "Product Design",
  },
  {
    title: "HealthTrack App",
    description: "Health monitoring app with data visualization.",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&auto=format&fit=crop",
    category: "Product Design",
  },
  {
    title: "SmartHome Control",
    description: "IoT device control interface with modern UI.",
    imageUrl:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=1920&auto=format&fit=crop",
    category: "Product Design",
  },
  {
    title: "FinTech Wallet",
    description: "Digital wallet app with transaction management.",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768494-4dee09f4960a?w=1920&auto=format&fit=crop",
    category: "Product Design",
  },
  {
    title: "TaskFlow Manager",
    description: "Project management tool with kanban interface.",
    imageUrl:
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1920&auto=format&fit=crop",
    category: "Product Design",
  },

  // Animation Projects
  {
    title: "Particle Flow",
    description: "Interactive particle system with user controls.",
    imageUrl:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&auto=format&fit=crop",
    category: "Animation",
  },
  {
    title: "Scroll Animations",
    description: "Smooth scroll-triggered animations library.",
    imageUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&auto=format&fit=crop",
    category: "Animation",
  },
  {
    title: "3D Product Viewer",
    description: "Interactive 3D product rotation animation.",
    imageUrl:
      "https://images.unsplash.com/photo-1633899306328-c5e70574aaa3?w=1920&auto=format&fit=crop",
    category: "Animation",
  },
  {
    title: "Micro-interactions",
    description: "Collection of subtle UI animations.",
    imageUrl:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&auto=format&fit=crop",
    category: "Animation",
  },
  {
    title: "Loading States",
    description: "Creative loading animations collection.",
    imageUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&auto=format&fit=crop",
    category: "Animation",
  },

  // Glassmorphism Projects
  {
    title: "Glass Dashboard",
    description: "Modern dashboard with glassmorphism effects.",
    imageUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&auto=format&fit=crop",
    category: "Glassmorphism",
  },
  {
    title: "Frosted Menu",
    description: "Navigation menu with glass effect.",
    imageUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&auto=format&fit=crop",
    category: "Glassmorphism",
  },
  {
    title: "Weather Widget",
    description: "Weather app with glass morphism design.",
    imageUrl:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1920&auto=format&fit=crop",
    category: "Glassmorphism",
  },
  {
    title: "Glass Cards",
    description: "Collection of glassmorphism card designs.",
    imageUrl:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&auto=format&fit=crop",
    category: "Glassmorphism",
  },
  {
    title: "Glass Forms",
    description: "Form elements with glass effect.",
    imageUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&auto=format&fit=crop",
    category: "Glassmorphism",
  },

  // Cards Projects
  {
    title: "E-commerce Cards",
    description: "Product card designs for online shopping.",
    imageUrl:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1920&auto=format&fit=crop",
    category: "Cards",
  },
  {
    title: "Profile Cards",
    description: "User profile card collection with variations.",
    imageUrl:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&auto=format&fit=crop",
    category: "Cards",
  },
  {
    title: "Interactive Cards",
    description: "Cards with hover and click animations.",
    imageUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&auto=format&fit=crop",
    category: "Cards",
  },
  {
    title: "Info Cards",
    description: "Information display cards with clean layout.",
    imageUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&auto=format&fit=crop",
    category: "Cards",
  },
  {
    title: "Feature Cards",
    description: "Product feature highlight cards.",
    imageUrl:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1920&auto=format&fit=crop",
    category: "Cards",
  },
];

const categories = [
  "Landing Page",
  "Product Design",
  "Animation",
  "Glassmorphism",
  "Cards",
];

const ProjectsGrid = ({ projects = defaultProjects }: ProjectsGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects;

  const totalPages = Math.ceil(filteredProjects.length / 3);
  const currentProjects = filteredProjects.slice(
    currentPage * 3,
    (currentPage + 1) * 3,
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-5xl font-bold text-[#2D3047] mb-4"
            >
              Lets have a look at
              <br />
              my <span className="text-[#FF6B2B]">Portfolio</span>
            </motion.h2>
          </div>
          <Button
            variant="ghost"
            className="text-[#FF6B2B] hover:text-[#FF6B2B] hover:bg-[#FF6B2B]/10 rounded-full px-8"
          >
            See All
          </Button>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className={`rounded-full px-8 ${selectedCategory === category ? "bg-[#FF6B2B] text-white border-[#FF6B2B]" : "hover:border-[#FF6B2B] hover:text-[#FF6B2B]"}`}
              onClick={() => {
                setSelectedCategory(
                  category === selectedCategory ? null : category,
                );
                setCurrentPage(0);
              }}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${currentPage}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <ImageWithFallback
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex justify-between items-start">
                        <div className="text-white">
                          <h3 className="text-2xl font-bold mb-2">
                            {project.title}
                          </h3>
                          <p className="text-white/80">{project.description}</p>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-[#FF6B2B] flex items-center justify-center">
                          <ArrowRight className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          {filteredProjects.length > 3 && (
            <div className="flex justify-center mt-8 gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevPage}
                className="rounded-full hover:bg-[#FF6B2B] hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextPage}
                className="rounded-full hover:bg-[#FF6B2B] hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Page indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <div
                key={i}
                className={`h-2 ${i === currentPage ? "w-8 bg-[#FF6B2B]" : "w-2 bg-gray-200"} rounded-full transition-all duration-300`}
                onClick={() => setCurrentPage(i)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
