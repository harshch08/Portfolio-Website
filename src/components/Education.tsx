import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
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
              05 // Academic Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Education & Qualifications
            </h2>
            <p className="mt-2 text-zinc-400 text-base max-w-2xl">
              Computer science degrees with strong foundations in software engineering and algorithms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.14] transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-300">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06] flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-zinc-500" />
                    {edu.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium text-zinc-300 mb-4">
                  {edu.institution}
                </p>

                <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-500">Score</span>
                  <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
