import { Sprout, CloudRain, Wind, Thermometer, Snowflake, MapPin, Satellite } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock logic for risk levels based on 'days'
const getRisks = (days: string) => {
    // defaults
    let mainStatus = 'Safe';
    let mainText = "Crops are currently stable, optimal conditions detected.";
    let risks = [
        { icon: Thermometer, label: 'Heat Stress', status: 'Low Risk', color: 'text-green-500', bg: 'bg-green-500/10' },
        { icon: CloudRain, label: 'Rain Shortage', status: 'Low Risk', color: 'text-green-500', bg: 'bg-green-500/10' },
        { icon: Wind, label: 'Strong Winds', status: 'Low Risk', color: 'text-green-500', bg: 'bg-green-500/10' },
        { icon: Snowflake, label: 'Cold Stress', status: 'Low Risk', color: 'text-green-500', bg: 'bg-green-500/10' },
    ];

    if (days === '7') {
        mainStatus = 'Watch';
        mainText = "Crops are currently stable, but heat stress may develop soon.";
        risks[0] = { icon: Thermometer, label: 'Heat Stress', status: 'Possible', color: 'text-yellow-500', bg: 'bg-yellow-500/10' };
        risks[1] = { icon: CloudRain, label: 'Rain Shortage', status: 'Possible', color: 'text-yellow-500', bg: 'bg-yellow-500/10' };
    } else if (days === '14') {
        mainStatus = 'Watch';
        mainText = "Monitoring wind patterns and potential heat waves.";
        risks[0] = { icon: Thermometer, label: 'Heat Stress', status: 'Moderate', color: 'text-yellow-500', bg: 'bg-yellow-500/10' };
        risks[2] = { icon: Wind, label: 'Strong Winds', status: 'Possible', color: 'text-yellow-500', bg: 'bg-yellow-500/10' };
    } else if (days === '30') {
        mainStatus = 'Risk';
        mainText = "Long-term outlook suggests developing drought conditions.";
        risks[1] = { icon: CloudRain, label: 'Rain Shortage', status: 'High Risk', color: 'text-red-500', bg: 'bg-red-500/10' };
        risks[3] = { icon: Snowflake, label: 'Cold Stress', status: 'Late Month', color: 'text-indigo-400', bg: 'bg-indigo-400/10' };
    }

    return { mainStatus, mainText, risks };
};

const CropRiskReadiness = ({ days = '7' }: { days?: string }) => {
    const { mainStatus, mainText, risks } = getRisks(days);

    return (
        <div className="glass-card p-6 h-full flex flex-col justify-between">
            {/* 1. Header Section */}
            <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                    <div className="bg-primary/20 p-2 rounded-full">
                        <Sprout className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-display">Crop Risk & Readiness</h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground ml-11">
                    <span className="bg-muted/20 px-2 py-0.5 rounded-full text-xs font-mono">Forecast range: Next {days} days</span>
                </div>
            </div>

            {/* 2. Main Status Indicator */}
            <div className="flex-1 flex flex-col items-center justify-center mb-8">
                <div className="flex items-center gap-4 mb-4">
                    <div className={cn("px-4 py-1.5 rounded-full font-bold text-sm transition-all text-muted-foreground border border-transparent", mainStatus === 'Safe' ? 'bg-green-500/20 text-green-500 border-green-500/20' : 'opacity-50')}>Safe</div>
                    <div className="h-0.5 w-8 bg-muted/20"></div>
                    <div className={cn("px-4 py-1.5 rounded-full font-bold text-sm transition-all text-muted-foreground border border-transparent", mainStatus === 'Watch' ? 'bg-yellow-500/20 text-yellow-500 border-yellow-500/20' : 'opacity-50')}>Watch</div>
                    <div className="h-0.5 w-8 bg-muted/20"></div>
                    <div className={cn("px-4 py-1.5 rounded-full font-bold text-sm transition-all text-muted-foreground border border-transparent", mainStatus === 'Risk' ? 'bg-red-500/20 text-red-500 border-red-500/20' : 'opacity-50')}>Risk</div>
                </div>

                <div className="text-center max-w-md animate-fade-in">
                    <h4 className={cn("text-2xl font-bold mb-2",
                        mainStatus === 'Safe' ? 'text-green-500'
                            : mainStatus === 'Watch' ? 'text-yellow-500'
                                : 'text-red-500'
                    )}>
                        Status: {mainStatus}
                    </h4>
                    <p className="text-muted-foreground">{mainText}</p>
                </div>
            </div>

            {/* 3. Risk Icons Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {risks.map((risk, idx) => {
                    const Icon = risk.icon;
                    return (
                        <div key={idx} className="bg-muted/10 rounded-lg p-3 flex flex-col items-center text-center gap-2 border border-white/5 hover:bg-muted/20 transition-colors">
                            <Icon className={cn("w-5 h-5", risk.color)} />
                            <div>
                                <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-semibold">{risk.label}</p>
                                <p className={cn("text-xs font-bold", risk.color)}>{risk.status}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* 4. Footer & Explanation */}
            <div className="pt-4 border-t border-white/5 space-y-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3 text-primary" />
                    Based on satellite data over your selected region.
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-foreground/80 bg-primary/5 p-2 rounded-lg">
                    <Satellite className="w-3 h-3 text-primary" />
                    Satellites track weather, heat, moisture, and wind patterns to detect crop risks early.
                </div>
            </div>
        </div>
    );
};

export default CropRiskReadiness;
