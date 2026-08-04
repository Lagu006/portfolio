import { ArrowDownToLine, Briefcase, Eye, FileText, GraduationCap, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { education, experience, profile, projects, skillGroups } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./primitives";

export function Resume() {
  return (
    <section id="resume" className="relative py-12">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Resume & Credentials"
          title="Recruiter Ready & ATS-Optimized"
          description="Complete professional summary, education at Parul University, technical stack, and deployed projects."
        />

        <Reveal>
          <div className="glass-card glow-hover p-6 sm:p-10">
            {/* Header / Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-glass-border pb-8">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                  <ShieldCheck size={14} /> Available for SDE & ML Engineer Roles
                </span>
                <h3 className="mt-3 text-2xl sm:text-3xl font-bold">{profile.name}</h3>
                <p className="text-sm font-medium text-secondary">{profile.roleTitle}</p>
                <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Mail size={13} /> {profile.email}</span>
                  <span className="inline-flex items-center gap-1"><Phone size={13} /> {profile.phone}</span>
                  <span className="inline-flex items-center gap-1"><MapPin size={13} /> {profile.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={profile.resumeUrl}
                  download
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
                >
                  <ArrowDownToLine size={16} /> Download PDF Resume
                </a>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-glass-border bg-glass px-5 py-2.5 text-sm font-semibold transition-colors hover:border-secondary/50 hover:text-secondary"
                >
                  <Eye size={16} /> Preview Resume
                </a>
              </div>
            </div>

            {/* Resume Body */}
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {/* Left Column: Summary, Experience, Education */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">
                    Professional Summary
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-foreground/90">
                    {profile.summary}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary">
                    <Briefcase size={15} />
                    <h4>Experience</h4>
                  </div>
                  <div className="mt-3 space-y-4">
                    {experience.map((exp) => (
                      <div key={exp.role} className="rounded-xl border border-glass-border bg-glass/60 p-4">
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <p className="text-sm font-bold">{exp.role}</p>
                            <p className="text-xs text-accent">{exp.org} · {exp.location}</p>
                          </div>
                          <span className="text-[11px] text-muted-foreground">{exp.period}</span>
                        </div>
                        <ul className="mt-2 space-y-1">
                          {exp.points.map((pt) => (
                            <li key={pt} className="text-xs text-muted-foreground">• {pt}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary">
                    <GraduationCap size={15} />
                    <h4>Education</h4>
                  </div>
                  <div className="mt-3 space-y-4">
                    {education.map((edu) => (
                      <div key={edu.degree} className="rounded-xl border border-glass-border bg-glass/60 p-4">
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <p className="text-sm font-bold">{edu.org}</p>
                            <p className="text-xs text-secondary">{edu.degree}</p>
                            <p className="text-xs font-semibold text-accent mt-1">{edu.detail}</p>
                          </div>
                          <span className="text-[11px] text-muted-foreground">{edu.period}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Projects & Technical Stack */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary">
                    <FileText size={15} />
                    <h4>Featured Projects</h4>
                  </div>
                  <div className="mt-3 space-y-4">
                    {projects.map((proj) => (
                      <div key={proj.title} className="rounded-xl border border-glass-border bg-glass/60 p-4">
                        <div className="flex justify-between items-start gap-2">
                          <p className="text-sm font-bold">{proj.title}</p>
                          {proj.date ? <span className="text-[11px] text-muted-foreground">{proj.date}</span> : null}
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">{proj.description}</p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {proj.tech.map((t) => (
                            <span key={t} className="rounded border border-glass-border bg-background/50 px-2 py-0.5 text-[10px] text-secondary">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">
                    Technical Skills Summary
                  </h4>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {skillGroups.map((group) => (
                      <div key={group.title} className="rounded-xl border border-glass-border bg-glass/60 p-3">
                        <p className="text-xs font-bold text-foreground">{group.title}</p>
                        <p className="mt-1 text-[11px] text-muted-foreground">
                          {group.skills.map((s) => s.name).join(", ")}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
