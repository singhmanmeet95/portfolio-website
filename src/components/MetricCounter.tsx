import React from 'react';
import { Terminal, Trophy, Zap, Flame, Award, Sparkles } from 'lucide-react';
import { HIGHLIGHT_METRICS } from '../data/portfolioData';

const iconMap = {
  Terminal: Terminal,
  Trophy: Trophy,
  Zap: Zap,
  Flame: Flame,
};

export const MetricCounter: React.FC = () => {
  return (
    <section className="relative py-12 border-b border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHT_METRICS.map((metric, idx) => {
            const IconComponent = iconMap[metric.icon as keyof typeof iconMap] || Sparkles;
            return (
              <div
                key={metric.label}
                id={`metric-card-${idx}`}
                className="group relative p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-white/15 transition-all duration-300 shadow-xl shadow-black/40"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-medium tracking-tight text-white font-display group-hover:text-indigo-400 transition-colors">
                    {metric.value}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-sm font-medium text-[#e5e5e5] mb-1">
                  {metric.label}
                </h3>
                <p className="text-xs text-white/40 leading-relaxed">
                  {metric.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

