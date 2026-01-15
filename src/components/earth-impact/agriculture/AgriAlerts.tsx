import { AlertTriangle, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AgriAlerts = () => {
    return (
        <div className="mb-6 space-y-3">
            <div className="glass-card border-l-4 border-l-yellow-500 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex gap-3">
                    <Droplets className="w-5 h-5 text-yellow-500 mt-1" />
                    <div>
                        <h4 className="font-bold text-sm">Low Soil Moisture Alert</h4>
                        <p className="text-xs text-muted-foreground">Zone 4 displaying early signs of drought stress.</p>
                    </div>
                </div>
                <Button size="sm" variant="outline" className="text-xs h-7 border-yellow-500/20 text-yellow-500 hover:text-yellow-400">View Zone</Button>
            </div>

            <div className="glass-card border-l-4 border-l-blue-500 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-blue-500 mt-1" />
                    <div>
                        <h4 className="font-bold text-sm">Frost Warning</h4>
                        <p className="text-xs text-muted-foreground">Cold front approaching in 48h. Cover sensitive crops.</p>
                    </div>
                </div>
                <span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded">Advisory</span>
            </div>
        </div>
    );
};

export default AgriAlerts;
