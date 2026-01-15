import { Sparkles, MapPin, Clock, Cloud } from 'lucide-react';
import { AuroraForecast } from '@/data/cosmicWeatherData';

interface AuroraForecastCardProps {
  forecasts: AuroraForecast[];
}

const AuroraForecastCard = ({ forecasts }: AuroraForecastCardProps) => {
  const getProbabilityColor = (prob: number) => {
    if (prob >= 80) return 'text-aurora-green';
    if (prob >= 60) return 'text-star-yellow';
    if (prob >= 40) return 'text-solar-orange';
    return 'text-muted-foreground';
  };

  const getProbabilityBg = (prob: number) => {
    if (prob >= 80) return 'bg-aurora-green';
    if (prob >= 60) return 'bg-star-yellow';
    if (prob >= 40) return 'bg-solar-orange';
    return 'bg-muted';
  };

  return (
    <div className="glass-card p-6 lg:p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl bg-gradient-aurora flex items-center justify-center">
          <Sparkles className="w-7 h-7 text-white" />
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold">Aurora Forecast</h2>
          <p className="text-muted-foreground">Best locations for aurora viewing tonight</p>
        </div>
      </div>

      <div className="space-y-4">
        {forecasts.map((forecast, index) => (
          <div 
            key={index}
            className="bg-muted/20 rounded-xl p-4 hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cosmic-purple" />
                <span className="font-medium">{forecast.location}</span>
              </div>
              <div className="text-right">
                <div className={`font-display text-xl font-bold ${getProbabilityColor(forecast.probability)}`}>
                  {forecast.probability}%
                </div>
                <div className="text-xs text-muted-foreground">probability</div>
              </div>
            </div>
            
            <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden mb-3">
              <div 
                className={`h-full ${getProbabilityBg(forecast.probability)} rounded-full`}
                style={{ width: `${forecast.probability}%` }}
              />
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{forecast.bestTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Cloud className="w-3.5 h-3.5" />
                <span>{forecast.conditions}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuroraForecastCard;
