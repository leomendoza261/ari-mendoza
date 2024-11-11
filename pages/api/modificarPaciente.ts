import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function ModificarPacienteHandler(req: NextApiRequest, res: NextApiResponse) {

    /* console.log(req.body) */

    if (req.method === 'PUT') {
        const { id, nombre, apellido, tipo_sangre_id, fecha_nacimiento, numero_telefono, email, obra_social, tutor_legal_id, alergias, enfermedades, medicamentos, cirugias_previas } = req.body;


        try {
            // Inicia la transacción
            await sql`BEGIN`;

            // Actualiza solo los campos del paciente que han cambiado
            await sql`
                UPDATE Pacientes
                SET 
                    nombre = COALESCE(NULLIF(${nombre}, nombre), nombre),
                    apellido = COALESCE(NULLIF(${apellido}, apellido), apellido),
                    tipo_sangre_id = COALESCE(NULLIF(${tipo_sangre_id}, tipo_sangre_id), tipo_sangre_id),
                    fecha_nacimiento = COALESCE(NULLIF(${fecha_nacimiento}, fecha_nacimiento), fecha_nacimiento),
                    numero_telefono = COALESCE(NULLIF(${numero_telefono}, numero_telefono), numero_telefono),
                    email = COALESCE(NULLIF(${email}, email), email),
                    obra_social = COALESCE(NULLIF(${obra_social}, obra_social), obra_social),
                    tutor_legal_id = COALESCE(NULLIF(${tutor_legal_id}, tutor_legal_id), tutor_legal_id)
                WHERE id = ${id};
            `;

            // Actualiza las alergias del paciente
            if (alergias && alergias.length > 0) {
                for (const alergia of alergias) {
                    // Supongamos que alergia.id es el ID de la alergia que deseas actualizar
                    if (alergia.id) {
                        await sql`
                            UPDATE Alergias
                            SET alergia = ${alergia.alergia}
                            WHERE id = ${alergia.id} AND paciente_id = ${id};
                        `;
                    } else {
                        // Si no existe un ID, se puede insertar como una nueva alergia
                        await sql`
                            INSERT INTO Alergias (paciente_id, alergia)
                            VALUES (${id}, ${alergia.alergia});
                        `;
                    }
                }
            }

            // Actualizar o insertar Enfermedades
            if (enfermedades && enfermedades.length > 0) {
                for (const enfermedad of enfermedades) {
                    if (enfermedad.id) {
                        // Actualizar si existe el ID de la enfermedad
                        await sql`
                            UPDATE Enfermedades
                            SET enfermedad = ${enfermedad.enfermedad}
                            WHERE id = ${enfermedad.id} AND paciente_id = ${id};
                        `;
                    } else {
                        // Insertar nueva enfermedad
                        await sql`
                            INSERT INTO Enfermedades (paciente_id, enfermedad)
                            VALUES (${id}, ${enfermedad.enfermedad});
                        `;
                    }
                }
            }

            // Actualizar o insertar Medicamentos_actuales
            if (medicamentos && medicamentos.length > 0) {
                for (const medicamento of medicamentos) {
                    if (medicamento.id) {
                        // Actualizar si existe el ID del medicamento
                        await sql`
                            UPDATE Medicamentos_actuales
                            SET medicamento = ${medicamento.medicamento}, dosis = ${medicamento.dosis}, frecuencia = ${medicamento.frecuencia}, via_administracion = ${medicamento.via_administracion}
                            WHERE id = ${medicamento.id} AND paciente_id = ${id};
                        `;
                    } else {
                        // Insertar nuevo medicamento
                        await sql`
                            INSERT INTO Medicamentos_actuales (paciente_id, medicamento, dosis, frecuencia, via_administracion)
                            VALUES (${id}, ${medicamento.medicamento}, ${medicamento.dosis}, ${medicamento.frecuencia}, ${medicamento.via_administracion});
                        `;
                    }
                }
            }

            // Actualizar o insertar CirugiasPrevias
            if (cirugias_previas && cirugias_previas.length > 0) {
                for (const cirugia of cirugias_previas) {
                    if (cirugia.id) {
                        // Actualizar si existe el ID de la cirugía
                        await sql`
                            UPDATE CirugiasPrevias
                            SET cirugia = ${cirugia.cirugia}, fecha = ${cirugia.fecha}, observaciones = ${cirugia.observaciones}
                            WHERE id = ${cirugia.id} AND paciente_id = ${id};
                        `;
                    } else {
                        // Insertar nueva cirugía
                        await sql`
                            INSERT INTO CirugiasPrevias (paciente_id, cirugia, fecha, observaciones)
                            VALUES (${id}, ${cirugia.cirugia}, ${cirugia.fecha || null}, ${cirugia.observaciones || null});
                        `;
                    }
                }
            }

            // Finaliza la transacción
            await sql`COMMIT`;

            // Respuesta exitosa
            return res.status(200).json({ message: 'Paciente y sus datos médicos actualizados correctamente' });

        } catch (error) {
            // Si ocurre un error, se revierte la transacción
            await sql`ROLLBACK`;

            console.error('Error al actualizar el paciente y sus datos médicos:', error);
            return res.status(500).json({ error: 'Error al actualizar el paciente y sus datos médicos' });
        }
    } else {
        // Método no permitido
        return res.status(405).json({ error: 'Método no permitido, use PUT' });
    }
}
