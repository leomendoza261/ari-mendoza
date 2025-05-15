import { NextResponse } from "next/server";
import { PrismaClient } from '@/generated/prisma'; 
import type { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }

  const paciente = await prisma.pacientes.findUnique({
    where: { id },
    include: {
      alergias: { select: { id: true, alergia: true } },
      medicamentos_actuales: {
        select: {
          id: true,
          medicamento: true,
          dosis: true,
          frecuencia: true,
          via_administracion: true,
        },
      },
      enfermedades: { select: { id: true, enfermedad: true } },
      historial_cirugias: {
        select: {
          id: true,
          cirugia: true,
          fecha: true,
          observaciones: true,
        },
      },
      consultas: {
        select: {
          id: true,
          fecha_consulta: true,
          tratamiento: true,
        },
      },
      tutores_legales: true,
      tipos_sangre: { select: { id: true, tipo: true } },
    },
  });

  if (!paciente) {
    return NextResponse.json({ error: "Paciente no encontrado" }, { status: 404 });
  }

  return NextResponse.json(paciente);
}
