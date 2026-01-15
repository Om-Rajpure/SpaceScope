import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface PollutionTrendsProps {
    days: string;
    setDays: (d: string) => void;
}

const PollutionTrends = ({ days, setDays }: PollutionTrendsProps) => {
    // Mock trend logic
    let trend = 'stable';
    if (days === '3') trend = 'increasing';
    if (days === '14') trend = 'decreasing';

    return (
        <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <h2 className="text-xl font-bold font-display">Pollution Trend & Outlook</h2>

                <div className="flex items-center gap-2 bg-muted/20 p-1 rounded-lg self-start">
                    <span className="text-xs font-medium px-2 text-muted-foreground hidden sm:block">View outlook for:</span>
                    {['3', '7', '14'].map((d) => (
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
                            Next {d} Days
                        </button>
                    ))}
                </div>
            </div>

            <div className="glass-card p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1 flex items-center gap-4">
                    <div className={cn("p-4 rounded-full",
                        trend === 'increasing' ? 'bg-orange-500/10' : trend === 'decreasing' ? 'bg-green-500/10' : 'bg-blue-500/10'
                    )}>
                        {trend === 'increasing' && <TrendingUp className="w-8 h-8 text-orange-500" />}
                        {trend === 'decreasing' && <TrendingDown className="w-8 h-8 text-green-500" />}
                        {trend === 'stable' && <Minus className="w-8 h-8 text-blue-500" />}
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">
                            {trend === 'increasing' && 'Pollution may increase'}
                            {trend === 'decreasing' && 'Pollution likely to improve'}
                            {trend === 'stable' && 'Stable conditions expected'}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {trend === 'increasing' && 'Low wind speeds may trap increased traffic emissions.'}
                            {trend === 'decreasing' && 'Approaching winds expected to disperse pollutants.'}
                            {trend === 'stable' && 'Current weather patterns supporting average air quality.'}
                        </p>
                    </div>
                </div>

                <div className="text-right hidden md:block border-l border-white/5 pl-6">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Forecast Confidence</p>
                    <p className="text-sm font-bold text-primary">High (85%)</p>
                </div>
            </div>
        </div>
    );
};

export default PollutionTrends;
