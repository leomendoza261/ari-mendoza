import { NextResponse } from "next/server";
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, ...rest } = body;

    if (!id) {
      return NextResponse.json(
        { error: "El campo 'id' es obligatorio." },
        { status: 400 }
      );
    }

    // Preparamos el objeto data con los campos válidos y presentes
    const data: any = {};

    if (rest.paciente_id !== undefined) data.paciente_id = rest.paciente_id;
    if (rest.fecha_consulta !== undefined) data.fecha_consulta = new Date(rest.fecha_consulta);
    if (rest.hora_consulta !== undefined) data.hora_consulta = new Date(`1970-01-01T${rest.hora_consulta}Z`);
    if (rest.motivo !== undefined) data.motivo = rest.motivo;
    if (rest.diagnostico !== undefined) data.diagnostico = rest.diagnostico;
    if (rest.tratamiento !== undefined) data.tratamiento = rest.tratamiento;
    if (rest.imagenes !== undefined) data.imagenes = rest.imagenes;
    if (rest.notas !== undefined) data.notas = rest.notas;

    const consulta = await prisma.consultas.update({
      where: { id },
      data,
    });

    return NextResponse.json({ success: true, consulta });
  } catch (error) {
    console.error("Error al actualizar la consulta:", error);
    return NextResponse.json(
      { error: "Error al actualizar la consulta" },
      { status: 500 }
    );
  }
}
