import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Satellite } from 'lucide-react';
import { Link } from 'react-router-dom';
import Starfield from '@/components/Starfield';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PollutionLocation from '@/components/earth-impact/pollution/PollutionLocation';
import PollutionStatus from '@/components/earth-impact/pollution/PollutionStatus';
import PollutionTrends from '@/components/earth-impact/pollution/PollutionTrends';
import PollutionSources from '@/components/earth-impact/pollution/PollutionSources';
import { PollutionAlerts, PollutionEducation } from '@/components/earth-impact/pollution/PollutionEducation';

const Pollution = () => {
    const [days, setDays] = useState('7');

    return (
        <>
            <Helmet>
                <title>Pollution Impact | SpaceScope</title>
                <meta
                    name="description"
                    content="Understanding air and environmental pollution using satellite intelligence."
                />
            </Helmet>

            <div className="relative min-h-screen bg-background overflow-hidden">
                <Starfield />
                <Navbar />

                <main className="relative z-10 container mx-auto px-4 pt-24 pb-12">
                    <PollutionLocation />

                    {/* Header Section */}
                    <div className="mb-6">
                        <Link to="/earth-impact">
                            <Button variant="ghost" size="sm" className="mb-4 pl-0 text-muted-foreground hover:text-primary">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Earth Impact
                            </Button>
                        </Link>
                        <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                            Pollution Impact
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            Understanding air and environmental pollution using satellite intelligence.
                        </p>
                    </div>

                    <PollutionStatus />
                    <PollutionTrends days={days} setDays={setDays} />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        <div className="lg:col-span-2 min-h-[400px]">
                            <PollutionSources />
                        </div>

                        <div className="space-y-6">
                            <PollutionAlerts days={days} />
                            <PollutionEducation />
                        </div>
                    </div>

                    <div className="text-center py-8 border-t border-white/5 mt-8">
                        <p className="flex items-center justify-center gap-2 text-muted-foreground font-medium">
                            <Satellite className="w-4 h-4 text-gray-400" />
                            I understand how polluted my area is, what’s causing it, what may happen next, and how satellites help track it early.
                        </p>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default Pollution;
