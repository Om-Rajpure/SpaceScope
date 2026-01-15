import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ClimateLocation = () => {
    return (
        <div className="glass-card mb-6 px-4 py-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-l-4 border-l-emerald-500">
            <div>
                <div className="flex items-center gap-2 text-foreground font-medium">
                    <MapPin className="w-4 h-4 text-emerald-400 animate-pulse" />
                    <span>Showing climate trends for: <span className="font-bold">Your Region (Auto-detected)</span></span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5 ml-6">
                    All trends are derived from long-term satellite observations over this region.
                </p>
            </div>
            <Button variant="link" size="sm" className="h-auto p-0 text-emerald-400 hover:text-emerald-300 text-xs">
                Change location
            </Button>
        </div>
    );
};

export default ClimateLocation;
