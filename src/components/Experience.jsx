export const Experience = () => {
  return (
    <>
      <h1 className="mt-10  mb-5 text-2xl font-bold text-indigo-400">Experiencia</h1>
      <div>
        <h2 className="text-slate-700"> Jr Front-End Developer en ONG Surgencia</h2>
        <div className="text-gray-500 text-sm"> sep. 2023 - nov. 2023</div>
        <ul className="list-disc flex flex-col gap-2 ml-5 text-slate-700 text-md">
          <li className="ps-5 mt-2">Desarrollo de landing page desde 0 con ReactJs</li>
          <li className="ps-5">Panel de administración completo para gestión de contenido</li>
          <li className="ps-5">Login y gestion de usuarios </li>
          <li className="ps-5">Interfaz estilada con Bootstrap 5</li>
        </ul>
      </div>
      <div className="mt-5">
        <h2 className="text-slate-700"> Jr Front-End Developer en 3xi</h2>
        <div className="text-gray-500 text-sm"> dic. 2023 - mar. 2024</div>
        <ul className="list-disc flex flex-col gap-2 ml-5 text-slate-700  text-md">
          <li className="ps-5 mt-2">
            Desarrollo de landing page desde 0 para realización de encuetas con ReactJs
          </li>
          <li className="ps-5">Panel de administración para gestión completa del contenido</li>
          <li className="ps-5">Login y gestion de usuarios </li>
          <li className="ps-5">Gestión de estados con Zustand </li>
          <li className="ps-5">Interfaz visual estilada con TailwindCSS </li>
        </ul>
      </div>
    </>
  );
};
