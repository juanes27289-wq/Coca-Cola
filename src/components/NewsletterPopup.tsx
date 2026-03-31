import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, ArrowRight } from 'lucide-react';

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeen = localStorage.getItem('coke_newsletter_seen');
      if (!hasSeen) {
        setIsVisible(true);
      }
    }, 10000); // Show after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setIsVisible(false);
    localStorage.setItem('coke_newsletter_seen', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white md:text-coke-black hover:bg-coke-red hover:text-white transition-all"
            >
              <X size={20} />
            </button>

            <div className="flex-1 bg-coke-red p-12 text-white flex flex-col justify-center space-y-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Gift size={32} />
              </div>
              <h2 className="text-4xl font-display uppercase leading-tight">Unlock the <span className="text-white/60">Magic</span></h2>
              <p className="text-lg text-white/80">Join our community and get 15% off your first order plus exclusive access to limited drops.</p>
            </div>

            <div className="flex-1 p-12 flex flex-col justify-center space-y-8 bg-white">
              <div className="space-y-4">
                <h3 className="text-xl font-bold uppercase tracking-tight">Stay Refreshed</h3>
                <p className="text-sm text-gray-500">Enter your email to receive your discount code and start your journey with us.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); close(); }}>
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-gray-50 border border-gray-200 rounded-full py-4 px-6 focus:outline-none focus:border-coke-red transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-coke-red text-white py-4 rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-lg"
                >
                  Get My Discount
                  <ArrowRight size={18} />
                </button>
              </form>

              <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest">
                No spam. Just magic. Unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
