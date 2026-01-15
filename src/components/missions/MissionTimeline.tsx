import { motion } from 'framer-motion';
import { Rocket, CheckCircle2, Clock, Calendar, ArrowRight } from 'lucide-react';
import { Mission, statusColors, typeIcons } from '@/data/missionsData';
import { Badge } from '@/components/ui/badge';

interface MissionTimelineProps {
  missions: Mission[];
}

const MissionTimeline = ({ missions }: MissionTimelineProps) => {
  const sortedMissions = [...missions].sort(
    (a, b) => new Date(a.launchDate).getTime() - new Date(b.launchDate).getTime()
  );

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getStatusIcon = (status: Mission['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5" />;
      case 'active':
        return <Rocket className="w-5 h-5" />;
      case 'upcoming':
        return <Clock className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  return (
    <div className="glass-card p-6">
      <h3 className="text-xl font-bold font-display mb-6 flex items-center gap-2">
        <Calendar className="w-6 h-6 text-primary" />
        Mission Timeline
      </h3>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

        <div className="space-y-6">
          {sortedMissions.slice(0, 6).map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-16 group"
            >
              {/* Timeline node */}
              <div
                className={`absolute left-3 w-7 h-7 rounded-full flex items-center justify-center bg-background border-2 border-${statusColors[mission.status]} transition-transform group-hover:scale-125`}
              >
                <span className={`text-${statusColors[mission.status]}`}>
                  {getStatusIcon(mission.status)}
                </span>
              </div>

              {/* Content */}
              <div className="glass-card p-4 hover:bg-muted/30 transition-colors cursor-pointer group-hover:border-primary/50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{typeIcons[mission.type]}</span>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {mission.name}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {mission.agency}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={`text-xs text-${statusColors[mission.status]} border-${statusColors[mission.status]}/50`}
                    >
                      {mission.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(mission.launchDate)}
                  </span>
                  <span className="flex items-center gap-1">
                    <ArrowRight className="w-4 h-4" />
                    {mission.destination}
                  </span>
                </div>

                {mission.liveStatus && (
                  <div className="mt-2 text-xs">
                    <span className="text-aurora-green">● Live</span>
                    <span className="text-muted-foreground ml-2">
                      {mission.liveStatus.phase}
                      {mission.liveStatus.distanceFromEarth && (
                        <span className="ml-2">• {mission.liveStatus.distanceFromEarth} from Earth</span>
                      )}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionTimeline;
