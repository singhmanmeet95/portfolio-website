"use client"

import { Github, Star, GitFork, BookOpen, ExternalLink, MapPin, Mail, Award, Linkedin, FileText } from "lucide-react"

interface GitHubProps {
  isDarkMode?: boolean
}

export default function GitHub({ isDarkMode = true }: GitHubProps) {
  const textColor = isDarkMode ? "text-white" : "text-gray-900"
  const bgColor = isDarkMode ? "bg-[#0d1117]" : "bg-white"
  const cardBg = isDarkMode ? "bg-[#161b22] border-[#30363d]" : "bg-gray-50 border-gray-200"
  const subtextColor = isDarkMode ? "text-gray-300" : "text-black"

  const repos = [
    {
      name: "Alaska",
      description: "Route-based social networking platform with real-time metro commute discovery, Mapbox GL route builder, Suffix Graph subpath matching O(N × L), and Gateway-Worker-Queue Socket.IO chat.",
      language: "TypeScript",
      langColor: "bg-blue-500",
      stars: 48,
      forks: 12,
      topics: ["react", "nodejs", "postgresql", "prisma", "redis", "socket-io", "docker"],
      link: "https://github.com/singhmanmeet95/Alaska",
    },
    {
      name: "CORTEX",
      description: "OS-level automation engine using PyAutoGUI for complex EHR systems, custom PyQt6 drag-and-drop DAG workflow builder with NetworkX, and Vision LLM self-healing image locators.",
      language: "Python",
      langColor: "bg-yellow-500",
      stars: 39,
      forks: 7,
      topics: ["python", "pyqt6", "networkx", "pydantic", "pyautogui", "vision-llm"],
      link: "https://github.com/singhmanmeet95/cortex-main",
    },
    {
      name: "accelryde-gps-telemetry-engine",
      description: "High-efficiency GPS telemetry buffer in SQLite reducing Firestore cloud writes by 99% with Douglas-Peucker polyline compression, two-tier Firebase tracking, and 24 kbps AAC push-to-talk.",
      language: "TypeScript",
      langColor: "bg-blue-500",
      stars: 27,
      forks: 5,
      topics: ["algorithms", "douglas-peucker", "sqlite", "firebase", "realtime-db"],
      link: "https://github.com/singhmanmeet95",
    },
    {
      name: "competitive-programming-dsa",
      description: "Algorithmic implementations & solutions for 850+ LeetCode problems (Knight, rating 1860) and Codeforces contests (Specialist, rating 1427).",
      language: "C++",
      langColor: "bg-rose-500",
      stars: 62,
      forks: 19,
      topics: ["leetcode", "codeforces", "dsa", "graph-theory", "competitive-programming"],
      link: "https://github.com/singhmanmeet95",
    },
  ]

  return (
    <div className={`h-full ${bgColor} ${textColor} overflow-y-auto flex flex-col font-sans select-none`}>
      {/* GitHub Top Nav */}
      <div className="h-14 border-b border-[#30363d] px-6 flex items-center justify-between bg-[#161b22] sticky top-0 z-10">
        <div className="flex items-center space-x-3">
          <Github className="w-8 h-8 text-white" />
          <span className="font-semibold text-sm">github.com / singhmanmeet95</span>
        </div>
        <a
          href="https://github.com/singhmanmeet95"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-[#238636] hover:bg-[#2ea043] text-white text-xs font-semibold transition shadow"
        >
          <span>Open Profile on GitHub</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto w-full p-6 space-y-6">
        {/* Profile Card */}
        <div className={`p-6 rounded-xl border ${cardBg} flex flex-col md:flex-row items-start md:items-center justify-between gap-4`}>
          <div className="flex items-center space-x-5">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-sky-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white text-3xl font-bold shadow-md ring-2 ring-white/10 shrink-0">
              M
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}>Manmeet Singh</h1>
                <span className={`text-xs px-2 py-0.5 rounded-full border ${isDarkMode ? "border-gray-600 text-gray-300" : "border-zinc-400 text-black font-semibold"}`}>
                  singhmanmeet95
                </span>
              </div>
              <p className={`text-sm mt-1 font-medium ${isDarkMode ? "text-gray-300" : "text-black"}`}>
                Software Development Engineer • B.Tech CSE @ Delhi Technological University ('27)
              </p>
              <div className={`flex flex-wrap items-center gap-4 mt-2 text-xs font-medium ${isDarkMode ? "text-gray-400" : "text-zinc-800"}`}>
                <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1 text-red-500" /> Delhi, India</span>
                <span className="flex items-center"><Mail className="w-3.5 h-3.5 mr-1 text-blue-500" /> meetusingh2004@gmail.com</span>
                <span className={`flex items-center font-bold ${isDarkMode ? "text-amber-400" : "text-amber-700"}`}>
                  <Award className="w-3.5 h-3.5 mr-1" /> LeetCode Knight (1860) • Codeforces Specialist
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://www.linkedin.com/in/manmeetsinghdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://leetcode.com/u/idk_the_answer/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold transition"
            >
              <Award className="w-3.5 h-3.5" />
              <span>LeetCode (1860)</span>
            </a>
            <a
              href="https://codeforces.com/profile/silent_cartographer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-semibold transition"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Codeforces (1427)</span>
            </a>
            <a
              href="/Manmeet_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
            <a
              href="mailto:meetusingh2004@gmail.com"
              className="px-3 py-1.5 rounded-lg border border-gray-600 text-xs font-medium hover:bg-white/10 transition"
            >
              Email
            </a>
          </div>
        </div>

        {/* Pinned Repositories */}
        <div>
          <h2 className="text-base font-semibold mb-3 flex items-center justify-between">
            <span className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2 text-gray-400" />
              Pinned Repositories
            </span>
            <span className="text-xs text-gray-400 font-normal">Click any repository to view on GitHub</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repos.map((repo, idx) => (
              <a
                key={idx}
                href={repo.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-xl border ${cardBg} flex flex-col justify-between hover:border-blue-500 hover:bg-[#1c2128] transition group cursor-pointer shadow-sm`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-blue-400 group-hover:text-blue-300 text-sm flex items-center gap-1.5">
                      {repo.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full border border-gray-600 text-gray-400">
                      Public
                    </span>
                  </div>
                  <p className={`text-xs leading-relaxed mb-3 line-clamp-3 font-normal ${isDarkMode ? "text-gray-300" : "text-black"}`}>
                    {repo.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {repo.topics.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4 text-xs text-gray-400 pt-2 border-t border-gray-800">
                    <span className="flex items-center">
                      <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor} mr-1.5`} />
                      {repo.language}
                    </span>
                    <span className="flex items-center">
                      <Star className="w-3 h-3 mr-1 text-amber-400" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center">
                      <GitFork className="w-3 h-3 mr-1" />
                      {repo.forks}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
