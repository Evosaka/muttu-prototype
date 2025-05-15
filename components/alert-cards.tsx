import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, ArrowRight } from "lucide-react"

export function AlertCards() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Alertas Importantes</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">João Silva</CardTitle>
              <Badge variant="destructive" className="flex items-center gap-1">
                <AlertTriangle className="h-3 w-3" />
                Alto Risco
              </Badge>
            </div>
            <CardDescription>Departamento de TI</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-sm">Burnout detectado com nível crítico. Recomenda-se intervenção imediata.</p>
            <Button variant="outline" size="sm" className="w-full">
              Ver detalhes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Maria Oliveira</CardTitle>
              <Badge variant="destructive" className="flex items-center gap-1">
                <AlertTriangle className="h-3 w-3" />
                Alto Risco
              </Badge>
            </div>
            <CardDescription>Departamento de Marketing</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-sm">
              Níveis de ansiedade elevados nas últimas 3 semanas. Recomenda-se acompanhamento.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Ver detalhes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Carlos Mendes</CardTitle>
              <Badge variant="warning" className="flex items-center gap-1 bg-amber-500">
                <AlertTriangle className="h-3 w-3" />
                Médio Risco
              </Badge>
            </div>
            <CardDescription>Departamento Financeiro</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-sm">Sinais iniciais de estresse. Recomenda-se monitoramento contínuo.</p>
            <Button variant="outline" size="sm" className="w-full">
              Ver detalhes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
