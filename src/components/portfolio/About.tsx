import { Brain, CheckCircle2, Code2, Database, GraduationCap, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { aboutPoints, profile, stats } from "@/lib/portfolio-data";
import { Counter, Reveal, SectionHeading } from "./primitives";

const icons = [Sparkles, Code2, Brain, Database, GraduationCap, CheckCircle2];

export function About({ onNavigate }: { onNavigate?: (tab: string) => void }) {
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
    <section id="about" className="relative py-12">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering AI & Scalable Backend Systems"
          description="A complete profile overview — background, university, core competencies and technical impact."
        />

        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal className="glass-card glow-hover p-7 sm:p-9">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary font-display text-2xl text-primary-foreground shadow-[var(--shadow-soft)] font-bold">
                {profile.shortName[0]}
              </span>
              <div>
                <h3 className="text-2xl font-bold tracking-tight">{profile.name}</h3>
                <p className="text-sm font-medium text-secondary">
                  {profile.roleTitle}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} className="text-accent" />
                    {profile.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Mail size={14} className="text-accent" />
                    {profile.email}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Phone size={14} className="text-accent" />
                    {profile.phone}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-glass-border bg-glass/60 p-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary">
                Professional Summary
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                {profile.summary}
              </p>
            </div>

            <h4 className="mt-7 text-xs font-semibold uppercase tracking-wider text-secondary">
              Core Competencies & Experience
            </h4>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {aboutPoints.map((point, i) => {
                const Icon = icons[i % icons.length]!;
                return (
                  <li
                    key={point}
                    className="flex gap-3 rounded-xl border border-glass-border bg-glass p-4 text-xs leading-relaxed text-muted-foreground"
                  >
                    <Icon size={16} className="mt-0.5 shrink-0 text-accent" />
                    <span>{point}</span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 cursor-pointer"
              >
                View My Projects
              </button>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-glass-border bg-glass px-5 py-2.5 text-sm font-semibold transition-colors hover:border-secondary/50 hover:text-secondary cursor-pointer"
              >
                Get In Touch
              </button>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {stats.map((stat) => (
              <Reveal key={stat.label}>
                <div className="glass-card flex items-center justify-between p-6 transition-all duration-300 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1">
                  <div>
                    <p className="font-display text-3xl text-gradient">
                      <Counter
                        value={stat.value}
                        suffix={stat.suffix}
                        decimals={"decimals" in stat ? (stat.decimals as number) : 0}
                      />
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                  <span className="h-12 w-1 rounded-full bg-gradient-to-b from-primary to-accent" />
                </div>
              </Reveal>
            ))}

            <Reveal>
              <div className="glass-card p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <GraduationCap size={20} />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold">Parul University</h4>
                    <p className="text-xs text-muted-foreground">Gujarat, India · Jun 2023 – Present</p>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-secondary font-medium">
                  B.Tech in Computer Science Engineering (AI & ML)
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  CGPA: <strong className="text-foreground">6.55 / 10.0</strong>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
