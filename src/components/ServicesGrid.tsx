import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ImageWithFallback from "./ui/image-with-fallback";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

interface ServicesGridProps {
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and engaging user experiences through thoughtful design and interaction patterns.",
    imageUrl:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=400&h=300&fit=crop",
  },
  {
    title: "Web Design",
    description:
      "Building responsive and performant web applications using modern technologies and best practices.",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&h=300&fit=crop",
  },
  {
    title: "Landing Page",
    description:
      "Developing cohesive brand identities and design systems that communicate your unique value proposition.",
    imageUrl:
      "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=400&h=300&fit=crop",
  },
];

const ServicesGrid = ({ services = defaultServices }: ServicesGridProps) => {
  return (
    <section className="relative w-full bg-[#1A1A1A] py-20 overflow-hidden">
      {/* Background with dark pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?auto=format&fit=crop&q=80")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.2)",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            My <span className="text-[#FF6B2B]">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-gray-400 max-w-xl"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-[20px] bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-[rgba(255,255,255,0.1)]">
                <div className="relative h-full w-full p-6">
                  <div className="overflow-hidden rounded-[10px] mb-6">
                    <ImageWithFallback
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-semibold text-white">
                        {service.title}
                      </h3>
                      <div className="h-10 w-10 rounded-full bg-[#2A2A2A] flex items-center justify-center group-hover:bg-[#FF6B2B] transition-colors duration-300">
                        <ArrowUpRight className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-12 gap-2">
          <div className="h-2 w-8 rounded-full bg-[#FF6B2B]" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
