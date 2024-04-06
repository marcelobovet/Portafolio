import { FaBriefcase } from 'react-icons/fa6';

export const Experience = () => {
  return (
    <div className="mt-10">
      <div className="flex text-2xl font-bold dark:text-white text-indigo-400 mb-5">
        <h1 className="me-3 ">Experiencia</h1>
        <div className="flex items-center">
          <FaBriefcase size={28} />
        </div>
      </div>
      <div>
        <h2 className="text-slate-700 dark:text-white"> Jr Front-End Developer en ONG Surgencia</h2>
        <div className="text-gray-500 dark:text-gray-400 text-sm"> sep. 2023 - nov. 2023</div>
        <ul className="list-disc flex flex-col gap-2 ml-5 text-slate-700 text-md dark:text-white">
          <li className="ps-5 mt-2">Desarrollo de landing page desde 0 con ReactJs</li>
          <li className="ps-5">Panel de administración completo para gestión de contenido</li>
          <li className="ps-5">Login y gestion de usuarios </li>
          <li className="ps-5">Interfaz estilada con Bootstrap 5</li>
        </ul>
      </div>
      <div className="mt-5">
        <h2 className="text-slate-700 dark:text-white"> Jr Front-End Developer en 3xi</h2>
        <div className="text-gray-500 dark:text-gray-400 text-sm"> dic. 2023 - mar. 2024</div>
        <ul className="list-disc flex flex-col gap-2 ml-5 text-slate-700  text-md dark:text-white">
          <li className="ps-5 mt-2">
            Desarrollo de landing page desde 0 para realización de encuetas con ReactJs
          </li>
          <li className="ps-5">Panel de administración para gestión completa del contenido</li>
          <li className="ps-5">Login y gestion de usuarios </li>
          <li className="ps-5">Gestión de estados con Zustand </li>
          <li className="ps-5">Interfaz visual estilada con TailwindCSS </li>
        </ul>
      </div>
    </div>
  );
};
