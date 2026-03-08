import ParticleCanvas from "./components/ParticleCanvas";
import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import About         from "./components/About";
import Projects      from "./components/Projects";
import Architecture  from "./components/Architecture";
import Credentials   from "./components/Credentials";
import Education     from "./components/Education";
import { CTA, Footer } from "./components/CTA";

export default function App() {
  return (
    <>
      <ParticleCanvas />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Architecture />
        <Credentials />
        <Education />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
