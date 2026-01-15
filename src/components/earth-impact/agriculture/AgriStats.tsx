import { Sprout, Droplets, Sun, Thermometer } from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
    {
        label: 'Crop Health Index',
        value: 'Good',
        subtext: 'NDVI 0.72 avg',
        icon: Sprout,
        color: 'text-green-400',
        bg: 'bg-green-400/10',
        border: 'border-green-400/20',
    },
    {
        label: 'Soil Moisture',
        value: 'Moderate',
        subtext: '35% Volumetric',
        icon: Droplets,
        color: 'text-blue-400',
        bg: 'bg-blue-400/10',
        border: 'border-blue-400/20',
    },
    {
        label: 'Drought Risk',
        value: 'Low',
        subtext: 'No alerts',
        icon: Sun,
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10',
        border: 'border-yellow-400/20',
    },
    {
        label: 'Weather Stress',
        value: 'Nominal',
        subtext: 'Temp within range',
        icon: Thermometer,
        color: 'text-orange-400',
        bg: 'bg-orange-400/10',
        border: 'border-orange-400/20',
    },
];

const AgriStats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                    <div
                        key={idx}
                        className={cn(
                            "glass-card p-4 flex items-center justify-between border hover:bg-muted/10 transition-colors",
                            stat.border
                        )}
                    >
                        <div>
                            <p className="text-xs text-muted-foreground uppercase font-medium">{stat.label}</p>
                            <h3 className={cn("text-lg font-bold mt-1", stat.color)}>{stat.value}</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">{stat.subtext}</p>
                        </div>

                        <div className={cn("p-3 rounded-full", stat.bg)}>
                            <Icon className={cn("w-5 h-5", stat.color)} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AgriStats;
