import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Architecture from './components/Architecture';
import Education from './components/Education';
import Credentials from './components/Credentials';
import CTA from './components/CTA';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Architecture />
        <Education />
        <Credentials />
        <CTA />
      </main>
      <footer>
        <div className="foot-copy">
          © {new Date().getFullYear()} Bala Subramanian. All rights reserved.
        </div>
        <div className="foot-links">
          <a href="https://github.com/balavj" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com">Email</a>
        </div>
      </footer>
    </>
  );
}

export default App;
