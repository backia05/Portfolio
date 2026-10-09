import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Research from './components/Research';
import Skills from './components/Skills';
import Education from './components/Education';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* Skip to main content for keyboard / screen-reader users */}
      <a href="#about" className="skip-link">Skip to main content</a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Achievements />
        <About />
        <Projects />
        <Experience />
        <Research />
        <Skills />
        <Education />
        <Leadership />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
