import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  ArrowUpRight, 
  Layers, 
  CheckCircle2, 
  Zap,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { portfolioData } from '@/data/portfolio';

// Card themed styles matching the layered stepped deck
const projectCardThemes = [
  {
    bgGradient: 'bg-gradient-to-br from-[#1e3a8a] via-[#0f172a] to-[#020617]',
    border: 'border-sky-500/30 hover:border-sky-400/60',
    accentColor: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.25)',
    topBarBg: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
    buttonGradient: 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500',
  },
  {
    bgGradient: 'bg-gradient-to-br from-[#581c87] via-[#2e1065] to-[#020617]',
    border: 'border-purple-500/30 hover:border-purple-400/60',
    accentColor: '#c084fc',
    glowColor: 'rgba(192, 132, 252, 0.25)',
    topBarBg: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
    buttonGradient: 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500',
  },
  {
    bgGradient: 'bg-gradient-to-br from-[#831843] via-[#4c0519] to-[#020617]',
    border: 'border-rose-500/30 hover:border-rose-400/60',
    accentColor: '#fb7185',
    glowColor: 'rgba(251, 113, 133, 0.25)',
    topBarBg: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
    buttonGradient: 'bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500',
  },
  {
    bgGradient: 'bg-gradient-to-br from-[#134e4a] via-[#042f2e] to-[#020617]',
    border: 'border-teal-500/30 hover:border-teal-400/60',
    accentColor: '#2dd4bf',
    glowColor: 'rgba(45, 212, 191, 0.25)',
    topBarBg: 'bg-teal-500/15 text-teal-300 border-teal-500/30',
    buttonGradient: 'bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500',
  }
];

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Lighting (Hardware Accelerated) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[450px] bg-primary/10 rounded-full blur-[90px] pointer-events-none [transform:translate3d(0,0,0)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4"
          >
            <Layers className="w-4 h-4 text-primary" />
            Interactive Portfolio Stack
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-extrabold tracking-tight"
          >
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </motion.h2>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-primary mx-auto rounded-full mt-4 mb-5" 
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Scroll down to view each project slide up and stack smoothly over the previous card.
          </motion.p>
        </div>

        {/* Stepped Stacking Cards Deck */}
        <div className="relative w-full">
          {projects.map((project, index) => {
            const theme = projectCardThemes[index % projectCardThemes.length];
            const total = projects.length;

            // Stepped sticky offset so each previous card header remains visible at the top
            // Desktop: top: calc(85px + index * 36px)
            // Mobile:  top: calc(70px + index * 24px)
            const topOffsetDesktop = 85 + index * 36;
            const topOffsetMobile = 70 + index * 24;

            return (
              <div
                key={project.id || project.title}
                className="sticky w-full mb-[24vh] sm:mb-[32vh] lg:mb-[40vh] last:mb-12 [transform:translate3d(0,0,0)] will-change-transform"
                style={{
                  top: `clamp(${topOffsetMobile}px, ${topOffsetDesktop}px, ${topOffsetDesktop}px)`,
                  zIndex: index + 10,
                }}
              >
                {/* Outer Card Shell with Elevation Box-Shadow and Theme Background */}
                <div 
                  className={`w-full rounded-2xl sm:rounded-3xl md:rounded-[2rem] border ${theme.border} ${theme.bgGradient} p-5 sm:p-7 md:p-9 transition-all duration-300 relative overflow-hidden [transform:translate3d(0,0,0)]`}
                  style={{
                    boxShadow: index === 0 
                      ? '0 20px 50px rgba(0,0,0,0.6)' 
                      : '0 -14px 35px -5px rgba(0,0,0,0.9), 0 25px 60px rgba(0,0,0,0.85)',
                  }}
                >
                  {/* Subtle Accent Glow Overlay */}
                  <div 
                    className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-2xl opacity-25 pointer-events-none"
                    style={{ background: theme.glowColor }}
                  />

                  {/* Top Stepped Header Bar */}
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${theme.topBarBg} border shadow-sm`}>
                        <Sparkles className="w-3.5 h-3.5" />
                        {project.category || 'Featured Work'}
                      </span>
                      <span className="hidden sm:inline-block text-xs text-white/70 font-medium">
                        {project.tagline}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center font-mono text-xs sm:text-sm font-bold text-white/80 bg-black/40 px-3 py-1 rounded-full border border-white/10">
                        <span className="text-white">0{index + 1}</span>
                        <span className="mx-1 text-white/40">/</span>
                        <span>0{total}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 sm:p-2 rounded-xl bg-black/30 hover:bg-black/60 text-white/80 hover:text-white border border-white/10 transition-colors"
                          title="View Source Code"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 sm:p-2 rounded-xl bg-black/30 hover:bg-black/60 text-white/80 hover:text-white border border-white/10 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Card Main Title */}
                  <div className="relative z-10 mb-6 text-left">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* 2-Column Responsive Split */}
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                    
                    {/* Left Column: Project Details & Action */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                      <p className="text-xs sm:text-sm md:text-base text-slate-200/90 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Performance Metrics Pills */}
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="grid grid-cols-3 gap-2">
                          {project.metrics.map((metric, mIdx) => (
                            <div 
                              key={mIdx}
                              className="rounded-xl bg-black/30 border border-white/10 p-2 sm:p-2.5 text-center backdrop-blur-sm"
                            >
                              <div 
                                className="text-sm sm:text-base font-bold font-poppins"
                                style={{ color: theme.accentColor }}
                              >
                                {metric.value}
                              </div>
                              <div className="text-[10px] sm:text-xs text-white/60 font-medium uppercase tracking-wider mt-0.5 truncate">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Architectural Highlights */}
                      <div className="space-y-1.5">
                        <h4 className="text-[11px] sm:text-xs font-semibold text-white/70 uppercase tracking-wider flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5" style={{ color: theme.accentColor }} />
                          Key Architectural Highlights
                        </h4>
                        <ul className="space-y-1.5">
                          {project.features.slice(0, 3).map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start text-xs sm:text-sm text-slate-200/85 leading-normal">
                              <CheckCircle2 
                                className="w-3.5 h-3.5 mr-2 mt-0.5 flex-shrink-0"
                                style={{ color: theme.accentColor }}
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-black/30 hover:bg-black/50 text-white text-[11px] sm:text-xs px-2.5 py-0.5 font-medium border border-white/10 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* CTA Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <Button
                          asChild
                          size="sm"
                          className={`flex-1 sm:flex-initial ${theme.buttonGradient} text-white font-semibold px-5 shadow-lg transition-all duration-300 group/btn`}
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <Globe className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                            Live Project
                            <ArrowUpRight className="w-4 h-4 ml-1.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </a>
                        </Button>

                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1 sm:flex-initial border-white/20 bg-black/30 hover:bg-black/50 text-white font-medium px-4 transition-all duration-300"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Source Code
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Right Column: Project Showcase Image Frame */}
                    <div className="lg:col-span-7">
                      <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-black/60 border border-white/20 shadow-2xl group/img">
                        {/* macOS Header Mockup */}
                        <div className="flex items-center justify-between px-3.5 py-2 bg-black/70 border-b border-white/10">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
                          </div>
                          <div className="flex-1 max-w-[220px] sm:max-w-[280px] mx-auto bg-white/5 text-[10px] sm:text-[11px] text-white/70 px-3 py-0.5 rounded-md text-center truncate border border-white/5 font-mono">
                            https://{project.id}.harsh.dev
                          </div>
                          <div className="w-2.5 h-2.5 opacity-0" />
                        </div>

                        {/* Project Demo Image */}
                        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-950">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
                            loading="lazy"
                          />

                          {/* Gradient Bottom Vignette */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                          {/* Overlay Live Preview Tag */}
                          <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              <span className="text-[11px] sm:text-xs font-medium text-white">Interactive System Preview</span>
                            </div>
                            <a 
                              href={project.demo} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-[11px] sm:text-xs font-semibold flex items-center gap-1 text-sky-400 hover:text-white transition-colors"
                            >
                              Explore <ArrowUpRight className="w-3 h-3" />
                            </a>
                          </div>
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