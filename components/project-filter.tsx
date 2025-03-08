"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ProjectType } from "@/lib/projects"
import { Filter } from "lucide-react"

interface ProjectFilterProps {
  projects: ProjectType[]
  onFilterChange: (filteredProjects: ProjectType[]) => void
}

type Category = "all" | "frontend" | "backend" | "blockchain" | "mobile" | "cloud"

interface FilterOption {
  value: Category
  label: string
}

export function ProjectFilter({ projects, onFilterChange }: ProjectFilterProps) {
  const [activeFilter, setActiveFilter] = useState<Category>("all")
  const [isOpen, setIsOpen] = useState(false)

  const filterOptions: FilterOption[] = [
    { value: "all", label: "All Projects" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "blockchain", label: "Blockchain" },
    { value: "mobile", label: "Mobile" },
    { value: "cloud", label: "Cloud" },
  ]

  // Apply filter when active filter changes - updated to handle multiple categories
  useEffect(() => {
    const filteredProjects =
      activeFilter === "all" ? projects : projects.filter((project) => project.categories.includes(activeFilter))

    onFilterChange(filteredProjects)
  }, [activeFilter, projects, onFilterChange])

  return (
    <div className="w-full mb-8">
      {/* Desktop filter */}
      <div className="hidden md:flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mr-2">
          <Filter className="h-4 w-4" />
          <span>Filter:</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <FilterButton
              key={option.value}
              isActive={activeFilter === option.value}
              onClick={() => setActiveFilter(option.value)}
            >
              {option.label}
            </FilterButton>
          ))}
        </div>
      </div>

      {/* Mobile filter dropdown */}
      <div className="md:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
            <span>Filter:</span>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 border-primary/20"
          >
            {filterOptions.find((option) => option.value === activeFilter)?.label}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </Button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden mt-2"
            >
              <div className="flex flex-col gap-2 p-2 rounded-md border border-primary/20 bg-black/50 backdrop-blur-sm">
                {filterOptions.map((option) => (
                  <Button
                    key={option.value}
                    variant={activeFilter === option.value ? "default" : "ghost"}
                    size="sm"
                    onClick={() => {
                      setActiveFilter(option.value)
                      setIsOpen(false)
                    }}
                    className={activeFilter === option.value ? "bg-primary" : "hover:bg-primary/10"}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Active filter indicator with count of matching projects */}
      <div className="mt-4 flex items-center gap-2">
        <span className="text-xs text-muted-foreground">Showing:</span>
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
          {filterOptions.find((option) => option.value === activeFilter)?.label}
        </span>

        {/* Count badge - shows how many projects match the current filter */}
        {activeFilter !== "all" && (
          <span className="text-xs px-2 py-1 rounded-full bg-muted/30 text-muted-foreground">
            {projects.filter((project) => project.categories.includes(activeFilter)).length} projects
          </span>
        )}
      </div>
    </div>
  )
}

interface FilterButtonProps {
  isActive: boolean
  onClick: () => void
  children: React.ReactNode
}

function FilterButton({ isActive, onClick, children }: FilterButtonProps) {
  return (
    <Button
      variant={isActive ? "default" : "outline"}
      size="sm"
      onClick={onClick}
      className={`relative ${
        isActive ? "bg-primary text-white" : "border-primary/20 hover:bg-primary/10 hover:text-primary"
      }`}
    >
      {children}
      {isActive && (
        <motion.span
          layoutId="activeFilterIndicator"
          className="absolute inset-0 rounded-md bg-primary -z-10"
          transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
        />
      )}
    </Button>
  )
}

