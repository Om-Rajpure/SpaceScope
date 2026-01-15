import { Wind, Building2, Factory, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

const STATUS_DATA = [
    {
        title: 'Air Quality Level',
        status: 'Moderate',
        desc: 'Air quality is moderate due to traffic emissions.',
        icon: Wind,
        color: 'text-yellow-500',
        bg: 'bg-yellow-500/10'
    },
    {
        title: 'Urban Pollution Load',
        status: 'High',
        desc: 'Peak hour traffic contributing significantly.',
        icon: Building2,
        color: 'text-orange-500',
        bg: 'bg-orange-500/10'
    },
    {
        title: 'Industrial Emission',
        status: 'Low',
        desc: 'No major industrial plumes detected nearby.',
        icon: Factory,
        color: 'text-green-500',
        bg: 'bg-green-500/10'
    },
    {
        title: 'Seasonal Factors',
        status: 'Low',
        desc: 'Dust and crop burning activity is minimal.',
        icon: Sun,
        color: 'text-green-500',
        bg: 'bg-green-500/10'
    },
];

const PollutionStatus = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {STATUS_DATA.map((item, idx) => {
                const Icon = item.icon;
                return (
                    <div key={idx} className={cn("glass-card p-4 hover:bg-muted/10 transition-colors", item.bg.replace('/10', '/5'))}>
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wide">{item.title}</h3>
                            <div className={cn("p-2 rounded-full", item.bg)}>
                                <Icon className={cn("w-4 h-4", item.color)} />
                            </div>
                        </div>
                        <div className="mb-2">
                            <span className={cn("text-lg font-bold px-2 py-0.5 rounded-md bg-background/50", item.color)}>
                                {item.status}
                            </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-snug">
                            {item.desc}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default PollutionStatus;
