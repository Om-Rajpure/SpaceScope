import { Thermometer, CloudRain, Wheat, Droplets, Satellite, Leaf, Users, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const TREND_DETAILS = [
    { icon: Thermometer, title: 'Increasing Heat Days', desc: 'More heat days increase water stress and crop risk.', color: 'text-orange-500' },
    { icon: CloudRain, title: 'Irregular Rainfall', desc: 'Unpredictable monsoons affect sowing cycles.', color: 'text-blue-400' },
    { icon: Wheat, title: 'Agriculture Stress', desc: 'Changing conditions require adaptive farming.', color: 'text-yellow-500' },
    { icon: Droplets, title: 'Water Scarcity', desc: 'Groundwater recharge rates are slowing down.', color: 'text-cyan-400' },
];

const ClimateTrends = () => {
    return (
        <div className="glass-card p-6 h-full">
            <h3 className="text-lg font-bold mb-6 font-display">Key Climate Trends</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TREND_DETAILS.map((trend, idx) => {
                    const Icon = trend.icon;
                    return (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/10 border border-white/5">
                            <div className={cn("mt-0.5", trend.color)}>
                                <Icon className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm mb-1">{trend.title}</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">{trend.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const ClimateEducation = () => {
    return (
        <div className="space-y-6">
            {/* Space Help Card */}
            <div className="glass-card p-5 bg-gradient-to-br from-emerald-500/10 to-transparent">
                <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                    <Satellite className="w-4 h-4 text-emerald-400" />
                    How satellites help understand climate
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    Satellites observe Earth continuously over decades. This long-term view helps identify slow changes in temperature, rainfall, forests, and water that are not visible day-to-day.
                </p>
            </div>

            {/* Impact Chain */}
            <div className="glass-card p-5">
                <h4 className="font-bold text-sm mb-4">The Impact Chain</h4>
                <div className="flex flex-col gap-4 relative">
                    <div className="absolute left-3.5 top-3 bottom-3 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500 opacity-30"></div>

                    <div className="flex items-center gap-3 z-10">
                        <div className="bg-blue-500/20 p-1.5 rounded-full border border-blue-500/30"><Satellite className="w-4 h-4 text-blue-400" /></div>
                        <span className="text-sm font-medium">Satellite Observation</span>
                    </div>
                    <div className="flex items-center gap-3 z-10">
                        <div className="bg-orange-500/20 p-1.5 rounded-full border border-orange-500/30"><Leaf className="w-4 h-4 text-orange-400" /></div>
                        <span className="text-sm font-medium">Environmental Change</span>
                    </div>
                    <div className="flex items-center gap-3 z-10">
                        <div className="bg-emerald-500/20 p-1.5 rounded-full border border-emerald-500/30"><Users className="w-4 h-4 text-emerald-400" /></div>
                        <span className="text-sm font-medium">Human Impact</span>
                    </div>
                </div>
            </div>

            {/* Awareness Panel */}
            <div className="glass-card p-4 text-center">
                <Globe className="w-8 h-8 text-primary mx-auto mb-2 opacity-80" />
                <h4 className="font-bold text-sm mb-1">Why long-term data matters</h4>
                <p className="text-xs text-muted-foreground mb-3">Understanding the past helps us prepare for the future.</p>
                <Button variant="outline" size="sm" className="w-full text-xs border-primary/20 hover:bg-primary/10">
                    Visit Learning Zone
                </Button>
            </div>
        </div>
    );
};

export { ClimateTrends, ClimateEducation };
