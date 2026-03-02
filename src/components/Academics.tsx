import React from 'react';
import { BookOpen, Atom, Palette, Terminal, Calculator, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const programs = [
  {
    icon: <Calculator className="text-orange-500" />,
    title: "Mathematics & Logic",
    level: "Middle & High School",
    description: "Developing critical thinking and analytical problem-solving through advanced mathematical concepts."
  },
  {
    icon: <Atom className="text-blue-500" />,
    title: "Science & Innovation",
    level: "All Grades",
    description: "Hands-on laboratory work across Biology, Chemistry, and Physics to spark scientific curiosity."
  },
  {
    icon: <Terminal className="text-emerald-500" />,
    title: "Computer Science",
    level: "Grade 6 - 12",
    description: "From block coding to advanced Python and Web Development, preparing students for the digital age."
  },
  {
    icon: <Palette className="text-purple-500" />,
    title: "Creative Arts",
    level: "Primary & Secondary",
    description: "Exploring expression through visual arts, sculpture, and design in our professional studios."
  },
  {
    icon: <BookOpen className="text-red-500" />,
    title: "Humanities",
    level: "High School",
    description: "Deep diving into Literature, History, and Social Sciences to understand our world's complex tapestry."
  },
  {
    icon: <Music className="text-pink-500" />,
    title: "Performing Arts",
    level: "Extracurricular",
    description: "Developing stage presence and musical talent through choir, band, and dramatic productions."
  }
];

export const Academics = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Academic Excellence</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">A Curriculum Designed for the 21st Century</h3>
            <p className="text-slate-600 text-lg mb-8">
              We offer a globally-recognized curriculum that balances academic rigor with the development of social and emotional intelligence. Our approach is student-centered and inquiry-based.
            </p>
            <div className="space-y-4">
              {['Advanced Placement (AP) Courses', 'International Baccalaureate (IB) Diploma', 'STEM Integrated Learning'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  </div>
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000" 
              alt="Classroom"
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-600 rounded-3xl -z-0 opacity-10"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                  {React.cloneElement(program.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-1 rounded">
                  {program.level}
                </span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{program.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};