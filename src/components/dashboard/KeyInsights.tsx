const KeyInsights = () => {
  const insights = [
    'Uniform distribution is the most pressing concern (72% of parents mentioned)',
    'Academic concerns focus mainly on reading skills and homework management',
    'Infrastructure issues (mosquitoes, construction) need immediate attention',
    'Communication gaps between school and parents need addressing',
    'Transportation timing and routes require optimization',
  ];

  return (
    <div className="mt-6 space-y-4">
      <h3 className="font-bold text-lg">Key Insights</h3>
      <ul className="list-disc pl-5 space-y-2">
        {insights.map((insight, index) => (
          <li key={index} className="text-gray-700">{insight}</li>
        ))}
      </ul>
    </div>
  );
};

export default KeyInsights;