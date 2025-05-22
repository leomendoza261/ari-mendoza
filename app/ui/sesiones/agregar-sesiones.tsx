'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';

export default function AgregarSesion() {
    const [consulta, setConsulta] = useState({
        dni: '',
        fecha_consulta: '',
        hora_consulta: '',
        motivo: '',
        diagnostico: '',
        tratamiento: '',
        archivos: [] as File[], // Añadimos explícitamente el tipo
    });

    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setConsulta((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            setConsulta((prev) => ({
                ...prev,
                archivos: Array.from(files),
            }));
        }
    };


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        if (!form.checkValidity()) {
            return;
        }

        try {
            const response = await fetch('/api/agregarconsulta', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...consulta,
                    archivos: undefined, // No se envían por ahora
                }),
            });

            const result = await response.json();
            if (response.ok) {
                setModalMessage('Consulta agregada con éxito');
            } else {
                setModalMessage(`Error al agregar la consulta: ${result.error}`);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                setModalMessage('Error al enviar los datos: ' + error.message);
            } else {
                setModalMessage('Ocurrió un error desconocido');
            }
        }

        setModalVisible(true);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto bg-white p-1">
            <h2 className="text-blue-500 text-xl text-center mb-4">Consulta</h2>
            <input
                type="text"
                name="dni"
                value={consulta.dni}
                onChange={handleChange}
                placeholder="DNI"
                required
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 mt-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <div className="flex justify-between mt-2">
                <input
                    type="date"
                    name="fecha_consulta"
                    value={consulta.fecha_consulta}
                    onChange={handleChange}
                    required
                    className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                />
                <input
                    type="time"
                    name="hora_consulta"
                    value={consulta.hora_consulta}
                    onChange={handleChange}
                    required
                    className="peer block w-[48%] cursor-pointer rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                />
            </div>
            <input
                type="text"
                name="motivo"
                value={consulta.motivo}
                onChange={handleChange}
                placeholder="Motivo consulta"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 mt-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <input
                type="text"
                name="diagnostico"
                value={consulta.diagnostico}
                onChange={handleChange}
                placeholder="Diagnóstico"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 mt-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <input
                type="text"
                name="tratamiento"
                value={consulta.tratamiento}
                onChange={handleChange}
                placeholder="Tratamiento"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 mt-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />

            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adjuntar archivos (opcional)
                </label>
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
            </div>

            <div className="flex justify-end mt-4">
                <button
                    type="submit"
                    className="h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
                    Guardar
                </button>
            </div>

            {modalVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <p>{modalMessage}</p>
                        <button
                            onClick={() => setModalVisible(false)}
                            className="mt-2 bg-blue-600 text-white py-1 px-4 rounded-md hover:bg-blue-700"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </form>
    );
}
