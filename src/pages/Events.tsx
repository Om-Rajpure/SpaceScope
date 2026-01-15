import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Starfield from '@/components/Starfield';
import Footer from '@/components/Footer';
import EventsMap from '@/components/events/EventsMap';
import EventsFilters from '@/components/events/EventsFilters';
import EventsList from '@/components/events/EventsList';
import EventDetail from '@/components/events/EventDetail';
import { celestialEvents, CelestialEvent } from '@/data/celestialEvents';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<CelestialEvent | null>(null);
  const [filters, setFilters] = useState({
    type: 'all',
    visibility: 'all',
    timeframe: 'upcoming',
  });
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  const filteredEvents = celestialEvents.filter((event) => {
    if (filters.type !== 'all' && event.type !== filters.type) return false;
    if (filters.visibility !== 'all' && event.visibility !== filters.visibility) return false;
    return true;
  });

  const handleLocationDetect = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>Sky Events | SpaceScope - Celestial Events Calendar</title>
        <meta name="description" content="Discover upcoming celestial events including meteor showers, eclipses, ISS passes, and planetary alignments. Interactive visibility maps and location-based filtering." />
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden">
        <Starfield />
        <Navbar />

        <main className="relative pt-20">
          {/* Page Header */}
          <section className="px-4 py-12">
            <div className="max-w-7xl mx-auto">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gradient">Celestial Events</span> Calendar
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Explore upcoming astronomical events and see exactly where they'll be visible. 
                Never miss a meteor shower, eclipse, or ISS pass again.
              </p>
            </div>
          </section>

          {/* Filters Section */}
          <EventsFilters 
            filters={filters} 
            setFilters={setFilters}
            onLocationDetect={handleLocationDetect}
            userLocation={userLocation}
          />

          {/* Map Section */}
          <section className="px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <EventsMap 
                events={filteredEvents}
                selectedEvent={selectedEvent}
                onEventSelect={setSelectedEvent}
                userLocation={userLocation}
              />
            </div>
          </section>

          {/* Events List */}
          <section className="px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <EventsList 
                events={filteredEvents}
                selectedEvent={selectedEvent}
                onEventSelect={setSelectedEvent}
              />
            </div>
          </section>

          {/* Event Detail Modal */}
          {selectedEvent && (
            <EventDetail 
              event={selectedEvent}
              onClose={() => setSelectedEvent(null)}
            />
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Events;
