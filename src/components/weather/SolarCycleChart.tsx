import { TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Line, ComposedChart } from 'recharts';

interface SolarCycleChartProps {
  data: Array<{ month: string; sunspots: number; predicted: number }>;
}

const SolarCycleChart = ({ data }: SolarCycleChartProps) => {
  return (
    <div className="glass-card p-6 lg:p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-star-yellow to-solar-orange flex items-center justify-center">
          <TrendingUp className="w-7 h-7 text-white" />
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold">Solar Cycle 25</h2>
          <p className="text-muted-foreground">Sunspot activity over the last 6 months</p>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <defs>
              <linearGradient id="sunspotGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--star-yellow))" stopOpacity={0.4} />
                <stop offset="95%" stopColor="hsl(var(--star-yellow))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              domain={[80, 140]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Area
              type="monotone"
              dataKey="sunspots"
              stroke="hsl(var(--star-yellow))"
              strokeWidth={2}
              fill="url(#sunspotGradient)"
              name="Observed"
            />
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              name="Predicted"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-star-yellow" />
          <span className="text-sm text-muted-foreground">Observed</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 border-t-2 border-dashed border-muted-foreground" />
          <span className="text-sm text-muted-foreground">Predicted</span>
        </div>
      </div>
    </div>
  );
};

export default SolarCycleChart;
