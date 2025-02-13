import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  tags?: string[];
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project showcasing key features and technologies used.",
  imageUrl = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
  liveUrl = "#",
  githubUrl = "#",
  tags = ["React", "TypeScript", "Tailwind CSS"],
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        transition: { duration: 0.2 },
      }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group relative overflow-hidden bg-card">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
          <p className="mb-4 text-sm text-gray-600">{description}</p>

          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-orange-100 px-3 py-1 text-xs text-orange-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover:border-orange-500 hover:text-orange-500"
                  >
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View Live Project</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover:border-orange-500 hover:text-orange-500"
                  >
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View Source Code</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
