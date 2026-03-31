import { motion } from 'motion/react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const STORIES = [
  {
    id: 1,
    title: "Coke Studio: The Global Stage for Emerging Talent",
    excerpt: "Discover how we're bringing artists from different cultures together to create something truly magical.",
    image: "https://picsum.photos/seed/story1/800/600",
    category: "Music",
    author: "Sarah Jenkins",
    date: "March 28, 2026"
  },
  {
    id: 2,
    title: "Sustainability: Our Journey to a World Without Waste",
    excerpt: "An inside look at our latest innovations in sustainable packaging and water stewardship.",
    image: "https://picsum.photos/seed/story2/800/600",
    category: "Environment",
    author: "David Chen",
    date: "March 25, 2026"
  },
  {
    id: 3,
    title: "The History of the Iconic Coca-Cola Contour Bottle",
    excerpt: "How a design competition in 1915 created one of the most recognizable shapes in the world.",
    image: "https://picsum.photos/seed/story3/800/600",
    category: "History",
    author: "Michael Ross",
    date: "March 20, 2026"
  }
];

export default function Stories() {
  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-8xl font-display mb-6 uppercase">Brand <span className="text-coke-red">Stories</span></h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the culture, history, and innovations behind the world's most iconic beverage brand.
          </p>
        </div>

        {/* Featured Story */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-[600px] rounded-[3rem] overflow-hidden mb-24 group cursor-pointer"
        >
          <img
            src={STORIES[0].image}
            alt={STORIES[0].title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-12 left-12 right-12 text-white max-w-3xl space-y-6">
            <div className="inline-block bg-coke-red px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Featured Story
            </div>
            <h2 className="text-4xl md:text-6xl font-display uppercase leading-tight">{STORIES[0].title}</h2>
            <p className="text-xl text-white/80 font-light">{STORIES[0].excerpt}</p>
            <button className="flex items-center gap-2 font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
              Read Story <ArrowRight size={20} />
            </button>
          </div>
        </motion.section>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {STORIES.slice(1).map((story) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-gray-100">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-coke-red">
                  <span className="flex items-center gap-1"><Tag size={14} /> {story.category}</span>
                  <span className="flex items-center gap-1 text-gray-400"><Calendar size={14} /> {story.date}</span>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-coke-red transition-colors leading-tight">
                  {story.title}
                </h3>
                <p className="text-gray-600 line-clamp-3">
                  {story.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-gray-400">
                  <User size={16} /> By {story.author}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <section className="mt-32 bg-gray-50 rounded-[4rem] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl space-y-6">
            <h2 className="text-4xl md:text-5xl font-display uppercase">Never Miss a <span className="text-coke-red">Moment</span></h2>
            <p className="text-lg text-gray-600">Get the latest stories, recipes, and exclusive brand updates delivered straight to your inbox.</p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Email address"
              className="bg-white border border-gray-200 rounded-full py-4 px-8 focus:outline-none focus:border-coke-red transition-all w-full sm:w-64"
            />
            <button className="bg-coke-red text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-red-700 transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
