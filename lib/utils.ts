import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { ProjectType } from "@/lib/projects"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isMobileApp(project: ProjectType): boolean {
  return project.tags.includes("Mobile");
}