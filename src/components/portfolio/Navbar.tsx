import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";
import { useTheme } from "./use-theme";
import { cn } from "@/lib/utils";

const sectionIds: string[] = ["home", "about", "skills", "projects", "experience", "certifications", "resume", "contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        if (!id) continue;
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setOpen(false);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${sectionId}`);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-glass-border bg-background/90 backdrop-blur-2xl shadow-lg shadow-black/20"
          : "bg-background/40 backdrop-blur-md",
      )}
    >
      <nav
        aria-label="Main Navigation"
        className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:h-[5rem]"
      >
        {/* Logo / Brand */}
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="group flex items-center gap-2.5 text-left focus:outline-none cursor-pointer"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary font-display text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform group-hover:scale-105">
            {profile.shortName[0]}
          </span>
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold tracking-tight text-foreground">
              {profile.shortName}
            </span>
            <span className="text-[10px] text-muted-foreground hidden sm:block">AI & ML Engineer</span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-1 lg:flex bg-glass/70 border border-glass-border p-1.5 rounded-full shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className={cn(
                    "relative rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer",
                    isActive
                      ? "text-primary-foreground font-bold shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-glass",
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary to-secondary shadow-[var(--shadow-soft)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  ) : null}
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-glass-border bg-glass text-muted-foreground transition-colors hover:text-secondary cursor-pointer"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("resume")}
            className="hidden rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-xs font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 sm:inline-flex cursor-pointer"
          >
            Resume
          </button>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-glass-border bg-glass text-foreground lg:hidden cursor-pointer"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-glass-border bg-background/95 backdrop-blur-2xl lg:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(link.id)}
                      className={cn(
                        "w-full text-left rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer",
                        isActive
                          ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold"
                          : "text-muted-foreground hover:bg-glass hover:text-foreground",
                      )}
                    >
                      <span>{link.label}</span>
                      {isActive ? <span className="text-xs">Current</span> : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
