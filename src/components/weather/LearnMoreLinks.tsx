import { BookOpen, ExternalLink, Lightbulb, GraduationCap, Video } from 'lucide-react';
import { motion } from 'framer-motion';

interface LearnLink {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  category: 'beginner' | 'intermediate' | 'visual';
}

const learnLinks: LearnLink[] = [
  {
    id: 'what-is-space-weather',
    title: 'What is Space Weather?',
    description: 'Simple explanation of how the Sun affects Earth',
    icon: Lightbulb,
    category: 'beginner',
  },
  {
    id: 'aurora-explained',
    title: 'How Auroras Form',
    description: 'The beautiful science behind Northern Lights',
    icon: GraduationCap,
    category: 'beginner',
  },
  {
    id: 'solar-flares',
    title: 'Solar Flares & CMEs',
    description: 'Understanding solar explosions and their effects',
    icon: BookOpen,
    category: 'intermediate',
  },
  {
    id: 'kp-index-guide',
    title: 'Kp Index Explained',
    description: 'What the numbers really mean',
    icon: BookOpen,
    category: 'intermediate',
  },
  {
    id: 'space-weather-videos',
    title: 'Visual Explainers',
    description: 'Watch space weather in action',
    icon: Video,
    category: 'visual',
  },
];

const LearnMoreLinks = () => {
  const getCategoryColor = (category: LearnLink['category']) => {
    switch (category) {
      case 'beginner': return 'bg-aurora-green/20 text-aurora-green';
      case 'intermediate': return 'bg-nebula-blue/20 text-nebula-blue';
      case 'visual': return 'bg-cosmic-purple/20 text-cosmic-purple';
    }
  };

  const getCategoryLabel = (category: LearnLink['category']) => {
    switch (category) {
      case 'beginner': return 'Beginner';
      case 'intermediate': return 'Intermediate';
      case 'visual': return 'Visual';
    }
  };

  return (
    <div className="glass-card p-6">
      <h3 className="font-display text-xl font-bold mb-2 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-cosmic-purple" />
        Learn More
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        Dive deeper into space weather with simple explanations
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {learnLinks.map((link, index) => {
          const Icon = link.icon;
          
          return (
            <motion.a
              key={link.id}
              href="#"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group p-4 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-muted/30 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getCategoryColor(link.category)}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-sm group-hover:text-primary transition-colors truncate">
                      {link.title}
                    </h4>
                    <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {link.description}
                  </p>
                  <span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full ${getCategoryColor(link.category)}`}>
                    {getCategoryLabel(link.category)}
                  </span>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>

      <div className="mt-6 text-center">
        <a 
          href="#" 
          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
        >
          Visit the Learning Zone
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};

export default LearnMoreLinks;
