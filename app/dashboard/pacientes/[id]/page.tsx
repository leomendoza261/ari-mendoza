import PacienteInfo from "../../../ui/paciente/paciente";

export default async function Paciente({ params }: { params: { id: string } }) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pacientes/${params.id}`, {
        cache: 'no-store', // importante para que se actualice siempre
    });

    if (!res.ok) {
        return <div>No se encontró el paciente.</div>;
    }

    const paciente = await res.json();

    return (
        <PacienteInfo paciente={paciente} />
    );
}
