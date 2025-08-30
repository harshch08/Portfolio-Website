import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, 
  Database, 
  Settings, 
  GitBranch, 
  Cpu,
  Globe,
  Award,
  Zap
} from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: skills.languages,
      icon: Code,
      hoverColor: "hover:border-blue-500/50 group-hover:bg-blue-500/5",
      iconGradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Frameworks & Libraries",
      skills: skills.frameworks,
      icon: Globe,
      hoverColor: "hover:border-green-500/50 group-hover:bg-green-500/5",
      iconGradient: "from-green-500 to-green-600"
    },
    {
      title: "Databases",
      skills: skills.databases,
      icon: Database,
      hoverColor: "hover:border-purple-500/50 group-hover:bg-purple-500/5",
      iconGradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Tools & Technologies",
      skills: skills.tools,
      icon: Settings,
      hoverColor: "hover:border-orange-500/50 group-hover:bg-orange-500/5",
      iconGradient: "from-orange-500 to-orange-600"
    },
    {
      title: "Core Concepts",
      skills: skills.concepts,
      icon: Cpu,
      hoverColor: "hover:border-pink-500/50 group-hover:bg-pink-500/5",
      iconGradient: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Glow effect background */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl blur-xl" />
                  
                  <div className={`relative glass-card p-8 hover:shadow-elegant transition-smooth group border border-border/30 ${category.hoverColor}`}>
                    {/* Header with icon and title */}
                    <div className="flex items-center mb-6">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-12 h-12 bg-gradient-to-br ${category.iconGradient} rounded-xl flex items-center justify-center mr-4 shadow-glow`}
                      >
                        <IconComponent className="text-white" size={24} />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-poppins font-semibold group-hover:text-primary transition-smooth">
                          {category.title}
                        </h3>
                        <div className={`w-8 h-0.5 bg-gradient-to-r ${category.iconGradient} rounded-full mt-1`} />
                      </div>
                    </div>
                    
                    {/* Skills grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                          whileHover={{ scale: 1.05 }}
                          className="relative overflow-hidden"
                        >
                          <div className="bg-secondary/30 hover:bg-primary/10 p-3 rounded-lg border border-border/20 hover:border-primary/30 transition-smooth group/skill cursor-default">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-foreground group-hover/skill:text-primary transition-smooth">
                                {skill}
                              </span>
                              <motion.div
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1 }}
                                className={`w-2 h-2 bg-gradient-to-r ${category.iconGradient} rounded-full`}
                              />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Skill count badge */}
                    <div className="mt-6 flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Award className="text-primary" size={16} />
                        <span className="text-xs text-muted-foreground font-medium">
                          {category.skills.length} Technologies
                        </span>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`w-8 h-8 bg-gradient-to-r ${category.iconGradient}/20 rounded-full flex items-center justify-center border border-primary/30`}
                      >
                        <Zap className={`bg-gradient-to-r ${category.iconGradient} bg-clip-text text-transparent`} size={14} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Professional Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-poppins font-semibold text-center mb-8">
              Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Highlights</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Problem Solving", icon: GitBranch, description: "Complex algorithm design" },
                { label: "Team Leadership", icon: Award, description: "Cross-functional collaboration" },
                { label: "Agile Methodology", icon: Zap, description: "Scrum & Kanban expertise" },
                { label: "Code Review", icon: Code, description: "Quality assurance focus" }
              ].map((highlight, index) => {
                const IconComp = highlight.icon;
                return (
                  <motion.div
                    key={highlight.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                    whileHover={{ y: -5 }}
                    className="glass-card p-6 text-center hover:shadow-glow transition-smooth group"
                  >
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow"
                    >
                      <IconComp className="text-primary-foreground" size={24} />
                    </motion.div>
                    <h4 className="font-poppins font-semibold mb-2 group-hover:text-primary transition-smooth">
                      {highlight.label}
                    </h4>
                    <p className="text-xs text-muted-foreground">{highlight.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;