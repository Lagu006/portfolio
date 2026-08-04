import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { profile } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./primitives";

/** Validated on submit — mirrors what a server handler would enforce. */
const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  subject: z.string().trim().min(1, "Please add a subject").max(150),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(1000),
});

const details = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, Icon: Phone },
  { label: "Location", value: profile.location, href: undefined, Icon: MapPin },
  {
    label: "GitHub",
    value: profile.github.replace(/^https?:\/\//, ""),
    href: profile.github,
    Icon: SiGithub,
  },
  {
    label: "LinkedIn",
    value: profile.linkedin.replace(/^https?:\/\//, ""),
    href: profile.linkedin,
    Icon: FaLinkedin,
  },
];

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = contactSchema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      subject: form.get("subject"),
      message: form.get("message"),
    });

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const key = String(issue.path[0]);
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      toast.error("Please fix the highlighted fields");
      return;
    }

    setErrors({});
    setSending(true);
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      parsed.data.subject,
    )}&body=${encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`)}`;
    window.location.href = mailto;
    setTimeout(() => {
      setSending(false);
      toast.success("Message ready to send in your mail app");
    }, 600);
  };

  const fieldClass =
    "mt-2 w-full rounded-xl border border-glass-border bg-glass px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-secondary/60 focus:ring-2 focus:ring-ring/40";

  return (
    <section id="contact" className="relative">
      <div className="section-shell pt-0">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Open to internships, collaborations and interesting AI problems."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal direction="left">
            <form onSubmit={onSubmit} className="glass-card p-7 sm:p-9" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="text-sm font-medium">
                    Name
                  </label>
                  <input id="contact-name" name="name" maxLength={100} className={fieldClass} placeholder="Your name" />
                  {errors["name"] ? (
                    <p className="mt-2 text-xs text-destructive">{errors["name"]}</p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    maxLength={255}
                    className={fieldClass}
                    placeholder="you@example.com"
                  />
                  {errors["email"] ? (
                    <p className="mt-2 text-xs text-destructive">{errors["email"]}</p>
                  ) : null}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="contact-subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  maxLength={150}
                  className={fieldClass}
                  placeholder="Internship opportunity"
                />
                {errors["subject"] ? (
                  <p className="mt-2 text-xs text-destructive">{errors["subject"]}</p>
                ) : null}
              </div>

              <div className="mt-5">
                <label htmlFor="contact-message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  maxLength={1000}
                  className={fieldClass}
                  placeholder="Tell me a bit about the role or project…"
                />
                {errors["message"] ? (
                  <p className="mt-2 text-xs text-destructive">{errors["message"]}</p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={sending}
                className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 disabled:opacity-60 cursor-pointer"
              >
                <Send size={17} /> {sending ? "Sending…" : "Send Message"}
              </button>
            </form>
          </Reveal>

          <div className="grid gap-5">
            <Reveal direction="right">
              <ul className="glass-card divide-y divide-border p-2">
                {details.map(({ label, value, href, Icon }) => (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-glass"
                      >
                        <Icon size={18} className="text-accent" />
                        <span>
                          <span className="block text-xs text-muted-foreground">{label}</span>
                          <span className="text-sm">{value}</span>
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4">
                        <Icon size={18} className="text-accent" />
                        <span>
                          <span className="block text-xs text-muted-foreground">{label}</span>
                          <span className="text-sm">{value}</span>
                        </span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <div className="glass-card relative overflow-hidden p-6">
                <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden />
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary/20 blur-3xl" aria-hidden />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.2em] text-secondary">Based in</p>
                  <p className="mt-3 font-display text-2xl">{profile.location}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Available for remote roles across IST ± 8 hours.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs text-success">
                    <span className="h-1.5 w-1.5 rounded-full bg-success" /> Responds within 24h
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
