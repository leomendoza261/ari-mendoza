import TablaPacientes from "@/app/ui/pacientes/table-pacientes";
import { Suspense } from "react";
import { sql } from "@vercel/postgres";

export default async function Pacientes() {
    const result = await sql`SELECT * FROM Pacientes`;
    const pacientes = result.rows;

    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <TablaPacientes pacientes={pacientes}/>
        </Suspense>
    );
}
