"use client";

import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import TablaPacientesResumida from "./tabla-pacientes-resumida";
import PacienteRow from "./pacientes-row";

import { sql } from "@vercel/postgres";

type TablaPacientesProps = {
  pacientes: Paciente[];
};

export default async function TablaPacientes({ pacientes }: TablaPacientesProps) {
  

  return (
    <div className="w-full">
      <h1 className="mb-8 text-xl md:text-2xl">Pacientes</h1>

      <div className="flex justify-between">
        <button
          className="h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600"
        >
          Añadir paciente
        </button>

        <div className="relative ml-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassCircleIcon className="h-5 w-5 text-gray-500" />
          </span>
          <input
            className="block w-full rounded-md border border-gray-200 py-2 pl-10 pr-4 text-sm outline-none placeholder:text-gray-500"
            placeholder="DNI paciente"
          />
        </div>
        
      </div>

      <TablaPacientesCompleta pacientes={pacientes} />
      <TablaPacientesResumida pacientes={pacientes} />
    </div>
  );
}

function TablaPacientesCompleta({ pacientes }) {
  return (
    <div className="hidden md:block overflow-x-auto mt-2">
      <table className="min-w-full rounded-md text-gray-900">
        <thead className="bg-gray-50 text-left text-sm font-medium">
          <tr>
            <th className="px-4 py-3">DNI</th>
            <th className="px-4 py-3">Nombre</th>
            <th className="px-4 py-3">Apellido</th>
            <th className="px-4 py-3">Tipo de Sangre</th>
            <th className="px-4 py-3">Fecha de Nacimiento</th>
            <th className="px-4 py-3">Menor de Edad</th>
            <th className="px-4 py-3">Tutor Legal</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {pacientes.map((paciente) => (
            <tr key={paciente.id} className="bg-white text-sm hover:bg-blue-400">
              <PacienteRow paciente={paciente} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

