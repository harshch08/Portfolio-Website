import React from 'react';
import { 
  Code, 
  Database, 
  Cpu, 
  Zap, 
  Terminal, 
  GitBranch, 
  Server, 
  Layers,
  Sparkles,
  FileCode2,
  Boxes
} from 'lucide-react';

interface FloatingIDEProps {
  fileName: string;
  language: string;
  badgeColor: string;
  codeLines: React.ReactNode[];
  className?: string;
  animationClass: string;
}

const FloatingIDECard: React.FC<FloatingIDEProps> = ({
  fileName,
  language,
  badgeColor,
  codeLines,
  className = '',
  animationClass
}) => (
  <div className={`ide-card rounded-xl overflow-hidden pointer-events-auto select-none transition-all duration-300 ${animationClass} ${className}`}>
    {/* Window Header */}
    <div className="flex items-center justify-between px-3.5 py-2 bg-slate-950/60 border-b border-slate-800/80">
      <div className="flex items-center space-x-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
      </div>
      <div className="flex items-center space-x-2">
        <FileCode2 className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-[11px] font-mono text-slate-300 tracking-wide font-medium">{fileName}</span>
      </div>
      <span className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded font-semibold ${badgeColor}`}>
        {language}
      </span>
    </div>

    {/* Code Content */}
    <div className="p-3 font-mono text-[11px] leading-relaxed text-slate-300 overflow-hidden">
      {codeLines.map((line, idx) => (
        <div key={idx} className="flex items-start space-x-2.5">
          <span className="text-[10px] text-slate-600 select-none w-3.5 text-right font-normal">
            {idx + 1}
          </span>
          <div className="whitespace-nowrap font-mono">{line}</div>
        </div>
      ))}
    </div>
  </div>
);

const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background Gradients & Ambient Glow Orbs */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#070d19] to-slate-950" />
      
      {/* High-tech Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,black_40%,transparent_100%)]" />
      
      {/* Ambient Lighting Orbs (Hardware Accelerated) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-blue-600/10 rounded-full blur-[80px] animate-pulse-glow [transform:translate3d(0,0,0)] will-change-transform" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] bg-cyan-500/10 rounded-full blur-[90px] animate-pulse-glow [transform:translate3d(0,0,0)] will-change-transform" style={{ animationDelay: '-4s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-[380px] h-[380px] bg-indigo-600/10 rounded-full blur-[80px] animate-pulse-glow [transform:translate3d(0,0,0)] will-change-transform" style={{ animationDelay: '-2s' }} />

      {/* Floating Syntax & Code Glyphs (Deep Ambient Layer) */}
      <div className="absolute inset-0 overflow-hidden opacity-20 hidden md:block">
        <span className="absolute top-[12%] left-[8%] text-xs font-mono text-cyan-400/60 animate-float-pill-1">
          {`<Developer type="FullStack" />`}
        </span>
        <span className="absolute top-[22%] right-[10%] text-xs font-mono text-indigo-400/60 animate-float-pill-3">
          const [speed] = useState('120fps');
        </span>
        <span className="absolute bottom-[20%] left-[12%] text-xs font-mono text-emerald-400/60 animate-float-pill-2">
          git commit -m "feat: high performance"
        </span>
        <span className="absolute bottom-[18%] right-[14%] text-xs font-mono text-amber-400/60 animate-float-pill-4">
          SELECT * FROM innovations;
        </span>
        <span className="absolute top-[48%] left-[3%] text-xs font-mono text-sky-400/50 animate-float-pill-1">
          async function deploy()
        </span>
        <span className="absolute top-[52%] right-[4%] text-xs font-mono text-purple-400/50 animate-float-pill-3">
          @SpringBootApplication
        </span>
      </div>

      {/* Modern Floating IDE Cards (Desktop / Tablet) */}
      
      {/* 1. Top-Left: Java / Spring Boot */}
      <FloatingIDECard
        fileName="UserController.java"
        language="Java"
        badgeColor="bg-red-500/15 text-red-400 border border-red-500/30"
        className="absolute top-[10%] left-[2%] lg:left-[4%] xl:left-[6%] w-[290px] xl:w-[320px] hidden lg:block opacity-85 hover:opacity-100"
        animationClass="animate-float-1"
        codeLines={[
          <>
            <span className="text-purple-400">@RestController</span>
          </>,
          <>
            <span className="text-purple-400">@RequestMapping</span>
            <span className="text-slate-400">(</span>
            <span className="text-emerald-300">"/api/v1/auth"</span>
            <span className="text-slate-400">)</span>
          </>,
          <>
            <span className="text-blue-400">public class </span>
            <span className="text-amber-300">UserController </span>
            <span className="text-slate-400">{'{'}</span>
          </>,
          <>
            <span className="text-purple-400">  @GetMapping</span>
            <span className="text-slate-400">(</span>
            <span className="text-emerald-300">"/status"</span>
            <span className="text-slate-400">)</span>
          </>,
          <>
            <span className="text-blue-400">  public </span>
            <span className="text-cyan-300">Response </span>
            <span className="text-yellow-300">getMetrics</span>
            <span className="text-slate-400">() {'{'}</span>
          </>,
          <>
            <span className="text-slate-400">    return </span>
            <span className="text-emerald-300">"99.9% Uptime"</span>
            <span className="text-slate-400">;</span>
          </>,
          <>
            <span className="text-slate-400">  {'}'}</span>
          </>,
          <>
            <span className="text-slate-400">{'}'}</span>
          </>
        ]}
      />

      {/* 2. Top-Right: React / TypeScript */}
      <FloatingIDECard
        fileName="Architecture.tsx"
        language="TypeScript"
        badgeColor="bg-cyan-500/15 text-cyan-400 border border-cyan-500/30"
        className="absolute top-[8%] right-[2%] lg:right-[4%] xl:right-[6%] w-[290px] xl:w-[320px] hidden lg:block opacity-85 hover:opacity-100"
        animationClass="animate-float-2"
        codeLines={[
          <>
            <span className="text-purple-400">interface </span>
            <span className="text-amber-300">Engineer </span>
            <span className="text-slate-400">{'{'}</span>
          </>,
          <>
            <span className="text-sky-300">  name: </span>
            <span className="text-emerald-300">'Harsh Chauhan'</span>
            <span className="text-slate-400">;</span>
          </>,
          <>
            <span className="text-sky-300">  role: </span>
            <span className="text-emerald-300">'Software Developer'</span>
            <span className="text-slate-400">;</span>
          </>,
          <>
            <span className="text-sky-300">  stack: </span>
            <span className="text-slate-400">[</span>
            <span className="text-emerald-300">'React'</span>
            <span className="text-slate-400">, </span>
            <span className="text-emerald-300">'Spring'</span>
            <span className="text-slate-400">, </span>
            <span className="text-emerald-300">'AWS'</span>
            <span className="text-slate-400">];</span>
          </>,
          <>
            <span className="text-slate-400">{'}'}</span>
          </>,
          <>
            <span className="text-blue-400">export const </span>
            <span className="text-yellow-300">BuildFuture </span>
            <span className="text-slate-400">= () =&gt; {'{'}</span>
          </>,
          <>
            <span className="text-purple-400">  return </span>
            <span className="text-cyan-300">&lt;ScalableSystem /&gt;</span>
            <span className="text-slate-400">;</span>
          </>,
          <>
            <span className="text-slate-400">{'}'}</span>
          </>
        ]}
      />

      {/* 3. Bottom-Left: Python / AI Pipeline */}
      <FloatingIDECard
        fileName="recommender.py"
        language="Python"
        badgeColor="bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
        className="absolute bottom-[10%] left-[2%] lg:left-[5%] xl:left-[7%] w-[280px] xl:w-[310px] hidden xl:block opacity-80 hover:opacity-100"
        animationClass="animate-float-3"
        codeLines={[
          <>
            <span className="text-purple-400">@optimized_pipeline</span>
            <span className="text-slate-400">(cache=</span>
            <span className="text-amber-400">True</span>
            <span className="text-slate-400">)</span>
          </>,
          <>
            <span className="text-blue-400">def </span>
            <span className="text-yellow-300">recommend_movies</span>
            <span className="text-slate-400">(user_id):</span>
          </>,
          <>
            <span className="text-slate-400">    emb = </span>
            <span className="text-cyan-300">get_embeddings</span>
            <span className="text-slate-400">(user_id)</span>
          </>,
          <>
            <span className="text-slate-400">    scores = model.</span>
            <span className="text-yellow-300">predict</span>
            <span className="text-slate-400">(emb)</span>
          </>,
          <>
            <span className="text-purple-400">    return </span>
            <span className="text-slate-400">scores[:</span>
            <span className="text-amber-400">5</span>
            <span className="text-slate-400">]  </span>
            <span className="text-slate-500"># +50% user satisfaction</span>
          </>
        ]}
      />

      {/* 4. Bottom-Right: SQL & Cloud Data */}
      <FloatingIDECard
        fileName="query_optimization.sql"
        language="SQL"
        badgeColor="bg-amber-500/15 text-amber-400 border border-amber-500/30"
        className="absolute bottom-[12%] right-[2%] lg:right-[5%] xl:right-[7%] w-[280px] xl:w-[310px] hidden xl:block opacity-80 hover:opacity-100"
        animationClass="animate-float-4"
        codeLines={[
          <>
            <span className="text-purple-400 font-bold">SELECT </span>
            <span className="text-sky-300">user.name, count(p.id) </span>
          </>,
          <>
            <span className="text-purple-400 font-bold">FROM </span>
            <span className="text-slate-300">users u</span>
          </>,
          <>
            <span className="text-purple-400 font-bold">JOIN </span>
            <span className="text-slate-300">projects p </span>
            <span className="text-purple-400 font-bold">ON </span>
            <span className="text-slate-300">p.owner = u.id</span>
          </>,
          <>
            <span className="text-purple-400 font-bold">WHERE </span>
            <span className="text-slate-300">u.status = </span>
            <span className="text-emerald-300">'ACTIVE'</span>
          </>,
          <>
            <span className="text-purple-400 font-bold">ORDER BY </span>
            <span className="text-slate-300">p.stars </span>
            <span className="text-purple-400 font-bold">DESC</span>
            <span className="text-slate-400">;</span>
          </>
        ]}
      />

      {/* Sleek Floating Tech Pills (Balanced in Periphery) */}
      
      {/* Spring Boot Pill */}
      <div 
        className="tech-pill absolute top-[28%] left-[18%] hidden md:flex items-center space-x-2 px-3 py-1.5 rounded-full animate-float-pill-1 opacity-80 hover:opacity-100 pointer-events-auto"
      >
        <Server className="w-3.5 h-3.5 text-emerald-400" />
        <span className="text-xs font-mono font-medium text-emerald-300">Spring Boot</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
      </div>

      {/* React Pill */}
      <div 
        className="tech-pill absolute top-[26%] right-[18%] hidden md:flex items-center space-x-2 px-3 py-1.5 rounded-full animate-float-pill-2 opacity-80 hover:opacity-100 pointer-events-auto"
      >
        <Code className="w-3.5 h-3.5 text-cyan-400" />
        <span className="text-xs font-mono font-medium text-cyan-300">React 18</span>
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
      </div>

      {/* TypeScript Pill */}
      <div 
        className="tech-pill absolute bottom-[32%] left-[16%] hidden lg:flex items-center space-x-2 px-3 py-1.5 rounded-full animate-float-pill-3 opacity-80 hover:opacity-100 pointer-events-auto"
      >
        <Zap className="w-3.5 h-3.5 text-blue-400" />
        <span className="text-xs font-mono font-medium text-blue-300">TypeScript</span>
      </div>

      {/* AWS Cloud Pill */}
      <div 
        className="tech-pill absolute bottom-[30%] right-[16%] hidden lg:flex items-center space-x-2 px-3 py-1.5 rounded-full animate-float-pill-4 opacity-80 hover:opacity-100 pointer-events-auto"
      >
        <Cpu className="w-3.5 h-3.5 text-amber-400" />
        <span className="text-xs font-mono font-medium text-amber-300">AWS Cloud</span>
      </div>

      {/* Microservices Pill */}
      <div 
        className="tech-pill absolute top-[70%] left-[26%] hidden xl:flex items-center space-x-2 px-3 py-1.5 rounded-full animate-float-pill-1 opacity-75 hover:opacity-100 pointer-events-auto"
      >
        <Boxes className="w-3.5 h-3.5 text-indigo-400" />
        <span className="text-xs font-mono font-medium text-indigo-300">Microservices</span>
      </div>

      {/* MySQL / DB Pill */}
      <div 
        className="tech-pill absolute top-[68%] right-[26%] hidden xl:flex items-center space-x-2 px-3 py-1.5 rounded-full animate-float-pill-2 opacity-75 hover:opacity-100 pointer-events-auto"
      >
        <Database className="w-3.5 h-3.5 text-orange-400" />
        <span className="text-xs font-mono font-medium text-orange-300">MySQL & NoSQL</span>
      </div>

      {/* Mobile/Tablet ambient floating tech indicators */}
      <div className="tech-pill absolute top-[15%] left-[8%] flex md:hidden items-center space-x-1.5 px-2.5 py-1 rounded-full animate-float-pill-1 opacity-70">
        <Code className="w-3 h-3 text-cyan-400" />
        <span className="text-[10px] font-mono text-cyan-300">FullStack</span>
      </div>
      <div className="tech-pill absolute top-[18%] right-[8%] flex md:hidden items-center space-x-1.5 px-2.5 py-1 rounded-full animate-float-pill-2 opacity-70">
        <Server className="w-3 h-3 text-emerald-400" />
        <span className="text-[10px] font-mono text-emerald-300">Spring Boot</span>
      </div>
      <div className="tech-pill absolute bottom-[22%] left-[10%] flex md:hidden items-center space-x-1.5 px-2.5 py-1 rounded-full animate-float-pill-3 opacity-70">
        <Database className="w-3 h-3 text-blue-400" />
        <span className="text-[10px] font-mono text-blue-300">MySQL</span>
      </div>
      <div className="tech-pill absolute bottom-[24%] right-[10%] flex md:hidden items-center space-x-1.5 px-2.5 py-1 rounded-full animate-float-pill-4 opacity-70">
        <Zap className="w-3 h-3 text-amber-400" />
        <span className="text-[10px] font-mono text-amber-300">Cloud</span>
      </div>
    </div>
  );
};

export default HeroBackground;
