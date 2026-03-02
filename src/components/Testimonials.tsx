import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Parent of Grade 10 Student",
    text: "Evergreen Academy has been a transformative experience for our daughter. The teachers are incredibly supportive and the focus on holistic development is exactly what we were looking for.",
    image: "https://i.pravatar.cc/150?img=32"
  },
  {
    name: "Michael Chen",
    role: "Alumni, Class of 2021",
    text: "The STEM programs at Evergreen gave me a solid foundation for my university studies. I'm now pursuing Engineering and I feel far ahead of my peers thanks to the practical lab experience.",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    name: "Elena Rodriguez",
    role: "Current Senior Student",
    text: "Being part of the Art and Drama clubs has helped me discover my passion. The school truly encourages us to explore our creative sides alongside our academic goals.",
    image: "https://i.pravatar.cc/150?img=47"
  }
];

export const Testimonials = () => {
  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Community</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">What Our Students & Parents Say</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col relative"
          >
            <Quote className="absolute top-8 right-8 text-blue-100" size={48} />
            <div className="flex gap-1 mb-6 text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-slate-600 mb-8 flex-1 italic relative z-10">
              "{testimonial.text}"
            </p>
            <div className="flex items-center gap-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-14 h-14 rounded-full border-2 border-blue-50"
              />
              <div>
                <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                <p className="text-slate-400 text-xs">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};