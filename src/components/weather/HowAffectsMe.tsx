import { 
  Navigation, 
  Plane, 
  Wifi, 
  Lightbulb, 
  Smartphone, 
  Satellite,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useState } from 'react';
import { RiskMeter } from '@/data/cosmicWeatherData';
import { motion, AnimatePresence } from 'framer-motion';

interface HowAffectsMeProps {
  meters: RiskMeter[];
}

interface ImpactCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  relatedMeters: string[];
  effects: {
    low: string;
    medium: string;
    high: string;
  };
}

const impactCategories: ImpactCategory[] = [
  {
    id: 'navigation',
    title: 'Navigation & GPS',
    icon: Navigation,
    relatedMeters: ['gps'],
    effects: {
      low: 'Your car GPS and phone navigation work perfectly. No delays or errors expected.',
      medium: 'Minor GPS inaccuracies possible. Your navigation might be off by a few meters occasionally.',
      high: 'Significant GPS errors likely. Expect navigation issues - consider having backup directions ready.',
    },
  },
  {
    id: 'flights',
    title: 'Air Travel',
    icon: Plane,
    relatedMeters: ['communication', 'radiation'],
    effects: {
      low: 'Flights operate normally. No additional radiation concern for passengers.',
      medium: 'Some polar route adjustments possible. Pilots may experience minor radio issues.',
      high: 'Airlines may reroute polar flights. Increased radiation exposure for high-altitude flights.',
    },
  },
  {
    id: 'internet',
    title: 'Internet & Streaming',
    icon: Wifi,
    relatedMeters: ['satellite', 'communication'],
    effects: {
      low: 'All satellite internet and streaming services work normally.',
      medium: 'Brief interruptions to satellite internet possible. Your Netflix might buffer occasionally.',
      high: 'Expect satellite internet outages. Consider using wired connections for important calls.',
    },
  },
  {
    id: 'power',
    title: 'Electricity & Power',
    icon: Lightbulb,
    relatedMeters: ['power'],
    effects: {
      low: 'Power grid operates normally. No outages expected from space weather.',
      medium: 'Utility companies are monitoring. Slight voltage fluctuations possible in some areas.',
      high: 'Power grid stress possible. Have flashlights ready, especially in high-latitude areas.',
    },
  },
  {
    id: 'phone',
    title: 'Cell Phone & Radio',
    icon: Smartphone,
    relatedMeters: ['communication'],
    effects: {
      low: 'Cell service and radio work normally. No disruptions expected.',
      medium: 'Some high-frequency radio issues. Cell service mostly unaffected in cities.',
      high: 'Radio blackouts possible. Cell service may be spotty, especially in rural areas.',
    },
  },
  {
    id: 'satellites',
    title: 'Satellites & Space',
    icon: Satellite,
    relatedMeters: ['satellite'],
    effects: {
      low: 'Satellites operating normally. Space Station crew safe.',
      medium: 'Satellite operators making adjustments. Slight service delays possible.',
      high: 'Satellites may need orbit corrections. Some space-based services may be interrupted.',
    },
  },
];

const HowAffectsMe = ({ meters }: HowAffectsMeProps) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const getWorstStatus = (relatedMeters: string[]): 'low' | 'medium' | 'high' => {
    const statuses = relatedMeters.map(meterId => {
      const meter = meters.find(m => m.id === meterId);
      return meter?.status || 'Low';
    });
    
    if (statuses.includes('Severe') || statuses.includes('High')) return 'high';
    if (statuses.includes('Medium')) return 'medium';
    return 'low';
  };

  const getStatusColor = (status: 'low' | 'medium' | 'high') => {
    switch (status) {
      case 'low': return 'text-aurora-green bg-aurora-green/20 border-aurora-green/30';
      case 'medium': return 'text-star-yellow bg-star-yellow/20 border-star-yellow/30';
      case 'high': return 'text-solar-orange bg-solar-orange/20 border-solar-orange/30';
    }
  };

  const getStatusLabel = (status: 'low' | 'medium' | 'high') => {
    switch (status) {
      case 'low': return 'No Impact';
      case 'medium': return 'Minor Impact';
      case 'high': return 'Possible Issues';
    }
  };

  return (
    <div className="glass-card p-6">
      <h3 className="font-display text-xl font-bold mb-2 flex items-center gap-2">
        💡 How Does This Affect Me?
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        See how current space weather impacts your daily life
      </p>
      
      <div className="space-y-3">
        {impactCategories.map((category) => {
          const status = getWorstStatus(category.relatedMeters);
          const Icon = category.icon;
          const isExpanded = expandedCategory === category.id;
          
          return (
            <div 
              key={category.id}
              className="border border-border/50 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
                className="w-full p-4 flex items-center justify-between hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getStatusColor(status)}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">{category.title}</p>
                    <p className={`text-xs ${getStatusColor(status).split(' ')[0]}`}>
                      {getStatusLabel(status)}
                    </p>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className={`p-4 pt-0 text-sm ${getStatusColor(status).split(' ')[0]}`}>
                      <div className={`p-3 rounded-lg ${getStatusColor(status)}`}>
                        {category.effects[status]}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowAffectsMe;
