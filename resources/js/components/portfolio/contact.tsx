'use client';

import type React from 'react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    CheckCircle,
    Github,
    Linkedin,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

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

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = 'Invalid email format';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsLoading(true);
        setErrors({});

        // TODO: Integrate with Firebase Firestore
        console.log('Form submitted:', formData);

        // Simulate submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 3000);

        setIsLoading(false);
    };

    return (
        <section id="contact" className="relative overflow-hidden py-32">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/10 blur-3xl" />
                <div className="animate-float absolute top-20 right-10 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
                <div
                    className="animate-float absolute bottom-32 left-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"
                    style={{ animationDelay: '2s' }}
                />
                <div
                    className="animate-spin-slow absolute top-1/3 left-1/4 h-64 w-64 rounded-full border border-blue-500/10"
                    style={{ animationDuration: '20s' }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-20 space-y-4 text-center">
                        <div className="mb-4 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 backdrop-blur-sm">
                            <p className="flex items-center justify-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                                <MessageCircle className="h-4 w-4" />
                                Let's Connect
                            </p>
                        </div>
                        <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                            Get in Touch
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                            Have a project in mind or want to collaborate? I'd
                            love to hear from you. Reach out and let's create
                            something amazing together.
                        </p>
                    </div>

                    <div
                        ref={sectionRef}
                        className={`grid gap-8 opacity-0 md:grid-cols-3 ${isVisible ? 'animate-scaleIn' : ''}`}
                    >
                        {/* Contact Information */}
                        <div className="space-y-6 md:col-span-1">
                            <div className="space-y-6">
                                {/* Email */}
                                <div className="group rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-6 transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">
                                    <div className="flex items-start gap-4">
                                        <div className="rounded-lg bg-blue-500/20 p-3 transition-colors group-hover:bg-blue-500/30">
                                            <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 text-sm font-semibold">
                                                Email
                                            </h3>
                                            <a
                                                href="mailto:francisgalan21@gmail.com"
                                                className="text-sm text-muted-foreground transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                                            >
                                                francisgalan21@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="group rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-6 transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">
                                    <div className="flex items-start gap-4">
                                        <div className="rounded-lg bg-blue-500/20 p-3 transition-colors group-hover:bg-blue-500/30">
                                            <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 text-sm font-semibold">
                                                Phone
                                            </h3>
                                            <a
                                                href="tel:+1234567890"
                                                className="text-sm text-muted-foreground transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                                            >
                                                +63 919 641 3263
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="group rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-6 transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">
                                    <div className="flex items-start gap-4">
                                        <div className="rounded-lg bg-blue-500/20 p-3 transition-colors group-hover:bg-blue-500/30">
                                            <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 text-sm font-semibold">
                                                Location
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                Philippines
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-blue-500/10 pt-6">
                                <p className="mb-4 text-sm font-medium">
                                    Follow Me
                                </p>
                                <div className="flex gap-3">
                                    <a
                                        href="https://github.com/undefinedtag"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-lg bg-blue-500/10 p-3 text-blue-600 transition-all duration-300 hover:scale-110 hover:bg-blue-500/20 dark:text-blue-400"
                                    >
                                        <Github className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/mark-francis-galan-3bb21228b/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-lg bg-blue-500/10 p-3 text-blue-600 transition-all duration-300 hover:scale-110 hover:bg-blue-500/20 dark:text-blue-400"
                                    >
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="md:col-span-2">
                            <div className="group relative">
                                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600/40 to-blue-400/20 opacity-0 blur transition duration-500 group-hover:opacity-60"></div>
                                <Card className="relative border-blue-500/10 bg-background p-8 transition-all duration-500 group-hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/20 md:p-10">
                                    {submitted ? (
                                        <div className="animate-fadeInUp space-y-6 py-12 text-center">
                                            <div className="mx-auto flex h-20 w-20 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 ring-4 ring-blue-500/20">
                                                <CheckCircle className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-3xl font-bold">
                                                    Message Sent!
                                                </h3>
                                                <p className="text-lg text-muted-foreground">
                                                    Thank you for reaching out.
                                                    I'll get back to you as soon
                                                    as possible.
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
                                        <form
                                            onSubmit={handleSubmit}
                                            className="space-y-6"
                                        >
                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="name"
                                                    className="flex items-center gap-2 text-sm font-medium"
                                                >
                                                    <MessageCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                                    Name
                                                </label>
                                                <Input
                                                    id="name"
                                                    placeholder="Your name"
                                                    value={formData.name}
                                                    onChange={(e) => {
                                                        setFormData({
                                                            ...formData,
                                                            name: e.target
                                                                .value,
                                                        });
                                                        if (errors.name)
                                                            setErrors({
                                                                ...errors,
                                                                name: '',
                                                            });
                                                    }}
                                                    className={`transition-colors duration-300 hover:border-blue-500/50 focus:border-blue-500 ${errors.name ? 'border-red-500' : ''}`}
                                                />
                                                {errors.name && (
                                                    <p className="text-xs text-red-500">
                                                        {errors.name}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="email"
                                                    className="flex items-center gap-2 text-sm font-medium"
                                                >
                                                    <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                                    Email
                                                </label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="your.email@example.com"
                                                    value={formData.email}
                                                    onChange={(e) => {
                                                        setFormData({
                                                            ...formData,
                                                            email: e.target
                                                                .value,
                                                        });
                                                        if (errors.email)
                                                            setErrors({
                                                                ...errors,
                                                                email: '',
                                                            });
                                                    }}
                                                    className={`transition-colors duration-300 hover:border-blue-500/50 focus:border-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                                                />
                                                {errors.email && (
                                                    <p className="text-xs text-red-500">
                                                        {errors.email}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="message"
                                                    className="flex items-center gap-2 text-sm font-medium"
                                                >
                                                    <Send className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                                    Message
                                                </label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Tell me about your project or inquiry..."
                                                    rows={5}
                                                    value={formData.message}
                                                    onChange={(e) => {
                                                        setFormData({
                                                            ...formData,
                                                            message:
                                                                e.target.value,
                                                        });
                                                        if (errors.message)
                                                            setErrors({
                                                                ...errors,
                                                                message: '',
                                                            });
                                                    }}
                                                    className={`resize-none transition-colors duration-300 hover:border-blue-500/50 focus:border-blue-500 ${errors.message ? 'border-red-500' : ''}`}
                                                />
                                                {errors.message && (
                                                    <p className="text-xs text-red-500">
                                                        {errors.message}
                                                    </p>
                                                )}
                                            </div>

                                            <Button
                                                type="submit"
                                                size="lg"
                                                disabled={isLoading}
                                                className="w-full gap-2 bg-gradient-to-r from-blue-600 to-blue-500 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-blue-400 hover:shadow-lg hover:shadow-blue-500/30"
                                            >
                                                <Send className="h-4 w-4" />
                                                {isLoading
                                                    ? 'Sending...'
                                                    : 'Send Message'}
                                            </Button>
                                        </form>
                                    )}
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
