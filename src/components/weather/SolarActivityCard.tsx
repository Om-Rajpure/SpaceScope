import { Sun, TrendingUp, Activity, Flame } from 'lucide-react';
import { SolarData } from '@/data/cosmicWeatherData';

interface SolarActivityCardProps {
  data: SolarData;
}

const SolarActivityCard = ({ data }: SolarActivityCardProps) => {
  const getKpColor = (kp: number) => {
    if (kp <= 2) return 'text-aurora-green';
    if (kp <= 4) return 'text-star-yellow';
    if (kp <= 6) return 'text-solar-orange';
    return 'text-mars-red';
  };

  return (
    <div className="glass-card p-6 lg:p-8 glow-border">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl bg-gradient-solar flex items-center justify-center">
          <Sun className="w-7 h-7 text-white" />
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold">Solar Activity</h2>
          <p className="text-muted-foreground">Real-time space weather conditions</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-muted/30 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Solar Wind</span>
          </div>
          <div className="font-display text-2xl font-bold text-solar-orange">
            {data.solarWindSpeed} <span className="text-sm font-normal text-muted-foreground">km/s</span>
          </div>
        </div>
        
        <div className="bg-muted/30 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Kp Index</span>
          </div>
          <div className={`font-display text-2xl font-bold ${getKpColor(data.kpIndex)}`}>
            {data.kpIndex}
          </div>
        </div>
        
        <div className="bg-muted/30 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">X-Ray Flux</span>
          </div>
          <div className="font-display text-2xl font-bold text-nebula-blue">
            {data.xRayFlux}
          </div>
        </div>
        
        <div className="bg-muted/30 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Sun className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Sunspot #</span>
          </div>
          <div className="font-display text-2xl font-bold text-star-yellow">
            {data.sunspotNumber}
          </div>
        </div>
        
        <div className="bg-muted/30 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Proton Flux</span>
          </div>
          <div className="font-display text-2xl font-bold text-cosmic-purple">
            {data.protonFlux} <span className="text-sm font-normal text-muted-foreground">pfu</span>
          </div>
        </div>
        
        <div className="bg-muted/30 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Electron Flux</span>
          </div>
          <div className="font-display text-2xl font-bold text-nebula-blue">
            {data.electronFlux}e<sup>3</sup>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span className="w-2 h-2 bg-aurora-green rounded-full animate-pulse" />
        <span className="text-muted-foreground">Last updated: {data.lastUpdated}</span>
      </div>
    </div>
  );
};

export default SolarActivityCard;
