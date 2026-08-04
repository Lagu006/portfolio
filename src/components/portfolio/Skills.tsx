import { Brain, Code2, Database, LayoutTemplate, Server, Wrench } from "lucide-react";
import * as Si from "react-icons/si";
import * as Vsc from "react-icons/vsc";
import * as Fa6 from "react-icons/fa6";
import { skillGroups } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./primitives";

const groupIcons: Record<string, typeof Code2> = {
  code: Code2,
  layout: LayoutTemplate,
  server: Server,
  database: Database,
  brain: Brain,
  wrench: Wrench,
};

type IconMap = Record<string, React.ComponentType<{ size?: number; className?: string }>>;

const iconMap: IconMap = {
  ...(Si as unknown as IconMap),
  ...(Vsc as unknown as IconMap),
  ...(Fa6 as unknown as IconMap),
};

/** Animated skill bar that fills. */
function SkillBar({ level }: { level: number }) {
  return (
    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
      <div
        className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-700"
        style={{ width: `${level}%` }}
      />
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A stack tuned for AI products"
          description="Languages, frameworks and tooling I use to take models from notebook to production."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const GroupIcon = groupIcons[group.icon] ?? Code2;
            return (
              <Reveal key={group.title}>
                <div className="glass-card glow-hover h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-secondary/25 bg-secondary/10 text-secondary">
                      <GroupIcon size={18} />
                    </span>
                    <h3 className="text-lg">{group.title}</h3>
                  </div>

                  <ul className="mt-6 space-y-5">
                    {group.skills.map((skill) => {
                      const SkillIcon = iconMap[skill.icon];
                      return (
                        <li key={skill.name}>
                          <div className="flex items-center justify-between text-sm">
                            <span className="flex items-center gap-2.5">
                              {SkillIcon ? (
                                <SkillIcon size={16} className="text-accent" />
                              ) : (
                                <Code2 size={16} className="text-accent" />
                              )}
                              {skill.name}
                            </span>
                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          </div>
                          <SkillBar level={skill.level} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
