import { ArrowUpRight, Download } from 'lucide-react';
import {
    useEffect,
    useRef,
    useState,
    type MouseEvent,
    type ReactNode,
} from 'react';

const roles = [
    'mobile apps',
    'cultural forums',
    'ride-hailing flows',
    'clinic websites',
];

const longestRole = roles.reduce((longest, role) =>
    role.length > longest.length ? role : longest,
);

const stats = [
    { value: 'Now', label: 'Ideahub' },
    { value: '1.28', label: 'GWA' },
    { value: '2026', label: 'Published paper' },
];

function Magnetic({
    href,
    className,
    children,
    external = false,
}: {
    href: string;
    className: string;
    children: ReactNode;
    external?: boolean;
}) {
    const ref = useRef<HTMLAnchorElement>(null);

    const onMove = (event: MouseEvent<HTMLAnchorElement>) => {
        const el = ref.current;

        if (
            !el ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
            return;
        }

        const rect = el.getBoundingClientRect();
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);
        el.style.transform = `translate(${x * 0.28}px, ${y * 0.4}px)`;
    };

    return (
        <a
            ref={ref}
            href={href}
            onMouseMove={onMove}
            onMouseLeave={() => {
                if (ref.current) {
                    ref.current.style.transform = '';
                }
            }}
            className={className}
            {...(external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
        >
            {children}
        </a>
    );
}

export function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setRoleIndex((current) => (current + 1) % roles.length);
        }, 2600);

        return () => window.clearInterval(timer);
    }, []);

    return (
        <section
            id="home"
            className="relative overflow-hidden pt-28 pb-16 sm:pt-32"
        >
            <div className="folio-grid pointer-events-none absolute inset-0" />
            <div className="pointer-events-none absolute top-24 -left-24 h-72 w-72 rounded-full bg-[var(--folio-accent)] opacity-15 blur-3xl" />

            <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
                <div>
                    <p className="folio-rise-in mb-6 inline-flex items-center gap-2 text-xs font-medium tracking-[0.22em] text-[var(--folio-muted)] uppercase">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--folio-accent)] opacity-70" />
                            <span className="relative h-2 w-2 rounded-full bg-[var(--folio-accent)]" />
                        </span>
                        Ideahub · Open to opportunities
                    </p>

                    <h1 className="text-[clamp(3.4rem,8vw,7rem)] leading-[0.88] text-balance">
                        <span className="block overflow-hidden">
                            <span
                                className="block"
                                style={{
                                    animation:
                                        'folio-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
                                }}
                            >
                                Mark
                            </span>
                        </span>
                        <span className="block overflow-hidden">
                            <span
                                className="block text-[var(--folio-accent)]"
                                style={{
                                    animation:
                                        'folio-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.08s both',
                                }}
                            >
                                Francis
                            </span>
                        </span>
                        <span className="block overflow-hidden">
                            <span
                                className="block"
                                style={{
                                    animation:
                                        'folio-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.16s both',
                                }}
                            >
                                Galan
                            </span>
                        </span>
                    </h1>

                    <p
                        className="folio-rise-in mt-8 max-w-xl text-lg leading-relaxed text-[var(--folio-muted)] sm:text-xl"
                        style={{ animationDelay: '0.28s' }}
                    >
                        Software developer in Bacoor. I ship products with React,
                        React Native, Laravel, and Vue.
                    </p>
                    <p
                        className="folio-rise-in mt-3 text-lg text-[var(--folio-ink)] sm:text-xl"
                        style={{ animationDelay: '0.34s' }}
                        aria-live="polite"
                    >
                        <span className="text-[var(--folio-muted)]">
                            Including{' '}
                        </span>
                        <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom leading-[1.2]">
                            <span className="invisible font-medium whitespace-nowrap">
                                {longestRole}
                            </span>
                            <span
                                key={roleIndex}
                                className="absolute top-0 left-0 font-medium whitespace-nowrap"
                                style={{
                                    animation:
                                        'folio-slot 0.55s cubic-bezier(0.22, 1, 0.36, 1) both',
                                }}
                            >
                                {roles[roleIndex]}
                            </span>
                        </span>
                    </p>

                    <div
                        className="folio-rise-in mt-8 flex flex-wrap items-center gap-3"
                        style={{ animationDelay: '0.4s' }}
                    >
                        <Magnetic
                            href="#contact"
                            className="folio-magnetic group inline-flex items-center gap-2 rounded-full bg-[var(--folio-accent)] px-5 py-3 text-sm font-semibold text-[var(--folio-accent-ink)] hover:shadow-[0_12px_40px_-16px_var(--folio-accent)]"
                        >
                            Start a conversation
                            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Magnetic>
                        <a
                            href="https://drive.google.com/file/d/1hU98NVMF9H9Gony_J2WVL0OPrhFZi4cs/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-[var(--folio-line)] px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-[var(--folio-accent)]"
                        >
                            <Download className="h-4 w-4" />
                            Resume
                        </a>
                    </div>

                    <dl
                        className="folio-rise-in mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-[var(--folio-line)] pt-6"
                        style={{ animationDelay: '0.5s' }}
                    >
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <dt className="font-display text-2xl text-[var(--folio-ink)] sm:text-3xl">
                                    {stat.value}
                                </dt>
                                <dd className="mt-1 text-xs tracking-wide text-[var(--folio-muted)] uppercase">
                                    {stat.label}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <div
                    className="folio-rise-in relative mx-auto w-full max-w-sm"
                    style={{ animationDelay: '0.2s' }}
                >
                    <div className="pointer-events-none absolute -inset-3 animate-[folio-orbit_28s_linear_infinite] rounded-[2.2rem] border border-dashed border-[var(--folio-accent)] opacity-50" />
                    <div className="relative overflow-hidden rounded-[1.8rem] border border-[var(--folio-line)] bg-black shadow-[0_30px_80px_-40px_rgba(0,0,0,0.85)]">
                        <img
                            src="/images/mark-francis-galan.jpg"
                            alt="Portrait of Mark Francis Galan"
                            className="aspect-[4/5] w-full animate-[folio-ken_16s_ease-in-out_infinite_alternate] object-cover object-center"
                        />
                        <a
                            href="#research"
                            className="folio-float absolute bottom-4 left-4 rounded-2xl border border-[var(--folio-line)] bg-[var(--folio-surface)]/95 px-4 py-3 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.8)] backdrop-blur"
                        >
                            <span className="block text-[0.65rem] tracking-[0.2em] text-[var(--folio-accent)] uppercase">
                                Published
                            </span>
                            <span className="font-display text-lg leading-tight">
                                Cultura · 2026
                            </span>
                        </a>
                    </div>
                    <p className="mt-4 text-center text-xs tracking-[0.22em] text-[var(--folio-muted)] uppercase">
                        React Native · Laravel · Vue · Firebase
                    </p>
                </div>
            </div>
        </section>
    );
}
