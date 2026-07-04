import { StatCards } from "@/components/dashboard/stat-cards"
import { OverviewChart } from "@/components/dashboard/overview-chart"
import { RecentActivity } from "@/components/dashboard/recent-activity"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <StatCards />
      <OverviewChart />
      <RecentActivity />
    </div>
  )
}
