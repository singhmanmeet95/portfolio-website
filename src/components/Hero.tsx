import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ArrowRight,
  Terminal,
  Code2,
  Cpu,
  Sparkles,
  Copy,
  Check,
  MapPin,
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal }) => {
  const [activeCodeTab, setActiveCodeTab] = useState<'profile' | 'stack' | 'dsa'>('profile');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    profile: `// lateNight_3am.ts
export const manmeet = {
  handle: "@manmeet",
  role: "Full-Stack Dev & CS Undergrad @ DTU",
  location: "New Delhi, India",
  caffeineLevel: "94% (Cold Brew + Instant Nescafé)",
  status: "Debugging at 3:14 AM • Open for SDE roles",
  focus: [
    "Full-Stack Web Platforms (Next.js, React, Node)",
    "Low-Latency WebSockets & Hybrid DBs (Postgres, Mongo, Redis)",
    "350+ LeetCode problems solved when I should be sleeping"
  ],
  motto: "If it works on localhost at 3 AM, write tests and ship it."
};`,
    stack: `// techStack.json
{
  "frontend": ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS"],
  "backend": ["Node.js", "Express.js", "WebSockets (Socket.io)", "FastAPI"],
  "databases": ["PostgreSQL", "MongoDB", "Prisma Accelerate", "Redis"],
  "devops": ["Docker", "Vercel", "GCP", "GitHub Actions", "Linux/Bash"],
  "problemSolving": ["C++ STL", "Data Structures", "Dynamic Programming"]
}`,
    dsa: `// dsa_grind.cpp
#include <iostream>
#include <vector>
#include <string>

// 350+ LeetCode problems solved & counting
class LateNightEngineer {
public:
    int leetcode_solved = 350;
    bool is_asleep = false; // never at 3 AM
    
    void debug_dp_state() {
        // Finally found the off-by-one base case in the 2D grid
        std::cout << "Recurrence relation solved: O(N) time, O(1) space" << std::endl;
    }
};`,
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="about"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-white/5 bg-radial-gradient"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-bold tracking-widest text-indigo-400 uppercase bg-indigo-400/10 border border-indigo-400/20 rounded-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>CS Undergrad @ DTU &bull; 3:14 AM Build Mode</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-white font-display">
                Building full-stack platforms & distributed systems that stay up.
              </h1>
              <p className="text-lg sm:text-xl font-normal text-white/50 tracking-tight flex flex-wrap items-center gap-2">
                <span>{PERSONAL_INFO.name}</span>
                <span className="text-white/20">&bull;</span>
                <span className="text-indigo-400">Full-Stack & Systems</span>
                <span className="text-white/20">&bull;</span>
                <span className="text-white/70">350+ LeetCode Solved</span>
              </p>
            </div>

            {/* University & Location Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-white/50">
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md border border-white/10 text-white/70">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                <span>Delhi Technological University (DTU) — CS '27</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md border border-white/10 text-white/70">
                <MapPin className="w-3.5 h-3.5 text-white/50" />
                <span>New Delhi, India</span>
              </div>
            </div>

            {/* Narrative summary */}
            <p className="text-base text-white/60 leading-relaxed max-w-2xl">
              I build web apps with <span className="text-white font-medium">Next.js, TypeScript, PostgreSQL, Prisma, Node.js, and WebSockets</span>. 
              Grounded by <span className="text-white font-medium">350+ solved LeetCode challenges</span>, I care about snappy response times, 
              clean database relations, and code that doesn't blow up in production.
            </p>

            {/* Availability Indicator */}
            <div className="flex items-center gap-4 text-xs font-mono-code text-white/40 pt-1">
              <div className="w-8 h-[1px] bg-white/20"></div>
              <span>Open to SDE Internships & Full-Stack Engineering Roles</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                id="hero-view-projects-btn"
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white hover:bg-white/90 text-black font-semibold text-xs tracking-wider uppercase transition-all"
              >
                <span>Recent Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                id="hero-github-btn"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-xs font-bold tracking-widest text-white uppercase hover:bg-white/10 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <button
                id="hero-resume-btn"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-xs font-bold tracking-widest text-white uppercase hover:bg-white/10 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume.PDF</span>
              </button>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  title="Email"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Tech badges strip */}
            <div className="pt-2">
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase block mb-3">
                Core Production Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Next.js',
                  'React',
                  'TypeScript',
                  'Node.js',
                  'PostgreSQL',
                  'MongoDB',
                  'Prisma',
                  'WebSockets',
                  'Docker',
                  'Tailwind',
                  'C++',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-md text-white/70 hover:text-white hover:border-white/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code & Architecture Terminal Window */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] shadow-2xl shadow-black/80 overflow-hidden">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-white/[0.03] border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="ml-2 text-xs font-mono text-white/40 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    manmeet-dev ~ bash
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={handleCopyCode}
                    title="Copy code snippet"
                    className="p-1.5 text-white/40 hover:text-white hover:bg-white/5 rounded transition-colors"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-indigo-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <button
                    onClick={onOpenTerminal}
                    title="Open Full Command Terminal"
                    className="p-1.5 text-white/40 hover:text-indigo-400 hover:bg-white/5 rounded transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Code File Tabs */}
              <div className="flex items-center gap-1 px-4 pt-2.5 bg-white/[0.01] border-b border-white/5 overflow-x-auto text-xs font-mono">
                <button
                  onClick={() => setActiveCodeTab('profile')}
                  className={`px-3 py-1.5 rounded-t-md transition-colors flex items-center gap-1.5 ${
                    activeCodeTab === 'profile'
                      ? 'bg-white/5 text-indigo-400 border border-b-0 border-white/10 font-medium'
                      : 'text-white/40 hover:text-white'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>lateNight_3am.ts</span>
                </button>
                <button
                  onClick={() => setActiveCodeTab('stack')}
                  className={`px-3 py-1.5 rounded-t-md transition-colors flex items-center gap-1.5 ${
                    activeCodeTab === 'stack'
                      ? 'bg-white/5 text-indigo-400 border border-b-0 border-white/10 font-medium'
                      : 'text-white/40 hover:text-white'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>techStack.json</span>
                </button>
                <button
                  onClick={() => setActiveCodeTab('dsa')}
                  className={`px-3 py-1.5 rounded-t-md transition-colors flex items-center gap-1.5 ${
                    activeCodeTab === 'dsa'
                      ? 'bg-white/5 text-indigo-400 border border-b-0 border-white/10 font-medium'
                      : 'text-white/40 hover:text-white'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>dsa_grind.cpp</span>
                </button>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs overflow-x-auto max-h-[380px] bg-black/40 text-[#e5e5e5] leading-relaxed select-text">
                <pre className="whitespace-pre">
                  <code>{codeSnippets[activeCodeTab]}</code>
                </pre>
              </div>

              {/* Terminal Footer Quick Status */}
              <div className="px-5 py-2.5 bg-white/[0.02] border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/30 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">&bull; UTF-8</span>
                  <span>TypeScript 5.8</span>
                </div>
                <button
                  onClick={onOpenTerminal}
                  className="text-indigo-400 hover:text-indigo-300 hover:underline flex items-center gap-1 lowercase tracking-normal"
                >
                  <span>launch interactive CLI &rarr;</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
