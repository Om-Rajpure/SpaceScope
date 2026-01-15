import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const agencies = [
  { name: 'NASA', color: 'bg-nebula-blue', missions: 4 },
  { name: 'ESA', color: 'bg-cosmic-purple', missions: 1 },
  { name: 'SpaceX', color: 'bg-foreground', missions: 2 },
  { name: 'ISRO', color: 'bg-solar-orange', missions: 1 },
];

const AgencyLegend = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6"
    >
      <h3 className="flex items-center gap-2 text-lg font-bold font-display mb-4">
        <Building2 className="w-5 h-5 text-primary" />
        Space Agencies
      </h3>

      <div className="space-y-3">
        {agencies.map((agency, index) => (
          <motion.div
            key={agency.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between group hover:bg-muted/30 rounded-lg p-2 -m-2 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className={`w-4 h-4 rounded-full ${agency.color}`} />
              <span className="font-medium group-hover:text-primary transition-colors">
                {agency.name}
              </span>
            </div>
            <span className="text-sm text-muted-foreground">
              {agency.missions} mission{agency.missions !== 1 ? 's' : ''}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border/50">
        <div className="text-xs text-muted-foreground">
          Showing missions from the world's leading space agencies. 
          Click on an agency to filter missions.
        </div>
      </div>
    </motion.div>
  );
};

export default AgencyLegend;
