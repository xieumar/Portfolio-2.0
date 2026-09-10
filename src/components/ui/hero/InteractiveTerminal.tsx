'use client'

import React, { useState, useRef, useEffect } from 'react'

interface HistoryItem {
  command: string
  output: React.ReactNode
}

const COMMANDS: Record<string, (args: string[]) => React.ReactNode> = {
  help: () => (
    <div className="space-y-1 text-gray-700 dark:text-gray-300">
      <div className="text-purple-700 dark:text-primary font-bold">Available commands:</div>
      <div className="grid grid-cols-[75px_1fr] gap-x-2 text-[11px] leading-tight">
        <span className="text-amber-700 dark:text-yellow-400 font-semibold">about</span>
        <span>Who is Zainab?</span>
        <span className="text-amber-700 dark:text-yellow-400 font-semibold">skills</span>
        <span>Tech stack & tools</span>
        <span className="text-amber-700 dark:text-yellow-400 font-semibold">projects</span>
        <span>Featured work</span>
        <span className="text-amber-700 dark:text-yellow-400 font-semibold">contact</span>
        <span>How to reach me</span>
        <span className="text-amber-700 dark:text-yellow-400 font-semibold">coffee</span>
        <span>Brew some energy ☕</span>
        <span className="text-amber-700 dark:text-yellow-400 font-semibold">dev</span>
        <span>Show developer object</span>
        <span className="text-amber-700 dark:text-yellow-400 font-semibold">clear</span>
        <span>Clear the screen</span>
      </div>
    </div>
  ),
  about: () => (
    <div className="text-gray-700 dark:text-gray-200 leading-tight">
      <span className="text-purple-700 dark:text-purple-400 font-bold">Zainab Umar</span> — Frontend Developer & UI/UX enthusiast.
      <div className="text-gray-600 dark:text-gray-400 mt-1">
        Passionate about crafting interactive, accessible, and high-performance digital experiences.
      </div>
    </div>
  ),
  skills: () => (
    <div className="space-y-1 text-[11px]">
      <div>
        <span className="text-blue-700 dark:text-blue-400 font-semibold">Core:</span>{' '}
        <span className="text-gray-700 dark:text-gray-300">React, Next.js, TypeScript, JavaScript</span>
      </div>
      <div>
        <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Styling:</span>{' '}
        <span className="text-gray-700 dark:text-gray-300">Tailwind CSS, Framer Motion, CSS3</span>
      </div>
      <div>
        <span className="text-pink-700 dark:text-pink-400 font-semibold">Design & State:</span>{' '}
        <span className="text-gray-700 dark:text-gray-300">Figma, Zustand, React Hook Form, Zod</span>
      </div>
    </div>
  ),
  projects: () => (
    <div className="space-y-1 text-[11px]">
      <div>
        <span className="text-amber-700 dark:text-yellow-300 font-bold">1. QueryLab</span>{' '}
        <span className="text-gray-600 dark:text-gray-400">— Visual SQL & API Query Builder</span>
      </div>
      <div>
        <span className="text-amber-700 dark:text-yellow-300 font-bold">2. Zedu</span>{' '}
        <span className="text-gray-600 dark:text-gray-400">— EdTech & Cohort Communication Platform</span>
      </div>
      <div>
        <span className="text-amber-700 dark:text-yellow-300 font-bold">3. Audiophile</span>{' '}
        <span className="text-gray-600 dark:text-gray-400">— High-End Audio E-Commerce</span>
      </div>
    </div>
  ),
  contact: () => (
    <div className="space-y-0.5 text-[11px]">
      <div>
        <span className="text-purple-700 dark:text-primary font-semibold">Email:</span>{' '}
        <span className="text-gray-700 dark:text-gray-300">xieumar@gmail.com</span>
      </div>
      <div>
        <span className="text-purple-700 dark:text-primary font-semibold">GitHub:</span>{' '}
        <a
          href="https://github.com/xieumar"
          target="_blank"
          rel="noreferrer"
          className="text-blue-700 dark:text-blue-400 underline hover:opacity-80"
        >
          github.com/xieumar
        </a>
      </div>
    </div>
  ),
  coffee: () => (
    <div className="text-amber-800 dark:text-amber-300">
      ☕ Brewing fresh dark roast...
      <div className="text-emerald-700 dark:text-emerald-400 font-semibold">
        Success: developer.coffee = true (+100 Energy) ⚡
      </div>
    </div>
  ),
  dev: () => (
    <div className="font-mono text-[11px] leading-tight text-gray-700 dark:text-gray-300">
      <span className="text-purple-700 dark:text-purple-400 font-semibold">const</span>{' '}
      <span className="text-blue-700 dark:text-blue-400 font-semibold">developer</span> = {'{\n'}
      {'  '}name: <span className="text-amber-700 dark:text-yellow-300">'Zainab'</span>,{'\n'}
      {'  '}skills: [<span className="text-amber-700 dark:text-yellow-300">'Design'</span>,{' '}
      <span className="text-amber-700 dark:text-yellow-300">'Code'</span>],{'\n'}
      {'  '}coffee: <span className="text-purple-700 dark:text-purple-400 font-semibold">true</span>{'\n'}
      {'}'};
    </div>
  ),
  sudo: () => (
    <div className="text-emerald-700 dark:text-emerald-400 font-semibold">
      🌟 Superuser granted: Welcome VIP guest!
    </div>
  ),
  clear: () => null,
  cls: () => null,
}

const QUICK_COMMANDS = ['help', 'about', 'skills', 'projects']

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'dev',
      output: COMMANDS.dev([]),
    },
  ])
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState<string[]>(['dev'])
  const [historyIdx, setHistoryIdx] = useState<number>(-1)

  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Scroll ONLY the terminal container, never the outer window
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [history])

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim()
    if (!trimmed) return

    const parts = trimmed.split(/\s+/)
    const commandName = parts[0].toLowerCase()
    const args = parts.slice(1)

    setCmdHistory((prev) => [...prev, trimmed])
    setHistoryIdx(-1)

    if (commandName === 'clear' || commandName === 'cls') {
      setHistory([])
      setInput('')
      return
    }

    const handler = COMMANDS[commandName]
    let output: React.ReactNode

    if (handler) {
      output = handler(args)
    } else {
      output = (
        <div className="text-rose-600 dark:text-red-400 text-[11px]">
          command not found: <span className="font-bold text-gray-900 dark:text-white">{trimmed}</span>. Type{' '}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              executeCommand('help')
            }}
            className="text-amber-700 dark:text-yellow-300 underline font-bold hover:opacity-80"
          >
            help
          </button>{' '}
          for commands.
        </div>
      )
    }

    setHistory((prev) => [...prev, { command: trimmed, output }])
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      executeCommand(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (cmdHistory.length === 0) return
      const nextIdx = historyIdx === -1 ? cmdHistory.length - 1 : Math.max(0, historyIdx - 1)
      setHistoryIdx(nextIdx)
      setInput(cmdHistory[nextIdx] || '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIdx === -1) return
      const nextIdx = historyIdx + 1
      if (nextIdx >= cmdHistory.length) {
        setHistoryIdx(-1)
        setInput('')
      } else {
        setHistoryIdx(nextIdx)
        setInput(cmdHistory[nextIdx] || '')
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const available = Object.keys(COMMANDS)
      const match = available.find((c) => c.startsWith(input.toLowerCase()))
      if (match) {
        setInput(match)
      }
    }
  }

  const handleTerminalClick = () => {
    inputRef.current?.focus({ preventScroll: true })
  }

  return (
    <div
      ref={containerRef}
      onClick={handleTerminalClick}
      className="flex-1 p-2.5 font-mono text-xs overflow-y-auto leading-tight relative bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-200 rounded-b-md flex flex-col justify-between cursor-text select-text transition-colors duration-300 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      <div className="space-y-2">
        {/* Render Command History */}
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-[11px]">
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">zainab</span>
              <span className="text-gray-400 dark:text-gray-600">:</span>
              <span className="text-blue-700 dark:text-blue-400">~</span>
              <span className="text-gray-500">$</span>
              <span className="text-gray-900 dark:text-white font-semibold">{item.command}</span>
            </div>
            {item.output && (
              <div className="pl-2 border-l-2 border-gray-300 dark:border-gray-800 my-1">
                {item.output}
              </div>
            )}
          </div>
        ))}

        {/* Active Input Line */}
        <div className="flex items-center gap-1.5 text-[11px] pt-0.5">
          <span className="text-emerald-700 dark:text-emerald-400 font-bold">zainab</span>
          <span className="text-gray-400 dark:text-gray-600">:</span>
          <span className="text-blue-700 dark:text-blue-400">~</span>
          <span className="text-gray-500">$</span>
          <div className="relative flex-1 flex items-center min-w-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent text-gray-900 dark:text-white font-mono text-[11px] p-0 m-0 border-0 outline-none ring-0 shadow-none focus:outline-none focus:ring-0 focus:border-transparent caret-transparent"
              style={{
                outline: 'none',
                boxShadow: 'none',
                border: 'none',
                background: 'transparent',
              }}
              spellCheck={false}
              autoCapitalize="none"
              autoComplete="off"
            />
            {/* Custom blinking cursor */}
            <span
              className="inline-block w-1.5 h-3.5 bg-emerald-600 dark:bg-emerald-400 animate-pulse pointer-events-none -ml-0.5 shrink-0"
              style={{ verticalAlign: 'middle' }}
            />
          </div>
        </div>
      </div>

      {/* Interactive Quick-Pills for one-click execution */}
      <div
        className="mt-2 pt-1.5 border-t border-gray-300/80 dark:border-gray-800/80 flex flex-wrap gap-1 items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-[9px] text-gray-500 dark:text-gray-400 mr-0.5 font-medium">try:</span>
        {QUICK_COMMANDS.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => executeCommand(cmd)}
            className="px-1.5 py-0.5 bg-gray-200 hover:bg-primary/20 dark:bg-gray-800 dark:hover:bg-primary/20 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[9px] sm:text-[10px] rounded transition-all active:scale-95 cursor-pointer leading-none"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  )
}
