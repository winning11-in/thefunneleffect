import React from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center space-x-1 bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-md transition-all duration-200 ${
          theme === 'light'
            ? 'bg-white dark:bg-gray-600 shadow-md text-yellow-500'
            : 'text-gray-500 hover:text-yellow-500 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
        title="Light mode"
      >
        <Sun size={16} />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-md transition-all duration-200 ${
          theme === 'system'
            ? 'bg-white dark:bg-gray-600 shadow-md text-blue-500'
            : 'text-gray-500 hover:text-blue-500 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
        title="System mode"
      >
        <Monitor size={16} />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-md transition-all duration-200 ${
          theme === 'dark'
            ? 'bg-white dark:bg-gray-600 shadow-md text-purple-500'
            : 'text-gray-500 hover:text-purple-500 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
        title="Dark mode"
      >
        <Moon size={16} />
      </button>
    </div>
  )
}