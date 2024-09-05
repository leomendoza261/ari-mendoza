import Link from "next/link";

export default function PacienteRowResumido({ paciente }) {
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
      </>
    );
  }