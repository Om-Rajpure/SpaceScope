import { AlertTriangle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ImpactAlerts = () => {
    return (
        <div className="glass-card border-l-4 border-l-yellow-500 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-4">
                <div className="bg-yellow-500/10 p-2 rounded-full">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                    <h4 className="font-bold flex items-center gap-2">
                        Active Geomagnetic Warning
                        <span className="text-[10px] bg-yellow-500/20 text-yellow-500 px-2 py-0.5 rounded uppercase tracking-wider">G2 Moderate</span>
                    </h4>
                    <p className="text-sm text-muted-foreground mt-0.5">
                        Potential for minor power grid fluctuations at high latitudes.
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
                <Button variant="outline" size="sm" className="w-full sm:w-auto border-white/10 hover:bg-white/5">
                    <Info className="w-4 h-4 mr-2" />
                    Learn More
                </Button>
                <Button size="sm" className="w-full sm:w-auto btn-cosmic">
                    View Details
                </Button>
            </div>
        </div>
    );
};

export default ImpactAlerts;
