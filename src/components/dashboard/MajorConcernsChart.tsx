import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const MajorConcernsChart = () => {
  const data = [
    { name: 'Uniform Issues', value: 72, total: 144 },
    { name: 'Academic Concerns', value: 45, total: 144 },
    { name: 'Infrastructure', value: 38, total: 144 },
    { name: 'Communication', value: 25, total: 144 },
    { name: 'Transportation', value: 15, total: 144 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
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
          label={({ name, value }) => `${name}: ${value}`}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend 
          layout="vertical" 
          align="center"
          verticalAlign="bottom"
          wrapperStyle={{
            paddingTop: "20px",
            width: "100%"
          }}
        />
        <Tooltip formatter={(value) => `${value} (${((Number(value) / 144) * 100).toFixed(1)}%)`} />
      </PieChart>
    </div>
  );
};

export default MajorConcernsChart;