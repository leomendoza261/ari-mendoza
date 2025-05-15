import SesionRow from "./sesiones-row";

type TablaConsultasCompletaProps = {
  sesiones: Sesion[];
};

type Sesion = {
  id: number;
  fecha_consulta: string;
  hora_consulta: string;
  motivo: string;
  diagnostico: string;
  tratamiento: string;
  pacientes: {
    nombre: string;
    apellido: string
  };
}

export default function TablaSesionesCompleta({ sesiones }: TablaConsultasCompletaProps) {
    return (
        <div className="hidden md:block overflow-x-auto mt-2">
            <table className="min-w-full rounded-md text-gray-900">
                <thead className="bg-gray-50 text-left text-sm font-medium">
                    <tr>
                        <th className="px-4 py-3">Nro consulta</th>
                        <th className="px-4 py-3">Paciente</th>
                        <th className="px-4 py-3">Fecha consulta</th>
                        <th className="px-4 py-3">Motivo</th>
                        <th className="px-4 py-3">Diagnostico</th>
                        <th className="px-4 py-3">Tratamiento</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {sesiones.map((sesion) => (
                        <tr key={sesion.id} className="bg-white text-sm hover:bg-blue-400">
                            <SesionRow sesion={sesion} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}