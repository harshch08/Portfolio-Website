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
    <section id="projects" className="relative py-12 sm:py-16 lg:py-24 px-3.5 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-32">
      {/* Background Lighting (Hardware Accelerated) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] lg:w-[900px] h-[400px] bg-primary/10 rounded-full blur-[80px] pointer-events-none [transform:translate3d(0,0,0)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2.5 sm:mb-3"
          >
            <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            Interactive Portfolio Stack
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-extrabold tracking-tight"
          >
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </motion.h2>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '5rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-primary mx-auto rounded-full mt-2.5 sm:mt-3 mb-3" 
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-xs sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2"
          >
            Scroll down to view each project slide up and stack smoothly over the previous card.
          </motion.p>
        </div>

        {/* Stepped Stacking Cards Deck (Mobile + Desktop Sticky) */}
        <div className="relative w-full">
          {projects.map((project, index) => {
            const theme = projectCardThemes[index % projectCardThemes.length];
            const total = projects.length;

            // Stepped sticky offset:
            // Desktop: top: calc(85px + index * 32px)
            // Mobile:  top: calc(90px + index * 14px)
            const topOffsetDesktop = 85 + index * 32;
            const topOffsetMobile = 90 + index * 14;

            return (
              <div
                key={project.id || project.title}
                className="sticky w-full top-[var(--top-mobile)] lg:top-[var(--top-desktop)] mb-4 sm:mb-6 lg:mb-[32vh] last:mb-0 [transform:translate3d(0,0,0)] will-change-transform"
                style={{
                  '--top-mobile': `${topOffsetMobile}px`,
                  '--top-desktop': `${topOffsetDesktop}px`,
                  zIndex: index + 10,
                } as React.CSSProperties}
              >
                {/* Outer Card Shell */}
                <div 
                  className={`w-full rounded-2xl sm:rounded-3xl md:rounded-[2rem] border ${theme.border} ${theme.bgGradient} p-3.5 sm:p-5 md:p-7 lg:p-9 transition-all duration-300 relative overflow-hidden [transform:translate3d(0,0,0)]`}
                  style={{
                    boxShadow: index === 0 
                      ? '0 12px 35px rgba(0,0,0,0.5)' 
                      : '0 -8px 25px -4px rgba(0,0,0,0.85), 0 18px 45px rgba(0,0,0,0.7)',
                  }}
                >
                  {/* Subtle Accent Glow Overlay */}
                  <div 
                    className="absolute -top-16 -right-16 sm:-top-20 sm:-right-20 w-56 h-56 sm:w-80 sm:h-80 rounded-full blur-2xl opacity-20 pointer-events-none"
                    style={{ background: theme.glowColor }}
                  />

                  {/* Top Header Bar */}
                  <div className="relative z-10 flex items-center justify-between gap-2 pb-2.5 sm:pb-4 mb-2.5 sm:mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                      <span className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider ${theme.topBarBg} border shadow-sm`}>
                        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        {project.category || 'Featured Work'}
                      </span>
                      <span className="hidden md:inline-block text-xs text-white/70 font-medium truncate max-w-xs">
                        {project.tagline}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex items-center font-mono text-[11px] sm:text-sm font-bold text-white/90 bg-black/60 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/10">
                        <span className="text-white">0{index + 1}</span>
                        <span className="mx-1 text-white/40">/</span>
                        <span>0{total}</span>
                      </div>

                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-black/40 hover:bg-black/70 text-white/80 hover:text-white border border-white/10 transition-colors flex items-center justify-center"
                          title="View Source Code"
                        >
                          <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-black/40 hover:bg-black/70 text-white/80 hover:text-white border border-white/10 transition-colors flex items-center justify-center"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Card Title */}
                  <div className="relative z-10 mb-2.5 sm:mb-4 text-left">
                    <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-poppins font-bold text-white tracking-tight leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  {/* MOBILE-ONLY COMPACT VIEW (< lg) */}
                  <div className="relative z-10 flex flex-col space-y-2.5 sm:space-y-3.5 lg:hidden">
                    {/* Compact Image Banner */}
                    <div className="relative w-full aspect-[21/9] sm:aspect-[16/8] max-h-[140px] sm:max-h-[170px] rounded-xl overflow-hidden bg-slate-950 border border-white/15 shadow-md group/mimg">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[9px] sm:text-[10px] text-white bg-black/75 backdrop-blur-md px-2 py-1 rounded-md border border-white/15">
                        <span className="truncate">{project.tagline}</span>
                        <span className="text-sky-400 font-semibold flex items-center gap-0.5 flex-shrink-0 ml-2">Live <ArrowUpRight className="w-2.5 h-2.5" /></span>
                      </div>
                    </div>

                    {/* Compact 1-2 sentence description */}
                    <p className="text-[11px] sm:text-xs text-slate-200/90 leading-snug line-clamp-2">
                      {project.description}
                    </p>

                    {/* Compact Metrics Row */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                        {project.metrics.map((metric, mIdx) => (
                          <div 
                            key={mIdx}
                            className="rounded-lg bg-black/40 border border-white/10 p-1.5 sm:p-2 text-center"
                          >
                            <div 
                              className="text-[11px] sm:text-xs font-bold font-poppins truncate"
                              style={{ color: theme.accentColor }}
                            >
                              {metric.value}
                            </div>
                            <div className="text-[8px] sm:text-[9px] text-white/60 font-medium uppercase tracking-wider truncate">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges (Compact) */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="bg-black/50 text-white text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md font-medium border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Side-by-Side Action Buttons (Fixed Mobile Row) */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <Button
                        asChild
                        size="sm"
                        className={`h-9 text-xs ${theme.buttonGradient} text-white font-semibold shadow-md flex items-center justify-center gap-1.5`}
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Globe className="w-3.5 h-3.5" />
                          Live Demo
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="h-9 text-xs border-white/20 bg-black/40 hover:bg-black/60 text-white font-medium flex items-center justify-center gap-1.5"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3.5 h-3.5" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* DESKTOP-ONLY 2-COLUMN VIEW (lg:) */}
                  <div className="relative z-10 hidden lg:grid grid-cols-12 gap-8 items-start">
                    {/* Left Column: Full Details & Actions */}
                    <div className="col-span-5 flex flex-col justify-between space-y-5">
                      <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Performance Metrics */}
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="grid grid-cols-3 gap-2.5">
                          {project.metrics.map((metric, mIdx) => (
                            <div 
                              key={mIdx}
                              className="rounded-xl bg-black/40 border border-white/10 p-2.5 text-center backdrop-blur-sm"
                            >
                              <div 
                                className="text-sm md:text-base font-bold font-poppins truncate"
                                style={{ color: theme.accentColor }}
                              >
                                {metric.value}
                              </div>
                              <div className="text-[10px] text-white/60 font-medium uppercase tracking-wider mt-0.5 truncate">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Architectural Highlights */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-white/70 uppercase tracking-wider flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5" style={{ color: theme.accentColor }} />
                          Key Highlights
                        </h4>
                        <ul className="space-y-1.5">
                          {project.features.slice(0, 3).map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start text-sm text-slate-200/85 leading-normal">
                              <CheckCircle2 
                                className="w-3.5 h-3.5 mr-2 mt-0.5 flex-shrink-0"
                                style={{ color: theme.accentColor }}
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-black/40 hover:bg-black/60 text-white text-xs px-2.5 py-1 font-medium border border-white/10 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Action CTA Buttons */}
                      <div className="flex items-center gap-3 pt-2">
                        <Button
                          asChild
                          size="sm"
                          className={`min-h-[44px] flex-1 ${theme.buttonGradient} text-white font-semibold px-5 shadow-lg transition-all duration-300 group/btn justify-center`}
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <Globe className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                            Live Demo
                            <ArrowUpRight className="w-4 h-4 ml-1.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </a>
                        </Button>

                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="min-h-[44px] flex-1 border-white/20 bg-black/40 hover:bg-black/60 text-white font-medium px-4 transition-all duration-300 justify-center"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Source Code
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Right Column: Project Showcase Image Frame */}
                    <div className="col-span-7 w-full">
                      <div className="relative rounded-2xl overflow-hidden bg-black/70 border border-white/15 shadow-xl group/img">
                        {/* macOS Header Mockup */}
                        <div className="flex items-center justify-between px-3.5 py-2 bg-black/80 border-b border-white/10">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
                          </div>
                          <div className="flex-1 max-w-[260px] mx-auto bg-white/5 text-[11px] text-white/70 px-2.5 py-0.5 rounded text-center truncate border border-white/5 font-mono">
                            https://{project.id}.harsh.dev
                          </div>
                          <div className="w-2.5 h-2.5 opacity-0" />
                        </div>

                        {/* Project Showcase Image */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
                            loading="lazy"
                          />

                          {/* Gradient Bottom Vignette */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

                          {/* Overlay Live Preview Tag */}
                          <div className="absolute bottom-2.5 right-2.5 left-2.5 flex items-center justify-between p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              <span className="text-xs font-medium text-white truncate">Interactive Preview</span>
                            </div>
                            <a 
                              href={project.demo} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-xs font-semibold flex items-center gap-1 text-sky-400 hover:text-white transition-colors flex-shrink-0"
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