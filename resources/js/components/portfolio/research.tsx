import { SectionIntro } from '@/components/portfolio/section-intro';
import { useInView } from '@/components/portfolio/use-in-view';
import { ArrowUpRight } from 'lucide-react';

const paperUrl =
    'https://culturajournal.com/submissions/index.php/ijpca/article/view/2600';

const facts = [
    { label: 'Published', value: '15 February 2026' },
    { label: 'Conference', value: '5th SDCA IMERC · 24 April 2025' },
    { label: 'Award', value: 'Best Capstone Project' },
];

export function Research() {
    const { ref, shown } = useInView<HTMLElement>(0.2);

    return (
        <section id="research" className="scroll-mt-24 py-20">
            <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
                <SectionIntro
                    kicker="Published research"
                    title="A capstone that left the classroom."
                    lede="CulturaLink was presented at St. Dominic College of Asia, named Best Capstone Project, then published in Cultura in February 2026."
                />

                <article
                    ref={ref}
                    className={`mt-12 rounded-[2rem] border border-[var(--folio-line)] bg-[var(--folio-surface)] p-6 transition duration-700 sm:p-10 ${
                        shown
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-8 opacity-0'
                    }`}
                >
                    <div className="grid items-center gap-10 lg:grid-cols-[200px_1fr]">
                        <div
                            className={`mx-auto ${shown ? 'folio-stamp' : 'scale-90 opacity-0'}`}
                        >
                            <div className="flex h-44 w-44 flex-col items-center justify-center rounded-full border-2 border-dashed border-[var(--folio-accent)] text-center">
                                <p className="text-[0.65rem] tracking-[0.28em] text-[var(--folio-accent)] uppercase">
                                    Cultura
                                </p>
                                <p className="font-display text-4xl leading-none">
                                    2026
                                </p>
                                <p className="mt-1 text-[0.65rem] tracking-[0.22em] uppercase">
                                    Published
                                </p>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm leading-relaxed text-[var(--folio-muted)]">
                                Cultura: International Journal of Philosophy of
                                Culture and Axiology
                            </p>
                            <h3 className="mt-3 text-3xl text-balance sm:text-4xl">
                                CulturaLink: A Multi-Platform Web Forum
                                Application for Global Cultural Exchange
                            </h3>
                            <p className="mt-4 text-sm">
                                Christina Gabrielle Tecson
                                <span className="mx-2 text-[var(--folio-muted)]">
                                    ·
                                </span>
                                Eijay Gabrentina
                                <span className="mx-2 text-[var(--folio-muted)]">
                                    ·
                                </span>
                                <span className="font-medium text-[var(--folio-accent)]">
                                    Mark Francis Galan
                                </span>
                            </p>
                            <p className="mt-6 max-w-3xl leading-relaxed text-[var(--folio-muted)]">
                                A progressive web forum for cultural exchange
                                and travel planning: a global discussion space,
                                an achievement system, and an itinerary builder
                                with budget tracking. Built with Vue.js, Django,
                                and MongoDB. End users and industry experts
                                rated it for usefulness, ease of use, and why a
                                shared place for culture and travel actually
                                matters.
                            </p>

                            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
                                {facts.map((fact, index) => (
                                    <div
                                        key={fact.label}
                                        className={`border-t border-[var(--folio-line)] pt-3 transition duration-700 ${
                                            shown
                                                ? 'translate-y-0 opacity-100'
                                                : 'translate-y-2 opacity-0'
                                        }`}
                                        style={{
                                            transitionDelay: `${200 + index * 90}ms`,
                                        }}
                                    >
                                        <dt className="text-[0.65rem] tracking-[0.18em] text-[var(--folio-muted)] uppercase">
                                            {fact.label}
                                        </dt>
                                        <dd className="mt-1 text-sm">
                                            {fact.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>

                            <a
                                href={paperUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--folio-accent)] px-5 py-3 text-sm font-semibold text-[var(--folio-accent-ink)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-16px_var(--folio-accent)]"
                            >
                                Read the paper
                                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}
