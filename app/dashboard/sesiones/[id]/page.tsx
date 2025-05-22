import ConsultaInfo from "@/app/ui/sesion/consultaInfo";

interface SesionPageProps {
  params: { id: string };
}

export default async function Sesion({ params }: SesionPageProps) {

  const { id } = await params

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/consultas/${id}`, {
    cache: 'no-store', // importante para que se actualice siempre
  });

  if (!res.ok) {
    return <div>Error al cargar la consulta.</div>;
  }

  const sesion = await res.json();

  return <ConsultaInfo sesion={sesion} />;
}
