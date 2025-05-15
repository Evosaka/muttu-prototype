"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulação de login - sem backend real
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="seu@email.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Senha</Label>
        <Input id="password" type="password" required />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember" className="text-sm font-normal">
          Manter conectado
        </Label>
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
        {isLoading ? "Entrando..." : "Entrar"}
      </Button>
      <div className="text-center text-sm">
        <Link href="#" className="text-blue-600 hover:underline">
          Esqueceu sua senha?
        </Link>
      </div>
      <div className="text-center text-sm">
        <span className="text-gray-600">Não possui conta? </span>
        <Link href="#" className="text-blue-600 hover:underline">
          Cadastre-se
        </Link>
      </div>
    </form>
  )
}
