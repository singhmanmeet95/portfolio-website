import React from 'react';
import {
  GraduationCap,
  Users,
  Award,
  Calendar,
  MapPin,
  Sparkles,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { EDUCATION_DATA, LEADERSHIP_DATA } from '../data/portfolioData';

export const EducationExperience: React.FC = () => {
  return (
    <section
      id="education"
      className="relative py-20 bg-[#0a0a0a] border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
            Academic & Leadership Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight font-display">
            Education & Campus Leadership
          </h2>
          <p className="text-sm sm:text-base text-white/40 leading-relaxed">
            Rigorous Computer Science engineering at Delhi Technological University (DTU) paired with leading high-impact fest operations for 5,000+ attendees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left Column: Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-white/5">
              <div className="w-9 h-9 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white font-display">
                  Education
                </h3>
                <span className="text-[10px] text-white/30 font-mono uppercase tracking-widest">Academic Foundations</span>
              </div>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-px before:bg-white/10">
              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={edu.institution}
                  id={`edu-item-${idx}`}
                  className="relative pl-10 group"
                >
                  {/* Timeline node */}
                  <div className="absolute left-2 top-2 w-3.5 h-3.5 rounded-full bg-[#0a0a0a] border-2 border-indigo-400 group-hover:bg-indigo-400 transition-colors shadow-sm shadow-indigo-500" />

                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-white/15 transition-colors space-y-3 shadow-xl shadow-black/40">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-lg font-medium text-white font-display group-hover:text-indigo-300 transition-colors">
                        {edu.institution}
                      </h4>
                      <span className="text-xs font-mono text-indigo-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <span className="text-white font-medium">{edu.degree}</span>
                      <span>&bull;</span>
                      <span className="text-white/40 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </span>
                    </div>

                    <ul className="space-y-1.5 text-xs text-white/50 pt-1">
                      {edu.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-indigo-400 mt-0.5">&bull;</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                      {edu.badges.map((b) => (
                        <span
                          key={b}
                          className="px-2.5 py-0.5 text-[10px] font-mono rounded bg-white/5 text-white/50 border border-white/10"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Leadership & Extracurriculars */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-white/5">
              <div className="w-9 h-9 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white font-display">
                  Leadership & Extracurriculars
                </h3>
                <span className="text-[10px] text-white/30 font-mono uppercase tracking-widest">DTU Fest Operations & Team Leadership</span>
              </div>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-px before:bg-white/10">
              {LEADERSHIP_DATA.map((lead, idx) => (
                <div
                  key={lead.organization}
                  id={`lead-item-${idx}`}
                  className="relative pl-10 group"
                >
                  {/* Timeline node */}
                  <div className="absolute left-2 top-2 w-3.5 h-3.5 rounded-full bg-[#0a0a0a] border-2 border-indigo-400 group-hover:bg-indigo-400 transition-colors shadow-sm shadow-indigo-500" />

                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-white/15 transition-colors space-y-3 shadow-xl shadow-black/40">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-lg font-medium text-white font-display group-hover:text-indigo-300 transition-colors">
                        {lead.role}
                      </h4>
                      <span className="text-xs font-mono text-indigo-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {lead.period}
                      </span>
                    </div>

                    <div className="text-xs font-medium text-white/70">
                      {lead.organization}
                      <span className="ml-2 text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                        {lead.festType}
                      </span>
                    </div>

                    <ul className="space-y-2 text-xs text-white/50 pt-1">
                      {lead.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-indigo-400 mt-0.5">&bull;</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick summary callout */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <p className="text-xs text-white/40 leading-relaxed">
                Proven track record in cross-functional coordination, leading 10+ person creative teams, and ensuring zero critical operational failures across high-stakes college fests with 5,000+ attendees.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

