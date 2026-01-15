import PostCard from './PostCard';

const MOCK_POSTS = [
    {
        id: '1',
        author: {
            name: 'Sarah Chen',
            username: 'astro_sarah',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
        },
        location: 'Reykajvik, Iceland',
        timestamp: '2h ago',
        type: 'Aurora',
        content: 'Absolutely stunning display of the Northern Lights tonight! The colors were incredibly vivid, moving like curtains across the entire sky. ✨🌌',
        media: {
            type: 'image' as const,
            url: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?q=80&w=1964&auto=format&fit=crop',
        },
        stats: {
            likes: 243,
            comments: 45,
        },
        linkedEvent: {
            name: 'G2 Class Geomagnetic Storm',
            url: '/weather',
        }
    },
    {
        id: '2',
        author: {
            name: 'Mike Ross',
            username: 'mike_telescope',
        },
        location: 'Arizona, USA',
        timestamp: '5h ago',
        type: 'Meteor Shower',
        content: 'Caught a bright fireball from the Perseids meteor shower! It left a persistent train that lasted for a good 3 seconds. Anyone else seeing high activity tonight?',
        stats: {
            likes: 89,
            comments: 12,
        },
    },
    {
        id: '3',
        author: {
            name: 'Elena Rodriguez',
            username: 'elena_space',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80',
        },
        location: 'Chile',
        timestamp: '1d ago',
        type: 'Satellite',
        content: 'Just watched the Starlink train pass over. It was surreal seeing them all in a perfect line. 🛰️',
        stats: {
            likes: 156,
            comments: 28,
        },
    }
];

const CommunityFeed = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Latest Observations</h2>
                <div className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-foreground font-medium cursor-pointer">Trending</span>
                    <span>|</span>
                    <span className="cursor-pointer hover:text-foreground">Latest</span>
                </div>
            </div>

            {MOCK_POSTS.map(post => (
                <PostCard key={post.id} post={post} />
            ))}

            <div className="text-center py-8">
                <p className="text-muted-foreground">You've reached the end of the feed.</p>
            </div>
        </div>
    );
};

export default CommunityFeed;
