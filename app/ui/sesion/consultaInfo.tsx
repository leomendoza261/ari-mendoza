"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import PencilIcon from "../icons/pencil";
import CancelIcon from "../icons/CancelIcon"

type Sesion = {
    id: number;
    consulta_id: number;
    paciente_id: number;
    dni: string;
    fecha_consulta: string;
    hora_consulta: string;
    motivo: string;
    diagnostico: string;
    tratamiento: string;
    notas: string;
    pacientes: {
        nombre: string;
        apellido: string;
    };
};

type Props = {
    sesion: Sesion;
};

export default function ConsultaInfo({ sesion }: Props) {
    const [sesionMod, setSesionMod] = useState({
        paciente_id: sesion.paciente_id,
        nombre: sesion.pacientes.nombre,
        apellido: sesion.pacientes.apellido,
        dni: sesion.dni,
        fecha_consulta: sesion.fecha_consulta,
        hora_consulta: sesion.hora_consulta,
        motivo: sesion.motivo,
        diagnostico: sesion.diagnostico,
        tratamiento: sesion.tratamiento,
        notas: sesion.notas
    });

    const [fieldToEdit, setFieldToEdit] = useState<string | null>(null);

    const handleModificarConsulta = async () => {

        const confirmacion = confirm("¿Deseás guardar los cambios de la consulta?");
        if (!confirmacion) return;

        // Objeto con solo los cambios detectados
        const cambios: any = {};
        if (sesionMod.fecha_consulta !== sesion.fecha_consulta) cambios.fecha_consulta = sesionMod.fecha_consulta;
        if (sesionMod.hora_consulta !== sesion.hora_consulta) cambios.hora_consulta = sesionMod.hora_consulta;
        if (sesionMod.motivo !== sesion.motivo) cambios.motivo = sesionMod.motivo;
        if (sesionMod.diagnostico !== sesion.diagnostico) cambios.diagnostico = sesionMod.diagnostico;
        if (sesionMod.tratamiento !== sesion.tratamiento) cambios.tratamiento = sesionMod.tratamiento;
        if (sesionMod.notas !== sesion.notas) cambios.notas = sesionMod.notas;

        if (Object.keys(cambios).length === 0) {
            alert("No realizaste ningún cambio.");
            return;
        } else {
            console.log(cambios)
        }

        try {
            const response = await fetch("/api/modificarconsulta", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: sesion.id,
                    ...cambios,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message || "Consulta actualizada con éxito.");
                setFieldToEdit(null);
            } else {
                alert(data.error || "Ocurrió un error al modificar.");
            }
        } catch (error) {
            console.error("Error al modificar consulta:", error);
        }
    };


    const handleEliminarConsulta = async () => {
        const confirmacion = confirm("¿Deseás eliminar esta consulta? Esta acción no se puede deshacer.");
        if (!confirmacion) return;

        try {
            const response = await fetch("/api/eliminarconsulta", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: sesion.consulta_id }),
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message || "Consulta eliminada.");
            } else {
                alert(data.error || "Error al eliminar la consulta.");
            }
        } catch (error) {
            console.error("Error al eliminar consulta:", error);
        }
    };

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSesionMod((prev) => ({
            ...prev,
            [name]: value,
        }));
    }, []);

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
                            className="border border-gray-300 py-1 px-2"
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
        <div className="max-w-2xl mx-auto">
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                    Consulta N° {sesion.id}
                </h3>
                <p className="mt-1 text-sm leading-6 text-blue-500">Información de la consulta</p>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Nombre Completo</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <Link
                                    href={`/dashboard/pacientes/${sesion.paciente_id}`}
                                    className="hover:text-blue-500"
                                >
                                    {sesionMod.nombre} {sesionMod.apellido}
                                </Link>
                            </dd>
                        </div>

                        {renderField("Fecha", sesionMod.fecha_consulta, "fecha_consulta", "date")}
                        {renderField("Hora", sesionMod.hora_consulta, "hora_consulta", "time")}
                        {renderField("Motivo", sesionMod.motivo, "motivo")}
                        {renderField("Diagnóstico", sesionMod.diagnostico, "diagnostico")}
                        {renderField("Tratamiento", sesionMod.tratamiento, "tratamiento")}
                        {renderField("Notas", sesionMod.notas, "notas")}
                    </dl>
                </div>

                <div className="mt-6 flex gap-4">
                    <button
                        onClick={handleModificarConsulta}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Guardar Cambios
                    </button>
                    <button
                        onClick={handleEliminarConsulta}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Eliminar Consulta
                    </button>
                </div>
            </div>
        </div>
    );
}
