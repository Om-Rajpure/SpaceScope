import { motion } from 'framer-motion';
import { Filter, Rocket, Building2, Globe, SlidersHorizontal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mission } from '@/data/missionsData';

interface MissionFiltersProps {
  agencies: Mission['agency'][];
  statuses: Mission['status'][];
  types: Mission['type'][];
  selectedAgency: Mission['agency'] | 'all';
  selectedStatus: Mission['status'] | 'all';
  selectedType: Mission['type'] | 'all';
  onAgencyChange: (agency: Mission['agency'] | 'all') => void;
  onStatusChange: (status: Mission['status'] | 'all') => void;
  onTypeChange: (type: Mission['type'] | 'all') => void;
}

const MissionFilters = ({
  agencies,
  statuses,
  types,
  selectedAgency,
  selectedStatus,
  selectedType,
  onAgencyChange,
  onStatusChange,
  onTypeChange,
}: MissionFiltersProps) => {
  const agencyLabels: Record<Mission['agency'], string> = {
    NASA: 'NASA',
    ESA: 'ESA',
    SpaceX: 'SpaceX',
    ISRO: 'ISRO',
    JAXA: 'JAXA',
    CNSA: 'CNSA',
    Roscosmos: 'Roscosmos',
  };

  const statusLabels: Record<Mission['status'], string> = {
    active: 'Active',
    upcoming: 'Upcoming',
    completed: 'Completed',
    planned: 'Planned',
  };

  const typeLabels: Record<Mission['type'], string> = {
    crewed: 'Crewed',
    robotic: 'Robotic',
    satellite: 'Satellite',
    cargo: 'Cargo',
    exploration: 'Exploration',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-4"
    >
      <div className="flex items-center gap-2 mb-4">
        <SlidersHorizontal className="w-5 h-5 text-primary" />
        <span className="font-semibold">Filter Missions</span>
      </div>

      <div className="space-y-4">
        {/* Agency Filter */}
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Building2 className="w-4 h-4" />
            Space Agency
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={selectedAgency === 'all' ? 'default' : 'outline'}
              className="cursor-pointer hover:bg-primary/20 transition-colors"
              onClick={() => onAgencyChange('all')}
            >
              All
            </Badge>
            {agencies.map((agency) => (
              <Badge
                key={agency}
                variant={selectedAgency === agency ? 'default' : 'outline'}
                className="cursor-pointer hover:bg-primary/20 transition-colors"
                onClick={() => onAgencyChange(agency)}
              >
                {agencyLabels[agency]}
              </Badge>
            ))}
          </div>
        </div>

        {/* Status Filter */}
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Filter className="w-4 h-4" />
            Status
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={selectedStatus === 'all' ? 'default' : 'outline'}
              className="cursor-pointer hover:bg-primary/20 transition-colors"
              onClick={() => onStatusChange('all')}
            >
              All
            </Badge>
            {statuses.map((status) => (
              <Badge
                key={status}
                variant={selectedStatus === status ? 'default' : 'outline'}
                className="cursor-pointer hover:bg-primary/20 transition-colors"
                onClick={() => onStatusChange(status)}
              >
                {statusLabels[status]}
              </Badge>
            ))}
          </div>
        </div>

        {/* Type Filter */}
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Rocket className="w-4 h-4" />
            Mission Type
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={selectedType === 'all' ? 'default' : 'outline'}
              className="cursor-pointer hover:bg-primary/20 transition-colors"
              onClick={() => onTypeChange('all')}
            >
              All
            </Badge>
            {types.map((type) => (
              <Badge
                key={type}
                variant={selectedType === type ? 'default' : 'outline'}
                className="cursor-pointer hover:bg-primary/20 transition-colors capitalize"
                onClick={() => onTypeChange(type)}
              >
                {typeLabels[type]}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MissionFilters;
