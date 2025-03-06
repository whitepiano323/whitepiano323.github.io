export interface ProjectType {
  id: number
  title: string
  slug: string
  description: string
  challenge: string
  solution: string
  image: string
  tags: string[]
  category: "frontend" | "fullstack" | "ui/ux" | "client"
  techStack: string[]
  featured: boolean
  liveUrl?: string
  githubUrl?: string
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    slug: "ecommerce-platform",
    description: "A modern e-commerce platform with a sleek UI, advanced filtering, and seamless checkout experience.",
    challenge:
      "The client needed a scalable e-commerce solution that could handle a large inventory while providing an intuitive shopping experience for customers.",
    solution:
      "I developed a custom e-commerce platform using Next.js for the frontend and a headless CMS for content management. The site features advanced product filtering, a streamlined checkout process, and integration with popular payment gateways.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["E-commerce", "Next.js", "Tailwind CSS", "Stripe"],
    category: "fullstack",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API", "Sanity CMS", "Vercel"],
    featured: true,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
  },
  {
    id: 2,
    title: "Portfolio for Photographer",
    slug: "photographer-portfolio",
    description: "A minimalist portfolio website for a professional photographer with a focus on visual storytelling.",
    challenge:
      "The photographer needed a portfolio that would showcase their work in a clean, uncluttered environment while still reflecting their unique artistic style.",
    solution:
      "I designed and developed a minimalist portfolio with a focus on large, high-quality images. The site features smooth transitions, a masonry grid layout, and category filtering to help visitors explore the photographer's work.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Portfolio", "React", "Framer Motion", "Photography"],
    category: "frontend",
    techStack: ["React", "Framer Motion", "CSS Modules", "Cloudinary", "Netlify"],
    featured: true,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    slug: "saas-dashboard",
    description:
      "A comprehensive dashboard for a SaaS product with data visualization, user management, and analytics.",
    challenge:
      "The startup needed an intuitive admin dashboard that could present complex data in an accessible way while providing powerful management tools for administrators.",
    solution:
      "I built a feature-rich dashboard using React and TypeScript, with real-time data visualization using D3.js. The interface includes user management, detailed analytics, and customizable reports, all with a clean and intuitive UI.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Dashboard", "React", "TypeScript", "D3.js"],
    category: "fullstack",
    techStack: ["React", "TypeScript", "D3.js", "Node.js", "Express", "MongoDB", "AWS"],
    featured: true,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
  },
  {
    id: 4,
    title: "Mobile App UI Design",
    slug: "mobile-app-ui",
    description: "A comprehensive UI design for a fitness tracking mobile application with a focus on user experience.",
    challenge:
      "The client needed a modern, engaging UI for their fitness app that would motivate users while making complex fitness data accessible and meaningful.",
    solution:
      "I created a complete UI design system with over 50 screens, focusing on clear data visualization, intuitive navigation, and motivational elements. The design includes custom icons, illustrations, and animations to enhance the user experience.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["UI/UX", "Mobile", "Figma", "Design System"],
    category: "ui/ux",
    techStack: ["Figma", "Adobe Illustrator", "Principle", "Lottie"],
    featured: false,
    liveUrl: "https://example.com",
  },
  {
    id: 5,
    title: "Real Estate Listing Platform",
    slug: "real-estate-platform",
    description:
      "A modern real estate platform with advanced search, filtering, and interactive maps for property listings.",
    challenge:
      "The real estate agency needed a platform that could showcase their properties with rich media while providing powerful search and filtering capabilities for potential buyers.",
    solution:
      "I developed a comprehensive real estate platform with interactive maps, advanced search filters, virtual tours, and detailed property information. The site includes agent profiles, saved searches, and inquiry forms to connect buyers with agents.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Real Estate", "Maps API", "Next.js", "Filtering"],
    category: "client",
    techStack: ["Next.js", "TypeScript", "Google Maps API", "PostgreSQL", "Prisma", "AWS S3"],
    featured: false,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
  },
  {
    id: 6,
    title: "Educational Platform",
    slug: "educational-platform",
    description: "An interactive learning platform with course management, progress tracking, and video lessons.",
    challenge:
      "The educational startup needed a platform that could deliver their courses in an engaging way while providing tools for students to track their progress and for instructors to manage content.",
    solution:
      "I built a comprehensive learning platform with video lessons, interactive quizzes, progress tracking, and a course management system. The platform includes features like note-taking, bookmarking, and discussion forums to enhance the learning experience.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Education", "React", "Node.js", "MongoDB"],
    category: "fullstack",
    techStack: ["React", "Node.js", "Express", "MongoDB", "AWS", "Socket.io"],
    featured: false,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
  },
]

