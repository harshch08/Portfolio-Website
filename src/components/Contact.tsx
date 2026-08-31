import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Code2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolio';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { personal } = portfolioData;

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              Let's discuss opportunities and collaborate on exciting projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="glass-card border-border/50 hover:shadow-elegant transition-smooth h-full rounded-2xl overflow-hidden">
                <CardHeader className="text-center p-4 sm:p-6 pb-4 sm:pb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-glow">
                    <Mail className="text-primary-foreground w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-poppins font-semibold">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
                  <a 
                    href={`mailto:${personal.email}`}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 glass-card rounded-xl hover:shadow-glow transition-smooth border border-border/30 group block"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="text-primary-foreground w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm sm:text-base text-foreground">Email</p>
                      <p className="text-xs sm:text-sm text-muted-foreground truncate group-hover:text-primary transition-colors">{personal.email}</p>
                    </div>
                  </a>
                  <a 
                    href={`tel:${personal.phone}`}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 glass-card rounded-xl hover:shadow-glow transition-smooth border border-border/30 group block"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="text-primary-foreground w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm sm:text-base text-foreground">Phone</p>
                      <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-primary transition-colors">{personal.phone}</p>
                    </div>
                  </a>
                  <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 glass-card rounded-xl border border-border/30">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary-foreground w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm sm:text-base text-foreground">Location</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{personal.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="glass-card border-border/50 hover:shadow-elegant transition-smooth h-full rounded-2xl overflow-hidden">
                <CardHeader className="text-center p-4 sm:p-6 pb-4 sm:pb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-glow">
                    <Github className="text-primary-foreground w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-poppins font-semibold">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
                    <motion.a
                      href={personal.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3.5 sm:p-6 glass-card rounded-xl sm:rounded-2xl hover:shadow-glow transition-smooth hover:text-primary text-center group border border-border/30 flex flex-col items-center justify-center min-h-[90px] sm:min-h-[120px]"
                    >
                      <Github className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 group-hover:scale-110 transition-transform text-primary" />
                      <p className="font-medium text-xs sm:text-sm">GitHub</p>
                    </motion.a>
                    <motion.a
                      href={personal.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3.5 sm:p-6 glass-card rounded-xl sm:rounded-2xl hover:shadow-glow transition-smooth hover:text-primary text-center group border border-border/30 flex flex-col items-center justify-center min-h-[90px] sm:min-h-[120px]"
                    >
                      <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 group-hover:scale-110 transition-transform text-primary" />
                      <p className="font-medium text-xs sm:text-sm">LinkedIn</p>
                    </motion.a>
                    <motion.a
                      href={personal.social.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3.5 sm:p-6 glass-card rounded-xl sm:rounded-2xl hover:shadow-glow transition-smooth hover:text-primary text-center group border border-border/30 flex flex-col items-center justify-center min-h-[90px] sm:min-h-[120px]"
                    >
                      <Code2 className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 group-hover:scale-110 transition-transform text-primary" />
                      <p className="font-medium text-xs sm:text-sm">LeetCode</p>
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;