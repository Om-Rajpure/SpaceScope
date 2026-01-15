import { MapPin, Crosshair, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocationImpact = () => {
    return (
        <div className="glass-card p-6 mb-8 bg-gradient-to-r from-primary/5 via-transparent to-transparent">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-primary mb-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-semibold tracking-wide uppercase">Impact Near You</span>
                    </div>
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        New York, USA
                        <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-primary">
                            <Crosshair className="w-3 h-3" />
                        </Button>
                    </h2>
                </div>

                <div className="flex-1 md:pl-8 lg:pl-16">
                    <div className="grid sm:grid-cols-2 gap-y-2 gap-x-8">
                        <div className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                            <span>Minor GPS fluctuations expected</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-400" />
                            <span>Communication systems stable</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-400" />
                            <span>Power grid nominal</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-400" />
                            <span>Air quality index: Good (42)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationImpact;
