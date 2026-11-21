import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { scrollToSection as lenisScrollTo } from '@/lib/scroll';

const NAV_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const sections = NAV_ITEMS.map(item => item.href.substring(1));
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.1,
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    lenisScrollTo(href, -70);
  };

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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-[#090a0f]/85 backdrop-blur-md border-b border-white/[0.08]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Monogram */}
          <button
            onClick={() => handleNavClick('#hero')}
            className="flex items-center space-x-2.5 text-left group"
          >
            <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.12] flex items-center justify-center font-mono text-xs font-semibold text-white group-hover:border-white/30 transition-colors">
              HC
            </div>
            <div className="hidden sm:block">
              <span className="text-sm font-semibold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                Harsh Chauhan
              </span>
              <span className="text-xs text-zinc-500 font-mono block -mt-0.5">
                Software Engineer
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white bg-white/[0.08]'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Resume Download Button */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              onClick={downloadResume}
              size="sm"
              variant="outline"
              className="h-8 text-xs font-medium border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200"
            >
              <Download className="w-3.5 h-3.5 mr-1.5 text-zinc-400" />
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              onClick={downloadResume}
              size="sm"
              variant="outline"
              className="h-8 px-2.5 text-xs font-medium border-white/10 bg-white/[0.04] text-zinc-200"
            >
              <Download className="w-3.5 h-3.5 mr-1 text-zinc-400" />
              CV
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/[0.08] bg-[#0c0e14] px-4 pt-2 pb-4 space-y-1"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="w-full text-left px-3 py-2 rounded-md text-sm text-zinc-300 hover:text-white hover:bg-white/[0.05]"
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
