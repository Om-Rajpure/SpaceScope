export interface SolarData {
  solarWindSpeed: number;
  kpIndex: number;
  xRayFlux: string;
  sunspotNumber: number;
  protonFlux: number;
  electronFlux: number;
  lastUpdated: string;
}

export interface RiskMeter {
  id: string;
  label: string;
  value: number;
  status: 'Low' | 'Medium' | 'High' | 'Severe';
  icon: string;
  description: string;
}

export interface AuroraForecast {
  location: string;
  latitude: number;
  probability: number;
  bestTime: string;
  conditions: string;
}

export interface SpaceWeatherAlert {
  id: string;
  type: 'info' | 'warning' | 'severe';
  title: string;
  message: string;
  timestamp: string;
  expiresAt: string;
}

export interface GeomagneticStorm {
  level: string;
  description: string;
  expectedStart: string;
  expectedEnd: string;
  impacts: string[];
}

// Mock solar data
export const solarData: SolarData = {
  solarWindSpeed: 425,
  kpIndex: 3,
  xRayFlux: 'B4.2',
  sunspotNumber: 127,
  protonFlux: 0.45,
  electronFlux: 2.1,
  lastUpdated: '2 minutes ago',
};

// Risk meters for space-earth impact
export const riskMeters: RiskMeter[] = [
  {
    id: 'gps',
    label: 'GPS Accuracy',
    value: 15,
    status: 'Low',
    icon: 'MapPin',
    description: 'GPS systems operating normally with minimal interference expected.',
  },
  {
    id: 'communication',
    label: 'HF Communication',
    value: 35,
    status: 'Medium',
    icon: 'Radio',
    description: 'Some high-frequency radio communication disruptions possible.',
  },
  {
    id: 'power',
    label: 'Power Grid',
    value: 10,
    status: 'Low',
    icon: 'Zap',
    description: 'Power grid systems stable with no geomagnetic-induced currents expected.',
  },
  {
    id: 'aurora',
    label: 'Aurora Visibility',
    value: 75,
    status: 'High',
    icon: 'Eye',
    description: 'Strong aurora activity expected at high latitudes.',
  },
  {
    id: 'satellite',
    label: 'Satellite Drag',
    value: 25,
    status: 'Low',
    icon: 'Satellite',
    description: 'Low atmospheric drag conditions for orbiting satellites.',
  },
  {
    id: 'radiation',
    label: 'Radiation Exposure',
    value: 20,
    status: 'Low',
    icon: 'AlertTriangle',
    description: 'Radiation levels within normal parameters for high-altitude flights.',
  },
];

// Aurora forecasts for different locations
export const auroraForecasts: AuroraForecast[] = [
  {
    location: 'Fairbanks, Alaska',
    latitude: 64.8,
    probability: 85,
    bestTime: '11:00 PM - 2:00 AM',
    conditions: 'Clear skies expected',
  },
  {
    location: 'Tromsø, Norway',
    latitude: 69.6,
    probability: 90,
    bestTime: '10:00 PM - 1:00 AM',
    conditions: 'Partly cloudy',
  },
  {
    location: 'Reykjavik, Iceland',
    latitude: 64.1,
    probability: 70,
    bestTime: '11:30 PM - 2:30 AM',
    conditions: 'Overcast possible',
  },
  {
    location: 'Yellowknife, Canada',
    latitude: 62.5,
    probability: 80,
    bestTime: '12:00 AM - 3:00 AM',
    conditions: 'Clear skies expected',
  },
  {
    location: 'Abisko, Sweden',
    latitude: 68.4,
    probability: 88,
    bestTime: '9:30 PM - 12:30 AM',
    conditions: 'Clear skies expected',
  },
];

// Active space weather alerts
export const spaceWeatherAlerts: SpaceWeatherAlert[] = [
  {
    id: '1',
    type: 'warning',
    title: 'G1 Geomagnetic Storm Watch',
    message: 'A G1 (Minor) geomagnetic storm watch is in effect for the next 24-48 hours due to an expected CME arrival. High-latitude aurora viewing may be enhanced.',
    timestamp: '3 hours ago',
    expiresAt: 'in 45 hours',
  },
  {
    id: '2',
    type: 'info',
    title: 'Solar Flare Activity',
    message: 'Active Region 3842 has produced several C-class solar flares in the past 24 hours. Continued activity is expected.',
    timestamp: '6 hours ago',
    expiresAt: 'in 18 hours',
  },
];

// Current geomagnetic storm info
export const currentStorm: GeomagneticStorm = {
  level: 'G1',
  description: 'Minor Geomagnetic Storm',
  expectedStart: 'Jan 10, 2026 18:00 UTC',
  expectedEnd: 'Jan 11, 2026 12:00 UTC',
  impacts: [
    'Weak power grid fluctuations possible',
    'Minor impacts on satellite operations',
    'Aurora visible at high latitudes (60°+)',
    'Migratory animals may be affected at high latitudes',
  ],
};

// Solar cycle data for chart
export const solarCycleData = [
  { month: 'Jul', sunspots: 98, predicted: 95 },
  { month: 'Aug', sunspots: 112, predicted: 105 },
  { month: 'Sep', sunspots: 105, predicted: 110 },
  { month: 'Oct', sunspots: 118, predicted: 115 },
  { month: 'Nov', sunspots: 125, predicted: 120 },
  { month: 'Dec', sunspots: 127, predicted: 122 },
];

// Kp index history for chart
export const kpIndexHistory = [
  { time: '00:00', kp: 2 },
  { time: '03:00', kp: 2 },
  { time: '06:00', kp: 3 },
  { time: '09:00', kp: 4 },
  { time: '12:00', kp: 3 },
  { time: '15:00', kp: 3 },
  { time: '18:00', kp: 4 },
  { time: '21:00', kp: 3 },
];
