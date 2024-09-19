import { Suspense } from "react";
import { sql } from "@vercel/postgres";
import TablaConsultas from "@/app/ui/sesiones/tabla-sesiones";

export default async function Sesiones() {
    const result = await sql`SELECT * FROM Consultas`;
    const consultas = result.rows;
 
   /*  const consultas = [
        {
            id: 1,
            paciente_id: '1',
            fecha_consulta: new Date('2005-07-12T03:00:00.000Z'),
            motivo: "dolor de muela",
            diagnostico: "se comio la torta",
            tratamiento: "ibuprofeno y casa"
        },
        {
            id: 2,
            paciente_id: '2',
            fecha_consulta: new Date('2005-07-12T03:00:00.000Z'),
            motivo: "dolor de muela",
            diagnostico: "se comio la torta",
            tratamiento: "ibuprofeno y casa"
        }
    ] */

    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <TablaConsultas sesiones={consultas}/>
        </Suspense>
    );
}
