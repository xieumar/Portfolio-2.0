import React from 'react'

function Illustration() {
  return (
    <div className="relative order-2 lg:order-1 flex justify-center items-center h-full min-h-96">
          <div className="absolute bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl w-80 h-80 lg:w-96 lg:h-96 -z-10 animate-pulse-slow" />
          <div className="relative w-full max-w-md aspect-square">
            {/* Monitor */}
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-72 h-48 bg-gray-800 dark:bg-gray-900 rounded-xl border-4 border-gray-200 dark:border-gray-600 shadow-xl monitor-glow overflow-hidden z-20 flex flex-col">
              <div className="h-6 bg-gray-700 w-full flex items-center px-2 gap-1">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-gray-900 p-3 font-mono text-xs text-green-400 opacity-80 overflow-hidden leading-tight">
                <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}
                <br />
                name: <span className="text-yellow-300">'Zainab'</span>,
                <br />
                skills: [<span className="text-yellow-300">'Design'</span>,{' '}
                <span className="text-yellow-300">'Code'</span>],
                <br />
                coffee: <span className="text-purple-400">true</span>
                <br />
                {'}'};<br />
                <br />
                <span className="text-gray-500">// Creating magic...</span>
                <br />
                <span className="animate-pulse">_</span>
              </div>
            </div>

            {/* Monitor stand */}
            <div className="absolute bottom-10 left-0 w-full h-4 bg-gray-300 dark:bg-gray-600 rounded-full shadow-md z-10" />
            <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-gray-400 dark:bg-gray-500 rounded-lg z-0" />
            <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gray-300 dark:bg-gray-400 rounded-full z-10" />

            {/* Plant */}
            <div className="absolute bottom-14 left-4 lg:left-0 w-16 h-20 z-20">
              <div className="absolute bottom-0 w-12 h-10 bg-orange-300 dark:bg-orange-800 rounded-b-lg rounded-t-sm shadow-inner left-2" />
              <div className="absolute bottom-10 left-6 w-4 h-12 bg-green-500 rounded-full rounded-bl-none transform -rotate-12 border-l-2 border-green-700" />
              <div className="absolute bottom-10 left-8 w-4 h-10 bg-green-400 rounded-full rounded-br-none transform rotate-12 border-r-2 border-green-600" />
            </div>

            {/* Bars chart */}
            <div className="absolute bottom-14 right-8 w-20 h-24 z-10 flex items-end gap-1">
              <div className="w-4 h-20 bg-blue-400 dark:bg-blue-800 rounded-sm transform -rotate-6 shadow-sm" />
              <div className="w-5 h-24 bg-red-400 dark:bg-red-800 rounded-sm shadow-sm" />
              <div className="w-6 h-16 bg-yellow-400 dark:bg-yellow-700 rounded-sm transform rotate-3 shadow-sm" />
            </div>

            {/* Lamp */}
            <div className="absolute top-0 right-1/4 transform translate-x-1/2 w-16 h-32 z-30 flex flex-col items-center">
              <div className="w-1 h-20 bg-gray-400 dark:bg-gray-600" />
              <div className="w-16 h-12 bg-purple-400 dark:bg-purple-600 rounded-t-full rounded-b-lg shadow-lg relative z-10" />
              <div className="w-8 h-8 bg-yellow-200 dark:bg-yellow-100 rounded-full -mt-4 lamp-glow animate-pulse" />
              <div className="absolute top-28 w-40 h-64 bg-gradient-to-b from-yellow-200/20 to-transparent dark:from-yellow-200/5 -z-10 rounded-b-full blur-2xl pointer-events-none" />
            </div>

            {/* Phone */}
            <div className="absolute bottom-14 right-32 w-8 h-10 z-20">
              <div className="w-8 h-6 bg-pink-400 dark:bg-pink-700 rounded-b-lg rounded-t-sm relative">
                <div className="absolute top-2 -right-3 w-3 h-4 border-2 border-pink-400 dark:border-pink-700 rounded-r-lg" />
              </div>
              <div className="absolute -top-4 left-2 w-1 h-3 bg-white/50 blur-sm rounded-full animate-float" />
              <div className="absolute -top-3 left-5 w-1 h-3 bg-white/50 blur-sm rounded-full animate-float-delayed" />
            </div>
          </div>
        </div>
  )
}

export default Illustration