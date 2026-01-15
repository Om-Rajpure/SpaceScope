import { Eye, MapPin, Moon, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import { AuroraForecast } from '@/data/cosmicWeatherData';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface AuroraProbabilityIndicatorProps {
  forecasts: AuroraForecast[];
  kpIndex: number;
}

const AuroraProbabilityIndicator = ({ forecasts, kpIndex }: AuroraProbabilityIndicatorProps) => {
  const getOverallProbability = () => {
    if (kpIndex >= 7) return { label: 'Excellent', value: 95, color: 'text-aurora-green' };
    if (kpIndex >= 5) return { label: 'Good', value: 75, color: 'text-aurora-green' };
    if (kpIndex >= 4) return { label: 'Moderate', value: 50, color: 'text-star-yellow' };
    if (kpIndex >= 3) return { label: 'Fair', value: 30, color: 'text-solar-orange' };
    return { label: 'Low', value: 15, color: 'text-muted-foreground' };
  };

  const overall = getOverallProbability();
  const topForecasts = forecasts.slice(0, 3);

  const getMinLatitude = () => {
    if (kpIndex >= 9) return '40°';
    if (kpIndex >= 7) return '50°';
    if (kpIndex >= 5) return '55°';
    if (kpIndex >= 3) return '60°';
    return '65°+';
  };

  return (
    <TooltipProvider>
      <div className="glass-card p-6">
        <h3 className="font-display text-xl font-bold mb-2 flex items-center gap-2">
          <Eye className="w-5 h-5 text-aurora-green" />
          Aurora Probability
        </h3>
        <p className="text-muted-foreground text-sm mb-6">
          Can you see the Northern Lights tonight?
        </p>

        {/* Main probability gauge */}
        <div className="relative mb-6">
          <div className="flex items-center justify-center gap-8">
            {/* Circular gauge */}
            <div className="relative w-32 h-32">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="hsl(var(--muted))"
                  strokeWidth="8"
                />
                {/* Progress arc */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="hsl(var(--aurora-green))"
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "0 251.2" }}
                  animate={{ 
                    strokeDasharray: `${overall.value * 2.512} 251.2`
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{
                    filter: 'drop-shadow(0 0 6px hsl(var(--aurora-green) / 0.5))'
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`font-display text-3xl font-bold ${overall.color}`}>
                  {overall.value}%
                </span>
                <span className="text-xs text-muted-foreground">{overall.label}</span>
              </div>
            </div>

            {/* Key info */}
            <div className="space-y-4">
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">Visible from</p>
                      <p className="font-medium">{getMinLatitude()} latitude</p>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Minimum latitude where aurora may be visible based on current Kp index</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <div className="flex items-center gap-2">
                    <Moon className="w-4 h-4 text-muted-foreground" />
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">Best time</p>
                      <p className="font-medium">11 PM - 2 AM</p>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Optimal viewing window when skies are darkest</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Top viewing locations */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-muted-foreground">Top Viewing Locations</h4>
          {topForecasts.map((forecast, index) => (
            <motion.div
              key={forecast.location}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-aurora-green/20 flex items-center justify-center">
                  <span className="text-aurora-green font-bold text-sm">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-sm">{forecast.location}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Cloud className="w-3 h-3" />
                    <span>{forecast.conditions}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-display font-bold text-aurora-green">
                  {forecast.probability}%
                </p>
                <p className="text-xs text-muted-foreground">{forecast.bestTime}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tip */}
        <div className="mt-4 p-3 rounded-lg bg-aurora-green/10 border border-aurora-green/20">
          <p className="text-sm text-aurora-green">
            💡 For best results: Get away from city lights, let your eyes adjust for 20 minutes, and look toward the northern horizon!
          </p>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default AuroraProbabilityIndicator;
