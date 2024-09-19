import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function AgregarPacienteHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const paciente = req.body;

        try {
            // Inicia la transacción manualmente en SQL
            await sql`BEGIN`;

            // Inserta el paciente principal
            const result = await sql`
                INSERT INTO Pacientes (dni, nombre, apellido, tipo_sangre_id, fecha_nacimiento, numero_telefono, email, obra_social, tutor_legal_id)
                VALUES (
                    ${paciente.dni || null}, 
                    ${paciente.nombre}, 
                    ${paciente.apellido}, 
                    ${paciente.tipo_sanguineo || null}, 
                    ${paciente.fecha_nacimiento || null}, 
                    ${paciente.telefono || null}, 
                    ${paciente.email || null}, 
                    ${paciente.obra_social || null}, 
                    ${paciente.tutor_legal_dni || null}
                )
                RETURNING id;
            `;

            // Verifica si el resultado tiene filas
            if (!result.rows || result.rows.length === 0) {
                throw new Error('No se pudo obtener el ID del paciente insertado');
            }

            // Obtener el ID del paciente recién creado
            const nuevoPacienteId = result.rows[0]?.id;

            // Inserta alergias
            if (paciente.alergias && paciente.alergias.length > 0) {
                for (const alergia of paciente.alergias) {
                    await sql`
                        INSERT INTO Alergias (paciente_id, alergia)
                        VALUES (${nuevoPacienteId}, ${alergia.alergia});
                    `;
                }
            }

            // Inserta enfermedades
            if (paciente.enfermedades && paciente.enfermedades.length > 0) {
                for (const enfermedad of paciente.enfermedades) {
                    // Verifica que 'enfermedad' no sea nulo o vacío
                    if (enfermedad.enfermedad) {
                        await sql`
                            INSERT INTO Enfermedades (paciente_id, enfermedad)
                            VALUES (${nuevoPacienteId}, ${enfermedad.enfermedad});
                        `;
                    } else {
                        console.warn('Se intentó insertar una enfermedad nula o vacía');
                    }
                }
            }

            // Inserta medicamentos
            if (paciente.medicamentos && paciente.medicamentos.length > 0) {
                for (const medicamento of paciente.medicamentos) {
                    await sql`
                        INSERT INTO Medicamentos_actuales (paciente_id, medicamento, dosis, frecuencia, via_administracion)
                        VALUES (${nuevoPacienteId}, ${medicamento.medicamento}, ${medicamento.dosis}, ${medicamento.frecuencia}, ${medicamento.via});
                    `;
                }
            }

            // Inserta cirugías previas
            if (paciente.cirugias_previas && paciente.cirugias_previas.length > 0) {
                for (const cirugia of paciente.cirugias_previas) {
                    await sql`
                        INSERT INTO CirugiasPrevias (paciente_id, cirugia, fecha, observaciones)
                        VALUES (${nuevoPacienteId}, ${cirugia.cirugia}, ${cirugia.fecha || null}, ${cirugia.observaciones || null});
                    `;
                }
            }

            // Si todo sale bien, confirma la transacción
            await sql`COMMIT`;

            // Respuesta exitosa
            return res.status(200).json({ message: 'Paciente y sus datos médicos añadidos correctamente' });

        } catch (error) {
            // Si ocurre un error, se revierte la transacción manualmente
            await sql`ROLLBACK`;

            console.error('Error al insertar el paciente y sus datos médicos:', error);
            return res.status(500).json({ error: 'Error al insertar el paciente y sus datos médicos' });
        }
    } else {
        // Método no permitido
        return res.status(405).json({ error: 'Método no permitido, use POST' });
    }
}
