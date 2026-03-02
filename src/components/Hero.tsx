import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/04fbbb68-e206-413d-9422-bf278ebb6e55/campus-exterior-fc8c77b1-1772462174271.webp" 
          alt="Evergreen Academy Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 backdrop-blur-md border border-blue-400/30 rounded-full text-blue-100 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Admissions Open for 2024-25
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Empowering Minds, <span className="text-blue-400">Enriching</span> Futures.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-xl">
            At Evergreen Academy, we foster a culture of excellence, innovation, and community, preparing students for the challenges of tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#admissions" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl shadow-blue-900/20"
            >
              Get Started <ArrowRight size={20} />
            </a>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold transition-all flex items-center justify-center gap-2">
              <div className="bg-white text-blue-600 rounded-full p-1">
                <Play size={16} fill="currentColor" />
              </div>
              Virtual Tour
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Info Cards */}
      <div className="hidden lg:flex absolute bottom-12 right-12 gap-6 z-10">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/50 w-64 transform transition-transform hover:-translate-y-2">
          <div className="text-blue-600 font-bold text-3xl mb-1">98%</div>
          <div className="text-slate-600 text-sm font-medium">University Acceptance Rate</div>
        </div>
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/50 w-64 transform transition-transform hover:-translate-y-2">
          <div className="text-blue-600 font-bold text-3xl mb-1">12:1</div>
          <div className="text-slate-600 text-sm font-medium">Student-Teacher Ratio</div>
        </div>
      </div>
    </div>
  );
};