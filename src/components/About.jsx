import { FaUser } from 'react-icons/fa';

export const About = () => {
  return (
    <div className="mt-10">
      <div className="flex text-2xl font-bold dark:text-white text-indigo-400 mb-5">
        <h1 className="me-3 ">Sobre mi</h1>
        <div className="flex items-center">
          <FaUser size={28} />
        </div>
      </div>
      <div className="text-slate-700 text-md dark:text-white">
        Hola! Soy Marcelo, kinesiólogo de profesión con 3+ años de experiencia en manejo de
        pacientes críticos. El año 2022 comencé con el camino en el desarrollo de software
        intentando perseguir mis sueños.
        <br></br>
        <br></br>
        Mi objetivo actual es seguir perfeccionándome en el mundo del desarrollo de software,
        adquiriendo nuevos desafíos y consolidando mi reconversión laboral en el desarrollo de
        software.
      </div>
    </div>
  );
};
