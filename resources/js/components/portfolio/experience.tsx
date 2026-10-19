import { SectionIntro } from '@/components/portfolio/section-intro';
import { useInView } from '@/components/portfolio/use-in-view';

const experiences = [
    {
        role: 'Software Developer — React Native',
        company: 'Ideahub Solutions LLC',
        period: 'Dec 2025 — Present',
        location: 'Valencia, CA',
        current: true,
        summary:
            'Cross-platform mobile work. I build and maintain React Native apps with the client team, and ship the features the project actually asked for.',
        achievements: [
            'Develop and maintain cross-platform mobile applications in React Native',
            'Implement features against the project requirements and technical standards',
            'Work with client teams on updates and deliverables',
        ],
    },
    {
        role: 'IT Staff — Full-Stack Software Developer',
        company: 'MK International Travel Care Inc.',
        period: 'Jan 2025 — Jul 2025',
        location: 'Alabang, Muntinlupa',
        current: false,
        summary:
            'Researched the architecture, then built the ride-hailing app: React Native, Tailwind, Firebase, and Google Cloud maps.',
        achievements: [
            'Researched and designed the architecture for a ride-hailing mobile app',
            'Developed the app with React Native and Tailwind CSS',
            'Implemented Firebase authentication and a realtime database',
            'Integrated Google Cloud for mapping and geolocation',
        ],
    },
    {
        role: 'Software Developer Intern',
        company: 'KonsultaMD — HealthNow Inc. AIDE',
        period: 'Aug 2024 — Dec 2024',
        location: 'Mandaluyong City',
        current: false,
        summary:
            'A new website with a real database behind the pages, then usability testing that changed the interface.',
        achievements: [
            'Developed a website with dynamic database storage and interactive pages',
            'Ran usability testing and shipped improvements to the experience',
        ],
    },
];

const groups = [
    {
        label: 'Interface',
        items: [
            'React Native',
            'React.js',
            'Vue.js',
            'Tailwind',
            'JavaScript',
            'HTML/CSS',
        ],
    },
    {
        label: 'Application',
        items: [
            'Laravel',
            'Django',
            'Node.js',
            'Python',
            'PHP',
            'C++',
            'Java',
            'C#',
        ],
    },
    {
        label: 'Data & cloud',
        items: [
            'Firebase',
            'MongoDB',
            'SQL',
            'Google Cloud',
            'Git',
            'Figma',
            'Jira',
        ],
    },
];

const marquee = [
    'React Native',
    'Laravel',
    'Vue.js',
    'Django',
    'Firebase',
    'MongoDB',
    'Tailwind',
    'Google Cloud',
    'ESP32',
    'TypeScript',
];

export function ExperienceTechStack() {
    const { ref, shown } = useInView<HTMLDivElement>(0.15);
    const stack = useInView<HTMLDivElement>(0.2);
    const loop = [...marquee, ...marquee];

    return (
        <section id="experience" className="scroll-mt-24 py-8">
            <div className="border-y border-[var(--folio-line)] py-4">
                <div className="overflow-hidden">
                    <div className="folio-marquee flex w-max gap-10 pr-10">
                        {loop.map((item, index) => (
                            <span
                                key={`${item}-${index}`}
                                className="text-sm tracking-[0.22em] text-[var(--folio-muted)] uppercase"
                            >
                                {item}
                                <span className="ml-10 text-[var(--folio-accent)]">
                                    ✦
                                </span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-20 w-full max-w-6xl px-5 lg:px-8">
                <SectionIntro
                    kicker="Experience"
                    title="Where the work happened."
                    lede="React Native at Ideahub now. Before that, a ride-hailing app in Alabang and a clinic website in Mandaluyong."
                />

                <div className="mt-14 grid gap-16 lg:grid-cols-[1.15fr_0.85fr]">
                    <div ref={ref} className="relative space-y-8 pl-8">
                        <div
                            className={`folio-line absolute top-2 bottom-2 left-[5px] w-px bg-[var(--folio-accent)] ${
                                shown ? 'is-in' : ''
                            }`}
                        />
                        {experiences.map((job, index) => (
                            <article
                                key={job.company}
                                className={`relative rounded-3xl border border-[var(--folio-line)] bg-[var(--folio-surface)] p-6 transition duration-700 hover:-translate-y-1 hover:border-[var(--folio-accent)] sm:p-8 ${
                                    shown
                                        ? 'translate-x-0 opacity-100'
                                        : '-translate-x-6 opacity-0'
                                }`}
                                style={{ transitionDelay: `${index * 120}ms` }}
                            >
                                <span className="absolute top-8 -left-[27px] h-2.5 w-2.5 rounded-full bg-[var(--folio-accent)] ring-4 ring-[var(--folio-bg)]" />
                                <p className="flex items-center gap-2 text-xs tracking-[0.16em] text-[var(--folio-accent)] uppercase">
                                    {job.current && (
                                        <span className="relative flex h-1.5 w-1.5">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--folio-accent)] opacity-70" />
                                            <span className="relative h-1.5 w-1.5 rounded-full bg-[var(--folio-accent)]" />
                                        </span>
                                    )}
                                    {job.period} · {job.location}
                                </p>
                                <h3 className="mt-3 text-2xl sm:text-3xl">
                                    {job.role}
                                </h3>
                                <p className="mt-1 text-[var(--folio-muted)]">
                                    {job.company}
                                </p>
                                <p className="mt-4 text-sm leading-relaxed">
                                    {job.summary}
                                </p>
                                <ul className="mt-4 space-y-2 text-sm text-[var(--folio-muted)]">
                                    {job.achievements.map((item) => (
                                        <li key={item} className="flex gap-2">
                                            <span className="text-[var(--folio-accent)]">
                                                /
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>

                    <div
                        ref={stack.ref}
                        className="lg:sticky lg:top-28 lg:self-start"
                    >
                        <p className="text-xs tracking-[0.22em] text-[var(--folio-muted)] uppercase">
                            Stack I use
                        </p>
                        <div className="mt-6 space-y-6">
                            {groups.map((group) => (
                                <div key={group.label}>
                                    <h3 className="text-lg">{group.label}</h3>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {group.items.map((item, index) => (
                                            <span
                                                key={item}
                                                className={`rounded-full border border-[var(--folio-line)] px-3 py-1.5 text-sm transition duration-500 hover:-translate-y-0.5 hover:border-[var(--folio-accent)] hover:text-[var(--folio-accent)] ${
                                                    stack.shown
                                                        ? 'translate-y-0 opacity-100'
                                                        : 'translate-y-2 opacity-0'
                                                }`}
                                                style={{
                                                    transitionDelay: `${index * 35}ms`,
                                                }}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-sm leading-relaxed text-[var(--folio-muted)]">
                            Also on the bench: SQL Server, Postman, Bitbucket,
                            Cursor, and Ollama.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
