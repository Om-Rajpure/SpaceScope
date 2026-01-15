import { useState } from 'react';
import { MessageCircle, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiskMeter } from '@/data/cosmicWeatherData';
import { Button } from '@/components/ui/button';

interface AskSpaceQuestionsProps {
  meters: RiskMeter[];
  kpIndex: number;
}

interface QuickQuestion {
  id: string;
  question: string;
  getAnswer: (meters: RiskMeter[], kpIndex: number) => string;
}

const quickQuestions: QuickQuestion[] = [
  {
    id: 'dangerous',
    question: 'Is this dangerous?',
    getAnswer: (meters, kpIndex) => {
      if (kpIndex >= 7) {
        return "Current conditions are intense, but don't worry! Space weather doesn't directly harm people on Earth's surface. Our atmosphere and magnetic field protect us. However, astronauts in space and high-altitude flights may experience increased radiation exposure.";
      }
      if (kpIndex >= 5) {
        return "There's elevated activity, but you're completely safe on Earth! Our planet's magnetic field acts as a shield. The main effects are on technology like satellites and radio communications, not on people.";
      }
      return "Current space weather is calm and poses no danger whatsoever. You can go about your day without any concerns. This is the normal state of space weather most of the time!";
    },
  },
  {
    id: 'gps',
    question: 'Will my GPS work?',
    getAnswer: (meters) => {
      const gpsMeter = meters.find(m => m.id === 'gps');
      if (!gpsMeter) return "GPS systems should work normally.";
      
      if (gpsMeter.status === 'High' || gpsMeter.status === 'Severe') {
        return "GPS accuracy may be reduced right now. Your navigation might be off by several meters. For critical navigation, consider having a backup plan or wait a few hours for conditions to improve.";
      }
      if (gpsMeter.status === 'Medium') {
        return "GPS is working with minor fluctuations. You might notice occasional inaccuracies, but it should still get you where you need to go. Most apps will handle this automatically.";
      }
      return "Yes! GPS is working perfectly right now. Navigate with confidence - your phone and car GPS should be accurate as usual.";
    },
  },
  {
    id: 'aurora',
    question: 'Can I see aurora tonight?',
    getAnswer: (meters, kpIndex) => {
      const auroraMeter = meters.find(m => m.id === 'aurora');
      const probability = auroraMeter?.value || 0;
      
      if (kpIndex >= 7) {
        return "Excellent aurora viewing conditions! Aurora may be visible even at mid-latitudes (40-50°N). Get away from city lights, look north, and enjoy the show! Best viewing is typically 11 PM - 2 AM local time.";
      }
      if (kpIndex >= 5) {
        return "Good chance for aurora! Visible at high latitudes (55°N and above). If you're in Alaska, Canada, Scandinavia, or northern US states, head somewhere dark and look north tonight.";
      }
      if (probability > 50) {
        return "Aurora is possible at high latitudes. Locations like Fairbanks, Tromsø, or Iceland have a good chance. Check local forecasts and find a dark spot away from city lights.";
      }
      return "Aurora viewing is unlikely for most locations tonight. Activity is too low for visible aurora except at very high latitudes (near the Arctic Circle). Check back during more active conditions!";
    },
  },
  {
    id: 'phone',
    question: 'Will my phone work?',
    getAnswer: (meters) => {
      const commMeter = meters.find(m => m.id === 'communication');
      
      if (commMeter?.status === 'High' || commMeter?.status === 'Severe') {
        return "Cell service in cities should still work, but you may experience some issues in rural areas or with satellite-based services. Standard cellular networks are fairly resilient to space weather.";
      }
      if (commMeter?.status === 'Medium') {
        return "Your phone should work fine! There might be minor issues with some radio-based services, but cellular networks in populated areas are not significantly affected.";
      }
      return "Absolutely! Your phone will work normally. Current space weather conditions have no impact on cellular communications. Call, text, and browse worry-free!";
    },
  },
  {
    id: 'flight',
    question: 'Is my flight affected?',
    getAnswer: (meters, kpIndex) => {
      if (kpIndex >= 7) {
        return "Airlines may reroute polar flights to avoid communication blackout zones and reduce radiation exposure for crew. Check with your airline for any schedule changes, especially for routes over the Arctic or high latitudes.";
      }
      if (kpIndex >= 5) {
        return "Some minor adjustments possible for polar routes. Most flights proceed normally, but there may be slight rerouting for flights over the Arctic. Your airline will inform you of any significant changes.";
      }
      return "No impact on flights! Current conditions are normal. Airlines and air traffic control operate without any space weather concerns. Have a great flight!";
    },
  },
];

const AskSpaceQuestions = ({ meters, kpIndex }: AskSpaceQuestionsProps) => {
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const selectedQ = quickQuestions.find(q => q.id === selectedQuestion);

  return (
    <div className="glass-card p-6">
      <h3 className="font-display text-xl font-bold mb-2 flex items-center gap-2">
        <MessageCircle className="w-5 h-5 text-cosmic-purple" />
        Ask Space Quick Questions
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        Tap a question for an instant, easy-to-understand answer
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {quickQuestions.map((q) => (
          <Button
            key={q.id}
            variant={selectedQuestion === q.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedQuestion(selectedQuestion === q.id ? null : q.id)}
            className="rounded-full"
          >
            {q.question}
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedQ && (
          <motion.div
            key={selectedQuestion}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-muted/50 rounded-xl p-4 relative"
          >
            <button
              onClick={() => setSelectedQuestion(null)}
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
            
            <p className="font-medium text-primary mb-2">{selectedQ.question}</p>
            <p className="text-sm leading-relaxed">
              {selectedQ.getAnswer(meters, kpIndex)}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {!selectedQuestion && (
        <div className="text-center text-muted-foreground text-sm py-4">
          👆 Tap a question above to get your answer
        </div>
      )}
    </div>
  );
};

export default AskSpaceQuestions;
