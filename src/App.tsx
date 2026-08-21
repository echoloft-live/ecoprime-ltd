import { useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import BusinessSolutions from './components/BusinessSolutions';
import ProjectSpecialties from './components/ProjectSpecialties';
import Gas from './components/Gas';
import RealEstate from './components/RealEstate';
import RemoteMonitoring from './components/RemoteMonitoring';
import Training from './components/Training';
import Clients from './components/Clients';
import Framework from './components/Framework';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Intersection Observer hook for scroll-triggered reveal animations.
 * Respects prefers-reduced-motion.
 */
function useReveal() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = rootRef.current;
    if (!root) return;

    const elements = root.querySelectorAll('.reveal');

    if (prefersReduced) {
      elements.forEach((el) => el.classList.add('reveal--in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return rootRef;
}

export default function App() {
  const rootRef = useReveal();

  return (
    <div ref={rootRef}>
      {/* Skip to content link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <About />
        <BusinessSolutions />
        <ProjectSpecialties />
        <Gas />
        <RealEstate />
        <RemoteMonitoring />
        <Training />
        <Clients />
        <Framework />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
