import { CloudRain, Thermometer, Wind, Snowflake, Satellite, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface ImpactAlert {
    id: string;
    icon: any;
    title: string;
    desc: string;
    time: string;
    color: string;
    bg: string;
}

const ALERTS_DATA: Record<string, ImpactAlert[]> = {
    '3': [
        { id: '1', icon: CloudRain, title: 'Low Rainfall Expected', desc: 'May increase water stress on crops.', time: 'Next 3 days', color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    ],
    '7': [
        { id: '1', icon: CloudRain, title: 'Low Rainfall Expected', desc: 'May increase water stress on crops.', time: 'Next 3 days', color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
        { id: '2', icon: Thermometer, title: 'High Temperature Risk', desc: 'Heat stress possible during afternoon.', time: 'Upcoming', color: 'text-orange-500', bg: 'bg-orange-500/10' },
    ],
    '14': [
        { id: '1', icon: CloudRain, title: 'Low Rainfall Expected', desc: 'May increase water stress on crops.', time: 'Next 3 days', color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
        { id: '2', icon: Thermometer, title: 'High Temperature Risk', desc: 'Heat stress possible during afternoon.', time: 'Day 5-7', color: 'text-orange-500', bg: 'bg-orange-500/10' },
        { id: '3', icon: Wind, title: 'Strong Wind Alert', desc: 'Risk of crop lodging.', time: 'Day 10', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    ],
    '30': [
        { id: '1', icon: CloudRain, title: 'Low Rainfall Expected', desc: 'May increase water stress on crops.', time: 'Next 3 days', color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
        { id: '2', icon: Thermometer, title: 'High Temperature Risk', desc: 'Heat stress possible during afternoon.', time: 'Day 5-7', color: 'text-orange-500', bg: 'bg-orange-500/10' },
        { id: '3', icon: Wind, title: 'Strong Wind Alert', desc: 'Risk of crop lodging.', time: 'Day 10', color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { id: '4', icon: Snowflake, title: 'Cold Stress Warning', desc: 'Potential frost event.', time: 'Day 22', color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
    ]
};

interface FutureImpactAlertsProps {
    days: string;
    setDays: (days: string) => void;
}

const FutureImpactAlerts = ({ days, setDays }: FutureImpactAlertsProps) => {
    return (
        <div className="space-y-6 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    🌾 Upcoming Crop Impact Alerts
                </h2>

                <div className="flex items-center gap-2 bg-muted/20 p-1 rounded-lg self-start">
                    <span className="text-xs font-medium px-2 text-muted-foreground hidden sm:block">View for:</span>
                    {['3', '7', '14', '30'].map((d) => (
                        <button
                            key={d}
                            onClick={() => setDays(d)}
                            className={cn(
                                "text-xs font-medium px-3 py-1.5 rounded-md transition-all",
                                days === d
                                    ? "bg-primary text-primary-foreground shadow-sm"
                                    : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
                            )}
                        >
                            {d} Days
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ALERTS_DATA[days]?.map((alert) => {
                    const Icon = alert.icon;
                    return (
                        <div key={alert.id} className={cn("glass-card p-4 border-l-4 flex items-start gap-4 transition-all duration-300 animate-fade-in", alert.bg.replace('/10', '/5'))} style={{ borderLeftColor: alert.color.includes('yellow') ? '#eab308' : alert.color.includes('orange') ? '#f97316' : alert.color.includes('blue') ? '#3b82f6' : '#818cf8' }}>
                            <div className={cn("p-2 rounded-full mt-1", alert.bg)}>
                                <Icon className={cn("w-5 h-5", alert.color)} />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h4 className="font-bold text-sm">{alert.title}</h4>
                                    <span className="text-[10px] font-mono bg-background/40 px-1.5 py-0.5 rounded text-muted-foreground border border-white/5">
                                        {alert.time}
                                    </span>
                                </div>
                                <p className="text-sm text-foreground/80 mt-1">{alert.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* How Space Data Helps Card */}
            <div className="glass-card p-5 bg-gradient-to-r from-blue-500/5 to-transparent border-blue-500/20">
                <div className="flex items-start gap-3">
                    <div className="bg-blue-400/20 p-2 rounded-full">
                        <Satellite className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-bold text-sm text-blue-400">How does space data help farmers early?</h4>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Info className="w-3.5 h-3.5 text-muted-foreground/70" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Real-time telemetry from earth observation satellites.</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Satellites observe weather patterns, heat, moisture, and cloud movement days or weeks in advance.
                            This helps detect possible risks to crops before damage happens, giving time to prepare.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FutureImpactAlerts;
