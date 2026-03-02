import React, { useState, useEffect } from 'react';
import { GraduationCap, Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavbarProps {
  activeSection: string;
}

export const Navbar = ({ activeSection }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Academics', href: '#academics', id: 'academics' },
    { name: 'Admissions', href: '#admissions', id: 'admissions' },
    { name: 'Campus Life', href: '#campus', id: 'campus' },
    { name: 'News', href: '#news', id: 'news' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
        isScrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-2 rounded-lg text-white group-hover:bg-blue-700 transition-colors">
            <GraduationCap size={28} />
          </div>
          <span className={cn(
            "font-bold text-xl tracking-tight transition-colors",
            isScrolled ? "text-slate-900" : "text-slate-900 md:text-white"
          )}>
            Evergreen Academy
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600",
                isScrolled 
                  ? (activeSection === link.id ? "text-blue-600 font-bold" : "text-slate-600") 
                  : (activeSection === link.id ? "text-white font-bold underline underline-offset-8 decoration-2" : "text-white/80 hover:text-white")
              )}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-semibold transition-all",
              isScrolled 
                ? "bg-blue-600 text-white hover:bg-blue-700" 
                : "bg-white text-blue-600 hover:bg-slate-100 shadow-lg"
            )}
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "lg:hidden p-2 rounded-lg",
            isScrolled ? "text-slate-900" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={cn(
                  "text-lg font-medium py-2 flex items-center justify-between",
                  activeSection === link.id ? "text-blue-600" : "text-slate-600"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
                <ChevronRight size={18} className="text-slate-300" />
              </a>
            ))}
            <a 
              href="#contact" 
              className="mt-4 bg-blue-600 text-white py-4 rounded-xl text-center font-bold shadow-lg shadow-blue-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Enquire Today
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};