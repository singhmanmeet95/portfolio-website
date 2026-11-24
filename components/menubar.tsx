"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Search } from "lucide-react"
import { AppleIcon } from "@/components/icons"

interface MenubarProps {
  time: Date
  onLogout: () => void
  onSleep: () => void
  onShutdown: () => void
  onRestart: () => void
  onSpotlightClick: () => void
  onControlCenterClick: () => void
  isDarkMode: boolean
  activeWindow: { id: string; title: string } | null
}

export default function Menubar({
  time,
  onLogout,
  onSleep,
  onShutdown,
  onRestart,
  onSpotlightClick,
  onControlCenterClick,
  isDarkMode,
  activeWindow,
}: MenubarProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [showAboutMac, setShowAboutMac] = useState(false)
  const [batteryLevel, setBatteryLevel] = useState(100)
  const [isCharging, setIsCharging] = useState(false)
  const [showWifiToggle, setShowWifiToggle] = useState(false)
  const [wifiEnabled, setWifiEnabled] = useState(true)
  const menuRef = useRef<HTMLDivElement>(null)
  const wifiRef = useRef<HTMLDivElement>(null)

  const formattedTime = time.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })

  useEffect(() => {
    // Try to get battery information if available
    if ("getBattery" in navigator) {
      // @ts-ignore - getBattery is not in the standard navigator type
      navigator
        .getBattery()
        .then((battery: any) => {
          updateBatteryStatus(battery)

          // Listen for battery status changes
          battery.addEventListener("levelchange", () => updateBatteryStatus(battery))
          battery.addEventListener("chargingchange", () => updateBatteryStatus(battery))
        })
        .catch(() => {
          // If there's an error, default to 100%
          setBatteryLevel(100)
          setIsCharging(false)
        })
    }

    // Load WiFi state from localStorage
    const savedWifi = localStorage.getItem("wifiEnabled")
    if (savedWifi !== null) {
      setWifiEnabled(savedWifi === "true")
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null)
      }

      if (
        wifiRef.current &&
        !wifiRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest(".wifi-icon")
      ) {
        setShowWifiToggle(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const updateBatteryStatus = (battery: any) => {
    setBatteryLevel(Math.round(battery.level * 100))
    setIsCharging(battery.charging)
  }

  const toggleMenu = (menuName: string) => {
    if (activeMenu === menuName) {
      setActiveMenu(null)
    } else {
      setActiveMenu(menuName)
    }
  }

  const toggleWifi = () => {
    const newState = !wifiEnabled
    setWifiEnabled(newState)
    localStorage.setItem("wifiEnabled", newState.toString())
  }

  const toggleWifiPopup = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowWifiToggle(!showWifiToggle)
  }

  const menuBgClass = isDarkMode ? "bg-black/40 backdrop-blur-md" : "bg-white/20 backdrop-blur-md"
  const dropdownBgClass = isDarkMode ? "bg-gray-800/90 backdrop-blur-md" : "bg-gray-200/90 backdrop-blur-md"
  const textClass = isDarkMode ? "text-white" : "text-black font-medium"
  const hoverClass = isDarkMode ? "hover:bg-blue-600" : "hover:bg-blue-400"

  return (
    <div
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 h-6 ${menuBgClass} z-50 flex items-center px-4 ${textClass} text-sm`}
    >
      <div className="flex-1 flex items-center">
        <button
          className="flex items-center mr-4 hover:bg-white/10 px-2 py-0.5 rounded"
          onClick={() => toggleMenu("apple")}
        >
          <AppleIcon className="w-4 h-4" />
        </button>

        {activeMenu === "apple" && (
          <div className={`absolute top-6 left-2 ${dropdownBgClass} rounded-lg shadow-xl ${textClass} py-1 w-56 z-50`}>
            <button
              className={`w-full text-left px-4 py-1 ${hoverClass}`}
              onClick={() => {
                setShowAboutMac(true)
                setActiveMenu(null)
              }}
            >
              About This Mac
            </button>
            <div className="border-t border-gray-700/50 my-1"></div>
            <button className={`w-full text-left px-4 py-1 ${hoverClass}`} onClick={() => setActiveMenu(null)}>
              System Settings...
            </button>
            <div className="border-t border-gray-700/50 my-1"></div>
            <button className={`w-full text-left px-4 py-1 ${hoverClass}`} onClick={onSleep}>
              Sleep
            </button>
            <button className={`w-full text-left px-4 py-1 ${hoverClass}`} onClick={onRestart}>
              Restart...
            </button>
            <button className={`w-full text-left px-4 py-1 ${hoverClass}`} onClick={onShutdown}>
              Shut Down...
            </button>
            <div className="border-t border-gray-700/50 my-1"></div>
            <button className={`w-full text-left px-4 py-1 ${hoverClass}`} onClick={onLogout}>
              Log Out Manmeet...
            </button>
          </div>
        )}

        {activeWindow && (
          <button
            className={`mr-4 font-medium hover:bg-white/10 px-2 py-0.5 rounded ${activeMenu === "app" ? "bg-white/10" : ""}`}
            onClick={() => toggleMenu("app")}
          >
            {activeWindow.title}
          </button>
        )}
      </div>

      <div className="flex items-center space-x-3">
        <span className="mr-1">{batteryLevel}%</span>
        <div className="relative">
          <div className="w-6 h-3 border border-current rounded-sm relative">
            <div className="absolute top-0 left-0 bottom-0 bg-current" style={{ width: `${batteryLevel}%` }}></div>
            <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-2 bg-current rounded-r-sm"></div>
            {isCharging && <div className="absolute inset-0 flex items-center justify-center text-xs">⚡</div>}
          </div>
        </div>

        <div className="relative">
          <button className="wifi-icon" onClick={toggleWifiPopup}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              {wifiEnabled ? (
                <>
                  <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                  <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                  <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                  <circle cx="12" cy="20" r="1" />
                </>
              ) : (
                <>
                  <line x1="1" y1="1" x2="23" y2="23" />
                  <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
                  <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
                  <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
                  <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
                  <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                  <circle cx="12" cy="20" r="1" />
                </>
              )}
            </svg>
          </button>

          {showWifiToggle && (
            <div
              ref={wifiRef}
              className={`absolute top-6 right-0 ${dropdownBgClass} rounded-lg shadow-xl ${textClass} py-3 px-4 w-64`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">Wi-Fi</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={wifiEnabled} onChange={toggleWifi} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-500 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
            </div>
          )}
        </div>

        <button onClick={onSpotlightClick}>
          <Search className="w-4 h-4" />
        </button>

        <button onClick={onControlCenterClick} className="flex items-center justify-center">
          <img
            src="/control-center-icon.webp"
            alt="Control Center"
            className="w-4 h-4"
            style={{
              filter: isDarkMode ? "invert(1)" : "none",
              opacity: 0.9,
            }}
          />
        </button>

        <span>{formattedTime}</span>
      </div>

      {/* About This Mac Modal */}
      {showAboutMac && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setShowAboutMac(false)}
        >
          <div
            className={`w-[420px] rounded-2xl shadow-2xl overflow-hidden border border-white/20 ${
              isDarkMode ? "bg-gray-900/95 text-white" : "bg-white/95 text-gray-900"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Window bar */}
            <div className="flex items-center px-4 py-3 border-b border-white/10">
              <div className="flex space-x-2">
                <button
                  onClick={() => setShowAboutMac(false)}
                  className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition flex items-center justify-center"
                />
                <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-60" />
                <div className="w-3 h-3 rounded-full bg-green-500 opacity-60" />
              </div>
              <span className="flex-1 text-center text-xs font-medium text-gray-400">About This Mac</span>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg ring-4 ring-white/20">
                <AppleIcon className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-1">Manmeet Singh</h3>
              <p className="text-sm font-medium text-indigo-400 mb-4">macOS Sequoia Developer Edition</p>

              <div className={`w-full text-left text-xs space-y-2 p-3.5 rounded-xl mb-5 ${
                isDarkMode ? "bg-white/5 border border-white/10" : "bg-gray-100 border border-gray-200"
              }`}>
                <div className="flex justify-between py-0.5">
                  <span className="text-gray-400 font-medium">Model</span>
                  <span className="font-semibold">MacBook Pro (16-inch, 2024)</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-gray-400 font-medium">University</span>
                  <span className="font-semibold text-right">Delhi Technological University (DTU)</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-gray-400 font-medium">Major</span>
                  <span className="font-semibold">B.Tech Computer Science ('27)</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-gray-400 font-medium">Role</span>
                  <span className="font-semibold">SDE Intern @ Accelryde</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-gray-400 font-medium">Competitive</span>
                  <span className="font-semibold">LeetCode Knight (1860) | CF 1427</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-gray-400 font-medium">Email</span>
                  <a
                    href="mailto:meetusingh2004@gmail.com"
                    className="font-semibold font-mono text-blue-400 hover:underline"
                  >
                    meetusingh2004@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-4">
                <a
                  href="/Manmeet_Singh_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition shadow"
                >
                  Resume PDF
                </a>
                <a
                  href="https://github.com/singhmanmeet95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-xs font-semibold rounded-lg bg-zinc-700 hover:bg-zinc-600 text-white transition shadow"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/manmeetsinghdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition shadow"
                >
                  LinkedIn
                </a>
                <a
                  href="https://leetcode.com/u/idk_the_answer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-xs font-semibold rounded-lg bg-amber-600 hover:bg-amber-500 text-white transition shadow"
                >
                  LeetCode
                </a>
                <a
                  href="https://codeforces.com/profile/silent_cartographer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-xs font-semibold rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white transition shadow"
                >
                  Codeforces
                </a>
              </div>

              <button
                onClick={() => setShowAboutMac(false)}
                className="px-5 py-1.5 text-xs font-medium rounded-full bg-blue-500 hover:bg-blue-600 text-white transition shadow"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
