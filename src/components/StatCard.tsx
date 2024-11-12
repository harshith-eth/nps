import { Card } from '@/components/ui/card';

interface StatCardProps {
  value: string;
  label: string;
  bgColor: string;
}

export const StatCard = ({ value, label, bgColor }: StatCardProps) => (
  <Card className={`p-4 ${bgColor}`}>
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </Card>
);