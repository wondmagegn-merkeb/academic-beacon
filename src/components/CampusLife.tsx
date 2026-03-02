import React from 'react';

const facilities = [
  {
    title: "Digital Learning Hub",
    category: "Academics",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Olympic Grade Pool",
    category: "Sports",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/04fbbb68-e206-413d-9422-bf278ebb6e55/sports-facility-37c8e45a-1772462191187.webp"
  },
  {
    title: "Creative Arts Studio",
    category: "Arts",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/04fbbb68-e206-413d-9422-bf278ebb6e55/art-studio-6882c71c-1772462180500.webp"
  },
  {
    title: "Student Commons",
    category: "Social",
    image: "https://images.unsplash.com/photo-1523050335192-ce115587a1fd?auto=format&fit=crop&q=80&w=1000"
  }
];

export const CampusLife = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Beyond Academics</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">A Life Full of Experiences</h3>
          <p className="text-slate-600 text-lg">
            Our campus is more than just classrooms; it's a living, breathing community where students explore their passions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 transform transition-transform group-hover:-translate-y-2">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 block">{item.category}</span>
                <h4 className="text-xl font-bold text-white">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h4 className="text-3xl font-bold text-slate-900 mb-4">Our Commitment to Well-being</h4>
            <p className="text-slate-600">
              We prioritize the mental and physical health of our students with dedicated counseling services, professional coaches, and a balanced daily schedule that allows for rest and recreation.
            </p>
          </div>
          <div className="flex -space-x-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <img 
                key={i}
                src={`https://i.pravatar.cc/150?img=${i + 10}`} 
                alt="Student"
                className="w-14 h-14 rounded-full border-4 border-white shadow-sm"
              />
            ))}
            <div className="w-14 h-14 rounded-full border-4 border-white bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
              +400
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};