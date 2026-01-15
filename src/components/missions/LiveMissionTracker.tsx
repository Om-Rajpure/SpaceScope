import { motion } from 'framer-motion';
import { Radio, Rocket, Orbit, Gauge, Navigation } from 'lucide-react';
import { Mission } from '@/data/missionsData';

interface LiveMissionTrackerProps {
  missions: Mission[];
}

const LiveMissionTracker = ({ missions }: LiveMissionTrackerProps) => {
  const activeMissions = missions.filter(
    (m) => m.status === 'active' && m.liveStatus
  );

  if (activeMissions.length === 0) {
    return null;
  }

  return (
    <div className="glass-card p-6 glow-border">
      <div className="flex items-center gap-3 mb-6">
        <div className="relative">
          <Radio className="w-6 h-6 text-aurora-green" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurora-green opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-aurora-green" />
          </span>
        </div>
        <div>
          <h3 className="text-xl font-bold font-display">Live Mission Tracker</h3>
          <p className="text-sm text-muted-foreground">
            Real-time data from active space missions
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {activeMissions.map((mission, index) => (
          <motion.div
            key={mission.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-muted/30 rounded-xl p-4 border border-border/50 hover:border-aurora-green/50 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-foreground">{mission.name}</h4>
              <span className="flex items-center gap-1 text-xs text-aurora-green">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurora-green opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-aurora-green" />
                </span>
                Live
              </span>
            </div>

            <div className="space-y-3">
              {/* Phase */}
              <div className="flex items-center gap-2">
                <Orbit className="w-4 h-4 text-primary" />
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground">Current Phase</div>
                  <div className="text-sm font-medium">{mission.liveStatus?.phase}</div>
                </div>
              </div>

              {/* Days in Mission */}
              {mission.liveStatus?.daysInMission && (
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-secondary" />
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground">Mission Duration</div>
                    <div className="text-sm font-medium">{mission.liveStatus.daysInMission} days</div>
                  </div>
                </div>
              )}

              {/* Distance */}
              {mission.liveStatus?.distanceFromEarth && (
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-accent" />
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground">Distance from Earth</div>
                    <div className="text-sm font-medium">{mission.liveStatus.distanceFromEarth}</div>
                  </div>
                </div>
              )}

              {/* Next Milestone */}
              {mission.liveStatus?.nextMilestone && (
                <div className="flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-solar-orange" />
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground">Next Milestone</div>
                    <div className="text-sm font-medium text-solar-orange">
                      {mission.liveStatus.nextMilestone}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Destination */}
            <div className="mt-3 pt-3 border-t border-border/50">
              <div className="text-xs text-muted-foreground">Destination</div>
              <div className="text-sm font-medium text-gradient">{mission.destination}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LiveMissionTracker;
