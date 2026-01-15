import { Info } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const DisasterMap = () => {
    return (
        <div className="glass-card p-6 h-full flex flex-col min-h-[400px]">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-bold flex items-center gap-2">
                        Disaster Monitoring Map
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Info className="w-4 h-4 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Real-time surveillance of disaster prone zones.</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </h3>
                    <p className="text-sm text-muted-foreground">Regional risk zones based on satellite telemetry.</p>
                </div>

                <div className="flex flex-col gap-1 text-[10px] text-muted-foreground bg-muted/10 p-2 rounded">
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"></div>Flood Zone</div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-orange-500"></div>Fire Risk</div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-500"></div>Safe Zone</div>
                </div>
            </div>

            <div className="flex-1 bg-black/20 rounded-xl relative overflow-hidden border border-white/5 group">
                {/* Simplified Map Grid */}
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-0.5 opacity-80">
                    {Array.from({ length: 48 }).map((_, i) => {
                        // Mock Zones
                        let type = 'safe';
                        let tooltip = "Area stable. No immediate risks.";
                        let color = 'bg-emerald-500/10 hover:bg-emerald-500/30';

                        if ([2, 3, 10, 11].includes(i)) { type = 'fire'; tooltip = "Elevated heat levels. Fire risk monitoring."; color = 'bg-orange-500/20 hover:bg-orange-500/40'; }
                        if ([30, 31, 38, 39, 46, 47].includes(i)) { type = 'flood'; tooltip = "Heavy soil saturation. Flood potential."; color = 'bg-blue-500/20 hover:bg-blue-500/40'; }

                        return (
                            <TooltipProvider key={i}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div className={`transition-colors duration-300 ${color} cursor-crosshair`}></div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{tooltip}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )
                    })}
                </div>

                <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur px-3 py-1 rounded text-xs font-mono border border-white/10">
                    Live Feed • GMT+0
                </div>
            </div>
        </div>
    );
};

export default DisasterMap;
