import { AlertCircle, Eye, ArrowRight, Satellite, ShieldCheck, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock alerts based on days prop
const getAlerts = (days: string) => {
    // Just simple mock logic for visual demo
    if (days === '3' || days === '7') {
        return [
            { id: 1, icon: AlertCircle, color: 'text-blue-400', title: 'Flood Watch', region: 'North River Basin', time: 'Next 48h', type: 'info' }
        ]
    }
    return [
        { id: 1, icon: AlertCircle, color: 'text-blue-400', title: 'Flood Watch', region: 'North River Basin', time: 'Next 48h', type: 'info' },
        { id: 2, icon: Flame, color: 'text-orange-400', title: 'Dry Conditions', region: 'Eastern Forest Belt', time: 'Week 2', type: 'warn' }
    ];
};

import { Flame } from 'lucide-react'; // Import missing icon

const DisasterAlerts = ({ days }: { days: string }) => {
    const alerts = getAlerts(days);

    return (
        <div className="glass-card p-5 mb-6">
            <h3 className="font-bold mb-4 flex items-center gap-2">
                <Bell className="w-4 h-4 text-primary" /> Active Alerts & Awareness
            </h3>

            <div className="space-y-3">
                {alerts.map((alert) => (
                    <div key={alert.id} className="bg-muted/10 rounded-lg p-3 flex items-start gap-3 border border-white/5">
                        <div className={`mt-0.5 ${alert.color}`}>
                            <alert.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <h4 className="font-bold text-sm">{alert.title}</h4>
                                <span className="text-[10px] bg-background/50 px-1.5 py-0.5 rounded text-muted-foreground">{alert.time}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{alert.region}</p>
                        </div>
                        <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-white">
                            <Eye className="w-3.5 h-3.5" />
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const DisasterEducation = () => {
    return (
        <div className="space-y-6">
            {/* Space Help Card */}
            <div className="glass-card p-5 bg-gradient-to-br from-blue-600/10 to-transparent">
                <h4 className="font-bold text-sm text-blue-300 mb-2">How satellites help detect disasters early?</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    Satellites continuously monitor rainfall, ocean temperature, land heat, and ground movement.
                    These signals help detect possible disasters days or weeks before they cause damage.
                </p>
            </div>

            {/* Safety Chain */}
            <div className="glass-card p-5">
                <h4 className="font-bold text-sm mb-4">The Safety Chain</h4>
                <div className="flex flex-col gap-4 relative">
                    <div className="absolute left-3.5 top-3 bottom-3 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500 opacity-30"></div>

                    <div className="flex items-center gap-3 z-10">
                        <div className="bg-blue-500/20 p-1.5 rounded-full border border-blue-500/30"><Satellite className="w-4 h-4 text-blue-400" /></div>
                        <span className="text-sm font-medium">Satellite Observation</span>
                    </div>
                    <div className="flex items-center gap-3 z-10">
                        <div className="bg-cyan-500/20 p-1.5 rounded-full border border-cyan-500/30"><Eye className="w-4 h-4 text-cyan-400" /></div>
                        <span className="text-sm font-medium">Early Detection</span>
                    </div>
                    <div className="flex items-center gap-3 z-10">
                        <div className="bg-emerald-500/20 p-1.5 rounded-full border border-emerald-500/30"><ShieldCheck className="w-4 h-4 text-emerald-400" /></div>
                        <span className="text-sm font-medium">Preparedness</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { DisasterAlerts, DisasterEducation };
