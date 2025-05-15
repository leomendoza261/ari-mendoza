import Link from "next/link";

type Props = {
  sesion: Sesion;
};

type Sesion = {
  id: number;
  fecha_consulta: string;
  hora_consulta: string;
  motivo: string;
  diagnostico: string;
  tratamiento: string;
  pacientes: {
    nombre: string;
    apellido: string
  };
}

export default function SesionesRowResumido({sesion}: Props) {
    return (
        <>
            <td className="px-4 py-3">
                <Link href={`/dashboard/sesiones/${sesion.id}`}>
                    {sesion.id}
                </Link>
            </td>
            <td className="px-4 py-3">
                <Link href={`/dashboard/sesiones/${sesion.id}`}>
                    {sesion.pacientes.nombre} {sesion.pacientes.apellido}
                </Link>
            </td>
            <td className="px-4 py-3">
                <Link href={`/dashboard/sesiones/${sesion.id}`}>
                    {new Date(sesion.fecha_consulta).toLocaleDateString()} - {sesion.hora_consulta?.substring(11, 16)}hs
                </Link>
            </td>
        </>

    )
}