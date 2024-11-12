import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const FeedbackTrendsChart = () => {
  const data = [
    { month: 'Feedback 1', positive: 45, negative: 25, neutral: 30 },
    { month: 'Feedback 2', positive: 35, negative: 40, neutral: 25 },
    { month: 'Feedback 3', positive: 30, negative: 35, neutral: 35 },
  ];

  return (
    <div className="col-span-2 h-64">
      <BarChart
        width={800}
        height={250}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="positive" stackId="a" fill="#82ca9d" />
        <Bar dataKey="negative" stackId="a" fill="#ff8042" />
        <Bar dataKey="neutral" stackId="a" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default FeedbackTrendsChart;