import PacienteRowResumido from "./paciente-row-resumido";

type TablaPacientesResumidaProps = {
  pacientes: Paciente[];
};

type Paciente = {
  id: number,
  nombre: string,
  apellido: string,
  dni: string,
  fecha_nacimiento: string,
  tipos_sangre: {
    tipo: string
  } | null;
  tutores_legales: {
    nombre: string,
    apellido: string
  } | null
}


export default async function TablaPacientesResumida({ pacientes }: TablaPacientesResumidaProps) {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pacientes/resumido`, {
    cache: 'no-store', // importante para que se actualice siempre
  });

  if (!res.ok) {
    console.log("no estan perro")
  }

  const pacientesAAA = await res.json();
  console.log(pacientesAAA)


  return (
    <div className="block md:hidden overflow-x-auto mt-2">
      <table className="min-w-full rounded-md text-gray-900">
        <thead className="bg-gray-50 text-left text-sm font-medium">
          <tr>
            <th className="px-4 py-3">DNI</th>
            <th className="px-4 py-3">Nombre</th>
            <th className="px-4 py-3">Apellido</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {pacientes.map((paciente) => (
            <tr key={paciente.id} className="bg-white text-sm hover:bg-blue-400">
              <PacienteRowResumido paciente={paciente} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}