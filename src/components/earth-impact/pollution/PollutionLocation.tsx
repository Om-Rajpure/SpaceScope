import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PollutionLocation = () => {
    return (
        <div className="glass-card mb-6 px-4 py-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-l-4 border-l-gray-500">
            <div>
                <div className="flex items-center gap-2 text-foreground font-medium">
                    <MapPin className="w-4 h-4 text-gray-400 animate-pulse" />
                    <span>Showing pollution insights for: <span className="font-bold">Your Area (Auto-detected)</span></span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5 ml-6">
                    All pollution indicators are based on satellite and environmental observations over this region.
                </p>
            </div>
            <Button variant="link" size="sm" className="h-auto p-0 text-gray-400 hover:text-gray-300 text-xs">
                Change location
            </Button>
        </div>
    );
};

export default PollutionLocation;
