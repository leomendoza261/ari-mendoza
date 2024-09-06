import SesionesRowResumido from "./sesiones-row-resumido"

export default function TablaSesionesResumida({ sesiones }) {
    return (
        <div className="block md:hidden overflow-x-auto mt-2">
            <table className="min-w-full rounded-md text-gray-900">
                <thead className="bg-gray-50 text-left text-sm font-medium">
                    <tr>
                        <th className="px-4 py-3">Nro consulta</th>
                        <th className="px-4 py-3">ID paciente</th>
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