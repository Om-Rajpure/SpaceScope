import { Satellite, Scan, Wheat } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const AgriEducation = () => {
    return (
        <div className="glass-card p-6 bg-gradient-to-br from-green-500/5 to-transparent">
            <h3 className="font-bold mb-4 flex items-center gap-2">
                The Space-Farm Connection
                <span className="text-[10px] uppercase font-normal tracking-wider bg-primary/10 px-2 py-0.5 rounded text-primary">How it works</span>
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left relative">
                {/* Step 1 */}
                <div className="flex-1 flex flex-col items-center md:items-start gap-2 z-10">
                    <div className="bg-muted/20 p-2 rounded-full">
                        <Satellite className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-blue-400 mb-1">Observation</p>
                        <p className="text-sm text-foreground/80">Satellite captures multi-spectral imagery.</p>
                    </div>
                </div>

                <div className="hidden md:block absolute top-[1.4rem] left-[20%] right-[20%] h-0.5 bg-dashed border-t-2 border-dashed border-muted/20 -z-0"></div>
                {/* Arrow for mobile */}
                <ArrowRight className="w-4 h-4 text-muted-foreground md:hidden rotate-90" />

                {/* Step 2 */}
                <div className="flex-1 flex flex-col items-center md:items-start gap-2 z-10 md:pl-8">
                    <div className="bg-muted/20 p-2 rounded-full">
                        <Scan className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-yellow-400 mb-1">Analysis</p>
                        <p className="text-sm text-foreground/80">stress signals detected in infrared.</p>
                    </div>
                </div>

                <ArrowRight className="w-4 h-4 text-muted-foreground md:hidden rotate-90" />

                {/* Step 3 */}
                <div className="flex-1 flex flex-col items-center md:items-start gap-2 z-10 md:pl-8">
                    <div className="bg-muted/20 p-2 rounded-full">
                        <Wheat className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-green-400 mb-1">Action</p>
                        <p className="text-sm text-foreground/80">Targeted irrigation protects yield.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgriEducation;
