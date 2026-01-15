import { useState } from 'react';
import { ChevronDown, MapPin, Satellite, Waves, Flame, CloudLightning, Activity, Filter, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

const MOCK_REGIONS = [
    { id: 1, name: 'Mumbai, Maharashtra', type: 'Flood', icon: Waves, status: 'Watch', color: 'text-yellow-500', bg: 'bg-yellow-500/10', reason: 'High tide combined with forecasted heavy rainfall.' },
    { id: 2, name: 'Nagpur, Maharashtra', type: 'Heat', icon: Flame, status: 'High', color: 'text-orange-500', bg: 'bg-orange-500/10', reason: 'Surface temperatures exceeding 42°C for 3 consecutive days.' },
    { id: 3, name: 'Ratnagiri, Coastal', type: 'Cyclone', icon: CloudLightning, status: 'Low', color: 'text-blue-400', bg: 'bg-blue-400/10', reason: 'No significant storm systems currently tracking towards coast.' },
    { id: 4, name: 'Satara, Western Ghats', type: 'Landslide', icon: Activity, status: 'Low', color: 'text-emerald-500', bg: 'bg-emerald-500/10', reason: 'Soil stability normal. No seismic activity.' },
];

const DisasterRegionList = ({ days }: { days: string }) => {
    const [openId, setOpenId] = useState<number | null>(null);

    return (
        <div className="glass-card p-6 h-full flex flex-col min-h-[400px]">
            {/* 1. Header & Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                        🚨 Regional Disaster Risk Summary
                    </h3>
                    <p className="text-sm text-muted-foreground">Areas that may be affected based on satellite observations.</p>
                </div>

                <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="h-8 text-xs border-white/10 text-muted-foreground hover:text-foreground">
                        <ArrowUpDown className="w-3 h-3 mr-1.5" /> Lowest Risk
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 text-xs border-white/10 text-muted-foreground hover:text-foreground">
                        <Filter className="w-3 h-3 mr-1.5" /> Filter Type
                    </Button>
                </div>
            </div>

            {/* 2. List */}
            <div className="flex-1 space-y-3">
                {MOCK_REGIONS.map((region) => {
                    const Icon = region.icon;
                    const isOpen = openId === region.id;

                    return (
                        <Collapsible
                            key={region.id}
                            open={isOpen}
                            onOpenChange={() => setOpenId(isOpen ? null : region.id)}
                            className="border border-white/5 rounded-lg bg-background/20 transition-all hover:bg-background/30"
                        >
                            <CollapsibleTrigger asChild>
                                <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4 cursor-pointer group">
                                    {/* Left: Location */}
                                    <div className="flex items-center gap-3 w-full sm:w-1/3">
                                        <div className="bg-muted/20 p-2 rounded-full hidden sm:block">
                                            <MapPin className="w-4 h-4 text-muted-foreground" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">{region.name}</h4>
                                            <p className="text-xs text-muted-foreground">India</p>
                                        </div>
                                    </div>

                                    {/* Center: Risk */}
                                    <div className="flex items-center gap-3 w-full sm:w-1/3 justify-start sm:justify-center">
                                        <div className={cn("flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5", region.bg)}>
                                            <Icon className={cn("w-4 h-4", region.color)} />
                                            <span className={cn("text-xs font-bold", region.color)}>
                                                {region.type} Risk – {region.status}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Right: Time & Action */}
                                    <div className="flex items-center justify-between w-full sm:w-1/3 sm:justify-end gap-4">
                                        <span className="text-xs font-mono text-muted-foreground bg-background/40 px-2 py-1 rounded">
                                            Next {days} days
                                        </span>
                                        <ChevronDown className={cn("w-4 h-4 text-muted-foreground transition-transform duration-300", isOpen && "rotate-180")} />
                                    </div>
                                </div>
                            </CollapsibleTrigger>

                            <CollapsibleContent>
                                <div className="px-4 pb-4 pt-0">
                                    <div className="pl-0 sm:pl-[4.5rem] text-sm text-muted-foreground flex gap-2 items-start py-2 border-t border-white/5 mt-2">
                                        <span className="text-primary font-bold text-xs uppercase tracking-wide shrink-0 mt-0.5">Why?</span>
                                        {region.reason}
                                    </div>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    );
                })}
            </div>

            {/* 3. Footer */}
            <div className="mt-6 pt-4 border-t border-white/5 text-center sm:text-left">
                <p className="text-xs text-muted-foreground flex items-center justify-center sm:justify-start gap-2">
                    <Satellite className="w-3 h-3 text-primary" />
                    Risk levels are estimated using satellite data such as rainfall, ocean temperature, land heat, and ground movement.
                </p>
            </div>
        </div>
    );
};

export default DisasterRegionList;
