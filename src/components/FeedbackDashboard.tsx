import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { StatCard } from './StatCard';
import { MainPieChart } from './MainPieChart';
import { MiniChartsRow } from './MiniChartsRow';
import { FeedbackTrendsChart } from './FeedbackTrendsChart';
import { KeyInsights } from './KeyInsights';
import { useFeedbackData } from '@/hooks/useFeedbackData';

export const FeedbackDashboard = () => {
  const { 
    majorConcernsData, 
    academicBreakdown, 
    infrastructureBreakdown, 
    communicationBreakdown,
    feedbackTrendsData,
    COLORS,
    MINI_COLORS 
  } = useFeedbackData();

  return (
    <div className="w-full max-w-7xl mx-auto p-4 space-y-6">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>School Feedback Analysis Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid grid-cols-2 gap-4">
              <StatCard value="38%" label="Happy Parents" bgColor="bg-green-50" />
              <StatCard value="42%" label="Have Concerns" bgColor="bg-red-50" />
              <StatCard value="144" label="Total Students" bgColor="bg-blue-50" />
              <StatCard value="20%" label="No Response" bgColor="bg-yellow-50" />
            </div>

            <MainPieChart data={majorConcernsData} colors={COLORS} />

            <MiniChartsRow
              charts={[
                { title: "Academic Breakdown", data: academicBreakdown },
                { title: "Infrastructure Issues", data: infrastructureBreakdown },
                { title: "Communication Issues", data: communicationBreakdown }
              ]}
              colors={MINI_COLORS}
            />

            <FeedbackTrendsChart data={feedbackTrendsData} />
          </div>

          <KeyInsights />
        </CardContent>
      </Card>
    </div>
  );
};