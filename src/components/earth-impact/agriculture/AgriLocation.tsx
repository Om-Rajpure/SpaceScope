import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AgriLocation = () => {
    return (
        <div className="glass-card mb-6 px-4 py-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-l-4 border-l-primary">
            <div>
                <div className="flex items-center gap-2 text-foreground font-medium">
                    <MapPin className="w-4 h-4 text-primary animate-pulse" />
                    <span>Showing satellite insights for: <span className="font-bold">Your Area (Auto-detected)</span></span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5 ml-6">
                    All crop health and alerts are based on satellite data over this region.
                </p>
            </div>
            <Button variant="link" size="sm" className="h-auto p-0 text-primary hover:text-primary/80 text-xs">
                Change location
            </Button>
        </div>
    );
};

export default AgriLocation;
