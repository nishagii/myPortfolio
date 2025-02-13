import React from "react";
import Navbar from "./Navbar";
import WhyHireMe from "./WhyHireMe";
import HeroSection from "./HeroSection";
import ServicesGrid from "./ServicesGrid";
import ExperienceTimeline from "./ExperienceTimeline";
import ProjectsGrid from "./ProjectsGrid";
import ContactSection from "./ContactSection";
import TestimonialsSection from "./TestimonialsSection";

const Home = () => {
  const [currentSection, setCurrentSection] = React.useState("home");

  return (
    <div className="min-h-screen w-full bg-background">
      <Navbar
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />
      <div id="home">
        <HeroSection />
      </div>

      <div id="about">
        <WhyHireMe />
      </div>

      <div id="service">
        <ServicesGrid />
      </div>

      <div id="resume" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Work Experience
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              A timeline of my professional journey and key achievements
            </p>
          </div>
          <ExperienceTimeline />
        </div>
      </div>

      <div id="project">
        <ProjectsGrid />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      <div id="testimonials">
        <TestimonialsSection />
      </div>

      <footer className="bg-gray-900 py-12 text-center text-gray-400">
        <div className="container mx-auto px-4">
          <p className="mb-4">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <p className="text-sm">
            Built with React, Tailwind CSS, and lots of ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
