import { Calendar, Clock, MapPin, Eye, ChevronRight, Star } from 'lucide-react';
import { CelestialEvent } from '@/data/celestialEvents';
import { Button } from '@/components/ui/button';

interface EventsListProps {
  events: CelestialEvent[];
  selectedEvent: CelestialEvent | null;
  onEventSelect: (event: CelestialEvent) => void;
}

const getVisibilityColor = (visibility: string) => {
  switch (visibility) {
    case 'Very High':
      return 'text-aurora-green bg-aurora-green/10 border-aurora-green/30';
    case 'High':
      return 'text-nebula-blue bg-nebula-blue/10 border-nebula-blue/30';
    case 'Medium':
      return 'text-solar-orange bg-solar-orange/10 border-solar-orange/30';
    default:
      return 'text-muted-foreground bg-muted/50 border-border/50';
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'meteor-shower':
      return '🌠';
    case 'eclipse':
      return '🌑';
    case 'satellite':
      return '🛰️';
    case 'planetary':
      return '🪐';
    case 'comet':
      return '☄️';
    case 'aurora':
      return '🌌';
    default:
      return '⭐';
  }
};

const EventsList = ({ events, selectedEvent, onEventSelect }: EventsListProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl font-bold">
          Upcoming <span className="text-gradient">Events</span>
        </h2>
        <span className="text-sm text-muted-foreground">{events.length} events found</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {events.map((event) => {
          const isSelected = selectedEvent?.id === event.id;

          return (
            <div
              key={event.id}
              onClick={() => onEventSelect(event)}
              className={`group glass-card p-5 cursor-pointer transition-all duration-300 hover:glow-border ${
                isSelected ? 'ring-2 ring-primary glow-border' : ''
              }`}
            >
              <div className="flex gap-4">
                {/* Event Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-3xl border border-border/30">
                    {event.image}
                  </div>
                </div>

                {/* Event Content */}
                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors line-clamp-1">
                        {event.name}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground capitalize">
                        {getTypeIcon(event.type)} {event.type.replace('-', ' ')}
                      </span>
                    </div>
                    <span className={`flex-shrink-0 px-2.5 py-1 text-xs font-medium rounded-full border ${getVisibilityColor(event.visibility)}`}>
                      {event.visibility}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {event.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="truncate max-w-[150px]">
                        {event.visibilityRegions[0]}
                        {event.visibilityRegions.length > 1 && ` +${event.visibilityRegions.length - 1}`}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 self-center">
                  <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                    isSelected ? 'text-primary translate-x-1' : 'text-muted-foreground group-hover:text-primary group-hover:translate-x-1'
                  }`} />
                </div>
              </div>

              {/* Expanded Preview (when selected) */}
              {isSelected && (
                <div className="mt-4 pt-4 border-t border-border/50 animate-fade-in">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {event.visibilityRegions.map((region) => (
                      <span 
                        key={region}
                        className="px-2 py-1 text-xs bg-muted/50 rounded-md text-muted-foreground"
                      >
                        {region}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Eye className="w-4 h-4" />
                      <span>{event.peakTime || 'Check local times'}</span>
                    </div>
                    <Button size="sm" className="btn-cosmic">
                      View Full Details
                    </Button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventsList;
