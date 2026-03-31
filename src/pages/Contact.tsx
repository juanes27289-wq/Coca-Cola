import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, Globe } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-8xl font-display mb-6 uppercase">Connect with <span className="text-coke-red">Us</span></h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question, feedback, or just want to share a magic moment? We're here to listen and help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h2 className="text-3xl font-bold uppercase tracking-tight">Get in Touch</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're a customer, a partner, or a fan, we value your input. Reach out to us through any of these channels.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Phone, title: "Call Us", detail: "1-800-GET-COKE", sub: "Mon-Fri, 9am-7pm EST" },
                { icon: Mail, title: "Email", detail: "support@coca-cola.com", sub: "Response within 24h" },
                { icon: MessageCircle, title: "Live Chat", detail: "Available 24/7", sub: "On our website & app" },
                { icon: Globe, title: "Global Offices", detail: "Atlanta, GA", sub: "World Headquarters" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4">
                  <div className="w-12 h-12 bg-coke-red/10 text-coke-red rounded-full flex items-center justify-center">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-coke-red font-semibold">{item.detail}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-coke-black text-white p-10 rounded-[2.5rem] space-y-6">
              <h3 className="text-2xl font-bold uppercase">Find a Store</h3>
              <p className="text-gray-400">Looking for your favorite Coca-Cola product? Use our interactive store locator to find retailers near you.</p>
              <button className="bg-coke-red text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-red-700 transition-all flex items-center gap-2">
                <MapPin size={20} />
                Open Store Locator
              </button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-50"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">First Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-coke-red transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Last Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-coke-red transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-coke-red transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-coke-red transition-all appearance-none">
                    <option>Product Inquiry</option>
                    <option>Campaign Feedback</option>
                    <option>Sustainability Question</option>
                    <option>Partnership Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-coke-red transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-coke-red text-white py-5 rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-red-700 transition-all shadow-xl"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 space-y-6"
              >
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Send size={40} />
                </div>
                <h2 className="text-3xl font-bold uppercase">Message Sent!</h2>
                <p className="text-gray-500 text-lg">
                  Thank you for reaching out. We've received your message and will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-coke-red font-bold uppercase tracking-widest hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
