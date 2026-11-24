"use client"

import type React from "react"
import { useState } from "react"
import { FileText, Linkedin, Github, Mail, Phone, ExternalLink, Edit3, Eye, Download } from "lucide-react"

interface NotesProps {
  isDarkMode?: boolean
}

export default function Notes({ isDarkMode = true }: NotesProps) {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "👋 About Me & Contacts",
      date: "Today, 10:30 AM",
      content: `# Manmeet Singh
Computer Science & Engineering @ Delhi Technological University (DTU)
Formerly Delhi College of Engineering (DCE) | Class of 2027

Email: meetusingh2004@gmail.com
Phone: +91-80764-38849
Location: Delhi, India
LinkedIn: https://www.linkedin.com/in/manmeetsinghdev/
GitHub: https://github.com/singhmanmeet95
Portfolio: https://manmeetsingh.vercel.app/

## Summary
Passionate Software Development Engineer with a strong foundation in systems programming, high-concurrency backend services, and scalable web applications. Currently pursuing B.Tech in CSE at Delhi Technological University.

Experienced in building real-time distributed platforms, route optimization systems, and OS-level desktop automation engines powered by Vision LLMs. Competitive programmer with Knight rank on LeetCode (850+ problems solved, peak rating 1860).

## Core Competencies
- High-Performance Web & Distributed Systems
- Graph Algorithms & Route Optimization (Dijkstra, Suffix Graphs)
- Real-Time Communication (Socket.IO, WebSockets, Redis Gateway-Worker-Queue)
- OS-Level Automation & Computer Vision AI Integration`,
    },
    {
      id: 2,
      title: "💼 Experience - Accelryde",
      date: "Yesterday, 4:20 PM",
      content: `# Accelryde Technologies LLP
Software Development Engineer Intern | Remote
May 2026 – Jul 2026
Certificate: https://drive.google.com/file/d/18GIWf6nUJoMrwPVDoqobjREl0jMTo1Be/view?usp=drive_link
Company: https://trilyt.com/

## Key Contributions & Technical Impact:
• Cloud Cost & Bandwidth Optimization:
  Cut cloud writes by ~99% (~2,000 to 1 per rider) to stay under Firestore's 20K/day limit, buffering GPS points in SQLite and uploading one Douglas–Peucker compressed polyline per ride.

• Two-Tier Live Tracking Architecture:
  Split live tracking (Firebase Realtime DB with onDisconnect) from Firestore logs in a two-tier architecture, cutting battery and bandwidth via Android foreground services and adaptive 5s/30s/15m polling.

• In-Memory Push-To-Talk Audio Engine:
  Built push-to-talk voice messaging without paid storage by storing 24 kbps AAC (~3 KB/s) clips inline in Realtime DB, using a sequential playback queue and 3-minute TTL to prevent overlapping, stale alerts.

• Distributed Rider Safety & Geofencing Engine:
  Engineered a client-side safety engine detecting stopped, disconnected, and separated riders via Haversine distance and server-synced timestamps, delivering spoken lead/sweep alerts under role-based Firebase rules.`,
    },
    {
      id: 3,
      title: "🚀 Projects: ALASKA & CORTEX",
      date: "Nov 18, 2:15 PM",
      content: `# Featured Projects

## 1. ALASKA — Route-Based Social Networking Platform
Stack: React, Node.js, Express, PostgreSQL, Prisma, Redis, PgBouncer, Socket.IO, Docker
GitHub: https://github.com/singhmanmeet95/Alaska

• Route-based social networking platform enabling real-time discovery, connecting users who share overlapping metro commutes.
• Interactive Route Builder: Developed a custom interactive metro route builder using Mapbox GL JS and Dijkstra's algorithm, computing optimal shortest paths across a network of 250+ interconnected nodes in real-time.
• Subpath Matching with Suffix Graph: Optimized subpath matching by implementing a Suffix Graph, reducing time complexity from quadratic to O(N × L) and offloading generation to the client to eliminate server-side preprocessing overhead.
• High-Throughput Chat: Built a scalable real-time chat system utilizing a Gateway-Worker-Queue pattern with Socket.IO and Redis, decoupling connections from database writes to ensure message delivery during traffic spikes.

---

## 2. CORTEX — OS-Level Visual Automation Engine
Stack: Python, PyQt6, Pydantic, NetworkX, LLM, PyAutoGUI
GitHub: https://github.com/singhmanmeet95/cortex-main

• OS-Level Automation Engine: Built an automation engine using PyAutoGUI to interact with complex EHR systems, enabling seamless data entry workflows across iframe-heavy web portals and legacy desktop apps where standard DOM scraping fails.
• Visual Node Editor (DAGs): Transformed script-based bot creation into a visual workflow by developing a custom drag-and-drop node interface using PyQt6 and NetworkX, allowing non-technical users to visually build complex automation pipelines.
• Self-Healing Image Locators: Reduced UI-update breakages by integrating self-healing image locators powered by Vision LLMs, enabling the system to dynamically identify and interact with elements despite layout shifts or varying screen resolutions.`,
    },
    {
      id: 4,
      title: "⚡ Technical Skills",
      date: "Nov 15, 11:00 AM",
      content: `# Technical Skills Inventory

## Programming Languages
- C / C++ (High proficiency in Data Structures & Algorithms)
- Python (PyQt6, PyAutoGUI, NetworkX, Scripting)
- JavaScript / TypeScript (Modern ESNext, strict type systems)
- Bash / Shell Scripting
- HTML5 / CSS3

## Web & Backend APIs
- React.js, Next.js
- Node.js, Express.js
- RESTful APIs, WebSockets, Socket.IO

## Databases & ORMs
- PostgreSQL, MySQL, SQLite
- MongoDB
- Prisma ORM, PgBouncer connection pooling
- Vector Databases: ChromaDB
- In-Memory: Redis (caching, queues, pub/sub)

## Cloud & DevOps
- Docker & Containerization
- Git, GitHub, GitHub Actions (CI/CD)
- Cloud: Microsoft Azure, AWS, Cloudflare Workers
- Linux Administration & Server Configuration

## Computer Science Coursework
- Database Management Systems (DBMS)
- Object-Oriented Programming (OOP)
- Operating Systems (OS)
- Data Structures & Algorithms (DSA)`,
    },
    {
      id: 5,
      title: "🏆 Achievements & Leadership",
      date: "Nov 10, 6:45 PM",
      content: `# Achievements & Honors

## Competitive Programming
• LeetCode Knight:
  - 850+ algorithmic problems solved
  - 20 Badges earned
  - Peak Rating: 1860
  - Profile: https://leetcode.com/u/idk_the_answer/

• Codeforces Specialist:
  - 15+ contests participated
  - Maximum Rating: 1427
  - Profile: https://codeforces.com/profile/silent_cartographer

## Leadership & Extracurriculars
• Reflect, DTU — Co-Head of Photography & Filmmaking Society:
  - Led creative production, cinematography, and event documentation for university-level festivals and initiatives.
  - Spearheaded team coordination, scheduling, and multi-camera production workflows.`,
    },
    {
      id: 6,
      title: "🎓 Education",
      date: "Nov 05, 9:30 AM",
      content: `# Education Background

## Delhi Technological University (DTU)
Formerly Delhi College of Engineering (DCE)
Delhi, India

- Degree: Bachelor of Technology (B.Tech)
- Major: Computer Science and Engineering
- Duration: August 2023 – May 2027

Relevant Coursework:
- Operating Systems (Processes, Concurrency, Memory Management)
- Database Management Systems (Relational Algebra, SQL, Indexing, Transactions)
- Object-Oriented Programming (Design Patterns, Polymorphism, Architecture)
- Computer Networks & Distributed Systems`,
    },
  ])

  const [selectedNoteId, setSelectedNoteId] = useState(1)
  const [isEditing, setIsEditing] = useState(false)

  const selectedNote = notes.find((note) => note.id === selectedNoteId) || notes[0]

  const handleNoteSelect = (id: number) => {
    setSelectedNoteId(id)
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(
      notes.map((note) => {
        if (note.id === selectedNoteId) {
          return { ...note, content: e.target.value }
        }
        return note
      }),
    )
  }

  const textColor = isDarkMode ? "text-white" : "text-black"
  const bgColor = isDarkMode ? "bg-gray-900" : "bg-white"
  const sidebarBg = isDarkMode ? "bg-gray-800/90" : "bg-gray-100"
  const borderColor = isDarkMode ? "border-gray-700/80" : "border-gray-300"
  const hoverBg = isDarkMode ? "hover:bg-gray-700/60" : "hover:bg-gray-200"
  const selectedBg = isDarkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-black font-semibold"

  return (
    <div className={`flex h-full ${bgColor} ${textColor} select-none font-sans`}>
      {/* Sidebar */}
      <div className={`w-64 ${sidebarBg} border-r ${borderColor} flex flex-col shrink-0`}>
        <div className={`p-3 border-b ${isDarkMode ? "border-gray-700/50" : "border-gray-300"} flex justify-between items-center`}>
          <span className={`font-bold text-sm tracking-wide ${isDarkMode ? "text-white" : "text-black font-extrabold"}`}>iCloud Notes</span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-500 font-mono font-bold">
            {notes.length} Notes
          </span>
        </div>
        <div className="overflow-y-auto flex-1">
          {notes.map((note) => (
            <div
              key={note.id}
              className={`p-3 cursor-pointer border-b ${isDarkMode ? "border-gray-800/30" : "border-gray-200"} transition ${
                selectedNoteId === note.id ? selectedBg : hoverBg
              }`}
              onClick={() => handleNoteSelect(note.id)}
            >
              <h3 className={`font-bold text-xs truncate ${isDarkMode ? "text-white" : "text-black"}`}>{note.title}</h3>
              <p className={`text-[10px] font-medium mt-0.5 ${isDarkMode ? "text-gray-400" : "text-zinc-600"}`}>{note.date}</p>
              <p className={`text-[11px] mt-1 truncate font-normal ${isDarkMode ? "text-gray-300" : "text-zinc-800"}`}>
                {note.content.split("\n")[0].replace(/^#+ /, "")}
              </p>
            </div>
          ))}
        </div>

        {/* Sidebar Footer Link Bar */}
        <div className={`p-3 border-t ${isDarkMode ? "border-gray-700/50" : "border-gray-300"} space-y-1.5 text-xs`}>
          <div className={`font-bold text-[11px] uppercase tracking-wider mb-1 ${isDarkMode ? "text-gray-400" : "text-black font-extrabold"}`}>
            Quick Actions
          </div>
          <a
            href="/Manmeet_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 font-bold py-1 ${isDarkMode ? "text-emerald-400 hover:text-emerald-300" : "text-emerald-700 hover:text-emerald-900"}`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume PDF</span>
          </a>
          <a
            href="https://www.linkedin.com/in/manmeetsinghdev/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 font-bold py-1 ${isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-700 hover:text-blue-900"}`}
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn Profile</span>
          </a>
          <a
            href="https://github.com/singhmanmeet95"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 font-bold py-1 ${isDarkMode ? "text-gray-300 hover:text-white" : "text-black hover:text-zinc-700"}`}
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub Profile</span>
          </a>
          <a
            href="https://leetcode.com/u/idk_the_answer/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 font-bold py-1 ${isDarkMode ? "text-amber-400 hover:text-amber-300" : "text-amber-700 hover:text-amber-900"}`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>LeetCode (Knight 1860)</span>
          </a>
          <a
            href="https://codeforces.com/profile/silent_cartographer"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 font-bold py-1 ${isDarkMode ? "text-cyan-400 hover:text-cyan-300" : "text-cyan-700 hover:text-cyan-900"}`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Codeforces (Specialist 1427)</span>
          </a>
        </div>
      </div>

      {/* Note Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header with Links & Mode Switch */}
        <div className={`p-3 border-b ${borderColor} flex items-center justify-between ${isDarkMode ? "bg-zinc-900/60" : "bg-gray-50"} backdrop-blur-md`}>
          <div>
            <h2 className={`font-extrabold text-sm md:text-base ${isDarkMode ? "text-white" : "text-black"}`}>{selectedNote.title}</h2>
            <p className={`text-[11px] font-medium ${isDarkMode ? "text-gray-400" : "text-zinc-600"}`}>{selectedNote.date}</p>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href="/Manmeet_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition"
              title="Open Resume PDF"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>

            <a
              href="https://www.linkedin.com/in/manmeetsinghdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/singhmanmeet95"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold border border-zinc-700 transition"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href="https://leetcode.com/u/idk_the_answer/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold transition"
            >
              <span>LeetCode</span>
            </a>

            <a
              href="https://codeforces.com/profile/silent_cartographer"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-semibold transition"
            >
              <span>Codeforces</span>
            </a>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`p-1.5 rounded-md transition ${isDarkMode ? "hover:bg-white/10 text-gray-300" : "hover:bg-gray-200 text-black"}`}
              title={isEditing ? "View formatted note" : "Edit note"}
            >
              {isEditing ? <Eye className="w-4 h-4 text-amber-500" /> : <Edit3 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Note Body */}
        <div className={`flex-1 p-6 overflow-auto ${bgColor}`}>
          {isEditing ? (
            <textarea
              className={`w-full h-full resize-none ${bgColor} ${isDarkMode ? "text-white" : "text-black"} font-mono text-xs md:text-sm focus:outline-none`}
              value={selectedNote.content}
              onChange={handleContentChange}
            />
          ) : (
            <div className="max-w-3xl mx-auto space-y-4 text-xs md:text-sm leading-relaxed">
              {/* Clickable Action Banner on first note */}
              {selectedNote.id === 1 && (
                <div className={`p-4 rounded-xl border flex flex-wrap items-center justify-between gap-3 mb-6 ${isDarkMode ? "bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-purple-900/40 border-blue-500/30 text-white" : "bg-blue-50 border-blue-200 text-black"}`}>
                  <div>
                    <h4 className={`font-extrabold text-sm ${isDarkMode ? "text-white" : "text-black"}`}>Get in touch with Manmeet</h4>
                    <p className={`text-xs font-medium ${isDarkMode ? "text-gray-300" : "text-zinc-700"}`}>Open for SWE Internships & Full-Time roles</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="mailto:meetusingh2004@gmail.com"
                      className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium"
                    >
                      <Mail className="w-3 h-3" />
                      <span>meetusingh2004@gmail.com</span>
                    </a>
                    <a
                      href="tel:+918076438849"
                      className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-medium border border-zinc-700"
                    >
                      <Phone className="w-3 h-3 text-emerald-400" />
                      <span>+91-80764-38849</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Render formatted text */}
              <div className="max-w-none space-y-3">
                {selectedNote.content.split("\n").map((line, idx) => {
                  if (line.startsWith("# ")) {
                    return (
                      <h1 key={idx} className={`text-xl md:text-2xl font-extrabold border-b pb-2 mb-3 ${isDarkMode ? "text-white border-white/10" : "text-black border-zinc-300"}`}>
                        {line.replace("# ", "")}
                      </h1>
                    )
                  }
                  if (line.startsWith("## ")) {
                    return (
                      <h2 key={idx} className={`text-base md:text-lg font-bold mt-5 mb-2 ${isDarkMode ? "text-indigo-400" : "text-black font-extrabold"}`}>
                        {line.replace("## ", "")}
                      </h2>
                    )
                  }
                  if (line.startsWith("• ")) {
                    return (
                      <div key={idx} className={`pl-4 border-l-2 my-1 text-xs md:text-sm font-medium ${isDarkMode ? "border-blue-500/50 text-gray-200" : "border-zinc-800 text-black"}`}>
                        {line.replace("• ", "")}
                      </div>
                    )
                  }
                  if (line.startsWith("- ")) {
                    return (
                      <div key={idx} className={`flex items-center space-x-2 text-xs md:text-sm font-medium my-0.5 ${isDarkMode ? "text-gray-300" : "text-black"}`}>
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isDarkMode ? "bg-blue-400" : "bg-black"}`} />
                        <span>{line.replace("- ", "")}</span>
                      </div>
                    )
                  }
                  if (line.includes("http://") || line.includes("https://")) {
                    const match = line.match(/(https?:\/\/[^\s]+)/)
                    if (match) {
                      const url = match[0]
                      return (
                        <p key={idx} className={`text-xs md:text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-black"}`}>
                          <span>{line.replace(url, "")}</span>
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`underline inline-flex items-center gap-1 font-bold ${isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-700 hover:text-blue-900"}`}
                          >
                            <span>{url}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </p>
                      )
                    }
                  }
                  if (line.includes("meetusingh2004@gmail.com")) {
                    return (
                      <p key={idx} className={`text-xs md:text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-black"}`}>
                        Email:{" "}
                        <a
                          href="mailto:meetusingh2004@gmail.com"
                          className={`underline font-bold ${isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-700 hover:text-blue-900"}`}
                        >
                          meetusingh2004@gmail.com
                        </a>
                      </p>
                    )
                  }
                  if (line.trim() === "") {
                    return <div key={idx} className="h-2" />
                  }
                  return (
                    <p key={idx} className={`text-xs md:text-sm leading-relaxed font-medium ${isDarkMode ? "text-gray-300" : "text-black"}`}>
                      {line}
                    </p>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
