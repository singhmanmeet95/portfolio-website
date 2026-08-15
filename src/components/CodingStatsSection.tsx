import React from 'react';
import {
  Terminal,
  ExternalLink,
  Zap,
  Code2,
  CheckCircle,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import { CODING_PROFILES } from '../data/portfolioData';

export const CodingStatsSection: React.FC = () => {
  const leetcode = CODING_PROFILES[0];

  const topicBreakdown = [
    {
      topic: 'Arrays, Strings & Two-Pointers',
      count: '120+ Solved',
      percentage: '90%',
      color: 'bg-emerald-500',
      textColor: 'text-emerald-400',
      description: 'Sliding window, binary search, prefix sums, and fast/slow pointer traversals without out-of-bounds panics.',
    },
    {
      topic: 'Trees, Graphs, BFS & DFS',
      count: '90+ Solved',
      percentage: '80%',
      color: 'bg-purple-500',
      textColor: 'text-purple-400',
      description: 'Topological sort, Dijkstra, tree depth traversals, recursion trees, and connected component cycles.',
    },
    {
      topic: 'Dynamic Programming & Recursion',
      count: '80+ Solved',
      percentage: '75%',
      color: 'bg-indigo-500',
      textColor: 'text-indigo-400',
      description: 'Tabulation vs memoization, 1D/2D grid state transitions, 0/1 Knapsack variants, and optimal substructure.',
    },
    {
      topic: 'Hash Maps, Stacks & Queues',
      count: '60+ Solved',
      percentage: '70%',
      color: 'bg-amber-500',
      textColor: 'text-amber-400',
      description: 'Monotonic stacks for next-greater elements, LRU cache designs, frequency maps, and priority queues.',
    },
  ];

  const problemSolvingPillars = [
    {
      icon: Cpu,
      title: 'Obsessed with Time & Space Bounds',
      detail: 'I hate unnecessary memory allocations. If a problem can be solved in O(1) auxiliary space or O(N) single-pass time instead of sloppy nested loops, I will spend the extra 20 minutes getting it right.',
    },
    {
      icon: Layers,
      title: 'Dry-Running Edge Cases First',
      detail: 'Null pointers, empty inputs, duplicate elements, integer overflows, and single-element bounds. I test the weirdest edge cases on paper before hitting submit.',
    },
    {
      icon: Zap,
      title: 'Applied Directly to Real Systems',
      detail: 'DSA is not just interview trivia: I use hash lookups for O(1) in-memory cache layers, sliding windows for token rate-limiters, and graph BFS for real-time WebSocket room propagation.',
    },
  ];

  return (
    <section
      id="competitive-programming"
      className="relative py-20 bg-[#0d0d0d] border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
            Data Structures & Algorithms
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight font-display">
            LeetCode & Problem Solving Foundations
          </h2>
          <p className="text-sm sm:text-base text-white/40 leading-relaxed">
            Consistent algorithmic practice solving 350+ problems across dynamic programming, graph algorithms, trees, and core data structures.
          </p>
        </div>

        {/* Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Card: LeetCode Profile & Topic Mastery Breakdown (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-white/[0.02] border border-white/5 p-6 sm:p-8 space-y-6 shadow-xl shadow-black/40 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 text-lg font-bold font-display">
                  LC
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white font-display">
                    LeetCode Profile
                  </h3>
                  <p className="text-xs text-white/40 font-mono">
                    Username: <span className="text-white/80 font-medium">@{leetcode?.username || 'manmeet'}</span>
                  </p>
                </div>
              </div>

              <a
                href={leetcode?.url || 'https://leetcode.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/20 hover:bg-white/10 text-white text-xs font-medium transition-colors"
              >
                <span>View LeetCode</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Highlight Solved Metric Banner */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase block mb-1">
                  Algorithmic Challenges Solved
                </span>
                <span className="text-3xl sm:text-4xl font-medium text-white font-display">
                  350+
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Code2 className="w-6 h-6" />
              </div>
            </div>

            {/* Topic Mastery Distribution */}
            <div className="space-y-4 pt-1">
              <h4 className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
                Core Topic Distribution
              </h4>
              
              <div className="space-y-3.5">
                {topicBreakdown.map((item) => (
                  <div key={item.topic} className="p-3 rounded-xl bg-white/[0.01] border border-white/5 space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/80 font-medium">{item.topic}</span>
                      <span className={`font-mono font-medium ${item.textColor}`}>{item.count}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full transition-all duration-500`} style={{ width: item.percentage }} />
                    </div>
                    <p className="text-[11px] text-white/40 leading-normal">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Card: Problem Solving Methodology & Principles (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-white/[0.02] border border-white/5 p-6 sm:p-8 space-y-6 shadow-xl shadow-black/40">
            <div className="pb-4 border-b border-white/5">
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase block mb-1">
                Engineering Discipline
              </span>
              <h3 className="text-xl font-medium text-white font-display">
                Problem Solving Approach
              </h3>
            </div>

            <div className="space-y-4">
              {problemSolvingPillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 hover:bg-white/[0.04] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-medium text-white">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-white/50 leading-relaxed pl-10">
                      {pillar.detail}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-[11px]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Primary Languages for DSA</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/80 font-mono text-[11px]">
                  C++ (STL & Algorithms)
                </span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/80 font-mono text-[11px]">
                  TypeScript / JavaScript
                </span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/80 font-mono text-[11px]">
                  Python
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

