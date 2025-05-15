// app/api/eliminarpaciente/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from '@/generated/prisma'

const prisma = new PrismaClient()

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: "ID requerido" }, { status: 400 });
    }

    // Primero eliminamos registros relacionados
    await prisma.alergias.deleteMany({ where: { paciente_id: id } });
    await prisma.enfermedades.deleteMany({ where: { paciente_id: id } });
    await prisma.medicamentos_actuales.deleteMany({ where: { paciente_id: id } });
    await prisma.historial_cirugias.deleteMany({ where: { paciente_id: id } });
    await prisma.contactos_emergencia.deleteMany({ where: { paciente_id: id } });
    await prisma.consultas.deleteMany({ where: { paciente_id: id } });

    // Finalmente, eliminamos el paciente
    await prisma.pacientes.delete({ where: { id } });

    return NextResponse.json({ message: "Paciente eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar paciente:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
