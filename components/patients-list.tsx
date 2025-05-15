import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreVertical, FileText } from "lucide-react"

const patients = [
  {
    id: 1,
    name: "João Silva",
    email: "joao.silva@empresa.com",
    department: "TI",
    progress: 75,
    status: "Em acompanhamento",
    scales: 4,
  },
  {
    id: 2,
    name: "Maria Oliveira",
    email: "maria.oliveira@empresa.com",
    department: "Marketing",
    progress: 30,
    status: "Crítico",
    scales: 3,
  },
  {
    id: 3,
    name: "Carlos Mendes",
    email: "carlos.mendes@empresa.com",
    department: "Financeiro",
    progress: 50,
    status: "Em acompanhamento",
    scales: 2,
  },
  {
    id: 4,
    name: "Ana Souza",
    email: "ana.souza@empresa.com",
    department: "RH",
    progress: 90,
    status: "Estável",
    scales: 4,
  },
]

export function PatientsList() {
  return (
    <div className="space-y-4">
      {patients.map((patient) => (
        <Card key={patient.id}>
          <CardHeader className="flex flex-row items-start justify-between pb-2">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>
                  {patient.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">{patient.name}</CardTitle>
                <p className="text-sm text-gray-500">{patient.email}</p>
                <p className="text-xs text-gray-500">Departamento: {patient.department}</p>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                  <span className="sr-only">Ações</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Ver perfil</DropdownMenuItem>
                <DropdownMenuItem>Aplicar escala</DropdownMenuItem>
                <DropdownMenuItem>Ver histórico</DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">Remover</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Progresso</span>
                <span className="text-sm">{patient.progress}%</span>
              </div>
              <Progress
                value={patient.progress}
                className={`h-2 ${
                  patient.progress < 40 ? "bg-red-100" : patient.progress < 70 ? "bg-amber-100" : "bg-green-100"
                }`}
                indicatorClassName={`${
                  patient.progress < 40 ? "bg-red-500" : patient.progress < 70 ? "bg-amber-500" : "bg-green-500"
                }`}
              />
              <div className="flex flex-wrap items-center gap-4">
                <Badge
                  variant={
                    patient.status === "Crítico"
                      ? "destructive"
                      : patient.status === "Em acompanhamento"
                        ? "outline"
                        : "success"
                  }
                  className={
                    patient.status === "Em acompanhamento"
                      ? "border-amber-500 text-amber-500"
                      : patient.status === "Estável"
                        ? "bg-green-500"
                        : ""
                  }
                >
                  {patient.status}
                </Badge>
                <div className="flex items-center gap-1">
                  <FileText className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{patient.scales} escalas associadas</span>
                </div>
                <Button variant="outline" size="sm" className="ml-auto">
                  Aplicar escala
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
