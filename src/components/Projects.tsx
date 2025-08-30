import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { portfolioData } from '@/data/portfolio';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { projects } = portfolioData;
  const [visibleProjects, setVisibleProjects] = useState(2);

  const handleViewMore = () => {
    setVisibleProjects(prev => Math.min(prev + 2, projects.length));
  };

  const hasMoreProjects = visibleProjects < projects.length;
  const displayedProjects = projects.slice(0, visibleProjects);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              Showcasing some of my best work in full-stack development and machine learning
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatePresence mode="wait">
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  layout
                >
                  <Card className="glass-card border-border/50 hover:shadow-elegant transition-smooth group h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl font-poppins font-semibold group-hover:text-primary transition-smooth">
                          {project.title}
                        </CardTitle>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="ghost" className="p-2 hover:text-primary">
                            <Github size={18} />
                          </Button>
                          <Button size="sm" variant="ghost" className="p-2 hover:text-primary">
                            <ExternalLink size={18} />
                          </Button>
                        </div>
                      </div>
                      <CardDescription className="text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Technology Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-secondary/50 hover:bg-primary/20 transition-smooth"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Key Features */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-foreground">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <ArrowRight className="text-primary mr-2 mt-0.5 flex-shrink-0" size={14} />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3 pt-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-primary/50 hover:bg-primary/10 transition-smooth"
                        >
                          <Github className="mr-2" size={16} />
                          Code
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-primary hover:shadow-glow transition-smooth"
                        >
                          <ExternalLink className="mr-2" size={16} />
                          Live Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* View More Projects Button - Only show if there are more projects */}
          <AnimatePresence>
            {hasMoreProjects && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="text-center mt-12"
              >
                <Button
                  onClick={handleViewMore}
                  variant="outline"
                  size="lg"
                  className="border-primary/50 hover:bg-primary/10 transition-smooth"
                >
                  View More Projects
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;