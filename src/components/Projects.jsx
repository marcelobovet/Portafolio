import SurgenciaScreeshot from '../assets/SurgenciaScreeshot.png';
import Tresxi from '../assets/Tresxi.png';

export const Projects = () => {
  return (
    <>
      <div className="mt-10 mb-5 text-2xl font-bold text-indigo-400">Proyectos</div>
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
              <h3 className="font-bold text-3xl text-slate-800">Surgencia</h3>
              <p className="text-slate-600 text-lg">
                Puedes entrar para conocer sobre el proyecto y la ONG
              </p>
              <div className="flex gap-2 items-center mb-1">iconos</div>
              <div className="flex justify-start gap-3">
                <a href="https://laboratoriocivico.vercel.app/" target="_blank" rel="noreferrer">
                  <button className="bg-slate-900 px-4 py-2 rounded-xl text-white text-xl font-bold flex justify-center items-center w-full transition-all hover:scale-105">
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
            <div className="flex flex-col gap-2.5 justify-center ">
              <h3 className="font-bold text-3xl text-slate-800">3xi </h3>
              <p className="text-slate-600 text-lg">
                Al no ser la versión definitiva antes realizar el formulario dale unos minutos para
                que se cargue el back
              </p>
              <div className="flex gap-2 items-center mb-1">iconos</div>
              <div className="flex justify-start gap-3">
                <a href="https://laboratoriocivico.vercel.app/" target="_blank" rel="noreferrer">
                  <button className="bg-slate-900 px-4 py-2 rounded-xl text-white text-xl font-bold flex justify-center items-center w-full transition-all hover:scale-105">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </article>
          <article className="grid gap-4 sm:gap-7 md:grid-cols-2 group"></article>
        </div>
      </div>
    </>
  );
};
