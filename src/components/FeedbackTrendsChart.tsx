import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface FeedbackTrendsChartProps {
  data: Array<{
    month: string;
    positive: number;
    negative: number;
    neutral: number;
  }>;
}

export const FeedbackTrendsChart = ({ data }: FeedbackTrendsChartProps) => {
  // Default parameters instead of defaultProps
  const defaultAxisProps = {
    scale: 'auto',
    allowDecimals: true,
    allowDataOverflow: false,
    allowDuplicatedCategory: true,
    includeHidden: false,
    reversed: false,
    tickCount: 5,
  };

  return (
    <div className="col-span-2 h-[300px] flex justify-center">
      <BarChart
        width={800}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          {...defaultAxisProps}
          dataKey="month"
          height={60}
          tick={{ dy: 10 }}
          padding={{ left: 20, right: 20 }}
        />
        <YAxis
          {...defaultAxisProps}
          width={60}
          tick={{ dx: -10 }}
          padding={{ top: 20, bottom: 20 }}
        />
        <Tooltip />
        <Legend 
          wrapperStyle={{ paddingTop: '20px' }}
          verticalAlign="bottom"
          height={36}
        />
        <Bar dataKey="positive" stackId="a" fill="#82ca9d" />
        <Bar dataKey="negative" stackId="a" fill="#ff8042" />
        <Bar dataKey="neutral" stackId="a" fill="#8884d8" />
      </BarChart>
    </div>
  );
};