"use client"

import { useState } from "react"
import {
  FileCode,
  Folder,
  ChevronDown,
  ChevronRight,
  Code2,
  Terminal as TerminalIcon,
  Search,
  GitBranch,
  Copy,
  Check,
  Play,
} from "lucide-react"

interface VSCodeProps {
  isDarkMode?: boolean
}

interface CodeFile {
  name: string
  language: string
  path: string
  content: string
}

const files: Record<string, CodeFile> = {
  "alaska/dijkstra-router.ts": {
    name: "dijkstra-router.ts",
    language: "typescript",
    path: "alaska/dijkstra-router.ts",
    content: `// ALASKA - Metro Route Builder with Mapbox GL & Dijkstra's Algorithm
// Computes optimal shortest paths across 250+ interconnected nodes in real-time

interface MetroNode {
  id: string
  stationName: string
  coordinates: [number, number]
  line: string
  connections: { targetId: string; weight: number }[]
}

export class MetroRouteGraph {
  private adjacencyList: Map<string, { node: string; weight: number }[]> = new Map()

  addStation(id: string): void {
    if (!this.adjacencyList.has(id)) {
      this.adjacencyList.set(id, [])
    }
  }

  addEdge(source: string, target: string, weightMinutes: number): void {
    this.adjacencyList.get(source)?.push({ node: target, weight: weightMinutes })
    this.adjacencyList.get(target)?.push({ node: source, weight: weightMinutes })
  }

  findOptimalCommute(startStation: string, endStation: string): { path: string[]; duration: number } {
    const distances: Record<string, number> = {}
    const previous: Record<string, string | null> = {}
    const priorityQueue = new Set<string>()

    for (const station of this.adjacencyList.keys()) {
      distances[station] = station === startStation ? 0 : Infinity
      previous[station] = null
      priorityQueue.add(station)
    }

    while (priorityQueue.size > 0) {
      // Pick smallest unvisited distance
      let current = Array.from(priorityQueue).reduce((minNode, node) =>
        distances[node] < distances[minNode] ? node : minNode
      )

      if (current === endStation || distances[current] === Infinity) break
      priorityQueue.delete(current)

      const neighbors = this.adjacencyList.get(current) || []
      for (const neighbor of neighbors) {
        if (!priorityQueue.has(neighbor.node)) continue
        const alt = distances[current] + neighbor.weight
        if (alt < distances[neighbor.node]) {
          distances[neighbor.node] = alt
          previous[neighbor.node] = current
        }
      }
    }

    const path: string[] = []
    let curr: string | null = endStation
    while (curr) {
      path.unshift(curr)
      curr = previous[curr]
    }

    return { path, duration: distances[endStation] }
  }
}
`,
  },
  "cortex/vision_locator.py": {
    name: "vision_locator.py",
    language: "python",
    path: "cortex/vision_locator.py",
    content: `# CORTEX - OS-Level Automation Engine with Self-Healing Vision LLM Locators
# Resolves element coordinates dynamically despite layout shifts or DOM scraping limits

import pyautogui
from pydantic import BaseModel, Field
from typing import Optional, Tuple
import networkx as nx

class UIActionNode(BaseModel):
    node_id: str
    action_type: str = Field(description="click, type, drag, or await")
    target_description: str
    fallback_confidence: float = 0.85
    coordinates: Optional[Tuple[int, int]] = None

class VisionSelfHealingLocator:
    """Uses multimodal LLM reasoning to pinpoint UI controls when bounding boxes drift"""
    def __init__(self, vision_client):
        self.client = vision_client
        self.cached_locators = {}

    def locate_target(self, screenshot_path: str, visual_prompt: str) -> Tuple[int, int]:
        # 1. First attempt exact template match
        try:
            loc = pyautogui.locateCenterOnScreen(screenshot_path, confidence=0.92)
            if loc:
                return (loc.x, loc.y)
        except Exception:
            pass

        # 2. Self-Healing Fallback: Multimodal LLM inspection
        response = self.client.generate_content([
            {"image": screenshot_path},
            f"Identify center (X, Y) pixel coordinates of: {visual_prompt}"
        ])
        
        coords = self.parse_coordinates(response.text)
        self.cached_locators[visual_prompt] = coords
        return coords

    def execute_dag_pipeline(self, pipeline_graph: nx.DiGraph):
        for node_id in nx.topological_sort(pipeline_graph):
            action: UIActionNode = pipeline_graph.nodes[node_id]["action"]
            coords = self.locate_target("screen_snapshot.png", action.target_description)
            pyautogui.click(coords[0], coords[1])
            print(f"Executed {action.action_type} on '{action.target_description}' at {coords}")
`,
  },
  "telemetry/compression.ts": {
    name: "compression.ts",
    language: "typescript",
    path: "telemetry/compression.ts",
    content: `// Accelryde SDE Intern Project: Douglas-Peucker Polyline Compression
// Reduced GPS Firestore cloud writes by ~99% (~2,000 -> 1 per rider)

interface Point {
  lat: number
  lng: number
  timestamp: number
}

function perpendicularDistance(point: Point, lineStart: Point, lineEnd: Point): number {
  const dx = lineEnd.lng - lineStart.lng
  const dy = lineEnd.lat - lineStart.lat
  const mag = Math.sqrt(dx * dx + dy * dy)
  if (mag === 0) return 0

  const pvx = point.lng - lineStart.lng
  const pvy = point.lat - lineStart.lat
  const crossProduct = Math.abs(pvx * dy - pvy * dx)
  return crossProduct / mag
}

export function douglasPeucker(points: Point[], epsilon: number): Point[] {
  if (points.length <= 2) return points

  let maxDistance = 0
  let index = 0
  const end = points.length - 1

  for (let i = 1; i < end; i++) {
    const d = perpendicularDistance(points[i], points[0], points[end])
    if (d > maxDistance) {
      maxDistance = d
      index = i
    }
  }

  if (maxDistance > epsilon) {
    const leftSegment = douglasPeucker(points.slice(0, index + 1), epsilon)
    const rightSegment = douglasPeucker(points.slice(index), epsilon)
    return leftSegment.slice(0, -1).concat(rightSegment)
  }

  return [points[0], points[end]]
}
`,
  },
  "resume.json": {
    name: "resume.json",
    language: "json",
    path: "resume.json",
    content: `{
  "name": "Manmeet Singh",
  "phone": "+91-80764-38849",
  "email": "meetusingh2004@gmail.com",
  "education": {
    "institution": "Delhi Technological University (DTU - Formerly DCE)",
    "degree": "Bachelor of Technology in Computer Science and Engineering",
    "period": "Aug 2023 – May 2027",
    "location": "Delhi, India"
  },
  "experience": [
    {
      "company": "Accelryde Technologies LLP",
      "role": "Software Development Engineer Intern",
      "period": "May 2026 – Jul 2026",
      "metrics": {
        "cloud_write_reduction": "99% (2000 to 1 per rider via Douglas-Peucker & SQLite buffer)",
        "telemetry_architecture": "Two-tier Firebase Realtime DB + Firestore logs",
        "voice_messaging": "Push-to-talk 24 kbps AAC inline in Realtime DB without paid storage",
        "safety_engine": "Client-side Haversine distance & server-synced timestamps"
      }
    }
  ],
  "projects": ["ALASKA (Metro Commute Social Network)", "CORTEX (OS-Level Visual Automation DAG)"],
  "achievements": {
    "leetcode": "Knight Rank (850+ problems, Peak Rating 1860, 20 badges)",
    "codeforces": "Specialist Rank (Peak Rating 1427)",
    "society": "Reflect, DTU - Co-Head of Photography & Filmmaking"
  }
}
`,
  },
}

export default function VSCode({ isDarkMode = true }: VSCodeProps) {
  const [activeFile, setActiveFile] = useState<string>("alaska/dijkstra-router.ts")
  const [openTabs, setOpenTabs] = useState<string[]>([
    "alaska/dijkstra-router.ts",
    "cortex/vision_locator.py",
    "resume.json",
  ])
  const [copied, setCopied] = useState(false)

  const currentFile = files[activeFile] || files["alaska/dijkstra-router.ts"]

  const handleCopy = () => {
    navigator.clipboard.writeText(currentFile.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const closeTab = (path: string, e: React.MouseEvent) => {
    e.stopPropagation()
    const nextTabs = openTabs.filter((t) => t !== path)
    setOpenTabs(nextTabs)
    if (activeFile === path && nextTabs.length > 0) {
      setActiveFile(nextTabs[0])
    }
  }

  const openFile = (path: string) => {
    if (!openTabs.includes(path)) {
      setOpenTabs([...openTabs, path])
    }
    setActiveFile(path)
  }

  const lines = currentFile.content.trim().split("\n")

  return (
    <div className="h-full w-full flex flex-col bg-[#1e1e1e] text-[#cccccc] font-sans select-none">
      <div className="flex-1 flex overflow-hidden">
        {/* Activity Bar */}
        <div className="w-12 bg-[#333333] flex flex-col items-center py-2 space-y-4 text-gray-400">
          <button className="text-white hover:text-white p-1">
            <Code2 className="w-6 h-6" />
          </button>
          <button className="hover:text-white p-1">
            <Search className="w-5 h-5" />
          </button>
          <button className="hover:text-white p-1">
            <GitBranch className="w-5 h-5" />
          </button>
          <button className="hover:text-white p-1">
            <TerminalIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Sidebar */}
        <div className="w-60 bg-[#252526] border-r border-[#191919] flex flex-col text-xs">
          <div className="px-4 py-2.5 font-bold tracking-wider uppercase text-[11px] text-[#bbbbbb] border-b border-[#333333]">
            Explorer: Portfolio
          </div>
          <div className="p-2 space-y-1 overflow-y-auto flex-1 font-mono">
            <div className="flex items-center text-gray-300 py-1 font-bold">
              <ChevronDown className="w-4 h-4 mr-1 text-gray-400" />
              <span>MANMEET-PROJECTS</span>
            </div>

            {Object.keys(files).map((filePath) => {
              const file = files[filePath]
              const isSelected = activeFile === filePath
              return (
                <div
                  key={filePath}
                  onClick={() => openFile(filePath)}
                  className={`flex items-center pl-6 pr-2 py-1 rounded cursor-pointer transition ${
                    isSelected ? "bg-[#37373d] text-white" : "hover:bg-[#2a2d2e] text-[#969696]"
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5 mr-2 text-blue-400" />
                  <span className="truncate">{file.name}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col bg-[#1e1e1e] overflow-hidden">
          {/* Tabs Header */}
          <div className="flex bg-[#252526] border-b border-[#191919] overflow-x-auto">
            {openTabs.map((tabPath) => {
              const file = files[tabPath]
              const isActive = activeFile === tabPath
              return (
                <div
                  key={tabPath}
                  onClick={() => setActiveFile(tabPath)}
                  className={`flex items-center space-x-2 px-3 py-2 text-xs font-mono border-r border-[#191919] cursor-pointer ${
                    isActive ? "bg-[#1e1e1e] text-white border-t-2 border-t-blue-500" : "bg-[#2d2d2d] text-gray-400"
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5 text-blue-400" />
                  <span>{file?.name}</span>
                  <button
                    onClick={(e) => closeTab(tabPath, e)}
                    className="hover:bg-white/20 rounded px-1 text-gray-400 hover:text-white"
                  >
                    ×
                  </button>
                </div>
              )
            })}
            <div className="flex-1 flex justify-end items-center px-3 space-x-2">
              <button
                onClick={handleCopy}
                className="flex items-center space-x-1 text-xs text-gray-400 hover:text-white px-2 py-1 rounded hover:bg-[#333333]"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Code Viewer */}
          <div className="flex-1 overflow-auto p-4 font-mono text-xs leading-5">
            <table>
              <tbody>
                {lines.map((line, idx) => (
                  <tr key={idx} className="hover:bg-white/5">
                    <td className="pr-4 text-right select-none text-gray-600 w-10">{idx + 1}</td>
                    <td className="whitespace-pre text-[#d4d4d4]">{line}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-[#007acc] text-white flex items-center justify-between px-3 text-[11px]">
        <div className="flex items-center space-x-3">
          <span className="flex items-center space-x-1">
            <GitBranch className="w-3 h-3" />
            <span>main*</span>
          </span>
          <span>0 errors, 0 warnings</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>UTF-8</span>
          <span>{currentFile.language.toUpperCase()}</span>
          <span>Spaces: 2</span>
        </div>
      </div>
    </div>
  )
}
