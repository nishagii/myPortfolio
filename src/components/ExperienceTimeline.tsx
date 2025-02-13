import React from "react";
import { motion } from "framer-motion";

interface TimelineItem {
  company: string;
  location: string;
  role: string;
  period: string;
  description: string;
}

interface ExperienceTimelineProps {
  items?: TimelineItem[];
}

const defaultItems: TimelineItem[] = [
  {
    company: "Cognizant, Mumbai",
    location: "Mumbai",
    role: "Experience Designer",
    period: "Sep 2016- July 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
  },
  {
    company: "Sugee Pvt limited, Mumbai",
    location: "Mumbai",
    role: "UI/UX Designer",
    period: "Sep 2020- July 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
  },
  {
    company: "Cinetstox, Mumbai",
    location: "Mumbai",
    role: "Lead UX Designer",
    period: "Sep 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
  },
];

const ExperienceTimeline = ({
  items = defaultItems,
}: ExperienceTimelineProps) => {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          My <span className="text-[#FF6B2B]">Work Experience</span>
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative grid grid-cols-[1fr,auto,1fr] gap-8 mb-12 last:mb-0"
            >
              {/* Left content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-right"
              >
                <h3 className="text-2xl font-bold text-[#2D3047] mb-1">
                  {item.company}
                </h3>
                <p className="text-gray-500">{item.period}</p>
              </motion.div>

              {/* Center timeline */}
              <div className="relative flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-[#FF6B2B] border-4 border-orange-100 z-10" />
                {index !== items.length - 1 && (
                  <div className="absolute top-5 h-[calc(100%+3rem)] w-0 border-l-2 border-dashed border-gray-300" />
                )}
              </div>

              {/* Right content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold text-[#2D3047] mb-2">
                  {item.role}
                </h3>
                <p className="text-gray-500">{item.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
