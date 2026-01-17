import { useEffect } from 'react';
import Navigation from './components/Navigation.tsx';
import Hero from './components/Hero.tsx';
import ChemistrySection from './components/ChemistrySection.tsx';
import PhysicsSection from './components/PhysicsSection.tsx';
import SafetySection from './components/SafetySection.tsx';
import InteractiveSection from './components/InteractiveSection.tsx';
import Conclusion from './components/Conclusion.tsx';
import Sources from './components/Sources.tsx';
import Footer from './components/Footer.tsx';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ChemistrySection />
      <PhysicsSection />
      <SafetySection />
      <InteractiveSection />
      <Conclusion />
      <Sources />
      <Footer />
    </div>
  );
}

export default App;
