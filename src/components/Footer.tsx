import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-coke-black text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg"
              alt="Coca-Cola"
              className="h-10 brightness-0 invert"
              referrerPolicy="no-referrer"
            />
            <p className="text-gray-400 leading-relaxed">
              Refreshing the world and making a difference. Join us in our journey to create real magic every day.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-coke-red hover:border-coke-red transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase tracking-widest mb-8">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/products" className="hover:text-white transition-colors">Our Products</Link></li>
              <li><Link to="/campaigns" className="hover:text-white transition-colors">Campaigns</Link></li>
              <li><Link to="/stories" className="hover:text-white transition-colors">Stories</Link></li>
              <li><Link to="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase tracking-widest mb-8">Support</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-lg font-bold uppercase tracking-widest mb-8">Stay Refreshed</h4>
            <p className="text-gray-400">Get the latest news and exclusive offers delivered to your inbox.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 focus:outline-none focus:border-coke-red transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-coke-red rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© 2026 The Coca-Cola Company. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
