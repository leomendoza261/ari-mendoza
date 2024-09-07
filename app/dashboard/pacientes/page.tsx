import TablaPacientes from "@/app/ui/pacientes/table-pacientes";
import { Suspense } from "react";
import { sql } from "@vercel/postgres";

export default async function Pacientes() {
    /* const result = await sql`SELECT * FROM Pacientes`;
    const pacientes = result.rows; */

    const pacientes = [
        {
            id: 1,
            nombre: 'leo',
            fecha_consulta: new Date('2005-07-12T03:00:00.000Z'),
            apellido: "dolor de muela",
            diagnostico: "se comio la torta",
            tratamiento: "ibuprofeno y casa"
        }
    ]

    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <TablaPacientes pacientes={pacientes}/>
        </Suspense>
    );
}
