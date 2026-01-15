import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Starfield from '@/components/Starfield';
import Footer from '@/components/Footer';
import CosmicStatusSummary from '@/components/weather/CosmicStatusSummary';
import SolarActivityVisual from '@/components/weather/SolarActivityVisual';
import ImpactMeters from '@/components/weather/ImpactMeters';
import HowAffectsMe from '@/components/weather/HowAffectsMe';
import RegionImpactMap from '@/components/weather/RegionImpactMap';
import AuroraProbabilityIndicator from '@/components/weather/AuroraProbabilityIndicator';
import CosmicTimeline from '@/components/weather/CosmicTimeline';
import WeatherAlerts from '@/components/weather/WeatherAlerts';
import AskSpaceQuestions from '@/components/weather/AskSpaceQuestions';

import LearnMoreLinks from '@/components/weather/LearnMoreLinks';
import SolarCycleChart from '@/components/weather/SolarCycleChart';
import KpIndexChart from '@/components/weather/KpIndexChart';
import {
  solarData,
  riskMeters,
  auroraForecasts,
  spaceWeatherAlerts,
  solarCycleData,
  kpIndexHistory,
} from '@/data/cosmicWeatherData';

const Weather = () => {
  // Determine overall status based on Kp index
  const getOverallStatus = (): 'Calm' | 'Moderate' | 'High' | 'Severe' => {
    if (solarData.kpIndex >= 7) return 'Severe';
    if (solarData.kpIndex >= 5) return 'High';
    if (solarData.kpIndex >= 3) return 'Moderate';
    return 'Calm';
  };

  return (
    <>
      <Helmet>
        <title>Cosmic Weather | SpaceScope - Real-time Space Weather Monitoring</title>
        <meta 
          name="description" 
          content="Monitor real-time solar activity, geomagnetic storms, aurora forecasts, and space-earth impacts. Track solar wind, Kp index, and more." 
        />
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden">
        <Starfield />
        <Navbar />

        <main className="relative pt-20">
          {/* Page Header */}
          <section className="px-4 py-12">
            <div className="max-w-7xl mx-auto">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gradient">Cosmic Weather</span> Dashboard
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Real-time monitoring of solar activity, geomagnetic conditions, and space-earth impacts. 
                Stay informed about space weather that affects our planet.
              </p>
            </div>
          </section>

          {/* Status Summary */}
          <section className="px-4 pb-8">
            <div className="max-w-7xl mx-auto">
              <CosmicStatusSummary 
                status={getOverallStatus()} 
                kpIndex={solarData.kpIndex} 
                solarWindSpeed={solarData.solarWindSpeed} 
              />
            </div>
          </section>

          {/* Alerts Section */}
          <section className="px-4 pb-8">
            <div className="max-w-7xl mx-auto">
              <WeatherAlerts alerts={spaceWeatherAlerts} />
            </div>
          </section>

          {/* Solar Activity & Impact Meters */}
          <section className="px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <SolarActivityVisual data={solarData} />
                <ImpactMeters meters={riskMeters} />
              </div>
            </div>
          </section>

          {/* How Affects Me & Ask Space Questions */}
          <section className="px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <HowAffectsMe meters={riskMeters} />
                <AskSpaceQuestions meters={riskMeters} kpIndex={solarData.kpIndex} />
              </div>
            </div>
          </section>

          {/* Region Map & Aurora Probability */}
          <section className="px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RegionImpactMap />
                <AuroraProbabilityIndicator forecasts={auroraForecasts} kpIndex={solarData.kpIndex} />
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <CosmicTimeline events={[]} />
            </div>
          </section>

          {/* Charts Section */}
          <section className="px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <SolarCycleChart data={solarCycleData} />
                <KpIndexChart data={kpIndexHistory} />
              </div>
            </div>
          </section>

          {/* Learn More */}
          <section className="px-4 py-8">
            <div className="max-w-7xl mx-auto max-w-xl">
              <LearnMoreLinks />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Weather;
