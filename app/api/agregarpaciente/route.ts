// app/api/pacientes/route.ts
import { NextResponse } from 'next/server'
import { PrismaClient } from '@/generated/prisma'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const {
      nombre,
      apellido,
      dni,
      fecha_nacimiento,
      numero_telefono,
      email,
      obra_social,
      tipo_sangre_id,
      alergias = [],
      enfermedades = [],
      medicamentos = [],
      cirugias_previas = [],
    } = data

    const nuevoPaciente = await prisma.pacientes.create({
      data: {
        nombre,
        apellido,
        dni,
        fecha_nacimiento: new Date(fecha_nacimiento),
        numero_telefono,
        email,
        obra_social,
        tipo_sangre_id,
        alergias: {
          create: Array.isArray(alergias)
            ? alergias.map((item: any) => ({ alergia: item.alergia }))
            : [],
        },
        enfermedades: {
          create: Array.isArray(enfermedades)
            ? enfermedades.map((enfermedad: string) => ({ enfermedad }))
            : [],
        },

        medicamentos_actuales: {
          create: Array.isArray(medicamentos)
            ? medicamentos.map((med: any) => ({
              medicamento: med.medicamento,
              dosis: med.dosis,
              frecuencia: med.frecuencia,
              via_administracion: med.via_administracion,
            }))
            : [],
        },

        historial_cirugias: {
          create: Array.isArray(cirugias_previas)
            ? cirugias_previas.map((cirugia: any) => ({
              cirugia: cirugia.cirugia,
              fecha: new Date(cirugia.fecha),
              observaciones: cirugia.observaciones,
            }))
            : [],
        },
      },
    })

    return NextResponse.json(nuevoPaciente)
  } catch (error) {
    console.error('Error al añadir paciente:', error)
    return new NextResponse('Error interno del servidor', { status: 500 })
  }
}
