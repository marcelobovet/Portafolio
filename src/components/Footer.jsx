import { useState } from 'react';

export const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [spanText, setSpanText] = useState('Copiar');

  const copyToClipboard = () => {
    const email = 'marceloantoniobovet@gmail.com';
    navigator.clipboard.writeText(email);
    setCopied(true);
    setSpanText('Copiado');
    setTimeout(() => {
      setCopied(false);
      setSpanText('Copiar');
    }, 2000);
  };

  return (
    <>
      <div className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-5 mt-10 flex items-center gap-3">
        <h2 className="text-2xl font-bold text-indigo-400">Social</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          href="https://www.linkedin.com/in/marcelo-bovet-fuentes-b54247119/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="flex items-center gap-3 font-bold px-4 h-16 rounded-xl transition-shadow border border-gray-200 text-sky-600 hover:shadow-md hover:border-gray-300">
            Linkedin
          </button>
        </a>
        <a href="https://github.com/marcelobovet" target="_blank" rel="noreferrer">
          <button className="flex items-center gap-3 font-bold px-4 h-16 rounded-xl transition-shadow border border-gray-200 text-black hover:shadow-md hover:border-gray-300">
            Github
          </button>
        </a>
      </div>
      <section className="w-full">
        <h2 className="mt-10 mb-5 text-2xl font-bold text-indigo-400">Email</h2>
        <div className="flex gap-2">
          <input
            type="text"
            disabled=""
            className="bg-black/5 w-full py-1.5 px-3 rounded-lg grid place-items-center text-slate-600 "
            value="marceloantoniobovet@gmail.com"
          ></input>
          <div className="flex gap-2">
            <div className="btn-container relative">
              <a href="mailto:marceloantoniobovet@gmail.com" target="_blank" rel="noreferrer">
                <button className="flex bg-indigo-100 hover:bg-opacity-80 hover:dark:bg-opacity-90 text-indigo-500 py-2.5 px-4 rounded-lg">
                  Enviar
                </button>
              </a>
              <span className="info-span absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10 bg-white text-black px-2 py-1 rounded-md shadow-md opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100">
                Enviar
              </span>
            </div>
            <div className="btn-container relative">
              <button
                className="flex bg-indigo-100 hover:bg-opacity-80 hover:dark:bg-opacity-90 text-indigo-500 py-2.5 px-4 rounded-lg"
                onClick={copyToClipboard}
              >
                Copiar
              </button>
              <span
                className={`info-span absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10 bg-white text-black px-2 py-1 rounded-md shadow-md opacity-0 transition-opacity duration-300 pointer-events-none ${
                  copied ? 'opacity-100' : ''
                }`}
              >
                {spanText}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
