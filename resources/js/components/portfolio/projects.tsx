'use client';

import {
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    Github,
    Sparkles,
    X,
    Zap,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const projects = [
    {
        title: 'Ride-Hailing App',
        description:
            'A comprehensive ride-hailing platform with real-time driver-passenger tracking, built for seamless urban transportation.',
        tech: [
            'React Native',
            'Laravel',
            'Node.js',
            'Google Maps API',
            'Firebase',
        ],
        image: 'https://cdn.prod.website-files.com/5f9ff3f1191b5c62e3fb4c26/61a59ee6833d3904d662989c_shutterstock_1832852956%20(1).jpg',
        features: [
            'Real-time GPS tracking',
            'Payment integration',
            'Driver-passenger matching',
            'Route optimization',
        ],
        screenshots: [
            {
                url: 'https://cdn.prod.website-files.com/5f9ff3f1191b5c62e3fb4c26/61a59ee6833d3904d662989c_shutterstock_1832852956%20(1).jpg',
                title: 'Ride Booking Interface',
                description:
                    'Intuitive user interface with easy ride booking, driver tracking, and payment integration features for seamless urban transportation.',
            },
        ],
        demoDescription:
            'A comprehensive ride-hailing application demonstrating a complete platform for urban transportation. Users can book rides, track drivers in real-time using Google Maps API, and make secure payments. The app is built with React Native for cross-platform mobile compatibility and Node.js backend for handling real-time events and driver-passenger matching algorithms.',
    },
    {
        title: 'CulturaLink',
        description:
            'A cultural exchange platform connecting people worldwide through shared travel experiences, local tips, and community-driven itineraries.',
        tech: ['React', 'Node.js', 'MongoDB', 'Google Maps API', 'Firebase'],
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/landingpage-XvUu1GGCtNqNxW2vn0742zgUDQLPwn.png',
        features: [
            'Itinerary creation',
            'Interactive maps',
            'Community tips & budgets',
            'Real-time sharing',
        ],
        screenshots: [
            {
                url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/landingpage-XvUu1GGCtNqNxW2vn0742zgUDQLPwn.png',
                title: 'Landing Page',
                description:
                    "Professional landing page introducing CulturaLink with the mission 'Share. Learn. Connect.' Features hero section with device mockups showcasing the platform's responsive design across desktop and mobile.",
            },
            {
                url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/itinerary-hr1Wg3f8Wu1sNWS2ZIeq1Kt6MX6Awx.png',
                title: 'Itinerary Detail Page',
                description:
                    'Comprehensive itinerary view showing travel guides with featured images, curated tips, budget recommendations, and an integrated Google Map with location pins for easy navigation.',
            },
            {
                url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/itinerariespage-OJPMr9lLQRAa8xxfa9YFu778CELsDi.png',
                title: 'Itineraries Browse',
                description:
                    'Grid layout showcasing multiple itineraries with preview cards, allowing users to browse and discover new cultural experiences and travel guides from the community.',
            },
            {
                url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/homepage-NyL7cH7YIYIDeLJqXCnBYZpkLHrsQB.png',
                title: 'Home Feed',
                description:
                    'Social feed displaying community posts with cultural highlights, user interactions, and content sharing. Features a post creation interface with image uploads and category selection.',
            },
            {
                url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/landingpage_mv-cWVdvlTmeDrEkDvKjQo4jsDKvR8fWJ.png',
                title: 'Mobile Landing',
                description:
                    "Fully responsive mobile version of the landing page with optimized typography and touch-friendly interface maintaining the platform's core messaging.",
            },
            {
                url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/homepage_mv-GKp2ydc0OFvC73TbuZ2V5AXG1bWBgW.png',
                title: 'Mobile Home',
                description:
                    'Mobile-optimized home feed with streamlined navigation, quick post creation, and easy access to user content and community stories.',
            },
            {
                url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/itinerary_mobile_view-5HVKgPsjU9El03Lybie6WKvuMtrHJm.png',
                title: 'Mobile Itinerary',
                description:
                    'Mobile itinerary view with responsive layout showcasing itinerary stops, integrated map navigation, and detailed location information optimized for on-the-go travel planning.',
            },
            {
                url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/itinerary_creation_mv-HNUklMJypy5bpbyF1rD6v2iy1RqFbg.png',
                title: 'Create Itinerary Mobile',
                description:
                    'Mobile interface for creating custom itineraries with fields for location details, budget planning, tips sharing, and stop management on touch devices.',
            },
        ],
        demoDescription:
            "CulturaLink is an innovative platform designed to connect global travelers through shared cultural experiences. Users can create personalized itineraries for destinations like Manila's Binondo Food Guide, discover community-curated tips and budgets, and share their travel stories. The platform integrates Google Maps for navigation, features a dynamic social feed for community engagement, and provides comprehensive travel planning tools with both desktop and mobile experiences optimized for seamless discovery and sharing.",
    },
    {
        title: 'PilPal: IoE Project',
        description:
            'An Internet of Everything prototype for real-time health monitoring, integrating IoT sensors with data visualization.',
        tech: ['IoT Sensors', 'Firebase', 'React', 'Chart.js', 'Arduino'],
        image: 'https://media.istockphoto.com/id/1325352626/vector/medical-blue-capsule-with-clock-on-blue-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=Dzhh2eG0E7l9nM7UUGywALVuD6Lv-jYX9GZI7NYHgdg=',
        features: [
            'Real-time sensor data',
            'Health metrics visualization',
            'Alert notifications',
            'Historical data analysis',
        ],
        screenshots: [
            {
                url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u1ct1dowcYavPSqoFGRtJYLSF85yRX.png',
                title: 'Hardware Integration',
                description:
                    'IoT sensor hardware setup including Arduino boards, health monitoring sensors, and wireless transmission modules for real-time data collection.',
            },
        ],
        demoDescription:
            'PilPal is an innovative Internet of Everything (IoE) project focused on real-time health monitoring. It integrates multiple IoT sensors with an Arduino microcontroller to collect health metrics like heart rate, body temperature, and oxygen levels. The React-based dashboard visualizes this data using Chart.js and sends alert notifications via Firebase when anomalies are detected.',
    },
];

function DemoModal({
    project,
    isOpen,
    onClose,
}: {
    project: (typeof projects)[0] | null;
    isOpen: boolean;
    onClose: () => void;
}) {
    const [currentScreenshot, setCurrentScreenshot] = useState(0);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'unset';
            };
        }
    }, [isOpen]);

    if (!isOpen || !project) return null;

    const goToPrevious = () => {
        setCurrentScreenshot((prev) =>
            prev === 0 ? project.screenshots.length - 1 : prev - 1,
        );
    };

    const goToNext = () => {
        setCurrentScreenshot((prev) =>
            prev === project.screenshots.length - 1 ? 0 : prev + 1,
        );
    };

    return (
        <div className="backdrop-blur-0 animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/0 p-4">
            <div
                className="animate-fade-in absolute inset-0 bg-black/60 backdrop-blur-md"
                onClick={onClose}
                style={{ animation: 'fadeIn 0.3s ease-out' }}
            />

            <div
                ref={modalRef}
                className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl dark:bg-slate-800"
                style={{
                    animation:
                        'modalPopIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
            >
                

                {/* Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between rounded-t-3xl bg-gradient-to-r from-cyan-600 to-emerald-600 p-6 text-white shadow-lg md:p-8">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold md:text-3xl">
                            {project.title}
                        </h2>
                        <p className="mt-1 text-sm text-cyan-100">
                            Project Showcase & Demo
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-full p-2 transition-all duration-200 hover:scale-110 hover:bg-white/20"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <div className="space-y-8 p-6 md:p-8">
                    {/* Description */}
                    <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-slate-600/50 dark:from-slate-700/30 dark:to-slate-700/50">
                        <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                            <Sparkles className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                            Project Overview
                        </h3>
                        <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                            {project.demoDescription}
                        </p>
                    </div>

                    {/* Screenshots Gallery */}
                    <div className="space-y-4">
                        <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
                            <ExternalLink className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                            Project Screenshots
                        </h3>

                        {/* Main Screenshot */}
                        <div
                            className="relative aspect-video overflow-hidden rounded-2xl border border-slate-300 bg-slate-200 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:border-slate-600 dark:bg-slate-700"
                            style={{
                                animation:
                                    'slideInImage 0.6s ease-out 0.1s both',
                            }}
                        >
                            <img
                                src={
                                    project.screenshots[currentScreenshot]
                                        .url || '/placeholder.svg'
                                }
                                alt={
                                    project.screenshots[currentScreenshot].title
                                }
                                className="h-full w-full object-cover"
                            />

                            {/* Navigation Buttons */}
                            {project.screenshots.length > 1 && (
                                <>
                                    <button
                                        onClick={goToPrevious}
                                        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all duration-200 hover:scale-110 hover:bg-black/70 hover:shadow-lg"
                                    >
                                        <ChevronLeft className="h-6 w-6" />
                                    </button>
                                    <button
                                        onClick={goToNext}
                                        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all duration-200 hover:scale-110 hover:bg-black/70 hover:shadow-lg"
                                    >
                                        <ChevronRight className="h-6 w-6" />
                                    </button>

                                    {/* Screenshot Counter */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                                        {currentScreenshot + 1} /{' '}
                                        {project.screenshots.length}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Screenshot Info */}
                        <div
                            className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-sm dark:border-slate-600/50 dark:from-slate-700/30 dark:to-slate-700/50"
                            style={{
                                animation:
                                    'slideInImage 0.6s ease-out 0.15s both',
                            }}
                        >
                            <h4 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                                {project.screenshots[currentScreenshot].title}
                            </h4>
                            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                                {
                                    project.screenshots[currentScreenshot]
                                        .description
                                }
                            </p>
                        </div>

                        {/* Thumbnail Navigation */}
                        {project.screenshots.length > 1 && (
                            <div className="flex gap-3 overflow-x-auto scroll-smooth pb-2">
                                {project.screenshots.map(
                                    (screenshot, index) => (
                                        <button
                                            key={index}
                                            onClick={() =>
                                                setCurrentScreenshot(index)
                                            }
                                            className={`h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-200 hover:scale-110 ${
                                                index === currentScreenshot
                                                    ? 'scale-110 border-cyan-600 shadow-lg dark:border-cyan-400'
                                                    : 'border-slate-300 opacity-70 hover:border-cyan-400 hover:opacity-100 dark:border-slate-600'
                                            }`}
                                        >
                                            <img
                                                src={
                                                    screenshot.url ||
                                                    '/placeholder.svg'
                                                }
                                                alt={`Thumbnail ${index + 1}`}
                                                className="h-full w-full object-cover"
                                            />
                                        </button>
                                    ),
                                )}
                            </div>
                        )}
                    </div>

                    {/* Tech Stack */}
                    <div
                        className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-sm dark:border-slate-600/50 dark:from-slate-700/30 dark:to-slate-700/50"
                        style={{
                            animation: 'slideInImage 0.6s ease-out 0.2s both',
                        }}
                    >
                        <h4 className="mb-4 flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                            <Zap className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                            Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="rounded-full border border-cyan-600/50 bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Projects() {
    const [visibleCards, setVisibleCards] = useState<number[]>([]);
    const [selectedProject, setSelectedProject] = useState<
        (typeof projects)[0] | null
    >(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [parallaxOffset, setParallaxOffset] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        setVisibleCards(projects.map((_, i) => i));
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const offset = rect.top * 0.5;
                setParallaxOffset(offset);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDemoClick = (project: (typeof projects)[0]) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-32 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
        >
            <div className="absolute inset-0 -z-10">
                <div
                    className="animate-float-enhanced absolute top-10 right-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/15 to-cyan-500/10 blur-3xl delay-200"
                    style={{
                        transform: `translateY(${parallaxOffset * 0.3}px)`,
                    }}
                />
                <div
                    className="animate-float-enhanced absolute bottom-20 left-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-emerald-500/10 to-blue-600/10 blur-3xl delay-500"
                    style={{
                        transform: `translateY(${parallaxOffset * 0.4}px)`,
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20 space-y-4">
                    <div className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-4 py-2 backdrop-blur-sm">
                        <p className="flex items-center gap-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-sm font-medium text-transparent">
                            <Sparkles className="h-4 w-4 text-cyan-400" />
                            My Work
                        </p>
                    </div>
                    <h2 className="text-5xl font-bold tracking-tight text-slate-900 md:text-6xl lg:text-7xl dark:text-white">
                        Featured{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
                            Projects
                        </span>
                    </h2>
                    <p className="max-w-2xl text-xl leading-relaxed text-slate-600 dark:text-slate-300">
                        A selection of projects showcasing my expertise in
                        full-stack development, from mobile apps to IoT
                        solutions.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                cardRefs.current[index] = el;
                            }}
                            className={`${visibleCards.includes(index) ? 'animate-scale-in opacity-100' : 'opacity-100'}`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="group relative h-full">
                                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-blue-600/40 via-cyan-500/30 to-emerald-500/20 opacity-0 blur transition duration-500 group-hover:opacity-60"></div>

                                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white backdrop-blur-sm transition-all duration-500 group-hover:border-cyan-500/50 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 hover:-translate-y-2 dark:border-slate-700/50 dark:bg-slate-800/50">
                                    <div className="relative aspect-video overflow-hidden bg-slate-200 dark:bg-slate-700">
                                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-cyan-600/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                        <img
                                            src={
                                                project.image ||
                                                '/placeholder.svg'
                                            }
                                            alt={project.title}
                                            className="h-full w-full object-cover brightness-75 group-hover:brightness-100"
                                        />
                                    </div>

                                    <div className="flex flex-1 flex-col space-y-4 p-6">
                                        <div>
                                            <h3 className="mb-2 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-300">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="space-y-2">
                                            <p className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-xs font-semibold tracking-wider text-transparent uppercase dark:from-blue-400 dark:to-cyan-400">
                                                Key Features
                                            </p>
                                            <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                                                {project.features.map(
                                                    (feature, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex items-start gap-2 transition-colors duration-200 hover:text-cyan-600 dark:hover:text-cyan-300"
                                                        >
                                                            <Zap className="mt-1 h-3 w-3 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
                                                            {feature}
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {project.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="rounded-full border border-cyan-500/30 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-700 dark:text-cyan-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-auto flex gap-3 pt-4">
                                            <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-transparent px-4 py-2 text-slate-700 transition-all duration-300 hover:scale-105 hover:border-cyan-500/50 hover:text-cyan-600 dark:border-slate-600 dark:text-slate-300 dark:hover:text-cyan-300">
                                                <Github className="h-4 w-4" />
                                                Code
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDemoClick(project)
                                                }
                                                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-emerald-600 px-4 py-2 text-white transition-transform duration-300 hover:scale-105 hover:from-cyan-500 hover:to-emerald-500"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                                Demo
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <DemoModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}
