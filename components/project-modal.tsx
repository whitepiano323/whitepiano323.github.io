"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { ProjectType } from "@/lib/projects"
import { motion, AnimatePresence } from "framer-motion"

// Create a global event system for opening the modal
type OpenModalEvent = CustomEvent<{ project: ProjectType }>

declare global {
  interface WindowEventMap {
    "open-project-modal": OpenModalEvent
  }
}

export function ProjectModal() {
  const [project, setProject] = useState<ProjectType | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Listen for the custom event to open the modal
    const handleOpenModal = (e: OpenModalEvent) => {
      setProject(e.detail.project)
      setIsOpen(true)
    }

    window.addEventListener("open-project-modal", handleOpenModal as EventListener)

    return () => {
      window.removeEventListener("open-project-modal", handleOpenModal as EventListener)
    }
  }, [])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop with sci-fi particle effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            {/* Subtle particle effect in backdrop */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="particles-container">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/30 rounded-full"
                    initial={{
                      x: Math.random() * window.innerWidth,
                      y: Math.random() * window.innerHeight,
                      opacity: 0,
                    }}
                    animate={{
                      opacity: [0, 0.5, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 3 + Math.random() * 5,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Modal with sci-fi animation */}
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
              y: 20,
              rotateX: 10,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              rotateX: 0,
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
              y: -20,
              rotateX: -10,
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
              duration: 0.5,
            }}
            className="relative z-50 w-[90vw] max-w-[650px] max-h-[85vh] overflow-y-auto bg-black rounded-lg shadow-[0_0_30px_rgba(168,85,247,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sci-fi border effect */}
            <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-primary/50"
                initial={{ scaleX: 0, transformOrigin: "left" }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0, transformOrigin: "right" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
              <motion.div
                className="absolute top-0 right-0 w-1 h-full bg-primary/50"
                initial={{ scaleY: 0, transformOrigin: "top" }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0, transformOrigin: "bottom" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-full h-1 bg-primary/50"
                initial={{ scaleX: 0, transformOrigin: "right" }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0, transformOrigin: "left" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-1 h-full bg-primary/50"
                initial={{ scaleY: 0, transformOrigin: "bottom" }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0, transformOrigin: "top" }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl-sm" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-sm" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary rounded-br-sm" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary rounded-bl-sm" />

            <div className="p-6 space-y-6">
              {/* Title with animation */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold tracking-tight text-white pr-8">{project.title}</h2>
                <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-0 top-0 rounded-full bg-background/20 p-1 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close modal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </motion.div>

              {/* Image with animation */}
              <motion.div
                className="relative aspect-video w-full overflow-hidden rounded-md border border-primary/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Tags overlay on image with staggered animation */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                    >
                      <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm text-xs">
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Two column layout with animation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Links column */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <ExternalLink className="h-4 w-4 text-primary" />
                    <h3 className="text-sm font-semibold text-primary">LINKS</h3>
                  </div>

                  <div className="space-y-3">
                    {project.liveUrl && (
                      <Button asChild className="w-full bg-primary hover:bg-primary/80 text-white">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}

                    {project.githubUrl && (
                      <Button asChild variant="outline" className="w-full border-primary/20 hover:bg-primary/10">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Source Code
                        </a>
                      </Button>
                    )}
                  </div>
                </motion.div>

                {/* Tech stack column */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="h-4 w-4 text-primary" />
                    <h3 className="text-sm font-semibold text-primary">TECH STACK</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.05 }}
                      >
                        <Badge variant="outline" className="bg-muted/10 border-primary/20 text-xs">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

