import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { PatientsList } from "@/components/patients-list"
import { AddPatientDialog } from "@/components/add-patient-dialog"

export default function Pacientes() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">Pacientes</h1>
          <p className="text-gray-600">Gerencie os pacientes e suas escalas associadas</p>
        </div>
        <AddPatientDialog>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <PlusCircle className="mr-2 h-4 w-4" />
            Adicionar paciente
          </Button>
        </AddPatientDialog>
      </div>

      <PatientsList />
    </div>
  )
}
