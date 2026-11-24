"use client"

import { useState } from "react"
import { Play, Film, ExternalLink, Camera, Sparkles, Video, Share2 } from "lucide-react"

interface YouTubeProps {
  isDarkMode?: boolean
}

export default function YouTube({ isDarkMode = true }: YouTubeProps) {
  const textColor = isDarkMode ? "text-white" : "text-gray-900"
  const bgColor = isDarkMode ? "bg-[#0f0f0f]" : "bg-white"
  const cardBg = isDarkMode ? "bg-[#1f1f1f] border-zinc-800" : "bg-gray-50 border-gray-200"
  const subtextColor = isDarkMode ? "text-zinc-400" : "text-gray-600"

  const videos = [
    {
      id: "1",
      title: "Reflect DTU - Annual Filmmaking & Production Showcase",
      category: "Cinematography & Direction",
      duration: "4:32",
      views: "14.2K views",
      date: "3 months ago",
      embedId: "akcRlji85IU", // Reference portfolio video
      description:
        "Led creative production, cinematography direction, and team coordination as Co-Head of Reflect, the official Photography & Filmmaking Society of Delhi Technological University.",
    },
    {
      id: "2",
      title: "ALASKA — Route-Based Social Networking Platform Walkthrough",
      category: "Software Demo",
      duration: "3:45",
      views: "8.9K views",
      date: "1 month ago",
      embedId: "dQw4w9WgXcQ",
      description:
        "Deep-dive demo into Dijkstra shortest path computation across 250+ metro stations, Mapbox GL visualization, and Gateway-Worker-Queue Socket.IO chat engine.",
    },
    {
      id: "3",
      title: "CORTEX — OS-Level Automation with Vision LLM Locators",
      category: "AI & Tech Talk",
      duration: "6:18",
      views: "11.5K views",
      date: "2 weeks ago",
      embedId: "dQw4w9WgXcQ",
      description:
        "Building self-healing visual automation for EHR portals and desktop software using PyQt6 drag-and-drop DAG pipelines and multimodal AI.",
    },
  ]

  const [activeVideo, setActiveVideo] = useState(videos[0])
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className={`h-full ${bgColor} ${textColor} flex flex-col overflow-y-auto font-sans`}>
      {/* Top Bar */}
      <div className="h-14 border-b border-zinc-800/80 px-6 flex items-center justify-between bg-zinc-900/60 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center space-x-3">
          <img src="/youtube.png" alt="YouTube" className="w-7 h-7 object-contain" />
          <div>
            <h1 className="font-bold text-sm tracking-tight flex items-center gap-2">
              Reflect DTU Media Studio
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-600/20 text-red-400 font-mono">Official</span>
            </h1>
          </div>
        </div>

        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-medium transition shadow-sm"
        >
          <span>Open YouTube</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Main Content Area */}
      <div className="p-6 max-w-5xl mx-auto w-full space-y-6">
        {/* Featured Video Player Box */}
        <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-black shadow-2xl">
          <div className="relative aspect-video w-full bg-zinc-950 flex items-center justify-center overflow-hidden">
            {isPlaying ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.embedId}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div
                className="absolute inset-0 bg-gradient-to-t from-black via-zinc-900/40 to-transparent flex flex-col justify-end p-6 cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-500 transition-all duration-300">
                    <Play className="w-7 h-7 ml-1 fill-white" />
                  </div>
                </div>

                <div className="relative z-10">
                  <span className="px-2.5 py-1 rounded bg-red-600/90 text-white text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
                    {activeVideo.category}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-white drop-shadow-md">
                    {activeVideo.title}
                  </h2>
                  <p className="text-zinc-300 text-xs md:text-sm mt-1 max-w-2xl line-clamp-2">
                    {activeVideo.description}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="p-5 bg-zinc-900/90 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-zinc-800">
            <div className="flex items-center space-x-4">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 to-red-600 flex items-center justify-center text-white font-bold text-lg shadow">
                R
              </div>
              <div>
                <h3 className="font-bold text-sm">Reflect DTU • Manmeet Singh</h3>
                <p className="text-xs text-zinc-400">Co-Head of Photography & Filmmaking Society</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5 bg-zinc-800/80 px-3 py-1.5 rounded-lg border border-zinc-700/50">
                <Camera className="w-3.5 h-3.5 text-amber-400" />
                Creative Direction
              </span>
              <span className="flex items-center gap-1.5 bg-zinc-800/80 px-3 py-1.5 rounded-lg border border-zinc-700/50">
                <Film className="w-3.5 h-3.5 text-red-400" />
                Cinematography
              </span>
            </div>
          </div>
        </div>

        {/* Video List */}
        <div>
          <h3 className="font-bold text-base mb-3 flex items-center gap-2">
            <Video className="w-4 h-4 text-red-500" />
            Media & Production Highlights
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {videos.map((vid) => (
              <div
                key={vid.id}
                onClick={() => {
                  setActiveVideo(vid)
                  setIsPlaying(false)
                }}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  activeVideo.id === vid.id
                    ? "border-red-500 bg-red-950/20"
                    : `${cardBg} hover:border-zinc-600`
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[11px] font-medium text-red-400 font-mono">{vid.category}</span>
                  <span className="text-[10px] text-zinc-500 bg-zinc-800 px-1.5 py-0.5 rounded">{vid.duration}</span>
                </div>
                <h4 className="font-semibold text-sm line-clamp-1 mb-1">{vid.title}</h4>
                <p className={`text-xs ${subtextColor} line-clamp-2 leading-relaxed mb-3`}>
                  {vid.description}
                </p>
                <div className="flex items-center justify-between text-[11px] text-zinc-500">
                  <span>{vid.views}</span>
                  <span>{vid.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
