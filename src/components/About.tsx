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
              className="relative order-2 lg:order-1 flex justify-center"
            >
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-pulse-glow" />
                <div className="relative w-full h-full glass-card rounded-full p-2.5 sm:p-4 hover:shadow-glow transition-smooth border-2 border-primary/30">
                  <img 
                    src="/profile-photo.jpeg" 
                    alt={`${personal.name} profile photo`}
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-5 sm:space-y-6 order-1 lg:order-2"
            >
              <h3 className="text-xl sm:text-2xl font-poppins font-semibold text-primary">
                {personal.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg">
                {personal.bio}
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-center space-x-3 text-xs sm:text-sm">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary border border-primary/20">
                    <MapPin size={16} />
                  </div>
                  <span className="text-muted-foreground font-medium">{personal.location}</span>
                </div>
                <a 
                  href={`tel:${personal.phone}`}
                  className="flex items-center space-x-3 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary border border-primary/20 group-hover:scale-105 transition-transform">
                    <Phone size={16} />
                  </div>
                  <span className="font-medium">{personal.phone}</span>
                </a>
                <a 
                  href={`mailto:${personal.email}`}
                  className="flex items-center space-x-3 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary border border-primary/20 group-hover:scale-105 transition-transform">
                    <Mail size={16} />
                  </div>
                  <span className="font-medium truncate">{personal.email}</span>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-6 mt-6 sm:mt-8">
                <div className="glass-card p-3.5 sm:p-5 text-center hover:shadow-elegant transition-smooth rounded-xl sm:rounded-2xl border border-primary/20">
                  <h4 className="text-xl sm:text-2xl font-poppins font-bold bg-gradient-primary bg-clip-text text-transparent">1+</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Years Experience</p>
                </div>
                <div className="glass-card p-3.5 sm:p-5 text-center hover:shadow-elegant transition-smooth rounded-xl sm:rounded-2xl border border-primary/20">
                  <h4 className="text-xl sm:text-2xl font-poppins font-bold bg-gradient-primary bg-clip-text text-transparent">10+</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Projects Completed</p>
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