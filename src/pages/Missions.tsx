import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Starfield from '@/components/Starfield';
import Footer from '@/components/Footer';
import MissionStats from '@/components/missions/MissionStats';
import FeaturedMission from '@/components/missions/FeaturedMission';
import MissionTimeline from '@/components/missions/MissionTimeline';
import MissionCard from '@/components/missions/MissionCard';
import MissionFilters from '@/components/missions/MissionFilters';
import LiveMissionTracker from '@/components/missions/LiveMissionTracker';
import AgencyLegend from '@/components/missions/AgencyLegend';
import { missions, missionStats, featuredMission, Mission } from '@/data/missionsData';

const Missions = () => {
  const [selectedAgency, setSelectedAgency] = useState<Mission['agency'] | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<Mission['status'] | 'all'>('all');
  const [selectedType, setSelectedType] = useState<Mission['type'] | 'all'>('all');

  // Get unique values for filters
  const agencies = useMemo(() => 
    [...new Set(missions.map(m => m.agency))] as Mission['agency'][], 
    []
  );
  const statuses = useMemo(() => 
    [...new Set(missions.map(m => m.status))] as Mission['status'][], 
    []
  );
  const types = useMemo(() => 
    [...new Set(missions.map(m => m.type))] as Mission['type'][], 
    []
  );

  // Filter missions
  const filteredMissions = useMemo(() => {
    return missions.filter((mission) => {
      if (selectedAgency !== 'all' && mission.agency !== selectedAgency) return false;
      if (selectedStatus !== 'all' && mission.status !== selectedStatus) return false;
      if (selectedType !== 'all' && mission.type !== selectedType) return false;
      return true;
    });
  }, [selectedAgency, selectedStatus, selectedType]);

  // Missions excluding the featured one for the grid
  const gridMissions = filteredMissions.filter(m => m.id !== featuredMission.id);

  return (
    <>
      <Helmet>
        <title>Space Missions | SpaceScope - Track Active & Upcoming Missions</title>
        <meta 
          name="description" 
          content="Explore past, current, and future space missions from NASA, ESA, SpaceX, ISRO, and more. Track live mission progress and launch schedules." 
        />
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden">
        <Starfield />
        <Navbar />

        <main className="relative pt-20">
          {/* Page Header */}
          <section className="px-4 py-12">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-gradient">Space Missions</span> Explorer
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  Track active missions, explore upcoming launches, and discover humanity's 
                  greatest space exploration endeavors from agencies around the world.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Mission Stats */}
          <section className="px-4 pb-8">
            <div className="max-w-7xl mx-auto">
              <MissionStats stats={missionStats} />
            </div>
          </section>

          {/* Live Mission Tracker */}
          <section className="px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <LiveMissionTracker missions={missions} />
            </div>
          </section>

          {/* Featured Mission */}
          <section className="px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-2">
                🚀 Featured Mission
              </h2>
              <FeaturedMission mission={featuredMission} />
            </div>
          </section>

          {/* Filters + Timeline + Legend */}
          <section className="px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <MissionTimeline missions={filteredMissions} />
                </div>
                <div className="space-y-6">
                  <MissionFilters
                    agencies={agencies}
                    statuses={statuses}
                    types={types}
                    selectedAgency={selectedAgency}
                    selectedStatus={selectedStatus}
                    selectedType={selectedType}
                    onAgencyChange={setSelectedAgency}
                    onStatusChange={setSelectedStatus}
                    onTypeChange={setSelectedType}
                  />
                  <AgencyLegend />
                </div>
              </div>
            </div>
          </section>

          {/* All Missions Grid */}
          <section className="px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold font-display mb-6">
                All Missions ({filteredMissions.length})
              </h2>
              
              {gridMissions.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gridMissions.map((mission, index) => (
                    <MissionCard key={mission.id} mission={mission} index={index} />
                  ))}
                </div>
              ) : (
                <div className="glass-card p-12 text-center">
                  <p className="text-muted-foreground">
                    No missions match your current filters. Try adjusting your selection.
                  </p>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Missions;
