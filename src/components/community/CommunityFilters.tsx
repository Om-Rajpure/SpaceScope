import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Filter, MapPin, Clock } from 'lucide-react';

const CommunityFilters = () => {
    return (
        <div className="space-y-6">
            <div className="glass-card p-5">
                <div className="flex items-center gap-2 mb-4">
                    <Filter className="w-4 h-4 text-primary" />
                    <h3 className="font-semibold">Filters</h3>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2 block">
                            Event Type
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {['All', 'Meteor', 'Aurora', 'ISS', 'Eclipse'].map((tag) => (
                                <Badge
                                    key={tag}
                                    variant={tag === 'All' ? 'default' : 'secondary'}
                                    className="cursor-pointer hover:bg-primary/20 transition-colors"
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2 block">
                            Time
                        </label>
                        <div className="space-y-2">
                            <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground hover:text-foreground">
                                <Clock className="w-4 h-4 mr-2" />
                                Today
                            </Button>
                            <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground hover:text-foreground">
                                <Clock className="w-4 h-4 mr-2" />
                                This Week
                            </Button>
                        </div>
                    </div>

                    <div>
                        <label className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2 block">
                            Location
                        </label>
                        <Button variant="outline" size="sm" className="w-full justify-start border-white/10">
                            <MapPin className="w-4 h-4 mr-2" />
                            Near Me
                        </Button>
                    </div>
                </div>
            </div>

            <div className="glass-card p-5 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
                <h3 className="font-semibold mb-2">Did you know?</h3>
                <p className="text-sm text-muted-foreground">
                    The best way to spot the ISS is just after sunset or before sunrise. Check the "Missions" tab for flyover times!
                </p>
                <Button variant="link" className="px-0 text-primary mt-2 h-auto p-0">
                    Go to Learning Zone &rarr;
                </Button>
            </div>
        </div>
    );
};

export default CommunityFilters;
