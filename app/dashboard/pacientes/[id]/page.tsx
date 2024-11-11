import { Suspense } from "react";
import { sql } from "@vercel/postgres";
import PacienteInfo from "../../../ui/paciente/paciente";

export default async function Paciente(context) {
    const { id } = context.params;
    const result = await sql`
    SELECT 
        Pacientes.id AS paciente_id,
        Pacientes.dni,
        Pacientes.nombre,
        Pacientes.apellido,
        Pacientes.tipo_sangre_id,
        Tipos_sangre.tipo AS tipo_sangre,  -- Agregamos el tipo de sangre aquí
        Pacientes.fecha_nacimiento,
        Pacientes.numero_telefono,
        Pacientes.email,
        Pacientes.obra_social,
        Pacientes.tutor_legal_id,

        COALESCE(
            json_agg(
                json_build_object(
                    'consulta_id', Consultas.id,
                    'fecha_consulta', Consultas.fecha_consulta,
                    'hora_consulta', Consultas.hora_consulta,
                    'tratamiento', Consultas.tratamiento
                )
            ) FILTER (WHERE Consultas.id IS NOT NULL), '[]'
        ) AS consultas,

        COALESCE(
            json_agg(
                json_build_object(
                    'id', Alergias.id,
                    'alergia', Alergias.alergia
                )
            ) FILTER (WHERE Alergias.id IS NOT NULL), '[]'
        ) AS alergias,

        COALESCE(
            json_agg(
                json_build_object(
                    'id', Medicamentos_actuales.id,
                    'medicamento', Medicamentos_actuales.medicamento,
                    'dosis', Medicamentos_actuales.dosis,
                    'frecuencia', Medicamentos_actuales.frecuencia,
                    'via_administracion', Medicamentos_actuales.via_administracion
                )
            ) FILTER (WHERE Medicamentos_actuales.id IS NOT NULL), '[]'
        ) AS medicamentos,

        COALESCE(
            json_agg(
                json_build_object(
                    'id', Enfermedades.id,
                    'enfermedad', Enfermedades.enfermedad
                )
            ) FILTER (WHERE Enfermedades.id IS NOT NULL), '[]'
        ) AS enfermedades,

        COALESCE(
            json_agg(
                json_build_object(
                    'id', Historial_cirugias.id,
                    'cirugia', Historial_cirugias.cirugia,
                    'fecha', Historial_cirugias.fecha,
                    'observaciones', Historial_cirugias.observaciones
                )
            ) FILTER (WHERE Historial_cirugias.id IS NOT NULL), '[]'
        ) AS historial_cirugias,

        COALESCE(
            json_build_object(
                'id', Tutores_legales.id,
                'dni', Tutores_legales.dni,
                'nombre', Tutores_legales.nombre,
                'apellido', Tutores_legales.apellido,
                'telefono', Tutores_legales.telefono,
                'direccion', Tutores_legales.direccion
            )
        ) AS tutor_legal
    FROM 
        Pacientes
    LEFT JOIN 
        Consultas 
    ON 
        Pacientes.id = Consultas.paciente_id
    LEFT JOIN 
        Alergias 
    ON 
        Pacientes.id = Alergias.paciente_id
    LEFT JOIN 
        Medicamentos_actuales 
    ON 
        Pacientes.id = Medicamentos_actuales.paciente_id
    LEFT JOIN 
        Enfermedades 
    ON 
        Pacientes.id = Enfermedades.paciente_id
    LEFT JOIN 
        Historial_cirugias 
    ON 
        Pacientes.id = Historial_cirugias.paciente_id
    LEFT JOIN 
        Tutores_legales 
    ON 
        Pacientes.tutor_legal_id = Tutores_legales.id
    LEFT JOIN 
        Tipos_sangre  -- Agregamos el JOIN con Tipos_sangre
    ON 
        Pacientes.tipo_sangre_id = Tipos_sangre.id
    WHERE
        Pacientes.id = ${id}  -- Aquí filtramos por el ID del paciente
    GROUP BY 
        Pacientes.id, Tutores_legales.id, Tipos_sangre.tipo;  -- Incluimos Tipos_sangre en el GROUP BY
`;
    const paciente = result.rows[0]; // Deberías obtener el primer (y único) elemento

    /* console.log(paciente) */

    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <PacienteInfo pacienteInfo={paciente} />
        </Suspense>
    );
}