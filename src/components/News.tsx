import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

const newsItems = [
  {
    title: "School Basketball Team Wins District Finals",
    date: "Sep 12, 2024",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "New Science Lab Facilities to be Completed by Winter",
    date: "Aug 28, 2024",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Annual Arts Exhibition: A Showcase of Student Talent",
    date: "Aug 15, 2024",
    category: "Events",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800"
  }
];

export const News = () => {
  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">News & Events</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900">Keeping Our Community Updated</h3>
        </div>
        <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all group">
          View All News <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {newsItems.map((item, index) => (
          <article key={index} className="group cursor-pointer">
            <div className="overflow-hidden rounded-3xl aspect-[16/10] mb-6 relative">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900">
                {item.category}
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
              <Calendar size={14} />
              {item.date}
            </div>
            <h4 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
              {item.title}
            </h4>
          </article>
        ))}
      </div>
    </div>
  );
};