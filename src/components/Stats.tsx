import React from 'react';

const stats = [
  { label: "Graduates Worldwide", value: "5000+" },
  { label: "Clubs & Activities", value: "45+" },
  { label: "Average Class Size", value: "22" },
  { label: "Faculty Members", value: "120+" }
];

export const Stats = () => {
  return (
    <div className="mt-24 bg-blue-600 py-16 rounded-[3rem] mx-6 md:mx-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-10 -ml-32 -mb-32"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {stat.value}
              </span>
              <span className="text-blue-100 font-medium text-sm md:text-base uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};