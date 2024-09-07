import { Suspense } from "react";
import { sql } from "@vercel/postgres";
import ConsultaInfo from "@/app/ui/sesion/consultaInfo";

export default async function Sesion() {
    const result = await sql`
        SELECT 
        c.id,
        p.nombre, 
        p.apellido, 
        c.fecha_consulta, 
        c.hora_consulta, 
        c.motivo, 
        c.diagnostico, 
        c.tratamiento, 
        c.imagenes,
        c.notas
    FROM 
        pacientes p
    JOIN 
        consultas c
    ON 
        p.id = c.paciente_id
    ORDER BY 
        c.fecha_consulta DESC;`;
    const sesion = result.rows;
    console.log(sesion)

    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <ConsultaInfo sesion={sesion} />
        </Suspense>
    );
}