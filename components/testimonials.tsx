"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    content:
      "Kenneth did an amazing job transforming my bad Wordpress site into a more professional fully featured landing page.  I'm very happy to have worked together.",
    author: "Robert Pearl",
    role: "Founder, GSF",
  },
  {
    id: 2,
    content:
      "We needed a lot of help building our computer vision algorith to detect manufacturing defects.  Kenneth came in and immediately hit the ground running.  He sped up our progress tremendously and we were able to push to production very quickly.  Hiring him was obviously the right move.",
    author: "Trevor Thill",
    role: "VP of Operations, Polaris",
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

