import { AlertTriangle, Info, Satellite, ShieldCheck, Eye, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PollutionAlerts = ({ days }: { days: string }) => {
    return (
        <div className="glass-card p-5 mb-6 border-l-4 border-l-yellow-500">
            <h3 className="font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-500" /> Alerts & Awareness
            </h3>

            <div className="space-y-3">
                <div className="bg-yellow-500/10 rounded-lg p-3 flex items-start gap-3 border border-yellow-500/20">
                    <div className="mt-0.5 text-yellow-500">
                        <Wind className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm">Low wind may trap pollution</h4>
                        <p className="text-xs text-muted-foreground">Expected in evenings for the next {days} days.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PollutionEducation = () => {
    return (
        <div className="space-y-6">
            {/* Space Help Card */}
            <div className="glass-card p-5 bg-gradient-to-br from-gray-500/10 to-transparent">
                <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                    <Satellite className="w-4 h-4 text-primary" />
                    How satellites help track pollution
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    Satellites observe gases, heat patterns, smoke, and dust in the atmosphere.
                    This helps detect pollution sources, spread, and future buildup before it becomes severe.
                </p>
            </div>

            {/* Health Chain */}
            <div className="glass-card p-5">
                <h4 className="font-bold text-sm mb-4">From Space to Health</h4>
                <div className="flex flex-col gap-4 relative">
                    <div className="absolute left-3.5 top-3 bottom-3 w-0.5 bg-gradient-to-b from-gray-500 to-green-500 opacity-30"></div>

                    <div className="flex items-center gap-3 z-10">
                        <div className="bg-gray-500/20 p-1.5 rounded-full border border-gray-500/30"><Eye className="w-4 h-4 text-gray-400" /></div>
                        <span className="text-sm font-medium">Pollution Detection</span>
                    </div>
                    <div className="flex items-center gap-3 z-10">
                        <div className="bg-yellow-500/20 p-1.5 rounded-full border border-yellow-500/30"><Info className="w-4 h-4 text-yellow-400" /></div>
                        <span className="text-sm font-medium">Public Awareness</span>
                    </div>
                    <div className="flex items-center gap-3 z-10">
                        <div className="bg-green-500/20 p-1.5 rounded-full border border-green-500/30"><ShieldCheck className="w-4 h-4 text-green-400" /></div>
                        <span className="text-sm font-medium">Health Protection</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { PollutionAlerts, PollutionEducation };
