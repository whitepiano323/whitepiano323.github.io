"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Cv } from "@/components/cv"


export function About() {
  const skills = [
    "Rust",
    "Python",
    "Solidity",
    "JavaScript/TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "UI/UX Design",
    "API Development",
    "Database Design",
    "Frontend",
    "Backend",
    "Blockchain",
    "Smart Contracts",
    "Foundry",
    "Hardhat",
    "SQL",
    "HTML/CSS",
    "AWS",
    "Docker",
  ]

  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-muted-foreground">
                I'm a creative developer with a passion for building user-friendly web applications, EVM smart contracts, and backend API's. 
                I've worked with a variety of clients from startups to established businesses.
              </p>
              <p>  
                <strong>Some Programming Heros</strong>: <span className="text-muted-foreground">Bjarne Stroustrup, Robert Martin, Daniel Knuth, 
                  Marc Andreessen, Chris Lattner, Pieter Levels, Andrej Keparthy, Demis Hassabis, Satoshi Nakamoto, Grant Sanderson, Lex Fridman</span>
              </p>
              <p>
                <strong>Some Programming Books I loved</strong>: <span className="text-muted-foreground">Clean Code, The Pragmatic Programmer, 
                  Algorithms to Live By, Code: The Hidden Language of Computer Hardware, Rust In Action, The Master Algorithm</span>
              </p>
              <p>
                <strong>Favorite Language</strong>: <span className="text-muted-foreground">Rust. I drank the cult kool-aid here. 
                  It's not that I really care about the buzz words like "memory safe, perfomant, fearless concurrency". 
                  I just genuinely find it fun to code in Rust. The cryptic syntax makes me feel like a hacker.</span>
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden rounded-lg border glow-border mx-auto"
            >
              <Image 
                src="/profile.webp" 
                alt="Portrait" 
                width={400} 
                height={400} 
                className="object-cover"
              />            
            </motion.div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-xl font-semibold mb-6">My Journey</h3>
              <div className="space-y-8">
                <div className="relative pl-8 pb-8 border-l border-muted">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Fullstack Developer</h4>
                    <p className="text-muted-foreground">• 2024 - Present</p>
                    <p className="text-muted-foreground">
                      Develop frontend and backend applications for websites and blockchain projects including smart contracts.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 pb-8 border-l border-muted">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Smart Contract Developer</h4>
                    <p className="text-muted-foreground">• 2023 - 2024</p>
                    <p className="text-muted-foreground">
                      Developed EVM smart contracts with best Solidity design patterns, security best practices, and gas optimizations 
                    </p>
                  </div>
                </div>

                <div className="relative pl-8">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">AI Software Engineer Internship</h4>
                    <p className="text-muted-foreground">• 2023</p>
                    <p className="text-muted-foreground">
                      Worked on a computer vision algorithm to minimize manufacturing defects at a motorcycle plant using YOLOv3 and OpenCV with CUDA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CV Preview Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Cv />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

