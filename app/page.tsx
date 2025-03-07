import { ProjectCard } from "@/components/project-card"
import { HeroSection } from "@/components/hero-section"
import { AboutPreview } from "@/components/about-preview"
import { ContactCta } from "@/components/contact-cta"
import { projects } from "@/lib/projects"
import { Testimonials } from "@/components/testimonials"
import { ProjectModal } from "@/components/project-modal"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative">
      <HeroSection />

      {/* Portfolio Section */}
      <section id="portfolio" className="container py-12 space-y-8 relative z-10">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">My Projects</h2>
          <p className="text-muted-foreground mt-2">A selection of my best work and recent client projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10">
        <AboutPreview />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container py-12 relative z-10">
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10">
        <ContactCta />
      </section>

      {/* Project Modal - Will be controlled by state in ProjectCard */}
      <ProjectModal />
    </main>
  )
}

