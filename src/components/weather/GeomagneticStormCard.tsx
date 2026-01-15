import { Zap, Clock, AlertTriangle } from 'lucide-react';
import { GeomagneticStorm } from '@/data/cosmicWeatherData';

interface GeomagneticStormCardProps {
  storm: GeomagneticStorm;
}

const GeomagneticStormCard = ({ storm }: GeomagneticStormCardProps) => {
  const getStormLevelColor = (level: string) => {
    switch (level) {
      case 'G1': return 'star-yellow';
      case 'G2': return 'solar-orange';
      case 'G3': return 'solar-orange';
      case 'G4': return 'mars-red';
      case 'G5': return 'mars-red';
      default: return 'muted-foreground';
    }
  };

  const colorClass = getStormLevelColor(storm.level);

  return (
    <div className="glass-card p-6 lg:p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-14 h-14 rounded-xl bg-${colorClass}/20 flex items-center justify-center`}>
          <Zap className={`w-7 h-7 text-${colorClass}`} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h2 className="font-display text-2xl font-bold">Geomagnetic Storm</h2>
            <span className={`px-2 py-0.5 rounded-full text-sm font-bold bg-${colorClass}/20 text-${colorClass}`}>
              {storm.level}
            </span>
          </div>
          <p className="text-muted-foreground">{storm.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-muted/30 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Expected Start</span>
          </div>
          <div className="font-medium text-sm">{storm.expectedStart}</div>
        </div>
        <div className="bg-muted/30 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Expected End</span>
          </div>
          <div className="font-medium text-sm">{storm.expectedEnd}</div>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-solar-orange" />
          Expected Impacts
        </h3>
        <ul className="space-y-2">
          {storm.impacts.map((impact, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className={`w-1.5 h-1.5 rounded-full bg-${colorClass} mt-1.5 flex-shrink-0`} />
              {impact}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GeomagneticStormCard;
