import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export const setLenisInstance = (lenis: Lenis | null) => {
  lenisInstance = lenis;
  if (typeof window !== 'undefined') {
    (window as unknown as { __lenis?: Lenis | null }).__lenis = lenis;
  }
};

export const getLenisInstance = (): Lenis | null => {
  return lenisInstance;
};

export const scrollToSection = (target: string | HTMLElement, offset: number = -70) => {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, {
      offset,
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    return;
  }

  // Fallback if Lenis is not available
  if (typeof target === 'string') {
    const el = document.querySelector(target);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  } else if (target) {
    const top = target.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};
