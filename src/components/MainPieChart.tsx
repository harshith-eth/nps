import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

interface MainPieChartProps {
  data: Array<{ name: string; value: number; total: number }>;
  colors: string[];
}

export const MainPieChart = ({ data, colors }: MainPieChartProps) => (
  <div className="h-[400px] flex justify-center">
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={160}
        innerRadius={70}
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label={({name, value}) => `${name}: ${value}`}
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip formatter={(value: number) => `${value} (${((value/144)*100).toFixed(1)}%)`} />
      <Legend 
        layout="horizontal" 
        verticalAlign="bottom" 
        align="center"
        wrapperStyle={{ paddingTop: '20px' }}
      />
    </PieChart>
  </div>
);