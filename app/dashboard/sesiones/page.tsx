import TablaConsultas from "@/app/ui/sesiones/tabla-sesiones";

export default async function Sesiones() {
   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/consultas`, {
        cache: 'no-store', // importante para que se actualice siempre
    });

    if (!res.ok) {
        return <div>No se encontraron los pacientes.</div>;
    }

    const consultas = await res.json();

    console.log(consultas)

    return (
            <TablaConsultas sesiones={consultas}/>
    );
}
 