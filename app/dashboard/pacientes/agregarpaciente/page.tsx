import AgregarPaciente from "@/app/ui/pacientes/agregar-pacientes";
import { Suspense } from "react";


export default async function AgregarPacientePage() {

    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <AgregarPaciente />
        </Suspense>
    );
}