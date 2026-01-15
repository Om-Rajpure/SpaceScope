import { Wifi, MapPin, Radio, Zap, Eye, Satellite, AlertTriangle } from 'lucide-react';
import { RiskMeter } from '@/data/cosmicWeatherData';

interface ImpactMetersProps {
  meters: RiskMeter[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin,
  Radio,
  Zap,
  Eye,
  Satellite,
  AlertTriangle,
};

const ImpactMeters = ({ meters }: ImpactMetersProps) => {
  const getStatusColor = (status: RiskMeter['status']) => {
    switch (status) {
      case 'Low': return 'aurora-green';
      case 'Medium': return 'star-yellow';
      case 'High': return 'solar-orange';
      case 'Severe': return 'mars-red';
      default: return 'muted-foreground';
    }
  };

  return (
    <div className="glass-card p-6 lg:p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl bg-gradient-cosmic flex items-center justify-center">
          <Wifi className="w-7 h-7 text-white" />
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold">Space-Earth Impact</h2>
          <p className="text-muted-foreground">Current risk levels for Earth systems</p>
        </div>
      </div>

      <div className="space-y-5">
        {meters.map((meter) => {
          const Icon = iconMap[meter.icon] || AlertTriangle;
          const colorClass = getStatusColor(meter.status);
          
          return (
            <div key={meter.id} className="group">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{meter.label}</span>
                </div>
                <span className={`text-sm font-medium text-${colorClass}`}>
                  {meter.status}
                </span>
              </div>
              <div className="h-2 bg-muted/50 rounded-full overflow-hidden mb-2">
                <div 
                  className={`h-full bg-${colorClass} rounded-full transition-all duration-1000`}
                  style={{ width: `${meter.value}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                {meter.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImpactMeters;
