"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function AddPatientDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulação de adição de paciente
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Adicionar Paciente</DialogTitle>
            <DialogDescription>
              Preencha os dados do paciente e selecione as escalas a serem aplicadas.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Departamento</Label>
              <Select>
                <SelectTrigger id="department">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ti">TI</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="financeiro">Financeiro</SelectItem>
                  <SelectItem value="rh">RH</SelectItem>
                  <SelectItem value="vendas">Vendas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Escalas a serem aplicadas</Label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="scale-burnout" />
                  <Label htmlFor="scale-burnout" className="font-normal">
                    Burnout
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="scale-anxiety" />
                  <Label htmlFor="scale-anxiety" className="font-normal">
                    Ansiedade
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="scale-depression" />
                  <Label htmlFor="scale-depression" className="font-normal">
                    Depressão
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="scale-stress" />
                  <Label htmlFor="scale-stress" className="font-normal">
                    Estresse
                  </Label>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Adicionar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
