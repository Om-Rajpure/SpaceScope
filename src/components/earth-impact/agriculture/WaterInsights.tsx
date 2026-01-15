import { Droplets, CloudRain } from 'lucide-react';

const WaterInsights = () => {
    return (
        <div className="space-y-4">
            {/* Soil Moisture Card */}
            <div className="glass-card p-5">
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-500/20 p-2 rounded-lg">
                        <Droplets className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm">Soil Moisture Trends</h4>
                        <p className="text-xs text-muted-foreground">Root zone (0-40cm) saturation</p>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between text-xs">
                        <span>Current</span>
                        <span className="font-bold text-blue-400">35% (Optimal)</span>
                    </div>
                    <div className="w-full h-2 bg-muted/20 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-[35%] rounded-full"></div>
                    </div>
                    <p className="text-xs text-muted-foreground border-l-2 border-blue-500/30 pl-2 mt-2">
                        Satellite microwave sensors indicate adequate retention for this stage of growth.
                    </p>
                </div>
            </div>

            {/* Rainfall Card */}
            <div className="glass-card p-5">
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-cyan-500/20 p-2 rounded-lg">
                        <CloudRain className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm">Rainfall Deviation</h4>
                        <p className="text-xs text-muted-foreground">Vs. 10yr Average</p>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between text-xs">
                        <span>Last 30 Days</span>
                        <span className="font-bold text-red-400">-12% (Deficit)</span>
                    </div>
                    <div className="w-full h-2 bg-muted/20 rounded-full overflow-hidden relative">
                        {/* Center market at 50% */}
                        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-white/30"></div>
                        {/* Deficit bar (left of center) */}
                        <div className="h-full bg-red-400/80 w-[12%] absolute left-[38%] rounded-l-full"></div>
                    </div>
                    <p className="text-xs text-muted-foreground border-l-2 border-red-500/30 pl-2 mt-2">
                        Slight rainfall deficit detected. Irrigation supplementation recommended.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WaterInsights;
