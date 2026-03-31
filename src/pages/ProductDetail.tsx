import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCTS } from '@/constants';
import { ArrowLeft, MapPin, ShoppingCart, Info, Droplets, Flame } from 'lucide-react';
import { useEffect } from 'react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-6">
        <h1 className="text-4xl font-display">Product Not Found</h1>
        <Link to="/products" className="text-coke-red font-bold uppercase tracking-widest flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Products
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-12 text-gray-500 font-bold uppercase tracking-widest flex items-center gap-2 hover:text-coke-red transition-colors"
        >
          <ArrowLeft size={20} /> Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gray-50"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest text-coke-red shadow-lg">
              {product.category}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-display uppercase leading-tight">{product.name}</h1>
              <p className="text-2xl text-gray-600 font-light leading-relaxed">{product.description}</p>
            </div>

            {/* Nutrition Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-50 p-6 rounded-2xl text-center space-y-2 border border-gray-100">
                <Flame className="mx-auto text-orange-500" size={24} />
                <div className="text-2xl font-bold">{product.calories}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Calories</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl text-center space-y-2 border border-gray-100">
                <Droplets className="mx-auto text-blue-500" size={24} />
                <div className="text-2xl font-bold">{product.sugar}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Sugar</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl text-center space-y-2 border border-gray-100">
                <Info className="mx-auto text-coke-red" size={24} />
                <div className="text-2xl font-bold">12oz</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Serving</div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-8 h-px bg-coke-red" />
                The Story
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {product.story}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex-1 bg-coke-red text-white py-5 rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-red-700 transition-all shadow-xl">
                <ShoppingCart size={20} />
                Buy Now
              </button>
              <button className="flex-1 bg-white border-2 border-gray-200 text-coke-black py-5 rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:border-coke-red hover:text-coke-red transition-all">
                <MapPin size={20} />
                Find Near You
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
