import Link from "next/link";

type Paciente = {
  id: number;
  nombre: string;
  apellido: string;
  dni: string;
  fecha_nacimiento: string;
  tipos_sangre: {
    tipo: string
  } | null;
  tutores_legales: {
    nombre: string;
    apellido: string;
  } | null;
}

type Props = {
  paciente: Paciente;
};

export default function PacienteRow({ paciente }: Props) {

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
        <Link href={`/dashboard/pacientes/${paciente.id}`}>{paciente.tipos_sangre?.tipo || "Sin dato"}</Link>
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/pacientes/${paciente.id}`}>
          {new Date(paciente.fecha_nacimiento).toLocaleDateString()}
        </Link>
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/pacientes/${paciente.id}`}>
          {paciente.tutores_legales
            ? `Tutor ${paciente.tutores_legales.nombre, paciente.tutores_legales.apellido}`
            : "No asignado"}
        </Link>
      </td>
    </>
  );
}