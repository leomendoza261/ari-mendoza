"use client";

import Link from "next/link";
import { useState } from "react";
import ModalMessage from "@/app/ui/modalMessage"
import ConsultaInfo from "../sesion/consultaInfo";

type PacienteInfoProps = {
    pacienteInfo: PacienteInfo;
};

export default async function PacienteInfo({ pacienteInfo }: PacienteInfoProps) {

    const [pacienteMod, setPaciente] = useState({
        id: pacienteInfo.paciente_id,
        dni: '',
        nombre: '',
        apellido: '',
        fecha_nacimiento: '',
        tutor_legal_dni: '',
        telefono: '',
        email: '',
        tipo_sangre_id: '', // Almacena el ID del tipo de sangre
        alergias: [{ alergia: '' }],
        enfermedades: [{ enfermedad: '' }],
        medicamentos: [{ medicamento: '', dosis: '', frecuencia: '', via: '' }],
        cirugias_previas: [{ cirugia: '', fecha: '', observaciones: '' }],
        observaciones: '',
        obra_social: '',
    });

    const handleModificarPaciente = async (pacienteMod: Object) => {
        const confirmacion = confirm('¿Estás seguro de que deseas modificar los datos del paciente?');

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

    const handleEliminarPaciente = async (id: number) => {
        const confirmacion = confirm('¿Estás seguro de que deseas eliminar este paciente? Esta acción no se puede deshacer y eliminara sus consultas asociadas.');

        if (confirmacion) {
            try {
                const response = await fetch('/api/eliminarPaciente', {
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
        <div key={pacienteInfo.dni}>
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Informacion del Paciente</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-blue-500">Informacion personal y contacto</p>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Nombre Completo</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {pacienteInfo.nombre} {pacienteInfo.apellido}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">DNI</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{pacienteInfo.dni}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Fecha de nacimiento</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{new Date(pacienteInfo.fecha_nacimiento).toLocaleDateString()}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Telefono</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{pacienteInfo.numero_telefono}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{pacienteInfo.email}</dd>
                    </div>
                    <div className="px-4 sm:px-0">
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-blue-500">Historial medico</p>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Tipo sanguineo</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{pacienteInfo.tipo_sangre}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Alergias</dt>

                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {pacienteInfo.alergias && pacienteInfo.alergias.length > 0 ? (
                                pacienteInfo.alergias.map((alergia, index) => (
                                    <div key={index} className="mb-4">
                                        {alergia.alergia}
                                    </div>
                                ))
                            ) : (
                                <p>No hay alergias</p>
                            )}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Enfermedades</dt>

                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {pacienteInfo.enfermedades && pacienteInfo.enfermedades.length > 0 ? (
                                pacienteInfo.enfermedades.map((enfermedad, index) => (
                                    <div key={index} className="mb-4">
                                        <strong> Nombre:</strong> {enfermedad.enfermedad}
                                    </div>
                                ))
                            ) : (
                                <p>No hay enfermedades</p>
                            )}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Medicacion</dt>

                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {pacienteInfo.medicamentos && pacienteInfo.medicamentos.length > 0 ? (
                                pacienteInfo.medicamentos.map((medicamento, index) => (
                                    <div key={index} className="mb-4">
                                        <strong> Nombre:</strong> {medicamento.medicamento}
                                        <strong> Dosis:</strong> {medicamento.dosis}
                                        <strong> Frecuencia:</strong> {medicamento.frecuencia}
                                        <strong> Via:</strong> {medicamento.via_administracion}
                                    </div>
                                ))
                            ) : (
                                <p>No hay medicacion</p>
                            )}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Cirugias</dt>

                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {pacienteInfo.historial_cirugias && pacienteInfo.historial_cirugias.length > 0 ? (
                                pacienteInfo.historial_cirugias.map((cirugia, index) => (
                                    <div key={index} className="mb-4">
                                        <strong> Nombre:</strong> {cirugia.cirugia}
                                        <strong> Fecha:</strong> {new Date(cirugia.fecha).toLocaleDateString()}
                                        <strong> Observaciones:</strong> {cirugia.observaciones}
                                    </div>
                                ))
                            ) : (
                                <p>No hay cirugias</p>
                            )}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Archivo</dt>
                        <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                            <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                                            <span className="flex-shrink-0 text-gray-400">dd/mm/aaaa</span>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Ver
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                            <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                                            <span className="flex-shrink-0 text-gray-400">dd/mm/aaaa</span>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Ver
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </dd>
                    </div>
                    <div className="px-4 sm:px-0">
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-blue-500">Historial Odontologico</p>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Consultas</dt>

                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {pacienteInfo.consultas && pacienteInfo.consultas.length > 0 ? (
                                pacienteInfo.consultas.map((consulta, index) => (
                                    <div key={index} className="mb-4">
                                        <Link href={`/dashboard/sesiones/${consulta.consulta_id}`}
                                            className="hover:text-blue-500">
                                            <strong> Tratamiento: </strong> {consulta.tratamiento}
                                            <strong> Fecha: </strong> {new Date(consulta.fecha_consulta).toLocaleDateString()}
                                        </Link>
                                    </div>
                    ))
                    ) : (
                            <p>No hay consultas</p>
                        )}
                        </dd>
                    </div>
                 </dl>
        </div >
        <div className="flex justify-end space-x-4">
            <button
                className="bg-red-500 h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 active:bg-red-600"
                onClick={() => handleEliminarPaciente(pacienteInfo.paciente_id)}
            >
                Eliminar paciente
            </button>
            <button
                className="bg-blue-500 h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600"
                onClick={() => handleModificarPaciente(pacienteMod)}
            >
                Modificar paciente
            </button>
        </div>
        </div >
    )
} 