import PacienteInfo from "../../../ui/paciente/paciente";

interface PacientePageProps {
  params: { id: string };
}

export default async function Paciente({ params }: PacientePageProps) {

    const { id } = await params

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pacientes/${id}`, {
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
