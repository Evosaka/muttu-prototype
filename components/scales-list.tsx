import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreVertical, Users, Calendar } from "lucide-react"

const scales = [
  {
    id: 1,
    name: "Escala de Burnout",
    description: "Avalia níveis de esgotamento profissional",
    responses: 156,
    status: "Crítico",
    statusColor: "destructive",
    lastUsed: "Hoje",
  },
  {
    id: 2,
    name: "Escala de Ansiedade GAD-7",
    description: "Avalia sintomas de ansiedade generalizada",
    responses: 243,
    status: "Atenção",
    statusColor: "warning",
    lastUsed: "Ontem",
  },
  {
    id: 3,
    name: "Escala de Depressão PHQ-9",
    description: "Avalia sintomas depressivos",
    responses: 198,
    status: "Normal",
    statusColor: "success",
    lastUsed: "3 dias atrás",
  },
  {
    id: 4,
    name: "Escala de Estresse Percebido",
    description: "Avalia níveis de estresse",
    responses: 127,
    status: "Atenção",
    statusColor: "warning",
    lastUsed: "1 semana atrás",
  },
]

export function ScalesList() {
  return (
    <div className="space-y-4">
      {scales.map((scale) => (
        <Card key={scale.id}>
          <CardHeader className="flex flex-row items-start justify-between pb-2">
            <div>
              <CardTitle className="text-lg">{scale.name}</CardTitle>
              <p className="text-sm text-gray-500">{scale.description}</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                  <span className="sr-only">Ações</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Editar</DropdownMenuItem>
                <DropdownMenuItem>Aplicar</DropdownMenuItem>
                <DropdownMenuItem>Ver relatório</DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">Excluir</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{scale.responses} respostas</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="text-sm">Último uso: {scale.lastUsed}</span>
              </div>
              <Badge
                variant={
                  scale.statusColor === "destructive"
                    ? "destructive"
                    : scale.statusColor === "warning"
                      ? "outline"
                      : "success"
                }
                className={
                  scale.statusColor === "warning"
                    ? "border-amber-500 text-amber-500"
                    : scale.statusColor === "success"
                      ? "bg-green-500"
                      : ""
                }
              >
                Status médio: {scale.status}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
