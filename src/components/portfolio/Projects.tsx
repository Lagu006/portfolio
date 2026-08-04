import { Calendar, Check, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import traumaImage from "@/assets/project-trauma.jpg";
import kidneyImage from "@/assets/project-kidney.jpg";
import heroWorkspace from "@/assets/hero-workspace.jpg";
import { projects } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./primitives";

const projectImages: Record<string, string> = {
  "Kidney Stone Detection System": kidneyImage,
  "Trauma Detection & Doctor Connectivity System": traumaImage,
  "Enterprise Dynamic Pricing Engine": heroWorkspace,
};

export function Projects() {
  return (
    <section id="projects" className="relative py-12">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Production & AI Engineering Systems"
          description="Real-world machine learning architectures, CNN medical imaging, and scalable full-stack backend platforms."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => {
            const projectImg = projectImages[project.title] ?? kidneyImage;
            return (
              <Reveal key={project.title}>
                <article className="group glass-card flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-glow)] hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img
                      src={projectImg}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      width={1280}
                      height={800}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    {project.date ? (
                      <span className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 rounded-full border border-glass-border bg-background/80 px-3 py-1 text-xs text-secondary backdrop-blur-md">
                        <Calendar size={13} />
                        {project.date}
                      </span>
                    ) : null}
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mt-5 space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                        Key Features & Workflows:
                      </p>
                      <ul className="space-y-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                            <Check size={14} className="mt-0.5 shrink-0 text-success" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                        Technologies:
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-1.5">
                        {project.tech.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-full border border-glass-border bg-glass px-2.5 py-0.5 text-xs text-secondary"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-7 flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className={
                            link.kind === "code"
                              ? "inline-flex flex-1 min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 shadow-[var(--shadow-soft)]"
                              : "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-glass-border bg-glass px-4 py-2.5 text-xs sm:text-sm font-semibold transition-colors hover:border-secondary/50 hover:text-secondary"
                          }
                        >
                          {link.kind === "code" ? <SiGithub size={16} /> : <ExternalLink size={16} />}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
