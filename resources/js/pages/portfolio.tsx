"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react"
import { Hero } from "@/components/portfolio/hero"
import { Projects } from "@/components/portfolio/projects"
import { ExperienceTechStack} from "@/components/portfolio/experience"
import { Education } from "@/components/portfolio/education"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"
import { Blog } from "@/components/portfolio/blog"
import { CTA } from "@/components/portfolio/cta"
import { Header } from "@/components/portfolio/header"
import { ThemeProvider } from "@/components/portfolio/theme-provider"
import { Services } from "@/components/portfolio/services"
import { Pricing} from "@/components/portfolio/pricing"
import { Roadmap } from "@/components/portfolio/roadmap"
import { Stats } from "@/components/portfolio/stats"
import { Team } from "@/components/portfolio/team"
import { Testimonials } from "@/components/portfolio/testimonials"

export default function Portfolio() {
    const [darkMode, setDarkMode] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [darkMode])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative overflow-hidden">
            <div
                className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
                }}
            />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <a
                            href="#home"
                            className="text-lg font-semibold tracking-tight hover:text-primary transition-colors duration-300"
                        >
                            Mark Francis Galan
                        </a>

                        <div className="hidden md:flex items-center gap-8">
                            <a
                                href="#projects"
                                className="text-sm text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300"
                            >
                                Projects
                            </a>
                            <a
                                href="#experience"
                                className="text-sm text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300"
                            >
                                Experience
                            </a>
                            <a
                                href="#education"
                                className="text-sm text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300"
                            >
                                Education
                            </a>
                            <a
                                href="#contact"
                                className="text-sm text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300"
                            >
                                Contact
                            </a>
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setDarkMode(!darkMode)}
                            className="rounded-full hover:scale-110 hover:rotate-180 transition-all duration-500"
                        >
                            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-16 relative z-10">
                <Hero />
                <Projects />
                <ExperienceTechStack />
                <Education />
                {/*<Stats />*/}
                {/*<Services />*/}
                {/*<Roadmap />*/}
                {/*<Team />*/}
                {/*<Pricing />*/}
                {/*<Blog />*/}
                {/*<Testimonials />*/}
                {/*<CTA />*/}
                {/*<Footer />*/}
                <Contact />

            </main>

            {/* Footer */}
            <footer className="border-t border-border/40 py-8 mt-24 relative z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-muted-foreground">© 2025 Mark Francis Galan. Built with React & Firebase.</p>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com/undefinedtag"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground hover:scale-125 hover:rotate-12 transition-all duration-300"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mark-francis-galan/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground hover:scale-125 hover:rotate-12 transition-all duration-300"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="mailto:francisgalan21@gmail.com"
                                className="text-muted-foreground hover:text-foreground hover:scale-125 hover:rotate-12 transition-all duration-300"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
