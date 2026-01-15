import { Sun, CloudLightning, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface CosmicStatusSummaryProps {
  status: 'Calm' | 'Moderate' | 'High' | 'Severe';
  kpIndex: number;
  solarWindSpeed: number;
}

const CosmicStatusSummary = ({ status, kpIndex, solarWindSpeed }: CosmicStatusSummaryProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'Calm':
        return {
          icon: Shield,
          color: 'text-aurora-green',
          bg: 'bg-aurora-green/20',
          border: 'border-aurora-green/50',
          glow: 'shadow-[0_0_30px_hsl(160_100%_45%/0.3)]',
          description: 'Space weather is quiet. All systems operating normally.',
          sunIntensity: 'low',
        };
      case 'Moderate':
        return {
          icon: Sun,
          color: 'text-star-yellow',
          bg: 'bg-star-yellow/20',
          border: 'border-star-yellow/50',
          glow: 'shadow-[0_0_30px_hsl(45_100%_70%/0.3)]',
          description: 'Elevated solar activity detected. Minor effects possible.',
          sunIntensity: 'medium',
        };
      case 'High':
        return {
          icon: CloudLightning,
          color: 'text-solar-orange',
          bg: 'bg-solar-orange/20',
          border: 'border-solar-orange/50',
          glow: 'shadow-[0_0_30px_hsl(30_100%_55%/0.3)]',
          description: 'Strong solar activity. Disruptions to technology possible.',
          sunIntensity: 'high',
        };
      case 'Severe':
        return {
          icon: Zap,
          color: 'text-mars-red',
          bg: 'bg-mars-red/20',
          border: 'border-mars-red/50',
          glow: 'shadow-[0_0_30px_hsl(0_90%_60%/0.3)]',
          description: 'Extreme space weather! Significant impacts expected.',
          sunIntensity: 'extreme',
        };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  return (
    <TooltipProvider>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`glass-card ${config.glow} p-6 ${config.border} border-2`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`w-16 h-16 rounded-2xl ${config.bg} flex items-center justify-center`}
            >
              <Icon className={`w-8 h-8 ${config.color}`} />
            </motion.div>
            <div>
              <Tooltip>
                <TooltipTrigger>
                  <h2 className={`font-display text-2xl font-bold ${config.color}`}>
                    {status} Conditions
                  </h2>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>Current overall space weather status based on solar activity, geomagnetic conditions, and particle radiation levels.</p>
                </TooltipContent>
              </Tooltip>
              <p className="text-muted-foreground text-sm mt-1">{config.description}</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <Tooltip>
              <TooltipTrigger>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Kp Index</p>
                  <p className={`font-display text-2xl font-bold ${config.color}`}>{kpIndex}</p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>The Kp Index measures geomagnetic disturbance. 0-3 is quiet, 4-5 is active, 6+ indicates a storm.</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Solar Wind</p>
                  <p className={`font-display text-2xl font-bold ${config.color}`}>{solarWindSpeed} <span className="text-sm">km/s</span></p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Speed of charged particles from the Sun. Normal is 300-500 km/s, high is 600+ km/s.</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </motion.div>
    </TooltipProvider>
  );
};

export default CosmicStatusSummary;
