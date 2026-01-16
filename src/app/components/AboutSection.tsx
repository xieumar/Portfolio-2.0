import { MapPin, Briefcase, GraduationCap, Coffee, TvMinimalPlay } from 'lucide-react'

export default function AboutSection() {
  return (
    <>
      <section
        className="py-24 px-10 lg:px-16 bg-white dark:bg-gray-900 relative overflow-hidden"
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
            <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-[var(--sage-light)] dark:bg-[var(--sage-dark)] rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/40 dark:bg-white/10 rounded-full blur-3xl -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 pointer-events-none" />

              <div className="h-full flex flex-col justify-between relative z-10">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    Hello! I'm Zainab.
                  </h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed font-medium text-justify">
                    I'm a creative developer based in Nigeria. I bridge the gap between
                    <strong className="text-green-700 dark:text-green-300"> design and engineering</strong>, crafting user interfaces that feel alive. I believe the web should be fun, accessible, and a little bit magical.
                  </p>
                  
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-6">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/60 dark:bg-black/20 rounded-full text-sm sm:text-base font-bold text-gray-700 dark:text-gray-200">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" /> Nigeria
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/60 dark:bg-black/20 rounded-full text-sm sm:text-base font-bold text-gray-700 dark:text-gray-200">
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" /> Open to Work
                  </span>
                </div>
              </div>
            </div>


            {/* Currently Learning */}
            <div className="col-span-1 md:col-span-1 row-span-1 bg-(--terracotta-light) dark:bg-(--terracotta-dark) rounded-3xl p-6 flex flex-col justify-between group hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-between items-start">
                <h4 className="font-display text-xl font-bold text-gray-800 dark:text-white">
                  Currently Learning
                </h4>
                <span className="p-2 bg-white/40 dark:bg-black/20 rounded-full">
                  <GraduationCap className='text-orange-700' />
                </span>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <span className=" px-4 py-2 bg-white dark:bg-gray-800 rounded-lg font-bold text-gray-800 dark:text-white shadow-sm transform group-hover:scale-105 transition-transform">
                  GSAP
                </span>
              </div>
            </div>

            {/* Fuel Source */}
            <div className="col-span-1 md:col-span-1 row-span-1 bg-[var(--lavender-deep)] dark:bg-[var(--lavender-dark)] rounded-3xl p-6 flex flex-col justify-between group hover:shadow-xl transition-shadow duration-300 h-full">
              <h4 className="font-display text-xl font-bold text-gray-800 dark:text-white mb-2">
                Fuel Source
              </h4>

              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-black/20 rounded-xl backdrop-blur-sm">
                  <span className="font-bold text-gray-700 dark:text-gray-200">Latte</span>
                  <Coffee className="text-indigo-500" />
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
                "I once tried to teach my cat a trick… it mostly ignored me and then curled up on my notebook instead."
              </p>

            </div>

            {/* Gaming */}
            <div className="col-span-1 md:col-span-1 row-span-1 bg-green-100 dark:bg-blue-900/40 rounded-3xl p-6 flex flex-col items-center justify-center text-center group hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:rotate-12 transition-transform">
                <TvMinimalPlay className='text-green-500' />
              </div>
              <h4 className="font-display text-lg font-bold text-gray-800 dark:text-white">
                Anime
              </h4>
              <span className="text-sm text-gray-600 dark:text-gray-400 font-bold">
                Frieren Enthusiast
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
