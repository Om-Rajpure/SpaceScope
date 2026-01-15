import { Sun, Radio, Wifi, Zap, Eye } from 'lucide-react';

const riskMeters = [
  { 
    label: 'GPS Risk', 
    value: 15, 
    status: 'Low',
    icon: MapPin,
    color: 'aurora-green' 
  },
  { 
    label: 'Communication', 
    value: 35, 
    status: 'Medium',
    icon: Radio,
    color: 'solar-orange' 
  },
  { 
    label: 'Power Grid', 
    value: 10, 
    status: 'Low',
    icon: Zap,
    color: 'aurora-green' 
  },
  { 
    label: 'Aurora Visible', 
    value: 75, 
    status: 'High',
    icon: Eye,
    color: 'nebula-blue' 
  },
];

import { MapPin } from 'lucide-react';

const CosmicWeatherWidget = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Solar Activity Card */}
          <div className="glass-card p-8 glow-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-solar flex items-center justify-center">
                <Sun className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold">Solar Activity</h3>
                <p className="text-muted-foreground">Real-time space weather conditions</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-muted/30 rounded-xl p-4">
                <div className="text-sm text-muted-foreground mb-1">Solar Wind Speed</div>
                <div className="font-display text-2xl font-bold text-solar-orange">425 km/s</div>
              </div>
              <div className="bg-muted/30 rounded-xl p-4">
                <div className="text-sm text-muted-foreground mb-1">Kp Index</div>
                <div className="font-display text-2xl font-bold text-aurora-green">3</div>
              </div>
              <div className="bg-muted/30 rounded-xl p-4">
                <div className="text-sm text-muted-foreground mb-1">X-Ray Flux</div>
                <div className="font-display text-2xl font-bold text-nebula-blue">B4.2</div>
              </div>
              <div className="bg-muted/30 rounded-xl p-4">
                <div className="text-sm text-muted-foreground mb-1">Sunspot Number</div>
                <div className="font-display text-2xl font-bold text-star-yellow">127</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-aurora-green rounded-full animate-pulse" />
              <span className="text-muted-foreground">Last updated: 2 minutes ago</span>
            </div>
          </div>

          {/* Impact Meters */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-cosmic flex items-center justify-center">
                <Wifi className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold">Space-Earth Impact</h3>
                <p className="text-muted-foreground">Current risk levels for Earth systems</p>
              </div>
            </div>

            <div className="space-y-5">
              {riskMeters.map((meter, index) => {
                const Icon = meter.icon;
                return (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{meter.label}</span>
                      </div>
                      <span className={`text-sm font-medium text-${meter.color}`}>
                        {meter.status}
                      </span>
                    </div>
                    <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-${meter.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${meter.value}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-4 bg-muted/20 rounded-xl border border-border/50">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-solar-orange/20 flex items-center justify-center flex-shrink-0">
                  <Radio className="w-4 h-4 text-solar-orange" />
                </div>
                <div>
                  <div className="text-sm font-medium text-solar-orange">Active Alert</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Minor geomagnetic storm (G1) expected in next 24 hours. 
                    Communication systems may experience brief interruptions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CosmicWeatherWidget;
