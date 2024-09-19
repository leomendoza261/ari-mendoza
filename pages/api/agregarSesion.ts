import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function AgregarConsultaHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { dni, nombre, apellido, fecha_consulta, hora_consulta, motivo, diagnostico, tratamiento } = req.body;

        // Log para depuración
        console.log('Cuerpo de la solicitud:', req.body);

        // Validar si los campos necesarios están presentes
        if (!dni || !nombre || !apellido || !fecha_consulta || !hora_consulta) {
            return res.status(400).json({ error: 'Datos de consulta incompletos' });
        }

        try {
            // Inicia la transacción manualmente en SQL
            await sql`BEGIN`;

            // Recupera el ID del paciente basado en DNI, nombre y apellido
            const pacienteResult = await sql`
                SELECT id FROM Pacientes
                WHERE dni = ${dni} OR (nombre = ${nombre} AND apellido = ${apellido})
                LIMIT 1;
            `;

            if (!pacienteResult.rows || pacienteResult.rows.length === 0) {
                throw new Error('Paciente no encontrado');
            }

            const pacienteId = pacienteResult.rows[0].id;

            // Inserta la nueva consulta
            await sql`
                INSERT INTO Consultas (
                    paciente_id, 
                    fecha_consulta, 
                    hora_consulta, 
                    motivo, 
                    diagnostico, 
                    tratamiento, 
                    imagenes, 
                    notas
                )
                VALUES (
                    ${pacienteId}, 
                    ${fecha_consulta}, 
                    ${hora_consulta}, 
                    ${motivo || null}, 
                    ${diagnostico || null}, 
                    ${tratamiento || null}, 
                    ${null},  
                    ${null}  
                );
            `;

            // Si todo sale bien, confirma la transacción
            await sql`COMMIT`;

            // Respuesta exitosa
            return res.status(200).json({ message: 'Consulta añadida correctamente' });

        } catch (error) {
            // Si ocurre un error, se revierte la transacción manualmente
            await sql`ROLLBACK`;

            console.error('Error al añadir la consulta:', error);
            return res.status(500).json({ error: 'Error al añadir la consulta' });
        }
    } else {
        // Método no permitido
        return res.status(405).json({ error: 'Método no permitido, use POST' });
    }
}
