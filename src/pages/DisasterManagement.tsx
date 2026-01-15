import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Satellite } from 'lucide-react';
import { Link } from 'react-router-dom';
import Starfield from '@/components/Starfield';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DisasterLocation from '@/components/earth-impact/disaster/DisasterLocation';
import DisasterRiskSummary from '@/components/earth-impact/disaster/DisasterRiskSummary';
import DisasterRegionList from '@/components/earth-impact/disaster/DisasterRegionList';
import { DisasterAlerts, DisasterEducation } from '@/components/earth-impact/disaster/DisasterEducation';

const DisasterManagement = () => {
    const [days, setDays] = useState('7');

    return (
        <>
            <Helmet>
                <title>Disaster Management | SpaceScope</title>
                <meta
                    name="description"
                    content="Using satellite intelligence for early warning and disaster preparedness."
                />
            </Helmet>

            <div className="relative min-h-screen bg-background overflow-hidden">
                <Starfield />
                <Navbar />

                <main className="relative z-10 container mx-auto px-4 pt-24 pb-12">
                    <DisasterLocation />

                    {/* Header Section */}
                    <div className="mb-6">
                        <Link to="/earth-impact">
                            <Button variant="ghost" size="sm" className="mb-4 pl-0 text-muted-foreground hover:text-primary">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Earth Impact
                            </Button>
                        </Link>
                        <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                            Disaster Management
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            Using satellite intelligence for early warning and disaster preparedness.
                        </p>
                    </div>

                    <DisasterRiskSummary days={days} setDays={setDays} />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        <div className="lg:col-span-2">
                            <DisasterRegionList days={days} />
                        </div>

                        <div className="">
                            <DisasterAlerts days={days} />
                            <DisasterEducation />
                        </div>
                    </div>

                    <div className="text-center py-8 border-t border-white/5 mt-8">
                        <p className="flex items-center justify-center gap-2 text-muted-foreground font-medium">
                            <Satellite className="w-4 h-4 text-blue-400" />
                            Disasters don’t come suddenly — satellites help detect risks early so we can be prepared.
                        </p>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default DisasterManagement;
