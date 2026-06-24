'use client';

import { Award, Calendar, MapPin, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function Education() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="education"
            className="relative overflow-hidden bg-background py-32"
        >
            <div className="absolute inset-0 -z-10">
                <div className="animate-pulse-glow absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-3xl" />
                <div className="animate-pulse-glow absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-400/5 blur-3xl delay-700" />
                <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] animate-pulse rounded-full bg-blue-300/5 blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-24 space-y-4 text-center">
                    <div className="inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2">
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            Academic Journey
                        </p>
                    </div>
                    <h2 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                        Education
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Building expertise through rigorous academic training
                        and prestigious scholarships
                    </p>
                </div>

                <div ref={sectionRef} className="mx-auto max-w-4xl">
                    {/* Timeline line */}

                    <div className="space-y-12 md:space-y-16">
                        {/* Degree Card */}
                        <div
                            className={`group relative transition-all duration-700 ${
                                isVisible
                                    ? 'translate-x-0 opacity-100'
                                    : '-translate-x-12 opacity-0'
                            }`}
                        >
                            <div className="md:flex md:items-center md:gap-8">
                                {/* Timeline dot */}
                                <div className="hidden md:flex md:w-20 md:flex-col md:items-center">
                                    <div className="relative z-10 h-6 w-6 rounded-full border-4 border-background bg-blue-600 shadow-lg shadow-blue-500/50" />
                                </div>

                                {/* Card */}
                                <div className="flex-1">
                                    <div className="group/card relative">
                                        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 blur transition duration-500 group-hover/card:opacity-30" />
                                        <div className="relative rounded-2xl border border-blue-500/20 bg-background p-8 transition-all duration-500 hover:border-blue-500/40 md:p-10">
                                            <div className="mb-6 flex items-start justify-between">
                                                <div className="flex items-center gap-4">
                                                    <img
                                                        src="/images/sdcaLogo.png"
                                                        alt="SDCA Logo"
                                                        className="size-14 -rotate-12 rounded-full border-2 border-blue-500/30 shadow-lg shadow-blue-500/20 transition-transform duration-300 hover:rotate-0"
                                                    />

                                                    <div>
                                                        <h3 className="text-2xl font-bold md:text-3xl">
                                                            B.S. in Information
                                                            Technology
                                                        </h3>
                                                        <div className="mt-2 flex items-center gap-3">
                                                            <p className="font-semibold text-blue-600 dark:text-blue-400">
                                                                St. Dominic
                                                                College of Asia
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold whitespace-nowrap text-blue-600 dark:text-blue-400">
                                                    2021 - July 2025
                                                </span>
                                            </div>

                                            <div className="grid gap-6 border-t border-border pt-6 md:grid-cols-2">
                                                <div className="space-y-4">
                                                    <h4 className="flex items-center gap-2 text-sm font-bold tracking-wider text-muted-foreground uppercase">
                                                        <Award className="h-4 w-4 text-blue-500" />
                                                        Key Achievements
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        <li className="group/item flex items-start gap-3 text-sm">
                                                            <span className="mt-0.5 font-bold text-blue-500">
                                                                ✓
                                                            </span>
                                                            <span className="text-muted-foreground transition-colors group-hover/item:text-foreground">
                                                                Capstone:
                                                                CulturaLink
                                                                platform with
                                                                Django, Vue.js,
                                                                MongoDB (Best
                                                                Capstone
                                                                Project)
                                                            </span>
                                                        </li>
                                                        <li className="group/item flex items-start gap-3 text-sm">
                                                            <span className="mt-0.5 font-bold text-blue-500">
                                                                ✓
                                                            </span>
                                                            <span className="text-muted-foreground transition-colors group-hover/item:text-foreground">
                                                                IoT Research
                                                                presentation at
                                                                international
                                                                conference
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="space-y-4">
                                                    <h4 className="flex items-center gap-2 text-sm font-bold tracking-wider text-muted-foreground uppercase">
                                                        <MapPin className="h-4 w-4 text-blue-500" />
                                                        Details
                                                    </h4>
                                                    <div className="space-y-3">
                                                        <div className="flex items-center gap-3 text-sm">
                                                            <Calendar className="h-4 w-4 flex-shrink-0 text-blue-500" />
                                                            <span className="text-muted-foreground">
                                                                4 Years
                                                                Full-Time
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-3 text-sm">
                                                            <MapPin className="h-4 w-4 flex-shrink-0 text-blue-500" />
                                                            <span className="text-muted-foreground">
                                                                Philippines
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Scholarship Card */}
                        <div
                            className={`group relative transition-all duration-700 ${
                                isVisible
                                    ? 'translate-x-0 opacity-100'
                                    : 'translate-x-12 opacity-0'
                            }`}
                            style={{ transitionDelay: '0.2s' }}
                        >
                            <div className="md:flex md:flex-row-reverse md:items-center md:gap-8">
                                {/* Timeline dot */}
                                <div className="hidden md:flex md:w-20 md:flex-col md:items-center">
                                    <div className="relative z-10 h-6 w-6 rounded-full border-4 border-background bg-amber-500 shadow-lg shadow-amber-500/50" />
                                </div>

                                {/* Card */}
                                <div className="flex-1">
                                    <div className="group/card relative">
                                        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-400 opacity-0 blur transition duration-500 group-hover/card:opacity-30" />
                                        <div className="relative rounded-2xl border border-amber-500/20 bg-background p-8 transition-all duration-500 hover:border-amber-500/40 md:p-10">
                                            <div className="mb-6 flex items-start justify-between">
                                                <div className="flex items-center gap-4">
                                                    <div className="rounded-xl bg-amber-500/10">
                                                        <img
                                                            src="/images/DBP-Logo-512.png"
                                                            alt="SDCA Logo"
                                                            className="size-14 border-2 border-blue-500/30 shadow-lg shadow-blue-500/20"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-bold md:text-3xl">
                                                            DBP Rise Scholar
                                                        </h3>
                                                        <p className="mt-1 font-semibold text-amber-600 dark:text-amber-400">
                                                            Development Bank of
                                                            The Philippines
                                                        </p>
                                                    </div>
                                                </div>
                                                <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold whitespace-nowrap text-amber-600 dark:text-amber-400">
                                                    2022 - July 2025
                                                </span>
                                            </div>

                                            <div className="grid gap-6 border-t border-border pt-6 md:grid-cols-2">
                                                <div className="space-y-4">
                                                    <h4 className="flex items-center gap-2 text-sm font-bold tracking-wider text-muted-foreground uppercase">
                                                        <Sparkles className="h-4 w-4 text-amber-500" />
                                                        Scholarship Benefits
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        <li className="group/item flex items-start gap-3 text-sm">
                                                            <span className="mt-0.5 font-bold text-amber-500">
                                                                ★
                                                            </span>
                                                            <span className="text-muted-foreground transition-colors group-hover/item:text-foreground">
                                                                Tuition and
                                                                educational
                                                                support
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="space-y-4">
                                                    <h4 className="flex items-center gap-2 text-sm font-bold tracking-wider text-muted-foreground uppercase">
                                                        <Award className="h-4 w-4 text-amber-500" />
                                                        Recognition
                                                    </h4>
                                                    <div className="space-y-3">
                                                        <div className="flex items-center gap-3 text-sm">
                                                            <Sparkles className="h-4 w-4 flex-shrink-0 text-amber-500" />
                                                            <span className="text-muted-foreground">
                                                                Dean's Lister
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
