"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import type { ProjectType } from "@/lib/projects"
import { isMobileApp } from "@/lib/utils"

interface ProjectCardProps {
  project: ProjectType
}

export function ProjectCard({ project }: ProjectCardProps) {
  const handleClick = () => {
    // Dispatch a custom event to open the modal
    const event = new CustomEvent("open-project-modal", {
      detail: { project },
    })
    window.dispatchEvent(event)
  }
  
  const isMobile = isMobileApp(project);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
      whileTap={{ scale: 0.97 }}
      onClick={handleClick}
      className="group overflow-hidden rounded-lg border border-muted/40 bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 cursor-pointer"
    >
      <div className="relative aspect-video overflow-hidden">
        {isMobile ? (
          <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
            <div className="relative w-[45%] h-[90%]">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-contain rounded-xl"
              />
            </div>
          </div>
        ) : (
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="ext-xs dark:bg-black/50 dark:backdrop-blur-sm bg-black/80 text-white">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="outline" className="text-xs bg-black/50 backdrop-blur-sm">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
        
        {/* Display category badges */}
        <div className="flex flex-wrap gap-1 pt-2">
          {project.categories.map((category) => (
            <Badge key={category} variant="outline" className="text-xs border-primary/10 bg-primary/5">
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

