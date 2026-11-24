"use client"

import { useState } from "react"
import {
  Mail,
  Send,
  Inbox,
  SendHorizontal,
  Archive,
  Trash2,
  Star,
  PenSquare,
  CheckCircle2,
  Paperclip,
  User,
  Phone,
  MapPin,
} from "lucide-react"

interface MailProps {
  isDarkMode?: boolean
}

interface EmailItem {
  id: number
  sender: string
  email: string
  subject: string
  preview: string
  date: string
  body: string
  unread: boolean
}

export default function MailApp({ isDarkMode = true }: MailProps) {
  const [selectedFolder, setSelectedFolder] = useState<"inbox" | "sent" | "compose">("inbox")
  const [selectedEmailId, setSelectedEmailId] = useState<number>(1)
  const [isComposing, setIsComposing] = useState(false)
  const [composeSubject, setComposeSubject] = useState("")
  const [composeBody, setComposeBody] = useState("")
  const [composeFrom, setComposeFrom] = useState("")
  const [sentSuccess, setSentSuccess] = useState(false)

  const textColor = isDarkMode ? "text-white" : "text-gray-900"
  const bgColor = isDarkMode ? "bg-[#1e1e1e]" : "bg-white"
  const sidebarBg = isDarkMode ? "bg-[#252526]" : "bg-gray-100"
  const listBg = isDarkMode ? "bg-[#181818]" : "bg-gray-50"
  const activeBg = isDarkMode ? "bg-[#04395e]" : "bg-blue-100"
  const borderColor = isDarkMode ? "border-gray-800" : "border-gray-200"

  const emails: EmailItem[] = [
    {
      id: 1,
      sender: "Manmeet Singh",
      email: "meetusingh2004@gmail.com",
      subject: "👋 Welcome to my macOS Portfolio! Open for SWE opportunities",
      preview: "Hi! Thanks for stopping by my macOS portfolio. Feel free to explore my projects...",
      date: "9:41 AM",
      unread: true,
      body: `Hi there!

Thank you for visiting my portfolio website! I am Manmeet Singh, a Computer Science and Engineering undergraduate at Delhi Technological University (DTU - Formerly Delhi College of Engineering), graduating in May 2027.

I'm passionate about high-concurrency backend systems, graph-based routing algorithms, and AI automation. Recently, I interned at Accelryde Technologies as an SDE Intern where I reduced Firestore cloud writes by 99% and built real-time voice messaging telemetry.

I am actively looking for software engineering internship and full-time opportunities.

Contact Details:
• Email: meetusingh2004@gmail.com
• Phone: +91-80764-38849
• Location: Delhi, India
• LeetCode: Knight (850+ problems, 1860 peak rating)
• Codeforces: Specialist (1427 rating)

Feel free to send me a message using the "New Message" button above!

Best regards,
Manmeet Singh`,
    },
    {
      id: 2,
      sender: "Accelryde Technologies LLP",
      email: "internships@accelryde.com",
      subject: "SDE Internship Completion & Commendation - Accelryde",
      preview: "This is to commend Manmeet Singh on successfully completing the SDE Internship...",
      date: "Jul 28",
      unread: false,
      body: `To Whom It May Concern,

This is to confirm that Manmeet Singh completed his Software Development Engineer Internship at Accelryde Technologies LLP (May 2026 – July 2026).

During his tenure, Manmeet demonstrated exceptional systems engineering and problem-solving skills:
• Reduced cloud writes by ~99% (from 2,000 to 1 write per rider) to remain under Firestore's quota limits by designing an SQLite buffer with Douglas–Peucker compression.
• Architected a two-tier live tracking system separating Firebase Realtime DB with onDisconnect from Firestore logs, cutting battery & bandwidth via Android foreground services.
• Implemented an inline 24 kbps AAC push-to-talk voice messaging queue in Realtime DB without recurring paid storage costs.
• Delivered an automated rider safety engine using Haversine distance computations.

We highly commend his engineering craftsmanship and dedication.`,
    },
    {
      id: 3,
      sender: "Delhi Technological University",
      email: "cse@dtu.ac.in",
      subject: "B.Tech Computer Science & Engineering - Academic Standing",
      preview: "Academic record and coursework summary for Manmeet Singh (2023 - 2027)...",
      date: "Aug 15",
      unread: false,
      body: `Delhi Technological University (DTU, formerly Delhi College of Engineering)
Department of Computer Science & Engineering

Student: Manmeet Singh
Program: Bachelor of Technology (B.Tech)
Discipline: Computer Science and Engineering
Session: August 2023 – May 2027

Key Coursework Completed:
- Database Management Systems (DBMS)
- Object-Oriented Programming (OOP)
- Operating Systems (OS)
- Data Structures and Algorithms (DSA)
- Computer Networks`,
    },
  ]

  const activeEmail = emails.find((e) => e.id === selectedEmailId) || emails[0]

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:meetusingh2004@gmail.com?subject=${encodeURIComponent(
      composeSubject || "Portfolio Inquiry from " + composeFrom
    )}&body=${encodeURIComponent(composeBody)}`
    window.open(mailto, "_blank")
    setSentSuccess(true)
    setTimeout(() => {
      setSentSuccess(false)
      setIsComposing(false)
      setComposeSubject("")
      setComposeBody("")
      setComposeFrom("")
    }, 2000)
  }

  return (
    <div className={`h-full w-full flex ${bgColor} ${textColor} text-sm overflow-hidden select-none`}>
      {/* Sidebar Folders */}
      <div className={`w-48 ${sidebarBg} border-r ${borderColor} flex flex-col p-2 space-y-1`}>
        <button
          onClick={() => {
            setIsComposing(true)
          }}
          className="flex items-center space-x-2 w-full px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium text-xs mb-3 shadow transition"
        >
          <PenSquare className="w-4 h-4" />
          <span>New Message</span>
        </button>

        <button
          onClick={() => {
            setSelectedFolder("inbox")
            setIsComposing(false)
          }}
          className={`flex items-center justify-between w-full px-3 py-1.5 rounded-md text-xs ${
            selectedFolder === "inbox" && !isComposing ? activeBg : "hover:bg-white/5"
          }`}
        >
          <div className="flex items-center space-x-2">
            <Inbox className="w-4 h-4 text-blue-400" />
            <span>All Inboxes</span>
          </div>
          <span className="text-[11px] px-1.5 py-0.2 rounded-full bg-blue-500/30 text-blue-300">
            {emails.length}
          </span>
        </button>

        <button
          onClick={() => {
            setSelectedFolder("sent")
            setIsComposing(false)
          }}
          className={`flex items-center space-x-2 w-full px-3 py-1.5 rounded-md text-xs ${
            selectedFolder === "sent" && !isComposing ? activeBg : "hover:bg-white/5"
          }`}
        >
          <SendHorizontal className="w-4 h-4 text-emerald-400" />
          <span>Sent</span>
        </button>

        <button className="flex items-center space-x-2 w-full px-3 py-1.5 rounded-md text-xs hover:bg-white/5 text-gray-400">
          <Archive className="w-4 h-4" />
          <span>Archive</span>
        </button>

        <div className="pt-4 border-t border-gray-700/50 mt-auto p-2 text-xs text-gray-400 space-y-2">
          <div className="font-semibold text-gray-300">Direct Contact</div>
          <a
            href="mailto:meetusingh2004@gmail.com"
            className="flex items-center space-x-1.5 text-[11px] truncate text-blue-400 hover:underline"
            title="Send email"
          >
            <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="truncate">meetusingh2004@gmail.com</span>
          </a>
          <a
            href="tel:+918076438849"
            className="flex items-center space-x-1.5 text-[11px] text-green-400 hover:underline"
            title="Call"
          >
            <Phone className="w-3.5 h-3.5 text-green-400 shrink-0" />
            <span>+91-80764-38849</span>
          </a>
          <div className="flex items-center space-x-1.5 text-[11px]">
            <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span>Delhi, India</span>
          </div>
        </div>
      </div>

      {/* Message List */}
      <div className={`w-72 ${listBg} border-r ${borderColor} flex flex-col overflow-y-auto`}>
        <div className="p-3 border-b border-gray-700/40 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Inbox — {emails.length} Messages
        </div>
        <div className="divide-y divide-gray-800">
          {emails.map((email) => {
            const isSelected = selectedEmailId === email.id && !isComposing
            return (
              <div
                key={email.id}
                onClick={() => {
                  setSelectedEmailId(email.id)
                  setIsComposing(false)
                }}
                className={`p-3 cursor-pointer transition ${
                  isSelected ? activeBg : "hover:bg-white/5"
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="font-semibold text-xs truncate max-w-[160px]">{email.sender}</span>
                  <span className="text-[10px] text-gray-400">{email.date}</span>
                </div>
                <div className="text-xs font-medium truncate mb-1 text-blue-300">{email.subject}</div>
                <div className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">
                  {email.preview}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Reading / Compose Pane */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {isComposing ? (
          <form onSubmit={handleSendEmail} className="h-full flex flex-col p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-gray-700 pb-3">
              <h2 className="text-lg font-bold">New Message to Manmeet Singh</h2>
              <button
                type="button"
                onClick={() => setIsComposing(false)}
                className="text-xs text-gray-400 hover:text-white"
              >
                Cancel
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center border-b border-gray-800 py-1.5">
                <span className="w-16 text-xs text-gray-400">To:</span>
                <span className="text-xs font-medium text-blue-400 font-mono">
                  Manmeet Singh &lt;meetusingh2004@gmail.com&gt;
                </span>
              </div>

              <div className="flex items-center border-b border-gray-800 py-1.5">
                <span className="w-16 text-xs text-gray-400">Your Email:</span>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={composeFrom}
                  onChange={(e) => setComposeFrom(e.target.value)}
                  className="flex-1 bg-transparent text-xs focus:outline-none"
                />
              </div>

              <div className="flex items-center border-b border-gray-800 py-1.5">
                <span className="w-16 text-xs text-gray-400">Subject:</span>
                <input
                  type="text"
                  required
                  placeholder="Opportunity / Collaboration / Question"
                  value={composeSubject}
                  onChange={(e) => setComposeSubject(e.target.value)}
                  className="flex-1 bg-transparent text-xs focus:outline-none font-medium"
                />
              </div>
            </div>

            <textarea
              required
              placeholder="Hi Manmeet, I came across your portfolio and wanted to reach out regarding..."
              value={composeBody}
              onChange={(e) => setComposeBody(e.target.value)}
              className="flex-1 w-full bg-transparent resize-none focus:outline-none text-xs leading-relaxed border border-gray-800 rounded-lg p-3"
            />

            <div className="flex justify-between items-center pt-2">
              <span className="text-[11px] text-gray-400">
                Clicking Send will open your mail client with prefilled details.
              </span>
              <button
                type="submit"
                className="flex items-center space-x-2 px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium text-xs shadow transition"
              >
                {sentSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Opening Mail...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="h-full flex flex-col p-6 overflow-y-auto">
            <div className="border-b border-gray-700/60 pb-4 mb-4">
              <h1 className="text-xl font-bold mb-3">{activeEmail.subject}</h1>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-base">
                    {activeEmail.sender.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-xs">{activeEmail.sender}</div>
                    <div className="text-[11px] text-gray-400">{activeEmail.email}</div>
                  </div>
                </div>
                <div className="text-xs text-gray-400">{activeEmail.date}</div>
              </div>
            </div>

            <div className="whitespace-pre-wrap text-xs leading-relaxed font-sans opacity-90 flex-1">
              {activeEmail.body}
            </div>

            <div className="pt-6 border-t border-gray-800 mt-6 flex justify-end space-x-3">
              <button
                onClick={() => {
                  setComposeSubject(`Re: ${activeEmail.subject}`)
                  setIsComposing(true)
                }}
                className="px-4 py-1.5 rounded-lg border border-gray-600 text-xs hover:bg-white/10 transition"
              >
                Reply
              </button>
              <a
                href={`mailto:${activeEmail.email}`}
                className="px-4 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium transition"
              >
                Direct Email
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
