"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function AboutPreview() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "UI/UX Design",
    "Responsive Design",
    "API Development",
    "Database Design",
    "Performance Optimization",
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
                I'm a creative developer with a passion for building beautiful, functional, and user-friendly web
                applications. With over 5 years of experience in the industry, I've worked with a variety of clients
                from startups to established businesses.
              </p>
              <p className="text-muted-foreground">
                My approach combines technical expertise with an eye for design, allowing me to create solutions that
                not only work flawlessly but also look stunning. I believe in clean code, intuitive interfaces, and the
                power of technology to solve real-world problems.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or seeking inspiration in art, music, and nature.
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
              className="relative aspect-square overflow-hidden rounded-lg border glow-border"
            >
              <Image src="/placeholder.svg?height=600&width=600" alt="Portrait" fill className="object-cover" />
            </motion.div>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-8">
              <div className="relative pl-8 pb-8 border-l border-muted">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">Senior Frontend Developer</h4>
                  <p className="text-muted-foreground">Tech Innovations Inc. • 2021 - Present</p>
                  <p className="text-muted-foreground">
                    Leading frontend development for enterprise clients, focusing on performance optimization and
                    accessibility.
                  </p>
                </div>
              </div>

              <div className="relative pl-8 pb-8 border-l border-muted">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">Web Developer</h4>
                  <p className="text-muted-foreground">Digital Solutions Agency • 2018 - 2021</p>
                  <p className="text-muted-foreground">
                    Developed responsive websites and web applications for clients across various industries.
                  </p>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">Freelance Developer</h4>
                  <p className="text-muted-foreground">Self-employed • 2016 - 2018</p>
                  <p className="text-muted-foreground">
                    Built custom websites and applications for small businesses and startups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

