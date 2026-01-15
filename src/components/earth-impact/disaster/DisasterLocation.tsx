import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DisasterLocation = () => {
    return (
        <div className="glass-card mb-6 px-4 py-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-l-4 border-l-blue-500">
            <div>
                <div className="flex items-center gap-2 text-foreground font-medium">
                    <MapPin className="w-4 h-4 text-blue-500 animate-pulse" />
                    <span>Showing disaster insights for: <span className="font-bold">Your Region (Auto-detected)</span></span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5 ml-6">
                    All risks and alerts are based on satellite data over this area.
                </p>
            </div>
            <Button variant="link" size="sm" className="h-auto p-0 text-blue-400 hover:text-blue-300 text-xs">
                Change location
            </Button>
        </div>
    );
};

export default DisasterLocation;
