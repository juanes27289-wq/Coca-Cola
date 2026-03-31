import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus } from 'lucide-react';
import { Product } from '@/constants';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute top-4 right-4">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-coke-red hover:text-white transition-colors">
            <Plus size={20} />
          </button>
        </div>

        <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <Link
            to={`/products/${product.id}`}
            className="w-full bg-white text-coke-black py-3 rounded-full font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-coke-red hover:text-white transition-colors"
          >
            Learn More
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div className="p-6">
        <div className="text-xs font-bold text-coke-red uppercase tracking-widest mb-2">
          {product.category}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-coke-red transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
}
