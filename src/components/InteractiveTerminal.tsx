import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, Minimize2, Maximize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-white/80">
          <p className="text-white font-medium">
            &gt; Manmeet Singh &mdash; Software Engineer CLI (v2.4)
          </p>
          <p className="text-xs text-white/40 font-mono">
            Type <code className="text-indigo-400">help</code> to list available commands. Try <code className="text-indigo-400">projects</code>, <code className="text-indigo-400">skills</code>, <code className="text-indigo-400">leetcode</code>, or <code className="text-indigo-400">resume</code>.
          </p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const cmd = cmdStr.trim().toLowerCase();
    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs font-mono text-white/70">
            <p className="text-white font-medium">Available Commands:</p>
            <p><span className="text-indigo-400 w-28 inline-block">about</span> Print developer background & DTU education</p>
            <p><span className="text-indigo-400 w-28 inline-block">projects</span> List recent projects with GitHub links</p>
            <p><span className="text-indigo-400 w-28 inline-block">skills</span> Display technical skills & tools</p>
            <p><span className="text-indigo-400 w-28 inline-block">leetcode</span> Show LeetCode problem solving breakdown</p>
            <p><span className="text-indigo-400 w-28 inline-block">education</span> Show DTU B.Tech CS degree details</p>
            <p><span className="text-indigo-400 w-28 inline-block">resume</span> Open digital PDF resume</p>
            <p><span className="text-indigo-400 w-28 inline-block">contact</span> Display email, phone & social handles</p>
            <p><span className="text-amber-400 w-28 inline-block">caffeine</span> Check current caffeine telemetry</p>
            <p><span className="text-amber-400 w-28 inline-block">why</span> Why write code at 3 AM?</p>
            <p><span className="text-amber-400 w-28 inline-block">sleep</span> Query sleep status</p>
            <p><span className="text-amber-400 w-28 inline-block">dtu</span> Show DTU campus lore</p>
            <p><span className="text-amber-400 w-28 inline-block">git-log</span> View latest late-night commit history</p>
            <p><span className="text-indigo-400 w-28 inline-block">clear</span> Clear terminal buffer</p>
          </div>
        );
        break;

      case 'caffeine':
      case 'coffee':
        output = (
          <div className="space-y-1 text-xs text-white/80 font-mono">
            <p className="text-amber-400 font-medium">☕ Caffeine Telemetry (Live):</p>
            <p>&bull; Level: <span className="text-emerald-400 font-bold">96% [==================--]</span></p>
            <p>&bull; Fuel: Cold brew concentrate + emergency Nescafé classic</p>
            <p>&bull; Status: Syntax errors disappearing, hallucinations stable</p>
          </div>
        );
        break;

      case 'why':
      case '3am':
        output = (
          <div className="space-y-1 text-xs text-white/70 font-mono">
            <p className="text-indigo-400 font-medium">&gt; Why 3 AM?</p>
            <p>Because at 3 AM the world is quiet, nobody sends Slack messages, the compiler is your only critic, and solving a pesky race condition in a WebSocket handler gives an unmatched dopamine hit.</p>
          </div>
        );
        break;

      case 'sleep':
        output = (
          <div className="space-y-1 text-xs text-rose-300 font-mono">
            <p className="font-medium">&gt; Error 404: Sleep Not Found</p>
            <p className="text-white/60">Did you mean: <span className="text-indigo-400">"one more leetcode question"</span> or <span className="text-indigo-400">"just one more git commit"</span>?</p>
          </div>
        );
        break;

      case 'dtu':
        output = (
          <div className="space-y-1 text-xs text-white/70 font-mono">
            <p className="text-white font-medium">🏛️ Delhi Technological University (DTU, formerly DCE)</p>
            <p>&bull; Campus: Shahbad Daulatpur, Main Bawana Road, New Delhi</p>
            <p>&bull; Department: Computer Science & Engineering (Class of 2027)</p>
            <p>&bull; Highlights: Rigorous labs, late-night hackathons in OAT, and endless MechC canteen chai.</p>
          </div>
        );
        break;

      case 'git-log':
      case 'git':
        output = (
          <div className="space-y-1 text-xs font-mono text-white/70">
            <p className="text-white font-medium">Recent Git Commits:</p>
            <p><span className="text-indigo-400">a39f1c0</span> (3:42 AM) - fix: why did removing this console.log break the websocket</p>
            <p><span className="text-indigo-400">82d01e4</span> (3:11 AM) - perf: index foreign keys in postgres, cut latency by 30%</p>
            <p><span className="text-indigo-400">14b8e7a</span> (2:20 AM) - feat: add exponential backoff reconnection logic</p>
            <p><span className="text-indigo-400">5a7702f</span> (1:45 AM) - refactor: rewrite dp recurrence with 1d array to save memory</p>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="text-xs text-white/70 space-y-1 font-mono">
            <p className="text-white font-medium">{PERSONAL_INFO.name} — {PERSONAL_INFO.role}</p>
            <p>Institution: {PERSONAL_INFO.institution} (B.Tech Computer Science 2023–2027)</p>
            <p>Location: {PERSONAL_INFO.location}</p>
            <p className="text-white/40 mt-1">{PERSONAL_INFO.about}</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-white font-medium">Featured Projects & Repositories:</p>
            {PROJECTS.map((p) => (
              <div key={p.id} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-white">{p.title}</span>
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline"
                  >
                    {p.githubUrl}
                  </a>
                </div>
                <p className="text-white/40">{p.description}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {p.techStack.map((t) => (
                    <span key={t} className="text-[10px] bg-white/5 text-white/50 border border-white/10 px-1.5 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-white font-medium">Technical Skills:</p>
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.title}>
                <span className="text-indigo-300 font-medium">{cat.title}: </span>
                <span className="text-white/60">{cat.skills.map((s) => s.name).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'leetcode':
        output = (
          <div className="space-y-1 text-xs text-white/70 font-mono">
            <p className="text-white font-medium">LeetCode & Problem Solving Stats:</p>
            <p>&bull; LeetCode Solved: <span className="text-white font-semibold">350+ Problems</span></p>
            <p>&bull; Focus Areas: Arrays & Strings (120+), Trees & Graphs (90+), Dynamic Programming (80+), Stacks & Queues (60+)</p>
            <p>&bull; Languages: C++ (STL), TypeScript, Python</p>
          </div>
        );
        break;

      case 'education':
        output = (
          <div className="space-y-1 text-xs text-white/70 font-mono">
            <p className="text-white font-medium">Delhi Technological University (DTU)</p>
            <p>Bachelor of Technology in Computer Science (Aug 2023 – May 2027)</p>
            <p>Kendriya Vidyalaya, Tagore Garden — Senior Secondary CBSE (2023)</p>
          </div>
        );
        break;

      case 'resume':
        onOpenResume();
        output = <p className="text-indigo-400 text-xs font-mono">Opening digital resume viewer...</p>;
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs text-white/70 font-mono">
            <p className="text-white font-medium">Contact Details:</p>
            <p>&bull; Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-indigo-400 hover:underline">{PERSONAL_INFO.email}</a></p>
            <p>&bull; Phone: {PERSONAL_INFO.phone}</p>
            <p>&bull; LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">{PERSONAL_INFO.linkedin}</a></p>
            <p>&bull; GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">{PERSONAL_INFO.github}</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        output = (
          <p className="text-rose-400 text-xs font-mono">
            command not found: "{cmd}". Type <code className="text-indigo-400">help</code> for a list of valid commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputVal.trim()) {
      handleCommand(inputVal);
      setInputVal('');
    }
  };

  return (
    <div
      id="terminal-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl shadow-black overflow-hidden flex flex-col h-[520px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.02] border-b border-white/5 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="ml-2 text-xs font-mono text-white/50 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              manmeet@dtu-cs:~
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleCommand('help')}
              className="text-[10px] font-mono text-white/50 hover:text-white px-2 py-0.5 rounded bg-white/5 border border-white/10 transition-colors"
            >
              help
            </button>
            <button
              onClick={onClose}
              className="p-1 text-white/40 hover:text-white rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* History Stream */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-3 select-text">
          {history.map((item, i) => (
            <div key={i} className="space-y-1">
              <div className="flex items-center gap-2 text-white/40">
                <span className="text-indigo-400">&gt;</span>
                <span className="text-white/30">~</span>
                <span className="text-white">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white/[0.02] border-t border-white/5 flex items-center gap-2 shrink-0">
          <span className="text-indigo-400 font-mono text-xs">&gt;</span>
          <span className="text-white/30 font-mono text-xs">~</span>
          <input
            id="terminal-input"
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent border-none text-xs font-mono text-white focus:outline-none placeholder:text-white/20"
          />
          <button
            onClick={() => {
              if (inputVal.trim()) {
                handleCommand(inputVal);
                setInputVal('');
              }
            }}
            className="p-1.5 text-white/40 hover:text-white bg-white/5 rounded-md border border-white/10 text-xs transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

