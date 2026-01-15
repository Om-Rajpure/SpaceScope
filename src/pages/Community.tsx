import { Helmet } from 'react-helmet-async';
import Starfield from '@/components/Starfield';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CreatePost from '@/components/community/CreatePost';
import CommunityFeed from '@/components/community/CommunityFeed';
import CommunityFilters from '@/components/community/CommunityFilters';

const Community = () => {
    return (
        <>
            <Helmet>
                <title>Community | SpaceScope</title>
                <meta
                    name="description"
                    content="Share, observe, and discuss real-world sky events with the SpaceScope community."
                />
            </Helmet>

            <div className="relative min-h-screen bg-background overflow-hidden">
                <Starfield />
                <Navbar />

                <main className="relative z-10 container mx-auto px-4 pt-24 pb-12">
                    {/* Header Section */}
                    <div className="mb-8 text-center sm:text-left">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
                            Community
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            Share, observe, and discuss real-world sky events with the SpaceScope community.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <CreatePost />
                            <CommunityFeed />
                        </div>

                        <div className="space-y-6">
                            <CommunityFilters />
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default Community;
