import { motion } from 'motion/react';
import Hero from '@/components/Hero';
import FlavorFinder from '@/components/FlavorFinder';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS, CAMPAIGNS } from '@/constants';
import { ArrowRight, Globe, Heart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Social Proof / Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Globe, label: 'Countries', value: '200+' },
              { icon: Heart, label: 'Happy Moments', value: '1.9B+' },
              { icon: Zap, label: 'Years of Magic', value: '135+' },
              { icon: Globe, label: 'Sustainability', value: '100%' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="space-y-2"
              >
                <stat.icon className="mx-auto text-coke-red mb-2" size={24} />
                <div className="text-3xl font-display font-bold">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-display mb-6">Discover Your <span className="text-coke-red">Flavor</span></h2>
              <p className="text-xl text-gray-600">From the classic taste you love to exciting new variations, there's a Coca-Cola for every moment.</p>
            </div>
            <Link
              to="/products"
              className="text-coke-red font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all group"
            >
              View All Products
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Highlight */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={CAMPAIGNS[0].image}
            alt={CAMPAIGNS[0].title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-coke-red/80 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-8xl font-display uppercase tracking-tighter">{CAMPAIGNS[0].title}</h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              {CAMPAIGNS[0].description}
            </p>
            <button className="bg-white text-coke-red px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl">
              {CAMPAIGNS[0].cta}
            </button>
          </motion.div>
        </div>
      </section>

      <FlavorFinder />

      {/* Newsletter Section */}
      <section className="py-24 px-6 bg-coke-red text-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-display">Join the Magic</h2>
          <p className="text-xl opacity-90">Subscribe to get exclusive access to new products, limited edition drops, and special events.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/30 rounded-full py-4 px-8 focus:outline-none focus:bg-white focus:text-coke-black transition-all placeholder:text-white/50"
            />
            <button className="bg-white text-coke-red px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-100 transition-all">
              Sign Up
            </button>
          </div>
          <p className="text-xs opacity-60">By signing up, you agree to our Privacy Policy and Terms of Use.</p>
        </div>
      </section>
    </main>
  );
}
