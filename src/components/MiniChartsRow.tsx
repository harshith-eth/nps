import { MiniPieChart } from './MiniPieChart';

interface MiniChartsRowProps {
  charts: Array<{
    title: string;
    data: Array<{ name: string; value: number }>;
  }>;
  colors: string[];
}

export const MiniChartsRow = ({ charts, colors }: MiniChartsRowProps) => (
  <div className="col-span-2 grid grid-cols-3 gap-4">
    {charts.map((chart, index) => (
      <MiniPieChart
        key={index}
        title={chart.title}
        data={chart.data}
        colors={colors}
      />
    ))}
  </div>
);