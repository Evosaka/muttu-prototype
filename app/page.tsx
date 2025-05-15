import { LoginForm } from "@/components/login-form"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <div className="mb-6 flex justify-center">
          <Image src="/images/logo.png" alt="Muttu Logo" width={120} height={40} className="h-auto" />
        </div>
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">Bem-vindo ao Muttu</h1>
        <p className="mb-6 text-center text-sm text-gray-600">
          Acesse o sistema para gerenciar escalas psicológicas e acompanhar a saúde mental da sua empresa
        </p>
        <LoginForm />
      </div>
    </main>
  )
}
