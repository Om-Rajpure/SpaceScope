import { useState } from 'react';
import { Waves, Flame, Activity, CloudLightning } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock Data Source similar to Agriculture logic
const getRiskData = (days: string) => {
    // Defaults for 3/7 days
    let data = [
        { title: 'Flood Risk', status: 'Low', color: 'text-blue-400', bg: 'bg-blue-400/10', icon: Waves, desc: 'Rainfall within normal limits.' },
        { title: 'Cyclone Risk', status: 'Low', color: 'text-cyan-400', bg: 'bg-cyan-400/10', icon: CloudLightning, desc: 'No storm formations visible.' },
        { title: 'Wildfire Risk', status: 'Watch', color: 'text-orange-400', bg: 'bg-orange-400/10', icon: Flame, desc: 'Dry vegetation detected nearby.' },
        { title: 'Seismic Status', status: 'Stable', color: 'text-emerald-400', bg: 'bg-emerald-400/10', icon: Activity, desc: 'No significant ground movement.' },
    ];

    if (days === '14') {
        data[0] = { ...data[0], status: 'Watch', desc: 'Heavy rainfall predicted week 2.' };
    } else if (days === '30') {
        data[0] = { ...data[0], status: 'High', color: 'text-blue-500', bg: 'bg-blue-500/20', desc: 'Monsoon onset may cause river swell.' };
        data[2] = { ...data[2], status: 'High', color: 'text-red-500', bg: 'bg-red-500/20', desc: 'Extended dry spell increases ignition risk.' };
    }

    return data;
};

interface DisasterRiskSummaryProps {
    days: string;
    setDays: (d: string) => void;
}

const DisasterRiskSummary = ({ days, setDays }: DisasterRiskSummaryProps) => {
    const risks = getRiskData(days);

    return (
        <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h2 className="text-xl font-bold font-display">Live Disaster Risk Summary</h2>

                <div className="flex items-center gap-2 bg-muted/20 p-1 rounded-lg self-start">
                    <span className="text-xs font-medium px-2 text-muted-foreground hidden sm:block">View risk for:</span>
                    {['3', '7', '14', '30'].map((d) => (
                        <button
                            key={d}
                            onClick={() => setDays(d)}
                            className={cn(
                                "text-xs font-medium px-3 py-1.5 rounded-md transition-all",
                                days === d
                                    ? "bg-blue-600 text-white shadow-sm"
                                    : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
                            )}
                        >
                            Next {d} Days
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {risks.map((risk, idx) => {
                    const Icon = risk.icon;
                    return (
                        <div key={idx} className={cn("glass-card p-4 transition-all duration-300 hover:border-white/10", risk.bg)}>
                            <div className="flex justify-between items-start mb-3">
                                <div className={cn("p-2 rounded-lg bg-background/40", risk.color)}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <span className={cn("text-xs font-bold px-2 py-1 rounded-full bg-background/40", risk.color)}>
                                    {risk.status.toUpperCase()}
                                </span>
                            </div>
                            <h3 className="font-bold text-lg mb-1">{risk.title}</h3>
                            <p className="text-sm text-foreground/80 leading-snug">{risk.desc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DisasterRiskSummary;
