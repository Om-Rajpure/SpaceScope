import { Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface KpIndexChartProps {
  data: Array<{ time: string; kp: number }>;
}

const KpIndexChart = ({ data }: KpIndexChartProps) => {
  const getKpColor = (kp: number) => {
    if (kp <= 2) return 'hsl(var(--aurora-green))';
    if (kp <= 4) return 'hsl(var(--star-yellow))';
    if (kp <= 6) return 'hsl(var(--solar-orange))';
    return 'hsl(var(--mars-red))';
  };

  return (
    <div className="glass-card p-6 lg:p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-aurora-green to-nebula-blue flex items-center justify-center">
          <Activity className="w-7 h-7 text-white" />
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold">Kp Index Today</h2>
          <p className="text-muted-foreground">3-hour geomagnetic activity index</p>
        </div>
      </div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="time" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              domain={[0, 9]}
              ticks={[0, 3, 6, 9]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
              formatter={(value: number) => [`Kp ${value}`, 'Index']}
            />
            <Bar dataKey="kp" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getKpColor(entry.kp)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-4 mt-4 text-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-aurora-green" />
          <span className="text-muted-foreground">Quiet (0-2)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-star-yellow" />
          <span className="text-muted-foreground">Active (3-4)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-solar-orange" />
          <span className="text-muted-foreground">Storm (5-6)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-mars-red" />
          <span className="text-muted-foreground">Severe (7+)</span>
        </div>
      </div>
    </div>
  );
};

export default KpIndexChart;
