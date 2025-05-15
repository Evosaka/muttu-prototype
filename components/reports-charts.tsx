"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"

const barData = [
  { name: "TI", ansiedade: 65, depressao: 40, burnout: 24, estresse: 50 },
  { name: "Marketing", ansiedade: 59, depressao: 45, burnout: 30, estresse: 55 },
  { name: "Financeiro", ansiedade: 80, depressao: 50, burnout: 35, estresse: 60 },
  { name: "RH", ansiedade: 81, depressao: 55, burnout: 40, estresse: 65 },
  { name: "Vendas", ansiedade: 56, depressao: 60, burnout: 45, estresse: 70 },
]

const pieData = [
  { name: "Saudável", value: 60, color: "#22c55e" },
  { name: "Atenção", value: 25, color: "#f59e0b" },
  { name: "Crítico", value: 15, color: "#ef4444" },
]

export function ReportsCharts() {
  return (
    <Tabs defaultValue="departments">
      <div className="mb-4">
        <TabsList>
          <TabsTrigger value="departments">Por Departamento</TabsTrigger>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="trends">Tendências</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="departments">
        <Card>
          <CardHeader>
            <CardTitle>Saúde Mental por Departamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={barData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="ansiedade" fill="#3b82f6" />
                  <Bar dataKey="depressao" fill="#6366f1" />
                  <Bar dataKey="burnout" fill="#ef4444" />
                  <Bar dataKey="estresse" fill="#f59e0b" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="overview">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Distribuição de Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resumo Estatístico</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium">Média de Ansiedade</h3>
                  <div className="mt-1 flex items-center">
                    <div className="h-2 w-full rounded-full bg-blue-100">
                      <div className="h-2 w-[68%] rounded-full bg-blue-600"></div>
                    </div>
                    <span className="ml-2 text-sm font-medium">68%</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium">Média de Depressão</h3>
                  <div className="mt-1 flex items-center">
                    <div className="h-2 w-full rounded-full bg-indigo-100">
                      <div className="h-2 w-[50%] rounded-full bg-indigo-600"></div>
                    </div>
                    <span className="ml-2 text-sm font-medium">50%</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium">Média de Burnout</h3>
                  <div className="mt-1 flex items-center">
                    <div className="h-2 w-full rounded-full bg-red-100">
                      <div className="h-2 w-[35%] rounded-full bg-red-600"></div>
                    </div>
                    <span className="ml-2 text-sm font-medium">35%</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium">Média de Estresse</h3>
                  <div className="mt-1 flex items-center">
                    <div className="h-2 w-full rounded-full bg-amber-100">
                      <div className="h-2 w-[60%] rounded-full bg-amber-500"></div>
                    </div>
                    <span className="ml-2 text-sm font-medium">60%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="trends">
        <Card>
          <CardHeader>
            <CardTitle>Tendências ao Longo do Tempo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { month: "Jan", ansiedade: 65, depressao: 40, burnout: 24, estresse: 50 },
                    { month: "Fev", ansiedade: 59, depressao: 45, burnout: 30, estresse: 55 },
                    { month: "Mar", ansiedade: 80, depressao: 50, burnout: 35, estresse: 60 },
                    { month: "Abr", ansiedade: 81, depressao: 55, burnout: 40, estresse: 65 },
                    { month: "Mai", ansiedade: 56, depressao: 60, burnout: 45, estresse: 70 },
                    { month: "Jun", ansiedade: 55, depressao: 65, burnout: 50, estresse: 75 },
                  ]}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="ansiedade" stroke="#3b82f6" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="depressao" stroke="#6366f1" />
                  <Line type="monotone" dataKey="burnout" stroke="#ef4444" />
                  <Line type="monotone" dataKey="estresse" stroke="#f59e0b" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
