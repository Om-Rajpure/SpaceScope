export interface Mission {
  id: string;
  name: string;
  agency: 'NASA' | 'ESA' | 'SpaceX' | 'ISRO' | 'JAXA' | 'CNSA' | 'Roscosmos';
  type: 'crewed' | 'robotic' | 'satellite' | 'cargo' | 'exploration';
  status: 'upcoming' | 'active' | 'completed' | 'planned';
  launchDate: string;
  endDate?: string;
  destination: string;
  description: string;
  objectives: string[];
  crew?: { name: string; role: string; country: string }[];
  rocket: string;
  launchSite: string;
  image?: string;
  progress?: number;
  highlights?: string[];
  liveStatus?: {
    phase: string;
    daysInMission?: number;
    distanceFromEarth?: string;
    nextMilestone?: string;
  };
}

export interface MissionStats {
  totalActive: number;
  upcomingThisMonth: number;
  crewInSpace: number;
  successRate: number;
}

export const missionStats: MissionStats = {
  totalActive: 12,
  upcomingThisMonth: 4,
  crewInSpace: 10,
  successRate: 96.8,
};

export const featuredMission: Mission = {
  id: 'artemis-2',
  name: 'Artemis II',
  agency: 'NASA',
  type: 'crewed',
  status: 'upcoming',
  launchDate: '2025-09-01',
  destination: 'Lunar Orbit',
  description: 'The first crewed mission of the Artemis program, sending astronauts around the Moon for the first time in over 50 years.',
  objectives: [
    'Test Orion spacecraft life support systems',
    'Validate deep space navigation capabilities',
    'Perform lunar flyby maneuvers',
    'Demonstrate crew operations beyond LEO',
  ],
  crew: [
    { name: 'Reid Wiseman', role: 'Commander', country: 'USA' },
    { name: 'Victor Glover', role: 'Pilot', country: 'USA' },
    { name: 'Christina Koch', role: 'Mission Specialist', country: 'USA' },
    { name: 'Jeremy Hansen', role: 'Mission Specialist', country: 'Canada' },
  ],
  rocket: 'SLS Block 1',
  launchSite: 'Kennedy Space Center, LC-39B',
  progress: 85,
  highlights: [
    'First crewed lunar mission since Apollo 17',
    'First woman and person of color on a lunar mission',
    'First Canadian beyond low Earth orbit',
  ],
  liveStatus: {
    phase: 'Pre-Launch Preparation',
    nextMilestone: 'Crew Equipment Interface Test',
  },
};

export const missions: Mission[] = [
  featuredMission,
  {
    id: 'europa-clipper',
    name: 'Europa Clipper',
    agency: 'NASA',
    type: 'robotic',
    status: 'active',
    launchDate: '2024-10-14',
    destination: 'Europa (Jupiter Moon)',
    description: 'A mission to conduct detailed reconnaissance of Jupiter\'s moon Europa to investigate whether it could harbor conditions suitable for life.',
    objectives: [
      'Study Europa\'s ice shell and ocean',
      'Investigate moon\'s composition and geology',
      'Search for signs of habitability',
    ],
    rocket: 'Falcon Heavy',
    launchSite: 'Kennedy Space Center, LC-39A',
    progress: 15,
    liveStatus: {
      phase: 'Cruise Phase',
      daysInMission: 450,
      distanceFromEarth: '320 million km',
      nextMilestone: 'Mars Gravity Assist',
    },
  },
  {
    id: 'crew-dragon-10',
    name: 'SpaceX Crew-10',
    agency: 'SpaceX',
    type: 'crewed',
    status: 'upcoming',
    launchDate: '2025-02-15',
    destination: 'International Space Station',
    description: 'The tenth operational NASA Commercial Crew flight of a Crew Dragon spacecraft.',
    objectives: [
      'Transport crew to ISS',
      'Conduct microgravity research',
      'Maintain station operations',
    ],
    crew: [
      { name: 'Anne McClain', role: 'Commander', country: 'USA' },
      { name: 'Nichole Ayers', role: 'Pilot', country: 'USA' },
      { name: 'Takuya Onishi', role: 'Mission Specialist', country: 'Japan' },
      { name: 'Kimiya Yui', role: 'Mission Specialist', country: 'Japan' },
    ],
    rocket: 'Falcon 9',
    launchSite: 'Kennedy Space Center, LC-39A',
    progress: 70,
  },
  {
    id: 'chandrayaan-4',
    name: 'Chandrayaan-4',
    agency: 'ISRO',
    type: 'robotic',
    status: 'planned',
    launchDate: '2027-01-01',
    destination: 'Moon (South Pole)',
    description: 'India\'s ambitious lunar sample return mission targeting the Moon\'s south polar region.',
    objectives: [
      'Collect lunar samples from south pole',
      'Return samples to Earth for analysis',
      'Demonstrate sample return capabilities',
    ],
    rocket: 'LVM3',
    launchSite: 'Satish Dhawan Space Centre',
    progress: 25,
  },
  {
    id: 'juice',
    name: 'JUICE',
    agency: 'ESA',
    type: 'robotic',
    status: 'active',
    launchDate: '2023-04-14',
    destination: 'Jupiter\'s Icy Moons',
    description: 'Jupiter Icy Moons Explorer will study Jupiter\'s three largest icy moons: Ganymede, Callisto, and Europa.',
    objectives: [
      'Characterize Ganymede as a planetary body',
      'Study Europa and Callisto as ocean worlds',
      'Explore Jupiter system as archetype for gas giants',
    ],
    rocket: 'Ariane 5',
    launchSite: 'Guiana Space Centre',
    progress: 20,
    liveStatus: {
      phase: 'Interplanetary Cruise',
      daysInMission: 640,
      distanceFromEarth: '180 million km',
      nextMilestone: 'Venus Gravity Assist',
    },
  },
  {
    id: 'starship-flight-6',
    name: 'Starship Flight 6',
    agency: 'SpaceX',
    type: 'robotic',
    status: 'upcoming',
    launchDate: '2025-01-20',
    destination: 'Earth Orbit',
    description: 'The sixth integrated test flight of the Starship spacecraft and Super Heavy booster.',
    objectives: [
      'Demonstrate full orbital capability',
      'Test heat shield performance',
      'Attempt booster catch and landing',
    ],
    rocket: 'Starship',
    launchSite: 'Starbase, Boca Chica',
    progress: 90,
  },
  {
    id: 'psyche',
    name: 'Psyche',
    agency: 'NASA',
    type: 'robotic',
    status: 'active',
    launchDate: '2023-10-13',
    destination: 'Asteroid 16 Psyche',
    description: 'A mission to explore a unique metal-rich asteroid that may be the exposed core of an early planet.',
    objectives: [
      'Determine if Psyche is a core',
      'Study its surface composition',
      'Understand planetary formation',
    ],
    rocket: 'Falcon Heavy',
    launchSite: 'Kennedy Space Center',
    progress: 18,
    liveStatus: {
      phase: 'Deep Space Cruise',
      daysInMission: 455,
      distanceFromEarth: '295 million km',
      nextMilestone: 'Mars Flyby',
    },
  },
  {
    id: 'lunar-gateway',
    name: 'Lunar Gateway PPE & HALO',
    agency: 'NASA',
    type: 'robotic',
    status: 'planned',
    launchDate: '2025-11-01',
    destination: 'Lunar Orbit',
    description: 'The first two modules of the Lunar Gateway space station, enabling sustained lunar exploration.',
    objectives: [
      'Establish lunar orbital station',
      'Enable sustainable lunar exploration',
      'Serve as staging point for Artemis missions',
    ],
    rocket: 'Falcon Heavy',
    launchSite: 'Kennedy Space Center',
    progress: 65,
  },
];

export const agencyColors: Record<Mission['agency'], string> = {
  NASA: 'hsl(var(--nebula-blue))',
  ESA: 'hsl(var(--cosmic-purple))',
  SpaceX: 'hsl(var(--foreground))',
  ISRO: 'hsl(var(--solar-orange))',
  JAXA: 'hsl(var(--danger-red))',
  CNSA: 'hsl(var(--danger-red))',
  Roscosmos: 'hsl(var(--aurora-green))',
};

export const statusColors: Record<Mission['status'], string> = {
  active: 'aurora-green',
  upcoming: 'nebula-blue',
  completed: 'muted-foreground',
  planned: 'solar-orange',
};

export const typeIcons: Record<Mission['type'], string> = {
  crewed: '👨‍🚀',
  robotic: '🤖',
  satellite: '🛰️',
  cargo: '📦',
  exploration: '🔭',
};
