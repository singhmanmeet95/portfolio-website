import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowUp, Terminal, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenTerminal }) => {
  const [istTime, setIstTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setIstTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-12 text-white/40 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand & Tagline */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-medium text-white text-base font-display">
                {PERSONAL_INFO.name}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-white/50 text-[10px] font-mono border border-white/10">
                DTU Computer Science
              </span>
            </div>
            <p className="text-white/40 text-xs">
              Building full-stack platforms, low-latency WebSocket engines, and solving DSA problems when the world is asleep.
            </p>
          </div>

          {/* Live Status & Clock */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono bg-white/[0.02] px-4 py-2 rounded-xl border border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/40">New Delhi (IST):</span>
              <span className="text-white font-medium">{istTime || 'Loading...'}</span>
              <span className="text-white/30 text-[10px] pl-1">&bull; Awake &amp; coding</span>
            </div>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 text-xs font-medium transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-white" />
          </button>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-[11px] font-mono">
          <div>
            &copy; {new Date().getFullYear()} Manmeet Singh &bull; Written at 3 AM with React, TypeScript &amp; too much caffeine.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenTerminal}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Terminal className="w-3 h-3" />
              <span>CLI Terminal</span>
            </button>
            <span>&bull;</span>
            <button
              onClick={onOpenResume}
              className="hover:text-white transition-colors"
            >
              Resume PDF
            </button>
            <span>&bull;</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>&bull;</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

