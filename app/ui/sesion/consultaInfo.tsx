"use client";

import Link from "next/link";
import { Suspense } from "react";

type Sesion = {
    nombre: string;
    apellido: string;
    fecha_consulta: string;
    hora_consulta: string;
    motivo: string;
    diagnostico: string;
    tratamiento: string;
    notas: string;
};

export default function ConsultaInfo({ sesion }: Sesion) {

    const handleModificarConsulta = async (pacienteMod: Object) => {
        const confirmacion = confirm('¿Estás seguro de que deseas modificar los datos de la consulta?');

        if (confirmacion) {
            try {
                const response = await fetch('/api/modificarPaciente', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ pacienteMod }),
                });

                const data = await response.json();

                if (response.ok) {
                    alert(data.message);
                } else {
                    alert(data.error);
                }
            } catch (error) {
                console.error('Error al modificar los datos el paciente:', error);
            }
        }
    };

    const handleEliminarConsulta = async (id: number) => {
        const confirmacion = confirm('¿Estás seguro de que deseas eliminar esta consulta? Esta acción no se puede deshacer y eliminara su informacion.');

        if (confirmacion) {
            try {
                const response = await fetch('/api/eliminarSesion', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id }),
                });

                const data = await response.json();

                if (response.ok) {
                    alert(data.message);
                } else {
                    alert(data.error);
                }
            } catch (error) {
                console.error('Error al eliminar el paciente:', error);
            }
        }
    };

    return (
        <Suspense fallback={<div>Cargando datos de la consulta...</div>}>
            <div>
                <div className="px-4 sm:px-0">
                    {/* Mostrar la primera consulta en caso de que el array tenga más de una */}
                    {sesion.length > 0 ? (
                        <>
                            <h3 className="text-base font-semibold leading-7 text-gray-900">
                                Consulta Numero: {sesion[0].consulta_id}
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm leading-6 text-blue-500">
                                Información de la consulta
                            </p>
                            <div className="mt-6 border-t border-gray-100">
                                <dl className="divide-y divide-gray-100">
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">
                                            Nombre Completo
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            <Link href={`/dashboard/pacientes/${sesion[0].paciente_id}`}
                                                className="hover:text-blue-500">
                                                {sesion[0].nombre} {sesion[0].apellido}
                                            </Link>
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">
                                            Fecha de consulta
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {new Date(sesion[0].fecha_consulta).toLocaleDateString()}{" "}
                                            {sesion[0].hora_consulta}
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">
                                            Motivo
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {sesion[0].motivo}
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">
                                            Diagnóstico
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {sesion[0].diagnostico}
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">
                                            Tratamiento
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {sesion[0].tratamiento}
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">
                                            Notas
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {sesion[0].notas}
                                        </dd>
                                    </div>

                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">
                                            Archivo
                                        </dt>
                                        <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                            <ul
                                                role="list"
                                                className="divide-y divide-gray-100 rounded-md border border-gray-200"
                                            >
                                                {sesion[0].imagenes && sesion[0].imagenes.length > 0 ? (
                                                    sesion[0].imagenes.map((imagen, index) => (
                                                        <li key={index} className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                                            <div className="flex w-0 flex-1 items-center">

                                                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                                    <span className="truncate font-medium">
                                                                        {imagen}
                                                                    </span>
                                                                    <span className="flex-shrink-0 text-gray-400">
                                                                        dd/mm/aaaa
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="ml-4 flex-shrink-0">
                                                                <a
                                                                    href="#"
                                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                >
                                                                    Ver
                                                                </a>
                                                            </div>
                                                        </li>
                                                    ))
                                                ) : (
                                                    <li>No hay imágenes disponibles</li>
                                                )}
                                            </ul>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </>
                    ) : (
                        <p>No hay datos de la consulta disponibles.</p>
                    )}
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        className="bg-red-500 h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 active:bg-red-600"
                        onClick={() => handleEliminarConsulta(sesion[0].consulta_id)}
                    >
                        Eliminar consulta
                    </button>
                    <button
                        className="bg-blue-500 h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600"
                        onClick={() => handleModificarConsulta(sesion[0].consulta_id)}
                    >
                        Modificar consulta
                    </button>
                </div>
            </div>
        </Suspense>
    );
}

