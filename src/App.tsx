import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Timeline";
import { Certifications } from "@/components/portfolio/Certifications";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import {
  AnimatedBackdrop,
  MouseGlow,
  ScrollProgress,
} from "@/components/portfolio/primitives";

export function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden flex flex-col justify-between">
      <ScrollProgress />
      <AnimatedBackdrop />
      <MouseGlow />
      <Navbar />

      <main className="relative z-10 flex-1 space-y-16 sm:space-y-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Resume />
        <Contact />
      </main>

      <div className="relative z-10 mt-20">
        <Footer />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
