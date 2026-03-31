import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RefreshCw, CheckCircle2 } from 'lucide-react';
import { getFlavorRecommendation } from '@/lib/gemini';
import { cn } from '@/lib/utils';

const QUESTIONS = [
  {
    id: 'mood',
    label: 'How are you feeling right now?',
    options: ['Energetic', 'Relaxed', 'Adventurous', 'Classic'],
  },
  {
    id: 'occasion',
    label: 'What is the occasion?',
    options: ['Party with friends', 'Quiet evening', 'Post-workout', 'Lunch break'],
  },
  {
    id: 'preference',
    label: 'Your taste preference?',
    options: ['Sweet & Bold', 'Crisp & Clean', 'Fruity Twist', 'Zero Compromise'],
  },
];

export default function FlavorFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<{ product: string; reason: string } | null>(null);

  const handleOptionSelect = (option: string) => {
    const currentQuestion = QUESTIONS[step];
    const newAnswers = { ...answers, [currentQuestion.id]: option };
    setAnswers(newAnswers);

    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      getRecommendation(newAnswers);
    }
  };

  const getRecommendation = async (finalAnswers: Record<string, string>) => {
    setLoading(true);
    try {
      const result = await getFlavorRecommendation(
        finalAnswers.mood,
        finalAnswers.occasion,
        finalAnswers.preference
      );
      setRecommendation(result);
    } catch (error) {
      console.error('Failed to get recommendation:', error);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setRecommendation(null);
  };

  return (
    <section className="py-24 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-coke-red/10 text-coke-red px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-4"
          >
            <Sparkles size={16} />
            AI Flavor Finder
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display mb-4">Find Your Perfect Match</h2>
          <p className="text-xl text-gray-600">Let our AI discover the Coca-Cola flavor that fits your vibe today.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center relative">
          <AnimatePresence mode="wait">
            {!recommendation && !loading && (
              <motion.div
                key="question"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex justify-between items-center mb-8">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                    Step {step + 1} of {QUESTIONS.length}
                  </span>
                  <div className="flex gap-2">
                    {QUESTIONS.map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          "h-1.5 w-8 rounded-full transition-all",
                          i <= step ? "bg-coke-red" : "bg-gray-200"
                        )}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold">{QUESTIONS[step].label}</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {QUESTIONS[step].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionSelect(option)}
                      className="p-6 rounded-2xl border-2 border-gray-100 text-left font-semibold hover:border-coke-red hover:bg-coke-red/5 transition-all group flex items-center justify-between"
                    >
                      {option}
                      <div className="w-6 h-6 rounded-full border-2 border-gray-200 group-hover:border-coke-red group-hover:bg-coke-red flex items-center justify-center transition-all">
                        <div className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100" />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {loading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center space-y-6"
              >
                <div className="relative w-24 h-24 mx-auto">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-4 border-coke-red/20 border-t-coke-red rounded-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <RefreshCw className="text-coke-red animate-pulse" size={32} />
                  </div>
                </div>
                <p className="text-xl font-bold animate-pulse">Mixing the perfect magic for you...</p>
              </motion.div>
            )}

            {recommendation && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-8"
              >
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest">
                  <CheckCircle2 size={16} />
                  Your Match Found
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl font-display text-coke-red">{recommendation.product}</h3>
                  <p className="text-xl text-gray-600 italic max-w-lg mx-auto">"{recommendation.reason}"</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                  <button className="bg-coke-red text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-red-700 transition-all w-full sm:w-auto">
                    Buy Now
                  </button>
                  <button
                    onClick={reset}
                    className="text-gray-500 font-bold uppercase tracking-widest hover:text-coke-black transition-all flex items-center gap-2"
                  >
                    <RefreshCw size={18} />
                    Try Again
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
