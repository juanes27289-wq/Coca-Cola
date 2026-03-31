import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Campaigns', path: '/campaigns' },
  { name: 'Stories', path: '/stories' },
  { name: 'Sustainability', path: '/sustainability' },
  { name: 'Connect', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <motion.img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg"
            alt="Coca-Cola"
            className={cn("h-8 transition-all", scrolled ? "filter-none" : "brightness-0 invert")}
            whileHover={{ scale: 1.05 }}
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-semibold uppercase tracking-widest transition-colors hover:text-coke-red',
                scrolled ? 'text-coke-black' : 'text-white',
                location.pathname === link.path && 'text-coke-red'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button className={cn("p-2", scrolled ? "text-coke-black" : "text-white")}>
            <Search size={20} />
          </button>
          <button className={cn("p-2", scrolled ? "text-coke-black" : "text-white")}>
            <ShoppingBag size={20} />
          </button>
          <button
            className="md:hidden p-2 text-coke-red"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl md:hidden p-6 flex flex-col space-y-4"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-bold uppercase tracking-widest text-coke-black hover:text-coke-red',
                  location.pathname === link.path && 'text-coke-red'
                )}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
