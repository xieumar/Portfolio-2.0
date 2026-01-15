export default function AboutSection() {
  return (
    <>
      <div className="w-full bg-background-light dark:bg-background-dark leading-0">
        <svg
          className="w-full h-16 md:h-24 text-white dark:text-gray-900 fill-current"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>
      <section
        className="py-24 px-6 lg:px-12 bg-white dark:bg-gray-900 relative overflow-hidden"
        id="about"
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="mb-12">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-bold tracking-wider text-purple-600 dark:text-purple-300 uppercase bg-purple-100 dark:bg-purple-900/40 rounded-full">
              About Me
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">
              Beyond the Keyboard
            </h2>
            <p className="font-body text-lg text-gray-600 dark:text-gray-400">
              A glimpse into my world, one grid item at a time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
            {/* Main Bio Card */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-sage-light dark:bg-sage-dark rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 dark:bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
              <div className="h-full flex flex-col justify-between relative z-10">
                <div>
                  <h3 className="font-display text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    Hello! I'm Cassie.
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed font-medium">
                    I'm a creative developer based in sunny San Francisco. I bridge the gap
                    between <strong className="text-green-700 dark:text-green-300">design and engineering</strong>,
                    crafting user interfaces that feel alive. I believe the web should be fun,
                    accessible, and a little bit magical.
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-6">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/60 dark:bg-black/20 rounded-full text-sm font-bold text-gray-700 dark:text-gray-200">
                    <span className="material-symbols-outlined text-base">location_on</span> SF, CA
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/60 dark:bg-black/20 rounded-full text-sm font-bold text-gray-700 dark:text-gray-200">
                    <span className="material-symbols-outlined text-base">work</span> Open to Work
                  </span>
                </div>
              </div>
            </div>

            {/* Currently Learning */}
            <div className="col-span-1 md:col-span-1 row-span-1 bg-terracotta-light dark:bg-terracotta-dark rounded-3xl p-6 flex flex-col justify-between group hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-between items-start">
                <h4 className="font-display text-xl font-bold text-gray-800 dark:text-white">
                  Currently Learning
                </h4>
                <span className="p-2 bg-white/40 dark:bg-black/20 rounded-full">
                  <span className="material-symbols-outlined text-orange-600 dark:text-orange-200">
                    school
                  </span>
                </span>
              </div>
              <div className="mt-4">
                <span className="inline-block px-4 py-2 bg-white dark:bg-gray-800 rounded-lg font-bold text-gray-800 dark:text-white shadow-sm transform group-hover:scale-105 transition-transform">
                  Three.js 🧊
                </span>
              </div>
            </div>

            {/* Fuel Source */}
            <div className="col-span-1 md:col-span-1 row-span-1 bg-lavender-deep dark:bg-lavender-dark rounded-3xl p-6 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -bottom-4 -right-4 text-9xl opacity-10 rotate-12 select-none pointer-events-none">
                ☕
              </div>
              <h4 className="font-display text-xl font-bold text-gray-800 dark:text-white mb-2">
                Fuel Source
              </h4>
              <div className="flex flex-col gap-2 mt-4 relative z-10">
                <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-black/20 rounded-xl backdrop-blur-sm">
                  <span className="font-bold text-gray-700 dark:text-gray-200">Latte</span>
                  <span className="material-symbols-outlined">local_cafe</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                  <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="col-span-1 md:col-span-1 row-span-1 bg-yellow-100 dark:bg-yellow-900/40 rounded-3xl p-6 flex flex-col justify-between group hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-display text-xl font-bold text-gray-800 dark:text-white">
                Fun Fact
              </h4>
              <p className="text-gray-700 dark:text-gray-300 font-medium italic">
                "I once debugged a production issue while on a rollercoaster. (Okay, maybe while
                waiting in line)."
              </p>
              <div className="self-end">
                <span className="text-3xl">🎢</span>
              </div>
            </div>

            {/* Gaming */}
            <div className="col-span-1 md:col-span-1 row-span-1 bg-blue-100 dark:bg-blue-900/40 rounded-3xl p-6 flex flex-col items-center justify-center text-center group hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:rotate-12 transition-transform">
                <span className="material-symbols-outlined text-3xl text-blue-500">
                  sports_esports
                </span>
              </div>
              <h4 className="font-display text-lg font-bold text-gray-800 dark:text-white">
                Gaming
              </h4>
              <span className="text-sm text-gray-600 dark:text-gray-400 font-bold">
                Zelda Enthusiast
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
