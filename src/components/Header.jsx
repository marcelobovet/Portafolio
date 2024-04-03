import Marcelo from '../assets/Marcelo.jpg';

export const Header = () => {
  return (
    <main className="flex flex-col sm:flex-row items-center gap-5">
      <div className="felx flex-col border-gray-500">
        <img
          src={Marcelo}
          alt="marcelo"
          className="rounded-full w-44 shadow-lg border-8 border-white "
        />
      </div>

      <div className="flex flex-col items-center sm:items-start gap-3">
        <div className="flex flex-col items-left gap-2">
          <h1 className="text-2xl sm:text-4xl text-center sm:text-left font-bold text-slate-600 ">
            Marcelo Bovet
          </h1>
          <p className="text-slate-700 text-sm sm:text-lg  max-w-xl rounded-2xl">
            Web Developer apasionado por la programación.
          </p>
        </div>

        <div className="flex flex-col items-start sm:flex-row sm:justify-start">
          <a download="CV Marcelo Bovet" href="./cv.pdf">
            <button className="flex items-center text-sm gap-3 bg-indigo-100 hover:bg-opacity-80 text-indigo-500 py-2 px-4 rounded-lg font-semibold">
              CV
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};
