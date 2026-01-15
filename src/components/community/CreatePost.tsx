import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Image, Video, MapPin, Calendar, X } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const EVENT_TYPES = [
    "Meteor Shower",
    "Aurora",
    "ISS Sighting",
    "Eclipse",
    "Satellite",
    "Planetary Alignment",
    "UFO / Unidentified",
    "Other"
];

const CreatePost = () => {
    const [content, setContent] = useState('');
    const [selectedType, setSelectedType] = useState<string>('');
    const [location, setLocation] = useState('New York, USA'); // Mock auto-location

    return (
        <div className="glass-card p-4 mb-8">
            <div className="flex gap-4">
                <Avatar className="w-10 h-10 hidden sm:block">
                    <AvatarFallback className="bg-primary/20 text-primary">Y</AvatarFallback>
                </Avatar>

                <div className="flex-1 space-y-4">
                    <textarea
                        placeholder="What did you observe in the sky today?"
                        className="w-full bg-transparent border-none text-foreground placeholder:text-muted-foreground/70 resize-none outline-none text-lg min-h-[80px]"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />

                    {/* Selected Tags Display */}
                    <div className="flex flex-wrap gap-2">
                        {selectedType && (
                            <Badge variant="secondary" className="gap-1 pl-1 pr-2">
                                <span className="bg-background/50 rounded-full w-4 h-4 flex items-center justify-center text-[10px] cursor-pointer" onClick={() => setSelectedType('')}><X className="w-3 h-3" /></span>
                                {selectedType}
                            </Badge>
                        )}
                        <Badge variant="outline" className="gap-1">
                            <MapPin className="w-3 h-3" />
                            {location}
                        </Badge>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                                <Image className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                                <Video className="w-5 h-5" />
                            </Button>

                            <div className="w-px h-6 bg-border mx-2" />

                            <Select value={selectedType} onValueChange={setSelectedType}>
                                <SelectTrigger className="w-[140px] h-9 bg-transparent border-border/50">
                                    <SelectValue placeholder="Event Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    {EVENT_TYPES.map(type => (
                                        <SelectItem key={type} value={type}>{type}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <Button className="btn-cosmic px-6" disabled={!content.trim()}>
                            Post
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
