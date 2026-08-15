import React, { useState } from 'react';
import {
  X,
  Github,
  ExternalLink,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Copy,
  Check,
  Database,
  Server,
  Code2
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.sampleCodeSnippet) {
      navigator.clipboard.writeText(project.sampleCodeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl shadow-black overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 bg-white/[0.02] border-b border-white/5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 text-white/50 border border-white/10">
                {project.category}
              </span>
              <span className="text-xs text-white/40 font-mono">
                {project.year}
              </span>
            </div>
            <h2 className="text-2xl font-medium text-white font-display">
              {project.title}
            </h2>
            <p className="text-sm text-white/50 mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/40 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Key Metrics row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center"
              >
                <div className="text-lg font-medium text-white font-display">
                  {m.value}
                </div>
                <div className="text-xs text-white/40 mt-0.5 font-medium">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Bullet Points */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] font-mono flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-indigo-400" />
              Key Engineering Accomplishments
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              {project.bulletPoints.map((bp, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-indigo-400 mt-1">&bull;</span>
                  <span>{bp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Details */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] font-mono flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              System Architecture & Implementation
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {project.architectureDetails.frontend && (
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="font-medium text-white flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                    Frontend & Client
                  </div>
                  <p className="text-white/50 leading-relaxed">
                    {project.architectureDetails.frontend}
                  </p>
                </div>
              )}

              {project.architectureDetails.backend && (
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="font-medium text-white flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-indigo-400" />
                    Backend & APIs
                  </div>
                  <p className="text-white/50 leading-relaxed">
                    {project.architectureDetails.backend}
                  </p>
                </div>
              )}

              {project.architectureDetails.database && (
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="font-medium text-white flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-amber-400" />
                    Database Layer
                  </div>
                  <p className="text-white/50 leading-relaxed">
                    {project.architectureDetails.database}
                  </p>
                </div>
              )}

              {project.architectureDetails.performance && (
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="font-medium text-white flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-purple-400" />
                    Performance Tuning
                  </div>
                  <p className="text-white/50 leading-relaxed">
                    {project.architectureDetails.performance}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-2">
            <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] font-mono">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/60 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Sample Source Code snippet if available */}
          {project.sampleCodeSnippet && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-white/40 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                  {project.sampleCodeSnippet.filename}
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-xs text-white/40 hover:text-white transition-colors font-mono"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Code'}</span>
                </button>
              </div>
              <div className="p-3.5 rounded-xl bg-black/80 border border-white/10 font-mono text-xs text-white/80 overflow-x-auto max-h-56">
                <pre>{project.sampleCodeSnippet.code}</pre>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions with Prominent GitHub Link */}
        <div className="flex items-center justify-between p-6 bg-white/[0.02] border-t border-white/5">
          <div className="flex items-center gap-3">
            <a
              id={`modal-github-${project.id}`}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-white/90 font-bold uppercase tracking-wider text-xs transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>

            {project.liveUrl && (
              <a
                id={`modal-live-${project.id}`}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 font-medium text-xs transition-all"
              >
                <ExternalLink className="w-4 h-4 text-indigo-400" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full text-white/40 hover:text-white text-xs font-mono transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

