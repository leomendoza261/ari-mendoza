import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const consultaId = parseInt(params.id);

    const consulta = await prisma.consultas.findUnique({
      where: { id: consultaId },
      include: {
        pacientes: {
          select: {
            nombre: true,
            apellido: true,
          },
        },
      },
    });

    if (!consulta) {
      return new NextResponse('Consulta no encontrada', { status: 404 });
    }

    return NextResponse.json(consulta);
  } catch (error) {
    console.error('Error al obtener la consulta:', error);
    return new NextResponse('Error interno del servidor', { status: 500 });
  }
}
