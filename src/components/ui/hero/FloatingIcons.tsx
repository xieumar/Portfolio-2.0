import React from 'react';
import {Code, SquareTerminal, Palette} from 'lucide-react';

function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-[10%] animate-float opacity-20 dark:opacity-10 transform -rotate-12">
          <div className="bg-blue-500 rounded-2xl w-16 h-16 flex items-center justify-center shadow-2xl text-white">
            <Code size={36}/>
          </div>
        </div>
        <div className="absolute bottom-1/4 right-[30%] animate-float-delayed opacity-20 dark:opacity-10 transform rotate-12">
          <div className="bg-pink-500 rounded-2xl w-20 h-20 flex items-center justify-center shadow-2xl text-white">
            <Palette size={36}/>
          </div>
        </div>
        <div className="absolute top-1/3 right-[10%] animate-float-slow opacity-20 dark:opacity-10 transform -rotate-6">
          <div className="bg-yellow-400 rounded-2xl w-14 h-14 flex items-center justify-center shadow-2xl text-white">
            <SquareTerminal size={36}/>
          </div>
        </div>
      </div>
  )
}

export default FloatingIcons