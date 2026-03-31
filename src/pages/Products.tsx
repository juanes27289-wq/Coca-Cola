import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/constants';
import { Filter, Search } from 'lucide-react';

const CATEGORIES = ['All', 'Original', 'Zero Sugar', 'Flavors', 'Diet'];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-display mb-6 uppercase">Our <span className="text-coke-red">Products</span></h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the full range of Coca-Cola refreshments. From the original taste to sugar-free options and exciting flavors.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                  activeCategory === category
                    ? 'bg-coke-red text-white shadow-lg'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-3 pl-12 pr-6 focus:outline-none focus:border-coke-red transition-all"
            />
          </div>
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">🥤</div>
            <h3 className="text-2xl font-bold mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your filters or search query.</p>
          </div>
        )}
      </div>
    </main>
  );
}
