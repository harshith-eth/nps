import { Card, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

interface MiniPieChartProps {
  title: string;
  data: Array<{ name: string; value: number }>;
  colors: string[];
}

export const MiniPieChart = ({ title, data, colors }: MiniPieChartProps) => (
  <Card className="p-2">
    <CardTitle className="text-sm mb-2">{title}</CardTitle>
    <div className="h-[200px] flex justify-center">
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx={100}
          cy={80}
          innerRadius={30}
          outerRadius={45}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend 
          layout="horizontal" 
          verticalAlign="bottom" 
          align="center"
          wrapperStyle={{ paddingTop: '20px' }}
        />
      </PieChart>
    </div>
  </Card>
);