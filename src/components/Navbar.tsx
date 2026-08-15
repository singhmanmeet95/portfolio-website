import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText, Menu, X, Terminal, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'LeetCode & DSA', href: '#competitive-programming' },
    { label: 'Education & Leadership', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 shadow-2xl shadow-black/60 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 text-[#e5e5e5] font-bold text-lg tracking-tighter"
        >
          <div className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center font-mono-code text-indigo-400 font-bold text-xs group-hover:border-indigo-400/50 transition-colors">
            MS
          </div>
          <div className="flex flex-col">
            <span className="leading-none text-white group-hover:text-indigo-400 transition-colors font-display tracking-tight font-semibold">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] font-mono-code text-white/40 font-normal tracking-wider">
              DTU '27 &bull; CS
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Quick Terminal Trigger */}
          <button
            id="nav-terminal-btn"
            onClick={onOpenTerminal}
            title="Interactive Terminal (Cmd+K)"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-code text-white/50 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            <span>Cmd+K</span>
          </button>

          {/* Social Links */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="w-9 h-9 flex items-center justify-center text-white/60 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="w-9 h-9 flex items-center justify-center text-white/60 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Resume Modal Trigger */}
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="px-4 py-2 text-xs font-bold tracking-widest text-white uppercase border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 transition-colors"
          >
            Resume.PDF
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="mobile-resume-btn"
            onClick={onOpenResume}
            className="px-3 py-1.5 text-xs font-bold tracking-widest text-white uppercase border border-white/20 rounded-full hover:bg-white/10 transition-colors"
          >
            Resume
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/60 hover:text-white bg-white/5 border border-white/10 rounded-md"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0d0d]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-5 mt-2 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white rounded-md transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/60 hover:text-white bg-white/5 border border-white/10 rounded-full"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/60 hover:text-white bg-white/5 border border-white/10 rounded-full"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 text-white/60 hover:text-white bg-white/5 border border-white/10 rounded-full"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="px-3 py-1.5 text-xs font-mono-code bg-white/5 text-indigo-400 rounded-md border border-white/10 flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Cmd+K</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
