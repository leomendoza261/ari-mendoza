import PacienteRow from "./pacientes-row";

export default function TablaPacientesCompleta({ pacientes }) {
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