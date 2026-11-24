"use client"

import { useState, useEffect } from "react"
import {
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  Home,
  Star,
  Plus,
  Search,
  Wifi,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  FileText,
  Award,
} from "lucide-react"

interface SafariProps {
  isDarkMode?: boolean
}

export default function Safari({ isDarkMode = true }: SafariProps) {
  const [url, setUrl] = useState("https://manmeetsingh.vercel.app/")
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("home")
  const [wifiEnabled, setWifiEnabled] = useState(true)

  // Get WiFi status from localStorage or default to true
  useEffect(() => {
    const checkWifiStatus = () => {
      const status = localStorage.getItem("wifiEnabled")
      setWifiEnabled(status === null ? true : status === "true")
    }

    checkWifiStatus()
    const interval = setInterval(checkWifiStatus, 1000)
    return () => clearInterval(interval)
  }, [])

  const textColor = isDarkMode ? "text-white" : "text-gray-800"
  const bgColor = isDarkMode ? "bg-gray-900" : "bg-white"
  const toolbarBg = isDarkMode ? "bg-gray-800" : "bg-gray-100"
  const inputBg = isDarkMode ? "bg-gray-700" : "bg-gray-200"
  const borderColor = isDarkMode ? "border-gray-700" : "border-gray-200"
  const cardBg = isDarkMode ? "bg-gray-800/80" : "bg-gray-100"
  const hoverBg = isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"

  const handleRefresh = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && url.trim()) {
      let target = url.trim()
      if (!target.startsWith("http://") && !target.startsWith("https://") && !target.startsWith("mailto:")) {
        target = "https://" + target
      }
      if (typeof window !== "undefined") {
        window.open(target, "_blank", "noopener,noreferrer")
      }
    }
  }

  // Exact links from Manmeet's verified resume
  const socialLinks = [
    {
      title: "GitHub",
      url: "https://github.com/singhmanmeet95",
      icon: "/github.png",
      badge: "singhmanmeet95",
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/manmeetsinghdev/",
      icon: "/linkedin.png",
      badge: "manmeetsinghdev",
    },
    {
      title: "LeetCode",
      url: "https://leetcode.com/u/idk_the_answer/",
      icon: "/notes.png",
      badge: "Knight (1860)",
    },
    {
      title: "Codeforces",
      url: "https://codeforces.com/profile/silent_cartographer",
      icon: "/notes.png",
      badge: "Specialist (1427)",
    },
    {
      title: "Resume PDF",
      url: "/Manmeet_Singh_Resume.pdf",
      icon: "/notes.png",
      badge: "Actual Resume",
    },
    {
      title: "Email",
      url: "mailto:meetusingh2004@gmail.com",
      icon: "/mail.png",
      badge: "meetusingh2004",
    },
  ]

  const frequentlyVisited = [
    {
      title: "GitHub Profile",
      url: "https://github.com/singhmanmeet95",
      icon: "/github.png",
    },
    {
      title: "LinkedIn Profile",
      url: "https://www.linkedin.com/in/manmeetsinghdev/",
      icon: "/linkedin.png",
    },
    {
      title: "ALASKA Repo",
      url: "https://github.com/singhmanmeet95/Alaska",
      icon: "/github.png",
    },
    {
      title: "CORTEX Repo",
      url: "https://github.com/singhmanmeet95/cortex-main",
      icon: "/github.png",
    },
    {
      title: "Portfolio Live",
      url: "https://manmeetsingh.vercel.app/",
      icon: "/safari.png",
    },
    {
      title: "Internship Certificate",
      url: "https://drive.google.com/file/d/18GIWf6nUJoMrwPVDoqobjREl0jMTo1Be/view?usp=drive_link",
      icon: "/placeholder.svg",
    },
    {
      title: "Trilyt (Accelryde)",
      url: "https://trilyt.com/",
      icon: "/placeholder.svg",
    },
    {
      title: "Delhi Tech Univ",
      url: "http://www.dtu.ac.in",
      icon: "/placeholder.svg",
    },
  ]

  const NoInternetView = () => (
    <div className="flex flex-col items-center justify-center h-full p-8">
      <div
        className={`w-24 h-24 mb-6 flex items-center justify-center rounded-full ${
          isDarkMode ? "bg-gray-800" : "bg-gray-200"
        }`}
      >
        <Wifi className={`w-12 h-12 ${isDarkMode ? "text-gray-600" : "text-gray-500"}`} />
      </div>
      <h2 className={`text-xl font-semibold mb-2 ${textColor}`}>You Are Not Connected to the Internet</h2>
      <p className={`text-center ${isDarkMode ? "text-gray-400" : "text-gray-500"} mb-6`}>
        This page can't be displayed because your computer is currently offline.
      </p>
      <button
        className={`px-4 py-2 rounded ${
          isDarkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
        } text-white`}
        onClick={handleRefresh}
      >
        Try Again
      </button>
    </div>
  )

  return (
    <div className={`h-full flex flex-col ${bgColor} ${textColor} select-none`}>
      {/* Toolbar */}
      <div className={`${toolbarBg} border-b ${borderColor} p-2 flex items-center space-x-2`}>
        <button className={`p-1 rounded ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button className={`p-1 rounded ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
          <ArrowRight className="w-4 h-4" />
        </button>
        <button
          className={`p-1 rounded ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}
          onClick={handleRefresh}
          title="Reload"
        >
          <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
        </button>
        <button
          className={`p-1 rounded ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}
          onClick={() => setActiveTab("home")}
          title="Home"
        >
          <Home className="w-4 h-4" />
        </button>

        <div className={`flex-1 flex items-center ${inputBg} rounded px-3 py-1`}>
          <Search className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search or enter website name (press Enter to open)"
            className={`w-full bg-transparent focus:outline-none text-xs md:text-sm ${textColor}`}
          />
          <a
            href={url.startsWith("http") ? url : "https://" + url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center shrink-0"
            title="Open URL in new tab"
          >
            <span>Go</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

        <button className={`p-1 rounded ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
          <Star className="w-4 h-4 text-amber-400" />
        </button>
      </div>

      {/* Tab bar */}
      <div className={`${toolbarBg} border-b ${borderColor} px-2 flex items-center`}>
        <div
          className={`px-3 py-1 text-xs md:text-sm rounded-t flex items-center ${
            activeTab === "home" ? (isDarkMode ? "bg-gray-900" : "bg-white") : ""
          }`}
        >
          <span className="mr-2">Manmeet Singh — Developer Profile</span>
        </div>
        <button className={`p-1 rounded ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {!wifiEnabled ? (
          <NoInternetView />
        ) : (
          activeTab === "home" && (
            <div className="p-6 md:p-8 max-w-4xl mx-auto space-y-8">
              {/* Profile Card */}
              <div className={`p-6 rounded-2xl ${cardBg} border border-white/10 shadow-xl`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-sky-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg ring-2 ring-white/20">
                      M
                    </div>
                    <div>
                      <h3 className={`text-xl md:text-2xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}>Manmeet Singh</h3>
                      <p className={`text-xs md:text-sm font-semibold ${isDarkMode ? "text-indigo-400" : "text-indigo-800"}`}>
                        Software Development Engineer • DTU (Class of 2027)
                      </p>
                      <p className={`text-xs mt-0.5 font-medium ${isDarkMode ? "text-gray-400" : "text-zinc-700"}`}>
                        Former SDE Intern @ Accelryde Technologies • LeetCode Knight (1860)
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://github.com/singhmanmeet95"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold border border-zinc-700 transition"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
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
                      <ExternalLink className="w-3 h-3 text-blue-200" />
                    </a>
                    <a
                      href="/Manmeet_Singh_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Actual Resume (PDF)</span>
                    </a>
                  </div>
                </div>

                <p className={`text-xs md:text-sm leading-relaxed mb-4 font-normal ${isDarkMode ? "text-gray-200" : "text-black"}`}>
                  Welcome to my macOS portfolio! I build high-performance distributed systems, real-time web architectures, graph routing algorithms (Dijkstra, Suffix Graphs), and OS-level visual automation engines with Vision LLMs.
                </p>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                  <span className={`px-2.5 py-1 text-xs rounded-full font-semibold ${isDarkMode ? "bg-blue-500/20 text-blue-400" : "bg-blue-100 text-blue-900 border border-blue-200"}`}>React / Next.js</span>
                  <span className={`px-2.5 py-1 text-xs rounded-full font-semibold ${isDarkMode ? "bg-purple-500/20 text-purple-400" : "bg-purple-100 text-purple-900 border border-purple-200"}`}>Node.js / Express</span>
                  <span className={`px-2.5 py-1 text-xs rounded-full font-semibold ${isDarkMode ? "bg-emerald-500/20 text-emerald-400" : "bg-emerald-100 text-emerald-900 border border-emerald-200"}`}>PostgreSQL / Redis</span>
                  <span className={`px-2.5 py-1 text-xs rounded-full font-semibold ${isDarkMode ? "bg-amber-500/20 text-amber-400" : "bg-amber-100 text-amber-900 border border-amber-200"}`}>Python / PyAutoGUI</span>
                  <span className={`px-2.5 py-1 text-xs rounded-full font-semibold ${isDarkMode ? "bg-rose-500/20 text-rose-400" : "bg-rose-100 text-rose-900 border border-rose-200"}`}>Socket.IO / Docker</span>
                </div>
              </div>

              {/* Bookmarks / Direct Links */}
              <div>
                <h2 className={`text-lg font-bold mb-4 flex items-center justify-between ${isDarkMode ? "text-white" : "text-black"}`}>
                  <span>Connect & Verified Resume Links</span>
                  <span className={`text-xs font-medium ${isDarkMode ? "text-gray-400" : "text-zinc-600"}`}>Opens directly in new tab</span>
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border border-white/10 ${cardBg} hover:scale-105 hover:border-blue-500/50 transition cursor-pointer group shadow-sm text-center`}
                    >
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-2 shadow group-hover:shadow-md transition overflow-hidden">
                        <img src={link.icon || "/placeholder.svg"} alt={link.title} className="w-8 h-8 object-contain" />
                      </div>
                      <span className="text-xs font-semibold flex items-center gap-1">
                        {link.title}
                        <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-blue-400" />
                      </span>
                      <span className="text-[10px] text-gray-400 mt-0.5 truncate max-w-full">
                        {link.badge}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Featured Projects with Clickable Links */}
              <div>
                <h2 className="text-lg font-bold mb-4">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`p-5 rounded-2xl ${cardBg} border border-white/10 hover:border-blue-500/50 transition flex flex-col justify-between`}>
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className={`font-bold text-base ${isDarkMode ? "text-white" : "text-black"}`}>ALASKA</h4>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-500 font-semibold">
                          Full Stack
                        </span>
                      </div>
                      <p className={`text-xs mb-3 leading-relaxed font-normal ${isDarkMode ? "text-gray-300" : "text-black"}`}>
                        Route-based social network with Mapbox GL, Dijkstra's algorithm across 250+ nodes, Suffix Graph subpath matching, and Gateway-Worker-Queue Socket.IO chat.
                      </p>
                      <div className={`text-[11px] font-mono mb-4 font-semibold ${isDarkMode ? "text-blue-400" : "text-blue-800"}`}>
                        React • Express • Redis • PgBouncer • Docker
                      </div>
                    </div>
                    <a
                      href="https://github.com/singhmanmeet95/Alaska"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-800"
                    >
                      <span>View ALASKA on GitHub</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>

                  <div className={`p-5 rounded-2xl ${cardBg} border border-white/10 hover:border-purple-500/50 transition flex flex-col justify-between`}>
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className={`font-bold text-base ${isDarkMode ? "text-white" : "text-black"}`}>CORTEX</h4>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-500 font-semibold">
                          AI & OS Automation
                        </span>
                      </div>
                      <p className={`text-xs mb-3 leading-relaxed font-normal ${isDarkMode ? "text-gray-300" : "text-black"}`}>
                        OS-level visual automation engine for EHR portals & desktop apps with drag-and-drop PyQt6 node editor, DAG execution, and Vision LLM self-healing locators.
                      </p>
                      <div className={`text-[11px] font-mono mb-4 font-semibold ${isDarkMode ? "text-purple-400" : "text-purple-800"}`}>
                        Python • PyQt6 • NetworkX • PyAutoGUI • LLMs
                      </div>
                    </div>
                    <a
                      href="https://github.com/singhmanmeet95/cortex-main"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold text-purple-600 hover:text-purple-800"
                    >
                      <span>View CORTEX on GitHub</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Frequently Visited */}
              <div>
                <h2 className={`text-lg font-bold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>Frequently Visited</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
                  {frequentlyVisited.map((site, index) => (
                    <a
                      key={index}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center p-3 rounded-xl border border-white/5 ${hoverBg} transition cursor-pointer group`}
                    >
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-1.5 shadow overflow-hidden group-hover:scale-105 transition">
                        <img src={site.icon || "/placeholder.svg"} alt={site.title} className="w-6 h-6 object-contain" />
                      </div>
                      <span className={`text-[11px] text-center font-medium truncate max-w-full ${isDarkMode ? "text-gray-200" : "text-black font-semibold"}`}>{site.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}
