import { Thermometer, CloudRain, Trees, Droplets, ArrowUpRight, ArrowRight, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const SNAPSHOT_DATA = [
    {
        title: 'Temperature Trend',
        status: 'Rising',
        desc: 'Gradual increase (+0.4°C) observed.',
        time: 'Over last 10 years',
        icon: Thermometer,
        trendIcon: ArrowUpRight,
        color: 'text-orange-500',
        bg: 'bg-orange-500/10'
    },
    {
        title: 'Rainfall Pattern',
        status: 'Irregular',
        desc: 'Shift in monsoon onset weeks.',
        time: 'Last 5 year avg',
        icon: CloudRain,
        trendIcon: ArrowRight, // Sideways/Change
        color: 'text-blue-400',
        bg: 'bg-blue-400/10'
    },
    {
        title: 'Forest Cover',
        status: 'Stable',
        desc: 'No significant loss in local green cover.',
        time: 'Since 2018',
        icon: Trees,
        trendIcon: Minus,
        color: 'text-emerald-500',
        bg: 'bg-emerald-500/10'
    },
    {
        title: 'Water Body Health',
        status: 'Declining',
        desc: 'Surface area shrinkage in summer.',
        time: 'Seasonal comparison',
        icon: Droplets,
        trendIcon: ArrowRight, // Using arrow to imply change
        color: 'text-cyan-500',
        bg: 'bg-cyan-500/10'
    },
];

const ClimateSnapshot = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {SNAPSHOT_DATA.map((item, idx) => {
                const Icon = item.icon;
                const TrendIcon = item.trendIcon;
                return (
                    <div key={idx} className={cn("glass-card p-4 hover:bg-muted/10 transition-colors", item.bg.replace('/10', '/5'))}>
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wide">{item.title}</h3>
                            <div className={cn("p-2 rounded-full", item.bg)}>
                                <Icon className={cn("w-4 h-4", item.color)} />
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                            <TrendIcon className={cn("w-5 h-5", item.color)} />
                            <span className={cn("text-lg font-bold", item.color)}>
                                {item.status}
                            </span>
                        </div>
                        <p className="text-sm font-medium leading-snug mb-1">{item.desc}</p>
                        <p className="text-[10px] text-muted-foreground border-t border-white/5 pt-2 mt-2">
                            {item.time}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default ClimateSnapshot;
