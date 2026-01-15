import { useEffect, useRef, useState } from 'react';
import { CelestialEvent } from '@/data/celestialEvents';
import { MapPin, Globe, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EventsMapProps {
  events: CelestialEvent[];
  selectedEvent: CelestialEvent | null;
  onEventSelect: (event: CelestialEvent) => void;
  userLocation: { lat: number; lng: number } | null;
}

const EventsMap = ({ events, selectedEvent, onEventSelect, userLocation }: EventsMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [mapError, setMapError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // For now, show a styled placeholder until Mapbox token is configured
  const showPlaceholder = true;

  if (showPlaceholder) {
    return (
      <div className={`relative glass-card overflow-hidden transition-all duration-500 ${isExpanded ? 'h-[600px]' : 'h-[400px]'}`}>
        {/* Map Controls */}
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-background/80 backdrop-blur-sm border-border/50"
          >
            <Maximize2 className="w-4 h-4" />
          </Button>
        </div>

        {/* Placeholder Map */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30">
          {/* Grid overlay */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Globe icon in center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Globe className="w-24 h-24 text-primary/30 animate-pulse-glow mb-4" />
            <h3 className="font-display text-xl text-foreground/80 mb-2">Interactive Visibility Map</h3>
            <p className="text-muted-foreground text-sm text-center max-w-md px-4">
              Click on an event below to see where it's visible on the global map
            </p>
          </div>

          {/* Event markers (visual representation) */}
          <div className="absolute inset-0 pointer-events-none">
            {events.slice(0, 5).map((event, index) => {
              const positions = [
                { top: '25%', left: '20%' },
                { top: '35%', left: '70%' },
                { top: '55%', left: '30%' },
                { top: '45%', left: '55%' },
                { top: '65%', left: '75%' },
              ];
              const pos = positions[index] || positions[0];
              const isSelected = selectedEvent?.id === event.id;

              return (
                <div
                  key={event.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer transition-all duration-300 ${
                    isSelected ? 'scale-125 z-20' : 'scale-100 z-10'
                  }`}
                  style={{ top: pos.top, left: pos.left }}
                  onClick={() => onEventSelect(event)}
                >
                  <div className={`relative ${isSelected ? 'animate-pulse-glow' : ''}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl
                      ${isSelected 
                        ? 'bg-primary shadow-lg shadow-primary/50' 
                        : 'bg-muted/80 hover:bg-primary/80'
                      } transition-all duration-300`}
                    >
                      {event.image}
                    </div>
                    {isSelected && (
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background/90 px-2 py-1 rounded text-xs border border-border/50">
                        {event.name}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* User location marker */}
          {userLocation && (
            <div
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30"
              style={{ top: '50%', left: '40%' }}
            >
              <div className="relative">
                <div className="w-4 h-4 bg-aurora-green rounded-full animate-ping absolute" />
                <div className="w-4 h-4 bg-aurora-green rounded-full relative flex items-center justify-center">
                  <MapPin className="w-3 h-3 text-background" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Selected event info overlay */}
        {selectedEvent && (
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <div className="glass-card p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl">
                {selectedEvent.image}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-display font-semibold truncate">{selectedEvent.name}</h4>
                <p className="text-sm text-muted-foreground truncate">
                  Visible in: {selectedEvent.visibilityRegions.slice(0, 3).join(', ')}
                  {selectedEvent.visibilityRegions.length > 3 && '...'}
                </p>
              </div>
              <Button variant="default" size="sm" className="btn-cosmic">
                View Details
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative glass-card overflow-hidden transition-all duration-500 ${isExpanded ? 'h-[600px]' : 'h-[400px]'}`}>
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default EventsMap;
