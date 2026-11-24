"use client"

import { useState } from "react"
import { Download, ExternalLink, Printer, ZoomIn, ZoomOut, FileText, CheckCircle2, Eye, FileCode2, Share2 } from "lucide-react"

interface PreviewProps {
  isDarkMode?: boolean
}

export default function Preview({ isDarkMode = true }: PreviewProps) {
  const [zoom, setZoom] = useState(100)
  const [activeTab, setActiveTab] = useState<"document" | "raw">("document")
  const textColor = isDarkMode ? "text-white" : "text-gray-900"
  const bgColor = isDarkMode ? "bg-zinc-900" : "bg-gray-100"
  const toolbarBg = isDarkMode ? "bg-zinc-800 border-zinc-700" : "bg-white border-gray-200"

  return (
    <div className={`h-full w-full flex flex-col ${bgColor} ${textColor} select-none`}>
      {/* macOS Preview Toolbar */}
      <div className={`h-12 border-b ${toolbarBg} px-3 sm:px-4 flex items-center justify-between shadow-sm shrink-0 gap-2`}>
        <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
          <div className="flex items-center space-x-1.5 bg-red-600/20 text-red-400 px-2.5 py-1 rounded-md text-xs font-semibold truncate">
            <FileText className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Manmeet_Singh_Resume.pdf</span>
          </div>
          <span className="text-xs text-zinc-400 hidden md:inline">1 Page • 144 KB (LaTeX)</span>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center bg-zinc-700/60 p-0.5 rounded-lg border border-zinc-600/40 text-xs">
          <button
            onClick={() => setActiveTab("document")}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded-md transition ${
              activeTab === "document"
                ? "bg-blue-600 text-white font-medium shadow-sm"
                : "text-zinc-300 hover:text-white hover:bg-white/10"
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Preview</span>
          </button>
          <button
            onClick={() => setActiveTab("raw")}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded-md transition ${
              activeTab === "raw"
                ? "bg-blue-600 text-white font-medium shadow-sm"
                : "text-zinc-300 hover:text-white hover:bg-white/10"
            }`}
          >
            <FileCode2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Raw PDF</span>
          </button>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          {/* Zoom controls */}
          <div className="hidden lg:flex items-center bg-zinc-700/50 rounded-lg p-0.5 border border-zinc-600/50 text-xs">
            <button
              onClick={() => setZoom(Math.max(70, zoom - 10))}
              className="p-1 hover:bg-white/10 rounded"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="px-2 font-mono text-[11px]">{zoom}%</span>
            <button
              onClick={() => setZoom(Math.min(130, zoom + 10))}
              className="p-1 hover:bg-white/10 rounded"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Download & External Open */}
          <a
            href="/Manmeet_Singh_Resume.pdf"
            download="Manmeet_Singh_Resume.pdf"
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition shadow"
            title="Download PDF to computer"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Download</span>
          </a>

          <a
            href="/Manmeet_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition shadow"
            title="Open original PDF in browser tab"
          >
            <span>Open Tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Viewport */}
      <div className={`flex-1 overflow-auto p-3 sm:p-6 flex justify-center ${activeTab === "document" ? "items-start" : "items-stretch"} bg-zinc-950/80`}>
        {activeTab === "document" ? (
          /* High-Fidelity LaTeX Resume Paper View */
          <div
            className="w-full max-w-4xl bg-white text-black rounded-sm shadow-2xl border border-zinc-400 p-8 sm:p-12 font-serif transition-transform origin-top select-text h-fit min-h-fit mb-12 shrink-0"
            style={{
              transform: `scale(${zoom / 100})`,
              transformOrigin: "top center",
              fontFamily: "'Latin Modern Roman', 'Computer Modern', 'Times New Roman', Times, serif",
              lineHeight: 1.35
            }}
          >
            {/* Header */}
            <div className="text-center pb-3 mb-3 border-b border-black">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-widest text-black uppercase mb-2 font-serif">
                MANMEET SINGH
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-zinc-800 font-sans">
                <a href="tel:+918076438849" className="hover:text-blue-600 transition flex items-center gap-1">
                  <span>📞 +91-80764-38849</span>
                </a>
                <span>|</span>
                <a href="mailto:meetusingh2004@gmail.com" className="hover:text-blue-600 transition flex items-center gap-1">
                  <span>✉️ meetusingh2004@gmail.com</span>
                </a>
                <span>|</span>
                <a
                  href="https://www.linkedin.com/in/manmeetsinghdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 underline font-medium flex items-center gap-1"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
                  <span>LinkedIn</span>
                </a>
                <span>|</span>
                <a
                  href="https://github.com/singhmanmeet95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 underline font-medium flex items-center gap-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <span>|</span>
                <a
                  href="https://manmeetsingh.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 underline font-medium flex items-center gap-1"
                >
                  <span>🌐 Portfolio</span>
                </a>
              </div>
            </div>

            {/* EDUCATION */}
            <div className="mb-4">
              <h2 className="text-sm font-bold tracking-wider uppercase border-b border-zinc-900 pb-0.5 mb-1.5 text-zinc-900">
                EDUCATION
              </h2>
              <div className="flex justify-between items-baseline text-xs font-bold">
                <span>Delhi Technological University <span className="font-normal text-zinc-700">(Formerly Delhi College of Engineering)</span></span>
                <span className="font-bold">Aug 2023 – May 2027</span>
              </div>
              <div className="flex justify-between items-baseline text-xs text-zinc-800 italic">
                <span>Bachelor of Technology in Computer Science and Engineering</span>
                <span className="not-italic text-zinc-700">Delhi, India</span>
              </div>
            </div>

            {/* EXPERIENCE */}
            <div className="mb-4">
              <h2 className="text-sm font-bold tracking-wider uppercase border-b border-zinc-900 pb-0.5 mb-1.5 text-zinc-900">
                EXPERIENCE
              </h2>
              <div className="flex justify-between items-baseline text-xs font-bold">
                <a
                  href="https://trilyt.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 hover:text-blue-700 inline-flex items-center gap-1"
                >
                  <span>Accelryde Technologies LLP, Remote</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="font-bold">May 2026 – Jul 2026</span>
              </div>
              <div className="flex justify-between items-baseline text-xs mb-1">
                <span className="italic text-zinc-800">Software Development Engineer Intern</span>
                <a
                  href="https://drive.google.com/file/d/18GIWf6nUJoMrwPVDoqobjREl0jMTo1Be/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline text-xs italic font-serif"
                >
                  Certificate
                </a>
              </div>
              <p className="text-xs text-zinc-700 italic mb-1.5">
                React Native, TypeScript, Firebase, SQLite, MapLibre
              </p>
              <ul className="list-disc ml-5 text-xs text-zinc-800 space-y-1">
                <li>
                  Cut cloud writes by ~99% (~2,000 to 1 per rider) to stay under Firestore’s 20K/day limit, buffering GPS points in <strong>SQLite</strong> and uploading one <strong>Douglas–Peucker</strong> compressed polyline per ride.
                </li>
                <li>
                  Split live tracking (<strong>Firebase Realtime DB</strong> with <code className="font-mono text-[11px] bg-zinc-100 px-1 py-0.5 rounded">onDisconnect</code>) from <strong>Firestore</strong> logs in a two-tier architecture, cutting battery and bandwidth via <strong>Android foreground services</strong> and adaptive <strong>5s/30s/15m</strong> polling.
                </li>
                <li>
                  Built <strong>push-to-talk</strong> voice messaging without paid storage by storing <strong>24 kbps AAC</strong> (~3 KB/s) clips inline in <strong>Realtime DB</strong>, using a <strong>sequential playback queue</strong> and <strong>3-minute TTL</strong> to prevent overlapping, stale alerts.
                </li>
                <li>
                  Engineered a client-side safety engine detecting stopped, disconnected, and separated riders via <strong>Haversine distance</strong> and <strong>server-synced timestamps</strong>, delivering spoken lead/sweep alerts under <strong>role-based Firebase rules</strong>.
                </li>
              </ul>
            </div>

            {/* PROJECTS */}
            <div className="mb-4">
              <h2 className="text-sm font-bold tracking-wider uppercase border-b border-zinc-900 pb-0.5 mb-1.5 text-zinc-900">
                PROJECTS
              </h2>

              {/* ALASKA */}
              <div className="mb-3">
                <div className="flex justify-between items-baseline text-xs mb-1">
                  <div className="flex items-center space-x-1.5">
                    <span className="font-bold text-zinc-900">ALASKA</span>
                    <span className="text-zinc-500">|</span>
                    <span className="italic text-zinc-700">
                      React, Node.js, Express, PostgreSQL, Prisma, Redis, PgBouncer, Socket.IO, Docker
                    </span>
                  </div>
                  <a
                    href="https://github.com/singhmanmeet95/Alaska"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline font-bold text-xs"
                  >
                    GitHub
                  </a>
                </div>
                <ul className="list-disc ml-5 text-xs text-zinc-800 space-y-1">
                  <li>
                    Engineered a <strong>route-based social networking platform</strong> that enables <strong>real-time discovery</strong>, connecting users who share overlapping metro commutes.
                  </li>
                  <li>
                    Developed an interactive custom metro route builder using <strong>Mapbox GL JS</strong> and <strong>Dijkstra’s algorithm</strong>, computing optimal shortest paths across a network of <strong>250+ interconnected nodes</strong> in real-time.
                  </li>
                  <li>
                    Optimized subpath matching by implementing a <strong>Suffix Graph</strong>, reducing time complexity from <strong>quadratic to</strong> <em>O(N × L)</em> and offloading generation to the client to eliminate server-side preprocessing overhead.
                  </li>
                  <li>
                    Built a scalable <strong>real-time chat system</strong> utilizing a <strong>Gateway-Worker-Queue pattern</strong> with <strong>Socket.IO and Redis</strong>, decoupling connections from database writes to ensure message delivery during high traffic spikes.
                  </li>
                </ul>
              </div>

              {/* CORTEX */}
              <div>
                <div className="flex justify-between items-baseline text-xs mb-1">
                  <div className="flex items-center space-x-1.5">
                    <span className="font-bold text-zinc-900">CORTEX</span>
                    <span className="italic text-zinc-700">
                      Python, PyQt6, Pydantic, NetworkX, LLM, PyAutoGUI
                    </span>
                  </div>
                  <a
                    href="https://github.com/singhmanmeet95/cortex-main"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline font-bold text-xs"
                  >
                    GitHub
                  </a>
                </div>
                <ul className="list-disc ml-5 text-xs text-zinc-800 space-y-1">
                  <li>
                    Built an <strong>OS-level automation engine</strong> using <strong>PyAutoGUI</strong> to interact with complex EHR systems, enabling seamless data entry workflows across iframe-heavy web portals and legacy desktop apps where standard DOM scraping fails.
                  </li>
                  <li>
                    Transformed script-based bot creation into a visual workflow by developing a custom <strong>drag-and-drop node interface</strong> using <strong>PyQt6 and NetworkX</strong>, allowing non-technical users to visually build complex <strong>automation pipelines (DAGs)</strong>.
                  </li>
                  <li>
                    Reduced UI-update breakages by integrating <strong>self-healing image locators</strong> powered by <strong>Vision LLMs</strong>, enabling the system to dynamically identify and interact with elements despite layout shifts or varying screen resolutions.
                  </li>
                </ul>
              </div>
            </div>

            {/* TECHNICAL SKILLS */}
            <div className="mb-4">
              <h2 className="text-sm font-bold tracking-wider uppercase border-b border-zinc-900 pb-0.5 mb-1.5 text-zinc-900">
                TECHNICAL SKILLS
              </h2>
              <div className="text-xs space-y-1">
                <div>
                  <strong className="font-bold text-zinc-900">Languages:</strong>{" "}
                  <span className="text-zinc-800">C/C++, Python, JavaScript, TypeScript, Bash, HTML/CSS</span>
                </div>
                <div>
                  <strong className="font-bold text-zinc-900">Web & Backend APIs:</strong>{" "}
                  <span className="text-zinc-800">React.js, Node.js, Express.js, REST APIs, WebSockets</span>
                </div>
                <div>
                  <strong className="font-bold text-zinc-900">Databases & ORM:</strong>{" "}
                  <span className="text-zinc-800">PostgreSQL, MongoDB, MySQL, Prisma, ChromaDB</span>
                </div>
                <div>
                  <strong className="font-bold text-zinc-900">DevOps:</strong>{" "}
                  <span className="text-zinc-800">Git, GitHub, GitHub Actions, Docker, Azure, AWS, Cloudflare Workers, Linux</span>
                </div>
                <div>
                  <strong className="font-bold text-zinc-900">Coursework:</strong>{" "}
                  <span className="text-zinc-800">Database Management Systems, Object-Oriented Programming, Operating Systems</span>
                </div>
              </div>
            </div>

            {/* ACHIEVEMENTS */}
            <div>
              <h2 className="text-sm font-bold tracking-wider uppercase border-b border-zinc-900 pb-0.5 mb-1.5 text-zinc-900">
                ACHIEVEMENTS
              </h2>
              <ul className="list-disc ml-5 text-xs text-zinc-800 space-y-1">
                <li>
                  <a
                    href="https://leetcode.com/u/idk_the_answer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-zinc-900 hover:text-blue-700 underline"
                  >
                    Knight on LeetCode
                  </a>{" "}
                  with <strong>850+ problems solved</strong>, earning <strong>20 badges</strong> and achieving a peak rating of <strong>1860</strong>.
                </li>
                <li>
                  <a
                    href="https://codeforces.com/profile/silent_cartographer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-zinc-900 hover:text-blue-700 underline"
                  >
                    Specialist on Codeforces
                  </a>
                  , participating in <strong>15+ contests</strong> and reaching a maximum rating of <strong>1427</strong>.
                </li>
                <li>
                  <strong>Reflect, DTU:</strong> Co-Head of Photography and Filmmaking Society, led creative production and team coordination.
                </li>
              </ul>
            </div>
          </div>
        ) : (
          /* Raw Embedded PDF View with Iframe */
          <div
            className="w-full h-full max-w-4xl rounded-xl overflow-hidden shadow-2xl border border-zinc-800 bg-white"
            style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center", transition: "transform 0.15s ease" }}
          >
            <iframe
              src="/Manmeet_Singh_Resume.pdf#toolbar=1&navpanes=0"
              className="w-full h-full min-h-[700px] border-0"
              title="Manmeet Singh Resume PDF"
            />
          </div>
        )}
      </div>
    </div>
  )
}
