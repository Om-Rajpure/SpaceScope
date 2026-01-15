import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Satellite } from 'lucide-react';
import { Link } from 'react-router-dom';
import Starfield from '@/components/Starfield';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClimateLocation from '@/components/earth-impact/climate/ClimateLocation';
import ClimateSnapshot from '@/components/earth-impact/climate/ClimateSnapshot';
import ClimateComparison from '@/components/earth-impact/climate/ClimateComparison';
import { ClimateTrends, ClimateEducation } from '@/components/earth-impact/climate/ClimateEducation';

const Climate = () => {
    return (
        <>
            <Helmet>
                <title>Climate Impact | SpaceScope</title>
                <meta
                    name="description"
                    content="Understanding long-term climate change using satellite intelligence."
                />
            </Helmet>

            <div className="relative min-h-screen bg-background overflow-hidden">
                <Starfield />
                <Navbar />

                <main className="relative z-10 container mx-auto px-4 pt-24 pb-12">
                    <ClimateLocation />

                    {/* Header Section */}
                    <div className="mb-6">
                        <Link to="/earth-impact">
                            <Button variant="ghost" size="sm" className="mb-4 pl-0 text-muted-foreground hover:text-primary">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Earth Impact
                            </Button>
                        </Link>
                        <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                            Climate Impact
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            Understanding long-term climate change using satellite intelligence.
                        </p>
                    </div>

                    <ClimateSnapshot />
                    <ClimateComparison />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        <div className="lg:col-span-2">
                            <ClimateTrends />
                        </div>

                        <div className="space-y-6">
                            <ClimateEducation />
                        </div>
                    </div>

                    <div className="text-center py-8 border-t border-white/5 mt-8">
                        <p className="flex items-center justify-center gap-2 text-muted-foreground font-medium">
                            <Satellite className="w-4 h-4 text-emerald-400" />
                            I can clearly see how my region’s climate has been changing over time and how satellites make these changes visible.
                        </p>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default Climate;
