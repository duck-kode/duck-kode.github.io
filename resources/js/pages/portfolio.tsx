import { Contact } from '@/components/portfolio/contact';
import { Education } from '@/components/portfolio/education';
import { ExperienceTechStack } from '@/components/portfolio/experience';
import { Hero } from '@/components/portfolio/hero';
import { Projects } from '@/components/portfolio/projects';
import { Research } from '@/components/portfolio/research';
import { Head } from '@inertiajs/react';
import { Github, Linkedin, Mail, Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const sections = [
    { href: '#home', id: 'home', label: 'Intro' },
    { href: '#work', id: 'work', label: 'Work' },
    { href: '#research', id: 'research', label: 'Research' },
    { href: '#experience', id: 'experience', label: 'Experience' },
    { href: '#education', id: 'education', label: 'Education' },
    { href: '#contact', id: 'contact', label: 'Contact' },
];

const links = sections.filter((section) => section.id !== 'home');

export default function Portfolio() {
    const rootRef = useRef<HTMLDivElement>(null);
    const [dark, setDark] = useState(true);
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('home');
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const stored = window.localStorage.getItem('folio-theme');
        if (stored === 'light') {
            setDark(false);
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem('folio-theme', dark ? 'dark' : 'light');
    }, [dark]);

    useEffect(() => {
        const onScroll = () => {
            const height =
                document.documentElement.scrollHeight - window.innerHeight;
            setScrolled(window.scrollY > 12);
            setProgress(height > 0 ? window.scrollY / height : 0);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const fine = window.matchMedia('(pointer: fine)').matches;
        const reduce = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;
        const node = rootRef.current;

        if (!fine || reduce || !node) {
            return;
        }

        const onMove = (event: PointerEvent) => {
            node.style.setProperty('--mx', `${event.clientX}px`);
            node.style.setProperty('--my', `${event.clientY}px`);
        };

        window.addEventListener('pointermove', onMove, { passive: true });

        return () => window.removeEventListener('pointermove', onMove);
    }, []);

    useEffect(() => {
        const nodes = sections
            .map((section) => document.getElementById(section.id))
            .filter((node): node is HTMLElement => node !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) => b.intersectionRatio - a.intersectionRatio,
                    )[0];

                if (visible?.target.id) {
                    setActive(visible.target.id);
                }
            },
            { rootMargin: '-45% 0px -45% 0px', threshold: [0.1, 0.25, 0.5] },
        );

        nodes.forEach((node) => observer.observe(node));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <div ref={rootRef} className={dark ? 'folio' : 'folio folio-light'}>
            <Head title="Software Developer">
                <meta
                    head-key="description"
                    name="description"
                    content="Mark Francis Galan is a React Native developer in Bacoor. Currently at Ideahub. Co-author of CulturaLink, published in Cultura in 2026."
                />
            </Head>

            <div
                className="fixed top-0 left-0 z-[70] h-0.5 bg-[var(--folio-accent)] shadow-[0_0_12px_var(--folio-accent)]"
                style={{ width: `${progress * 100}%` }}
            />

            <nav
                aria-label="Section index"
                className="fixed top-1/2 right-5 z-40 hidden -translate-y-1/2 2xl:flex 2xl:flex-col 2xl:gap-3"
            >
                {sections.map((section) => (
                    <a
                        key={section.id}
                        href={section.href}
                        aria-label={section.label}
                        className="group relative flex h-4 w-4 items-center justify-center"
                    >
                        <span
                            className={`pointer-events-none absolute right-6 text-[0.65rem] tracking-[0.16em] whitespace-nowrap uppercase transition ${
                                active === section.id
                                    ? 'text-[var(--folio-ink)] opacity-100'
                                    : 'text-[var(--folio-muted)] opacity-0 group-hover:opacity-100'
                            }`}
                        >
                            {section.label}
                        </span>
                        <span
                            className={`block rounded-full transition ${
                                active === section.id
                                    ? 'h-2.5 w-2.5 bg-[var(--folio-accent)]'
                                    : 'h-1.5 w-1.5 bg-[var(--folio-muted)]'
                            }`}
                        />
                    </a>
                ))}
            </nav>

            <header
                className={`fixed top-0 right-0 left-0 z-50 transition duration-300 ${
                    scrolled || open
                        ? 'border-b border-[var(--folio-line)] bg-[var(--folio-bg)]/85 backdrop-blur-xl'
                        : 'bg-transparent'
                }`}
            >
                <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 lg:px-8">
                    <a
                        href="#home"
                        className="font-display text-lg tracking-tight"
                    >
                        MFG
                        <span className="text-[var(--folio-accent)]">.</span>
                    </a>

                    <nav className="hidden items-center gap-7 md:flex">
                        {links.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                className={`text-sm transition ${
                                    active === link.id
                                        ? 'text-[var(--folio-ink)]'
                                        : 'text-[var(--folio-muted)] hover:text-[var(--folio-ink)]'
                                }`}
                            >
                                {active === link.id && (
                                    <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--folio-accent)] align-middle" />
                                )}
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <a
                            href="#contact"
                            className="hidden rounded-full bg-[var(--folio-accent)] px-4 py-2 text-sm font-semibold text-[var(--folio-accent-ink)] sm:inline-flex"
                        >
                            Hire me
                        </a>
                        <button
                            type="button"
                            onClick={() => setDark((value) => !value)}
                            className="rounded-full border border-[var(--folio-line)] p-2"
                            aria-label={
                                dark
                                    ? 'Switch to light theme'
                                    : 'Switch to dark theme'
                            }
                        >
                            {dark ? (
                                <Sun className="h-4 w-4" />
                            ) : (
                                <Moon className="h-4 w-4" />
                            )}
                        </button>
                        <button
                            type="button"
                            className="rounded-full border border-[var(--folio-line)] p-2 md:hidden"
                            onClick={() => setOpen((value) => !value)}
                            aria-label={open ? 'Close menu' : 'Open menu'}
                        >
                            {open ? (
                                <X className="h-4 w-4" />
                            ) : (
                                <Menu className="h-4 w-4" />
                            )}
                        </button>
                    </div>
                </div>

                {open && (
                    <div className="border-t border-[var(--folio-line)] px-5 py-6 md:hidden">
                        <div className="flex flex-col gap-4">
                            {links.map((link, index) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="font-display text-4xl"
                                    style={{
                                        animation: `folio-fade 0.45s cubic-bezier(0.22, 1, 0.36, 1) ${index * 60}ms both`,
                                    }}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            <main>
                <Hero />
                <Projects />
                <Research />
                <ExperienceTechStack />
                <Education />
                <Contact />
            </main>

            <footer className="border-t border-[var(--folio-line)]">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
                    <p className="text-sm text-[var(--folio-muted)]">
                        © {new Date().getFullYear()} Mark Francis Galan.
                        Laravel & React.
                    </p>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/duck-kode"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="text-[var(--folio-muted)] transition hover:text-[var(--folio-ink)]"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mark-francis-galan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-[var(--folio-muted)] transition hover:text-[var(--folio-ink)]"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                            href="mailto:francisgalan21@gmail.com"
                            aria-label="Email"
                            className="text-[var(--folio-muted)] transition hover:text-[var(--folio-ink)]"
                        >
                            <Mail className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
