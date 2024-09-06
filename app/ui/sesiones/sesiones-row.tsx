import Link from "next/link";

export default function SesionRow({sesion}) {
    return(
        <>
                <td className="px-4 py-3">
                  <Link href={"http://localhost:3000/dashboard/sesiones/consulta"}>
                    {sesion.id}
                  </Link>
                </td>
                <td className="px-4 py-3">
                  <Link href={"http://localhost:3000/dashboard/sesiones/consulta"}>
                    {sesion.paciente_id}
                  </Link>
                </td>
                <td className="px-4 py-3">
                  <Link href={"http://localhost:3000/dashboard/sesiones/consulta"}>
                    {new Date(sesion.fecha_consulta).toLocaleDateString()}
                  </Link>
                </td>
                <td className="px-4 py-3">
                  <Link href={"http://localhost:3000/dashboard/sesiones/consulta"}>
                    {sesion.motivo}
                  </Link>
                </td>
                <td className="px-4 py-3">
                  <Link href={"http://localhost:3000/dashboard/sesiones/consulta"}>
                    {sesion.diagnostico}
                  </Link>
                </td>
                <td className="px-4 py-3">
                  <Link href={"http://localhost:3000/dashboard/sesiones/consulta"}>
                    {sesion.tratamiento}
                  </Link>
                </td>
              </>
    )
}