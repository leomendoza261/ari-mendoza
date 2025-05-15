// app/api/pacientes/route.ts
import { NextResponse } from 'next/server'
import { PrismaClient } from '@/generated/prisma' 

const prisma = new PrismaClient()

export async function GET() {
  try {
    const pacientes = await prisma.pacientes.findMany({
  select: {
    id: true,
    dni: true,
    nombre: true,
    apellido: true,
  },
});

    return NextResponse.json(pacientes)
  } catch (error) {
    console.error('Error al obtener pacientes:', error)
    return new NextResponse('Error interno del servidor', { status: 500 })
  }
}
