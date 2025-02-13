import React, { useState, useEffect } from "react";
import { scrollToElement, getActiveSection } from "@/lib/scroll-utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";
import { Button } from "./ui/button";

interface NavbarProps {
  currentSection?: string;
  onSectionChange?: (section: string) => void;
}

const Navbar = ({ currentSection = "home", onSectionChange }: NavbarProps) => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "service", label: "Service" },
    { id: "resume", label: "Resume" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact" },
  ];

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        const activeSection = getActiveSection();
        onSectionChange?.(activeSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling, onSectionChange]);

  const scrollToSection = (sectionId: string) => {
    setIsScrolling(true);
    scrollToElement(sectionId, 80); // 80px offset for the navbar height
    onSectionChange?.(sectionId);
    setIsMenuOpen(false);

    // Reset scrolling state after animation
    setTimeout(() => setIsScrolling(false), 1000);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-background/95 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center text-foreground"
        >
          <span className="text-[#FF6B2B]">J</span>CREA
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.id)}
              className={`text-foreground transition-colors hover:text-[#FF6B2B] ${currentSection === item.id ? "text-[#FF6B2B]" : ""}`}
            >
              {item.label}
            </motion.button>
          ))}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="ml-4 border-[#FF6B2B] text-[#FF6B2B] hover:bg-[#FF6B2B] hover:text-white"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="mr-2 border-[#FF6B2B] text-[#FF6B2B] hover:bg-[#FF6B2B] hover:text-white"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full bg-background/95 backdrop-blur py-4 px-4 border-b border-border/40 md:hidden"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: 10 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-foreground transition-colors hover:text-[#FF6B2B] ${currentSection === item.id ? "text-[#FF6B2B]" : ""}`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
