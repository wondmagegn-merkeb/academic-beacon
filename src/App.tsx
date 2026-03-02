import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { Academics } from './components/Academics';
import { Admissions } from './components/Admissions';
import { CampusLife } from './components/CampusLife';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { News } from './components/News';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'academics', 'admissions', 'campus', 'news', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && 
            scrollPosition >= element.offsetTop && 
            scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar activeSection={activeSection} />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-20 bg-slate-50">
          <Features />
          <Stats />
        </section>

        <section id="academics">
          <Academics />
        </section>

        <section id="admissions">
          <Admissions />
        </section>

        <section id="campus">
          <CampusLife />
        </section>

        <section id="testimonials" className="py-20 bg-slate-50">
          <Testimonials />
        </section>

        <section id="news" className="py-20 bg-white">
          <News />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;