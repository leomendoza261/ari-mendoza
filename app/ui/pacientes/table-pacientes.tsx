import TablaPacientesCompleta from "./tabla-pacientes-completa";
import TablaPacientesResumida from "./tabla-pacientes-resumida";
import Link from "next/link";

type TablaPacientesProps = {
  pacientes: Paciente[];
};

type Paciente = {
  id: number;
  nombre: string;
  apellido: string;
  dni: string;
  fecha_nacimiento: string;
  tipos_sangre: {
    tipo: string
  } | null;
  tutores_legales: {
    nombre: string,
    apellido: string
  } | null;
}

export default async function TablaPacientes({ pacientes }: TablaPacientesProps) {
  return (
    <div className="w-full">
      <h1 className="mb-8 text-xl md:text-2xl">Pacientes</h1>

      <div className="flex justify-between">
        <Link
          href={`/dashboard/pacientes/agregarpaciente`}
          className="h-10 flex items-center justify-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600"
        >
          Añadir paciente
        </Link>

        <div className="relative ml-2">
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



