import React from 'react';
import { GraduationCap, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <GraduationCap size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                Evergreen Academy
              </span>
            </a>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Excellence in education since 1995. We are dedicated to providing a nurturing environment where students can thrive academically and personally.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6">Quick Links</h5>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Academics', 'Admissions', 'Campus Life', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-slate-500 hover:text-blue-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6">Resources</h5>
            <ul className="space-y-4">
              {['Parent Portal', 'Student Handbook', 'School Calendar', 'Alumni Network', 'Careers', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6">Newsletter</h5>
            <p className="text-slate-500 mb-4 text-sm">Stay updated with the latest news and events from Evergreen Academy.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="px-4 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2024 Evergreen Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-slate-400 text-sm">
            Made with <Heart size={14} className="text-red-400 fill-red-400" /> for the next generation.
          </div>
        </div>
      </div>
    </footer>
  );
};