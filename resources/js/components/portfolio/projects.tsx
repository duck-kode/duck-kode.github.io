import { SectionIntro } from '@/components/portfolio/section-intro';
import { useInView } from '@/components/portfolio/use-in-view';
import { ArrowUpRight, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const paperUrl =
    'https://culturajournal.com/submissions/index.php/ijpca/article/view/2600';

type Project = {
    index: string;
    title: string;
    kicker: string;
    description: string;
    tech: string[];
    features: string[];
    story: string;
    publication?: {
        venue: string;
        date: string;
        href: string;
    };
};

const projects: Project[] = [
    {
        index: '01',
        title: 'CulturaLink',
        kicker: 'Best Capstone · Published in Cultura, 2026',
        description:
            'A multi-platform web forum for global cultural exchange. People discuss a place, then plan the trip from itineraries the community already built.',
        tech: ['Vue.js', 'Tailwind', 'Django', 'MongoDB', 'Google Cloud'],
        features: [
            'Global discussion forum',
            'Itinerary builder with budgets',
            'Achievement system',
            'Desktop and mobile layouts',
        ],
        story: 'I co-authored CulturaLink with Christina Gabrielle Tecson and Eijay Gabrentina for our capstone at St. Dominic College of Asia. It is a progressive web forum: discussions, achievements, and travel itineraries with budget tracking, built with Vue.js, Tailwind, Django, MongoDB, and Google Cloud. We presented it on 24 April 2025 at the 5th SDCA International Multidisciplinary Research Conference. It was awarded Best Capstone Project, then published in Cultura on 15 February 2026.',
        publication: {
            venue: 'Cultura: International Journal of Philosophy of Culture and Axiology',
            date: '15 February 2026',
            href: paperUrl,
        },
    },
    {
        index: '02',
        title: 'Ride-Hailing',
        kicker: 'MK International Travel Care',
        description:
            'Architecture and the passenger app: authentication, live location, and a booking flow that finishes on a phone.',
        tech: ['React Native', 'Tailwind', 'Firebase', 'Google Cloud'],
        features: [
            'Product architecture',
            'React Native interface',
            'Firebase auth and realtime data',
            'Maps and geolocation',
        ],
        story: 'At MK International Travel Care I researched and designed the architecture for a ride-hailing app, then built it in React Native and Tailwind CSS. Firebase handles authentication and the realtime database. Google Cloud covers mapping and geolocation.',
    },
    {
        index: '03',
        title: 'PillPal',
        kicker: 'IoE research · SDCA 2025',
        description:
            'A motorized pill dispenser that releases medication on a schedule, with a React Native app for monitoring, reminders, and adherence.',
        tech: ['ESP32', 'C++', 'React Native', 'TypeScript', 'Firebase'],
        features: [
            'Scheduled dispensing',
            'Real-time monitoring',
            'Notifications',
            'Medication tracking',
        ],
        story: 'PillPal is an Internet of Everything prototype: a motorized pill dispenser for scheduled medication. The ESP32, written in C++, drives the hardware. A React Native app in TypeScript, styled with Tailwind, handles monitoring, notifications, and medication tracking, with Firebase for live state. I presented it on 24 April 2025 at the 5th SDCA International Multidisciplinary Research Conference.',
    },
];

const inProgress: Project[] = [
    {
        index: '04',
        title: 'Clinic system',
        kicker: 'In progress',
        description:
            'Records, appointments, charts, and billing for a dental clinic, plus a public page and a patient inbox.',
        tech: ['Laravel', 'Blade', 'Tailwind', 'Alpine.js', 'MySQL'],
        features: [
            'Patient records and appointments',
            'Treatment plans and dental charts',
            'Invoices, balances, and payments taken at the clinic',
            'Messages, promotions, and a public page',
        ],
        story: 'I am building a dental clinic system in Laravel, Blade, Tailwind CSS, and Alpine.js, with MySQL. Staff keep records, appointments, treatment plans, dental charts, invoices, and balances. Patients can see their own care and message the desk. The public page carries photo posts, testimonials, and current promotions. Payments are recorded at the clinic, with no payment gateway. It runs locally and is not launched.',
    },
    {
        index: '05',
        title: 'Cafe system',
        kicker: 'In progress',
        description:
            'One cafe branch, from the counter to the kitchen: orders, tickets, stock, and the day’s cash.',
        tech: ['Laravel', 'Blade', 'Tailwind', 'Alpine.js', 'Chart.js'],
        features: [
            'Point of sale and cashier shifts',
            'Kitchen tickets',
            'Inventory, purchasing, and recipes',
            'Table menus, loyalty, and reports',
        ],
        story: 'I am building a single-branch cafe system in Laravel, Blade, Tailwind CSS, Alpine.js, and Chart.js. Cashiers sell from the counter during an open shift. The kitchen advances tickets. Inventory covers stock, expiry, purchasing, and recipes. Guests open a menu for their table, and those orders stay unpaid until the counter records them. Cash, GCash, and card are recorded there, with no payment gateway. Loyalty points and reports are included. It runs locally and is not launched.',
    },
];

function CaseModal({
    project,
    onClose,
}: {
    project: Project | null;
    onClose: () => void;
}) {
    useEffect(() => {
        if (!project) {
            return;
        }

        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', onKey);

        return () => {
            document.body.style.overflow = previous;
            window.removeEventListener('keydown', onKey);
        };
    }, [project, onClose]);

    if (!project) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-6">
            <button
                type="button"
                aria-label="Close case study"
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="case-title"
                className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-[var(--folio-line)] bg-[var(--folio-surface)] shadow-2xl"
                style={{
                    animation:
                        'folio-fade 0.35s cubic-bezier(0.22, 1, 0.36, 1) both',
                }}
            >
                <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-[var(--folio-line)] bg-[var(--folio-surface)]/90 px-5 py-4 backdrop-blur sm:px-8">
                    <div>
                        <p className="text-xs tracking-[0.18em] text-[var(--folio-accent)] uppercase">
                            {project.index} · {project.kicker}
                        </p>
                        <h3 id="case-title" className="mt-1 text-2xl">
                            {project.title}
                        </h3>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-full border border-[var(--folio-line)] p-2 transition hover:border-[var(--folio-accent)]"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                <div className="space-y-6 px-5 py-6 sm:px-8">
                    <p className="max-w-3xl leading-relaxed text-[var(--folio-muted)]">
                        {project.story}
                    </p>
                    <ul className="space-y-2 text-sm">
                        {project.features.map((feature) => (
                            <li key={feature} className="flex gap-2">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--folio-accent)]" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                    {project.publication && (
                        <a
                            href={project.publication.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between gap-4 rounded-2xl border border-[var(--folio-line)] px-4 py-4 transition hover:border-[var(--folio-accent)]"
                        >
                            <span>
                                <span className="block text-[0.65rem] tracking-[0.18em] text-[var(--folio-accent)] uppercase">
                                    {project.publication.date}
                                </span>
                                <span className="mt-1 block text-sm">
                                    {project.publication.venue}
                                </span>
                            </span>
                            <ArrowUpRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

function ProjectRow({
    project,
    onOpen,
}: {
    project: Project;
    onOpen: (project: Project) => void;
}) {
    const { ref, shown } = useInView<HTMLElement>(0.2);

    return (
        <article
            ref={ref}
            className={`grid gap-6 border-t border-[var(--folio-line)] py-12 transition duration-700 lg:grid-cols-12 lg:gap-10 lg:py-16 ${
                shown ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
        >
            <p className="font-display text-5xl text-[var(--folio-accent)] lg:col-span-2">
                {project.index}
            </p>
            <div className="lg:col-span-6">
                <h3 className="text-4xl sm:text-5xl">{project.title}</h3>
                <p className="mt-4 max-w-xl leading-relaxed text-[var(--folio-muted)]">
                    {project.description}
                </p>
                <ul className="mt-5 space-y-2 text-sm">
                    {project.features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--folio-accent)]" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="lg:col-span-4">
                <p className="text-xs tracking-[0.18em] text-[var(--folio-accent)] uppercase">
                    {project.kicker}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                        <span
                            key={item}
                            className="rounded-full border border-[var(--folio-line)] px-3 py-1 text-xs"
                        >
                            {item}
                        </span>
                    ))}
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                    <button
                        type="button"
                        onClick={() => onOpen(project)}
                        className="group inline-flex items-center gap-2 text-sm font-semibold"
                    >
                        Open case study
                        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                    {project.publication && (
                        <a
                            href={project.publication.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--folio-accent)]"
                        >
                            Read the paper
                            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

export function Projects() {
    const [selected, setSelected] = useState<Project | null>(null);

    return (
        <section id="work" className="scroll-mt-24 py-20">
            <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
                <SectionIntro
                    kicker="Selected work"
                    title="Work you can open."
                    lede="A published cultural forum, a ride-hailing app from a travel company, and a motorized pill dispenser with a phone app beside the hardware. Two more systems are still in progress."
                />

                {projects.map((project) => (
                    <ProjectRow
                        key={project.title}
                        project={project}
                        onOpen={setSelected}
                    />
                ))}

                <div className="mt-8 max-w-2xl">
                    <p className="text-xs tracking-[0.22em] text-[var(--folio-muted)] uppercase">
                        In progress
                    </p>
                    <h3 className="mt-3 text-3xl sm:text-4xl">
                        Still on my machine.
                    </h3>
                    <p className="mt-4 leading-relaxed text-[var(--folio-muted)]">
                        A clinic system and a cafe system. Both already run.
                        Neither is launched, so there is no public link.
                    </p>
                </div>

                {inProgress.map((project) => (
                    <ProjectRow
                        key={project.title}
                        project={project}
                        onOpen={setSelected}
                    />
                ))}
            </div>

            <CaseModal project={selected} onClose={() => setSelected(null)} />
        </section>
    );
}
