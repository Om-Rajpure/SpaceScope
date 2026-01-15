import { useState } from 'react';
import { Bell, BellOff, Sun, Zap, Eye, AlertTriangle, Satellite } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface NotificationSetting {
  id: string;
  label: string;
  description: string;
  icon: React.ElementType;
  enabled: boolean;
}

const NotificationPopover = () => {
  const [settings, setSettings] = useState<NotificationSetting[]>([
    {
      id: 'solar-flares',
      label: 'Solar Flare Alerts',
      description: 'Get notified when major solar flares occur',
      icon: Sun,
      enabled: true,
    },
    {
      id: 'geomagnetic',
      label: 'Geomagnetic Storm Warnings',
      description: 'Alerts for G2+ geomagnetic storms',
      icon: Zap,
      enabled: true,
    },
    {
      id: 'aurora',
      label: 'Aurora Viewing Opportunities',
      description: 'Know when aurora is visible in your area',
      icon: Eye,
      enabled: false,
    },
    {
      id: 'radiation',
      label: 'Radiation Events',
      description: 'Warnings for elevated radiation levels',
      icon: AlertTriangle,
      enabled: false,
    },
    {
      id: 'satellite',
      label: 'Satellite Impact Alerts',
      description: 'When satellites may be affected',
      icon: Satellite,
      enabled: false,
    },
  ]);

  const [masterEnabled, setMasterEnabled] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const enabledCount = settings.filter(s => s.enabled).length;

  const handleToggle = (id: string) => {
    setSettings(prev => 
      prev.map(setting => 
        setting.id === id 
          ? { ...setting, enabled: !setting.enabled }
          : setting
      )
    );
    
    const setting = settings.find(s => s.id === id);
    if (setting) {
      toast.success(
        setting.enabled 
          ? `${setting.label} disabled` 
          : `${setting.label} enabled`,
        { duration: 2000 }
      );
    }
  };

  const handleMasterToggle = () => {
    setMasterEnabled(!masterEnabled);
    toast.success(
      masterEnabled 
        ? 'All notifications disabled' 
        : 'Notifications enabled',
      { duration: 2000 }
    );
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          {masterEnabled ? (
            <Bell className="w-5 h-5" />
          ) : (
            <BellOff className="w-5 h-5 text-muted-foreground" />
          )}
          {masterEnabled && enabledCount > 0 && (
            <span className="absolute top-1 right-1 w-2 h-2 bg-solar-orange rounded-full animate-pulse" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-80 p-0 bg-background/95 backdrop-blur-xl border-border/50" 
        align="end"
        sideOffset={8}
      >
        <div className="p-4 border-b border-border/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {masterEnabled ? (
                <Bell className="w-4 h-4 text-primary" />
              ) : (
                <BellOff className="w-4 h-4 text-muted-foreground" />
              )}
              <div>
                <h4 className="font-semibold text-sm">Notifications</h4>
                <p className="text-xs text-muted-foreground">
                  {enabledCount} alert{enabledCount !== 1 ? 's' : ''} active
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">
                {masterEnabled ? 'On' : 'Off'}
              </span>
              <Switch 
                checked={masterEnabled} 
                onCheckedChange={handleMasterToggle}
              />
            </div>
          </div>
        </div>

        <ScrollArea className="max-h-[300px]">
          <div className={`p-2 space-y-1 ${!masterEnabled ? 'opacity-50 pointer-events-none' : ''}`}>
            {settings.map((setting) => {
              const Icon = setting.icon;
              
              return (
                <div 
                  key={setting.id}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      setting.enabled ? 'bg-primary/20' : 'bg-muted'
                    }`}>
                      <Icon className={`w-4 h-4 ${
                        setting.enabled ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-sm truncate">{setting.label}</p>
                      <p className="text-xs text-muted-foreground truncate">{setting.description}</p>
                    </div>
                  </div>
                  
                  <Switch 
                    checked={setting.enabled} 
                    onCheckedChange={() => handleToggle(setting.id)}
                    className="shrink-0 ml-2"
                  />
                </div>
              );
            })}
          </div>
        </ScrollArea>

        <div className="p-3 border-t border-border/50">
          <p className="text-xs text-muted-foreground text-center">
            💡 Enable browser notifications for real-time alerts
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationPopover;
