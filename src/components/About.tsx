import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-float" />
                <div className="relative w-full h-full glass-card rounded-full p-4 hover:shadow-glow transition-smooth">
                                  <img 
                  src="/profile-photo.jpeg" 
                  alt={`${personal.name} profile photo`}
                  className="w-full h-full object-cover rounded-full"
                />
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <h3 className="text-2xl font-poppins font-semibold text-primary">
                {personal.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                {personal.bio}
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-primary" size={20} />
                  <span className="text-muted-foreground">{personal.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-primary" size={20} />
                  <span className="text-muted-foreground">{personal.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-primary" size={20} />
                  <span className="text-muted-foreground">{personal.email}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="glass-card p-4 text-center hover:shadow-elegant transition-smooth">
                  <h4 className="text-2xl font-poppins font-bold text-primary">1+</h4>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="glass-card p-4 text-center hover:shadow-elegant transition-smooth">
                  <h4 className="text-2xl font-poppins font-bold text-primary">10+</h4>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;