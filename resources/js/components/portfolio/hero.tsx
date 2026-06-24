import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
// import Portrait from '@/../images/professional-developer-portrait-mark-francis-galan.jpg'
export function Hero() {
    // console.log(Portrait)
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden"
        >
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="animate-float absolute top-20 left-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
                <div className="animate-float absolute right-10 bottom-20 h-[500px] w-[500px] rounded-full bg-blue-400/15 blur-3xl delay-300" />
                <div className="animate-pulse-glow absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />

                {/* Floating geometric shapes */}
                <div className="animate-float-slow absolute top-1/4 right-1/4 h-24 w-24 rotate-12 rounded-lg border-2 border-blue-500/30" />
                <div className="animate-float-slow absolute bottom-1/3 left-1/4 h-20 w-20 rotate-45 border-2 border-blue-400/30 delay-500" />
                <div className="animate-float-slow absolute top-1/3 left-1/3 h-16 w-16 rounded-full border-2 border-blue-300/20 delay-700" />
            </div>

            <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fadeInUp space-y-6 opacity-0">
                            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-blue-600/10 px-4 py-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                                </span>
                                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                    Available for opportunities
                                </p>
                            </div>

                            <h1 className="text-5xl leading-tight font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
                                Hi, I'm{' '}
                                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                                    Mark Francis Galan
                                </span>
                            </h1>
                            <p className="text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
                                A passionate{' '}
                                <span className="font-semibold text-foreground">
                                    Full-Stack Developer
                                </span>{' '}
                                and BSIT graduate, crafting scalable
                                applications that solve real-world problems with
                                elegant code.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="animate-fadeInUp flex flex-wrap items-center gap-4 opacity-0 delay-200">
                            <Button
                                asChild
                                size="lg"
                                className="gap-2 bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                            >
                                <a href="#contact">
                                    <Mail className="h-4 w-4" />
                                    Get in Touch
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="gap-2 bg-transparent transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:bg-blue-500/10"
                            >
                                <a
                                    href="https://drive.google.com/file/d/1ndrqh7fKsXt1ZvlzAUhNqas-YWkjXbGU/view?usp=drive_link"
                                    download
                                >
                                    <Download className="h-4 w-4" />
                                    Download Resume
                                </a>
                            </Button>
                        </div>

                        <div className="animate-fadeInUp flex items-center gap-6 pt-4 opacity-0 delay-300">
                            <a
                                href="https://github.com/undefinedtag/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground transition-all duration-300 hover:scale-125 hover:text-blue-500"
                            >
                                <Github className="h-6 w-6" />
                            </a>
                            <a
                                href="www.linkedin.com/in/mark-francis-galan/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground transition-all duration-300 hover:scale-125 hover:text-blue-500"
                            >
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a
                                href="mailto:francisgalan21@gmail.com"
                                className="text-muted-foreground transition-all duration-300 hover:scale-125 hover:text-blue-500"
                            >
                                <Mail className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="animate-fadeInRight relative opacity-0 delay-400">
                        <div className="group relative">
                            <div className="relative aspect-square overflow-hidden rounded-2xl bg-transparent">
                                <img
                                    src="/images/professional-developer-portrait-mark-francis-galan.png"
                                    alt="Mark Francis Galan"
                                    className="h-full w-full scale-95 object-cover transition-transform duration-500 group-hover:scale-100"
                                />
                                {/* Vignette overlay */}
                                {/*<div className="absolute inset-0 bg-radial-vignette pointer-events-none" />*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
