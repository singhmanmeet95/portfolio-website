"use client"

import { Globe, ExternalLink, GitBranch, Sparkles, Navigation, Cpu, FileText, Linkedin, Github, Award } from "lucide-react"

export default function Website({ isDarkMode = true }: { isDarkMode?: boolean }) {
  const textColor = isDarkMode ? "text-white" : "text-gray-900"
  const bgColor = isDarkMode ? "bg-gray-900" : "bg-white"
  const cardBg = isDarkMode ? "bg-gray-800/90 border-gray-700" : "bg-gray-50 border-gray-200"

  const projects = [
    {
      title: "ALASKA — Route-Based Social Networking Platform",
      tech: "React, Node.js, Express, PostgreSQL, Prisma, Redis, PgBouncer, Socket.IO, Docker",
      description:
        "Connects users who share overlapping metro commutes with an interactive Mapbox GL route builder using Dijkstra's algorithm across 250+ interconnected nodes in real-time. Employs Suffix Graph subpath matching O(N × L) and Gateway-Worker-Queue Socket.IO/Redis chat.",
      gradient: "from-blue-600 to-cyan-500",
      icon: <Navigation className="w-8 h-8 text-white" />,
      badges: ["Dijkstra Algorithm", "Suffix Graph", "Socket.IO", "Redis Queue", "Docker"],
      github: "https://github.com/singhmanmeet95/Alaska",
      linkText: "View ALASKA on GitHub",
    },
    {
      title: "CORTEX — OS-Level Visual Automation Engine",
      tech: "Python, PyQt6, Pydantic, NetworkX, LLM, PyAutoGUI",
      description:
        "Engine for complex EHR systems across iframe-heavy web portals and desktop apps where standard DOM scraping fails. Features custom drag-and-drop node DAG interface in PyQt6 and self-healing image locators powered by Vision LLMs to withstand layout shifts.",
      gradient: "from-purple-600 to-pink-500",
      icon: <Cpu className="w-8 h-8 text-white" />,
      badges: ["PyQt6", "NetworkX DAG", "Vision LLM", "Self-Healing Locators", "PyAutoGUI"],
      github: "https://github.com/singhmanmeet95/cortex-main",
      linkText: "View CORTEX on GitHub",
    },
    {
      title: "Accelryde Telemetry Engine — SDE Internship",
      tech: "SQLite, Firebase Realtime DB, Firestore, Douglas-Peucker Algorithm, Android",
      description:
        "Cut cloud writes by ~99% (~2,000 to 1 per rider) via SQLite buffering and Douglas-Peucker compressed polylines. Created two-tier live tracking architecture with onDisconnect and push-to-talk voice messaging stored inline in Realtime DB without recurring storage fees.",
      gradient: "from-emerald-600 to-teal-500",
      icon: <Sparkles className="w-8 h-8 text-white" />,
      badges: ["Douglas-Peucker", "Haversine Distance", "Two-Tier Architecture", "PTT Audio"],
      github: "https://drive.google.com/file/d/18GIWf6nUJoMrwPVDoqobjREl0jMTo1Be/view?usp=drive_link",
      linkText: "View Internship Certificate ↗",
    },
    {
      title: "Reflect, DTU — Photography & Filmmaking Society",
      tech: "Creative Direction, Film Production, Video Workflows",
      description:
        "Co-Head of Photography and Filmmaking Society at Delhi Technological University. Directed high-end visual productions, live festival shoots, cinematography workflows, and team coordination for DTU events.",
      gradient: "from-amber-600 to-rose-500",
      icon: <Globe className="w-8 h-8 text-white" />,
      badges: ["Creative Direction", "Cinematography", "Team Leadership", "Production"],
      github: "https://github.com/singhmanmeet95",
      linkText: "View Creative Profile ↗",
    },
  ]

  return (
    <div className={`h-full ${bgColor} ${textColor} p-6 overflow-y-auto select-none`}>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <h2 className={`text-2xl font-bold mb-1 ${isDarkMode ? "text-white" : "text-black"}`}>Featured Projects & Systems</h2>
            <p className={`text-xs md:text-sm font-medium ${isDarkMode ? "text-gray-400" : "text-zinc-700"}`}>
              Engineered by Manmeet Singh • Computer Science & Engineering @ DTU
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://github.com/singhmanmeet95"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold border border-zinc-700 transition"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub (singhmanmeet95)</span>
              <ExternalLink className="w-3 h-3 text-gray-400" />
            </a>
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
              href="/Manmeet_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, index) => (
            <div
              key={index}
              className={`border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between ${cardBg}`}
            >
              <div>
                <div className={`h-24 bg-gradient-to-tr ${proj.gradient} p-4 flex items-center justify-between`}>
                  {proj.icon}
                  <span className="text-[10px] font-semibold bg-black/40 backdrop-blur-md text-white px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Production Grade
                  </span>
                </div>
                <div className="p-5">
                  <h3 className={`text-base font-bold mb-1 ${isDarkMode ? "text-white" : "text-black font-extrabold"}`}>{proj.title}</h3>
                  <p className={`text-xs font-mono mb-3 ${isDarkMode ? "text-indigo-400" : "text-indigo-900 font-bold"}`}>{proj.tech}</p>
                  <p className={`text-xs leading-relaxed mb-4 ${isDarkMode ? "text-gray-300" : "text-black font-medium"}`}>{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {proj.badges.map((b) => (
                      <span key={b} className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${isDarkMode ? "bg-white/10 text-gray-300" : "bg-zinc-200 text-black border border-zinc-300"}`}>
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-0">
                <a
                  href={proj.github}
                  className="w-full inline-flex items-center justify-center space-x-1.5 px-4 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white text-xs font-semibold transition border border-blue-500/30 shadow-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitBranch className="w-3.5 h-3.5 mr-1" />
                  <span>{proj.linkText}</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
