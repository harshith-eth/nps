import { Card } from '@/components/ui/card';

const StatCards = () => {
  const stats = [
    { value: '38%', label: 'Happy Parents', bgColor: 'bg-green-50' },
    { value: '42%', label: 'Have Concerns', bgColor: 'bg-red-50' },
    { value: '144', label: 'Total Students', bgColor: 'bg-blue-50' },
    { value: '20%', label: 'No Response', bgColor: 'bg-yellow-50' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className={`p-4 ${stat.bgColor} hover:shadow-lg transition-shadow`}>
          <div className="text-2xl font-bold">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </Card>
      ))}
    </div>
  );
};

export default StatCards;