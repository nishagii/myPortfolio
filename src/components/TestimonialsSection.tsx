import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Star } from "lucide-react";
import ImageWithFallback from "./ui/image-with-fallback";

interface TestimonialProps {
  name?: string;
  role?: string;
  company?: string;
  testimonial?: string;
  rating?: number;
  avatarUrl?: string;
}

interface TestimonialsSectionProps {
  testimonials?: TestimonialProps[];
}

const defaultTestimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    testimonial:
      "Working with this designer was an absolute pleasure. Their attention to detail and creative solutions exceeded our expectations.",
    rating: 5,
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "StartupX",
    testimonial:
      "Transformed our product's user experience completely. The results speak for themselves - our user engagement increased by 200%.",
    rating: 5,
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "CreativeAgency",
    testimonial:
      "Exceptional design work that perfectly captured our brand's essence. Professional, responsive, and highly recommended!",
    rating: 4,
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
  },
];

const TestimonialsSection = ({
  testimonials = defaultTestimonials,
}: TestimonialsSectionProps) => {
  return (
    <section className="w-full py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied
            clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                bounce: 0.3,
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="bg-gray-800 border-gray-700 p-6 hover:bg-gray-750 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <ImageWithFallback
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-white font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-orange-500 fill-orange-500"
                          : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="text-gray-300 italic">
                  "{testimonial.testimonial}"
                </blockquote>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
