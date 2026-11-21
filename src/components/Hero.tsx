import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Download, ArrowDown, MapPin, Briefcase } from 'lucide-react';
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

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16">
      <HeroBackground />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center flex flex-col items-center"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-zinc-300 tracking-wide">
              Full Stack Developer • TCS
            </span>
            <span className="text-zinc-600 font-mono">|</span>
            <span className="text-xs text-zinc-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-zinc-500" />
              Kolkata, India
            </span>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Harsh Chauhan
          </h1>

          <p className="text-lg sm:text-2xl font-medium text-zinc-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            Building scalable microservices, full-stack architectures & ML-enabled systems.
          </p>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Software Developer with expertise in Java, Spring Boot, Angular, and cloud services. 
            Experienced in monolith-to-microservices migration, high-throughput REST APIs, and applied AI search pipelines.
          </p>

          {/* Core Tech Stack Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-xl">
            {['Java', 'Spring Boot', 'Microservices', 'Angular', 'React', 'Node.js', 'MySQL', 'AWS', 'CLIP / AI'].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono text-zinc-300 bg-white/[0.03] border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12 w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-white hover:bg-zinc-200 text-zinc-950 font-medium px-6 shadow-md transition-all duration-200 min-h-[44px]"
              onClick={() => scrollToSection('#projects')}
            >
              View Selected Work
              <ArrowDown className="w-4 h-4 ml-2" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-zinc-200 font-medium px-6 transition-all duration-200 min-h-[44px]"
              onClick={() => scrollToSection('#contact')}
            >
              Get In Touch
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-zinc-200 font-medium px-5 transition-all duration-200 min-h-[44px]"
              onClick={downloadResume}
            >
              <Download className="w-4 h-4 mr-2 text-zinc-400" />
              Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-2">
            {[
              { href: personal.social.github, icon: Github, label: 'GitHub' },
              { href: personal.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
              { href: personal.social.leetcode, icon: Code2, label: 'LeetCode' },
              { href: `mailto:${personal.email}`, icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="p-2.5 rounded-lg text-zinc-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
