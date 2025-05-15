import { ReportsFilters } from "@/components/reports-filters"
import { ReportsCharts } from "@/components/reports-charts"

export default function Relatorios() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">Relatórios</h1>
        <p className="text-gray-600">Visualize relatórios agregados de saúde mental</p>
      </div>

      <ReportsFilters />
      <ReportsCharts />
    </div>
  )
}
