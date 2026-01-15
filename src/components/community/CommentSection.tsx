import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send } from "lucide-react";

interface Comment {
    id: string;
    author: {
        name: string;
        avatar?: string;
    };
    content: string;
    timestamp: string;
}

interface CommentSectionProps {
    comments?: Comment[];
}

const CommentSection = ({ comments = [] }: CommentSectionProps) => {
    const [input, setInput] = useState('');
    const [localComments, setLocalComments] = useState<Comment[]>(comments);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newComment: Comment = {
            id: Date.now().toString(),
            author: {
                name: 'You',
                avatar: '', // Fallback to initials
            },
            content: input,
            timestamp: 'Just now',
        };

        setLocalComments([...localComments, newComment]);
        setInput('');
    };

    return (
        <div className="mt-4 pt-4 border-t border-border/50 animate-fade-in">
            <div className="space-y-4 mb-4">
                {localComments.map((comment) => (
                    <div key={comment.id} className="flex gap-3 text-sm">
                        <Avatar className="w-8 h-8">
                            <AvatarImage src={comment.author.avatar} />
                            <AvatarFallback className="bg-primary/20 text-primary text-xs">
                                {comment.author.name.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="font-medium text-foreground">{comment.author.name}</span>
                                <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                            </div>
                            <p className="text-muted-foreground">{comment.content}</p>
                        </div>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-3">
                <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-primary/20 text-primary text-xs">Y</AvatarFallback>
                </Avatar>
                <div className="flex-1 relative">
                    <input
                        type="text"
                        placeholder="Add your observation..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full bg-muted/30 border border-border/50 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 placeholder:text-muted-foreground/50 transition-all"
                    />
                    <Button
                        size="icon"
                        variant="ghost"
                        type="submit"
                        className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground hover:text-primary"
                        disabled={!input.trim()}
                    >
                        <Send className="w-3 h-3" />
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CommentSection;
