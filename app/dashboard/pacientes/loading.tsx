import Link from "next/link";

// loading.tsx
export default function Loading() {
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
                </table>
            </div>
        </div>
    );
}
