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

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="glass-card border-border/50 hover:shadow-elegant transition-smooth h-full">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="text-primary-foreground" size={24} />
                  </div>
                  <CardTitle className="text-2xl font-poppins font-semibold">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 glass-card rounded-lg hover:shadow-glow transition-smooth">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary-foreground" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-lg">Email</p>
                      <p className="text-muted-foreground">{personal.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 glass-card rounded-lg hover:shadow-glow transition-smooth">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary-foreground" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-lg">Phone</p>
                      <p className="text-muted-foreground">{personal.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 glass-card rounded-lg hover:shadow-glow transition-smooth">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary-foreground" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-lg">Location</p>
                      <p className="text-muted-foreground">{personal.location}</p>
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
              <Card className="glass-card border-border/50 hover:shadow-elegant transition-smooth h-full">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Github className="text-primary-foreground" size={24} />
                  </div>
                  <CardTitle className="text-2xl font-poppins font-semibold">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <motion.a
                      href={personal.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-6 glass-card rounded-xl hover:shadow-glow transition-smooth hover:text-primary text-center group"
                    >
                      <Github size={32} className="mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <p className="font-medium text-sm">GitHub</p>
                    </motion.a>
                    <motion.a
                      href={personal.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-6 glass-card rounded-xl hover:shadow-glow transition-smooth hover:text-primary text-center group"
                    >
                      <Linkedin size={32} className="mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <p className="font-medium text-sm">LinkedIn</p>
                    </motion.a>
                    <motion.a
                      href={personal.social.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-6 glass-card rounded-xl hover:shadow-glow transition-smooth hover:text-primary text-center group"
                    >
                      <Code2 size={32} className="mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <p className="font-medium text-sm">LeetCode</p>
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