export const useFeedbackData = () => {
  const majorConcernsData = [
    { name: 'Uniform Issues', value: 72, total: 144 },
    { name: 'Academic Concerns', value: 45, total: 144 },
    { name: 'Infrastructure', value: 38, total: 144 },
    { name: 'Communication', value: 25, total: 144 },
    { name: 'Transportation', value: 15, total: 144 }
  ];

  const academicBreakdown = [
    { name: 'Reading Skills', value: 40 },
    { name: 'Homework', value: 35 },
    { name: 'Teaching Quality', value: 25 }
  ];

  const infrastructureBreakdown = [
    { name: 'Mosquitoes', value: 45 },
    { name: 'Construction', value: 35 },
    { name: 'Facilities', value: 20 }
  ];

  const communicationBreakdown = [
    { name: 'Updates', value: 50 },
    { name: 'Teacher Interaction', value: 30 },
    { name: 'Response Time', value: 20 }
  ];

  const feedbackTrendsData = [
    { month: 'Feedback 1', positive: 45, negative: 25, neutral: 30 },
    { month: 'Feedback 2', positive: 35, negative: 40, neutral: 25 },
    { month: 'Feedback 3', positive: 30, negative: 35, neutral: 35 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  const MINI_COLORS = ['#82ca9d', '#8884d8', '#ffc658'];

  return {
    majorConcernsData,
    academicBreakdown,
    infrastructureBreakdown,
    communicationBreakdown,
    feedbackTrendsData,
    COLORS,
    MINI_COLORS
  };
};