import { DashboardCards } from "@/components/dashboard-cards"
import { DashboardChart } from "@/components/dashboard-chart"
import { AlertCards } from "@/components/alert-cards"

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">Dashboard</h1>
      <p className="text-gray-600">Visão geral da saúde mental da sua empresa</p>

      <DashboardCards />
      <DashboardChart />
      <AlertCards />
    </div>
  )
}
