import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Cpu, Zap, Terminal, GitBranch, Package, Server, FileCode, Braces, Hash, Code2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolio';

const Hero = () => {
  const { personal } = portfolioData;

  const downloadResume = () => {
    // You can add your resume download logic here
    window.open('/resume.pdf', '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // Tech elements to float in background
  const techElements = [
    { icon: Github, text: "GitHub", color: "text-gray-400" },
    { icon: Code, text: "React", color: "text-blue-400" },
    { icon: Database, text: "MySQL", color: "text-orange-400" },
    { icon: Cpu, text: "Node.js", color: "text-green-400" },
    { icon: Zap, text: "TypeScript", color: "text-blue-500" },
    { icon: Terminal, text: "Python", color: "text-yellow-400" },
    { icon: GitBranch, text: "Git", color: "text-red-400" },
    { icon: Package, text: "Java", color: "text-red-500" },
    { icon: Server, text: "AWS", color: "text-orange-500" },
    { icon: Code, text: "Spring", color: "text-green-500" },
    { icon: Database, text: "MongoDB", color: "text-green-600" },
    { icon: Cpu, text: "Express", color: "text-gray-500" },
    { icon: FileCode, text: "HTML", color: "text-orange-400" },
    { icon: Braces, text: "CSS", color: "text-blue-400" },
    { icon: Hash, text: "PHP", color: "text-purple-400" }
  ];

  // Code snippets to float
  const codeSnippets = [
    {
      language: "React",
      code: "const App = () => {\n  return <div>Hello World</div>;\n};",
      color: "text-blue-400"
    },
    {
      language: "CSS",
      code: ".container {\n  display: flex;\n  justify-content: center;\n}",
      color: "text-blue-500"
    },
    {
      language: "JavaScript",
      code: "const user = {\n  name: 'John',\n  age: 25\n};",
      color: "text-yellow-400"
    },
    {
      language: "Python",
      code: "def hello():\n    print('Hello World')\n    return True",
      color: "text-green-400"
    },
    {
      language: "Java",
      code: "public class Main {\n    public static void main(String[] args) {\n        System.out.println('Hello');\n    }\n}",
      color: "text-red-400"
    },
    {
      language: "SQL",
      code: "SELECT * FROM users\nWHERE age > 18\nORDER BY name;",
      color: "text-orange-400"
    }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background with Tech Elements */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0">
          {/* Tech Icons */}
          {techElements.map((element, i) => (
            <motion.div
              key={`tech-${i}`}
              className="absolute flex items-center space-x-2 bg-background/5 backdrop-blur-sm border border-border/10 px-3 py-2 rounded-lg"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                opacity: 0.1,
                scale: 0.7
              }}
              animate={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                opacity: [0.1, 0.2, 0.1],
                scale: [0.7, 0.9, 0.7],
                rotate: [0, 3, -3, 0]
              }}
              transition={{
                duration: Math.random() * 20 + 25,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <element.icon className={`w-3 h-3 ${element.color}`} />
              <span className={`text-xs font-mono ${element.color} hidden sm:block`}>
                {element.text}
              </span>
            </motion.div>
          ))}

          {/* Code Snippets */}
          {codeSnippets.map((snippet, i) => (
            <motion.div
              key={`code-${i}`}
              className="absolute bg-background/5 backdrop-blur-sm border border-border/10 px-4 py-3 rounded-lg max-w-xs"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                opacity: 0.08,
                scale: 0.6
              }}
              animate={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                opacity: [0.08, 0.15, 0.08],
                scale: [0.6, 0.8, 0.6],
                rotate: [0, 2, -2, 0]
              }}
              transition={{
                duration: Math.random() * 25 + 30,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <div className={`text-xs font-mono ${snippet.color} mb-1`}>
                {snippet.language}
              </div>
              <pre className={`text-xs font-mono ${snippet.color} opacity-70`}>
                {snippet.code}
              </pre>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-poppins font-bold mb-4"
          >
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {personal.name}
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-poppins font-medium text-muted-foreground mb-6"
          >
            {personal.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-smooth font-medium"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 transition-smooth font-medium"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
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