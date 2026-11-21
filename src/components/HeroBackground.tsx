import React from 'react';

const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep Obsidian Background */}
      <div className="absolute inset-0 bg-[#090a0f]" />

      {/* Subtle Developer Micro-Grid */}
      <div className="absolute inset-0 bg-subtle-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black_30%,transparent_90%)]" />

      {/* Elegant Ambient Focal Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-blue-600/10 via-indigo-600/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* Bottom fade into the page */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#090a0f] to-transparent pointer-events-none" />
    </div>
  );
};

export default HeroBackground;
