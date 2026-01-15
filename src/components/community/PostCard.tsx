import { useState } from 'react';
import { Heart, MessageCircle, Share2, MapPin, MoreHorizontal, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import CommentSection from './CommentSection';

interface PostProps {
    id: string;
    author: {
        name: string;
        avatar?: string;
        username: string;
    };
    location?: string;
    timestamp: string;
    type: string;
    content: string;
    media?: {
        type: 'image' | 'video';
        url: string;
    };
    stats: {
        likes: number;
        comments: number;
    };
    linkedEvent?: {
        name: string;
        url: string;
    };
}

const PostCard = ({ post }: { post: PostProps }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [likeCount, setLikeCount] = useState(post.stats.likes);

    const handleLike = () => {
        if (isLiked) {
            setLikeCount(prev => prev - 1);
        } else {
            setLikeCount(prev => prev + 1);
        }
        setIsLiked(!isLiked);
    };

    return (
        <div className="glass-card p-0 overflow-hidden mb-6 animate-fade-in">
            {/* Header */}
            <div className="p-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <Avatar>
                        <AvatarImage src={post.author.avatar} />
                        <AvatarFallback className="bg-primary/20 text-primary">
                            {post.author.name.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-foreground">{post.author.name}</span>
                            <span className="text-muted-foreground text-sm">@{post.author.username}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                            <span>{post.timestamp}</span>
                            {post.location && (
                                <>
                                    <span>•</span>
                                    <span className="flex items-center gap-1">
                                        <MapPin className="w-3 h-3" />
                                        {post.location}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                    <MoreHorizontal className="w-4 h-4" />
                </Button>
            </div>

            {/* Content */}
            <div className="px-4 pb-3 space-y-3">
                <Badge variant={post.type === 'Aurora' ? 'default' : 'secondary'} className="mb-1">
                    {post.type}
                </Badge>
                <p className="text-foreground/90 whitespace-pre-wrap">{post.content}</p>
            </div>

            {/* Media */}
            {post.media && (
                <div className="relative aspect-video w-full bg-black/40 overflow-hidden">
                    {post.media.type === 'image' ? (
                        <img
                            src={post.media.url}
                            alt="Post content"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-muted-foreground">
                            <span className="text-sm">Video placeholder</span>
                        </div>
                    )}
                </div>
            )}

            {/* Linked Event (Educational Integration) */}
            {post.linkedEvent && (
                <div className="mx-4 mt-3 p-2 rounded-lg bg-primary/10 border border-primary/20 flex items-center gap-3">
                    <div className="p-1.5 rounded-full bg-primary/20 text-primary">
                        <LinkIcon className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-xs text-primary font-medium uppercase tracking-wider">Official Event Match</p>
                        <p className="text-sm font-medium truncate">{post.linkedEvent.name}</p>
                    </div>
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary hover:bg-primary/20 h-7 text-xs">
                        View Data
                    </Button>
                </div>
            )}

            {/* Actions */}
            <div className="p-2 flex items-center justify-between border-b border-border/40">
                <div className="flex items-center gap-1">
                    <Button
                        variant="ghost"
                        size="sm"
                        className={`gap-2 hover:text-red-400 ${isLiked ? 'text-red-400' : 'text-muted-foreground'}`}
                        onClick={handleLike}
                    >
                        <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                        <span>{likeCount}</span>
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 text-muted-foreground hover:text-primary"
                        onClick={() => setShowComments(!showComments)}
                    >
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.stats.comments}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-blue-400">
                        <Share2 className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Comments */}
            {showComments && (
                <div className="px-4 pb-4 bg-muted/5">
                    <CommentSection />
                </div>
            )}
        </div>
    );
};

export default PostCard;
