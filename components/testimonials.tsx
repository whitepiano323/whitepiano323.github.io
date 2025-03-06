"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    content:
      "Working with this developer was an absolute pleasure. They took my vague ideas and transformed them into a stunning website that perfectly represents my brand. Their attention to detail and technical expertise are truly impressive.",
    author: "Sarah Johnson",
    role: "Founder, Creative Studio",
  },
  {
    id: 2,
    content:
      "I've worked with many developers over the years, but none have delivered such high-quality work with such efficiency. They not only met our technical requirements but also provided valuable insights that improved our overall product.",
    author: "Michael Chen",
    role: "CTO, Tech Startup",
  },
  {
    id: 3,
    content:
      "Our e-commerce site needed a complete overhaul, and they delivered beyond our expectations. The site is not only beautiful but also performs exceptionally well. Our conversion rates have increased by 40% since the redesign.",
    author: "Emily Rodriguez",
    role: "Marketing Director, Retail Brand",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Client Testimonials</h2>

      <div className="relative overflow-hidden rounded-lg border p-6 md:p-8">
        <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/10" />

        <div className="min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center space-y-4"
            >
              <p className="text-lg italic max-w-3xl mx-auto">"{testimonials[currentIndex].content}"</p>
              <div>
                <p className="font-semibold">{testimonials[currentIndex].author}</p>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          <Button variant="outline" size="icon" onClick={prevTestimonial} aria-label="Previous testimonial">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextTestimonial} aria-label="Next testimonial">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

