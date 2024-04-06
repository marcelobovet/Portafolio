import { FaBookOpenReader } from 'react-icons/fa6';
import { FaBootstrap } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiReactquery } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import SurgenciaScreeshot from '../assets/SurgenciaScreeshot.png';
import { Tooltip } from 'react-tooltip';
import Tresxi from '../assets/Tresxi.png';

export const Projects = () => {
  return (
    <div className="mt-10">
      <div className="flex text-2xl font-bold dark:text-white text-indigo-400 mb-5">
        <h1 className="me-3 ">Proyectos</h1>
        <div className="flex items-center">
          <FaBookOpenReader size={28} />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="grid gap-10">
          <article className="grid gap-4 sm:gap-7 md:grid-cols-2 group">
            <a href="https://surgenciaong.cl/" target="_blank" rel="noreferrer">
              <div className="relative rounded-xl overflow-hidden flex bg-indigo-100 border-rounded">
                <img
                  src={SurgenciaScreeshot}
                  alt="SurgenciaScreeshot"
                  className="imgPoject border-rounded"
                />
              </div>
            </a>
            <div className="flex flex-col gap-2.5 justify-center ">
              <h3 className="font-bold text-3xl text-slate-800 dark:text-white">Surgencia</h3>
              <p className="text-slate-600 text-lg dark:text-white">
                Puedes entrar para conocer sobre el proyecto y la ONG
              </p>
              <div className="flex gap-2 items-center mb-1">
                <div className="bg-black js">
                  <IoLogoJavascript size={28} color="yellow" />
                </div>
                <Tooltip anchorSelect=".js" place="top" className="tooltip" opacity={1}>
                  JavaScript
                </Tooltip>
                <div className="react">
                  <FaReact size={28} color="skyblue" />
                </div>
                <Tooltip anchorSelect=".react" place="top" className="tooltip" opacity={1}>
                  React
                </Tooltip>
                <div className="bootstrap">
                  <FaBootstrap size={28} color="purple" />
                </div>
                <Tooltip anchorSelect=".bootstrap" place="top" className="tooltip" opacity={1}>
                  BootStrap
                </Tooltip>
                <div className="bg-black"></div>
              </div>
              <div className="flex justify-start gap-3">
                <a href="https://laboratoriocivico.vercel.app/" target="_blank" rel="noreferrer">
                  <button className="bg-slate-900  dark:bg-white px-4 py-2 rounded-xl text-white  dark:text-black text-xl font-bold flex justify-center items-center w-full transition-all hover:scale-105">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </article>
          <article className="grid gap-4 sm:gap-7 md:grid-cols-2 group"></article>
          <article className="grid gap-4 sm:gap-7 md:grid-cols-2 group">
            <a href="https://laboratoriocivico.vercel.app/" target="_blank" rel="noreferrer">
              <div className="relative rounded-xl overflow-hidden flex bg-indigo-100 border-rounded">
                <img src={Tresxi} alt="SurgenciaScreeshot" className="imgPoject border-rounded" />
              </div>
            </a>
            <div className="flex flex-col gap-2.5 justify-center">
              <h3 className="font-bold text-3xl text-slate-800 dark:text-white">3xi </h3>
              <p className="text-slate-600 text-lg dark:text-white">
                Al no ser la versión definitiva antes realizar el formulario dale unos minutos para
                que se cargue el back
              </p>
              <div className="flex gap-2 items-center mb-1">
                <div className="flex gap-2 items-center mb-1">
                  <div className="bg-black js">
                    <IoLogoJavascript size={28} color="yellow" />
                  </div>
                  <Tooltip anchorSelect=".js" place="top" className="tooltip" opacity={1}>
                    JavaScript
                  </Tooltip>
                  <div className="react">
                    <FaReact size={28} color="skyblue" />
                  </div>
                  <Tooltip anchorSelect=".react" place="top" className="tooltip" opacity={1}>
                    React
                  </Tooltip>
                  <div className="tailwind">
                    <SiTailwindcss size={28} color="darkcyan" />
                  </div>
                  <Tooltip anchorSelect=".tailwind" place="top" className="tooltip" opacity={1}>
                    Tailwind
                  </Tooltip>
                  <div className="reactquery">
                    <SiReactquery size={28} color="orangered" />
                  </div>
                  <Tooltip anchorSelect=".reactquery" place="top" className="tooltip" opacity={1}>
                    React Query
                  </Tooltip>
                </div>
              </div>
              <div className="flex justify-start gap-3">
                <a href="https://laboratoriocivico.vercel.app/" target="_blank" rel="noreferrer">
                  <button className="bg-slate-900  dark:bg-white px-4 py-2 rounded-xl text-white  dark:text-black text-xl font-bold flex justify-center items-center w-full transition-all hover:scale-105">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </article>
          <article className="grid gap-4 sm:gap-7 md:grid-cols-2 group"></article>
        </div>
      </div>
    </div>
  );
};
