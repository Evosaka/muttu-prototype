"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/date-picker"
import { Search } from "lucide-react"

export function ReportsFilters() {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-2">
            <Label htmlFor="company">Empresa</Label>
            <Select>
              <SelectTrigger id="company">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="acme">Acme Inc</SelectItem>
                <SelectItem value="globex">Globex Corporation</SelectItem>
                <SelectItem value="stark">Stark Industries</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="department">Departamento</Label>
            <Select>
              <SelectTrigger id="department">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="ti">TI</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="financeiro">Financeiro</SelectItem>
                <SelectItem value="rh">RH</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Data Inicial</Label>
            <DatePicker date={startDate} setDate={setStartDate} />
          </div>

          <div className="space-y-2">
            <Label>Data Final</Label>
            <DatePicker date={endDate} setDate={setEndDate} />
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Search className="mr-2 h-4 w-4" />
            Gerar Relatório
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
