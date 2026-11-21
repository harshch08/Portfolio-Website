import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Code2, Copy, Check, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="mb-14">
            <span className="section-tag">
              06 // Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Let's Connect
            </h2>
            <p className="mt-2 text-zinc-400 text-base max-w-2xl">
              I am open to software engineering opportunities, technical collaborations, and distributed systems discussions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Primary Action Card */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Direct Contact
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Feel free to reach out directly via email or phone. I typically respond within 24 hours.
                </p>
              </div>

              {/* Email Box with copy button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center space-x-3 truncate">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-zinc-500 uppercase">Email Address</div>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm font-medium text-white hover:text-blue-400 transition-colors truncate block"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={copyEmail}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 hover:text-white border border-white/[0.08] transition-colors flex items-center justify-center gap-1.5"
                    aria-label="Copy email"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${personal.email}`}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-zinc-950 hover:bg-zinc-200 transition-colors flex items-center justify-center gap-1"
                  >
                    Send
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone and Location Cards */}
              <div className="grid sm:grid-cols-2 gap-3.5">
                <a
                  href={`tel:${personal.phone}`}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors flex items-center space-x-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-zinc-500 uppercase">Phone</div>
                    <div className="text-xs sm:text-sm font-medium text-zinc-200 group-hover:text-white transition-colors truncate">
                      {personal.phone}
                    </div>
                  </div>
                </a>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-400 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-zinc-500 uppercase">Location</div>
                    <div className="text-xs sm:text-sm font-medium text-zinc-200 truncate">
                      {personal.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Online Profiles
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Explore my repositories, professional updates, and algorithmic problem solving.
              </p>

              <div className="space-y-2.5">
                {[
                  {
                    name: 'GitHub',
                    desc: 'Repositories, open source & side projects',
                    href: personal.social.github,
                    icon: Github,
                  },
                  {
                    name: 'LinkedIn',
                    desc: 'Professional history & networking',
                    href: personal.social.linkedin,
                    icon: Linkedin,
                  },
                  {
                    name: 'LeetCode',
                    desc: 'Data structures & algorithms practice',
                    href: personal.social.leetcode,
                    icon: Code2,
                  },
                ].map(({ name, desc, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-white/[0.12] transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                          {name}
                        </div>
                        <div className="text-xs text-zinc-500">
                          {desc}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
