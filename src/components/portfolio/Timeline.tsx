import { Briefcase, Building, Calendar, GraduationCap, MapPin } from "lucide-react";
import { education, experience } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./primitives";

export function Experience() {
  return (
    <section id="experience" className="relative py-12">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience & Education"
          title="Professional Journey & Academic Background"
          description="Real-world engineering roles, deployed platforms, and core Computer Science & AI foundation."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Professional Experience Column */}
          <div>
            <div className="mb-6 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Briefcase size={18} />
              </span>
              <h3 className="text-xl font-bold">Professional Experience</h3>
            </div>

            <ol className="relative border-l border-glass-border pl-6 space-y-8">
              {experience.map((item) => (
                <li key={item.role} className="relative">
                  <span className="absolute -left-[1.85rem] top-1.5 flex h-3 w-3 items-center justify-center">
                    <span className="h-3 w-3 rounded-full bg-gradient-to-br from-primary to-accent shadow-[var(--shadow-soft)]" />
                  </span>
                  <Reveal>
                    <div className="glass-card glow-hover p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="rounded-full border border-secondary/25 bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                          {item.kind}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar size={13} />
                          {item.period}
                        </span>
                      </div>

                      <h4 className="mt-4 text-lg font-bold">{item.role}</h4>
                      <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-accent">
                        <span className="inline-flex items-center gap-1">
                          <Building size={13} />
                          {item.org}
                        </span>
                        {item.location ? (
                          <span className="inline-flex items-center gap-1 text-muted-foreground">
                            <MapPin size={13} />
                            {item.location}
                          </span>
                        ) : null}
                      </div>

                      <ul className="mt-4 space-y-2">
                        {item.points.map((point) => (
                          <li key={point} className="text-xs leading-relaxed text-muted-foreground">
                            • {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          {/* Education Column */}
          <div>
            <div className="mb-6 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <GraduationCap size={18} />
              </span>
              <h3 className="text-xl font-bold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((item) => (
                <Reveal key={item.degree}>
                  <div className="glass-card glow-hover p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                        <GraduationCap size={20} />
                      </span>
                      <span className="rounded-full border border-glass-border bg-glass px-3 py-1 text-xs text-muted-foreground">
                        {item.period}
                      </span>
                    </div>

                    <h4 className="mt-5 text-lg font-bold">{item.org}</h4>
                    <p className="mt-1 text-sm font-medium text-secondary">{item.degree}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.field}</p>

                    <div className="mt-4 inline-block rounded-xl border border-secondary/20 bg-secondary/10 px-3.5 py-1.5 text-xs font-semibold text-secondary">
                      {item.detail}
                    </div>

                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Core Coursework & Concepts:
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-1.5">
                        {item.coursework.map((course) => (
                          <li
                            key={course}
                            className="rounded-full border border-glass-border bg-glass px-2.5 py-1 text-xs text-foreground/80"
                          >
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return null;
}
