import { NextResponse } from 'next/server'
import { PrismaClient } from '@/generated/prisma'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const consultas = await prisma.consultas.findMany({
      select: {
        id: true,
        fecha_consulta: true,
        hora_consulta: true,
        motivo: true,
        diagnostico: true,
        tratamiento: true,
        pacientes: {
          select: {
            nombre: true,
            apellido: true,
          },
        },
      },
      orderBy: {
        fecha_consulta: 'desc',
      },
    });

    return NextResponse.json(consultas);
  } catch (error) {
    console.error('Error al obtener consultas:', error);
    return new NextResponse('Error interno del servidor', { status: 500 });
  }
}
