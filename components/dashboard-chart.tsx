"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const data = [
  { name: "Jan", ansiedade: 65, depressao: 40, burnout: 24, estresse: 50 },
  { name: "Fev", ansiedade: 59, depressao: 45, burnout: 30, estresse: 55 },
  { name: "Mar", ansiedade: 80, depressao: 50, burnout: 35, estresse: 60 },
  { name: "Abr", ansiedade: 81, depressao: 55, burnout: 40, estresse: 65 },
  { name: "Mai", ansiedade: 56, depressao: 60, burnout: 45, estresse: 70 },
  { name: "Jun", ansiedade: 55, depressao: 65, burnout: 50, estresse: 75 },
  { name: "Jul", ansiedade: 40, depressao: 70, burnout: 55, estresse: 80 },
]

export function DashboardChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Saúde Mental Média da Empresa</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
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
  )
}
