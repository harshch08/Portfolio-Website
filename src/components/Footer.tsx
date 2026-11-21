import { Github, Linkedin, Mail, Code2, ArrowUp } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { scrollToSection } from '@/lib/scroll';

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-[#07080c]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.05]">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="text-sm font-semibold text-white tracking-tight">
              {personal.name}
            </div>
            <div className="text-xs text-zinc-500 font-mono mt-0.5">
              Full Stack Developer • TCS
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-zinc-400">
            {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                className="hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-2">
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
                className="p-2 text-zinc-400 hover:text-white hover:bg-white/[0.05] rounded-md transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono gap-3">
          <div>
            © {currentYear} Harsh Chauhan. Built with React, TypeScript & Tailwind CSS.
          </div>
          <button
            onClick={() => scrollToSection('#hero')}
            className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
