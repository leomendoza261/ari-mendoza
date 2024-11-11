"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { InputField } from "../inputField";

type PacienteInfoProps = {
    pacienteInfo: PacienteInfo;
};

export default function PacienteInfo({ pacienteInfo }: PacienteInfoProps) {
    const [pacienteMod, setPacienteMod] = useState({
        id:pacienteInfo.paciente_id,
        nombre: pacienteInfo.nombre,
        apellido: pacienteInfo.apellido,
        dni: pacienteInfo.dni,
        fecha_nacimiento: pacienteInfo.fecha_nacimiento,
        tutor_legal_dni: pacienteInfo.tutor_legal_dni,
        telefono: pacienteInfo.numero_telefono,
        email: pacienteInfo.email,
        tipo_sangre_id: pacienteInfo.tipo_sangre_id,
        alergias: pacienteInfo.alergias,
        enfermedades: pacienteInfo.enfermedades,
        medicamentos: pacienteInfo.medicamentos,
        cirugias_previas: pacienteInfo.historial_cirugias,
        observaciones: pacienteInfo.observaciones,
        obra_social: pacienteInfo.obra_social,
    });

    const [isEditing, setIsEditing] = useState(false);
    const [fieldToEdit, setFieldToEdit] = useState(""); // Campo que está siendo editado

    const handleModificarPaciente = async () => {
        console.log(pacienteMod)
        const confirmacion = confirm('¿Estás seguro de que deseas modificar los datos del paciente?');

        if (confirmacion) {
            try {
                const response = await fetch('/api/modificarPaciente', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(pacienteMod),
                });

                const data = await response.json();

                if (response.ok) {
                    alert('Paciente modificado exitosamente');
                } else {
                    alert('Error al modificar el paciente');
                }
            } catch (error) {
                console.error('1 Error al modificar los datos del paciente:', error);
            }
        }
    };

    const toggleEditField = (field: string) => {
        setIsEditing(true);
        setFieldToEdit(field);
    };

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPacienteMod((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }, []);

    const handleInputChangeArray = (e, index, field, arrayName) => {
        const { value } = e.target;
        setPacienteMod((prevState) => {
            const updatedArray = [...prevState[arrayName]];  // Copia el array específico
            updatedArray[index] = { ...updatedArray[index], [field]: value };  // Actualiza el campo específico
            return {
                ...prevState,
                [arrayName]: updatedArray,  // Actualiza el estado con el array modificado
            };
        });
    };

    const handleEliminarPaciente = async (id: number) => {
        const confirmacion = confirm('¿Estás seguro de que deseas eliminar este paciente? Esta acción no se puede deshacer y eliminará sus consultas asociadas.');

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
                <h3 className="text-base font-semibold leading-7 text-gray-900">Información del Paciente</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-blue-500">Información personal y contacto</p>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Nombre Completo</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {isEditing && fieldToEdit === "nombre_apellido" ? (
                                <>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={pacienteMod.nombre}
                                        onChange={handleInputChange} // Maneja el cambio del nombre
                                        className="border border-gray-300 rounded-lg p-2 mr-2"
                                        placeholder="Nombre"
                                    />
                                    <input
                                        type="text"
                                        name="apellido"
                                        value={pacienteMod.apellido}
                                        onChange={handleInputChange} // Maneja el cambio del apellido
                                        className="border border-gray-300 rounded-lg p-2"
                                        placeholder="Apellido"
                                    />
                                </>
                            ) : (
                                <>
                                    {pacienteInfo.nombre} {pacienteInfo.apellido}
                                    <button className="text-blue" onClick={() => toggleEditField("nombre_apellido")}>
                                        Modificar
                                    </button>
                                </>
                            )}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">DNI</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {isEditing && fieldToEdit === "dni" ? (
                                <input
                                    type="text"
                                    name="dni"
                                    value={pacienteMod.dni}
                                    onChange={handleInputChange} // Vincula el campo con el evento onChange
                                    className="border border-gray-300 rounded-lg p-2"
                                />
                            ) : (
                                <>
                                    {pacienteMod.dni}
                                    <button className="text-blue" onClick={() => toggleEditField("dni")}> Modificar</button>
                                </>
                            )}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Fecha de nacimiento</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {isEditing && fieldToEdit === "fecha_nacimiento" ? (
                                <input
                                    type="date"
                                    name="fecha_nacimiento"
                                    value={pacienteMod.fecha_nacimiento}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg p-2"
                                />
                            ) : (
                                <>
                                    {new Date(pacienteInfo.fecha_nacimiento).toLocaleDateString()}
                                    <button className="text-blue" onClick={() => toggleEditField("fecha_nacimiento")}> Modificar</button>
                                </>
                            )}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Teléfono</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {isEditing && fieldToEdit === "telefono" ? (
                                <input
                                    type="phone"
                                    name="telefono"
                                    value={pacienteMod.telefono}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg p-2"
                                />
                            ) : (
                                <>
                                    {pacienteInfo.numero_telefono}
                                    <button className="text-blue" onClick={() => toggleEditField("telefono")}> Modificar</button>
                                </>
                            )}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {isEditing && fieldToEdit === "email" ? (
                                <input
                                    type="phone"
                                    name="email"
                                    value={pacienteMod.email}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg p-2"
                                />
                            ) : (
                                <>
                                    {pacienteInfo.email}
                                    <button className="text-blue" onClick={() => toggleEditField("email")}> Modificar</button>
                                </>
                            )}
                        </dd>
                    </div>
                    {/* Información médica */}
                    <div className="px-4 sm:px-0">
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-blue-500">Historial médico</p>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Tipo sanguíneo</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {isEditing && fieldToEdit === "tipo_sangre_id" ? (
                                <input
                                    type="phone"
                                    name="tipo_sangre_id"
                                    value={pacienteMod.tipo_sangre_id}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg p-2"
                                />
                            ) : (
                                <>
                                    {pacienteInfo.tipo_sangre}
                                    <button className="text-blue" onClick={() => toggleEditField("tipo_sangre_id")}> Modificar</button>
                                </>
                            )}
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Alergias</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {pacienteInfo.alergias.length > 0 ? (
                                pacienteInfo.alergias.map((alergia, index) => (
                                    <div key={index} className="mb-4">
                                        {isEditing && fieldToEdit === "alergia" ? (
                                            <input
                                                type="text"
                                                name={`alergia_nombre_${index}`}
                                                value={pacienteMod.alergias[index]?.alergia || alergia.alergia}
                                                onChange={(e) => handleInputChangeArray(e, index, 'alergia', 'alergias')}  // Pasa 'alergias' como arrayName
                                                className="border border-gray-300 rounded-lg p-2"
                                            />
                                        ) : (
                                            <>
                                                {alergia.alergia}
                                                <button className="text-blue" onClick={() => toggleEditField("alergia")}> Modificar</button>
                                            </>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <>
                                    <p>No hay alergias</p>
                                    <button className="text-blue" onClick={() => toggleEditField("alergia")}> Modificar</button>
                                </>
                            )}
                        </dd>
                    </div>
                    
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Enfermedades</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {pacienteInfo.enfermedades && pacienteInfo.enfermedades.length > 0 ? (
                                pacienteInfo.enfermedades.map((enfermedad, index) => (
                                    <div key={index} className="mb-4">
                                        {isEditing && fieldToEdit === "enfermedades" ? (
                                            <input
                                                type="text"
                                                name={`enfermedad-${index}`}
                                                value={pacienteMod.enfermedades[index]?.enfermedad || ''}
                                                onChange={(e) => handleInputChangeArray(e, index, 'enfermedad', 'enfermedades')}
                                                className="border border-gray-300 rounded-lg p-2"
                                                placeholder="Enfermedad"
                                            />
                                        ) : (
                                            <>
                                                <strong>Enfermedad:</strong> {enfermedad.enfermedad}<br />
                                                <button className="text-blue" onClick={() => toggleEditField("enfermedades")}>Modificar</button>
                                            </>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <>
                                    <p>No hay enfermedades registradas</p>
                                    <button className="text-blue" onClick={() => toggleEditField("enfermedades")}>Añadir</button>
                                </>
                                
                            )}
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Medicacion</dt>

                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {pacienteInfo.medicamentos && pacienteInfo.medicamentos.length > 0 ? (
                                pacienteInfo.medicamentos.map((medicamento, index) => (
                                    <div key={index} className="mb-4">
                                        {isEditing && fieldToEdit === `medicamento_${medicamento.id}` ? (
                                            <>
                                                <div>
                                                    <label><strong>Nombre: </strong></label>
                                                    <input
                                                        type="text"
                                                        name={`medicamento_nombre_${index}`}
                                                        value={pacienteMod.medicamentos[index]?.medicamento || medicamento.medicamento}
                                                        onChange={(e) => handleInputChangeArray(e, index, 'medicamento', 'medicamentos')}
                                                        className="border border-gray-300 rounded-lg p-2"
                                                    />
                                                </div>
                                                <div>
                                                    <label><strong>Dosis: </strong></label>
                                                    <input
                                                        type="text"
                                                        name={`medicamento_dosis_${index}`}
                                                        value={pacienteMod.medicamentos[index]?.dosis || medicamento.dosis}
                                                        onChange={(e) => handleInputChangeArray(e, index, 'dosis', 'medicamentos')}
                                                        className="border border-gray-300 rounded-lg p-2"
                                                    />
                                                </div>
                                                <div>
                                                    <label><strong>Frecuencia: </strong></label>
                                                    <input
                                                        type="text"
                                                        name={`medicamento_frecuencia_${index}`}
                                                        value={pacienteMod.medicamentos[index]?.frecuencia || medicamento.frecuencia}
                                                        onChange={(e) => handleInputChangeArray(e, index, 'frecuencia', 'medicamentos')}
                                                        className="border border-gray-300 rounded-lg p-2"
                                                    />
                                                </div>
                                                <div>
                                                    <label><strong>Vía de administración: </strong></label>
                                                    <input
                                                        type="text"
                                                        name={`medicamento_via_${index}`}
                                                        value={pacienteMod.medicamentos[index]?.via_administracion || medicamento.via_administracion}
                                                        onChange={(e) => handleInputChangeArray(e, index, 'via_administracion', 'medicamentos')}
                                                        className="border border-gray-300 rounded-lg p-2"
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <strong> Nombre:</strong> {medicamento.medicamento}
                                                <strong> Dosis:</strong> {medicamento.dosis}
                                                <strong> Frecuencia:</strong> {medicamento.frecuencia}
                                                <strong> Via:</strong> {medicamento.via_administracion}
                                                <button
                                                    className="text-blue"
                                                    onClick={() => toggleEditField(`medicamento_${medicamento.id}`)} // Cambia el fieldToEdit para que sea específico de cada medicamento
                                                >
                                                    Modificar
                                                </button>
                                            </>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p>No hay medicación registrada</p>
                            )}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Cirugias</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {pacienteInfo.historial_cirugias && pacienteInfo.historial_cirugias.length > 0 ? (
                                pacienteInfo.historial_cirugias.map((cirugia, index) => (
                                    <div key={index} className="mb-4">
                                        {isEditing && fieldToEdit === "historial_cirugias" ? (
                                            <>
                                                <input
                                                    type="text"
                                                    name={`cirugia-${index}`}
                                                    value={pacienteMod.historial_cirugias[index]?.cirugia || ''}
                                                    onChange={(e) => handleInputChangeArray(e, index, 'cirugia', 'historial_cirugias')}
                                                    className="border border-gray-300 rounded-lg p-2"
                                                    placeholder="Cirugía"
                                                />
                                                <input
                                                    type="date"
                                                    name={`fecha-${index}`}
                                                    value={pacienteMod.historial_cirugias[index]?.fecha || ''}
                                                    onChange={(e) => handleInputChangeArray(e, index, 'fecha', 'historial_cirugias')}
                                                    className="border border-gray-300 rounded-lg p-2"
                                                    placeholder="Fecha"
                                                />
                                                <input
                                                    type="text"
                                                    name={`observaciones-${index}`}
                                                    value={pacienteMod.historial_cirugias[index]?.observaciones || ''}
                                                    onChange={(e) => handleInputChangeArray(e, index, 'observaciones', 'historial_cirugias')}
                                                    className="border border-gray-300 rounded-lg p-2"
                                                    placeholder="Observaciones"
                                                />
                                            </>
                                        ) : (
                                            <>
                                                <strong>Cirugía:</strong> {cirugia.cirugia}<br />
                                                <strong>Fecha:</strong> {cirugia.fecha}<br />
                                                <strong>Observaciones:</strong> {cirugia.observaciones}<br />
                                                <button className="text-blue" onClick={() => toggleEditField("historial_cirugias")}>Modificar</button>
                                            </>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <>
                                    <p>No hay cirugías registradas</p>
                                    <button className="text-blue" onClick={() => toggleEditField("historial_cirugias")}>Añadir</button>
                                </>
                            )}
                        </dd>
                    </div>

                    {/* ARCHIVOS */}

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

                    {/* CONSULTAS */}

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


                    {/* BOTONES ELIMINAR Y MODIFICAR */}
                    <div className="flex justify-end space-x-4">
                        <button
                            className="bg-red-500 h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 active:bg-red-600"
                            onClick={() => handleEliminarPaciente(pacienteInfo.paciente_id)}
                        >
                            Eliminar paciente
                        </button>
                        <button
                            className="bg-blue-500 h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600"
                            onClick={handleModificarPaciente}
                        >
                            Modificar paciente
                        </button>
                    </div>
                </dl>
            </div>
        </div>
    );
}
