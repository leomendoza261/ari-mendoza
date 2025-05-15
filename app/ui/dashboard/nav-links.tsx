// Importar íconos
import CalendarIcon from "../icons/CalendarIcon";
import SesionesIcon from "../icons/SesionesIcon";
import PacientesIcon from "../icons/pacientesIcon";

// Definir los links con logo e ícono
const links = [
  { name: 'Home', href: '/dashboard', logo: <CalendarIcon strokeWidth={2}/> },
  { name: 'Sesiones', href: '/dashboard/sesiones', logo: <SesionesIcon strokeWidth={2}/> },
  { name: 'Pacientes', href: '/dashboard/pacientes', logo: <PacientesIcon strokeWidth={2}/> },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <a
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            {/* Mostrar siempre el logo */}
            <span>{link.logo}</span>

            {/* Mostrar el nombre solo en pantallas md o mayores */}
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
