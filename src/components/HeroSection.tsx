import { ArrowRight, Telescope, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-12">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-aurora-green rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">
            Next Event: <span className="text-foreground font-medium">Perseid Meteor Shower</span> in 3 days
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          Explore the{' '}
          <span className="text-gradient">Universe</span>
          <br />
          Like Never Before
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Your personal gateway to celestial events, cosmic weather, and space exploration. 
          Never miss a meteor shower, aurora, or rocket launch again.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Button size="lg" className="btn-cosmic text-lg px-8 py-6 group">
            Explore Sky Events
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-border/50 hover:bg-muted/50">
            <MapPin className="w-5 h-5 mr-2" />
            Set My Location
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {[
            { value: '150+', label: 'Celestial Events', icon: Calendar },
            { value: 'Real-time', label: 'Cosmic Weather', icon: '☀️' },
            { value: '500+', label: 'Space Missions', icon: '🚀' },
            { value: '50k+', label: 'Stargazers', icon: Telescope },
          ].map((stat, i) => (
            <div 
              key={i} 
              className="glass-card p-4 md:p-6 text-center group hover:glow-border transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-display font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
