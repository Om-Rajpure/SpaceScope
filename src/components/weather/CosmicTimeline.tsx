import { Clock, ArrowRight, Check, AlertCircle, Timer } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface TimelineEvent {
  id: string;
  label: string;
  time: string;
  status: 'completed' | 'active' | 'upcoming';
  description: string;
}

interface CosmicTimelineProps {
  events: TimelineEvent[];
}

const defaultEvents: TimelineEvent[] = [
  {
    id: '1',
    label: 'CME Detected',
    time: 'Jan 8, 14:30 UTC',
    status: 'completed',
    description: 'Coronal Mass Ejection observed leaving the Sun',
  },
  {
    id: '2',
    label: 'Earth-Directed',
    time: 'Jan 8, 18:00 UTC',
    status: 'completed',
    description: 'Analysis confirms CME is heading toward Earth',
  },
  {
    id: '3',
    label: 'Storm Arrival',
    time: 'Jan 10, 18:00 UTC',
    status: 'active',
    description: 'Geomagnetic storm conditions begin',
  },
  {
    id: '4',
    label: 'Peak Activity',
    time: 'Jan 11, 02:00 UTC',
    status: 'upcoming',
    description: 'Expected maximum storm intensity',
  },
  {
    id: '5',
    label: 'Recovery',
    time: 'Jan 11, 12:00 UTC',
    status: 'upcoming',
    description: 'Conditions expected to return to normal',
  },
];

const CosmicTimeline = ({ events = defaultEvents }: CosmicTimelineProps) => {
  const getStatusConfig = (status: TimelineEvent['status']) => {
    switch (status) {
      case 'completed':
        return {
          icon: Check,
          bg: 'bg-aurora-green',
          text: 'text-aurora-green',
          line: 'bg-aurora-green',
        };
      case 'active':
        return {
          icon: AlertCircle,
          bg: 'bg-solar-orange',
          text: 'text-solar-orange',
          line: 'bg-muted',
        };
      case 'upcoming':
        return {
          icon: Timer,
          bg: 'bg-muted',
          text: 'text-muted-foreground',
          line: 'bg-muted',
        };
    }
  };

  return (
    <TooltipProvider>
      <div className="glass-card p-6">
        <h3 className="font-display text-xl font-bold mb-2 flex items-center gap-2">
          <Clock className="w-5 h-5 text-nebula-blue" />
          Cosmic Weather Timeline
        </h3>
        <p className="text-muted-foreground text-sm mb-6">
          Track the progression of current space weather events
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-6">
            {events.map((event, index) => {
              const config = getStatusConfig(event.status);
              const Icon = config.icon;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-start gap-4"
                >
                  {/* Status dot */}
                  <Tooltip>
                    <TooltipTrigger>
                      <motion.div
                        className={`relative z-10 w-10 h-10 rounded-full ${config.bg} flex items-center justify-center`}
                        animate={event.status === 'active' ? {
                          scale: [1, 1.1, 1],
                          boxShadow: [
                            '0 0 0 0 hsl(var(--solar-orange) / 0.4)',
                            '0 0 0 10px hsl(var(--solar-orange) / 0)',
                            '0 0 0 0 hsl(var(--solar-orange) / 0)',
                          ]
                        } : {}}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Icon className={`w-5 h-5 ${event.status === 'upcoming' ? 'text-muted-foreground' : 'text-background'}`} />
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{event.description}</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* Event info */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-2">
                      <h4 className={`font-medium ${config.text}`}>
                        {event.label}
                      </h4>
                      {event.status === 'active' && (
                        <span className="text-xs bg-solar-orange/20 text-solar-orange px-2 py-0.5 rounded-full">
                          NOW
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{event.time}</p>
                  </div>

                  {/* Connection arrow for active */}
                  {event.status === 'active' && index < events.length - 1 && (
                    <motion.div
                      className="absolute left-5 bottom-0 translate-y-full"
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4 text-solar-orange rotate-90" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default CosmicTimeline;
