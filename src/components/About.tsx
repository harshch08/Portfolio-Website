import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Mail, Phone, Server, Layers, Cpu, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { personal } = portfolioData;

  const corePillars = [
    {
      title: "Microservices Architecture",
      description: "Hands-on experience migrating legacy monoliths to decoupled Spring Boot microservices with strong fault isolation.",
      icon: Server,
    },
    {
      title: "High-Throughput APIs",
      description: "Engineered scalable REST services, query optimizations, and asynchronous processing reducing response times by ~30%.",
      icon: Layers,
    },
    {
      title: "Applied AI & Vector Search",
      description: "Designed multimodal visual search pipelines using CLIP embeddings, cosine similarity, and Gemini LLM automations.",
      icon: Cpu,
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
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
              01 // Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Engineering scalable systems with precision
            </h2>
            <p className="mt-2 text-zinc-400 text-base max-w-2xl">
              From enterprise microservices at TCS to multimodal AI search applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left: Profile Card */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
              <div className="w-full max-w-[280px] rounded-2xl overflow-hidden border border-white/[0.08] bg-zinc-900/60 p-2.5 mb-6">
                <img
                  src="/profile-photo.jpeg"
                  alt={`${personal.name}`}
                  className="w-full aspect-square object-cover rounded-xl grayscale-[20%] hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>

              {/* Quick Info List */}
              <div className="w-full space-y-2.5 font-mono text-xs text-zinc-400">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-zinc-500">Current Role</span>
                  <span className="text-zinc-200 font-sans font-medium">Software Developer @ TCS</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-zinc-500">Location</span>
                  <span className="text-zinc-200 font-sans font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-zinc-400" />
                    {personal.location}
                  </span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-zinc-500">Education</span>
                  <span className="text-zinc-200 font-sans font-medium">MCA (Graphic Era Univ)</span>
                </div>
              </div>
            </div>

            {/* Right: Bio & Engineering Pillars */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4 text-zinc-300 leading-relaxed text-base sm:text-lg">
                <p>
                  I am a <strong className="text-white font-medium">Full Stack Developer</strong> currently working at <strong className="text-white font-medium">Tata Consultancy Services</strong>, focused on engineering resilient microservices, distributed backend architectures, and high-performance web applications.
                </p>
                <p className="text-zinc-400 text-sm sm:text-base">
                  My experience spans Java, Spring Boot, Angular, and React, alongside production database performance tuning and CI/CD pipelines. I have led monolithic-to-microservices migrations, automated tax computation engines for bulk invoices, and built machine learning applications incorporating CLIP vector search and Gemini-powered catalog intelligence.
                </p>
              </div>

              {/* Core Engineering Pillars */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Core Technical Competencies
                </h3>
                <div className="grid sm:grid-cols-3 gap-3.5">
                  {corePillars.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <div
                        key={pillar.title}
                        className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-semibold text-white mb-1.5">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Contact Quick Links */}
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-zinc-500" />
                  {personal.email}
                </a>
                <span className="text-zinc-700">•</span>
                <a
                  href={`tel:${personal.phone}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-zinc-500" />
                  {personal.phone}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
