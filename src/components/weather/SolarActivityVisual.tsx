import AnimatedSun from './AnimatedSun';
import { SolarData } from '@/data/cosmicWeatherData';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface SolarActivityVisualProps {
  data: SolarData;
}

const SolarActivityVisual = ({ data }: SolarActivityVisualProps) => {
  const getIntensity = (): 'low' | 'medium' | 'high' | 'extreme' => {
    if (data.kpIndex >= 7 || data.solarWindSpeed >= 700) return 'extreme';
    if (data.kpIndex >= 5 || data.solarWindSpeed >= 550) return 'high';
    if (data.kpIndex >= 3 || data.solarWindSpeed >= 450) return 'medium';
    return 'low';
  };

  const intensity = getIntensity();

  const getIntensityLabel = () => {
    switch (intensity) {
      case 'low': return { label: 'Quiet', color: 'text-aurora-green' };
      case 'medium': return { label: 'Active', color: 'text-star-yellow' };
      case 'high': return { label: 'Strong', color: 'text-solar-orange' };
      case 'extreme': return { label: 'Extreme', color: 'text-mars-red' };
    }
  };

  const intensityConfig = getIntensityLabel();

  return (
    <TooltipProvider>
      <div className="glass-card p-6">
        <h3 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-solar-orange animate-pulse" />
          Solar Activity Indicator
        </h3>
        
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <AnimatedSun intensity={intensity} />
          </div>
          
          <div className="flex-1 space-y-4">
            <Tooltip>
              <TooltipTrigger className="w-full text-left">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">Activity Level</span>
                  <span className={`font-display font-bold text-xl ${intensityConfig.color}`}>
                    {intensityConfig.label}
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Overall solar activity based on Kp index and solar wind speed combined.</p>
              </TooltipContent>
            </Tooltip>
            
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-1000 ${
                  intensity === 'low' ? 'bg-aurora-green w-1/4' :
                  intensity === 'medium' ? 'bg-star-yellow w-2/4' :
                  intensity === 'high' ? 'bg-solar-orange w-3/4' :
                  'bg-mars-red w-full'
                }`}
                style={{
                  boxShadow: intensity === 'extreme' 
                    ? '0 0 10px hsl(0 90% 60% / 0.5)' 
                    : 'none'
                }}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <Tooltip>
                <TooltipTrigger className="text-left">
                  <div>
                    <p className="text-muted-foreground">X-Ray Flux</p>
                    <p className="font-medium">{data.xRayFlux}</p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Solar X-ray output. Class A/B is quiet, C is moderate, M is strong, X is extreme.</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger className="text-left">
                  <div>
                    <p className="text-muted-foreground">Sunspot Number</p>
                    <p className="font-medium">{data.sunspotNumber}</p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Count of visible sunspots. More sunspots = more solar activity. Currently in Solar Cycle 25.</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default SolarActivityVisual;
