import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import LogoutIcon from "../icons/LogoutIcon";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />

        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        
        {/* Botón de cerrar sesión */}
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-red-100 p-3 text-sm font-medium hover:bg-red-100 hover:text-red-600 md:bg-gray-50 md:flex-none md:justify-start md:p-2 md:px-3">
            {/* Mostrar siempre el ícono de Logout */}
            <LogoutIcon size={4} strokeWidth={2}/>
            
            {/* Mostrar el texto solo en pantallas md o mayores */}
            <div className="hidden md:block">Cerrar Sesión</div>
          </button>
        </form>
      </div>
    </div>
  );
}
