import React, { useState } from 'react';
import {
  Github,
  ExternalLink,
  Code2,
  Layers,
  ArrowUpRight,
  Sparkles,
  Search,
  CheckCircle2,
  Flame,
  Zap
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'Next.js / Frontend'];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="projects"
      className="relative py-20 bg-[#0d0d0d] border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
              Recent Projects & Repositories
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight font-display">
              Production Systems & Engineering Work
            </h2>
            <p className="text-sm sm:text-base text-white/40 max-w-2xl leading-relaxed">
              Full-stack platforms, event booking architectures, real-time message hubs, and algorithmic engines with complete GitHub source code.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="projects-search-input"
              type="text"
              placeholder="Search by tech or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs font-mono bg-white/5 text-[#e5e5e5] border border-white/10 rounded-md focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/30"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-medium">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'bg-white/5 text-white/50 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            const iconColors = [
              { bg: 'bg-indigo-500/20', text: 'text-indigo-400' },
              { bg: 'bg-emerald-500/20', text: 'text-emerald-400' },
              { bg: 'bg-amber-500/20', text: 'text-amber-400' },
              { bg: 'bg-blue-500/20', text: 'text-blue-400' },
            ];
            const colorTheme = iconColors[idx % iconColors.length];

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group relative flex flex-col justify-between rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6 sm:p-8 space-y-5">
                  
                  {/* Header: Title + Category + Year */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className={`w-8 h-8 rounded-lg ${colorTheme.bg} ${colorTheme.text} flex items-center justify-center`}>
                          <Code2 className="w-4 h-4" />
                        </div>
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-white/5 text-white/60 border border-white/10">
                          {project.category}
                        </span>
                        <span className="text-[10px] font-mono text-white/30">
                          {project.year}
                        </span>
                        {project.featured && (
                          <span className="text-[10px] font-bold tracking-widest uppercase text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-medium text-white font-display group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    {/* External links top-right */}
                    <div className="flex items-center gap-2">
                      <a
                        id={`github-link-${project.id}`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View GitHub Repository"
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          id={`live-link-${project.id}`}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Open Live Deployment"
                          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-colors"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Tagline / Overview */}
                  <p className="text-sm text-white/40 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metric Badges */}
                  <div className="grid grid-cols-3 gap-2 py-1">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-center"
                      >
                        <div className="text-sm sm:text-base font-medium text-white font-display">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-white/40 font-mono truncate mt-0.5 uppercase tracking-wider">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Resume Bullet Highlights */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {project.bulletPoints.slice(0, 2).map((bp, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-white/50">
                        <span className="text-indigo-400 mt-0.5">&bull;</span>
                        <span className="line-clamp-2">{bp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[10px] font-mono text-white/40 bg-white/5 border border-white/10 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card Footer Actions */}
                <div className="p-4 sm:px-8 sm:py-4 bg-white/[0.01] border-t border-white/5 flex items-center justify-between gap-4">
                  
                  {/* Dedicated GitHub Action Button */}
                  <a
                    id={`btn-github-action-${project.id}`}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-bold tracking-widest text-white uppercase hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-white/80" />
                    <span>GitHub Repos</span>
                  </a>

                  {/* Deep-Dive Architecture Trigger */}
                  <button
                    id={`btn-details-${project.id}`}
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                  >
                    <span>Architecture & Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white/[0.02] rounded-2xl border border-white/5">
            <p className="text-white/40 text-sm">No projects matching your search filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-indigo-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Deep-Dive Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};

