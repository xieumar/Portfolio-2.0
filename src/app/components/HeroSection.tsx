'use client';

export default function HeroSection() {
  return (
    <header className="relative pt-32 pb-24 px-6 lg:px-12 flex items-center justify-center min-h-[90vh] bg-background-light dark:bg-background-dark">
      {/* Background floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-[10%] animate-float opacity-20 dark:opacity-10 transform -rotate-12">
          <div className="bg-blue-500 rounded-2xl w-16 h-16 flex items-center justify-center shadow-2xl text-white">
            <span className="material-symbols-outlined text-4xl">code</span>
          </div>
        </div>
        <div className="absolute bottom-1/4 right-[10%] animate-float-delayed opacity-20 dark:opacity-10 transform rotate-12">
          <div className="bg-pink-500 rounded-2xl w-20 h-20 flex items-center justify-center shadow-2xl text-white">
            <span className="material-symbols-outlined text-5xl">palette</span>
          </div>
        </div>
        <div className="absolute top-1/3 right-[20%] animate-float-slow opacity-20 dark:opacity-10 transform -rotate-6">
          <div className="bg-yellow-400 rounded-2xl w-14 h-14 flex items-center justify-center shadow-2xl text-white">
            <span className="material-symbols-outlined text-3xl">bolt</span>
          </div>
        </div>
        <div className="absolute bottom-10 left-[20%] animate-float opacity-15 dark:opacity-5 transform rotate-6">
          <div className="bg-gray-800 dark:bg-gray-600 rounded-2xl w-24 h-24 flex items-center justify-center shadow-2xl text-white">
            <span className="material-symbols-outlined text-5xl">terminal</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
        {/* Illustration */}
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
                name: <span className="text-yellow-300">'Cassie'</span>,
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
              <div className="absolute bottom-8 left-4 w-4 h-8 bg-green-600 rounded-full rounded-bl-none transform -rotate-45" />
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

        {/* Content */}
        <div className="order-1 lg:order-2 text-center lg:text-left z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-bold mb-6 animate-bounce shadow-sm border border-yellow-200 dark:border-yellow-700/50">
            <span className="text-xl">👋</span> Hi, I'm Cassie
          </div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black leading-tight mb-6 text-gray-900 dark:text-white relative">
            I build{' '}
            <span className="text-gray-900 dark:text-white inline-block hover:rotate-3 transition-transform">
              fun
            </span>
            , <br className="hidden sm:block" />
            <span className="relative inline-block bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 px-6 pt-2 pb-3 rounded-[2rem] transform -rotate-2 hover:rotate-0 transition-transform duration-300 mx-2 shadow-sm border border-purple-200 dark:border-purple-800">
              interactive
            </span>
            <br className="hidden sm:block" />
            things for the{' '}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">web.</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/40 -z-0 rounded-full transform -rotate-1" />
            </span>
          </h1>
          <p className="font-body text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            I'm a frontend developer and designer who loves turning complex problems into simple, beautiful, and intuitive interface designs.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a
              className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl shadow-lg hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              href="#contact"
            >
              <span className="material-symbols-outlined text-xl">mail</span>
              Get in touch
            </a>
            <a
              className="px-8 py-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-bold rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-all duration-300 flex items-center gap-2"
              href="#work"
            >
              <span className="material-symbols-outlined text-xl">visibility</span>
              View Projects
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-4">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              Connect
            </span>
            <div className="h-px w-12 bg-gray-300 dark:bg-gray-600" />
            <a
              className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
              href="#"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
              href="#"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  fillRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
