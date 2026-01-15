import { Helmet } from 'react-helmet-async';
import Starfield from '@/components/Starfield';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesPreview from '@/components/FeaturesPreview';
import UpcomingEvents from '@/components/UpcomingEvents';
import CosmicWeatherWidget from '@/components/CosmicWeatherWidget';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SpaceScope – Explore, Learn & Stay Connected with the Universe</title>
        <meta 
          name="description" 
          content="Your personal gateway to celestial events, cosmic weather, and space exploration. Never miss a meteor shower, aurora, or rocket launch again." 
        />
        <meta name="keywords" content="space, astronomy, celestial events, meteor shower, aurora, ISS, space missions, cosmic weather" />
      </Helmet>
      
      <div className="relative min-h-screen bg-background overflow-hidden">
        {/* Animated Starfield Background */}
        <Starfield />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main className="relative z-10">
          <HeroSection />
          <FeaturesPreview />
          <UpcomingEvents />
          <CosmicWeatherWidget />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
