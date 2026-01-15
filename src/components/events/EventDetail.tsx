import { X, Calendar, Clock, MapPin, Eye, Lightbulb, Wrench, Share2, Bell, CalendarPlus } from 'lucide-react';
import { CelestialEvent } from '@/data/celestialEvents';
import { Button } from '@/components/ui/button';

interface EventDetailProps {
  event: CelestialEvent;
  onClose: () => void;
}

const getVisibilityColor = (visibility: string) => {
  switch (visibility) {
    case 'Very High':
      return 'text-aurora-green';
    case 'High':
      return 'text-nebula-blue';
    case 'Medium':
      return 'text-solar-orange';
    default:
      return 'text-muted-foreground';
  }
};

const EventDetail = ({ event, onClose }: EventDetailProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card animate-fade-in">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-card/95 backdrop-blur-xl border-b border-border/50 p-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-4xl border border-border/30">
              {event.image}
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-display text-2xl font-bold mb-1">{event.name}</h2>
              <div className="flex items-center gap-3 text-sm">
                <span className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground capitalize">
                  {event.type.replace('-', ' ')}
                </span>
                <span className={`font-medium ${getVisibilityColor(event.visibility)}`}>
                  {event.visibility} Visibility
                </span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="flex-shrink-0"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Quick Info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="glass-card p-3 text-center">
              <Calendar className="w-5 h-5 mx-auto mb-1 text-primary" />
              <div className="text-sm font-medium">{event.date}</div>
              {event.endDate && (
                <div className="text-xs text-muted-foreground">to {event.endDate}</div>
              )}
            </div>
            <div className="glass-card p-3 text-center">
              <Clock className="w-5 h-5 mx-auto mb-1 text-secondary" />
              <div className="text-sm font-medium">{event.time}</div>
            </div>
            <div className="glass-card p-3 text-center">
              <Eye className="w-5 h-5 mx-auto mb-1 text-aurora-green" />
              <div className="text-sm font-medium">{event.peakTime || 'Varies'}</div>
              <div className="text-xs text-muted-foreground">Peak Time</div>
            </div>
            <div className="glass-card p-3 text-center">
              <MapPin className="w-5 h-5 mx-auto mb-1 text-solar-orange" />
              <div className="text-sm font-medium">{event.visibilityRegions.length}</div>
              <div className="text-xs text-muted-foreground">Regions</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-2">About This Event</h3>
            <p className="text-muted-foreground leading-relaxed">
              {event.longDescription}
            </p>
          </div>

          {/* Visibility Regions */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Where to See It
            </h3>
            <div className="flex flex-wrap gap-2">
              {event.visibilityRegions.map((region) => (
                <span 
                  key={region}
                  className="px-3 py-1.5 bg-muted/50 rounded-lg text-sm border border-border/50"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>

          {/* Viewing Tips */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-star-yellow" />
              Viewing Tips
            </h3>
            <ul className="space-y-2">
              {event.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-medium">
                    {index + 1}
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-secondary" />
              Recommended Equipment
            </h3>
            <div className="flex flex-wrap gap-2">
              {event.equipment.map((item) => (
                <span 
                  key={item}
                  className="px-3 py-1.5 bg-secondary/10 rounded-lg text-sm text-secondary border border-secondary/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-border/50">
            <Button className="btn-cosmic flex-1 sm:flex-none gap-2">
              <Bell className="w-4 h-4" />
              Set Reminder
            </Button>
            <Button variant="outline" className="flex-1 sm:flex-none gap-2 border-border/50">
              <CalendarPlus className="w-4 h-4" />
              Add to Calendar
            </Button>
            <Button variant="ghost" size="icon" className="ml-auto">
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
