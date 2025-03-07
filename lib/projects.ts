export interface ProjectType {
  id: number
  title: string
  slug: string
  description: string
  image: string
  tags: string[]
  category: string[]
  techStack: string[]
  featured: boolean
  liveUrl?: string
  githubUrl?: string
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "GSF Landing Page",
    slug: "gsf-landing-page",
    description: "A clean, responsive landing page for a agriculture business",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["E-commerce", "Next.js", "Tailwind CSS", "Stripe"],
    category: ["frontend"],
    techStack: ["Frontend", "Next.js", "TypeScript", "React", "Tailwind CSS", "Responsive Design"],
    featured: true,
    liveUrl: "https://green-seed-financial-git-main-kens-projects-5283c606.vercel.app/",
    // githubUrl: "https://github.com/username/project",
  },
  {
    id: 2,
    title: "Portfolio for Developer",
    slug: "developer-portfolio",
    description: "A portfolio website for a professional devloper with a focus on visual storytelling",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Portfolio", "Frontend", "React", ""],
    category: ["frontend"],
    techStack: ["React", "Frontend", "HTML/CSS", "Typescript", "Framer-motion"],
    featured: true,
    liveUrl: "https://ksmit323.github.io/",
    githubUrl: "https://github.com/ksmit323/ksmit323.github.io",
  },
  {
    id: 3,
    title: "BitWork - Freelancing Platform",
    slug: "saas-dashboard",
    description:
      "A frontend design for BitWork, a freelancing site for crypto projects and a better alternative to UpWork",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Freelancing", "Frontend", "Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: ["frontend"],
    techStack: ["React", "TypeScript", "D3.js", "Node.js", "Express", "MongoDB", "AWS"],
    featured: true,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
  },
  {
    id: 4,
    title: "Mobile App UI Design",
    slug: "mobile-app-ui",
    description: "A comprehensive UI design for a alcohol tracking mobile application with a focus on user experience",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["UI/UX", "Mobile", "Fullstack", "Rust", "Dioxus", "SQL"],
    category: ["ui/ux"],
    techStack: ["Figma", "Adobe Illustrator", "Principle", "Lottie"],
    featured: false,
    liveUrl: "https://example.com",
  },
  {
    id: 5,
    title: "Tokenized Real Estate with Governance",
    slug: "tokenized-real-estate",
    description: "An EVM L1 Proof-of-Authority private chain that tokenized real estate properties with governance features. I implemented the Governance protocol with Solidity and I connected those contracts to the backend with GO bindings.  I also developed the API for interacting the smart contracts with the MongoDB database.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Blockchain", "Backend", "Database", "RESTful API"],
    category: ["blockchain", "backend", "smart contracts"],
    techStack: ["Solidity", "Go", "MongoDB", "OpenZepellin", "Typescript", "Hardhat"],
    featured: false,
  },
  {
    id: 6,
    title: "Backend API development For an A.I. marketplace",
    slug: "ai-marketplace",
    description: "I developed the backend API to connect the frontend to synchronize with blockchain data",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Backend", "API", "Blockchain"],
    category: ["backend, api"],
    techStack: ["Python", "FastAPI", "Javascript", "Web.js", "Ethers.js", "Next.js"],
    featured: false,
  },
  {
    id: 7,
    title: "AWS Cloud Infrastructure for a 3D NFT asset rendering project",
    slug: "aws-cloud-infrastructure",
    description: "Developed the scalable cloud infrasstructure for minting 10,000 3D NFT assets",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["AWS", "Cloud Architecture", "Python", "Javascript", "Blockchain"],
    category: ["DevOps"],
    techStack: ["AWS Lambda", "AWS Batch", "AWS S3", "Docker"],
    featured: false,
  },
  {
    id: 8,
    title: "NFT P2E Game",
    slug: "nft-game",
    description:
      "Blockchain-based game on the EVM where players stake NFTs to earn ERC20 tokens",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Blockchain", "EVM", "Test-driven Development"],
    category: ["blockchain"],
    techStack: ["Solidity", "Foundry", "TypeScript", "React", "EVM"],
    featured: false,
    liveUrl: "https://play.buzzkill.world/",
    githubUrl: "https://github.com/ksmit323/buzzkill-smart-contracts",
  },
  {
    id: 9,
    title: "Funding Rate Arbitrage",
    slug: "funding-rate-arbitrage",
    description: "Arbitraging funding rates across different DEXs for perpetual contracts",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Blockchain", "DeFi", "EVM"],
    category: ["fullstack"],
    techStack: ["Python", "Web3.py", "DEX SDK's", "EVM"],
    featured: false,
    liveUrl: "https://orderly.network/blog/best-use-orderly-encode-hackathon-winners/",
    githubUrl: "https://github.com/ksmit323/funding-rate-arbitrage",
  },
  {
    id: 10,
    title: "Cube Market Maker",
    slug: "cube-market-maker",
    description: "A trading bot designed to provide liquidity on the Cube Exchange",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Blockchain", "DeFi", "EVM"],
    category: ["fullstack"],
    techStack: ["Rust", "DEX SDK's"],
    featured: false,
    liveUrl: "https://www.loom.com/share/7bd10a906661499c897a355dd0c9f76b?sid=c19d6163-e14d-4b7b-8cfa-a77252fa260c",
    githubUrl: "https://github.com/ksmit323/cube_market_maker",
  },
]

