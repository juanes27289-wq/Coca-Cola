import { motion } from 'motion/react';
import { CAMPAIGNS } from '@/constants';
import { Play, ArrowRight } from 'lucide-react';

export default function Campaigns() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-8xl font-display mb-6 uppercase">Real <span className="text-coke-red">Magic</span></h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Coca-Cola brings people together through music, sports, and shared moments of joy across the globe.
          </p>
        </div>

        <div className="space-y-32">
          {CAMPAIGNS.map((campaign, i) => (
            <motion.section
              key={campaign.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="flex-1 relative group cursor-pointer overflow-hidden rounded-3xl aspect-video">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="text-coke-red fill-coke-red ml-1" size={32} />
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-8">
                <div className="inline-block bg-coke-red/10 text-coke-red px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest">
                  Featured Campaign
                </div>
                <h2 className="text-4xl md:text-6xl font-display uppercase">{campaign.title}</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {campaign.description}
                </p>
                <button className="bg-coke-red text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-red-700 transition-all group">
                  {campaign.cta}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Global Impact Section */}
        <section className="mt-32 py-24 bg-gray-50 rounded-[4rem] px-12 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-6xl font-display uppercase">A Global <span className="text-coke-red">Connection</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="text-5xl font-display text-coke-red">1.9B</div>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Servings Daily</p>
              </div>
              <div className="space-y-4">
                <div className="text-5xl font-display text-coke-red">200+</div>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Countries</p>
              </div>
              <div className="space-y-4">
                <div className="text-5xl font-display text-coke-red">500+</div>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Brands</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              From the biggest stadiums to the smallest dinner tables, Coca-Cola is there to refresh the world and make a difference.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
