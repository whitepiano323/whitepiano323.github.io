"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { Linkedin, Mail, Send, Check } from "lucide-react"

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        setIsSubmitted(true)
        setFormState({ name: "", email: "", message: "" })
      } else {
        console.error("Form submission failed")
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false) 
    } 
  }

  return (
    <section className="py-12 md:py-24 bg-muted/50 relative z-10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold tracking-wider text-center mb-10 relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Get in Touch
            </span>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 relative">
              
              <p className="text-blue-100/80 relative backdrop-blur-sm bg-indigo-950/10 p-5 rounded-lg border border-indigo-500/20 shadow-[0_4px_20px_-12px_rgba(79,70,229,0.4)]">
                Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you. Fill out
                the form or reach out through any of the channels below.
              </p>
          
              <div className="space-y-4 pt-4 relative">
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full justify-start bg-indigo-950/30 border-indigo-500/30 text-blue-300 hover:bg-indigo-900/40 hover:border-indigo-400/40 hover:text-blue-200 backdrop-blur-sm transition-all duration-300 group"
                >
                  <a href="mailto:ksmit323@gmail.com" className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute -inset-0.5 rounded-full blur-[1px] bg-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <Mail className="h-4 w-4 relative" />
                    </div>
                    <span className="font-mono tracking-wide">ksmit323@gmail.com</span>
                  </a>
                </Button>
          
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full justify-start bg-indigo-950/30 border-indigo-500/30 text-blue-300 hover:bg-indigo-900/40 hover:border-indigo-400/40 hover:text-blue-200 backdrop-blur-sm transition-all duration-300 group"
                >
                  <a
                    href="https://www.linkedin.com/in/kenneth-smith-50553493/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <div className="relative">
                      <div className="absolute -inset-0.5 rounded-full blur-[1px] bg-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <Linkedin className="h-4 w-4 relative" />
                    </div>
                    <span className="font-mono tracking-wide truncate">linkedin.com/in/kenneth-smith-50553493</span>
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              {!isSubmitted && (
                <form onSubmit={handleSubmit} className="space-y-6 relative bg-gradient-to-b from-indigo-900/20 to-black/30 backdrop-blur-sm p-6 rounded-xl border border-indigo-500/20 shadow-[0_0_10px_rgba(79,70,229,0.2)]">
                  <div className="absolute top-0 right-0 w-full h-full overflow-hidden rounded-xl opacity-10 pointer-events-none">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-400 rounded-full filter blur-3xl"></div>
                    <div className="absolute left-0 bottom-0 w-32 h-32 bg-violet-500 rounded-full filter blur-3xl"></div>
                  </div>
                  
                  <div className="space-y-2 relative">
                    <Label htmlFor="name" className="text-blue-100 font-medium">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="bg-indigo-950/40 border-indigo-500/30 focus:border-blue-400/70 focus:ring-1 focus:ring-blue-400/50 text-blue-100 placeholder:text-blue-300/40 transition-all duration-300"
                    />
                  </div>
              
                  <div className="space-y-2 relative">
                    <Label htmlFor="email" className="text-blue-100 font-medium">Your email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="hello@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="bg-indigo-950/40 border-indigo-500/30 focus:border-blue-400/70 focus:ring-1 focus:ring-blue-400/50 text-blue-100 placeholder:text-blue-300/40 transition-all duration-300"
                    />
                  </div>
              
                  <div className="space-y-2 relative">
                    <Label htmlFor="message" className="text-blue-100 font-medium">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="bg-indigo-950/40 border-indigo-500/30 focus:border-blue-400/70 focus:ring-1 focus:ring-blue-400/50 text-blue-100 placeholder:text-blue-300/40 resize-none transition-all duration-300"
                    />
                  </div>
              
                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white border-none relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease]"></div>
                    
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                        <span className="tracking-wide">Sending...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                          <path d="M21 3L14 10M21 3L15 21L10 14L3 9L21 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="tracking-wide">Send Message</span>
                      </span>
                    )}
                  </Button>
                  
                  <div className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
                </form>
              )}

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="h-full flex flex-col items-center justify-center text-center p-8 rounded-xl bg-gradient-to-br from-indigo-900/90 to-black/80 backdrop-blur-sm border border-indigo-500/30 shadow-[0_0_15px_rgba(79,70,229,0.5)]"
                >
                  <div className="relative w-20 h-20 mb-6">
                    <div className="absolute inset-0 rounded-full bg-violet-600/20 animate-pulse"></div>
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                      <Check className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -inset-2 bg-transparent border-2 border-indigo-400/30 rounded-full animate-[spin_6s_linear_infinite]"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white tracking-wide">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                      Message Transmitted!
                    </span>
                  </h3>
                  
                  <p className="text-blue-100/80 mb-8 max-w-sm">
                    Your signal has been received across the cosmos. I will get back to you as soon as I can.
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="border border-indigo-500/50 bg-indigo-900/30 text-blue-300 hover:bg-indigo-800/50 hover:text-blue-200 transition-all duration-300 backdrop-blur-sm group"
                    onClick={() => setIsSubmitted(false)}
                  >
                    <span className="mr-2 opacity-70 group-hover:opacity-100 transition-opacity">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline">
                        <path d="M21 3L14 10M21 3L15 21L10 14L3 9L21 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    Send Another Message
                  </Button>
                </motion.div>              
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

