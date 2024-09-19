import Link from "next/link";

export default function PacienteRowResumido({ paciente }) {
    return (
      <>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${paciente.id}`}>{paciente.dni}</Link>
        </td>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${paciente.id}`}>{paciente.nombre}</Link>
        </td>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${paciente.id}`}>{paciente.apellido}</Link>
        </td>
      </>
    );
  }