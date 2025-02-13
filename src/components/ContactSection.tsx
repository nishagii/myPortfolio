import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Mail,
  MessageSquare,
  Phone,
  Send,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

interface ContactSectionProps {
  email?: string;
  phone?: string;
}

const ContactSection = ({
  email = "hello@example.com",
  phone = "+1 (555) 123-4567",
}: ContactSectionProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-background via-muted/50 to-background py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute left-1/3 bottom-1/3 h-64 w-64 animate-pulse rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Get in Touch</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full overflow-hidden bg-background/60 p-8 backdrop-blur-sm border border-white/10 shadow-xl">
              <h3 className="mb-6 text-2xl font-semibold">
                Contact Information
              </h3>

              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-3 shadow-lg transform transition-transform duration-300 hover:scale-110">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{email}</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-3 shadow-lg transform transition-transform duration-300 hover:scale-110">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">{phone}</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-3 shadow-lg transform transition-transform duration-300 hover:scale-110">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Social Media
                    </p>
                    <div className="mt-2 flex gap-4">
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-orange-100 p-2 hover:bg-orange-200 transition-colors"
                      >
                        <Github className="h-5 w-5 text-orange-600" />
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-orange-100 p-2 hover:bg-orange-200 transition-colors"
                      >
                        <Linkedin className="h-5 w-5 text-orange-600" />
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-orange-100 p-2 hover:bg-orange-200 transition-colors"
                      >
                        <Twitter className="h-5 w-5 text-orange-600" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="overflow-hidden bg-background/60 p-8 backdrop-blur-sm border border-white/10 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6 relative">
                {/* Animated form background */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-500/5 to-blue-500/5 rounded-lg blur-xl" />

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input
                      placeholder="John"
                      className="bg-background/50 backdrop-blur-sm transition-all duration-300 focus:ring-2 focus:ring-orange-500/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input
                      placeholder="Doe"
                      className="bg-background/50 backdrop-blur-sm transition-all duration-300 focus:ring-2 focus:ring-orange-500/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-background/50 backdrop-blur-sm transition-all duration-300 focus:ring-2 focus:ring-orange-500/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    className="min-h-[150px] bg-background/50 backdrop-blur-sm transition-all duration-300 focus:ring-2 focus:ring-orange-500/50"
                  />
                </div>

                <Button
                  type="submit"
                  className="group relative w-full overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative">Send Message</span>
                  <Send className="relative ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
