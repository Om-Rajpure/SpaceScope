import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Satellite } from 'lucide-react';
import { Link } from 'react-router-dom';
import Starfield from '@/components/Starfield';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AgriStats from '@/components/earth-impact/agriculture/AgriStats';
import CropRiskReadiness from '@/components/earth-impact/agriculture/CropHealthMap';
import WaterInsights from '@/components/earth-impact/agriculture/WaterInsights';
import AgriEducation from '@/components/earth-impact/agriculture/AgriEducation';
import FutureImpactAlerts from '@/components/earth-impact/agriculture/FutureImpactAlerts';
import AgriLocation from '@/components/earth-impact/agriculture/AgriLocation';

const Agriculture = () => {
    const [days, setDays] = useState('7');

    return (
        <>
            <Helmet>
                <title>Agriculture Impact | SpaceScope</title>
                <meta
                    name="description"
                    content="Satellite-driven insights to monitor crops, water, and climate stress."
                />
            </Helmet>

            <div className="relative min-h-screen bg-background overflow-hidden">
                <Starfield />
                <Navbar />

                <main className="relative z-10 container mx-auto px-4 pt-24 pb-12">
                    <AgriLocation />

                    {/* Header Section */}
                    <div className="mb-6">
                        <Link to="/earth-impact">
                            <Button variant="ghost" size="sm" className="mb-4 pl-0 text-muted-foreground hover:text-primary">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Earth Impact
                            </Button>
                        </Link>
                        <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                            Agriculture Impact
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            Satellite-driven insights to monitor crops, water, and climate stress.
                        </p>
                    </div>

                    <AgriStats />

                    <FutureImpactAlerts days={days} setDays={setDays} />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        <div className="lg:col-span-2 min-h-[400px]">
                            <CropRiskReadiness days={days} />
                        </div>

                        <div className="space-y-6">
                            <WaterInsights />
                            <AgriEducation />
                        </div>
                    </div>

                    <div className="text-center py-8 border-t border-white/5 mt-8">
                        <p className="flex items-center justify-center gap-2 text-muted-foreground font-medium">
                            <Satellite className="w-4 h-4 text-primary" />
                            Satellite-based early awareness helps reduce crop loss and uncertainty.
                        </p>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default Agriculture;
