"use client";

import Link from "next/link";
import { Suspense, useCallback, useState } from "react";
import PencilIcon from "../icons/pencil";

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
    const [sesionMod, setSesionMod] = useState({
        paciente_id: sesion[0].paciente_id,
        nombre: sesion[0].nombre,
        apellido: sesion[0].apellido,
        dni: sesion[0].dni,
        fecha_consulta: sesion[0].fecha_consulta,
        hora_consulta: sesion[0].hora_consulta,
        motivo: sesion[0].motivo,
        diagnostico: sesion[0].diagnostico,
        tratamiento: sesion[0].tratamiento,
        imagenes: sesion[0].imagenes,
        notas: sesion[0].notas,
    });

    const [isEdit, setIsEdit] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [fieldToEdit, setFieldToEdit] = useState("");

    const handleModificarConsulta = async (pacienteMod: Object) => {
        const confirmacion = confirm('¿Estás seguro de que deseas modificar los datos de la consulta?');

        if (confirmacion) {
            try {
                const response = await fetch('/api/modificarPaciente', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ sesionMod }),
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

    const toggleEditField = (field: string) => {
        setIsEdit(true)
        setIsEditing(true);
        setFieldToEdit(field);
    };

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSesionMod((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }, []);

    const handleInputChangeArray = (e, index, field, arrayName) => {
        const { value } = e.target;
        setSesionMod((prevState) => {
            const updatedArray = [...prevState[arrayName]];  // Copia el array específico
            updatedArray[index] = { ...updatedArray[index], [field]: value };  // Actualiza el campo específico
            return {
                ...prevState,
                [arrayName]: updatedArray,  // Actualiza el estado con el array modificado
            };
        });
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
                                                {sesionMod.nombre} {sesionMod.apellido}
                                            </Link>
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">
                                            Fecha de consulta
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {isEditing && fieldToEdit === "fecha_hora" ? (
                                                <>
                                                    <input
                                                        type="date"
                                                        name="fecha_consulta"
                                                        value={sesionMod.fecha_consulta}
                                                        onChange={handleInputChange} // Maneja el cambio del nombre
                                                        className="border border-gray-300 rounded-lg p-2 mr-2"
                                                    />
                                                    <input
                                                        type="time"
                                                        name="hora_consulta"
                                                        value={sesionMod.hora_consulta}
                                                        onChange={handleInputChange} // Maneja el cambio del apellido
                                                        className="border border-gray-300 rounded-lg p-2"
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    {new Date(sesionMod.fecha_consulta).toLocaleDateString()}{" "}
                                                    {sesionMod.hora_consulta}
                                                    <button className="mt-2 ml-2 bg-blue-100 py-1 px-2 rounded-lg hover:text-blue-600" onClick={() => toggleEditField("fecha_hora")}>
                                                        <PencilIcon size={4} strokeWidth={2} />
                                                    </button>
                                                </>
                                            )}
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">
                                            Motivo
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {isEditing && fieldToEdit === "motivo" ? (
                                                <>
                                                    <input
                                                        type="text"
                                                        name="motivo"
                                                        value={sesionMod.motivo}
                                                        onChange={handleInputChange} // Maneja el cambio del nombre
                                                        className="border border-gray-300 rounded-lg p-2 mr-2"
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    {sesionMod.motivo}
                                                    <button className="mt-2 ml-2 bg-blue-100 py-1 px-2 rounded-lg hover:text-blue-600" onClick={() => toggleEditField("motivo")}>
                                                        <PencilIcon size={4} strokeWidth={2} />
                                                    </button>
                                                </>
                                            )}
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">
                                            Diagnóstico
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        {isEditing && fieldToEdit === "diagnostico" ? (
                                                <>
                                                    <input
                                                        type="text"
                                                        name="diagnostico"
                                                        value={sesionMod.diagnostico}
                                                        onChange={handleInputChange} // Maneja el cambio del nombre
                                                        className="border border-gray-300 rounded-lg p-2 mr-2"
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    {sesionMod.diagnostico}
                                                    <button className="mt-2 ml-2 bg-blue-100 py-1 px-2 rounded-lg hover:text-blue-600" onClick={() => toggleEditField("diagnostico")}>
                                                        <PencilIcon size={4} strokeWidth={2} />
                                                    </button>
                                                </>
                                            )}
                                            
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">
                                            Tratamiento
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        {isEditing && fieldToEdit === "tratamiento" ? (
                                                <>
                                                    <input
                                                        type="text"
                                                        name="tratamiento"
                                                        value={sesionMod.tratamiento}
                                                        onChange={handleInputChange} // Maneja el cambio del nombre
                                                        className="border border-gray-300 rounded-lg p-2 mr-2"
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    {sesionMod.tratamiento}
                                                    <button className="mt-2 ml-2 bg-blue-100 py-1 px-2 rounded-lg hover:text-blue-600" onClick={() => toggleEditField("tratamiento")}>
                                                        <PencilIcon size={4} strokeWidth={2} />
                                                    </button>
                                                </>
                                            )}
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">
                                            Notas
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        {isEditing && fieldToEdit === "notas" ? (
                                                <>
                                                    <input
                                                        type="text"
                                                        name="notas"
                                                        value={sesionMod.notas}
                                                        onChange={handleInputChange} // Maneja el cambio del nombre
                                                        className="border border-gray-300 rounded-lg p-2 mr-2"
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    {sesionMod.notas}
                                                    <button className="mt-2 ml-2 bg-blue-100 py-1 px-2 rounded-lg hover:text-blue-600" onClick={() => toggleEditField("notas")}>
                                                        <PencilIcon size={4} strokeWidth={2} />
                                                    </button>
                                                </>
                                            )}      
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
                                                    sesionMod.imagenes.map((imagen, index) => (
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
                        onClick={() => handleModificarConsulta(sesionMod)}
                    >
                        Modificar consulta
                    </button>
                </div>
            </div>
        </Suspense>
    );
}

