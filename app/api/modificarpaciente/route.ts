import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, ...fields } = body;

    if (!id) {
      return NextResponse.json({ error: "ID de paciente requerido" }, { status: 400 });
    }

    // 1. Actualizar campos simples
    const datosPaciente: any = {};
    const camposSimples = [
      "dni", "nombre", "apellido", "tipo_sangre_id", "fecha_nacimiento",
      "numero_telefono", "email", "obra_social", "tutor_legal_id"
    ];

    for (const campo of camposSimples) {
      if (fields[campo] !== undefined) {
        datosPaciente[campo] = fields[campo];
      }
    }

    if (Object.keys(datosPaciente).length > 0) {
      await prisma.pacientes.update({
        where: { id },
        data: datosPaciente
      });
    }

    // 2. Actualizar, agregar o eliminar registros relacionados

    // ---- ALERGIAS ----
    if (fields.alergias) {
      for (const alergia of fields.alergias) {
        if (alergia.id) {
          await prisma.alergias.update({
            where: { id: alergia.id },
            data: { alergia: alergia.alergia }
          });
        } else {
          await prisma.alergias.create({
            data: { alergia: alergia.alergia, paciente_id: id }
          });
        }
      }
    }

    if (fields.alergias_eliminar) {
      await prisma.alergias.deleteMany({
        where: { id: { in: fields.alergias_eliminar }, paciente_id: id }
      });
    }

    // ---- ENFERMEDADES ----
    if (fields.enfermedades) {
      for (const enf of fields.enfermedades) {
        if (enf.id) {
          await prisma.enfermedades.update({
            where: { id: enf.id },
            data: { enfermedad: enf.enfermedad }
          });
        } else {
          await prisma.enfermedades.create({
            data: { enfermedad: enf.enfermedad, paciente_id: id }
          });
        }
      }
    }

    if (fields.enfermedades_eliminar) {
      await prisma.enfermedades.deleteMany({
        where: { id: { in: fields.enfermedades_eliminar }, paciente_id: id }
      });
    }

    // ---- MEDICAMENTOS ----
    if (fields.medicamentos_actuales) {
      for (const med of fields.medicamentos_actuales) {
        const dataMed = {
          medicamento: med.medicamento,
          dosis: med.dosis,
          frecuencia: med.frecuencia,
          via_administracion: med.via_administracion,
        };
        if (med.id) {
          await prisma.medicamentos_actuales.update({
            where: { id: med.id },
            data: dataMed
          });
        } else {
          await prisma.medicamentos_actuales.create({
            data: { ...dataMed, paciente_id: id }
          });
        }
      }
    }

    if (fields.medicamentos_actuales_eliminar) {
      await prisma.medicamentos_actuales.deleteMany({
        where: { id: { in: fields.medicamentos_actuales_eliminar }, paciente_id: id }
      });
    }

    // ---- CIRUGÍAS ----
    if (fields.historial_cirugias) {
      for (const cirugia of fields.historial_cirugias) {
        const dataCir = {
          cirugia: cirugia.cirugia,
          fecha: cirugia.fecha ? new Date(cirugia.fecha) : undefined,
          observaciones: cirugia.observaciones
        };

        if (cirugia.id) {
          await prisma.historial_cirugias.update({
            where: { id: cirugia.id },
            data: dataCir
          });
        } else {
          await prisma.historial_cirugias.create({
            data: { ...dataCir, paciente_id: id }
          });
        }
      }
    }

    if (fields.historial_cirugias_eliminar) {
      await prisma.historial_cirugias.deleteMany({
        where: { id: { in: fields.historial_cirugias_eliminar }, paciente_id: id }
      });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Error al modificar paciente:", error);
    return NextResponse.json({ error: "Error al modificar paciente" }, { status: 500 });
  }
}
