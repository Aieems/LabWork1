import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

function Menu() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="mb-2 flex items-center gap-6 p-4">
      <NavLink to="/" end className={({ isActive }) => ['transition-colors duration-200 px-1',
            theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-800',
            isActive && 'text-primary font-bold'].filter(Boolean).join(' ')}>
        Главная
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) => ['transition-colors duration-200 px-1', theme === 'dark'
              ? 'text-white hover:text-gray-300'
              : 'text-black hover:text-gray-800',
            isActive && 'text-primary font-bold'].filter(Boolean).join(' ')}>
        Корзина
      </NavLink>
      <button
        onClick={toggleTheme}
        className={`ml-auto px-4 py-2 rounded ${
          theme === 'dark'
            ? 'bg-[#9747FF] text-gray-900 hover:bg-[#6225b1]'
            : 'bg-[#fd93ff] text-white hover:bg-[#c756d4]'
        } transition-colors duration-200`}>
        Переключить тему ({theme})
      </button>
    </nav>
  );
}

export default Menu;