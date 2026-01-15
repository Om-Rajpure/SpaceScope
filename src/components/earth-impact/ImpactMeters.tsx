import { Zap, Wifi, Navigation, Plane, Satellite } from 'lucide-react';
import { cn } from '@/lib/utils';

const meters = [
    {
        id: 'gps',
        label: 'GPS Systems',
        status: 'Moderate',
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10',
        border: 'border-yellow-400/20',
        icon: Navigation,
    },
    {
        id: 'comms',
        label: 'HF Radio / Comms',
        status: 'Nominal',
        color: 'text-green-400',
        bg: 'bg-green-400/10',
        border: 'border-green-400/20',
        icon: Wifi,
    },
    {
        id: 'power',
        label: 'Power Grid',
        status: 'Nominal',
        color: 'text-green-400',
        bg: 'bg-green-400/10',
        border: 'border-green-400/20',
        icon: Zap,
    },
    {
        id: 'sat',
        label: 'Satellite Ops',
        status: 'Elevated',
        color: 'text-orange-400',
        bg: 'bg-orange-400/10',
        border: 'border-orange-400/20',
        icon: Satellite,
    },
    {
        id: 'aviation',
        label: 'Aviation',
        status: 'Low Risk',
        color: 'text-green-400',
        bg: 'bg-green-400/10',
        border: 'border-green-400/20',
        icon: Plane,
    },
];

const ImpactMeters = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {meters.map((meter) => {
                const Icon = meter.icon;
                return (
                    <div
                        key={meter.id}
                        className={cn(
                            "glass-card p-4 flex flex-col items-center text-center gap-2 border hover:bg-muted/10 transition-colors",
                            meter.border
                        )}
                    >
                        <div className={cn("p-2 rounded-full", meter.bg)}>
                            <Icon className={cn("w-5 h-5", meter.color)} />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{meter.label}</p>
                            <p className={cn("font-bold text-sm", meter.color)}>{meter.status}</p>
                        </div>

                        {/* Visual Indicator Line */}
                        <div className="w-full h-1 bg-muted/20 rounded-full mt-1 overflow-hidden">
                            <div className={cn("h-full w-[60%] rounded-full opacity-80",
                                meter.status === 'Nominal' || meter.status === 'Low Risk' ? 'bg-green-400 w-[20%]' :
                                    meter.status === 'Moderate' ? 'bg-yellow-400 w-[50%]' :
                                        'bg-orange-400 w-[80%]'
                            )} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ImpactMeters;
