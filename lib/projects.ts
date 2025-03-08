export interface ProjectType {
  id: number
  title: string
  slug: string
  description: string
  image: string
  tags: string[]
  categories: string[]
  techStack: string[]
  featured: boolean
  proprietary?: boolean
  liveUrl?: string
  githubUrl?: string
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Green Seed Financial Web Design",
    slug: "gsf-landing-page",
    description: "A clean, responsive landing page for an agriculture business",
    image: "/gsf.webp?height=600&width=800",
    tags: ["Responsive Design", "Next.js", "Tailwind CSS"],
    categories: ["frontend"],
    techStack: ["Frontend", "Next.js", "TypeScript", "React", "Tailwind CSS"],
    featured: true,
    liveUrl: "https://green-seed-financial-git-main-kens-projects-5283c606.vercel.app/",
    githubUrl: "https://github.com/ksmit323/green-seed-financial",
  },
  {
    id: 2,
    title: "BitWork - Job board Web Design",
    slug: "bitwork",
    description:
      "I created the frontend design for BitWork, a freelancing site for crypto projects and a better alternative to UpWork",
    image: "/bitwork.webp?height=600&width=800",
    tags: ["Job Board", "Frontend", "Next.js", "React", "TypeScript", "Tailwind CSS"],
    categories: ["frontend"],
    techStack: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
    featured: true,
    liveUrl: "https://bitwork-frontend.vercel.app/",
    githubUrl: "https://github.com/ksmit323/bitwork-frontend",
  },
  { 
    id: 3,
    title: "Portfolio/Blog Website",
    slug: "portfolio-blog",
    description: "A portfolio website for a professional devloper with a focus on visual storytelling",
    image: "/portfolio-blog.webp?height=600&width=800",
    tags: ["Portfolio", "Blog", "Frontend"],
    categories: ["frontend"],
    techStack: ["React", "Frontend", "HTML/CSS", "Typescript", "Framer-motion"],
    featured: true,
    liveUrl: "https://ksmit323.github.io/",
    githubUrl: "https://github.com/ksmit323/ksmit323.github.io",
  },
  {
    id: 4,
    title: "Mobile App UI Design",
    slug: "mobile-app-ui",
    description: "I used the Dioxus Rust web framework to make a comprehensive UI design for an alcohol tracking mobile application with a focus on user experience",
    image: "/booze-buddy.webp?height=600&width=800",
    tags: ["UI/UX", "Mobile", "Fullstack"],
    categories: ["mobile", "frontend", "backend"],
    techStack: ["Android", "Rust", "Dioxus", "SQL"],
    featured: false,
    liveUrl: "https://youtube.com/shorts/K03DNOmfca0?feature=share",
    githubUrl: "https://github.com/Arianexzy/booze-buddy"
  },
  {
    id: 5,
    title: "Tokenized Real Estate with Governance",
    slug: "tokenized-real-estate",
    description: "An EVM L1 Proof-of-Authority private chain that tokenized real estate properties with governance features. I implemented the Governance protocol with Solidity and I connected those contracts to the backend with GO bindings.  I also developed the API for interacting the smart contracts with the MongoDB database.",
    image: "/tokenized-real-estate.webp?height=600&width=800",
    tags: ["Blockchain", "Backend", "Database", "RESTful API", "Proprietary"],
    categories: ["blockchain", "backend"],
    techStack: ["Solidity", "Go", "MongoDB", "OpenZepellin", "Typescript", "Hardhat"],
    featured: false,
    proprietary: true,
  },
  {
    id: 6,
    title: "Backend API development For an A.I. model marketplace",
    slug: "ai-marketplace",
    description: "I developed the backend API to connect the frontend to synchronize with blockchain data. A.I. models used bonding curves to set prices",
    image: "/ai-marketplace.webp?height=600&width=800",
    tags: ["Backend", "API", "Blockchain", "Marketplace"],
    categories: ["backend", "blockchain"],
    techStack: ["Python", "FastAPI", "Javascript", "Web.js", "Ethers.js", "Next.js"],
    featured: false,
    proprietary: true,
  },
  {
    id: 7,
    title: "AWS Cloud Infrastructure for a 3D NFT asset rendering project",
    slug: "aws-cloud-infrastructure",
    description: "Developed the scalable cloud infrasstructure for minting 10,000 3D NFT assets",
    image: "/aws.webp?height=600&width=800",
    tags: ["AWS", "Cloud Architecture", "Blockchain"],
    categories: ["blockchain", "cloud"],
    techStack: ["AWS Lambda", "AWS Batch", "AWS S3", "Docker", "Python", "Javascript", "Moralis"],
    featured: false,
    proprietary: true,
  },
  {
    id: 8,
    title: "NFT P2E Game",
    slug: "nft-game",
    description:
      "I won a hackathon with this project. Blockchain-based game on the EVM where players stake NFTs to earn ERC20 tokens. I developed the smart contracts and the frontend design",
    image: "/buzzkill.webp?height=600&width=800",
    tags: ["Blockchain", "EVM", "Test-driven Development"],
    categories: ["blockchain", "frontend"],
    techStack: ["Solidity", "Foundry", "TypeScript", "React", "EVM"],
    featured: false,
    liveUrl: "https://play.buzzkill.world/",
    githubUrl: "https://github.com/ksmit323/buzzkill-smart-contracts",
  },
  {
    id: 9,
    title: "Funding Rate Arbitrage",
    slug: "funding-rate-arbitrage",
    description: "I won a hackathon with this project. Arbitraging funding rates across different DEXs for perpetual contracts",
    image: "/fra.webp?height=600&width=800",
    tags: ["Blockchain", "DeFi", "EVM"],
    categories: ["blockchain", "backend"],
    techStack: ["Python", "Web3.py", "DEX SDK's", "EVM"],
    featured: false,
    liveUrl: "https://orderly.network/blog/best-use-orderly-encode-hackathon-winners/",
    githubUrl: "https://github.com/ksmit323/funding-rate-arbitrage",
  },
  {
    id: 10,
    title: "Cube Market Maker",
    slug: "cube-market-maker",
    description: "A trading bot designed to provide liquidity on the Cube Exchange. This was a two-day hackathon project that I finished as a finalist and was invited to be a presenter at Vietnam's biggest crypto event.",
    image: "/cmm.webp?height=600&width=800",
    tags: ["Blockchain", "DeFi", "EVM"],
    categories: ["blockchain", "backend"],
    techStack: ["Rust", "Tokio", "DEX SDK's"],
    featured: false,
    liveUrl: "https://www.loom.com/share/7bd10a906661499c897a355dd0c9f76b?sid=c19d6163-e14d-4b7b-8cfa-a77252fa260c",
    githubUrl: "https://github.com/ksmit323/cube_market_maker",
  },
]

