import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
