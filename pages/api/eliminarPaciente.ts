import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function EliminarPacienteHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'DELETE') {
        const {id } = req.body; // Suponiendo que el DNI del paciente se envía en el body

        // Validar si el DNI está presente
        if (!id)  {
            return res.status(400).json({ error: 'Datos del paciente no proporcionado' });
        }

        try {
            // Iniciar la transacción
            await sql`BEGIN`;

            // Obtener el ID del paciente con el DNI proporcionado
            const pacienteResult = await sql`
                SELECT id FROM Pacientes
                WHERE id = ${id}
                LIMIT 1;
            `;

            if (!pacienteResult.rows || pacienteResult.rows.length === 0) {
                throw new Error('Paciente no encontrado');
            }

            const pacienteId = pacienteResult.rows[0].id;

            // Eliminar los registros relacionados en las tablas con referencias al paciente
            await sql`
                DELETE FROM Enfermedades WHERE paciente_id = ${pacienteId};
            `;
            await sql`
                DELETE FROM Alergias WHERE paciente_id = ${pacienteId};
            `;
            await sql`
                DELETE FROM Medicamentos_Actuales WHERE paciente_id = ${pacienteId};
            `;
            await sql`
                DELETE FROM Historial_cirugias WHERE paciente_id = ${pacienteId};
            `;
            await sql`
                DELETE FROM Consultas WHERE paciente_id = ${pacienteId};
            `;
            await sql`
                DELETE FROM Contactos_Emergencia WHERE paciente_id = ${pacienteId};
            `;

            // Finalmente, eliminar el registro del paciente
            await sql`
                DELETE FROM Pacientes WHERE id = ${pacienteId};
            `;

            // Confirmar la transacción si todo salió bien
            await sql`COMMIT`;

            // Responder con éxito
            return res.status(200).json({ message: 'Paciente y sus datos relacionados eliminados correctamente' });

        } catch (error) {
            // Si ocurre un error, hacer rollback de la transacción
            await sql`ROLLBACK`;

            console.error('Error al eliminar el paciente y sus datos:', error);
            return res.status(500).json({ error: 'Error al eliminar el paciente y sus datos' });
        }
    } else {
        // Método no permitido
        return res.status(405).json({ error: 'Método no permitido, use DELETE' });
    }
}
