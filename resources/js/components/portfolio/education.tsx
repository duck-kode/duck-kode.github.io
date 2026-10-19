import { SectionIntro } from '@/components/portfolio/section-intro';
import { useInView } from '@/components/portfolio/use-in-view';

const courses = [
    'Data Structures',
    'Algorithms & Analysis',
    'Foundations of Programming',
    'Files and Databases',
    'Modern Web Development',
    'Mobile Development',
];

const proofs = [
    { value: '1.28', label: 'GWA', note: '1.00 is the top of the scale' },
    { value: 'Best', label: 'Capstone', note: 'CulturaLink, April 2025' },
    { value: '2026', label: 'Journal', note: 'Published in Cultura' },
];

export function Education() {
    const { ref, shown } = useInView<HTMLDivElement>(0.2);

    return (
        <section id="education" className="scroll-mt-24 py-20">
            <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
                <SectionIntro
                    kicker="Education"
                    title="The training behind the work."
                    lede="Bachelor of Science in Information Technology, St. Dominic College of Asia, Bacoor City. Graduated July 2025."
                />

                <div
                    ref={ref}
                    className={`mt-12 rounded-[1.8rem] border border-[var(--folio-line)] bg-[var(--folio-surface)] p-7 transition duration-700 sm:p-10 ${
                        shown
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-8 opacity-0'
                    }`}
                >
                    <div className="flex flex-wrap items-start justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <img
                                src="/images/sdcaLogo.png"
                                alt=""
                                className="h-14 w-14 rounded-2xl bg-white object-contain p-1"
                            />
                            <div>
                                <h3 className="text-3xl">
                                    B.S. Information Technology
                                </h3>
                                <p className="mt-1 text-[var(--folio-muted)]">
                                    St. Dominic College of Asia
                                </p>
                            </div>
                        </div>
                        <p className="text-xs tracking-[0.16em] text-[var(--folio-accent)] uppercase">
                            Graduated July 2025
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        {proofs.map((proof, index) => (
                            <div
                                key={proof.label}
                                className={`rounded-2xl border border-[var(--folio-line)] px-4 py-4 transition duration-700 ${
                                    shown
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-3 opacity-0'
                                }`}
                                style={{ transitionDelay: `${index * 90}ms` }}
                            >
                                <p className="font-display text-3xl">
                                    {proof.value}
                                </p>
                                <p className="mt-1 text-xs tracking-[0.16em] text-[var(--folio-accent)] uppercase">
                                    {proof.label}
                                </p>
                                <p className="mt-2 text-sm text-[var(--folio-muted)]">
                                    {proof.note}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <p className="text-xs tracking-[0.18em] text-[var(--folio-muted)] uppercase">
                            Coursework
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {courses.map((course, index) => (
                                <span
                                    key={course}
                                    className={`rounded-full border border-[var(--folio-line)] px-3 py-1.5 text-sm transition duration-500 ${
                                        shown
                                            ? 'translate-y-0 opacity-100'
                                            : 'translate-y-2 opacity-0'
                                    }`}
                                    style={{
                                        transitionDelay: `${180 + index * 50}ms`,
                                    }}
                                >
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[var(--folio-muted)]">
                        Presented CulturaLink and PillPal at the 5th SDCA
                        International Multidisciplinary Research Conference on
                        24 April 2025. CulturaLink was awarded Best Capstone
                        Project and later published.
                    </p>
                </div>
            </div>
        </section>
    );
}
