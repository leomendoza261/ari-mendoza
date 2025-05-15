import SesionesRowResumido from "./sesiones-row-resumido"

type TablaConsultasResumidaProps = {
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

export default function TablaSesionesResumida({ sesiones }: TablaConsultasResumidaProps) {
    return (
        <div className="block md:hidden overflow-x-auto mt-2">
            <table className="min-w-full rounded-md text-gray-900">
                <thead className="bg-gray-50 text-left text-sm font-medium">
                    <tr>
                        <th className="px-4 py-3">Nro consulta</th>
                        <th className="px-4 py-3">Paciente</th>
                        <th className="px-4 py-3">Fecha consulta</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {sesiones.map((sesion) => (
                        <tr key={sesion.id} className="bg-white text-sm hover:bg-blue-400">
                            <SesionesRowResumido sesion={sesion}/>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}