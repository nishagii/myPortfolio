import React from "react";
import { motion } from "framer-motion";
import ImageWithFallback from "./ui/image-with-fallback";

interface WhyHireMeProps {
  stats?: {
    projectsCompleted: number;
    clientSatisfaction: number;
  };
}

const WhyHireMe = ({
  stats = {
    projectsCompleted: 450,
    clientSatisfaction: 450,
  },
}: WhyHireMeProps) => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative max-w-lg mx-auto lg:mx-0">
          <div className="absolute -z-10 right-0 top-0 w-4/5 h-4/5 rounded-full bg-[#FF6B2B]/20" />
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2940&auto=format&fit=crop"
            alt="Professional portrait"
            className="rounded-2xl w-full h-[400px] object-cover"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Why <span className="text-[#FF6B2B]">Hire me</span>?
            </h2>
            <p className="text-muted-foreground text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacus nunc, posuere in justo vulputate, bibendum sodales
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">{stats.projectsCompleted}+</h3>
              <p className="text-muted-foreground">Project Completed</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">
                {stats.clientSatisfaction}+
              </h3>
              <p className="text-muted-foreground">Project Completed</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center rounded-full bg-background px-8 py-3 text-lg font-medium border-2 border-[#FF6B2B] text-[#FF6B2B] hover:bg-[#FF6B2B] hover:text-white transition-colors"
          >
            Hire me
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHireMe;
