import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { ScalesList } from "@/components/scales-list"
import { CreateScaleDialog } from "@/components/create-scale-dialog"

export default function Escalas() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">Escalas</h1>
          <p className="text-gray-600">Gerencie as escalas psicológicas disponíveis</p>
        </div>
        <CreateScaleDialog>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <PlusCircle className="mr-2 h-4 w-4" />
            Criar nova escala
          </Button>
        </CreateScaleDialog>
      </div>

      <ScalesList />
    </div>
  )
}
