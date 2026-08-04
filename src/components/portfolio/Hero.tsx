import { useEffect, useState } from "react";
import { ArrowRight, FolderGit2, Mail, Sparkles } from "lucide-react";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import heroImage from "@/assets/hero-workspace.jpg";
import { profile } from "@/lib/portfolio-data";

/** Typewriter cycling through the profile roles. */
function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length] ?? "";
    const complete = text === word;
    const delay = deleting ? 35 : complete ? 1600 : 70;

    const timer = setTimeout(() => {
      if (!deleting && complete) return setDeleting(true);
      if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
        return;
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text || words[0];
}

const socials = [
  { label: "GitHub", href: profile.github, Icon: SiGithub },
  { label: "LinkedIn", href: profile.linkedin, Icon: FaLinkedin },
  { label: "LeetCode", href: profile.leetcode, Icon: SiLeetcode },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
];

export function Hero({ onNavigate }: { onNavigate?: (tab: string) => void }) {
  const typed = useTypewriter(profile.roles);

  const scrollTo = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative isolate flex min-h-[90vh] items-center overflow-hidden pt-24 pb-16">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-1.5 text-xs font-medium tracking-wide text-secondary">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            Open to SDE & ML Engineer Roles · Parul University
          </span>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Hello, I&apos;m
          </p>
          <h1 className="mt-2 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <p
            className="mt-4 min-h-[2.5rem] font-display text-xl text-secondary sm:text-2xl"
            aria-live="polite"
          >
            {typed}
            <span className="ml-1 inline-block h-6 w-[2px] translate-y-1 animate-pulse bg-accent" />
          </p>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 cursor-pointer"
            >
              <FolderGit2 size={17} /> View Projects <ArrowRight size={15} />
            </button>
            <button
              type="button"
              onClick={() => scrollTo("about")}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-glass-border bg-glass px-5 py-3 text-sm font-semibold transition-colors hover:border-secondary/50 hover:text-secondary cursor-pointer"
            >
              <Sparkles size={16} className="text-accent" /> About Me
            </button>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-accent/40 px-5 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/10 cursor-pointer"
            >
              <Mail size={16} /> Contact Me
            </button>
          </div>

          <ul className="mt-8 flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-glass-border bg-glass text-muted-foreground transition-all hover:-translate-y-1 hover:border-secondary/50 hover:text-secondary"
                >
                  <Icon size={17} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="animate-float glass-card overflow-hidden rounded-[1.4rem] p-2 shadow-[var(--shadow-soft)]">
            <img
              src={heroImage}
              alt="AI developer workspace with neural network diagnostics"
              width={1024}
              height={1024}
              className="aspect-square h-full w-full rounded-[1rem] object-cover"
            />
          </div>
          <div className="glass-card absolute -bottom-4 -left-4 px-4 py-3 text-sm shadow-xl backdrop-blur-xl">
            <p className="font-display text-lg text-accent font-bold">200+ LeetCode</p>
            <p className="text-xs text-muted-foreground">DSA & Problem Solving</p>
          </div>
          <div className="glass-card absolute -top-4 -right-4 px-4 py-3 text-sm shadow-xl backdrop-blur-xl">
            <p className="font-display text-lg text-secondary font-bold">3 Production AI Apps</p>
            <p className="text-xs text-muted-foreground">Healthcare & Pricing</p>
          </div>
        </div>
      </div>
    </section>
  );
}
