"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Github } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          <span className="glow-text">DEV</span>FOLIO
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary font-medium" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}

          <ThemeToggle />
          
          <Link href="https://github.com/ksmit323" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>

          <Button asChild size="sm">
            <a href="#contact">Hire Me</a>
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-sm">
          <nav className="container flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`text-lg py-2 transition-colors hover:text-primary ${
                  pathname === link.href ? "text-primary font-medium" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}

            <Button asChild className="mt-4">
              <a href="#contact" onClick={closeMenu}>
                Hire Me
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

