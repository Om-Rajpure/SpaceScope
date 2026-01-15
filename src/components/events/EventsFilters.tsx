import { MapPin, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { eventTypes, visibilityLevels } from '@/data/celestialEvents';

interface EventsFiltersProps {
  filters: {
    type: string;
    visibility: string;
    timeframe: string;
  };
  setFilters: (filters: any) => void;
  onLocationDetect: () => void;
  userLocation: { lat: number; lng: number } | null;
}

const EventsFilters = ({ filters, setFilters, onLocationDetect, userLocation }: EventsFiltersProps) => {
  return (
    <section className="px-4 py-4 border-y border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Location Button */}
          <Button
            variant="outline"
            onClick={onLocationDetect}
            className={`gap-2 ${userLocation ? 'border-aurora-green text-aurora-green' : 'border-border/50'}`}
          >
            <MapPin className="w-4 h-4" />
            {userLocation ? 'Location Detected' : 'What Can I See Now?'}
          </Button>

          <div className="flex items-center gap-2 text-muted-foreground">
            <Filter className="w-4 h-4" />
            <span className="text-sm">Filters:</span>
          </div>

          {/* Event Type Filter */}
          <Select
            value={filters.type}
            onValueChange={(value) => setFilters({ ...filters, type: value })}
          >
            <SelectTrigger className="w-[180px] bg-muted/50 border-border/50">
              <SelectValue placeholder="Event Type" />
            </SelectTrigger>
            <SelectContent>
              {eventTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Visibility Filter */}
          <Select
            value={filters.visibility}
            onValueChange={(value) => setFilters({ ...filters, visibility: value })}
          >
            <SelectTrigger className="w-[160px] bg-muted/50 border-border/50">
              <SelectValue placeholder="Visibility" />
            </SelectTrigger>
            <SelectContent>
              {visibilityLevels.map((level) => (
                <SelectItem key={level.value} value={level.value}>
                  {level.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Results Count */}
          <div className="ml-auto text-sm text-muted-foreground">
            Showing all upcoming events
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsFilters;
