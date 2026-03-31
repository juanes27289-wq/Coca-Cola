import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video Placeholder / Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/coke-hero/1920/1080"
          alt="Coca-Cola Refreshment"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-display text-white mb-6 uppercase leading-tight"
        >
          Open <span className="text-coke-red">Happiness</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white/90 mb-10 font-light tracking-wide"
        >
          Experience the real magic in every sip. Refreshing the world, one moment at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/products"
            className="bg-coke-red text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-red-700 transition-all group"
          >
            Explore Flavors
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/campaigns"
            className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-coke-black transition-all"
          >
            Real Magic
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
