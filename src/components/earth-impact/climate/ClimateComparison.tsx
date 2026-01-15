import { ArrowRight, Clock } from 'lucide-react';

const ClimateComparison = () => {
    return (
        <div className="glass-card p-6 mb-8">
            <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold font-display">Then vs Now: Vegetation</h3>
                <span className="text-xs text-muted-foreground ml-auto hidden sm:block">
                    Satellites allow us to compare Earth’s surface over years.
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
                {/* Connector Arrow for Desktop */}
                <div className="hidden md:flex absolute inset-0 items-center justify-center z-10 pointer-events-none">
                    <div className="bg-background/80 p-2 rounded-full border border-white/10 backdrop-blur shadow-lg">
                        <ArrowRight className="w-6 h-6 text-muted-foreground" />
                    </div>
                </div>

                {/* PAST */}
                <div className="relative group overflow-hidden rounded-xl border border-white/10 aspect-video bg-black/40">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    {/* Mock Visual using CSS pattern for "Greener" past */}
                    <div className="absolute inset-0 opacity-60 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-600 via-green-900 to-black"></div>
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur px-3 py-1 rounded text-xs font-mono border border-white/10 z-20">
                        AUG 2015
                    </div>
                    <div className="absolute bottom-4 left-4 z-20">
                        <h4 className="font-bold text-white mb-0.5">Denser Vegetation</h4>
                        <p className="text-xs text-gray-300">Healthy canopy coverage observed.</p>
                    </div>
                </div>

                {/* PRESENT */}
                <div className="relative group overflow-hidden rounded-xl border border-white/10 aspect-video bg-black/40">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    {/* Mock Visual using CSS pattern for "Spare" present */}
                    <div className="absolute inset-0 opacity-60 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-700 via-green-900/50 to-black"></div>
                    <div className="absolute top-3 left-3 bg-primary/20 backdrop-blur px-3 py-1 rounded text-xs font-mono border border-primary/30 text-primary z-20">
                        AUG 2025
                    </div>
                    <div className="absolute bottom-4 left-4 z-20">
                        <h4 className="font-bold text-white mb-0.5">Reduced Density</h4>
                        <p className="text-xs text-gray-300">Signs of urban expansion visible.</p>
                    </div>
                </div>
            </div>

            <p className="text-xs text-muted-foreground mt-4 sm:hidden text-center">
                Satellites allow us to compare Earth’s surface over years.
            </p>
        </div>
    );
};

export default ClimateComparison;
