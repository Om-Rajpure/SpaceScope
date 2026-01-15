import { Calendar, MapPin, Clock, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const events = [
  {
    id: 1,
    name: 'Perseid Meteor Shower',
    date: 'Aug 12-13, 2026',
    time: '10 PM - 4 AM',
    type: 'Meteor Shower',
    visibility: 'High',
    description: 'One of the best meteor showers with up to 100 meteors per hour.',
    image: '🌠',
  },
  {
    id: 2,
    name: 'ISS Pass Over India',
    date: 'Jan 8, 2026',
    time: '6:45 PM',
    type: 'Satellite Pass',
    visibility: 'Very High',
    description: 'International Space Station visible with naked eye.',
    image: '🛰️',
  },
  {
    id: 3,
    name: 'Total Lunar Eclipse',
    date: 'Mar 14, 2026',
    time: '2:00 AM',
    type: 'Eclipse',
    visibility: 'Medium',
    description: 'Blood moon visible across Asia and Australia.',
    image: '🌑',
  },
  {
    id: 4,
    name: 'Venus-Jupiter Conjunction',
    date: 'Feb 22, 2026',
    time: 'Dusk',
    type: 'Planetary',
    visibility: 'High',
    description: 'Two brightest planets appear extremely close.',
    image: '🪐',
  },
];

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

const UpcomingEvents = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
              Upcoming <span className="text-gradient">Celestial Events</span>
            </h2>
            <p className="text-muted-foreground">
              Don't miss these spectacular cosmic events visible from your location.
            </p>
          </div>
          <Button variant="outline" className="border-border/50 hover:bg-muted/50">
            View All Events
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group glass-card p-6 hover:glow-border transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-4">
                {/* Event Icon */}
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-cosmic flex items-center justify-center text-3xl">
                  {event.image}
                </div>

                {/* Event Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display text-lg font-semibold truncate group-hover:text-primary transition-colors">
                      {event.name}
                    </h3>
                    <span className="flex-shrink-0 px-2 py-1 text-xs font-medium rounded-full bg-muted">
                      {event.type}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span className={getVisibilityColor(event.visibility)}>
                        {event.visibility} Visibility
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Action */}
              <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm text-muted-foreground">Click for details & visibility map</span>
                <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
