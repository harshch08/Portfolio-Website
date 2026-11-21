import React from 'react';
import { 
  Github, 
  ExternalLink, 
  ArrowUpRight, 
  CheckCircle2, 
  Globe 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolio';

const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] pb-24 sm:pb-28 lg:pb-36">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="section-tag">
            03 // Featured Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Selected Engineering Projects
          </h2>
          <p className="mt-2 text-zinc-400 text-base max-w-2xl">
            Production full-stack platforms, multimodal AI search pipelines, and recommendation engines.
          </p>
        </div>

        {/* Stepped Stacking Cards Deck Animation */}
        <div className="relative w-full">
          {projects.map((project, index) => {
            const total = projects.length;

            // Stepped sticky offset for smooth layered stacking
            const topOffsetDesktop = 85 + index * 32;
            const topOffsetMobile = 80 + index * 14;

            return (
              <div
                key={project.id || project.title}
                className="sticky w-full top-[var(--top-mobile)] lg:top-[var(--top-desktop)] mb-6 sm:mb-8 lg:mb-[28vh] last:mb-0 [transform:translate3d(0,0,0)] will-change-transform"
                style={{
                  '--top-mobile': `${topOffsetMobile}px`,
                  '--top-desktop': `${topOffsetDesktop}px`,
                  zIndex: index + 10,
                } as React.CSSProperties}
              >
                {/* Layered Card Container */}
                <div 
                  className="w-full rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#0c0e15] p-5 sm:p-7 lg:p-9 transition-all duration-300 relative overflow-hidden [transform:translate3d(0,0,0)] hover:border-white/[0.16]"
                  style={{
                    boxShadow: index === 0 
                      ? '0 12px 35px rgba(0,0,0,0.5)' 
                      : '0 -10px 30px -4px rgba(0,0,0,0.9), 0 20px 45px rgba(0,0,0,0.7)',
                  }}
                >
                  {/* Subtle Accent Glow Overlay */}
                  <div 
                    className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
                    style={{ background: project.accent || '#3b82f6' }}
                  />

                  {/* Header Row */}
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <span 
                        className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]"
                        style={{ color: project.accent || '#60a5fa' }}
                      >
                        {project.category}
                      </span>
                      <span className="hidden sm:inline-block text-xs font-mono text-zinc-500">
                        0{index + 1} / 0{total}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white border border-white/[0.06] transition-colors"
                          aria-label="View source code on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white border border-white/[0.06] transition-colors"
                          aria-label="View live demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Main Content Layout */}
                  <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Details */}
                    <div className="lg:col-span-6 space-y-4 sm:space-y-5">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1.5">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-zinc-400">
                          {project.tagline}
                        </p>
                      </div>

                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Metric Highlights */}
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="grid grid-cols-3 gap-2 py-1">
                          {project.metrics.map((metric, mIdx) => (
                            <div
                              key={mIdx}
                              className="rounded-lg bg-white/[0.02] border border-white/[0.06] p-2 sm:p-2.5 text-center"
                            >
                              <div 
                                className="text-xs sm:text-sm font-bold font-mono text-white truncate"
                                style={{ color: project.accent || '#ffffff' }}
                              >
                                {metric.value}
                              </div>
                              <div className="text-[9px] sm:text-[10px] text-zinc-500 uppercase tracking-wider font-mono mt-0.5 truncate">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Features / Highlights */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                          Technical Highlights
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {project.features.slice(0, 3).map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start text-xs sm:text-sm text-zinc-300 leading-relaxed">
                              <CheckCircle2 
                                className="w-3.5 h-3.5 mr-2 mt-0.5 flex-shrink-0" 
                                style={{ color: project.accent || '#60a5fa' }}
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-xs font-mono text-zinc-300 bg-white/[0.03] border border-white/[0.06]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3 pt-2">
                        {project.demo && (
                          <Button
                            asChild
                            size="sm"
                            className="bg-white hover:bg-zinc-200 text-zinc-950 font-medium px-4 h-9 shadow transition-colors flex items-center justify-center"
                          >
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <Globe className="w-3.5 h-3.5 mr-1.5" />
                              Live Deployment
                              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                            </a>
                          </Button>
                        )}

                        {project.github && (
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-zinc-200 font-medium px-4 h-9 flex items-center justify-center"
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-3.5 h-3.5 mr-1.5" />
                              Source Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Screenshot Showcase */}
                    <div className="lg:col-span-6 w-full">
                      <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#07080c] group">
                        <div className="aspect-[16/10] w-full overflow-hidden relative">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
