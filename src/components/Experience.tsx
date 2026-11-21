import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Kicker */}
          <div className="mb-12">
            <span className="section-tag">
              02 // Work Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Where I have delivered engineering impact
            </h2>
            <p className="mt-2 text-zinc-400 text-base max-w-2xl">
              Production microservices, high-throughput financial calculations, and incident resolution.
            </p>
          </div>

          <div className="space-y-6">
            {experience.map((job, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.12] transition-colors"
              >
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.06]">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {job.position}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Present
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-300 font-medium">
                      <Building2 className="w-4 h-4 text-zinc-500" />
                      <span>{job.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-zinc-400">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {job.duration}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {job.location}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="grid lg:grid-cols-12 gap-8">
                  {/* Achievements */}
                  <div className="lg:col-span-8 space-y-3.5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Key Deliverables & Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {job.achievements.map((achievement, aIdx) => (
                        <li key={aIdx} className="flex items-start text-sm text-zinc-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 mr-2.5 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack */}
                  <div className="lg:col-span-4 space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Stack & Tools Applied
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono text-zinc-300 bg-white/[0.03] border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
