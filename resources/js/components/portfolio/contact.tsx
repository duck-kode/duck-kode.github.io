import { SectionIntro } from '@/components/portfolio/section-intro';
import { useInView } from '@/components/portfolio/use-in-view';
import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { FormEvent, useState } from 'react';

const inbox = 'francisgalan21@gmail.com';

const channels = [
    {
        label: 'Email',
        value: inbox,
        href: `mailto:${inbox}`,
        icon: Mail,
    },
    {
        label: 'Phone',
        value: '+63 919 641 3263',
        href: 'tel:+639196413263',
        icon: Phone,
    },
    {
        label: 'Location',
        value: 'Bacoor City, Cavite',
        href: 'https://maps.google.com/?q=Bacoor+City+Cavite',
        icon: MapPin,
        external: true,
    },
];

export function Contact() {
    const { contactFormId } = usePage<SharedData>().props;
    const { ref, shown } = useInView<HTMLDivElement>(0.2);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
        website: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [failure, setFailure] = useState('');

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const next: Record<string, string> = {};

        if (!form.name.trim()) {
            next.name = 'Name is required';
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            next.email = 'Use a real email so I can reply';
        }
        if (!form.message.trim()) {
            next.message = 'Tell me what you have in mind';
        }

        setErrors(next);
        setFailure('');
        setSent(false);

        if (Object.keys(next).length > 0) {
            return;
        }

        if (form.website.trim() !== '') {
            setForm({ name: '', email: '', message: '', website: '' });
            setSent(true);

            return;
        }

        setSending(true);

        try {
            const response = await fetch(
                `https://formsubmit.co/ajax/${encodeURIComponent(contactFormId)}`,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: form.name.trim(),
                        email: form.email.trim(),
                        _replyto: form.email.trim(),
                        message: form.message.trim(),
                        _subject: `Portfolio inquiry from ${form.name.trim()}`,
                        _template: 'table',
                        _captcha: 'false',
                    }),
                },
            );
            const payload = (await response.json()) as {
                success?: boolean | string;
                message?: string;
            };
            const providerMessage = (payload.message ?? '').toLowerCase();
            const accepted =
                payload.success === true || payload.success === 'true';

            if (
                providerMessage.includes('activat') ||
                providerMessage.includes('confirm')
            ) {
                setFailure(
                    `Check ${inbox} for a confirmation email, open it, then send this message again.`,
                );

                return;
            }

            if (!response.ok || !accepted) {
                setFailure(
                    `The message could not be sent. Email ${inbox} directly.`,
                );

                return;
            }

            setForm({ name: '', email: '', message: '', website: '' });
            setSent(true);
        } catch {
            setFailure(
                `The message could not be sent. Email ${inbox} directly.`,
            );
        } finally {
            setSending(false);
        }
    };

    return (
        <section id="contact" className="scroll-mt-24 py-20">
            <div
                ref={ref}
                className={`mx-auto grid w-full max-w-6xl gap-12 px-5 transition duration-700 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 ${
                    shown
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-8 opacity-0'
                }`}
            >
                <div>
                    <SectionIntro
                        kicker="Contact"
                        title="If the work fits, write."
                    />
                    <p className="mt-5 max-w-md leading-relaxed text-[var(--folio-muted)]">
                        Roles, collaborations, or a question about a project.
                        The form sends the message to my inbox, and I can reply
                        to the address you leave.
                    </p>

                    <div className="mt-8 space-y-3">
                        {channels.map((channel) => (
                            <a
                                key={channel.label}
                                href={channel.href}
                                {...('external' in channel && channel.external
                                    ? {
                                          target: '_blank',
                                          rel: 'noopener noreferrer',
                                      }
                                    : {})}
                                className="group flex items-center gap-4 rounded-2xl border border-[var(--folio-line)] px-4 py-4 transition hover:-translate-y-0.5 hover:border-[var(--folio-accent)]"
                            >
                                <span className="rounded-full bg-[var(--folio-accent)] p-2 text-[var(--folio-accent-ink)]">
                                    <channel.icon className="h-4 w-4" />
                                </span>
                                <span>
                                    <span className="block text-xs tracking-widest text-[var(--folio-muted)] uppercase">
                                        {channel.label}
                                    </span>
                                    <span className="font-medium">
                                        {channel.value}
                                    </span>
                                </span>
                            </a>
                        ))}
                    </div>

                    <div className="mt-6 flex gap-3">
                        <a
                            href="https://github.com/duck-kode"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="rounded-full border border-[var(--folio-line)] p-3 transition hover:-translate-y-0.5 hover:border-[var(--folio-accent)]"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mark-francis-galan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="rounded-full border border-[var(--folio-line)] p-3 transition hover:-translate-y-0.5 hover:border-[var(--folio-accent)]"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="rounded-[1.8rem] border border-[var(--folio-line)] bg-[var(--folio-surface)] p-6 sm:p-8"
                >
                    <label
                        className="absolute -left-[9999px]"
                        aria-hidden="true"
                    >
                        Website
                        <input
                            tabIndex={-1}
                            autoComplete="off"
                            value={form.website}
                            onChange={(event) =>
                                setForm({
                                    ...form,
                                    website: event.target.value,
                                })
                            }
                        />
                    </label>
                    <label className="block text-sm" htmlFor="name">
                        Name
                        <input
                            id="name"
                            value={form.name}
                            onChange={(event) =>
                                setForm({ ...form, name: event.target.value })
                            }
                            className="mt-2 w-full rounded-2xl border border-[var(--folio-line)] bg-transparent px-4 py-3 transition outline-none focus:border-[var(--folio-accent)]"
                            placeholder="Your name"
                        />
                    </label>
                    {errors.name && (
                        <p className="mt-1 text-xs text-red-400">
                            {errors.name}
                        </p>
                    )}

                    <label className="mt-5 block text-sm" htmlFor="email">
                        Email
                        <input
                            id="email"
                            type="email"
                            value={form.email}
                            onChange={(event) =>
                                setForm({ ...form, email: event.target.value })
                            }
                            className="mt-2 w-full rounded-2xl border border-[var(--folio-line)] bg-transparent px-4 py-3 transition outline-none focus:border-[var(--folio-accent)]"
                            placeholder="you@company.com"
                        />
                    </label>
                    {errors.email && (
                        <p className="mt-1 text-xs text-red-400">
                            {errors.email}
                        </p>
                    )}

                    <label className="mt-5 block text-sm" htmlFor="message">
                        Message
                        <textarea
                            id="message"
                            rows={5}
                            value={form.message}
                            onChange={(event) =>
                                setForm({
                                    ...form,
                                    message: event.target.value,
                                })
                            }
                            className="mt-2 w-full resize-none rounded-2xl border border-[var(--folio-line)] bg-transparent px-4 py-3 transition outline-none focus:border-[var(--folio-accent)]"
                            placeholder="Role, timeline, or the project you want to talk about."
                        />
                    </label>
                    {errors.message && (
                        <p className="mt-1 text-xs text-red-400">
                            {errors.message}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={sending}
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--folio-accent)] px-5 py-3 text-sm font-semibold text-[var(--folio-accent-ink)] transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
                    >
                        <Mail className="h-4 w-4" />
                        {sending ? 'Sending' : 'Send the message'}
                    </button>
                    {sent && (
                        <p className="mt-3 text-sm text-[var(--folio-muted)]">
                            Sent. I will reply to the email you wrote.
                        </p>
                    )}
                    {failure && (
                        <p className="mt-3 text-sm text-red-400">{failure}</p>
                    )}
                </form>
            </div>
        </section>
    );
}
