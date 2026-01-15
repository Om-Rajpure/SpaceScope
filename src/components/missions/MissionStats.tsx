import { motion } from 'framer-motion';
import { Rocket, Calendar, Users, TrendingUp } from 'lucide-react';
import { MissionStats as MissionStatsType } from '@/data/missionsData';

interface MissionStatsProps {
  stats: MissionStatsType;
}

const MissionStats = ({ stats }: MissionStatsProps) => {
  const statItems = [
    {
      icon: Rocket,
      value: stats.totalActive,
      label: 'Active Missions',
      color: 'aurora-green',
    },
    {
      icon: Calendar,
      value: stats.upcomingThisMonth,
      label: 'Launching This Month',
      color: 'nebula-blue',
    },
    {
      icon: Users,
      value: stats.crewInSpace,
      label: 'Crew in Space',
      color: 'cosmic-purple',
    },
    {
      icon: TrendingUp,
      value: `${stats.successRate}%`,
      label: 'Success Rate',
      color: 'solar-orange',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {statItems.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
        >
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-${stat.color}/20 mb-3 group-hover:scale-110 transition-transform`}>
            <stat.icon className={`w-6 h-6 text-${stat.color}`} />
          </div>
          <div className={`text-3xl font-bold font-display text-${stat.color} mb-1`}>
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default MissionStats;
