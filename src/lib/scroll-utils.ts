export const scrollToElement = (elementId: string, offset: number = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export const getActiveSection = () => {
  const sections = [
    "home",
    "about",
    "service",
    "resume",
    "project",
    "contact",
    "testimonials",
  ];

  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        return section;
      }
    }
  }

  return "home";
};
