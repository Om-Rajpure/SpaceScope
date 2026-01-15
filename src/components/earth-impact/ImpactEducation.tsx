import { ArrowRight, Sun, Zap, Satellite } from 'lucide-react';

const ImpactEducation = () => {
    const cards = [
        {
            spaceEvent: 'Solar Flare',
            spaceIcon: Sun,
            earthEffect: 'Ionospheric Disturbance',
            impact: 'GPS inaccuracies up to 50 meters',
            color: 'text-orange-400',
        },
        {
            spaceEvent: 'Geomagnetic Storm',
            spaceIcon: Zap,
            earthEffect: 'Induced Currents',
            impact: 'Power grid voltage fluctuations',
            color: 'text-purple-400',
        },
        {
            spaceEvent: 'Debris Collision',
            spaceIcon: Satellite,
            earthEffect: 'Orbit Scatter',
            impact: 'Temporary loss of satellite TV/Internet',
            color: 'text-blue-400',
        },
    ];

    return (
        <div className="mb-8">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                Space ↔ Earth Connection
                <span className="text-xs font-normal text-muted-foreground bg-muted/20 px-2 py-0.5 rounded-full">Educational</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cards.map((card, idx) => {
                    const Icon = card.spaceIcon;
                    return (
                        <div key={idx} className="glass-card p-4 relative overflow-hidden group">
                            <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-${card.color.replace('text-', '')} to-transparent opacity-50`} />

                            <div className="flex items-center gap-2 mb-3">
                                <Icon className={`w-5 h-5 ${card.color}`} />
                                <span className="font-semibold text-sm">{card.spaceEvent}</span>
                            </div>

                            <div className="flex flex-col items-center gap-2 my-2">
                                <ArrowRight className="w-4 h-4 text-muted-foreground rotate-90 md:rotate-0" />
                            </div>

                            <div className="text-center md:text-left">
                                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Causes</p>
                                <p className="font-medium text-sm mb-2">{card.earthEffect}</p>
                                <div className="bg-muted/10 p-2 rounded text-xs text-foreground/80">
                                    <strong>Impact:</strong> {card.impact}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ImpactEducation;
