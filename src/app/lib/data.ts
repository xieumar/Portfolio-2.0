// Types
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  highlights: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

// Data
export const skills: Skill[] = [
  {
    category: "Core",
    items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)"]
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS3", "Responsive Design", "Accessibility"]
  },
  {
    category: "Tools & Practices",
    items: ["Git", "Component Architecture", "Performance Optimization", "Testing"]
  },
  {
    category: "Additional",
    items: ["Node.js", "REST APIs", "State Management", "Build Tools"]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing products, orders, and analytics with real-time updates.",
    tags: ["React", "TypeScript", "Chart.js", "REST API"],
    highlights: [
      "Built reusable component library with 40+ components",
      "Implemented complex data tables with sorting, filtering, and pagination",
      "Optimized performance achieving 95+ Lighthouse score"
    ]
  },
  {
    id: "2",
    title: "Task Management Platform",
    description: "Collaborative project management tool with drag-and-drop kanban boards and team workflows.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "State Management"],
    highlights: [
      "Architected scalable component structure for 50k+ users",
      "Integrated drag-and-drop with custom hooks and animations",
      "Achieved 100% accessibility compliance (WCAG 2.1 AA)"
    ]
  },
  {
    id: "3",
    title: "Developer Portfolio System",
    description: "CMS-powered portfolio generator enabling developers to showcase projects with minimal setup.",
    tags: ["Next.js", "MDX", "SEO", "Performance"],
    highlights: [
      "Engineered static site generation for optimal performance",
      "Implemented comprehensive SEO strategy with metadata optimization",
      "Created flexible theming system with CSS variables"
    ]
  }
];