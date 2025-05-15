import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma'

const prisma = new PrismaClient()
export async function DELETE(req: NextRequest) {
    try {
        const { id } = await req.json();

        if (!id) {
            return NextResponse.json({ error: 'ID de consulta no proporcionado' }, { status: 400 });
        }

        // Verificamos si la consulta existe
        const consulta = await prisma.consultas.findUnique({ where: { id } });

        if (!consulta) {
            return NextResponse.json({ error: 'Consulta no encontrada' }, { status: 404 });
        }

        // Eliminamos la consulta
        await prisma.consultas.delete({ where: { id } });

        return NextResponse.json({ message: 'Consulta eliminada correctamente' }, { status: 200 });
    } catch (error) {
        console.error('Error al eliminar consulta:', error);
        return NextResponse.json({ error: 'Error al eliminar la consulta' }, { status: 500 });
    }
}
