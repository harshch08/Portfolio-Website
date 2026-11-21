import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Database, 
  Terminal, 
  GitBranch, 
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: "Languages",
      skills: skills.languages,
      icon: Code2,
    },
    {
      title: "Frameworks & Backend",
      skills: skills.frameworks,
      icon: Layers,
    },
    {
      title: "AI & Machine Learning",
      skills: skills.aiMl,
      icon: Sparkles,
    },
    {
      title: "Databases & Storage",
      skills: skills.databases,
      icon: Database,
    },
    {
      title: "Cloud & DevOps Tools",
      skills: skills.tools,
      icon: GitBranch,
    },
    {
      title: "Architecture & Systems",
      skills: skills.concepts,
      icon: Cpu,
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="mb-14">
            <span className="section-tag">
              04 // Technical Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skills & Engineering Toolkit
            </h2>
            <p className="mt-2 text-zinc-400 text-base max-w-2xl">
              Languages, frameworks, databases, and architectural patterns I work with across production services.
            </p>
          </div>

          {/* Clean 6-Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.title}
                  className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.14] transition-colors flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-300">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-semibold text-white tracking-tight">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md text-xs font-mono text-zinc-300 bg-white/[0.03] border border-white/[0.06]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>{category.skills.length} core tools</span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
