import React from 'react';
import { Calendar, FileText, UserPlus, Info, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: <Info size={24} />,
    title: "Initial Inquiry",
    desc: "Fill out our online inquiry form or visit the campus for an open day."
  },
  {
    icon: <FileText size={24} />,
    title: "Application",
    desc: "Submit the application form along with previous academic transcripts."
  },
  {
    icon: <Calendar size={24} />,
    title: "Assessment",
    desc: "Students undergo a baseline assessment followed by a friendly interview."
  },
  {
    icon: <CheckCircle2 size={24} />,
    title: "Enrollment",
    desc: "Upon acceptance, complete the registration by paying the enrollment fee."
  }
];

export const Admissions = () => {
  return (
    <div className="py-24 bg-slate-950 text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/5">
            <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Admissions</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Join Our Growing Community</h3>
            <p className="text-slate-400 text-lg mb-10">
              We seek students who are curious, motivated, and eager to contribute to our vibrant school community.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-4">
                <div className="bg-blue-600/20 p-3 rounded-xl h-fit">
                  <UserPlus className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Scholarships Available</h4>
                  <p className="text-slate-400 text-sm">We offer merit-based and need-based financial aid for deserving students.</p>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-4">
                <div className="bg-emerald-600/20 p-3 rounded-xl h-fit">
                  <Calendar className="text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Upcoming Open Day</h4>
                  <p className="text-slate-400 text-sm">Saturday, October 15th, 2024. Register your interest now.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="relative">
              <div className="absolute top-1/2 left-4 md:left-8 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-transparent -translate-y-1/2"></div>
              <div className="space-y-12">
                {steps.map((step, index) => (
                  <div key={index} className="relative pl-16 md:pl-24">
                    <div className="absolute left-0 md:left-4 top-0 w-10 md:w-12 h-10 md:h-12 bg-blue-600 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                      {step.icon}
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                      <span className="text-blue-400 text-xs font-bold uppercase mb-2 block">Step 0{index + 1}</span>
                      <h4 className="text-2xl font-bold mb-3">{step.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};