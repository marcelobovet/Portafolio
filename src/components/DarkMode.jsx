import { useEffect, useState } from 'react';

import { FcCrystalOscillator } from 'react-icons/fc';
import { FcIdea } from 'react-icons/fc';

export const DarkMode = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="flex justify-end items-center text-black mt-3">
      <button onClick={handleChangeTheme}>
        {theme === 'light' ? <FcCrystalOscillator size={28} /> : <FcIdea size={28} />}
      </button>
    </div>
  );
};
