"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, FileText, Eye, EyeOff, X, ZoomIn } from "lucide-react"

export function Cv() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showFullPreview, setShowFullPreview] = useState(false)

  // Handle escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showFullPreview) {
        setShowFullPreview(false)
      }
    }

    // Add event listener when modal is open
    if (showFullPreview) {
      window.addEventListener('keydown', handleKeyDown)
    }

    // Cleanup event listener on component unmount or when modal closes
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [showFullPreview]) // Only re-run effect when showFullPreview changes

  const handleDownload = () => {
    const cvPdf = "/Kenneth_Smith_CV.pdf"
    const link = document.createElement("a")
    link.href = cvPdf
    link.download = "Kenneth_Smith_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <div className="w-full max-w-3xl mx-auto">
        <div className="flex flex-col space-y-6">
          {/* CV Preview Card */}
          <motion.div
            className="relative overflow-hidden rounded-lg border border-primary/20 bg-black/50 shadow-lg glow-border cursor-pointer"
            animate={{ height: isExpanded ? "auto" : "300px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={() => setShowFullPreview(true)}
          >
            {/* CV Preview Header */}
            <div 
              className="absolute top-0 left-0 right-0 h-12 bg-primary/10 backdrop-blur-sm border-b border-primary/20 flex items-center justify-between px-4 z-10"
              onClick={(e) => e.stopPropagation()} // Prevent header clicks from triggering the popup
            >
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Curriculum Vitae</span>
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowFullPreview(true);
                  }} 
                  className="h-8 px-2 text-xs"
                >
                  <ZoomIn className="h-3.5 w-3.5 mr-1" />
                  Preview
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(!isExpanded);
                  }} 
                  className="h-8 px-2 text-xs"
                >
                  {isExpanded ? (
                    <>
                      <EyeOff className="h-3.5 w-3.5 mr-1" />
                      Collapse
                    </>
                  ) : (
                    <>
                      <Eye className="h-3.5 w-3.5 mr-1" />
                      Expand
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* CV Preview Content */}
            <div className="pt-16 px-6 pb-6">
              {/* CV Image Preview */}
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto mb-6 rounded-md overflow-hidden border border-muted/30 group">
                <Image src="/cv.webp?height=800&width=600" alt="CV Preview" fill className="object-contain" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                  <ZoomIn className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Button onClick={handleDownload} size="lg" className="bg-primary hover:bg-primary/80 text-white group">
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              Download Full CV
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Full-screen CV Preview */}
      <AnimatePresence>
        {showFullPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setShowFullPreview(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-w-4xl w-full h-[85vh] bg-card rounded-xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 h-14 bg-primary/10 backdrop-blur-sm border-b border-primary/20 flex items-center justify-between px-6 z-10">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="text-base font-medium">Curriculum Vitae - Detailed Preview</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground mr-2 hidden sm:inline">Press ESC to close</span>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setShowFullPreview(false)}
                    className="h-9 w-9 rounded-full"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="h-full pt-14 pb-4 px-4 overflow-auto">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image 
                    src="/cv.webp?height=1200&width=900" 
                    alt="CV Full Preview" 
                    width={900} 
                    height={1200} 
                    className="object-contain max-h-full rounded-md shadow-lg"
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent flex items-center justify-center">
                <Button onClick={handleDownload} size="lg" className="bg-primary hover:bg-primary/80 text-white">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
