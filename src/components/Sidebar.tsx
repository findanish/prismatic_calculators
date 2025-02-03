import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface SidebarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export function Sidebar({ darkMode, onToggleDarkMode }: SidebarProps) {
  const items = [
    'Prismatic Planks',
    'Prismatic Ingots',
    'Prismatic Cloth',
    'Prismatic Leather',
    'Prismatic Blocks'
  ];

  return (
    <div className="w-64 h-screen bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 p-4 fixed left-0 top-0">
      <div className="space-y-4">
        {items.map((item) => (
          <a
            key={item}
            href="#"
            className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors"
          >
            {item}
          </a>
        ))}
        <div className="px-4 py-2">
          <button
            onClick={onToggleDarkMode}
            className="flex items-center justify-center w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span className="ml-2">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}