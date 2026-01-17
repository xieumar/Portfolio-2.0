import {ArrowRight} from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      name: 'CoinFlow App',
      category: 'Fintech Dashboard',
      description:
        'A comprehensive dashboard for tracking crypto assets with real-time data visualization. Focused on making complex financial data approachable through friendly UI and soft color palettes.',
      tech: ['React', 'Tailwind', 'D3.js'],
      bgColor: 'bg-[#C7D2FE] dark:bg-[#4338CA]',
      bgShade: 'bg-[#E0E7FF] dark:bg-[#312E81]',
      icon: 'image',
      categoryColor: 'text-primary',
      categoryBg: 'bg-primary/10',
    },
    {
      name: 'Botanica Shop',
      category: 'E-Commerce',
      description:
        'An online plant shop experience that brings nature to the screen. Features custom micro-interactions for the cart and a seamless checkout process designed to increase conversion.',
      tech: ['Vue 3', 'GSAP', 'Stripe'],
      bgColor: 'bg-[#A7F3D0] dark:bg-[#065F46]',
      bgShade: 'bg-[#D1FAE5] dark:bg-[#064E3B]',
      icon: 'shopping_bag',
      categoryColor: 'text-green-600',
      categoryBg: 'bg-green-100',
    },
    {
      name: 'VibeStream',
      category: 'Music App',
      description:
        'A social music discovery platform. The challenge was to create a visual identity that felt energetic and community-focused while handling large media libraries performantly.',
      tech: ['React Native', 'Node.js', 'Socket.io'],
      bgColor: 'bg-[#FECDD3] dark:bg-[#9F1239]',
      bgShade: 'bg-[#FFE4E6] dark:bg-[#881337]',
      icon: 'music_note',
      categoryColor: 'text-rose-600',
      categoryBg: 'bg-rose-100',
    },
  ];

  return (
    <section className="py-32 px-6 lg:px-12 relative bg-gray-50 dark:bg-gray-900" id="work">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="inline-block relative">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 z-10 relative">
              Featured Work
            </h2>
            <div className="absolute -bottom-2 -right-4 w-full h-4 bg-secondary/30 rounded-full -z-0 transform -rotate-2" />
          </div>
          <p className="font-body text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects that showcase my passion for interactive design and clean code.
          </p>
        </div>
        <div className="space-y-24">
          {projects.map((project, idx) => (
            <div key={project.name} className={`group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${idx % 2 === 1 ? 'lg:grid-cols-12' : ''}`}>
              {/* Image Card */}
              <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'order-1' : 'order-2 lg:order-1'} relative`}>
                <div
                  className={`absolute inset-0 ${project.bgShade} rounded-3xl transform ${idx === 0 ? 'rotate-2' : idx === 1 ? '-rotate-2' : 'rotate-1'} transition-transform duration-500 group-hover:${idx === 0 ? 'rotate-1' : idx === 1 ? 'rotate-0' : '-rotate-1'}`}
                />
                <div
                  className={`relative ${project.bgColor} rounded-3xl p-8 sm:p-12 overflow-hidden min-h-[400px] flex items-center justify-center work-card-shadow transition-transform duration-500 group-hover:-translate-y-2`}
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-16 -mt-16" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full blur-2xl -ml-12 -mb-12" />
                  <div className="relative w-full max-w-lg aspect-video bg-white dark:bg-gray-800 rounded-xl shadow-2xl border-4 border-white/50 dark:border-gray-700 overflow-hidden flex flex-col group-hover:scale-105 transition-transform duration-500">
                    <div className="h-6 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center px-3 gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
                      <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600">
                        {project.icon}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Card */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'order-2' : 'order-1 lg:order-2'} ${idx % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'}`}>
                <span
                  className={`inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider ${project.categoryColor} uppercase ${project.categoryBg} rounded-full`}
                >
                  {project.category}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm font-semibold rounded-lg"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <a
                  className="inline-flex items-center gap-2 font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors text-lg relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:origin-left"
                  href="#"
                >
                  View Case Study{' '}
                  <ArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <a
            className="inline-block px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-xl border-2 border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            href="#"
          >
            See More Projects
          </a>
        </div>
      </div>
    </section>
  );
}
