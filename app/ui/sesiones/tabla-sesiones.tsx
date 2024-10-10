"use client";

import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import TablaSesionesCompleta from "./tabla-sesiones-completa";
import TablaSesionesResumida from "./tabla-sesiones-resumida";
import Link from "next/link";

type TablaConsultasProps = {
  sesiones: Sesion[];
};

export default async function TablaConsultas({ sesiones }: TablaConsultasProps) {

  return (
    <div className="w-full">
      <h1 className="mb-8 text-xl md:text-2xl">Consultas </h1>

      <div className='flex justify-between'>
        <Link
          href={"/dashboard/sesiones/agregarsesion"}
          className=" h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600"
        >
          Añadir consulta
        </Link>
        <div className="relative ml-2">
          <input
            type="date"
            className="block w-full rounded-md border border-gray-200 py-2 pl-10 pr-4 text-sm outline-none placeholder:text-gray-500"
            placeholder="Buscar por fecha"
          />
        </div>
      </div>
      

      <TablaSesionesCompleta sesiones={sesiones}/>
      <TablaSesionesResumida sesiones={sesiones}/>
    </div>
  );
}
