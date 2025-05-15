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
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CreateScaleDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulação de criação de escala
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Criar Nova Escala</DialogTitle>
            <DialogDescription>Preencha os campos abaixo para criar uma nova escala psicológica.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome da Escala</Label>
              <Input id="name" placeholder="Ex: Escala de Ansiedade" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                placeholder="Descreva o objetivo e funcionamento da escala"
                className="resize-none"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Tipo de Escala</Label>
              <Select>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="anxiety">Ansiedade</SelectItem>
                  <SelectItem value="depression">Depressão</SelectItem>
                  <SelectItem value="burnout">Burnout</SelectItem>
                  <SelectItem value="stress">Estresse</SelectItem>
                  <SelectItem value="custom">Personalizada</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="questions">Número de Questões</Label>
              <Input id="questions" type="number" min="1" required />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Criar Escala
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
