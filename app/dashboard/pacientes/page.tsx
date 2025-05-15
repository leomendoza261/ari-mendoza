import TablaPacientes from "@/app/ui/pacientes/table-pacientes";

export default async function Pacientes() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pacientes`, {
        cache: 'no-store', // importante para que se actualice siempre
    });

    if (!res.ok) {
        return <div>No se encontraron los pacientes.</div>;
    }

    const pacientes = await res.json();

    return (
        <TablaPacientes pacientes={pacientes} />
    );
}
