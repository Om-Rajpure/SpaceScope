import { Sprout, Activity, Wind, Thermometer, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

const sectors = [
    {
        icon: Sprout,
        title: 'Agriculture',
        stat: '98%',
        statLabel: 'Comms Success',
        desc: 'Satellites monitoring crop moisture levels.',
        color: 'text-green-400',
        trend: 'stable',
    },
    {
        icon: Activity,
        title: 'Disaster Management',
        stat: 'Active',
        statLabel: '2 Storms Tracked',
        desc: 'Real-time cyclone pathing for Pacific region.',
        color: 'text-red-400',
        trend: 'warning',
    },
    {
        icon: Wind,
        title: 'Pollution',
        stat: '42 AQI',
        statLabel: 'Global Avg.',
        desc: 'Tracking industrial emissions in real-time.',
        color: 'text-blue-400',
        trend: 'stable',
    },
    {
        icon: Thermometer,
        title: 'Climate',
        stat: '+1.2°C',
        statLabel: 'Anomaly',
        desc: 'Monitoring polar ice cap surface temperatures.',
        color: 'text-orange-400',
        trend: 'rising',
    },
];

const SectorDashboards = () => {
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {sectors.map((sector) => {
                const Icon = sector.icon;
                return (
                    <div
                        key={sector.title}
                        onClick={() => {
                            if (sector.title === 'Agriculture') navigate('/earth-impact/agriculture');
                            if (sector.title === 'Disaster Management') navigate('/earth-impact/disaster-management');
                        }}
                        className="glass-card p-5 group cursor-pointer hover:border-primary/30 transition-all duration-300"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className={cn("p-2.5 rounded-xl bg-background/50 border border-white/5", sector.color)}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{sector.title}</h3>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Earth Sector</p>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" className="text-muted-foreground group-hover:text-primary group-hover:bg-primary/10">
                                <ArrowUpRight className="w-5 h-5" />
                            </Button>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-bold font-display">{sector.stat}</span>
                                <span className="text-sm text-muted-foreground">{sector.statLabel}</span>
                            </div>

                            <p className="text-sm text-muted-foreground leading-snug">
                                {sector.desc}
                            </p>

                            <div className="pt-2 flex items-center gap-2 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                <span>View Dashboard</span>
                                <ArrowRight className="w-3 h-3" />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default SectorDashboards;
