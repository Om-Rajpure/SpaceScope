import { motion } from 'framer-motion';
import { Rocket, MapPin, Calendar, Users, Target, ChevronRight, Sparkles } from 'lucide-react';
import { Mission, agencyColors } from '@/data/missionsData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface FeaturedMissionProps {
  mission: Mission;
}

const FeaturedMission = ({ mission }: FeaturedMissionProps) => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-card glow-border overflow-hidden"
    >
      {/* Header with gradient */}
      <div className="relative bg-gradient-to-r from-primary/30 via-secondary/20 to-accent/30 p-6 pb-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <div className="relative flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="border-primary/50 text-primary">
                <Sparkles className="w-3 h-3 mr-1" />
                Featured Mission
              </Badge>
              <Badge 
                variant="outline" 
                className="border-aurora-green/50 text-aurora-green"
              >
                {mission.status.charAt(0).toUpperCase() + mission.status.slice(1)}
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gradient mb-2">
              {mission.name}
            </h2>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1">
                <Rocket className="w-4 h-4" />
                {mission.agency}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {mission.destination}
              </span>
            </div>
          </div>

          {/* Animated rocket icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden md:flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border border-primary/30"
          >
            <Rocket className="w-12 h-12 text-primary" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Description */}
        <p className="text-foreground/90 text-lg leading-relaxed">
          {mission.description}
        </p>

        {/* Mission Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-card p-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
              <Calendar className="w-4 h-4" />
              Launch Date
            </div>
            <div className="font-semibold">{formatDate(mission.launchDate)}</div>
          </div>
          <div className="glass-card p-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
              <Rocket className="w-4 h-4" />
              Rocket
            </div>
            <div className="font-semibold">{mission.rocket}</div>
          </div>
          <div className="glass-card p-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
              <MapPin className="w-4 h-4" />
              Launch Site
            </div>
            <div className="font-semibold text-sm">{mission.launchSite}</div>
          </div>
          <div className="glass-card p-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
              <Target className="w-4 h-4" />
              Mission Type
            </div>
            <div className="font-semibold capitalize">{mission.type}</div>
          </div>
        </div>

        {/* Progress Bar */}
        {mission.progress !== undefined && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Mission Readiness</span>
              <span className="text-primary font-semibold">{mission.progress}%</span>
            </div>
            <Progress value={mission.progress} className="h-3" />
            {mission.liveStatus && (
              <div className="text-sm text-muted-foreground mt-2">
                Current Phase: <span className="text-foreground">{mission.liveStatus.phase}</span>
                {mission.liveStatus.nextMilestone && (
                  <span className="ml-4">
                    Next: <span className="text-secondary">{mission.liveStatus.nextMilestone}</span>
                  </span>
                )}
              </div>
            )}
          </div>
        )}

        {/* Crew Section */}
        {mission.crew && (
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
              <Users className="w-5 h-5 text-primary" />
              Mission Crew
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {mission.crew.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-3 text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center mb-2">
                    <span className="text-lg">👨‍🚀</span>
                  </div>
                  <div className="font-semibold text-sm">{member.name}</div>
                  <div className="text-xs text-muted-foreground">{member.role}</div>
                  <div className="text-xs text-secondary">{member.country}</div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Objectives */}
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
            <Target className="w-5 h-5 text-secondary" />
            Mission Objectives
          </h3>
          <ul className="space-y-2">
            {mission.objectives.map((objective, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-secondary font-bold">{index + 1}</span>
                </div>
                <span className="text-foreground/80">{objective}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Highlights */}
        {mission.highlights && (
          <div className="flex flex-wrap gap-2">
            {mission.highlights.map((highlight, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-primary/10 text-primary border-primary/30"
              >
                {highlight}
              </Badge>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="flex justify-end">
          <Button className="btn-cosmic text-primary-foreground">
            View Full Details
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedMission;
