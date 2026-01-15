import { motion } from 'framer-motion';
import { Rocket, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Mission, statusColors, typeIcons } from '@/data/missionsData';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface MissionCardProps {
  mission: Mission;
  index?: number;
}

const MissionCard = ({ mission, index = 0 }: MissionCardProps) => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass-card overflow-hidden group cursor-pointer hover:border-primary/50 transition-all duration-300"
    >
      {/* Header with gradient based on agency */}
      <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent" />
      
      <div className="p-5">
        {/* Top row */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{typeIcons[mission.type]}</span>
            <Badge variant="outline" className="text-xs">
              {mission.agency}
            </Badge>
          </div>
          <Badge 
            variant="outline" 
            className={`text-${statusColors[mission.status]} border-${statusColors[mission.status]}/50`}
          >
            {mission.status}
          </Badge>
        </div>

        {/* Mission name */}
        <h3 className="text-lg font-bold font-display mb-2 group-hover:text-primary transition-colors">
          {mission.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {mission.description}
        </p>

        {/* Details */}
        <div className="space-y-2 text-sm mb-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(mission.launchDate)}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{mission.destination}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Rocket className="w-4 h-4" />
            <span>{mission.rocket}</span>
          </div>
        </div>

        {/* Progress bar for upcoming/active missions */}
        {mission.progress !== undefined && (
          <div className="mb-4">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-muted-foreground">Progress</span>
              <span className="text-primary">{mission.progress}%</span>
            </div>
            <Progress value={mission.progress} className="h-2" />
          </div>
        )}

        {/* Live status */}
        {mission.liveStatus && (
          <div className="bg-muted/30 rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurora-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-aurora-green" />
              </span>
              <span className="text-xs text-aurora-green font-medium">Live Status</span>
            </div>
            <div className="text-xs space-y-1">
              <div><span className="text-muted-foreground">Phase:</span> {mission.liveStatus.phase}</div>
              {mission.liveStatus.daysInMission && (
                <div><span className="text-muted-foreground">Days in mission:</span> {mission.liveStatus.daysInMission}</div>
              )}
              {mission.liveStatus.distanceFromEarth && (
                <div><span className="text-muted-foreground">Distance:</span> {mission.liveStatus.distanceFromEarth}</div>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border/50">
          {mission.crew ? (
            <div className="flex items-center gap-1">
              <span className="text-xs text-muted-foreground">Crew:</span>
              <span className="text-xs font-medium">{mission.crew.length} astronauts</span>
            </div>
          ) : (
            <span className="text-xs text-muted-foreground capitalize">{mission.type} mission</span>
          )}
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </div>
    </motion.div>
  );
};

export default MissionCard;
