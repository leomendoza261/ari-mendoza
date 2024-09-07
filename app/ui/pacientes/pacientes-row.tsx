import Link from "next/link";

export default function PacienteRow({ paciente }) {
    console.log(paciente)

    return ( 
      <>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${paciente.id}`}>{paciente.dni}</Link>
        </td>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${paciente.id}`}> {paciente.nombre} </Link>
        </td>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${paciente.id}`}>{paciente.apellido}</Link>
        </td>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${paciente.id}`}>{paciente.tipo_sangre}</Link>
        </td>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${paciente.id}`}>
            {new Date(paciente.fecha_nacimiento).toLocaleDateString()}
          </Link>
        </td>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${paciente.id}`}>{paciente.menor_edad ? "Sí" : "No"}</Link>
        </td>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${paciente.id}`}>
            {paciente.tutor_legal_id ? `Tutor ${paciente.tutor_legal_id}` : "No asignado"}
          </Link>
        </td>
      </>
    );
  }