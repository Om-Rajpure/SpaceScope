import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Telescope, 
  Sun, 
  Rocket, 
  GraduationCap, 
  Satellite, 
  Users, 
  Menu,
  X,
  LogIn
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import NotificationPopover from '@/components/NotificationPopover';

const navItems = [
  { path: '/events', label: 'Sky Events', icon: Telescope },
  { path: '/weather', label: 'Cosmic Weather', icon: Sun },
  { path: '/missions', label: 'Missions', icon: Rocket },
  { path: '/learn', label: 'Learning Zone', icon: GraduationCap },
  { path: '/earth-impact', label: 'Earth Impact', icon: Satellite },
  { path: '/community', label: 'Community', icon: Users },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="glass-card mx-4 mt-4 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-cosmic flex items-center justify-center animate-glow-pulse">
                <Telescope className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="absolute -inset-1 bg-gradient-cosmic rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
            </div>
            <span className="font-display text-xl font-bold text-gradient hidden sm:block">
              SpaceScope
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300",
                    isActive 
                      ? "bg-primary/20 text-primary" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <NotificationPopover />
            
            <Button className="btn-cosmic text-sm font-medium hidden sm:flex">
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </Button>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300",
                      isActive 
                        ? "bg-primary/20 text-primary" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
              <Button className="btn-cosmic mt-2">
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
