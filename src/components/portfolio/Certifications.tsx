import { Award, BadgeCheck, Code2, Cpu, ExternalLink, Trophy } from "lucide-react";
import { achievements, certifications, profile } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./primitives";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-12">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Certifications & Milestones"
          title="Verified Credentials & Technical Achievements"
          description="Industry simulation programs, recognized certifications, and competitive problem-solving milestones."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert) => (
            <Reveal key={cert.title}>
              <div className="glass-card glow-hover flex h-full flex-col justify-between p-6 sm:p-7">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-[var(--shadow-soft)]">
                      <BadgeCheck size={24} />
                    </span>
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold">{cert.title}</h3>
                  <p className="mt-1 text-sm font-medium text-secondary">{cert.issuer}</p>
                  {cert.code ? (
                    <p className="mt-2 text-xs font-mono text-muted-foreground">{cert.code}</p>
                  ) : null}
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-glass-border">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-glass-border bg-glass px-4 text-xs font-semibold transition-colors hover:border-secondary/50 hover:text-secondary"
                  >
                    <ExternalLink size={14} />
                    View Certificate on LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mt-14">
          <div className="mb-6 flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <Trophy size={18} />
            </span>
            <h3 className="text-xl font-bold">Key Engineering Milestones</h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item, i) => (
              <Reveal key={item.title}>
                <div className="glass-card h-full p-6 transition-all duration-300 hover:-translate-y-1">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                    {i === 0 ? <Code2 size={20} /> : i === 1 ? <Cpu size={20} /> : i === 2 ? <Award size={20} /> : <Trophy size={20} />}
                  </span>
                  <h4 className="mt-5 text-base font-bold">{item.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Achievements() {
  return null;
}
