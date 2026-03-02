import React from 'react';
import { BookOpen, Users, Trophy, Globe, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <BookOpen className="text-blue-600" size={28} />,
    title: "Holistic Curriculum",
    description: "Combining rigorous academic standards with creative exploration and practical skills."
  },
  {
    icon: <Users className="text-blue-600" size={28} />,
    title: "Expert Faculty",
    description: "Mentored by passionate educators who are leaders in their respective fields of study."
  },
  {
    icon: <Trophy className="text-blue-600" size={28} />,
    title: "Proven Excellence",
    description: "Consistent high performance in national examinations and international competitions."
  },
  {
    icon: <Globe className="text-blue-600" size={28} />,
    title: "Global Perspective",
    description: "Fostering international mindedness through exchange programs and diverse cohorts."
  },
  {
    icon: <Zap className="text-blue-600" size={28} />,
    title: "Modern Facilities",
    description: "State-of-the-art labs, creative studios, and sports complexes for all-round growth."
  },
  {
    icon: <Heart className="text-blue-600" size={28} />,
    title: "Vibrant Community",
    description: "A supportive environment where every student is known, valued, and encouraged."
  }
];

export const Features = () => {
  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Why Choose Evergreen?</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">We Nurture Potential to Create Future Leaders</h3>
        <p className="text-slate-600 text-lg">
          At Evergreen Academy, education goes beyond the classroom. We provide an environment where curiosity is celebrated and innovation is expected.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all group"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              {React.cloneElement(feature.icon as React.ReactElement<any>, {
                className: "group-hover:text-white transition-colors"
              })}
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
            <p className="text-slate-600 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};