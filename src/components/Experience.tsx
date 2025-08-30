import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, Building, Code, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolio';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-secondary/20" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
            >
              <Building className="w-8 h-8 text-primary" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
              Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My journey in software development, showcasing key achievements and growth in building scalable applications
            </p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.2) }}
                className="relative"
              >
                <Card className="glass-card border-primary/20 hover:shadow-elegant transition-all duration-500 group">
                  <CardContent className="p-6 sm:p-8">
                    {/* Header Row */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <div className="w-3 h-3 bg-primary rounded-full mr-3" />
                          <h3 className="text-xl sm:text-2xl font-poppins font-bold text-primary group-hover:text-primary/80 transition-colors">
                            {job.position}
                          </h3>
                        </div>
                        <div className="flex items-center text-base sm:text-lg font-semibold text-foreground mb-2">
                          <Building className="text-muted-foreground mr-2" size={18} />
                          {job.company}
                        </div>
                      </div>
                      
                      {/* Duration and Location */}
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4 lg:mt-0">
                        <Badge className="bg-primary/10 text-primary border-primary/20 font-medium px-3 py-1 w-fit">
                          <Calendar className="w-3 h-3 mr-1" />
                          {job.duration}
                        </Badge>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="mr-2" size={16} />
                          <span className="font-medium">{job.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Technologies and Achievements Grid */}
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide flex items-center">
                          <Code className="w-4 h-4 mr-2 text-primary" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 text-xs font-medium border border-border/50"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide flex items-center">
                          <Zap className="w-4 h-4 mr-2 text-primary" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {job.achievements.map((achievement, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: 20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                              transition={{ duration: 0.4, delay: (0.4 + index * 0.2) + (idx * 0.1) }}
                              className="flex items-start text-sm text-muted-foreground group/achievement"
                            >
                              <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2 mr-3 group-hover/achievement:scale-150 transition-transform duration-300" />
                              <span className="leading-relaxed">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;