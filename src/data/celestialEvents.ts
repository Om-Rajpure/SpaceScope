export interface CelestialEvent {
  id: string;
  name: string;
  type: 'meteor-shower' | 'eclipse' | 'satellite' | 'planetary' | 'comet' | 'aurora';
  date: string;
  endDate?: string;
  time: string;
  visibility: 'Very High' | 'High' | 'Medium' | 'Low';
  description: string;
  longDescription: string;
  image: string;
  icon: string;
  visibilityRegions: string[];
  coordinates: { lat: number; lng: number }[];
  tips: string[];
  equipment: string[];
  peakTime?: string;
  duration?: string;
}

export const celestialEvents: CelestialEvent[] = [
  {
    id: 'perseid-2026',
    name: 'Perseid Meteor Shower',
    type: 'meteor-shower',
    date: 'Aug 12, 2026',
    endDate: 'Aug 13, 2026',
    time: '10 PM - 4 AM',
    visibility: 'Very High',
    description: 'One of the best meteor showers with up to 100 meteors per hour.',
    longDescription: 'The Perseids are one of the most spectacular meteor showers of the year. Originating from the debris of Comet Swift-Tuttle, this shower produces bright, fast meteors that often leave persistent trains. Under ideal conditions, observers can see up to 100 meteors per hour during the peak.',
    image: '🌠',
    icon: 'meteor',
    visibilityRegions: ['North America', 'Europe', 'Asia', 'North Africa'],
    coordinates: [
      { lat: 40.7128, lng: -74.006 },
      { lat: 51.5074, lng: -0.1278 },
      { lat: 35.6762, lng: 139.6503 },
      { lat: 28.6139, lng: 77.209 },
    ],
    tips: [
      'Find a dark location away from city lights',
      'Allow 20-30 minutes for your eyes to adjust to darkness',
      'Look toward the northeast after midnight',
      'Lie flat on your back for the widest view of the sky',
    ],
    equipment: ['Blanket or reclining chair', 'Red flashlight', 'Warm clothing', 'Hot drinks'],
    peakTime: '2 AM - 4 AM local time',
    duration: '2 nights of peak activity',
  },
  {
    id: 'iss-pass-jan-2026',
    name: 'ISS Pass Over India',
    type: 'satellite',
    date: 'Jan 8, 2026',
    time: '6:45 PM',
    visibility: 'Very High',
    description: 'International Space Station visible with naked eye.',
    longDescription: 'The International Space Station will make a bright pass over India, appearing as a fast-moving bright point of light. At magnitude -3.5, it will be brighter than any star and easily visible even from urban areas. The pass will last approximately 6 minutes.',
    image: '🛰️',
    icon: 'satellite',
    visibilityRegions: ['India', 'Pakistan', 'Bangladesh', 'Nepal'],
    coordinates: [
      { lat: 28.6139, lng: 77.209 },
      { lat: 19.076, lng: 72.8777 },
      { lat: 13.0827, lng: 80.2707 },
    ],
    tips: [
      'Look for a bright, steady light moving across the sky',
      'The ISS moves from west to east',
      'No flashing lights - that would be an aircraft',
      'Best viewed just after sunset',
    ],
    equipment: ['Binoculars (optional)', 'Smartphone for tracking app'],
    duration: '6 minutes',
  },
  {
    id: 'lunar-eclipse-mar-2026',
    name: 'Total Lunar Eclipse',
    type: 'eclipse',
    date: 'Mar 14, 2026',
    time: '2:00 AM',
    visibility: 'High',
    description: 'Blood moon visible across Asia and Australia.',
    longDescription: 'A total lunar eclipse occurs when Earth passes between the Sun and Moon, casting a shadow on the lunar surface. The Moon takes on a reddish hue during totality, earning it the nickname "Blood Moon." This eclipse will be visible across Asia, Australia, and the Pacific.',
    image: '🌑',
    icon: 'moon',
    visibilityRegions: ['Asia', 'Australia', 'Pacific Islands', 'Western North America'],
    coordinates: [
      { lat: 35.6762, lng: 139.6503 },
      { lat: -33.8688, lng: 151.2093 },
      { lat: 1.3521, lng: 103.8198 },
      { lat: 37.7749, lng: -122.4194 },
    ],
    tips: [
      'Totality is safe to view with the naked eye',
      'Photograph with a tripod for best results',
      'Watch for subtle color changes during partial phases',
      'Note the stars becoming visible as the Moon dims',
    ],
    equipment: ['Binoculars', 'Telescope (optional)', 'Camera with tripod', 'Moon filter for telescope'],
    peakTime: '3:30 AM UTC',
    duration: 'Totality: 58 minutes',
  },
  {
    id: 'venus-jupiter-feb-2026',
    name: 'Venus-Jupiter Conjunction',
    type: 'planetary',
    date: 'Feb 22, 2026',
    time: 'Dusk',
    visibility: 'High',
    description: 'Two brightest planets appear extremely close.',
    longDescription: 'Venus and Jupiter, the two brightest planets visible from Earth, will appear just 0.3 degrees apart in the evening sky. This spectacular conjunction will be visible to the naked eye shortly after sunset, with both planets easily fitting within the same telescope field of view.',
    image: '🪐',
    icon: 'planet',
    visibilityRegions: ['Worldwide'],
    coordinates: [
      { lat: 0, lng: 0 },
    ],
    tips: [
      'Look west shortly after sunset',
      'Both planets are bright enough to see from cities',
      'Venus will be slightly brighter than Jupiter',
      'A telescope will show Jupiter\'s moons nearby',
    ],
    equipment: ['Binoculars', 'Small telescope', 'Camera for astrophotography'],
    peakTime: '30-60 minutes after sunset',
  },
  {
    id: 'geminids-2026',
    name: 'Geminid Meteor Shower',
    type: 'meteor-shower',
    date: 'Dec 13, 2026',
    endDate: 'Dec 14, 2026',
    time: '9 PM - 6 AM',
    visibility: 'Very High',
    description: 'The king of meteor showers with 120+ meteors per hour.',
    longDescription: 'The Geminids are considered the best meteor shower of the year, producing up to 120 multicolored meteors per hour at peak. Unlike most meteor showers, the Geminids originate from an asteroid (3200 Phaethon) rather than a comet. The meteors are bright, relatively slow, and often yellow or green in color.',
    image: '✨',
    icon: 'meteor',
    visibilityRegions: ['Worldwide', 'Best from Northern Hemisphere'],
    coordinates: [
      { lat: 40.7128, lng: -74.006 },
      { lat: 51.5074, lng: -0.1278 },
      { lat: 35.6762, lng: 139.6503 },
    ],
    tips: [
      'Peak viewing is around 2 AM local time',
      'The Geminids start earlier in the evening than most showers',
      'Look for colorful meteors - yellows, greens, and blues',
      'Moonlight may interfere - check the moon phase',
    ],
    equipment: ['Warm winter clothing', 'Blanket', 'Thermos with hot drinks', 'Hand warmers'],
    peakTime: '2 AM local time',
    duration: '2 nights of peak activity',
  },
  {
    id: 'aurora-forecast',
    name: 'Northern Lights Alert',
    type: 'aurora',
    date: 'Jan 15, 2026',
    time: 'All Night',
    visibility: 'Medium',
    description: 'Enhanced aurora activity expected due to solar storm.',
    longDescription: 'A coronal mass ejection (CME) is expected to reach Earth, causing enhanced geomagnetic activity. This may produce visible aurora at latitudes as low as 50°N. The aurora borealis could be visible across Canada, northern US states, Scotland, and Scandinavia.',
    image: '🌌',
    icon: 'aurora',
    visibilityRegions: ['Canada', 'Northern USA', 'Scandinavia', 'Scotland', 'Russia'],
    coordinates: [
      { lat: 64.1466, lng: -21.9426 },
      { lat: 69.6496, lng: 18.956 },
      { lat: 62.454, lng: -114.3718 },
    ],
    tips: [
      'Get away from city lights for best viewing',
      'Face north and watch the horizon',
      'Aurora activity often increases around midnight',
      'Keep checking as activity levels fluctuate',
    ],
    equipment: ['Warm clothing', 'Camera with manual settings', 'Tripod', 'Wide-angle lens'],
    peakTime: '10 PM - 2 AM local time',
  },
  {
    id: 'comet-atlas-2026',
    name: 'Comet C/2024 ATLAS',
    type: 'comet',
    date: 'Apr 5, 2026',
    endDate: 'Apr 20, 2026',
    time: 'Pre-dawn',
    visibility: 'Medium',
    description: 'Potentially visible naked-eye comet approaching perihelion.',
    longDescription: 'Comet C/2024 ATLAS is predicted to reach naked-eye visibility as it approaches its closest point to the Sun. While comets are notoriously unpredictable, current projections suggest it could reach magnitude 4-5, making it visible to the naked eye from dark locations.',
    image: '☄️',
    icon: 'comet',
    visibilityRegions: ['Northern Hemisphere'],
    coordinates: [
      { lat: 45, lng: 0 },
    ],
    tips: [
      'Look low on the eastern horizon before sunrise',
      'Binoculars will reveal the tail structure',
      'Check for updates as brightness can change rapidly',
      'Best viewed from locations with clear eastern horizons',
    ],
    equipment: ['Binoculars', 'Telescope', 'Star chart or app', 'Camera for long exposures'],
    peakTime: 'April 10-15, 2026',
    duration: '2-3 weeks of visibility',
  },
  {
    id: 'solar-eclipse-aug-2026',
    name: 'Total Solar Eclipse',
    type: 'eclipse',
    date: 'Aug 12, 2026',
    time: '5:45 PM UTC',
    visibility: 'High',
    description: 'Total solar eclipse visible from Spain and Iceland.',
    longDescription: 'A total solar eclipse will sweep across parts of the Arctic, Greenland, Iceland, and Spain. The path of totality will be approximately 290 km wide, with maximum totality lasting over 2 minutes. This is a rare opportunity to witness one of nature\'s most spectacular phenomena.',
    image: '🌘',
    icon: 'eclipse',
    visibilityRegions: ['Spain', 'Iceland', 'Greenland', 'Arctic'],
    coordinates: [
      { lat: 42.4298, lng: -8.6446 },
      { lat: 64.1466, lng: -21.9426 },
      { lat: 71.7069, lng: -42.6043 },
    ],
    tips: [
      'NEVER look at the Sun without proper eclipse glasses',
      'Only remove glasses during totality',
      'Book accommodation early - eclipse paths get crowded',
      'Have a backup location in case of clouds',
    ],
    equipment: ['Certified eclipse glasses', 'Solar filter for camera', 'Tripod', 'Wide-angle lens'],
    peakTime: 'Varies by location - check local times',
    duration: 'Totality: up to 2 min 18 sec',
  },
];

export const eventTypes = [
  { value: 'all', label: 'All Events' },
  { value: 'meteor-shower', label: 'Meteor Showers' },
  { value: 'eclipse', label: 'Eclipses' },
  { value: 'satellite', label: 'Satellite Passes' },
  { value: 'planetary', label: 'Planetary Events' },
  { value: 'comet', label: 'Comets' },
  { value: 'aurora', label: 'Aurora' },
];

export const visibilityLevels = [
  { value: 'all', label: 'All Visibility' },
  { value: 'Very High', label: 'Very High' },
  { value: 'High', label: 'High' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Low', label: 'Low' },
];
