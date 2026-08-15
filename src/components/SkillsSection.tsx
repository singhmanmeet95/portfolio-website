import React, { useState } from 'react';
import {
  Code2,
  Layout,
  Database,
  Cpu,
  Brain,
  CheckCircle2,
  Sparkles,
  Layers
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const iconMap = {
  Code2,
  Layout,
  Database,
  Cpu,
  Brain,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.title)];

  const displayedCategories =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title === selectedCategory);

  return (
    <section
      id="skills"
      className="relative py-20 bg-[#0a0a0a] border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
            Technical Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight font-display">
            Skills & Architecture Toolbelt
          </h2>
          <p className="text-sm sm:text-base text-white/40 leading-relaxed">
            Languages, frameworks, distributed architectures, database engines, and computer science competencies.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 text-xs font-medium">
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

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => {
            const IconComp = iconMap[category.iconName as keyof typeof iconMap] || Layers;
            return (
              <div
                key={category.title}
                className="rounded-2xl bg-white/[0.02] border border-white/5 p-6 space-y-4 hover:border-white/15 transition-all shadow-xl shadow-black/40"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-base font-display">
                      {category.title}
                    </h3>
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                      {category.skills.length} competencies
                    </span>
                  </div>
                </div>

                {/* Skills Badges List */}
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/10 transition-all text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <span className="font-normal text-white/80 group-hover:text-white">
                          {skill.name}
                        </span>
                      </div>
                      
                      {skill.tag && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/40 border border-white/10 uppercase tracking-wider">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Highlight Banner on LLM & Modern Engineering */}
        <div className="mt-10 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-medium uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              AI-Assisted Development & Modern Practices
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Proficient in LLM-assisted code generation, rapid prototyping, automated testing workflows, and CI/CD zero-downtime pipelines on Vercel and GCP.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3 py-1 text-xs font-mono bg-white/5 text-white/70 border border-white/10 rounded-md">
              Prisma Accelerate
            </span>
            <span className="px-3 py-1 text-xs font-mono bg-white/5 text-white/70 border border-white/10 rounded-md">
              Docker + GCP
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

