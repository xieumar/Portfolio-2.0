// data.ts
export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  link?: string
  icon?: string 
  highlights?: string[]
  bgColor?: string
  bgShade?: string
  category?: string
  categoryColor?: string
  categoryBg?: string
  github?: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'QueryLab',
    description:
      'A modern visual query builder that lets users build advanced database and API filters without writing SQL, featuring drag-and-drop rule composition, schema-aware inputs, infinite nesting, and live query generation.',
    tags: ['Next.js', 'TypeScript', 'Zustand', 'Tailwind CSS'],
    link: 'https://querylab-seven.vercel.app/',
    icon: '/querybuilder.png', 
    bgColor: 'bg-[#C7D2FE] dark:bg-[#4338CA]',
    bgShade: 'bg-[#E0E7FF] dark:bg-[#312E81]',
    category: 'Visual Query Builder',
    categoryColor: 'text-primary',
    categoryBg: 'bg-primary/10',
  },
  {
    id: '2',
    title: 'Zedu',
    description:
      'A collaborative learning and communication platform built for bootcamps and educational communities, featuring structured cohort channels, the Buzz interaction feature, and seamless file management workflows.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WebSockets'],
    link: 'https://zedu.chat/',
    icon: '/zedu.png',
    bgColor: 'bg-[#DDD6FE] dark:bg-[#5B21B6]',
    bgShade: 'bg-[#EDE9FE] dark:bg-[#4C1D95]',
    category: 'EdTech & Collaboration',
    categoryColor: 'text-purple-600',
    categoryBg: 'bg-purple-100',
  },
  {
    id: '3',
    title: 'Audiophile',
    description:
      'A clean and responsive shopping platform for high-end audio products, focused on intuitive navigation, secure payments, and conversion-optimized checkout flows.',
    tags: ['Next.js', 'TypeScript', 'Convex', 'Tailwind CSS'],
    link: 'https://audiophilehng.netlify.app/',
    icon: '/Audiophile.png',
    bgColor: 'bg-[#A7F3D0] dark:bg-[#065F46]',
    bgShade: 'bg-[#D1FAE5] dark:bg-[#064E3B]',
    category: 'E-Commerce',
    categoryColor: 'text-green-600',
    categoryBg: 'bg-green-100',
  },
]

export const funFacts = [
  'Octopuses have three hearts, and two stop beating when they swim. 🐙',
  'Bananas are berries, but strawberries aren’t. 🍌🍓',
  'Honey never spoils — archaeologists have found edible honey in 3,000-year-old tombs. 🍯',
  'A group of flamingos is called a “flamboyance.” 🦩',
  'You can hear rhubarb grow if you listen carefully in spring. 🌱',
  'The first computer “bug” was a literal moth stuck in a Harvard computer in 1947. 🐛💻',
  'The first website is still online — it’s a 1991 CERN page about the World Wide Web. 🌐',
  'JavaScript was created in 10 days by Brendan Eich in 1995. ⚡',
  'The original name for JavaScript was Mocha. ☕',
  'Git’s creator, Linus Torvalds, also created Linux while writing the kernel in his spare time. 🐧',
  'There’s a programming language called LOLCODE where syntax looks like memes. 😹',
  'Space smells like burnt steak… according to astronauts. 🚀🥩',
  'The first emoji was created in 1999 by Shigetaka Kurita for a Japanese mobile platform. 😀',
  'In the early days of computers, people thought “cyberspace” would be a literal space you could visit. 🛸',
  'Some AI art generators can hallucinate cats wearing hats on Mars… because why not? 🐱🪐'
];
