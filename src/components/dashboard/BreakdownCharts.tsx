import { Card, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const BreakdownChart = ({ title, data }: { title: string; data: Array<{ name: string; value: number }> }) => {
  const MINI_COLORS = ['#82ca9d', '#8884d8', '#ffc658'];

  return (
    <Card className="p-2 hover:shadow-lg transition-shadow">
      <CardTitle className="text-sm mb-2">{title}</CardTitle>
      <div className="flex flex-col items-center">
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
              <Cell key={`cell-${index}`} fill={MINI_COLORS[index % MINI_COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend 
            layout="vertical" 
            align="center"
            verticalAlign="bottom"
            wrapperStyle={{
              paddingTop: "20px",
              width: "100%",
              fontSize: "12px"
            }}
          />
        </PieChart>
      </div>
    </Card>
  );
};

const BreakdownCharts = () => {
  const charts = [
    {
      title: 'Academic Breakdown',
      data: [
        { name: 'Reading Skills', value: 40 },
        { name: 'Homework', value: 35 },
        { name: 'Teaching Quality', value: 25 },
      ],
    },
    {
      title: 'Infrastructure Issues',
      data: [
        { name: 'Mosquitoes', value: 45 },
        { name: 'Construction', value: 35 },
        { name: 'Facilities', value: 20 },
      ],
    },
    {
      title: 'Communication Issues',
      data: [
        { name: 'Updates', value: 50 },
        { name: 'Teacher Interaction', value: 30 },
        { name: 'Response Time', value: 20 },
      ],
    },
  ];

  return (
    <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
      {charts.map((chart, index) => (
        <BreakdownChart key={index} title={chart.title} data={chart.data} />
      ))}
    </div>
  );
};

export default BreakdownCharts;