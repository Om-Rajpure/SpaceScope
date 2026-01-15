import { AlertTriangle, Info, AlertCircle, Clock } from 'lucide-react';
import { SpaceWeatherAlert } from '@/data/cosmicWeatherData';

interface WeatherAlertsProps {
  alerts: SpaceWeatherAlert[];
}

const WeatherAlerts = ({ alerts }: WeatherAlertsProps) => {
  const getAlertStyles = (type: SpaceWeatherAlert['type']) => {
    switch (type) {
      case 'severe':
        return {
          bg: 'bg-mars-red/20',
          border: 'border-mars-red/50',
          icon: AlertTriangle,
          iconColor: 'text-mars-red',
          titleColor: 'text-mars-red',
        };
      case 'warning':
        return {
          bg: 'bg-solar-orange/20',
          border: 'border-solar-orange/50',
          icon: AlertCircle,
          iconColor: 'text-solar-orange',
          titleColor: 'text-solar-orange',
        };
      default:
        return {
          bg: 'bg-nebula-blue/20',
          border: 'border-nebula-blue/50',
          icon: Info,
          iconColor: 'text-nebula-blue',
          titleColor: 'text-nebula-blue',
        };
    }
  };

  if (alerts.length === 0) {
    return (
      <div className="glass-card p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-aurora-green/20 flex items-center justify-center">
            <Info className="w-5 h-5 text-aurora-green" />
          </div>
          <div>
            <h3 className="font-medium text-aurora-green">All Clear</h3>
            <p className="text-sm text-muted-foreground">No active space weather alerts</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-bold flex items-center gap-2">
        <AlertCircle className="w-5 h-5 text-solar-orange" />
        Active Alerts
      </h2>
      
      {alerts.map((alert) => {
        const styles = getAlertStyles(alert.type);
        const Icon = styles.icon;
        
        return (
          <div 
            key={alert.id}
            className={`${styles.bg} ${styles.border} border rounded-xl p-4`}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-background/50 flex items-center justify-center flex-shrink-0">
                <Icon className={`w-5 h-5 ${styles.iconColor}`} />
              </div>
              <div className="flex-1">
                <h3 className={`font-medium ${styles.titleColor} mb-1`}>
                  {alert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {alert.message}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>Issued: {alert.timestamp}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>Expires: {alert.expiresAt}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherAlerts;
