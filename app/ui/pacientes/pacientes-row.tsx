import Link from "next/link";

export default function PacienteRow({ paciente }) {
    return (
      <>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${paciente.dni}`}>{paciente.dni}</Link>
        </td>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${paciente.dni}`}>{paciente.nombre}</Link>
        </td>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${paciente.dni}`}>{paciente.apellido}</Link>
        </td>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${paciente.dni}`}>{paciente.tipo_sangre}</Link>
        </td>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${paciente.dni}`}>
            {new Date(paciente.fecha_nacimiento).toLocaleDateString()}
          </Link>
        </td>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${paciente.dni}`}>{paciente.menor_edad ? "Sí" : "No"}</Link>
        </td>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${paciente.dni}`}>
            {paciente.tutor_legal_id ? `Tutor ${paciente.tutor_legal_id}` : "No asignado"}
          </Link>
        </td>
      </>
    );
  }