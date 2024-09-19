import AgregarSesion from "@/app/ui/sesiones/agregar-sesiones";
import { Suspense } from "react";



export default async function AgregarSesionPage() {
    
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <AgregarSesion />
        </Suspense>
    );
}