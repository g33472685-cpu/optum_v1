import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const quizSteps = [
  {
    id: 'vehicle',
    step: '01',
    question: 'Your Vehicle Type?',
    options: ['Luxury Sedan', 'Full-size SUV', 'Sports Car', 'Daily Hatch']
  },
  {
    id: 'condition',
    step: '02',
    question: 'Current Paint Condition?',
    options: ['Brand New / Flawless', 'Minor Swirls & Scratches', 'Faded or Oxidized', 'Needs Major Correction']
  },
  {
    id: 'goal',
    step: '03',
    question: 'Primary Protection Goal?',
    options: ['Maximum Scratch Resistance (PPF)', 'High Gloss & Easy Wash (Ceramic)', 'Ultimate Protection (Both)', 'Interior Restoration']
  }
];

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const handleSelect = (option: string) => {
    setAnswers(prev => ({ ...prev, [quizSteps[currentStep].id]: option }));
    
    setTimeout(() => {
      if (currentStep < quizSteps.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        setIsComplete(true);
      }
    }, 300);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsComplete(false);
  };

  return (
    <section className="bg-zinc-950 relative overflow-hidden" id="quiz">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold mb-4"
          >
            Find Your Perfect <span className="text-amber-500">Protection</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400"
          >
            Take our 3-step quiz to get a personalized service recommendation.
          </motion.p>
        </div>

        <div className="bg-[#111111] border border-zinc-800/60 rounded-2xl p-8 md:p-12 shadow-2xl">
          <AnimatePresence mode="wait">
            {!isComplete ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="w-10 h-1 bg-amber-500 mx-auto mb-4 rounded-full"></div>
                <p className="text-amber-500 font-bold text-sm tracking-wider mb-2">
                  Step {quizSteps[currentStep].step}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-10">
                  {quizSteps[currentStep].question}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {quizSteps[currentStep].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(option)}
                      className={`p-6 rounded-2xl border transition-all duration-300 text-center font-medium ${
                        answers[quizSteps[currentStep].id] === option
                          ? 'bg-amber-500/10 border-amber-500 text-amber-500'
                          : 'bg-[#1a1a1a] border-[#2a2a2a] text-zinc-300 hover:bg-[#222] hover:border-zinc-600 hover:text-white'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="complete"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-amber-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Analysis Complete</h3>
                <p className="text-zinc-400 mb-8 max-w-md mx-auto">
                  Based on your {answers.vehicle} and goals, we have the perfect protection package for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#contact" className="px-8 py-4 bg-amber-500 text-zinc-950 font-bold rounded-full hover:bg-amber-400 transition-colors">
                    Get Your Custom Quote
                  </a>
                  <button onClick={resetQuiz} className="px-8 py-4 bg-zinc-900 text-white font-medium rounded-full border border-zinc-800 hover:bg-zinc-800 transition-colors">
                    Retake Quiz
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
