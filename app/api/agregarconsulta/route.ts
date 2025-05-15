import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma' 

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    const {
      dni,
      fecha_consulta,
      hora_consulta,
      motivo,
      diagnostico,
      tratamiento,
    } = await req.json();

    // Buscar paciente por DNI
    const paciente = await prisma.pacientes.findUnique({
      where: { dni },
    });

    if (!paciente) {
      return NextResponse.json({ error: 'Paciente no encontrado' }, { status: 404 });
    }

    // Unir fecha y hora para `hora_consulta`
    const fechaHora = new Date(`${fecha_consulta}T${hora_consulta}`);

    const nuevaConsulta = await prisma.consultas.create({
      data: {
        paciente_id: paciente.id,
        fecha_consulta: new Date(fecha_consulta),
        hora_consulta: fechaHora,
        motivo,
        diagnostico,
        tratamiento,
      },
    });

    return NextResponse.json(nuevaConsulta, { status: 201 });
  } catch (error) {
    console.error('Error en agregarconsulta:', error);
    return NextResponse.json({ error: 'Error al agregar la consulta' }, { status: 500 });
  }
}
