import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We will get back to you soon.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-blue-600 p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
            <p className="text-blue-100 mb-10 leading-relaxed">
              Have questions? We're here to help. Reach out to us for more information about admissions, tours, or curriculum.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4 items-center">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-blue-200 text-xs font-bold uppercase tracking-widest">Call Us</p>
                  <p className="font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-center">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-blue-200 text-xs font-bold uppercase tracking-widest">Email Us</p>
                  <p className="font-semibold">admissions@evergreen.edu</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-center">
                <div className="bg-white/10 p-3 rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-blue-200 text-xs font-bold uppercase tracking-widest">Visit Us</p>
                  <p className="font-semibold">123 Education Way, Green Valley, CA 90210</p>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-10 border-t border-white/10 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                <span className="sr-only">Instagram</span>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 p-12">
            <h4 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">First Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Last Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Doe" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all bg-white">
                  <option>Admissions Inquiry</option>
                  <option>General Question</option>
                  <option>Campus Tour Request</option>
                  <option>Careers</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea 
                  required
                  rows={4} 
                  placeholder="How can we help you?" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};