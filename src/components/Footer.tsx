import { Link } from 'react-router-dom';
import { Telescope, Github, Twitter, Youtube, Mail } from 'lucide-react';

const footerLinks = {
  explore: [
    { label: 'Sky Events', href: '/events' },
    { label: 'Cosmic Weather', href: '/weather' },
    { label: 'Missions', href: '/missions' },
    { label: 'Earth Impact', href: '/earth-impact' },
  ],
  learn: [
    { label: 'Learning Zone', href: '/learn' },
    { label: 'Space-Earth Chain', href: '/learn/chain' },
    { label: 'Quizzes', href: '/learn/quizzes' },
    { label: 'Ask Space AI', href: '/ask' },
  ],
  community: [
    { label: 'Photo Gallery', href: '/community' },
    { label: 'Discussions', href: '/community/discussions' },
    { label: 'Events Calendar', href: '/calendar' },
    { label: 'Stargazers Map', href: '/map' },
  ],
  about: [
    { label: 'About Us', href: '/about' },
    { label: 'Data Sources', href: '/sources' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Contact', href: '/contact' },
  ],
};

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-cosmic flex items-center justify-center">
                <Telescope className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold text-gradient">
                SpaceScope
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Your gateway to the universe. Explore, learn, and stay connected with space.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Learn</h4>
            <ul className="space-y-2">
              {footerLinks.learn.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 SpaceScope. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Data powered by NASA, ESA, NOAA & Space Agencies Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
