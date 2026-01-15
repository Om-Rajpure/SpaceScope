import { Car, Factory, Flame, CloudFog } from 'lucide-react';
import { cn } from '@/lib/utils';

const SOURCES = [
    { icon: Car, label: 'Traffic Emissions', level: 'High', color: 'text-orange-500', pct: 65, desc: 'Satellite data shows higher activity in urban corridors.' },
    { icon: Factory, label: 'Industrial Activity', level: 'Low', color: 'text-green-500', pct: 15, desc: 'Emissions within standard regulatory limits.' },
    { icon: Flame, label: 'Burning / Seasonal', level: 'Low', color: 'text-green-500', pct: 10, desc: 'No active crop burning fires detected.' },
    { icon: CloudFog, label: 'Dust / Natural', level: 'Medium', color: 'text-yellow-500', pct: 30, desc: 'Moderate dust levels due to dry winds.' },
];

const PollutionSources = () => {
    return (
        <div className="glass-card p-6 h-full">
            <h3 className="text-lg font-bold mb-6 font-display">Major Pollution Sources</h3>
            <div className="space-y-6">
                {SOURCES.map((source, idx) => {
                    const Icon = source.icon;
                    return (
                        <div key={idx} className="group">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="bg-muted/20 p-2 rounded-lg group-hover:bg-muted/30 transition-colors">
                                        <Icon className="w-5 h-5 text-muted-foreground" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm">{source.label}</h4>
                                        <span className={cn("text-xs font-medium", source.color)}>{source.level} contribution</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pl-[3.25rem]">
                                <div className="w-full h-1.5 bg-muted/20 rounded-full mb-2 overflow-hidden">
                                    <div
                                        className={cn("h-full rounded-full opacity-80", source.color.replace('text-', 'bg-'))}
                                        style={{ width: `${source.pct}%` }}
                                    ></div>
                                </div>
                                <p className="text-xs text-muted-foreground">{source.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PollutionSources;
