import Link from "next/link";

export default function SesionesRowResumido({sesion}) {
    return (
        <>
            <td className="px-4 py-3">
                <Link href={`/dashboard/sesiones/${sesion.id}`}>
                    {sesion.id}
                </Link>
            </td>
            <td className="px-4 py-3">
                <Link href={`/dashboard/sesiones/${sesion.id}`}>
                    {sesion.paciente_id}
                </Link>
            </td>
            <td className="px-4 py-3">
                <Link href={`/dashboard/sesiones/${sesion.id}`}>
                    {new Date(sesion.fecha_consulta).toLocaleDateString()}
                </Link>
            </td>
        </>

    )
}