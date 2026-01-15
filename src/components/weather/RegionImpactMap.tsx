import { Globe2, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface Region {
  id: string;
  name: string;
  latitude: string;
  impact: 'low' | 'moderate' | 'high' | 'severe';
  effects: string[];
}

const regions: Region[] = [
  {
    id: 'arctic',
    name: 'Arctic Region',
    latitude: '66°N - 90°N',
    impact: 'high',
    effects: ['Strong aurora activity', 'HF radio blackouts possible', 'GPS accuracy reduced'],
  },
  {
    id: 'north-high',
    name: 'Northern High Latitudes',
    latitude: '55°N - 66°N',
    impact: 'moderate',
    effects: ['Aurora visible on clear nights', 'Minor communication issues', 'Slight GPS errors'],
  },
  {
    id: 'mid-north',
    name: 'Northern Mid-Latitudes',
    latitude: '30°N - 55°N',
    impact: 'low',
    effects: ['Aurora rare but possible during storms', 'Systems mostly unaffected'],
  },
  {
    id: 'equator',
    name: 'Equatorial Region',
    latitude: '30°S - 30°N',
    impact: 'low',
    effects: ['Minimal space weather effects', 'Ionospheric scintillation possible'],
  },
  {
    id: 'mid-south',
    name: 'Southern Mid-Latitudes',
    latitude: '30°S - 55°S',
    impact: 'low',
    effects: ['Aurora australis rare but possible', 'Systems mostly unaffected'],
  },
  {
    id: 'south-high',
    name: 'Southern High Latitudes',
    latitude: '55°S - 66°S',
    impact: 'moderate',
    effects: ['Aurora australis visible', 'Similar effects to northern counterpart'],
  },
  {
    id: 'antarctic',
    name: 'Antarctic Region',
    latitude: '66°S - 90°S',
    impact: 'high',
    effects: ['Strong aurora australis', 'Research station communications affected'],
  },
];

const RegionImpactMap = () => {
  const getImpactColor = (impact: Region['impact']) => {
    switch (impact) {
      case 'low': return { bg: 'bg-aurora-green', text: 'text-aurora-green', glow: 'shadow-aurora-green/30' };
      case 'moderate': return { bg: 'bg-star-yellow', text: 'text-star-yellow', glow: 'shadow-star-yellow/30' };
      case 'high': return { bg: 'bg-solar-orange', text: 'text-solar-orange', glow: 'shadow-solar-orange/30' };
      case 'severe': return { bg: 'bg-mars-red', text: 'text-mars-red', glow: 'shadow-mars-red/30' };
    }
  };

  const getImpactLabel = (impact: Region['impact']) => {
    switch (impact) {
      case 'low': return 'Low Impact';
      case 'moderate': return 'Moderate Impact';
      case 'high': return 'High Impact';
      case 'severe': return 'Severe Impact';
    }
  };

  return (
    <TooltipProvider>
      <div className="glass-card p-6">
        <h3 className="font-display text-xl font-bold mb-2 flex items-center gap-2">
          <Globe2 className="w-5 h-5 text-nebula-blue" />
          Region-Wise Impact Map
        </h3>
        <p className="text-muted-foreground text-sm mb-6">
          See which parts of Earth are most affected by current space weather
        </p>

        {/* Visual Earth representation */}
        <div className="relative mb-6">
          <div className="h-40 rounded-xl bg-gradient-to-b from-nebula-blue/20 via-cosmic-purple/10 to-nebula-blue/20 overflow-hidden relative">
            {/* Latitude bands */}
            {regions.map((region, index) => {
              const colors = getImpactColor(region.impact);
              const heightPercent = 100 / regions.length;
              
              return (
                <Tooltip key={region.id}>
                  <TooltipTrigger asChild>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`absolute left-0 right-0 ${colors.bg}/30 cursor-pointer hover:${colors.bg}/50 transition-colors border-b border-border/30`}
                      style={{
                        top: `${index * heightPercent}%`,
                        height: `${heightPercent}%`,
                      }}
                    >
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${colors.bg}`} />
                        <span className="text-xs font-medium hidden sm:inline">{region.name}</span>
                      </div>
                      <div className={`absolute right-4 top-1/2 -translate-y-1/2 text-xs ${colors.text}`}>
                        {region.latitude}
                      </div>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="max-w-xs">
                    <p className="font-medium mb-1">{region.name}</p>
                    <ul className="text-xs space-y-1">
                      {region.effects.map((effect, i) => (
                        <li key={i}>• {effect}</li>
                      ))}
                    </ul>
                  </TooltipContent>
                </Tooltip>
              );
            })}

            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 rounded-full border-2 border-nebula-blue/30 flex items-center justify-center"
              >
                <Globe2 className="w-6 h-6 text-nebula-blue/50" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 text-xs">
          {(['low', 'moderate', 'high', 'severe'] as const).map((impact) => {
            const colors = getImpactColor(impact);
            return (
              <div key={impact} className="flex items-center gap-1.5">
                <div className={`w-3 h-3 rounded-full ${colors.bg}`} />
                <span className="text-muted-foreground">{getImpactLabel(impact)}</span>
              </div>
            );
          })}
        </div>

        {/* Quick tips */}
        <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-border/50">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">Your location matters!</span> If you're in high-latitude regions (above 55°), you're more likely to experience space weather effects like aurora visibility and communication issues.
            </p>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default RegionImpactMap;
