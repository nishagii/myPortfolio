import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ServiceCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  imageUrl?: string;
  features?: string[];
}

const ServiceCard = ({
  title = "UI/UX Design",
  description = "Creating intuitive and engaging user experiences through thoughtful design and interaction patterns.",
  icon = <ArrowRight className="h-6 w-6 text-orange-500" />,
  imageUrl = "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=400&h=300&fit=crop",
  features = [
    "User Research & Analysis",
    "Wireframing & Prototyping",
    "Interactive Design",
    "Usability Testing",
  ],
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.03,
        y: -5,
        transition: { duration: 0.2 },
      }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="group relative h-full overflow-hidden bg-card hover:shadow-xl transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Default View */}
        <div className="relative z-10 transition-all duration-300 group-hover:translate-y-[-100%] group-hover:opacity-0">
          <CardHeader>
            <div className="flex items-center gap-2">
              {icon}
              <CardTitle className="text-xl font-bold">{title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>{description}</CardDescription>
          </CardContent>
        </div>

        {/* Hover Content */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-orange-500 to-orange-600/90 p-6 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <motion.div initial={false} className="space-y-4">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-white/90">{description}</p>

            <div className="space-y-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileHover={{ x: 5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-white/90"
                >
                  <CheckCircle2 className="h-5 w-5 text-white" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 w-full rounded-full bg-white px-6 py-2 text-sm font-medium text-orange-600 hover:bg-orange-50 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
