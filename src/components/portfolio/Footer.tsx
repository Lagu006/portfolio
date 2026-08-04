import { ArrowUp, Mail } from "lucide-react";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { navLinks, profile } from "@/lib/portfolio-data";

const socials = [
  { label: "GitHub", href: profile.github, Icon: SiGithub },
  { label: "LinkedIn", href: profile.linkedin, Icon: FaLinkedin },
  { label: "LeetCode", href: profile.leetcode, Icon: SiLeetcode },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
];

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${id}`);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-glass-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <button
            type="button"
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2.5 text-left focus:outline-none cursor-pointer"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary font-display text-sm text-primary-foreground font-bold">
              {profile.shortName[0]}
            </span>
            <span className="font-display text-base font-bold">{profile.name}</span>
          </button>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-muted-foreground transition-colors hover:text-secondary cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-glass-border bg-glass text-muted-foreground transition-colors hover:text-secondary"
                >
                  <Icon size={17} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-glass-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. Parul University · Vadodara, India.
          </p>
          <button
            type="button"
            onClick={() => scrollTo("home")}
            aria-label="Back to top"
            className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-glass-border bg-glass px-4 text-sm text-muted-foreground transition-colors hover:border-secondary/50 hover:text-secondary cursor-pointer"
          >
            <ArrowUp size={16} /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
