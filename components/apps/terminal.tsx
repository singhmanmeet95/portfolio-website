"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

interface TerminalProps {
  isDarkMode?: boolean
}

export default function Terminal({ isDarkMode = true }: TerminalProps) {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Terminal is always dark
  const bgColor = "bg-black"
  const textColor = "text-green-400"

  useEffect(() => {
    // Focus input when terminal is clicked
    const handleClick = () => {
      inputRef.current?.focus()
    }

    const terminal = terminalRef.current
    if (terminal) {
      terminal.addEventListener("click", handleClick)

      // Initial welcome message
      setHistory([
        "Last login: " + new Date().toLocaleString(),
        "Welcome to macOS Terminal",
        "Type 'help' to see available commands",
        "",
      ])
    }

    return () => {
      if (terminal) {
        terminal.removeEventListener("click", handleClick)
      }
    }
  }, [])

  useEffect(() => {
    // Scroll to bottom when history changes
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      executeCommand(input)
      setCommandHistory((prev) => [...prev, input])
      setHistoryIndex(-1)
      setInput("")
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      navigateHistory(-1)
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      navigateHistory(1)
    }
  }

  const navigateHistory = (direction: number) => {
    if (commandHistory.length === 0) return

    const newIndex = historyIndex + direction

    if (newIndex >= commandHistory.length) {
      setHistoryIndex(-1)
      setInput("")
    } else if (newIndex >= 0) {
      setHistoryIndex(newIndex)
      setInput(commandHistory[commandHistory.length - 1 - newIndex])
    }
  }

  const executeCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase()
    const args = command.split(" ")
    const mainCommand = args[0]

    // Add command to history
    setHistory((prev) => [...prev, `manmeet@macbook-pro ~ $ ${cmd}`, ""])

    // Process command
    switch (mainCommand) {
      case "help":
        setHistory((prev) => [
          ...prev,
          "Available commands:",
          "  help         - Show this help message",
          "  about        - Overview of Manmeet Singh",
          "  experience   - Accelryde Technologies internship details",
          "  projects     - ALASKA & CORTEX system architecture",
          "  skills       - Technical stack & proficiencies",
          "  education    - Delhi Technological University (DTU) details",
          "  achievements - LeetCode Knight, Codeforces, Leadership",
          "  contact      - Email, phone, LinkedIn, GitHub",
          "  resume       - View full resume summary",
          "  whoami       - Current user session",
          "  ls           - List directory contents",
          "  clear        - Clear the terminal screen",
          "  date         - Show current date and time",
          "  echo [text]  - Print arguments to terminal",
          "",
        ])
        break

      case "clear":
        setHistory([""])
        break

      case "echo":
        const echoText = args.slice(1).join(" ")
        setHistory((prev) => [...prev, echoText, ""])
        break

      case "date":
        setHistory((prev) => [...prev, new Date().toString(), ""])
        break

      case "ls":
        setHistory((prev) => [
          ...prev,
          "alaska-platform/   cortex-engine/   resume.pdf   experience.log",
          "skills.json        achievements.md  contacts.vcf",
          "",
        ])
        break

      case "whoami":
        setHistory((prev) => [
          ...prev,
          "manmeet singh - SDE Intern @ Accelryde | CSE @ Delhi Technological University",
          "",
        ])
        break

      case "about":
        setHistory((prev) => [
          ...prev,
          "╔═══════════════════════════════════════════════════════════════════╗",
          "║ MANMEET SINGH                                                     ║",
          "║ B.Tech Computer Science & Engineering @ DTU (2023 - 2027)         ║",
          "║ Full Stack & Systems Engineer | LeetCode Knight (Rating 1860)      ║",
          "╚═══════════════════════════════════════════════════════════════════╝",
          "",
          "I build high-performance distributed backends, graph-based routing systems,",
          "and OS-level automation frameworks powered by Vision LLMs.",
          "",
          "Currently pursuing B.Tech in CSE at Delhi Technological University (formerly DCE).",
          "Recently worked as SDE Intern at Accelryde Technologies optimizing real-time telemetry.",
          "",
        ])
        break

      case "experience":
        setHistory((prev) => [
          ...prev,
          "┌─────────────────────────────────────────────────────────────────┐",
          "│ Accelryde Technologies LLP — Software Development Engineer Intern│",
          "│ May 2026 – Jul 2026 | Remote                                    │",
          "└─────────────────────────────────────────────────────────────────┘",
          "",
          "• Cloud Write Optimization: Cut cloud writes by ~99% (~2,000 to 1 per rider) to",
          "  stay under Firestore's 20K/day limit, buffering GPS points in SQLite and uploading",
          "  one Douglas–Peucker compressed polyline per ride.",
          "",
          "• Two-Tier Telemetry Architecture: Split live tracking (Firebase Realtime DB with",
          "  onDisconnect) from Firestore logs, cutting battery & bandwidth via Android",
          "  foreground services and adaptive 5s/30s/15m polling.",
          "",
          "• Push-To-Talk Audio Engine: Stored 24 kbps AAC (~3 KB/s) clips inline in Realtime DB",
          "  with sequential playback queue and 3-min TTL without needing paid cloud storage.",
          "",
          "• Client Safety & Geofencing: Engineered client-side safety engine detecting stopped,",
          "  disconnected, and separated riders via Haversine distance & server-synced timestamps.",
          "",
        ])
        break

      case "projects":
        setHistory((prev) => [
          ...prev,
          "┌─────────────────────────────────────────────────────────────┐",
          "│ 1. ALASKA — Route-Based Social Networking Platform          │",
          "│ React, Node.js, Express, PostgreSQL, Prisma, Redis, Docker  │",
          "└─────────────────────────────────────────────────────────────┘",
          "• Real-time discovery connecting users sharing overlapping metro commutes.",
          "• Interactive metro route builder with Mapbox GL JS & Dijkstra's algorithm (250+ nodes).",
          "• Suffix Graph subpath matching: reduced time complexity from quadratic to O(N × L).",
          "• Gateway-Worker-Queue real-time chat with Socket.IO and Redis.",
          "",
          "┌─────────────────────────────────────────────────────────────┐",
          "│ 2. CORTEX — OS-Level Visual Automation Engine               │",
          "│ Python, PyQt6, Pydantic, NetworkX, LLM, PyAutoGUI           │",
          "└─────────────────────────────────────────────────────────────┘",
          "• Automation engine using PyAutoGUI for complex EHR systems & legacy desktop apps.",
          "• Custom drag-and-drop node interface with PyQt6 & NetworkX to construct visual DAGs.",
          "• Self-healing image locators powered by Vision LLMs to dynamically adapt to UI shifts.",
          "",
        ])
        break

      case "skills":
        setHistory((prev) => [
          ...prev,
          "┌───────────────┬───────────────────────────────────────────────────────────┐",
          "│ Category      │ Technologies                                              │",
          "├───────────────┼───────────────────────────────────────────────────────────┤",
          "│ Languages     │ C/C++, Python, JavaScript, TypeScript, Bash, HTML/CSS      │",
          "│ Web & Backend │ React.js, Node.js, Express.js, REST APIs, WebSockets       │",
          "│ Databases     │ PostgreSQL, MongoDB, MySQL, Prisma, ChromaDB, Redis       │",
          "│ DevOps/Cloud  │ Docker, Git, GitHub Actions, Azure, AWS, Cloudflare, Linux│",
          "│ CS Coursework │ DBMS, OOP, Operating Systems, Data Structures & Algorithms│",
          "└───────────────┴───────────────────────────────────────────────────────────┘",
          "",
        ])
        break

      case "education":
        setHistory((prev) => [
          ...prev,
          "┌─────────────────────────────────────────────────────────────────┐",
          "│ Delhi Technological University (DTU - Formerly DCE)             │",
          "│ Bachelor of Technology in Computer Science and Engineering      │",
          "│ Aug 2023 – May 2027 | Delhi, India                              │",
          "└─────────────────────────────────────────────────────────────────┘",
          "",
        ])
        break

      case "achievements":
        setHistory((prev) => [
          ...prev,
          "• LeetCode Knight: 850+ problems solved, 20 badges, peak rating 1860.",
          "• Codeforces Specialist: 15+ contests, peak rating 1427.",
          "• Reflect, DTU: Co-Head of Photography & Filmmaking Society.",
          "",
        ])
        break

      case "contact":
        setHistory((prev) => [
          ...prev,
          "┌───────── Contact Manmeet Singh ──────────────────────────────────┐",
          "│ Email:    mailto:meetusingh2004@gmail.com                        │",
          "│ Phone:    +91-80764-38849                                        │",
          "│ GitHub:   https://github.com/singhmanmeet95                      │",
          "│ LinkedIn: https://www.linkedin.com/in/manmeetsinghdev/           │",
          "│ Portfolio: https://manmeetsingh.vercel.app/                      │",
          "│ Resume:   /Manmeet_Singh_Resume.pdf                              │",
          "└──────────────────────────────────────────────────────────────────┘",
          "",
        ])
        break

      case "resume":
        setHistory((prev) => [
          ...prev,
          "MANMEET SINGH — B.Tech CSE @ DTU",
          "PDF Resume: /Manmeet_Singh_Resume.pdf",
          "Email: meetusingh2004@gmail.com | Phone: +91-80764-38849",
          "LinkedIn: https://www.linkedin.com/in/manmeetsinghdev/",
          "GitHub: https://github.com/singhmanmeet95",
          "",
          "EXPERIENCE:",
          "• SDE Intern @ Accelryde Technologies (May 2026 - Jul 2026)",
          "  Certificate: https://drive.google.com/file/d/18GIWf6nUJoMrwPVDoqobjREl0jMTo1Be/view?usp=drive_link",
          "  99% cloud write reduction via Douglas-Peucker & SQLite buffer, 2-tier live tracking",
          "",
          "PROJECTS:",
          "• ALASKA (React, Node.js, PostgreSQL, Redis, Socket.IO, Mapbox, Dijkstra)",
          "  GitHub: https://github.com/singhmanmeet95/Alaska",
          "• CORTEX (Python, PyQt6, PyAutoGUI, NetworkX, Vision LLM self-healing DAGs)",
          "  GitHub: https://github.com/singhmanmeet95/cortex-main",
          "",
          "ACHIEVEMENTS:",
          "• Knight on LeetCode (850+ solved, rating 1860): https://leetcode.com/u/idk_the_answer/",
          "• Specialist on Codeforces (rating 1427): https://codeforces.com/profile/silent_cartographer",
          "",
        ])
        break

      default:
        setHistory((prev) => [
          ...prev,
          `zsh: command not found: ${mainCommand}`,
          'Type "help" to see available commands',
          "",
        ])
    }
  }

  const renderTerminalLine = (line: string, index: number) => {
    // Detect URLs and links
    const urlPattern = /(https?:\/\/[^\s│]+|mailto:[^\s│]+|\/Manmeet_Singh_Resume\.pdf)/g
    if (urlPattern.test(line)) {
      const parts = line.split(urlPattern)
      return (
        <div key={index} className="whitespace-pre-wrap">
          {parts.map((part, pIdx) => {
            if (part.match(/^https?:\/\//) || part.match(/^mailto:/) || part === "/Manmeet_Singh_Resume.pdf") {
              return (
                <a
                  key={pIdx}
                  href={part}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-200 underline font-bold cursor-pointer"
                >
                  {part}
                </a>
              )
            }
            return <span key={pIdx}>{part}</span>
          })}
        </div>
      )
    }

    return (
      <div key={index} className="whitespace-pre-wrap">
        {line}
      </div>
    )
  }

  return (
    <div ref={terminalRef} className={`h-full ${bgColor} ${textColor} p-4 font-mono text-sm overflow-auto`}>
      {history.map((line, index) => renderTerminalLine(line, index))}

      <div className="flex">
        <span className="mr-2">manmeet@macbook-pro ~ $</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none caret-green-400 text-green-400"
          autoFocus
        />
      </div>
    </div>
  )
}
