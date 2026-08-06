'use client'

import React from 'react'
import InteractiveTerminal from './InteractiveTerminal'

function Illustration() {
  return (
    <div className="relative order-2 lg:order-1 flex justify-center items-center h-full min-h-96 w-full overflow-visible">
      {/* Background Blob */}
      <div className="absolute bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl w-80 h-80 lg:w-96 lg:h-96 -z-10 animate-pulse-slow scale-[1.05]" />

      {/* Proportional Scaling Container for all screen widths */}
      <div className="relative w-[300px] xs:w-[360px] sm:w-[440px] h-[340px] xs:h-[380px] sm:h-[420px] flex items-center justify-center">
        <div className="relative w-[420px] h-[380px] scale-[0.72] xs:scale-[0.85] sm:scale-100 origin-center transition-transform duration-200">
          {/* Monitor */}
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-72 h-52 
                  bg-gray-100 dark:bg-gray-900 rounded-xl border-4 border-gray-400 dark:border-gray-600
                  shadow-xl monitor-glow overflow-hidden z-20 flex flex-col group transition-colors duration-300">

            {/* Monitor Top Bar */}
            <div className="h-6 bg-gray-200 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 w-full flex items-center px-2.5 gap-1.5 select-none transition-colors duration-300">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/90 hover:opacity-80 transition-opacity" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/90 hover:opacity-80 transition-opacity" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/90 hover:opacity-80 transition-opacity" />
            </div>

            {/* Interactive Terminal Screen */}
            <InteractiveTerminal />
          </div>

          {/* Monitor Stand */}
          <div className="absolute bottom-10 left-0 w-full h-4 bg-gray-300 dark:bg-gray-600 rounded-full shadow-md z-10" />
          <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-gray-400 dark:bg-gray-500 rounded-lg z-0" />
          <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gray-300 dark:bg-gray-400 rounded-full z-10" />

          {/* Plant - positioned neatly to the left and below monitor screen */}
          <div className="absolute bottom-14 left-1 w-14 h-18 z-10 group">
            {/* Pot */}
            <div className="absolute bottom-0 w-10 h-8 bg-orange-300 dark:bg-orange-800 rounded-b-lg rounded-t-sm shadow-inner left-2 animate-sway" />

            {/* Cactus stems */}
            <div className="absolute bottom-8 left-5 w-3.5 h-8 bg-green-500 rounded-full rounded-bl-none transform -rotate-12 border-l-2 border-green-700 animate-sway" />
            <div className="absolute bottom-8 left-7 w-3.5 h-7 bg-green-400 rounded-full rounded-br-none transform rotate-12 border-r-2 border-green-600 animate-sway" />
            <div className="absolute bottom-8 left-3.5 w-3.5 h-6 bg-green-500 rounded-full rounded-bl-none transform -rotate-12 border-l-2 border-green-700 animate-sway" />

            <div
              className="
        absolute bottom-full mb-2
        left-1/2 -translate-x-1/3 sm:ml-10
        max-w-[90vw]
        px-3 py-1.5
        bg-gray-800 text-white text-xs
        rounded-lg shadow-lg
        opacity-0 scale-95
        transition-all duration-200
        pointer-events-none
        whitespace-nowrap
        group-hover:opacity-100
        group-hover:scale-100
        group-focus-within:opacity-100
        group-focus-within:scale-100
      "
            >
              Careful! You might get pricked 🌵
            </div>
          </div>

          {/* Books */}
          <div className="absolute bottom-14 right-6 w-20 h-24 z-10 flex items-end gap-1">
            <div className="w-4 h-20 bg-blue-400 dark:bg-blue-800 rounded-sm transform -rotate-6 shadow-sm animate-pulse-slow" />
            <div className="w-5 h-24 bg-red-400 dark:bg-red-800 rounded-sm shadow-sm animate-pulse-slow" />
            <div className="w-6 h-16 bg-yellow-400 dark:bg-yellow-700 rounded-sm transform rotate-3 shadow-sm animate-pulse-slow" />
          </div>

          {/* Lamp */}
          <div className="absolute -top-5 sm:top-0 right-1/4 transform translate-x-1/2 w-16 h-32 z-30 flex flex-col items-center">
            <div className="w-1 h-20 bg-gray-400 dark:bg-gray-600" />
            <div className="w-16 h-12 bg-purple-400 dark:bg-purple-600 rounded-t-full rounded-b-lg shadow-lg relative z-10" />
            <div className="w-8 h-8 bg-yellow-200 dark:bg-yellow-100 rounded-full -mt-4 lamp-glow animate-pulse" />
            <div className="absolute top-28 w-40 h-64 bg-gradient-to-b from-yellow-200/20 to-transparent dark:from-yellow-200/5 -z-10 rounded-b-full blur-2xl pointer-events-none" />
          </div>

          {/* Cup */}
          <div className="absolute bottom-12 right-28 w-8 h-10 z-10">
            <div className="w-8 h-8 bg-pink-400 dark:bg-pink-700 rounded-b-lg rounded-t-sm relative">
              <div className="absolute top-2 -right-3 w-3 h-4 border-2 border-pink-400 dark:border-pink-700 rounded-r-lg" />
            </div>
            <div className="absolute -top-4 left-2 w-1 h-3 bg-white/50 blur-sm rounded-full animate-float" />
            <div className="absolute -top-3 left-5 w-1 h-3 bg-white/50 blur-sm rounded-full animate-float-delayed" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Illustration
