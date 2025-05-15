"use client";

import Link from "next/link";
import { JSX, useCallback, useState } from "react";
import PencilIcon from "../icons/pencil"
import CancelIcon from "../icons/CancelIcon";

const tiposSangre = [
    { id: 1, tipo: 'O+' },
    { id: 2, tipo: 'O-' },
    { id: 3, tipo: 'A+' },
    { id: 4, tipo: 'A-' },
    { id: 5, tipo: 'B+' },
    { id: 6, tipo: 'B-' },
    { id: 7, tipo: 'AB+' },
    { id: 8, tipo: 'AB-' },
];

type Paciente = {
    id: number;
    nombre: string;
    apellido: string;
    dni: string;
    fecha_nacimiento: string;
    tutor_legal_dni: string;
    numero_telefono: string;
    email: string;
    tipo_sangre_id: number;
    alergias: {
        length: number;
        map(arg0: (alergia: any, index: any) => JSX.Element): import("react").ReactNode;
        id: number;
        alergia: string;
    }[];
    enfermedades: {
        length: number;
        map(arg0: (enfermedad: any, index: any) => JSX.Element): import("react").ReactNode;
        id: number;
        enfermedad: string;
    }[];
    medicamentos_actuales: {
        length: number;
        map(arg0: (medicamento: any, index: any) => JSX.Element): import("react").ReactNode;
        id: number;
        medicamento: string;
        dosis: string;
        frecuencia: string;
        via_administracion: string;
    }[];
    historial_cirugias: {
        length: number;
        map(arg0: (cirugia: any, index: any) => JSX.Element): import("react").ReactNode;
        id: number;
        cirugia: string;
        fecha: string;
        observaciones: string;
    }[];
    obra_social: string;
    consultas: {
        length: number;
        map(arg0: (consulta: any, index: any) => JSX.Element): import("react").ReactNode;
        id: number;
        fecha_consulta: string;
        tratamiento: string;
    };

    alergias_eliminar?: number[];
    enfermedades_eliminar?: number[];
    medicamentos_actuales_eliminar?: number[];
    historial_cirugias_eliminar?: number[];
}


type Alergia = { alergia: string };
type Enfermedad = { enfermedad: string };
type Medicamento = {
    medicamento: string;
    dosis: string;
    frecuencia: string;
    via_administracion: string;
};
type Cirugia = {
    cirugia: string;
    fecha: string;
    observaciones: string;
};

type CamposPaciente = {
    alergias: Alergia[];
    enfermedades: Enfermedad[];
    medicamentos_actuales: Medicamento[];
    historial_cirugias: Cirugia[];
};

type ArrayName = 'alergias'| 'enfermedades' | 'medicamentos_actuales' | 'historial_cirugias';

type NewField = { id: number; nombre: string; }; // Ajusta según los datos

type PacienteProps = {
    paciente: Paciente;
};

export default function Paciente({ paciente }: PacienteProps) {

    const [pacienteMod, setPacienteMod] = useState({
        id: paciente.id,
        nombre: paciente.nombre,
        apellido: paciente.apellido,
        dni: paciente.dni,
        fecha_nacimiento: paciente.fecha_nacimiento,
        tutor_legal_dni: paciente.tutor_legal_dni,
        numero_telefono: paciente.numero_telefono,
        email: paciente.email,
        tipo_sangre_id: paciente.tipo_sangre_id,

        alergias: paciente.alergias,
        enfermedades: paciente.enfermedades,
        medicamentos_actuales: paciente.medicamentos_actuales,
        historial_cirugias: paciente.historial_cirugias,
        obra_social: paciente.obra_social,

        alergias_eliminar: paciente.alergias_eliminar,
        enfermedades_eliminar: paciente.enfermedades_eliminar,
        medicamentos_actuales_eliminar: paciente.medicamentos_actuales_eliminar,
        historial_cirugias_eliminar: paciente.historial_cirugias_eliminar
    });

    const tipoSangreTexto = tiposSangre.find(tipo => tipo.id === pacienteMod.tipo_sangre_id)?.tipo || "Sin asignar";


    const [isEditing, setIsEditing] = useState(false);
    const [fieldToEdit, setFieldToEdit] = useState<string | null>(null);

    const handleModificarPaciente = async () => {
        console.log(pacienteMod)

        const confirmacion = confirm('¿Estás seguro de que deseas modificar los datos del paciente?');

        if (!confirmacion) return;

        // Objeto con solo los cambios detectados
        const cambios: any = {};

        // Comparaciones simples
        if (pacienteMod.nombre !== paciente.nombre) cambios.nombre = pacienteMod.nombre;
        if (pacienteMod.apellido !== paciente.apellido) cambios.apellido = pacienteMod.apellido;
        if (pacienteMod.dni !== paciente.dni) cambios.dni = pacienteMod.dni;
        if (pacienteMod.fecha_nacimiento !== paciente.fecha_nacimiento) cambios.fecha_nacimiento = pacienteMod.fecha_nacimiento;
        if (pacienteMod.numero_telefono !== paciente.numero_telefono) cambios.numero_telefono = pacienteMod.numero_telefono;
        if (pacienteMod.email !== paciente.email) cambios.email = pacienteMod.email;
        if (pacienteMod.tipo_sangre_id !== paciente.tipo_sangre_id) cambios.tipo_sangre_id = pacienteMod.tipo_sangre_id;

        // Comparación de arrays modificados (evita agregar arrays vacíos)
        if (
            JSON.stringify(pacienteMod.alergias) !== JSON.stringify(paciente.alergias) &&
            pacienteMod.alergias.length > 0
        ) {
            cambios.alergias = pacienteMod.alergias;
        }

        if (
            JSON.stringify(pacienteMod.enfermedades) !== JSON.stringify(paciente.enfermedades) &&
            pacienteMod.enfermedades.length > 0
        ) {
            cambios.enfermedades = pacienteMod.enfermedades;
        }

        if (
            JSON.stringify(pacienteMod.medicamentos_actuales) !== JSON.stringify(paciente.medicamentos_actuales) &&
            pacienteMod.medicamentos_actuales.length > 0
        ) {
            cambios.medicamentos_actuales = pacienteMod.medicamentos_actuales;
        }

        if (
            JSON.stringify(pacienteMod.historial_cirugias) !== JSON.stringify(paciente.historial_cirugias) &&
            pacienteMod.historial_cirugias.length > 0
        ) {
            cambios.historial_cirugias = pacienteMod.historial_cirugias;
        }

        // Eliminar IDs si existen (mantener)
        if ((pacienteMod.alergias_eliminar?.length ?? 0) > 0) {
            cambios.alergias_eliminar = pacienteMod.alergias_eliminar;
        }

        if ((pacienteMod.enfermedades_eliminar?.length ?? 0) > 0) {
            cambios.enfermedades_eliminar = pacienteMod.enfermedades_eliminar;
        }

        if ((pacienteMod.medicamentos_actuales_eliminar?.length ?? 0) > 0) {
            cambios.medicamentos_actuales_eliminar = pacienteMod.medicamentos_actuales_eliminar;
        }

        if ((pacienteMod.historial_cirugias_eliminar?.length ?? 0) > 0) {
            cambios.historial_cirugias_eliminar = pacienteMod.historial_cirugias_eliminar;
        }


        if (Object.keys(cambios).length === 0) {
            alert("No realizaste ningún cambio.");
            return;
        } else {
            console.log("este es cambios", cambios)
        }


        if (confirmacion) {
            try {
                const response = await fetch('/api/modificarpaciente', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: paciente.id,
                        ...cambios,
                    }),
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


    function handleAddField<K extends keyof CamposPaciente>(
        arrayName: K,
        newField: CamposPaciente[K][number]
    ) {
        setPacienteMod((prev) => ({
            ...prev,
            [arrayName]: [...(prev[arrayName] || []), newField],
        }));
        toggleEditField(arrayName);
    }


    const handleRemoveField = (arrayName: ArrayName, indice: number) => {
        setPacienteMod((prevState:any) => {
            const updatedArray = [...prevState[arrayName]];
            const itemToRemove = updatedArray[indice];

            updatedArray.splice(indice, 1); // elimina el item del array

            const deleteKey = `${arrayName}_eliminar` ; // genera la key dinámica

            return {
                ...prevState,
                [arrayName]: updatedArray,
                ...(itemToRemove?.id && {
                    [deleteKey]: [
                        ...(prevState[deleteKey] || []),
                        itemToRemove.id,
                    ],
                }),
            };
        });

        setIsEditing(false);
    };


    const handleInputChangeArray = (e:any, index: number, field: any, arrayName: ArrayName) => {
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
        console.log(id)
        const confirmacion = confirm('¿Estás seguro de que deseas eliminar este paciente? Esta acción no se puede deshacer y eliminará sus consultas asociadas.');

        if (confirmacion) {
            try {
                const response = await fetch('/api/eliminarpaciente', {
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


    const renderField = (
        label: string,
        value: string,
        fieldName: string,
        inputType: "text" | "date" | "time" = "text"
    ) => (
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">{label}</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {fieldToEdit === fieldName ? (
                    <div className="flex items-center gap-2">
                        <input
                            type={inputType}
                            name={fieldName}
                            value={value}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded-lg py-1 px-2"
                        />
                        <button
                            onClick={() => setFieldToEdit(null)}
                            className="text-sm text-red-600 hover:underline"
                        >
                            <CancelIcon size={6} strokeWidth={1.25} />
                        </button>
                    </div>
                ) : (
                    <>
                        {value}
                        <button
                            className="ml-2 bg-blue-100 py-1 px-2 rounded-lg hover:text-blue-600"
                            onClick={() => setFieldToEdit(fieldName)}
                        >
                            <PencilIcon size={4} strokeWidth={2} />
                        </button>
                    </>
                )}
            </dd>
        </div>
    );

    return (
        <div key={paciente.dni}>
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Información del Paciente</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-blue-500">Información personal y contacto</p>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">

                    {renderField("Nombre", pacienteMod.nombre, "nombre")}
                    {renderField("Apellido", pacienteMod.apellido, "apellido")}
                    {renderField("DNI", pacienteMod.dni, "dni")}
                    {renderField("Fecha de Nacimiento", new Date(pacienteMod.fecha_nacimiento).toLocaleDateString("es-AR", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                    }), "fecha_nacimiento", "date")}
                    {renderField("Telefono", pacienteMod.numero_telefono, "numero_telefono")}
                    {renderField("Email", pacienteMod.email, "email")}


                    {/* Información médica */}
                    <div className="px-4 sm:px-0">
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-blue-500">Historial médico</p>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Tipo sanguíneo</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {isEditing && fieldToEdit === "tipo_sangre_id" ? (
                                <select
                                    name="tipo_sangre_id"
                                    value={pacienteMod.tipo_sangre_id}
                                    onChange={(e) => {
                                        const selectedId = Number(e.target.value);  // 👈 Conversión aquí
                                        setPacienteMod(prev => ({
                                            ...prev,
                                            tipo_sangre_id: selectedId,
                                        }));
                                    }}
                                    className="peer block w-full rounded-md border border-gray-200 py-2 mt-2 text-sm"
                                    required
                                >
                                    <option value="" disabled hidden>Seleccione tipo de sangre</option>
                                    {tiposSangre.map(tipo => (
                                        <option key={tipo.id} value={tipo.id}>{tipo.tipo}</option>
                                    ))}
                                </select>
                            ) : (
                                <>
                                    {tipoSangreTexto}
                                    <button className="mt-2 ml-2 bg-blue-100 py-1 px-2 rounded-lg hover:text-blue-600" onClick={() => toggleEditField("tipo_sangre_id")}>
                                        <PencilIcon size={4} strokeWidth={2} />
                                    </button>
                                </>
                            )}
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Alergias</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {pacienteMod.alergias && pacienteMod.alergias.length > 0 ? (
                                pacienteMod.alergias.map((alergia, index) => (
                                    <div key={index} className="mb-4">
                                        {isEditing && fieldToEdit === "alergias" ? (
                                            <>
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="text"
                                                        name={`alergia_nombre_${index}`}
                                                        value={pacienteMod.alergias[index]?.alergia || ''}
                                                        onChange={(e) => handleInputChangeArray(e, index, 'alergia', 'alergias')}  // Pasa 'alergias' como arrayName
                                                        className="border border-gray-300 rounded-lg p-2"
                                                    />
                                                    <button
                                                        onClick={() => setIsEditing(false)}
                                                        className="text-sm px-2 text-red-600 hover:underline"
                                                    >
                                                        <CancelIcon size={6} strokeWidth={1.25} />
                                                    </button>
                                                </div>
                                                <br />
                                                <button className="mt-2 ml-2 bg-blue-100 py-1 px-2 rounded-lg hover:text-blue-600" onClick={() => handleAddField("alergias", { alergia: '' })}>Añadir</button>
                                                <button className="mt-2 ml-2 bg-red-100 py-1 px-2 rounded-lg hover:text-red-600" onClick={() => handleRemoveField("alergias", index)}>Eliminar</button>
                                            </>

                                        ) : (
                                            <>
                                                {alergia.alergia}
                                                <button className="mt-2 ml-2 bg-blue-100 py-1 px-2 rounded-lg hover:text-blue-600" onClick={() => toggleEditField("alergias")}>
                                                    <PencilIcon size={4} strokeWidth={2} />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <div className="mb-4">
                                    {isEditing && fieldToEdit === "alergias" ? (
                                        <input
                                            type="text"
                                            name="alergia"
                                            value={pacienteMod.alergias[pacienteMod.alergias.length - 1]?.alergia || ''}
                                            onChange={(e) => handleInputChangeArray(e, pacienteMod.alergias.length - 1, 'alergia', 'alergias')}
                                            className="border border-gray-300 rounded-lg p-2"
                                            placeholder="Alergia"
                                        />
                                    ) : (
                                        <>
                                            <p>No hay alergias registradas</p>
                                            <button className="mt-2 ml-2 bg-blue-100 py-1 px-2 rounded-lg hover:text-blue-600" onClick={() => handleAddField("alergias", { alergia: '' })}>Añadir</button>
                                        </>
                                    )}
                                </div>
                            )}
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Enfermedades</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {pacienteMod.enfermedades && pacienteMod.enfermedades.length > 0 ? (
                                pacienteMod.enfermedades.map((enfermedad, index) => (
                                    <div key={index} className="mb-4">
                                        {isEditing && fieldToEdit === "enfermedades" ? (
                                            <>
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="text"
                                                        name={`enfermedad-${index}`}
                                                        value={pacienteMod.enfermedades[index]?.enfermedad || ''}
                                                        onChange={(e) => handleInputChangeArray(e, index, 'enfermedad', 'enfermedades')}
                                                        className="border border-gray-300 rounded-lg p-2"
                                                        placeholder="Enfermedad"
                                                    />
                                                    <button
                                                        onClick={() => setIsEditing(false)}
                                                        className="text-sm px-2 text-red-600 hover:underline"
                                                    >
                                                        <CancelIcon size={6} strokeWidth={1.25} />
                                                    </button>
                                                </div>

                                                <br />
                                                <button className="mt-2 ml-2 bg-blue-100 py-1 px-2 rounded-lg hover:text-blue-600" onClick={() => handleAddField("enfermedades", { enfermedad: '' })}>Añadir</button>
                                                <button className="mt-2 ml-2 bg-red-100 py-1 px-2 rounded-lg hover:text-red-600" onClick={() => handleRemoveField("enfermedades", index)}>Eliminar</button>
                                            </>

                                        ) : (
                                            <>
                                                {enfermedad.enfermedad}
                                                <button className="mt-2 ml-2 bg-blue-100 py-1 px-2 rounded-lg hover:text-blue-600" onClick={() => toggleEditField("enfermedades")}>
                                                    <PencilIcon size={4} strokeWidth={2} />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <div className="mb-4">
                                    {isEditing && fieldToEdit === "enfermedades" ? (
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="text"
                                                name="enfermedad"
                                                value={pacienteMod.enfermedades[pacienteMod.enfermedades.length - 1]?.enfermedad}
                                                onChange={(e) => handleInputChangeArray(e, pacienteMod.enfermedades.length - 1, 'enfermedad', 'enfermedades')}
                                                className="border border-gray-300 rounded-lg p-2"
                                                placeholder="Enfermedad"
                                            />
                                            <button
                                                onClick={() => setIsEditing(false)}
                                                className="text-sm px-2 text-red-600 hover:underline"
                                            >
                                                <CancelIcon size={6} strokeWidth={1.25} />
                                            </button>
                                        </div>

                                    ) : (
                                        <>
                                            <p>No hay enfermedades registradas</p>
                                            <button className="mt-2 ml-2 bg-blue-100 py-1 px-4 rounded-lg hover:text-blue-600" onClick={() => handleAddField("enfermedades", { enfermedad: '' })}>Añadir</button>
                                        </>
                                    )}
                                </div>
                            )}
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Medicacion</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {pacienteMod.medicamentos_actuales && pacienteMod.medicamentos_actuales.length > 0 ? (
                                pacienteMod.medicamentos_actuales.map((medicamento, index) => (
                                    <div key={index} className="mb-4">
                                        {isEditing && fieldToEdit === `medicamentos_actuales` ? (
                                            <>
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="text"
                                                        name={`medicamento_nombre_${index}`}
                                                        value={pacienteMod.medicamentos_actuales[index]?.medicamento || ''}
                                                        onChange={(e) => handleInputChangeArray(e, index, 'medicamento', 'medicamentos_actuales')}
                                                        className="border border-gray-300 rounded-lg p-2"
                                                        placeholder="Nombre"
                                                    />
                                                    <button
                                                        onClick={() => setFieldToEdit(null)}
                                                        className="text-sm px-2 text-red-600 hover:underline"
                                                    >
                                                        <CancelIcon size={6} strokeWidth={1.25} />
                                                    </button>
                                                </div>
                                                <div>
                                                    <input
                                                        type="text"
                                                        name={`medicamento_dosis_${index}`}
                                                        value={pacienteMod.medicamentos_actuales[index]?.dosis || ''}
                                                        onChange={(e) => handleInputChangeArray(e, index, 'dosis', 'medicamentos_actuales')}
                                                        className="border border-gray-300 rounded-lg p-2"
                                                        placeholder="Dosis"
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                        type="text"
                                                        name={`medicamento_frecuencia_${index}`}
                                                        value={pacienteMod.medicamentos_actuales[index]?.frecuencia || ''}
                                                        onChange={(e) => handleInputChangeArray(e, index, 'frecuencia', 'medicamentos_actuales')}
                                                        className="border border-gray-300 rounded-lg p-2"
                                                        placeholder="Frecuencia"
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                        type="text"
                                                        name={`medicamento_via_${index}`}
                                                        value={pacienteMod.medicamentos_actuales[index]?.via_administracion || ''}
                                                        onChange={(e) => handleInputChangeArray(e, index, 'via_administracion', 'medicamentos_actuales')}
                                                        className="border border-gray-300 rounded-lg p-2"
                                                        placeholder="Via de administracion"
                                                    />
                                                </div>
                                                <button
                                                    className="mt-2 ml-2 bg-blue-100 py-1 px-2 rounded-lg hover:text-blue-600"
                                                    onClick={() => handleAddField("medicamentos_actuales", { medicamento: '', dosis: '', frecuencia: '', via_administracion: '' })} // Añadir medicamento
                                                >
                                                    Añadir
                                                </button>
                                                <button
                                                    className="mt-2 ml-2 bg-red-100 py-1 px-2 rounded-lg hover:text-red-600"
                                                    onClick={() => handleRemoveField("medicamentos_actuales", index)} // Eliminar medicamento
                                                >
                                                    Eliminar
                                                </button>

                                            </>
                                        ) : (
                                            <>
                                                <strong>Nombre:</strong> {medicamento.medicamento}
                                                <button
                                                    className="mt-2 ml-2 bg-blue-100 py-1 px-4 rounded-lg hover:text-blue-600"
                                                    onClick={() => toggleEditField(`medicamentos_actuales`)} // Activar modo de edición
                                                >
                                                    <PencilIcon size={4} strokeWidth={2} />
                                                </button> <br />
                                                <strong>Dosis:</strong> {medicamento.dosis} <br />
                                                <strong>Frecuencia:</strong> {medicamento.frecuencia} <br />
                                                <strong>Vía de administración:</strong> {medicamento.via_administracion}
                                            </>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <div className="mb-4">
                                    {isEditing && fieldToEdit === `medicamentos_actuales` ? (
                                        <>
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="text"
                                                    name="medicamento"
                                                    value={pacienteMod.medicamentos_actuales[pacienteMod.medicamentos_actuales.length - 1]?.medicamento || ''}
                                                    onChange={(e) => handleInputChangeArray(e, pacienteMod.medicamentos_actuales.length - 1, 'medicamento', 'medicamentos_actuales')}
                                                    className="border border-gray-300 rounded-lg p-2"
                                                    placeholder="Nombre"
                                                />
                                                <button
                                                    onClick={() => setFieldToEdit(null)}
                                                    className="text-sm px-2 text-red-600 hover:underline"
                                                >
                                                    <CancelIcon size={6} strokeWidth={1.25} />
                                                </button>
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="dosis"
                                                    value={pacienteMod.medicamentos_actuales[pacienteMod.medicamentos_actuales.length - 1]?.dosis || ''}
                                                    onChange={(e) => handleInputChangeArray(e, pacienteMod.medicamentos_actuales.length - 1, 'dosis', 'medicamentos_actuales')}
                                                    className="border border-gray-300 rounded-lg p-2"
                                                    placeholder="Dosis"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="frecuencia"
                                                    value={pacienteMod.medicamentos_actuales[pacienteMod.medicamentos_actuales.length - 1]?.frecuencia || ''}
                                                    onChange={(e) => handleInputChangeArray(e, pacienteMod.medicamentos_actuales.length - 1, 'frecuencia', 'medicamentos_actuales')}
                                                    className="border border-gray-300 rounded-lg p-2"
                                                    placeholder="Frecuencia"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="via_administracion"
                                                    value={pacienteMod.medicamentos_actuales[pacienteMod.medicamentos_actuales.length - 1]?.via_administracion || ''}
                                                    onChange={(e) => handleInputChangeArray(e, pacienteMod.medicamentos_actuales.length - 1, 'via_administracion', 'medicamentos_actuales')}
                                                    className="border border-gray-300 rounded-lg p-2"
                                                    placeholder="Via de administracion"
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <p>No hay medicacion registrada</p>
                                            <button className="mt-2 ml-2 bg-blue-100 py-1 px-4 rounded-lg hover:text-blue-600" onClick={() => handleAddField("medicamentos_actuales", { medicamento: '', dosis: '', frecuencia: '', via_administracion: '' })}>Añadir</button>
                                        </>
                                    )}
                                </div>
                            )}
                        </dd>
                    </div>


                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Cirugias</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {pacienteMod.historial_cirugias && pacienteMod.historial_cirugias.length > 0 ? (
                                pacienteMod.historial_cirugias.map((cirugia, index) => (
                                    <div key={index} className="mb-4">
                                        {isEditing && fieldToEdit === "historial_cirugias" ? (
                                            <>
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="text"
                                                        name={`cirugia_${index}`}
                                                        value={pacienteMod.historial_cirugias[index]?.cirugia || ''}
                                                        onChange={(e) => handleInputChangeArray(e, index, 'cirugia', 'historial_cirugias')}
                                                        className="border border-gray-300 rounded-lg p-2"
                                                        placeholder="Nombre de la cirugía"
                                                    />
                                                    <button
                                                        onClick={() => setFieldToEdit(null)}
                                                        className="text-sm px-2 text-red-600 hover:underline"
                                                    >
                                                        <CancelIcon size={6} strokeWidth={1.25} />
                                                    </button>
                                                </div>
                                                <div>
                                                    <input
                                                        type="date"
                                                        name={`fecha_${index}`}
                                                        value={pacienteMod.historial_cirugias[index]?.fecha || ''}
                                                        onChange={(e) => handleInputChangeArray(e, index, 'fecha', 'historial_cirugias')}
                                                        className="border border-gray-300 rounded-lg p-2"
                                                        placeholder="fecha"
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                        type="text"
                                                        name={`observaciones_${index}`}
                                                        value={pacienteMod.historial_cirugias[index]?.observaciones || ''}
                                                        onChange={(e) => handleInputChangeArray(e, index, 'observaciones', 'historial_cirugias')}
                                                        className="border border-gray-300 rounded-lg p-2"
                                                        placeholder="Observaciones"
                                                    />
                                                </div>
                                                <button
                                                    className="mt-2 ml-2 bg-blue-100 py-1 px-2 rounded-lg hover:text-blue-600"
                                                    onClick={() => handleAddField("historial_cirugias", { cirugia: '', fecha: '', observaciones: '' })} // Añadir cirugía
                                                >
                                                    Añadir
                                                </button>
                                                <button
                                                    className="mt-2 ml-2 bg-red-100 py-1 px-2 rounded-lg hover:text-red-600"
                                                    onClick={() => handleRemoveField("historial_cirugias", index)} // Eliminar cirugía
                                                >
                                                    Eliminar
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <strong>Cirugía:</strong> {cirugia.cirugia}
                                                <button
                                                    className="mt-2 ml-2 bg-blue-100 py-1 px-4 rounded-lg hover:text-blue-600"
                                                    onClick={() => toggleEditField("historial_cirugias")} // Activar modo de edición
                                                >
                                                    <PencilIcon size={4} strokeWidth={2} />
                                                </button> <br />
                                                <strong>Fecha:</strong> {cirugia.fecha} <br />
                                                <strong>Observaciones:</strong> {cirugia.observaciones} <br />
                                            </>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <div className="mb-4">
                                    {isEditing && fieldToEdit === "historial_cirugias" ? (
                                        <>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="cirugia"
                                                    value={pacienteMod.historial_cirugias[pacienteMod.historial_cirugias.length - 1]?.cirugia || ''}
                                                    onChange={(e) => handleInputChangeArray(e, pacienteMod.historial_cirugias.length - 1, 'cirugia', 'historial_cirugias')}
                                                    className="border border-gray-300 rounded-lg p-2"
                                                    placeholder="Nombre de la cirugía"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="date"
                                                    name="fecha"
                                                    value={pacienteMod.historial_cirugias[pacienteMod.historial_cirugias.length - 1]?.fecha || ''}
                                                    onChange={(e) => handleInputChangeArray(e, pacienteMod.historial_cirugias.length - 1, 'fecha', 'historial_cirugias')}
                                                    className="border border-gray-300 rounded-lg p-2"
                                                    placeholder="fecha"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="observaciones"
                                                    value={pacienteMod.historial_cirugias[pacienteMod.historial_cirugias.length - 1]?.observaciones || ''}
                                                    onChange={(e) => handleInputChangeArray(e, pacienteMod.historial_cirugias.length - 1, 'observaciones', 'historial_cirugias')}
                                                    className="border border-gray-300 rounded-lg p-2"
                                                    placeholder="Observaciones"
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <p>No hay cirugías registradas</p>
                                            <button
                                                className="mt-2 ml-2 bg-blue-100 py-1 px-4 rounded-lg hover:text-blue-600"
                                                onClick={() => handleAddField("historial_cirugias", { cirugia: '', fecha: '', observaciones: '' })}
                                            >
                                                Añadir
                                            </button>
                                        </>
                                    )}
                                </div>
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
                            {paciente.consultas && paciente.consultas.length > 0 ? (
                                paciente.consultas.map((consulta, index) => (
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
                            onClick={() => handleEliminarPaciente(paciente.id)}
                        >
                            Eliminar paciente
                        </button>
                        <button
                            className="bg-blue-500 h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600"
                            onClick={handleModificarPaciente}
                        >
                            Guardar datos
                        </button>
                    </div>
                </dl>
            </div>
        </div>
    );
}
