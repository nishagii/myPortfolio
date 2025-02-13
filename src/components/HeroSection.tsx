import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import ImageWithFallback from "./ui/image-with-fallback";

interface HeroSectionProps {
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const HeroSection = ({
  name = "John Anderson",
  title = "UI/UX Designer & Developer",
  description = "Creating intuitive and engaging digital experiences through thoughtful design and modern development practices.",
  imageUrl = "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2940&auto=format&fit=crop",
  socialLinks = {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
}: HeroSectionProps) => {
  const handleDownloadCV = () => {
    // Replace this URL with your actual CV PDF URL
    const cvUrl =
      "https://storage.googleapis.com/tempo-public-assets/sample-resume.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "my-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-10"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-white-abstract-technology-particles-background-12431-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white" />
      </div>

      <div className="mx-auto max-w-7xl min-h-screen flex items-center px-4 lg:px-8 pt-20 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              bounce: 0.4,
            }}
            className="space-y-6"
          >
            <h1 className="text-5xl font-bold text-gray-900 lg:text-6xl">
              Hi, I'm {name}
            </h1>
            <h2 className="text-2xl font-semibold text-orange-500 lg:text-3xl">
              {title}
            </h2>
            <p className="max-w-lg text-lg text-gray-600">{description}</p>

            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-[#FF6B2B] hover:bg-[#FF6B2B]/90 text-white rounded-full px-8"
                >
                  Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-[#4A4A4A] hover:bg-[#4A4A4A]/90 text-white border-none rounded-full px-8"
                  onClick={handleDownloadCV}
                >
                  Download CV
                  <Download className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-orange-500"
                  asChild
                >
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-orange-500"
                  asChild
                >
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-orange-500"
                  asChild
                >
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              bounce: 0.4,
              delay: 0.2,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 5,
              transition: { duration: 0.3 },
            }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            <div className="absolute inset-0 rounded-full bg-orange-200" />
            <ImageWithFallback
              src={imageUrl}
              alt={name}
              className="relative z-10 h-full w-full rounded-full object-cover p-6"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
