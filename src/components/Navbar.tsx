import { useState, useEffect } from 'react';
import { Menu, X, Code, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { scrollToSection as lenisScrollTo } from '@/lib/scroll';

const NAV_ITEMS = [
  { name: 'Home', href: '#hero' },
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
    // High-performance scroll listener for navbar background blur (RAF throttled)
    let rafId: number | null = null;
    let lastScrolled = false;

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 20;
        if (isScrolled !== lastScrolled) {
          lastScrolled = isScrolled;
          setScrolled(isScrolled);
        }
        rafId = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // Zero-overhead IntersectionObserver for active section tracking
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
      if (rafId !== null) cancelAnimationFrame(rafId);
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
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo Icon Only */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center cursor-pointer"
            onClick={() => handleNavClick('#hero')}
          >
            <div className="relative">
              <Code className="w-8 h-8 text-primary hover:rotate-12 transition-transform duration-300" />
              <motion.div
                className="absolute inset-0 bg-primary/20 rounded-full blur-md"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Centered Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
            {NAV_ITEMS.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <span className="font-medium">{item.name}</span>
                  
                  {/* Active indicator */}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-primary/5 rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Resume Download Button */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="hidden lg:block"
          >
            <Button
              onClick={downloadResume}
              size="sm"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-medium"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </motion.div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all duration-300"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-border/30 bg-background/50 backdrop-blur-sm rounded-lg mt-2">
                {NAV_ITEMS.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.href)}
                    className={`flex items-center justify-between w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'text-primary bg-primary/10 border border-primary/20'
                        : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    <span className="font-medium">{item.name}</span>
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        layoutId="mobileActiveSection"
                        className="w-2 h-2 bg-primary rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
                
                {/* Mobile Resume Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mt-4 px-4"
                >
                  <Button
                    onClick={downloadResume}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 font-medium"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;