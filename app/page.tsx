"use client"

import { useState } from "react"
import { About } from "@/components/about"
import { ContactForm } from "@/components/contact-form"
import { HeroSection } from "@/components/hero-section"
import { projects } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"
import { ProjectFilter } from "@/components/project-filter"
import { Testimonials } from "@/components/testimonials"
import type { ProjectType } from "@/lib/projects"
import { motion, AnimatePresence } from "framer-motion"


export default function Home() {
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(projects)

  return (
    <main className="flex flex-col min-h-screen relative">
      <HeroSection />

      {/* Projects Section */}
      <section id="projects" className="container py-12 space-y-8 relative z-10">
        
        {/* Project Filter */}
        <ProjectFilter projects={projects} onFilterChange={setFilteredProjects} />

        {/* Project Grid with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-full flex flex-col items-center justify-center py-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                <p className="text-muted-foreground max-w-md">
                  No projects match the selected filter. Try selecting a different category.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10">
        <About />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container py-12 relative z-10">
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10">
        <ContactForm />
      </section>

      {/* Project Modal - Will be controlled by state in ProjectCard */}
      <ProjectModal />
    </main>
  )
}

