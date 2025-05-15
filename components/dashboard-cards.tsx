import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FileText, TrendingUp } from "lucide-react"

export function DashboardCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Escalas Aplicadas</CardTitle>
          <FileText className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">248</div>
          <p className="text-xs text-gray-500">+12% em relação ao mês anterior</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Usuários Ativos</CardTitle>
          <Users className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,423</div>
          <p className="text-xs text-gray-500">+5% em relação ao mês anterior</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Progresso Médio</CardTitle>
          <TrendingUp className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">78%</div>
          <p className="text-xs text-gray-500">+3% em relação ao mês anterior</p>
        </CardContent>
      </Card>
    </div>
  )
}
