import { Suspense } from "react";
import { sql } from "@vercel/postgres";
import PacienteInfo from "./paciente";

export default async function Paciente() {
    const result = await sql`SELECT * FROM Pacientes`;
    const paciente = result.rows;

/*     const paciente = [
        {
            id: 1,
            dni: '1',
            nombre: new Date('2005-07-12T03:00:00.000Z'),
            apellido: "dolor de muela",
            tipo_sangre_id: "1",
            fecha_nacimiento: "Mon Jan 01 1990",
            numero_telefono: "3837654165464",
            email: "juan.perez@example.com",
            obra_social: "OSDE"
        }
    ] */

    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <PacienteInfo pacienteInfo={paciente}  />
        </Suspense>
    );
}