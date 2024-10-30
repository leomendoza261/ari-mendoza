import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function EliminarConsultaHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'DELETE') {
        const { id } = req.body; // Supongamos que recibes el id de la consulta en el body

        console.log('Cuerpo de la solicitud:', req.body);

        // Validar si el id de la consulta está presente
        if (!id) {
            return res.status(400).json({ error: 'ID de consulta no proporcionado' });
        }

        try {
            // Iniciar la transacción manualmente en SQL
            await sql`BEGIN`;

            // Eliminar la consulta de la tabla basado en el id
            const result = await sql`
                DELETE FROM Consultas
                WHERE id = ${id}
                RETURNING *;
            `;

            // Verificar si se eliminó alguna fila
            if (result.rowCount === 0) {
                throw new Error('Consulta no encontrada');
            }

            // Confirmar la transacción si todo sale bien
            await sql`COMMIT`;

            // Responder con éxito
            return res.status(200).json({ message: 'Consulta eliminada correctamente' });

        } catch (error) {
            // Revertir la transacción si ocurre un error
            await sql`ROLLBACK`;

            console.error('Error al eliminar la consulta:', error);
            return res.status(500).json({ error: 'Error al eliminar la consulta' });
        }
    } else {
        // Método no permitido
        return res.status(405).json({ error: 'Método no permitido, use DELETE' });
    }
}
