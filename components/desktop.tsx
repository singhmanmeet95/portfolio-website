"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Dock from "@/components/dock"
import Menubar from "@/components/menubar"
import Wallpaper from "@/components/wallpaper"
import Window from "@/components/window"
import Launchpad from "@/components/launchpad"
import ControlCenter from "@/components/control-center"
import Spotlight from "@/components/spotlight"
import type { AppWindow } from "@/types"

interface DesktopProps {
  onLogout: () => void
  onSleep: () => void
  onShutdown: () => void
  onRestart: () => void
  initialDarkMode: boolean
  onToggleDarkMode: () => void
  initialBrightness: number
  onBrightnessChange: (value: number) => void
}

export default function Desktop({
  onLogout,
  onSleep,
  onShutdown,
  onRestart,
  initialDarkMode,
  onToggleDarkMode,
  initialBrightness,
  onBrightnessChange,
}: DesktopProps) {
  const [time, setTime] = useState(new Date())
  const [openWindows, setOpenWindows] = useState<AppWindow[]>([])
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null)
  const [showLaunchpad, setShowLaunchpad] = useState(false)
  const [showControlCenter, setShowControlCenter] = useState(false)
  const [showSpotlight, setShowSpotlight] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(initialDarkMode)
  const [screenBrightness, setScreenBrightness] = useState(initialBrightness)
  const desktopRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    // Open Notes by default on initial mount so visitors immediately see Manmeet's info
    const initialTimer = setTimeout(() => {
      const defaultApp: AppWindow = {
        id: "notes",
        title: "Notes",
        component: "Notes",
        position: { x: Math.max(40, window.innerWidth / 2 - 425), y: 70 },
        size: { width: 850, height: 600 },
      }
      setOpenWindows([defaultApp])
      setActiveWindowId("notes")
    }, 300)

    return () => {
      clearInterval(timer)
      clearTimeout(initialTimer)
    }
  }, [])

  // Update local state when props change
  useEffect(() => {
    setIsDarkMode(initialDarkMode)
  }, [initialDarkMode])

  useEffect(() => {
    setScreenBrightness(initialBrightness)
  }, [initialBrightness])

  const openApp = (app: AppWindow) => {
    // Check if app is already open
    const isOpen = openWindows.some((window) => window.id === app.id)

    if (!isOpen) {
      setOpenWindows((prev) => [...prev, app])
    }

    // Set as active window
    setActiveWindowId(app.id)

    // Close launchpad if open
    if (showLaunchpad) {
      setShowLaunchpad(false)
    }
  }

  const closeWindow = (id: string) => {
    setOpenWindows((prev) => prev.filter((window) => window.id !== id))

    // If we closed the active window, set the last window as active
    if (activeWindowId === id && openWindows.length > 1) {
      const remainingWindows = openWindows.filter((window) => window.id !== id)
      setActiveWindowId(remainingWindows[remainingWindows.length - 1].id)
    } else if (openWindows.length <= 1) {
      setActiveWindowId(null)
    }
  }

  const setActiveWindow = (id: string) => {
    setActiveWindowId(id)
  }

  const toggleLaunchpad = () => {
    setShowLaunchpad(!showLaunchpad)
    if (showControlCenter) setShowControlCenter(false)
    if (showSpotlight) setShowSpotlight(false)
  }

  const toggleControlCenter = () => {
    setShowControlCenter(!showControlCenter)
    if (showSpotlight) setShowSpotlight(false)
  }

  const toggleSpotlight = () => {
    setShowSpotlight(!showSpotlight)
    if (showControlCenter) setShowControlCenter(false)
  }

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    onToggleDarkMode()
  }

  const updateBrightness = (value: number) => {
    setScreenBrightness(value)
    onBrightnessChange(value)
  }

  const handleDesktopClick = (e: React.MouseEvent) => {
    // Only handle clicks directly on the desktop, not on children
    if (e.target === desktopRef.current) {
      setActiveWindowId(null)
      if (showControlCenter) setShowControlCenter(false)
      if (showSpotlight) setShowSpotlight(false)
    }
  }

  return (
    <div className="relative">
      <div
        ref={desktopRef}
        className={`relative h-screen w-screen overflow-hidden ${isDarkMode ? "dark" : ""}`}
        onClick={handleDesktopClick}
      >
        <Wallpaper isDarkMode={isDarkMode} />

        <Menubar
          time={time}
          onLogout={onLogout}
          onSleep={onSleep}
          onShutdown={onShutdown}
          onRestart={onRestart}
          onSpotlightClick={toggleSpotlight}
          onControlCenterClick={toggleControlCenter}
          isDarkMode={isDarkMode}
          activeWindow={activeWindowId ? openWindows.find((w) => w.id === activeWindowId) || null : null}
        />

        {/* Desktop Shortcut Icons */}
        <div className="absolute top-10 right-4 flex flex-col space-y-2.5 z-10 select-none max-h-[85vh] overflow-y-auto pointer-events-auto">
          <div
            className="flex flex-col items-center w-20 p-2 rounded-xl hover:bg-white/10 active:bg-blue-500/30 cursor-pointer group transition"
            onClick={() =>
              openApp({
                id: "preview",
                title: "Preview — Manmeet_Singh_Resume.pdf",
                component: "Preview",
                position: { x: Math.max(20, window.innerWidth / 2 - 450), y: 50 },
                size: { width: 900, height: 680 },
              })
            }
            title="Open Resume in Preview"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-red-600 to-rose-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition text-white">
              <span className="font-bold text-xs uppercase tracking-wider">PDF</span>
            </div>
            <span className="text-white text-xs mt-1 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] text-center line-clamp-1">
              Resume.pdf
            </span>
          </div>

          <a
            href="https://www.linkedin.com/in/manmeetsinghdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center w-20 p-2 rounded-xl hover:bg-white/10 active:bg-blue-500/30 cursor-pointer group transition pointer-events-auto"
            title="Open LinkedIn Profile (manmeetsinghdev)"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition overflow-hidden">
              <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8 object-contain" />
            </div>
            <span className="text-white text-xs mt-1 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] text-center line-clamp-1">
              LinkedIn
            </span>
          </a>

          <a
            href="https://github.com/singhmanmeet95"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center w-20 p-2 rounded-xl hover:bg-white/10 active:bg-blue-500/30 cursor-pointer group transition pointer-events-auto"
            title="Open GitHub Profile (singhmanmeet95)"
          >
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-105 transition overflow-hidden">
              <img src="/github.png" alt="GitHub" className="w-8 h-8 object-contain invert" />
            </div>
            <span className="text-white text-xs mt-1 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] text-center line-clamp-1">
              GitHub
            </span>
          </a>

          <a
            href="https://leetcode.com/u/idk_the_answer/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center w-20 p-2 rounded-xl hover:bg-white/10 active:bg-blue-500/30 cursor-pointer group transition pointer-events-auto"
            title="Open LeetCode Profile — Knight (1860)"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition overflow-hidden text-white font-bold text-xs tracking-tighter">
              <span>LC</span>
            </div>
            <span className="text-white text-xs mt-1 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] text-center line-clamp-1">
              LeetCode
            </span>
          </a>

          <a
            href="https://codeforces.com/profile/silent_cartographer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center w-20 p-2 rounded-xl hover:bg-white/10 active:bg-blue-500/30 cursor-pointer group transition pointer-events-auto"
            title="Open Codeforces Profile — Specialist (1427)"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-700 flex items-center justify-center shadow-lg group-hover:scale-105 transition overflow-hidden text-white font-bold text-xs tracking-tighter">
              <span>CF</span>
            </div>
            <span className="text-white text-xs mt-1 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] text-center line-clamp-1">
              Codeforces
            </span>
          </a>

          <div
            className="flex flex-col items-center w-20 p-2 rounded-xl hover:bg-white/10 active:bg-blue-500/30 cursor-pointer group transition"
            onClick={() =>
              openApp({
                id: "notes",
                title: "Notes",
                component: "Notes",
                position: { x: Math.max(30, window.innerWidth / 2 - 425), y: 70 },
                size: { width: 850, height: 600 },
              })
            }
          >
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-105 transition">
              <img src="/notes.png" alt="Resume" className="w-10 h-10 object-contain drop-shadow" />
            </div>
            <span className="text-white text-xs mt-1 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] text-center">
              Notes.app
            </span>
          </div>

          <div
            className="flex flex-col items-center w-20 p-2 rounded-xl hover:bg-white/10 active:bg-blue-500/30 cursor-pointer group transition"
            onClick={() =>
              openApp({
                id: "projects",
                title: "Projects",
                component: "Website",
                position: { x: Math.max(30, window.innerWidth / 2 - 400), y: 80 },
                size: { width: 850, height: 620 },
              })
            }
          >
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-105 transition">
              <img src="/macos-portfolio-demo.png" alt="Projects" className="w-10 h-10 object-cover rounded-lg drop-shadow" />
            </div>
            <span className="text-white text-xs mt-1 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] text-center">
              Projects
            </span>
          </div>

          <div
            className="flex flex-col items-center w-20 p-2 rounded-xl hover:bg-white/10 active:bg-blue-500/30 cursor-pointer group transition"
            onClick={() =>
              openApp({
                id: "terminal",
                title: "Terminal",
                component: "Terminal",
                position: { x: Math.max(30, window.innerWidth / 2 - 350), y: 100 },
                size: { width: 720, height: 480 },
              })
            }
          >
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-105 transition">
              <img src="/terminal.png" alt="Terminal" className="w-10 h-10 object-contain drop-shadow" />
            </div>
            <span className="text-white text-xs mt-1 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] text-center">
              Terminal
            </span>
          </div>

          <div
            className="flex flex-col items-center w-20 p-2 rounded-xl hover:bg-white/10 active:bg-blue-500/30 cursor-pointer group transition"
            onClick={() =>
              openApp({
                id: "vscode",
                title: "VS Code",
                component: "VSCode",
                position: { x: Math.max(30, window.innerWidth / 2 - 450), y: 60 },
                size: { width: 920, height: 620 },
              })
            }
          >
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-105 transition">
              <img src="/vscode.png" alt="VS Code" className="w-10 h-10 object-contain drop-shadow" />
            </div>
            <span className="text-white text-xs mt-1 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] text-center">
              Source Code
            </span>
          </div>
        </div>

        {/* Windows */}
        <div className="absolute inset-0 pt-6 pb-16 pointer-events-none">
          {openWindows.map((window) => (
            <Window
              key={window.id}
              window={window}
              isActive={activeWindowId === window.id}
              onClose={() => closeWindow(window.id)}
              onFocus={() => setActiveWindow(window.id)}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>

        {/* Launchpad */}
        {showLaunchpad && <Launchpad onAppClick={openApp} onClose={() => setShowLaunchpad(false)} />}

        {/* Control Center */}
        {showControlCenter && (
          <ControlCenter
            onClose={() => setShowControlCenter(false)}
            isDarkMode={isDarkMode}
            onToggleDarkMode={toggleDarkMode}
            brightness={screenBrightness}
            onBrightnessChange={updateBrightness}
          />
        )}

        {/* Spotlight */}
        {showSpotlight && <Spotlight onClose={() => setShowSpotlight(false)} onAppClick={openApp} />}

        <Dock
          onAppClick={openApp}
          onLaunchpadClick={toggleLaunchpad}
          activeAppIds={openWindows.map((w) => w.id)}
          isDarkMode={isDarkMode}
        />
      </div>

      {/* Brightness overlay */}
      <div
        className="absolute inset-0 bg-black pointer-events-none z-50 transition-opacity duration-300"
        style={{ opacity: Math.max(0.1, 0.9 - screenBrightness / 100) }}
      />
    </div>
  )
}
