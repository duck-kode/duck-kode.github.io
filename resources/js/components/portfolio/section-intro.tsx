import { useInView } from '@/components/portfolio/use-in-view';

export function SectionIntro({
    kicker,
    title,
    lede,
}: {
    kicker: string;
    title: string;
    lede?: string;
}) {
    const { ref, shown } = useInView<HTMLDivElement>(0.35);

    return (
        <div ref={ref}>
            <p className="text-xs tracking-[0.22em] text-[var(--folio-muted)] uppercase">
                {kicker}
            </p>
            <h2
                className={`mt-3 max-w-3xl text-4xl transition duration-700 sm:text-6xl ${
                    shown
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-3 opacity-0'
                }`}
            >
                {title}
            </h2>
            <span
                className={`mt-5 block h-px bg-[var(--folio-accent)] transition-[width] duration-700 ${
                    shown ? 'w-20' : 'w-0'
                }`}
            />
            {lede ? (
                <p
                    className={`mt-6 max-w-2xl leading-relaxed text-[var(--folio-muted)] transition delay-150 duration-700 ${
                        shown
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-3 opacity-0'
                    }`}
                >
                    {lede}
                </p>
            ) : null}
        </div>
    );
}
