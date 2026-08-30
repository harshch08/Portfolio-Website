import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolio';
import { scrollToSection } from '@/lib/scroll';
import HeroBackground from './HeroBackground';

const Hero = () => {
  const { personal } = portfolioData;

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/HarshResume.pdf';
    link.download = 'HarshResume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* High-Performance Modern Animated Background */}
      <HeroBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold mb-4 px-4"
          >
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {personal.name}
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-poppins font-medium text-muted-foreground mb-6 px-4"
          >
            {personal.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed px-4"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4"
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-smooth font-medium"
              onClick={() => scrollToSection('#projects')}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 transition-smooth font-medium"
              onClick={() => scrollToSection('#contact')}
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-4 sm:space-x-6 px-4"
          >
            <motion.a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 glass-card hover:shadow-glow transition-smooth hover:text-primary"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 glass-card hover:shadow-glow transition-smooth hover:text-primary"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href={`mailto:${personal.email}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 glass-card hover:shadow-glow transition-smooth hover:text-primary"
            >
              <Mail size={24} />
            </motion.a>
            <motion.a
              href={personal.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 glass-card hover:shadow-glow transition-smooth hover:text-primary"
            >
              <Code2 size={24} />
            </motion.a>
          </motion.div>

          {/* Mobile Resume Download Button */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-8 lg:hidden"
          >
            <Button
              onClick={downloadResume}
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 transition-smooth font-medium"
            >
              <Download className="w-5 h-5 mr-2" />
              Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-2 bg-primary rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;