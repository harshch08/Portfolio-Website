import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolio';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              Academic background and qualifications in computer science
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="glass-card border-border/50 hover:shadow-elegant transition-smooth h-full group rounded-2xl overflow-hidden">
                  <CardHeader className="text-center p-4 sm:p-6 pb-2 sm:pb-3">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-glow"
                    >
                      <GraduationCap className="text-primary-foreground w-6 h-6 sm:w-7 sm:h-7" />
                    </motion.div>
                    <CardTitle className="text-base sm:text-lg font-poppins font-semibold group-hover:text-primary transition-smooth leading-snug">
                      {edu.degree}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
                    <h3 className="text-base sm:text-xl font-medium text-primary">{edu.institution}</h3>
                    
                    <div className="flex items-center justify-center text-xs sm:text-sm text-muted-foreground">
                      <Calendar className="mr-1.5 w-3.5 h-3.5" />
                      <span>{edu.duration}</span>
                    </div>

                    <div className="flex items-center justify-center text-xs sm:text-sm">
                      <Award className="text-primary mr-1.5 w-4 h-4" />
                      <span className="font-semibold text-foreground">
                        {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
                      </span>
                    </div>

                    {/* Academic Achievement Badge */}
                    <div className="pt-2 sm:pt-3">
                      <div className="inline-flex items-center px-3 sm:px-4 py-1.5 bg-gradient-primary/10 border border-primary/30 rounded-full">
                        <span className="text-xs sm:text-sm font-medium text-primary">
                          {edu.cgpa ? 'Distinction' : 'First Class'}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Academic Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 sm:mt-12 text-center"
          >
            <div className="glass-card p-4 sm:p-6 max-w-2xl mx-auto rounded-2xl border border-border/40">
              <h3 className="text-lg sm:text-xl font-poppins font-semibold mb-2 sm:mb-3 text-foreground">Academic Focus</h3>
              <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base">
                Specialized in Computer Applications with a strong foundation in software engineering, 
                data structures, algorithms, and modern web development technologies. Consistently 
                maintained excellent academic performance while actively participating in coding 
                competitions and technical projects.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;