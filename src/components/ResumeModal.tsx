import React, { useState } from 'react';
import {
  X,
  Printer,
  Download,
  Copy,
  Check,
  ExternalLink,
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Calendar
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, PROJECTS, SKILL_CATEGORIES, LEADERSHIP_DATA, CODING_PROFILES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
MANMEET SINGH
${PERSONAL_INFO.phone} | ${PERSONAL_INFO.email} | linkedin.com/in/manmeet | github.com/manmeet

EDUCATION
Delhi Technological University (DTU), New Delhi, India
Bachelor of Technology in Computer Science (Aug 2023 – May 2027)

Kendriya Vidyalaya, Tagore Garden, New Delhi, India
Senior Secondary – CBSE (2023)

TECHNICAL SKILLS
Languages: Python, Java, C/C++, JavaScript, TypeScript, SQL, HTML, CSS
AI/ML & Data: AI-Assisted Development (LLM-based Code Generation & Debugging), pandas, NumPy, Matplotlib, Data Structures & Algorithms
Frameworks & Libraries: React.js, Node.js, Express.js, Next.js, Flask, FastAPI, Prisma, Tailwind CSS
Databases: PostgreSQL, MongoDB
Developer Tools: Git, GitHub, Docker, Vercel, Google Cloud Platform, VS Code, TravisCI (CI/CD)
Concepts: REST APIs, WebSockets, JWT Authentication, MERN Stack, Full-Stack Development, Agile, OOP

PROJECTS
Nirvana | React, Node.js, PostgreSQL, MongoDB, Prisma, WebSockets, REST API (2024)
• Built a full-stack travel blogging platform with user authentication, CRUD workflows, and real-time chat via WebSockets for a seamless multi-user experience.
• Reduced backend API latency by 30% by optimizing data-fetching strategies and architecting efficient REST API endpoints.
• Implemented a hybrid database layer (PostgreSQL + MongoDB) via Prisma Accelerate for type-safe, scalable data access; added JWT-based auth with role-based access control.

Shiv Band – Event Booking Web App | Next.js, Tailwind CSS, Vercel, CI/CD (2024)
• Developed a responsive, production-deployed event-booking platform, improving client online visibility by 80% with seamless end-to-end booking.
• Optimized image loading and dynamic routing, cutting mobile page load time by 50% and boosting Lighthouse scores.
• Deployed on Vercel with CI/CD pipelines for zero-downtime releases; built an admin dashboard for bookings, listings, and inquiries.

ACHIEVEMENTS & PROBLEM SOLVING
LeetCode: Solved 350+ problems covering arrays, strings, recursion, dynamic programming, and graph algorithms with optimal time and space complexity.

LEADERSHIP & EXTRACURRICULARS
Co-Head – Cinematics, Reflect, DTU (Annual Cultural Fest) 2023 – 2025
• Led a team of 10+ members in end-to-end multimedia production for large-scale college events attended by thousands.

Logistics Member, Engifest, DTU (Annual Technical Fest) 2023 – 2025
• Coordinated end-to-end logistics and vendor management for 5,000+ attendees, ensuring zero critical operational failures.
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="resume-viewer-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl my-6 rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl shadow-black overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-white/[0.02] border-b border-white/5 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-white font-display">
              Manmeet_Singh_Resume.pdf
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 text-white/50 border border-white/10 font-mono">
              DTU CS '27
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/80 text-xs font-mono transition-colors border border-white/10"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-white/90 text-black text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-white/40 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors ml-2"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Document Body */}
        <div className="p-8 sm:p-12 overflow-y-auto bg-white text-slate-900 font-serif leading-relaxed text-sm select-text">
          
          {/* Header */}
          <div className="text-center pb-4 border-b border-slate-300">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 font-sans">
              {PERSONAL_INFO.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-700 mt-2 font-sans">
              <span>{PERSONAL_INFO.phone}</span>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-blue-700 hover:underline">
                {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                linkedin.com/in/manmeet
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                github.com/manmeet
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="mt-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2 font-sans">
              Education
            </h2>
            
            <div className="space-y-3 font-sans text-xs">
              <div>
                <div className="flex justify-between font-bold text-slate-900 text-sm">
                  <span>Delhi Technological University (DTU)</span>
                  <span className="font-normal text-slate-700">New Delhi, India</span>
                </div>
                <div className="flex justify-between text-slate-700 italic">
                  <span>Bachelor of Technology in Computer Science</span>
                  <span>Aug 2023 – May 2027</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900 text-sm">
                  <span>Kendriya Vidyalaya, Tagore Garden</span>
                  <span className="font-normal text-slate-700">New Delhi, India</span>
                </div>
                <div className="flex justify-between text-slate-700 italic">
                  <span>Senior Secondary – CBSE</span>
                  <span>2023</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mt-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2 font-sans">
              Technical Skills
            </h2>
            <div className="font-sans text-xs space-y-1.5 text-slate-800">
              <p><strong>Languages:</strong> Python, Java, C/C++, JavaScript, TypeScript, SQL, HTML, CSS</p>
              <p><strong>AI/ML & Data:</strong> AI-Assisted Development (LLM-based Code Generation & Debugging), pandas, NumPy, Matplotlib, Data Structures & Algorithms</p>
              <p><strong>Frameworks & Libraries:</strong> React.js, Node.js, Express.js, Next.js, Flask, FastAPI, Prisma, Tailwind CSS</p>
              <p><strong>Databases:</strong> PostgreSQL, MongoDB</p>
              <p><strong>Developer Tools:</strong> Git, GitHub, Docker, Vercel, Google Cloud Platform, VS Code, TravisCI (CI/CD)</p>
              <p><strong>Concepts:</strong> REST APIs, WebSockets, JWT Authentication, MERN Stack, Full-Stack Development, Agile, OOP</p>
            </div>
          </div>

          {/* Projects */}
          <div className="mt-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2 font-sans">
              Projects
            </h2>
            
            <div className="space-y-4 font-sans text-xs">
              {/* Nirvana */}
              <div>
                <div className="flex justify-between font-bold text-slate-900 text-sm">
                  <span>Nirvana | <span className="font-normal italic text-xs text-slate-700">React, Node.js, PostgreSQL, MongoDB, Prisma, WebSockets, REST API</span></span>
                  <span className="font-normal text-slate-700">2024</span>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-1 text-slate-800">
                  <li>Built a full-stack travel blogging platform with user authentication, CRUD workflows, and real-time chat via WebSockets for a seamless multi-user experience.</li>
                  <li>Reduced backend API latency by 30% by optimizing data-fetching strategies and architecting efficient REST API endpoints.</li>
                  <li>Implemented a hybrid database layer (PostgreSQL + MongoDB) via Prisma Accelerate for type-safe, scalable data access; added JWT-based auth with role-based access control.</li>
                </ul>
              </div>

              {/* Shiv Band */}
              <div>
                <div className="flex justify-between font-bold text-slate-900 text-sm">
                  <span>Shiv Band – Event Booking Web App | <span className="font-normal italic text-xs text-slate-700">Next.js, Tailwind CSS, Vercel, CI/CD</span></span>
                  <span className="font-normal text-slate-700">2024</span>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-1 text-slate-800">
                  <li>Developed a responsive, production-deployed event-booking platform, improving client online visibility by 80% with seamless end-to-end booking.</li>
                  <li>Optimized image loading and dynamic routing, cutting mobile page load time by 50% and boosting Lighthouse scores.</li>
                  <li>Deployed on Vercel with CI/CD pipelines for zero-downtime releases; built an admin dashboard for bookings, listings, and inquiries.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Achievements & Problem Solving */}
          <div className="mt-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2 font-sans">
              Achievements & Problem Solving
            </h2>
            <div className="font-sans text-xs space-y-1.5 text-slate-800">
              <p><strong>LeetCode:</strong> Solved 350+ problems covering arrays, strings, recursion, dynamic programming, and graph algorithms with optimal time and space complexity.</p>
            </div>
          </div>

          {/* Leadership & Extracurriculars */}
          <div className="mt-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2 font-sans">
              Leadership & Extracurriculars
            </h2>
            <div className="space-y-3 font-sans text-xs">
              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Co-Head – Cinematics, Reflect, DTU (Annual Cultural Fest)</span>
                  <span className="font-normal text-slate-700">2023 – 2025</span>
                </div>
                <ul className="list-disc list-inside mt-0.5 text-slate-800">
                  <li>Led a team of 10+ members in end-to-end multimedia production for large-scale college events attended by thousands.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Logistics Member, Engifest, DTU (Annual Technical Fest)</span>
                  <span className="font-normal text-slate-700">2023 – 2025</span>
                </div>
                <ul className="list-disc list-inside mt-0.5 text-slate-800">
                  <li>Coordinated end-to-end logistics and vendor management for 5,000+ attendees, ensuring zero critical operational failures.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
