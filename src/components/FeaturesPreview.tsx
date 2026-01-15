import { 
  Telescope, 
  Sun, 
  Rocket, 
  GraduationCap, 
  Satellite, 
  MessageSquare,
  MapPin,
  Bell
} from 'lucide-react';

const features = [
  {
    icon: Telescope,
    title: 'Sky Event Tracker',
    description: 'Interactive visibility maps for meteor showers, eclipses, ISS passes, and planetary alignments.',
    color: 'from-primary to-secondary',
  },
  {
    icon: Sun,
    title: 'Cosmic Weather',
    description: 'Real-time solar activity, aurora forecasts, and space-earth impact meters.',
    color: 'from-solar-orange to-star-yellow',
  },
  {
    icon: Rocket,
    title: 'Mission Timeline',
    description: 'Visual timeline of past, current, and future space missions from agencies worldwide.',
    color: 'from-secondary to-nebula-blue',
  },
  {
    icon: GraduationCap,
    title: 'Learning Zone',
    description: 'Interactive quizzes and cause-effect visual chains showing space-earth connections.',
    color: 'from-aurora-green to-secondary',
  },
  {
    icon: Satellite,
    title: 'Earth Impact',
    description: 'See how satellite data helps agriculture, disaster management, and climate monitoring.',
    color: 'from-primary to-accent',
  },
  {
    icon: MessageSquare,
    title: 'Ask Space AI',
    description: 'Chat with an AI trained on space data. Ask anything about the cosmos in plain language.',
    color: 'from-accent to-primary',
  },
  {
    icon: MapPin,
    title: 'Location Smart',
    description: '"What can I see right now?" mode with personalized visibility based on your location.',
    color: 'from-nebula-blue to-aurora-green',
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    description: 'Never miss an event with in-app notifications and Google Calendar integration.',
    color: 'from-solar-orange to-danger-red',
  },
];

const FeaturesPreview = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Everything Space,{' '}
            <span className="text-gradient">One Platform</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From celestial events to earth applications, explore the universe and understand 
            how space technology impacts our daily lives.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group glass-card p-6 hover:glow-border transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Indicator */}
                <div className="mt-4 flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesPreview;
