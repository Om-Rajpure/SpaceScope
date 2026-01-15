import { Helmet } from 'react-helmet-async';
import Starfield from '@/components/Starfield';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImpactMeters from '@/components/earth-impact/ImpactMeters';
import LocationImpact from '@/components/earth-impact/LocationImpact';
import SectorDashboards from '@/components/earth-impact/SectorDashboards';
import ImpactEducation from '@/components/earth-impact/ImpactEducation';
import ImpactAlerts from '@/components/earth-impact/ImpactAlerts';

const EarthImpact = () => {
    return (
        <>
            <Helmet>
                <title>Earth Impact | SpaceScope</title>
                <meta
                    name="description"
                    content="Understand how space and satellite activity affects Earth systems via key indicators and real-time data."
                />
            </Helmet>

            <div className="relative min-h-screen bg-background overflow-hidden">
                <Starfield />
                <Navbar />

                <main className="relative z-10 container mx-auto px-4 pt-24 pb-12">
                    {/* Header Section */}
                    <div className="mb-8 text-center sm:text-left">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
                            Earth Impact
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            Understand how space and satellite activity affects Earth systems in real time.
                        </p>
                    </div>

                    <ImpactMeters />
                    <LocationImpact />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold mb-6">Sector Analysis</h2>
                            <SectorDashboards />
                            <ImpactAlerts />
                        </div>

                        <div className="lg:col-span-1">
                            <ImpactEducation />
                        </div>
                    </div>

                </main>

                <Footer />
            </div>
        </>
    );
};

export default EarthImpact;
