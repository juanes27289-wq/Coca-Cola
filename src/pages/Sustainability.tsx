import { motion } from 'motion/react';
import { Droplets, Recycle, Wind, Leaf, ArrowRight } from 'lucide-react';

const GOALS = [
  {
    icon: Recycle,
    title: "World Without Waste",
    description: "Our goal is to collect and recycle every bottle or can we sell by 2030.",
    metric: "100%",
    label: "Recyclable Packaging"
  },
  {
    icon: Droplets,
    title: "Water Stewardship",
    description: "We return 100% of the water used in our finished beverages to nature and communities.",
    metric: "160B+",
    label: "Liters Returned"
  },
  {
    icon: Wind,
    title: "Climate Action",
    description: "Reducing our absolute greenhouse gas emissions by 25% by 2030.",
    metric: "25%",
    label: "Reduction Goal"
  }
];

export default function Sustainability() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
            <Leaf size={16} />
            Our Planet Matters
          </div>
          <h1 className="text-5xl md:text-8xl font-display mb-6 uppercase">A Better <span className="text-green-600">Shared Future</span></h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to making a positive difference in the world through sustainable business practices and community empowerment.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-[500px] rounded-[3rem] overflow-hidden mb-24">
          <img
            src="https://picsum.photos/seed/eco/1920/1000"
            alt="Sustainability"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white space-y-4 max-w-2xl px-6">
              <h2 className="text-4xl md:text-6xl font-display uppercase">Refreshing the Planet</h2>
              <p className="text-xl font-light">Taking bold action to protect our environment for generations to come.</p>
            </div>
          </div>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {GOALS.map((goal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-50 flex flex-col items-center text-center space-y-6"
            >
              <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                <goal.icon size={40} />
              </div>
              <h3 className="text-2xl font-bold">{goal.title}</h3>
              <p className="text-gray-500 leading-relaxed">{goal.description}</p>
              <div className="pt-6 border-t border-gray-100 w-full">
                <div className="text-4xl font-display text-green-600">{goal.metric}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-2">{goal.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Section */}
        <section className="bg-coke-black text-white rounded-[4rem] overflow-hidden flex flex-col lg:flex-row">
          <div className="flex-1 p-12 md:p-24 space-y-8">
            <h2 className="text-4xl md:text-6xl font-display uppercase leading-tight">Packaging <span className="text-coke-red">Innovation</span></h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              We're reimagining our packaging to reduce waste. From 100% recycled plastic bottles to plant-based materials, we're leading the way toward a circular economy.
            </p>
            <ul className="space-y-4">
              {[
                "100% Recyclable packaging globally",
                "Increasing use of recycled content",
                "Innovating in refillable and fountain solutions",
                "Partnering with local communities for collection"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg">
                  <div className="w-2 h-2 bg-coke-red rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-white text-coke-black px-10 py-4 rounded-full font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-coke-red hover:text-white transition-all">
              Read Our 2025 Report <ArrowRight size={20} />
            </button>
          </div>
          <div className="flex-1">
            <img
              src="https://picsum.photos/seed/recycle/800/1000"
              alt="Recycling"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
